# 🚀 Modern Portfolio Website

A stunning, feature-rich portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and modern web technologies.

## ✨ Features

### 🎨 **Multi-Theme Support**
- 3 Beautiful color schemes: Modern Purple (default), Google, and Odoo
- Easy theme switching with persistent storage
- Dynamic CSS variable system for instant theme changes

### 🌍 **Internationalization (i18n)**
- Full English and Urdu language support
- RTL (Right-to-Left) support for Urdu
- Production-ready translation system
- Easy to add more languages

### 📱 **Responsive Design**
- Mobile-first approach
- Beautiful on all screen sizes
- Smooth animations and transitions

### 🎭 **Stunning Sections**
1. **Hero Section** - Eye-catching introduction with gradient text and social links
2. **About** - Personal bio, achievements, and future goals
3. **Experience** - Interactive timeline with work history
4. **Projects** - Showcase of featured projects with live demos
5. **Skills** - Categorized skills with proficiency levels
6. **Certificates** - Professional certifications display
7. **Testimonials** - Client reviews and recommendations
8. **Blog** - Articles and LinkedIn posts
9. **Roadmaps** - Learning paths for aspiring developers
10. **Contact** - Contact form with social links

### 🎯 **Special Features**
- **WhatsApp Floating Button** - Direct messaging integration
- **GSAP Animations** - Smooth scroll-triggered animations
- **Framer Motion** - Beautiful component animations
- **Theme Persistence** - Remembers user preferences
- **SEO Optimized** - Proper meta tags and Open Graph support

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: ShadCN UI
- **Animations**: GSAP, Framer Motion, Magic UI
- **State Management**: Zustand
- **Canvas Graphics**: Fabric.js (for roadmap visualizations)
- **Icons**: Lucide React

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Main page
│   │   └── globals.css        # Global styles with theme system
│   ├── components/            # React components
│   │   ├── sections/          # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── CertificatesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   ├── RoadmapsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── Navigation.tsx     # Main navigation
│   │   ├── Footer.tsx         # Footer component
│   │   ├── ThemeSwitcher.tsx  # Theme selector
│   │   ├── LanguageSwitcher.tsx # Language selector
│   │   └── WhatsAppButton.tsx # Floating WhatsApp button
│   ├── constants/             # Data constants
│   │   ├── info.ts           # Personal information
│   │   ├── education.ts      # Education data
│   │   ├── experience.ts     # Work experience
│   │   ├── projects.ts       # Projects showcase
│   │   ├── skills.ts         # Skills and expertise
│   │   ├── certificates.ts   # Certifications
│   │   ├── social-links.ts   # Social media links
│   │   ├── testimonials.ts   # Client testimonials
│   │   ├── blog.ts           # Blog posts
│   │   ├── roadmaps.ts       # Learning roadmaps
│   │   ├── themes.ts         # Color themes
│   │   └── index.ts          # Export all constants
│   ├── locales/              # Translation files
│   │   ├── en.json          # English translations
│   │   └── ur.json          # Urdu translations
│   └── store/                # Zustand stores
│       ├── useThemeStore.ts  # Theme management
│       └── useLanguageStore.ts # Language management
└── public/                   # Static assets
    └── images/              # Images for projects, blog, etc.
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 1. **Update Personal Information**

Edit `src/constants/info.ts`:
```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  // ... update other fields
};
```

### 2. **Add Your Projects**

Edit `src/constants/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Your Project',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    // ... add more details
  },
];
```

### 3. **Update Work Experience**

Edit `src/constants/experience.ts` with your work history.

### 4. **Configure WhatsApp**

Edit `src/constants/social-links.ts`:
```typescript
export const whatsappConfig = {
  phoneNumber: '+92XXXXXXXXXX', // Your WhatsApp number
  defaultMessage: 'Hi! I found your portfolio...',
};
```

### 5. **Add Images**

Place your images in `public/images/`:
- `public/images/avatar.jpg` - Your profile picture
- `public/images/projects/` - Project screenshots
- `public/images/blog/` - Blog post covers
- `public/images/certificates/` - Certificate images

### 6. **Customize Themes**

Edit `src/constants/themes.ts` to add or modify color schemes.

### 7. **Add Translations**

Edit `src/locales/en.json` and `src/locales/ur.json` to update or add translations.

## 🎯 Key Features Explained

### Theme System
The theme system uses CSS variables that are dynamically updated when users switch themes. All colors are defined in HSL format for easy manipulation.

### Translation System
The i18n system uses JSON files and Zustand for state management. It supports RTL languages and persists user preferences.

### Animation System
- **GSAP**: Used for scroll-triggered animations in the Hero section
- **Framer Motion**: Used for component animations throughout the site
- Animations are optimized for performance with `viewport={{ once: true }}`

### Data Management
All data is centralized in the `constants/` folder, making it easy to update content without touching component code.

## 📦 Build for Production

```bash
pnpm build
pnpm start
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🔧 Environment Variables

Create a `.env.local` file for any API keys or sensitive data:

```env
# Add your environment variables here
NEXT_PUBLIC_CONTACT_FORM_API=your_api_endpoint
```

## 📝 TODO / Future Enhancements

- [ ] Add dark mode toggle (currently uses system preference)
- [ ] Implement actual contact form backend
- [ ] Add blog CMS integration
- [ ] Add analytics (Google Analytics, Vercel Analytics)
- [ ] Add more portfolio layout variations
- [ ] Implement search functionality for blog
- [ ] Add RSS feed for blog
- [ ] Add sitemap generation
- [ ] Implement page transitions

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 💬 Support

If you have questions or need help customizing this portfolio, feel free to reach out!

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
