import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'admin@lrsdindia.com';
    const fromEmail = process.env.SMTP_FROM || `LRSD Inquiries <${user || 'admin@lrsdindia.com'}>`;

    if (!user || !pass) {
      console.error('SMTP configuration missing: SMTP_USER or SMTP_PASS not set in .env.local');
      return NextResponse.json(
        {
          error: 'SMTP email server is not fully configured.',
          details: 'Please ensure SMTP_USER and SMTP_PASS are set in .env.local.',
        },
        { status: 500 }
      );
    }

    // Escape HTML to prevent injection in email body
    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeProduct = escapeHtml(product || 'General Inquiry');
    const safeTicketSize = escapeHtml(ticketSize || 'Not specified');
    const safeMessage = message ? escapeHtml(message).replace(/\n/g, '<br />') : 'None provided';

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Credit Inquiry</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f5f7; padding: 30px 15px;">
            <tr>
              <td align="center">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #0F1932; padding: 28px 32px; text-align: left; border-bottom: 4px solid #E8621A;">
                      <div style="font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #E8621A; margin-bottom: 6px;">
                        Direct Credit Desk &bull; Confidential Inquiry
                      </div>
                      <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; line-height: 1.3;">
                        New Inquiry: ${safeProduct}
                      </h1>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 32px;">
                      <p style="font-size: 14px; color: #64748b; margin: 0 0 24px 0; line-height: 1.6;">
                        A new credit facility inquiry was submitted via the LRSD Website conversation portal.
                      </p>

                      <!-- Key Highlights Box -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                        <tr>
                          <td style="padding: 18px 20px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="6">
                              <tr>
                                <td width="35%" style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Applicant Name:</td>
                                <td width="65%" style="font-size: 14px; font-weight: 700; color: #0F1932;">${safeName}</td>
                              </tr>
                              <tr>
                                <td style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Company / Entity:</td>
                                <td style="font-size: 14px; font-weight: 700; color: #0F1932;">${safeCompany}</td>
                              </tr>
                              <tr>
                                <td style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Credit Facility:</td>
                                <td style="font-size: 14px; font-weight: 700; color: #E8621A;">${safeProduct}</td>
                              </tr>
                              <tr>
                                <td style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Ticket Size:</td>
                                <td style="font-size: 14px; font-weight: 700; color: #0F1932;">${safeTicketSize}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Contact Details Section -->
                      <h2 style="font-size: 13px; font-weight: 800; color: #0F1932; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">
                        Direct Contact Information
                      </h2>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border: 1px solid #edf2f7; border-radius: 8px; margin-bottom: 24px;">
                        <tr>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #edf2f7; font-size: 13px; color: #475569;">
                            <strong>Work Email:</strong> <a href="mailto:${safeEmail}" style="color: #E8621A; text-decoration: none; font-weight: 600;">${safeEmail}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 16px; font-size: 13px; color: #475569;">
                            <strong>Phone Number:</strong> <a href="tel:${safePhone}" style="color: #0F1932; text-decoration: none; font-weight: 600;">${safePhone}</a>
                          </td>
                        </tr>
                      </table>

                      <!-- Note/Message Section -->
                      <h2 style="font-size: 13px; font-weight: 800; color: #0F1932; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">
                        Applicant Note / Collateral Context
                      </h2>
                      <div style="background-color: #fafaf9; border-left: 3px solid #E8621A; padding: 14px 16px; font-size: 13px; color: #334155; line-height: 1.6; border-radius: 0 8px 8px 0; margin-bottom: 28px;">
                        ${safeMessage}
                      </div>

                      <!-- Action Button -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="center">
                            <a href="mailto:${safeEmail}?subject=Re:%20Inquiry%20regarding%20${encodeURIComponent(safeProduct)}%20-%20LRSD%20Capital" 
                               style="display: inline-block; background-color: #0F1932; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; padding: 12px 24px; border-radius: 8px;">
                              Reply Directly to ${safeName}
                            </a>
                          </td>
                        </tr>
                      </table>

                      <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; font-size: 11px; color: #94a3b8; text-align: center;">
                        Received on ${timestamp} IST &bull; LRSD Capital Web Portal
                      </div>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const isGmail = host.includes('gmail') || host.includes('google');

    // Create Transporter with fallback
    let transporter;
    if (isGmail) {
      // Use Nodemailer built-in Gmail service to prevent port/SSL blocks
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user,
          pass,
        },
        connectionTimeout: 15000,
        greetingTimeout: 10000,
        socketTimeout: 20000,
      });
    } else {
      transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass,
        },
        connectionTimeout: 15000,
        greetingTimeout: 10000,
        socketTimeout: 20000,
      });
    }

    const info = await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[New Inquiry] ${safeCompany} - ${safeProduct} (${safeTicketSize})`,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error: any) {
    console.error('SMTP email dispatch error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to dispatch email inquiry via SMTP.' },
      { status: 500 }
    );
  }
}
