# 🎯 Quick Setup Guide

## Step-by-Step Customization

### 1️⃣ Personal Information (5 minutes)

**File**: `src/constants/info.ts`

Update:
- ✅ Your name
- ✅ Job title
- ✅ Email address
- ✅ Phone number
- ✅ Location
- ✅ Bio/description
- ✅ Achievements
- ✅ Future goals

### 2️⃣ Social Links & WhatsApp (2 minutes)

**File**: `src/constants/social-links.ts`

Update:
- ✅ LinkedIn URL
- ✅ GitHub URL
- ✅ Twitter/X URL
- ✅ Portfolio URL
- ✅ WhatsApp number (format: +92XXXXXXXXXX without spaces)

### 3️⃣ Work Experience (10 minutes)

**File**: `src/constants/experience.ts`

For each job:
- ✅ Company name
- ✅ Job title
- ✅ Dates (format: 'YYYY-MM')
- ✅ Location
- ✅ Description
- ✅ Responsibilities (array)
- ✅ Achievements (array)
- ✅ Technologies used

### 4️⃣ Projects (15 minutes)

**File**: `src/constants/projects.ts`

For each project:
- ✅ Title
- ✅ Description
- ✅ Technologies used
- ✅ Demo URL (if available)
- ✅ GitHub URL (if available)
- ✅ Category
- ✅ Status
- ✅ Mark as featured (true/false)

**Add project images**:
- Place images in `public/images/projects/`
- Update `image` field with path: `/images/projects/your-image.jpg`

### 5️⃣ Skills (5 minutes)

**File**: `src/constants/skills.ts`

Update skills in each category:
- Frontend Development
- Backend Development
- Databases & ORMs
- DevOps & Containers
- Cloud Platforms
- Tools & Version Control

Set proficiency level:
- `'Beginner'`
- `'Intermediate'`
- `'Advanced'`
- `'Expert'`

### 6️⃣ Education (3 minutes)

**File**: `src/constants/education.ts`

Update:
- ✅ Degree
- ✅ Field of study
- ✅ Institution
- ✅ Dates
- ✅ Description
- ✅ Achievements

### 7️⃣ Certificates (5 minutes)

**File**: `src/constants/certificates.ts`

For each certificate:
- ✅ Title
- ✅ Issuer (Google, IBM, etc.)
- ✅ Issue date
- ✅ Credential URL
- ✅ Skills learned

### 8️⃣ Testimonials (Optional)

**File**: `src/constants/testimonials.ts`

Add real testimonials from:
- Clients
- Colleagues
- Managers
- LinkedIn recommendations

### 9️⃣ Blog Posts (Optional)

**File**: `src/constants/blog.ts`

Add your articles:
- ✅ Title
- ✅ Excerpt
- ✅ Publish date
- ✅ Tags
- ✅ Category
- ✅ LinkedIn URL (if applicable)

**Add blog images**:
- Place in `public/images/blog/`

### 🔟 Images Setup (10 minutes)

Create these folders in `public/images/`:
```
public/
└── images/
    ├── avatar.jpg              # Your profile photo
    ├── projects/               # Project screenshots
    │   ├── project1.jpg
    │   └── project2.jpg
    ├── blog/                   # Blog post covers
    │   ├── article1.jpg
    │   └── article2.jpg
    ├── certificates/           # Certificate images
    │   └── cert1.jpg
    └── testimonials/           # Client photos (optional)
        └── client1.jpg
```

**Image Guidelines**:
- Avatar: 400x400px, square
- Projects: 1200x600px, landscape
- Blog: 1200x630px, landscape
- Certificates: Any size
- Format: JPG or PNG
- Optimize images before uploading

### 1️⃣1️⃣ Resume/CV (2 minutes)

1. Place your resume PDF in `public/resume.pdf`
2. Update the path in `src/constants/info.ts`:
   ```typescript
   resumeUrl: '/resume.pdf'
   ```

### 1️⃣2️⃣ Translations (Optional)

**Files**: `src/locales/en.json` and `src/locales/ur.json`

If you want to customize the UI text:
- Edit English translations in `en.json`
- Edit Urdu translations in `ur.json`
- Add new translation keys as needed

### 1️⃣3️⃣ Theme Colors (Advanced)

**File**: `src/constants/themes.ts`

To add a new theme:
```typescript
{
  id: 'mytheme',
  name: 'My Theme',
  colors: {
    primary: '220 89% 61%',        // HSL format
    primaryForeground: '0 0% 100%',
    // ... other colors
  }
}
```

Use [HSL Color Picker](https://hslpicker.com/) to find colors.

## 🎨 Color Scheme Tips

### Modern Purple (Default)
- Professional and creative
- Good for tech/design portfolios

### Google Theme
- Energetic and recognizable
- Good for marketing/product roles

### Odoo Theme
- Bold and modern
- Good for startups/SaaS

### Creating Custom Themes
1. Choose a primary color
2. Choose a complementary accent color
3. Use online tools like [Coolors](https://coolors.co/) for palette generation
4. Convert RGB to HSL using [this converter](https://www.w3schools.com/colors/colors_converter.asp)

## 🚀 Testing Your Changes

After making changes:

1. **Check the dev server**:
   ```bash
   pnpm dev
   ```

2. **Open http://localhost:3000**

3. **Test**:
   - ✅ All sections load correctly
   - ✅ Theme switcher works
   - ✅ Language switcher works
   - ✅ WhatsApp button opens chat
   - ✅ All links work
   - ✅ Images load
   - ✅ Forms work
   - ✅ Mobile responsive

4. **Build for production**:
   ```bash
   pnpm build
   ```

## 📱 Mobile Testing

Test on different screen sizes:
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1440px

Use Chrome DevTools (F12) → Toggle device toolbar

## 🐛 Common Issues

### Images not loading
- Check file path is correct
- Ensure image is in `public/` folder
- Use forward slashes: `/images/photo.jpg`

### Theme not changing
- Clear browser cache
- Check browser console for errors
- Verify theme IDs match

### Translations not working
- Check JSON syntax is valid
- Ensure translation keys exist in both files
- Clear browser storage

## ✅ Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] All placeholder text replaced
- [ ] Images added and optimized
- [ ] Resume PDF uploaded
- [ ] WhatsApp number configured
- [ ] Social links updated
- [ ] Contact form tested
- [ ] All sections reviewed
- [ ] Mobile responsive checked
- [ ] Build succeeds (`pnpm build`)
- [ ] No console errors
- [ ] SEO meta tags updated in `layout.tsx`

## 🎉 You're Ready!

Your portfolio is now customized and ready to deploy!

Next steps:
1. Push to GitHub
2. Deploy to Vercel
3. Share your portfolio link
4. Update regularly with new projects

---

**Need help?** Check the main README.md or create an issue on GitHub.
