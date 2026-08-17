# shadcn/ui & Magic UI Component Usage Guide

## ✅ Components Installed & Ready to Use

### 1. **Button Component**
Premium button with multiple variants and sizes.

**Import:**
```tsx
import { Button } from '@/components/ui/button';
```

**Usage Examples:**
```tsx
// Default (Orange)
<Button>Click Me</Button>

// Different Variants
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Different Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>

// With Icons
<Button>
  <ArrowRight className="w-4 h-4" />
  Explore solutions
</Button>

// With Motion
<motion.div whileHover={{ scale: 1.05 }}>
  <Button size="lg" className="rounded-full">
    Start Conversation
  </Button>
</motion.div>
```

---

### 2. **Card Components**
Beautiful card wrapper with header, title, description, content, and footer.

**Import:**
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
```

**Usage Examples:**
```tsx
// Basic Card
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>

// Vision/Mission Card
<Card>
  <CardHeader>
    <Badge variant="default">VISION</Badge>
  </CardHeader>
  <CardContent>
    <CardTitle>A specialist credit institution for Indian enterprise.</CardTitle>
  </CardContent>
</Card>

// Product Card with Motion
<motion.div whileHover={{ y: -4 }}>
  <Card>
    <CardHeader>
      <CardTitle>Loan Against Securities</CardTitle>
    </CardHeader>
    <CardContent>
      Fast, efficient capital for securities holders
    </CardContent>
  </Card>
</motion.div>
```

---

### 3. **Badge Component**
Status/label badges with multiple variants.

**Import:**
```tsx
import { Badge } from '@/components/ui/badge';
```

**Usage Examples:**
```tsx
// Variants
<Badge variant="default">New</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Error</Badge>

// In Headers
<CardHeader>
  <Badge variant="default">01</Badge>
  <CardTitle>Title</CardTitle>
</CardHeader>
```

---

### 4. **Input Component**
Enhanced form input with smooth focus states.

**Import:**
```tsx
import { Input } from '@/components/ui/input';
```

**Usage Examples:**
```tsx
// Basic Input
<Input placeholder="Enter email" />

// Email Input
<Input type="email" placeholder="your@email.com" />

// In Form
<div className="flex flex-col gap-3">
  <Input placeholder="Your email address" />
  <Button>Sign up</Button>
</div>
```

---

### 5. **Gradient Text (Magic UI)**
Premium gradient text effects with optional animation.

**Import:**
```tsx
import { GradientText, ShinyText } from '@/components/magic/gradient-text';
```

**Usage Examples:**
```tsx
// Gradient Text
<h2 className="text-5xl font-bold">
  To be the most <GradientText>respected name</GradientText> in Indian lending.
</h2>

// Without Animation
<GradientText animate={false}>Premium Text</GradientText>

// Shiny Text
<h1>
  Welcome to <ShinyText>LRSD Capital</ShinyText>
</h1>

// Custom Styling
<GradientText className="text-4xl font-bold">
  Custom Gradient
</GradientText>
```

---

## 🎨 Recommended Updates for Maximum Impact

### High-Impact Updates (Do These First):

1. **Hero Section Headlines**
   - Add `<GradientText>` to key phrases in h1/h2 headings
   - Replace existing button with `<Button>` component

2. **Vision & Mission Cards**
   - Replace `div.bg-white` with `<Card>` component
   - Replace badge div with `<Badge>` component

3. **Product Cards (Structured Credit Section)**
   - Replace all card divs with `<Card>` components
   - Use `<CardTitle>` and `<CardContent>`

4. **Footer Form**
   - Replace `<input>` with `<Input>` component
   - Replace button with `<Button>` variant="default"

5. **CTA Sections**
   - Replace gradient divs with `<Card>` and gradient background
   - Use `<Button>` for all CTAs

6. **Commitment Cards (L-R-S-D Section)**
   - Replace card divs with `<Card>` component
   - Use `<CardTitle>` and `<CardContent>`

---

## 🚀 Quick Migration Checklist

- [ ] All buttons → `<Button>` component
- [ ] All cards → `<Card>` component
- [ ] All form inputs → `<Input>` component
- [ ] All status badges → `<Badge>` component
- [ ] Key headings → Add `<GradientText>` accent
- [ ] Test all variants and sizes
- [ ] Verify responsive on mobile

---

## 💡 Pro Tips

1. **Combine with Framer Motion** for premium animations:
```tsx
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Button size="lg">Interactive Button</Button>
</motion.div>
```

2. **Chain Cards with Motion Variants** for staggered animations:
```tsx
{products.map((product, idx) => (
  <motion.div key={idx} variants={item} whileHover={{ y: -4 }}>
    <Card>...</Card>
  </motion.div>
))}
```

3. **Use Badge in Card Headers** for visual interest:
```tsx
<CardHeader>
  <Badge variant="default">01</Badge>
  <CardTitle>Title</CardTitle>
</CardHeader>
```

4. **Combine Gradient Text** with Large Headings:
```tsx
<h1 className="text-5xl font-bold">
  This is <GradientText className="text-5xl">Premium</GradientText> Text
</h1>
```

---

## 📦 What's Ready to Use

All components are installed and configured:
- ✅ shadcn/ui Button, Card, Input, Badge
- ✅ Magic UI Gradient Text & Shiny Text
- ✅ Utilities (cn for className merging)
- ✅ All components styled with your brand colors

---

## 🎯 Next Steps

1. Start with the **Hero Button** replacement
2. Update the **Vision & Mission cards**
3. Update **Footer CTA and inputs**
4. Add **Gradient Text** to key headings
5. Update remaining **cards and buttons**

Each update brings immediate visual improvement! 🚀
