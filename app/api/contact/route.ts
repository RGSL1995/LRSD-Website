import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, product, ticketSize, message } = body;

    // Basic validation
    if (!name || !email || !phone || !company) {
      return NextResponse.json(
        { error: 'Please provide all required fields (Name, Email, Phone, Company).' },
        { status: 400 }
      );
    }

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.WEB3FORMS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY is missing in environment variables.');
      return NextResponse.json(
        {
          error: 'Web3Forms Access Key is missing in container environment.',
          details: 'Please generate a key at https://web3forms.com and add WEB3FORMS_ACCESS_KEY to your container environment variables.',
        },
        { status: 500 }
      );
    }

    const safeProduct = product || 'General Inquiry';
    const safeTicketSize = ticketSize || 'Not specified';
    const safeMessage = message || 'None provided';

    // Format human-readable message block for email body
    const formattedContent = `
=== NEW CREDIT INQUIRY DETAILS ===
• Applicant Name: ${name}
• Company / Entity: ${company}
• Credit Facility: ${safeProduct}
• Ticket Size / Requirement: ${safeTicketSize}
• Work Email: ${email}
• Phone Number: ${phone}

• Collateral / Applicant Note:
${safeMessage}
==================================
`;

    // Dispatch via Web3Forms HTTPS API (Port 443)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; LRSD-Credit-Desk/1.0)',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[New Inquiry] ${company} - ${safeProduct} (${safeTicketSize})`,
        from_name: 'LRSD Capital Direct Desk',
        name: name,
        email: email,
        phone: phone,
        company: company,
        facility_requested: safeProduct,
        ticket_size: safeTicketSize,
        notes: safeMessage,
        message: formattedContent,
        replyto: email,
      }),
    });

    const rawResponseText = await response.text();
    let result: any = null;
    try {
      result = JSON.parse(rawResponseText);
    } catch {
      console.error('Received non-JSON response from Web3Forms:', rawResponseText);
      return NextResponse.json(
        {
          error: 'Invalid response from email service provider.',
          details: 'Please check that your WEB3FORMS_ACCESS_KEY is valid and activated.',
        },
        { status: 502 }
      );
    }

    if (!response.ok || !result.success) {
      console.error('Web3Forms API error response:', result);
      return NextResponse.json(
        { error: result.message || 'Failed to dispatch inquiry via Web3Forms.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully.',
    });
  } catch (error: any) {
    console.error('Unexpected error in contact API route:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to dispatch email inquiry.' },
      { status: 500 }
    );
  }
}
