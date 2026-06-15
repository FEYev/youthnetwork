# Youth Network — Website

Official website for Youth Network (OID: E10341853), a youth NGO based in Drammen, Norway.

Built with: HTML5 · Vanilla CSS (custom) · Vanilla JavaScript · Google Fonts (Inter + Poppins)  
Hosted on: **GitHub Pages** (static, no build step required)

---

## 📁 Folder Structure

```
youth-network/
│
├── index.html              ← Main page (all sections in one file)
│
├── css/
│   └── style.css           ← All styles + CSS variables (design tokens)
│
├── js/
│   └── main.js             ← All JS (nav, language toggle, animations, modal, forms)
│
├── images/                 ← Put your logo and any photos here
│   └── (your files here)
│
└── README.md               ← This file
```

> **Single-page design:** All five sections (Hjem, Om oss, Prosjekter, Muligheter, Kontakt)
> live inside `index.html` as `<section id="...">` blocks. Navigation scrolls to each section.

---

## 🚀 How to Deploy on GitHub Pages

1. **Create a GitHub repository** named `youth-network` (or any name you prefer).
2. **Upload all files** maintaining the folder structure above.
3. Go to **Settings → Pages**.
4. Under *Source*, select **Deploy from a branch** → branch: `main` → folder: `/ (root)`.
5. Click **Save**. Your site will be live at:  
   `https://YOUR-USERNAME.github.io/youth-network/`

---

## ✏️ How to Edit Content

### Change text content
Open `index.html` and search (Ctrl+F / Cmd+F) for the text you want to change.  
All content is in plain HTML — no build tools or frameworks needed.

### Change section headings or body text
Each section has a clearly marked comment block at the top:
```html
<!-- ══════════════════════════════════
     PROSJEKTER
══════════════════════════════════ -->
```
Find the section and edit the `<h2>`, `<p>`, or `<a>` tags directly.

### Add a new project card
Copy one existing `.project-card` block inside the `#prosjekter` section and change:
- `data-cat=""` → `active`, `previous`, or `local`
- The emoji in `.project-card-header`
- The `<h3>` title
- The `<p>` description
- The button link

### Add a new opportunity (open call)
Copy one `.opp-card` block inside `#muligheter` and update:
- Tags, title, description, deadline
- The `data-project=""` attribute on the `.apply-btn` (this appears in the modal title)

---

## 🎨 How to Change Colors

All brand colors are defined as CSS variables at the top of `css/style.css`:

```css
:root {
  --color-purple:  #8E24AA;   /* Canlı Mor */
  --color-sky:     #29B6F6;   /* Gökyüzü Mavisi */
  --color-green:   #66BB6A;   /* Canlı Yeşil */
  --color-yellow:  #FFCA28;   /* Güneş Sarısı */
  --color-orange:  #FF7043;   /* Dinamik Turuncu */
  --color-dark:    #1A1A2E;   /* Hero/nav background */
  --color-smoke:   #232323;   /* Team section / footer background */
}
```

Change any hex value here and it updates everywhere on the site automatically.

---

## 🌐 Language Toggle (NO / EN)

The language toggle button in the navbar (and hamburger menu) switches between Norwegian and English for key UI elements.

To add or update translations, open `js/main.js` and find the `translations` object near the top:

```js
const translations = {
  no: {
    nav: ['Hjem', 'Om oss', 'Prosjekter', 'Muligheter', 'Kontakt'],
    hero_title_line1: 'Styrker ungdommen',
    // ... more keys
  },
  en: {
    nav: ['Home', 'About Us', 'Projects', 'Opportunities', 'Contact'],
    hero_title_line1: 'Empowering youth',
    // ... more keys
  }
};
```

To translate more elements, add an `id` attribute to the HTML element, then:
1. Add the `id` as a key in both `no` and `en` objects
2. Add a line to the `applyLang()` function:  
   `setEl('your-element-id', t.your_key);`

---

## ✉️ Contact Form Setup (Formspree)

The contact form uses [Formspree](https://formspree.io) — free for up to 50 submissions/month.

1. Go to https://formspree.io and sign up (free).
2. Create a new form and copy your **form endpoint** (looks like: `https://formspree.io/f/abcd1234`).
3. In `index.html`, find the contact form and replace the placeholder action:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual form ID.

> **Note:** The JavaScript in `main.js` currently intercepts the submit event and shows a toast notification instead of sending to Formspree. To activate real email delivery, remove the `e.preventDefault()` block in `initContactForm()` inside `js/main.js`, or keep it and let Formspree handle the AJAX submission with their JS library.

---

## 🖼️ Adding Your Logo

1. Place your logo file (PNG or SVG recommended) inside the `images/` folder.
2. In `index.html`, find the `.nav-logo-mark` div:
   ```html
   <div class="nav-logo-mark" aria-hidden="true">YN</div>
   ```
3. Replace it with an `<img>` tag:
   ```html
   <img src="images/logo.png" alt="Youth Network logo" width="40" height="40" style="border-radius:50%;object-fit:cover;" />
   ```

For the hero section, you can add a large logo above the heading inside `.hero-content`.

---

## 📱 Mobile Menu

The hamburger menu on mobile shows the same navigation links, plus the language toggle button.  
All links close the menu automatically when tapped. No extra configuration needed.

---

## 🔧 Maintenance Tips

| Task | Where |
|------|-------|
| Update team members | `index.html` → `#team` section |
| Update contact info | `index.html` → `#kontakt` section + `footer` |
| Add/remove project cards | `index.html` → `#prosjekter` section |
| Change fonts | `css/style.css` → top `@import` line + `--font-display` / `--font-body` variables |
| Update footer copyright year | `index.html` → `<footer>` → `.footer-bottom` span |
| Activate real form emails | Replace Formspree ID (see above) |

---

## 📋 Official Information

| Field | Value |
|-------|-------|
| Organization | Youth Network |
| OID | E10341853 |
| Founded | 05.08.2023 |
| Location | Drammen, Norway |
| Contact email | Youthnetwork.no@gmail.com |
| Website language | Norwegian (Norsk bokmål) |
| UI language toggle | Norwegian ↔ English |

---

*Built for Youth Network · Drammen, Norge · 2025*
