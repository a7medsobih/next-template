# Next Template

---

## 📁 Folder Structure

```
next-template/
│
├── app/
│   └── [locale]/                    # Dynamic locale segment (ar / en)
│       ├── layout.js                # Root layout with fonts & providers
│       ├── page.js                  # Home page
│       ├── about/
│       │   └── page.js              # About us page
│       ├── services/
│       │   ├── page.js              # Services overview
│       │   └── [slug]/
│       │       └── page.js          # Individual service detail page
│       ├── contact/
│       │   └── page.js              # Contact page
│       └── faqs/
│           └── page.js              # FAQs hub
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx               # Top navigation bar
│   │   └── Footer.jsx               # Site-wide footer
│   ├── common/
│   │   └── LanguageSwitcher.jsx     # AR / EN toggle
│   ├── animations/
│   │   └── Reveal.jsx               # Scroll-triggered reveal wrapper
│   └── ui/
│       └── button.jsx               # Base button component (shadcn)
│
├── lib/
│   ├── constants/
│   │   └── constantData.js          # Site-wide static data & config
│   └── api/
│       └── api.js                   # API helper functions
│
├── messages/
│   ├── ar.json                      # Arabic translations (next-intl)
│   └── en.json                      # English translations (next-intl)
│
├── styles/
│   └── globals.css                  # Global styles & Tailwind base
│
├── next.config.js                   # Next.js config (i18n, images, etc.)
└── proxy.ts                         # Dev proxy configuration
```

---

## 🛠️ Tech Stack

| Layer | Library | Version | Purpose |
|---|---|---|---|
| Framework | `next` | 16.1.6 | App router, SSR/SSG |
| UI | `react` / `react-dom` | 19.2.3 | Core UI library |
| i18n | `next-intl` | ^4.8.3 | Arabic/English routing & translations |
| Styling | `tailwindcss` | ^4 | Utility-first CSS |
| Styling | `tailwind-merge` | ^3.5.0 | Merge conflicting Tailwind classes |
| Styling | `tw-animate-css` | ^1.4.0 | Tailwind animation utilities |
| Components | `shadcn` | ^4.1.0 | Accessible component primitives |
| Components | `radix-ui` | ^1.4.3 | Unstyled accessible UI |
| Variants | `class-variance-authority` | ^0.7.1 | Component variant management |
| Utils | `clsx` | ^2.1.1 | Conditional class names |
| Icons | `lucide-react` | ^0.577.0 | Icon set |
| Animation | `motion` | ^12.36.0 | Scroll & enter animations (Framer Motion) |
| Slider / carousel | `swiper` | ^12.1.2 | Touch-enabled sliders |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---