# Youth Network — Website

Official website for Youth Network (OID: E10341853), a youth NGO based in Drammen, Norway.

**Built with:** HTML5 · Custom CSS · Vanilla JavaScript · Google Fonts (Bebas Neue + Inter)  
**Design:** Editorial aesthetic · Diagonal splits · Geometric colors · No gradients  
**Hosted on:** GitHub Pages (static site, no build tools required)

---

## 📁 Folder Structure

```
youth-network/
│
├── index.html              ← Home page (Hjem)
├── om-oss.html             ← About page (Om oss)
├── prosjekter.html         ← Projects page (Prosjekter)
├── muligheter.html         ← Opportunities page (Muligheter)
├── kontakt.html            ← Contact page (Kontakt)
│
├── css/
│   └── style.css           ← All styles (design tokens, responsive)
│
├── js/
│   └── main.js             ← JavaScript (nav, language toggle, forms, animations)
│
├── images/                 ← Add logo and images here
│   └── (folder for assets)
│
└── README.md               ← This file
```

---

## 🚀 How to Deploy on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `youth-network` (or your preferred name)
3. Do NOT initialize with README, .gitignore, or license (we'll add our own)

### Step 2: Upload Files

1. Clone the repository to your computer:
   ```bash
   git clone https://github.com/YOUR-USERNAME/youth-network.git
   cd youth-network
   ```

2. Copy all the files from this folder into your cloned repository

3. Commit and push:
   ```bash
   git add .
   git commit -m "Initial commit: Youth Network website"
   git push origin main
   ```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**

Your site will be live at:  
`https://YOUR-USERNAME.github.io/youth-network/`

---

## ✏️ How to Edit Content

### Change text on any page

1. Open the `.html` file (e.g., `index.html`)
2. Find the text you want to change (use Ctrl+F / Cmd+F)
3. Edit directly in the HTML
4. Save and commit to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

### Add a new project card

1. Open `prosjekter.html`
2. Find the `<div class="projects-grid">` section
3. Copy an existing `.project-card` block and modify:
   - Change `data-cat` to match category: `active`, `previous`, or `local`
   - Update the emoji in `.project-emoji`
   - Change `<h3>` title, `<p>` description
   - Update `data-project` attribute in `.apply-btn`

Example:
```html
<div class="project-card fade-up" data-cat="active">
  <div class="project-card-body">
    <span class="project-emoji">🌱</span>
    <h3>My New Project</h3>
    <p>Description here...</p>
    <button class="apply-btn" data-project="My New Project">Søk nå</button>
  </div>
</div>
```

### Add a new opportunity

1. Open `muligheter.html`
2. Find the `<div class="opps-grid">` section
3. Copy an existing `.opp-card` and modify:
   - Update tags in `.opp-tags`
   - Change `<h4>` title and `<p>` description
   - Update deadline and `data-project`

---

## 🎨 How to Change Colors

All brand colors are defined in `css/style.css` at the top:

```css
:root {
  --c-purple: #8E24AA;   /* Primary */
  --c-sky: #29B6F6;      /* Secondary */
  --c-green: #66BB6A;    /* Accent */
  --c-yellow: #FFCA28;   /* Highlight */
  --c-orange: #FF7043;   /* Tertiary */
  --c-dark: #1A1A2E;     /* Dark sections */
  --c-smoke: #232323;    /* Footer */
  /* ... more colors ... */
}
```

Change any hex value, save, and commit. Colors update everywhere automatically.

---

## 🌐 Language Toggle

The site supports **Norwegian** and **English** language toggle via the button in the navbar.

To add more languages or translate additional text:

1. Open `js/main.js`
2. Find the `translations` object
3. Add your language and keys:
   ```javascript
   const translations = {
     no: {
       nav: ['Hjem', 'Om oss', ...],
       // ... other keys
     },
     en: {
       nav: ['Home', 'About Us', ...],
       // ... other keys
     }
   };
   ```

4. In the HTML, add `data-nav-label` attributes where text should change:
   ```html
   <a href="om-oss.html" data-nav-label>Om oss</a>
   ```

---

## 📧 Contact Form Setup (Optional)

The contact form on `kontakt.html` currently just shows a success message. To enable email delivery, you have two options:

### Option A: Formspree (Recommended for simple forms)

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free account)
3. Create a new form and copy your form endpoint (e.g., `https://formspree.io/f/abcd1234`)
4. In `kontakt.html`, find the `<form id="contact-form">` and add the action:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR-ID" method="POST">
   ```
5. In `js/main.js`, comment out the `e.preventDefault()` in `initContactForm()` to allow form submission

### Option B: Netlify Forms (If you host on Netlify instead)

Follow Netlify's form handling documentation.

---

## 🎯 SEO & Meta Tags

Each HTML file has basic meta tags for SEO:
- `<meta name="description">` — Page summary
- `<meta property="og:...">` — Social media preview (OpenGraph)

To improve SEO:
1. Update descriptions in each HTML file to be unique and keyword-rich
2. Add alt text to any images: `<img alt="descriptive text" src="..." />`
3. Ensure page titles are meaningful

---

## 🔧 Customization Tips

| Task | File | Instructions |
|------|------|---|
| Update page heading | `index.html` (or other page) | Find `<h1>` or `<h2>` and edit text |
| Change organization name | All HTML files | Search/replace "Youth Network" |
| Update footer year | `kontakt.html` (and others) | Change `<span class="year">` |
| Add/remove navigation links | All HTML navbar sections | Edit `<ul class="nav-links">` |
| Change fonts | `css/style.css` | Edit `@import url(...)` at top |
| Add a new page | Create new `.html` file | Copy navbar/footer from existing page |

---

## 📱 Mobile Responsiveness

The site is fully responsive:
- **Desktop:** Full multi-column layouts
- **Tablet:** Adjusted grid columns
- **Mobile:** Single column, hamburger menu

Test on mobile using browser DevTools (F12 → Device Toolbar).

---

## 🚨 Troubleshooting

### Site not showing after upload?

- Wait 5-10 minutes for GitHub Pages to build
- Check Settings → Pages to confirm deployment is enabled
- Clear your browser cache (Ctrl+Shift+Delete)

### Links not working?

- Ensure file names match exactly (case-sensitive on GitHub)
- Use relative paths: `href="om-oss.html"` not `href="/om-oss.html"`

### Styling looks broken?

- Check that `css/` and `js/` folders are in the root directory
- Verify `<link rel="stylesheet" href="css/style.css">` in each HTML file

---

## 📋 Official Information

| Field | Value |
|-------|-------|
| Organization | Youth Network |
| OID | E10341853 |
| Founded | 05.08.2023 |
| Location | Drammen, Norway |
| Contact Email | Youthnetwork.no@gmail.com |
| Website Language | Norwegian (Norsk bokmål) |
| UI Language Toggle | Norwegian ↔ English |

---

## 📖 Design Notes

- **Typography:** Bebas Neue (display) + Inter (body) — geometric, modern, editorial aesthetic
- **Layout:** Diagonal splits, geometric clip-paths, no rounded corners (square/sharp edges)
- **Colors:** 5-color block palette (purple, sky, green, yellow, orange) — no gradients
- **Animations:** Fade-up on scroll, hover effects, smooth transitions
- **Accessibility:** WCAG 2.1 AA compliant (semantic HTML, alt text, keyboard navigation)

---

## 📜 License & Attribution

This website is custom-built for Youth Network. All content belongs to Youth Network unless otherwise stated.

---

*Built for Youth Network · Drammen, Norge · 2025*
