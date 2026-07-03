# My Portfolio Website

A bold, dark portfolio site built with plain HTML, CSS, and JavaScript.
No frameworks, no build tools — just upload the files and it works.

## Folder structure

```
portfolio/
├── index.html          ← Main page (all 4 sections)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Nav scroll, mobile menu, reveal animations
├── images/
│   ├── project-1.jpg   ← Replace with your actual work
│   ├── project-2.jpg
│   ├── project-3.jpg
│   ├── project-4.jpg
│   ├── project-5.jpg
│   ├── project-6.jpg
│   └── portrait.jpg    ← Your photo (used in About section)
└── README.md
```

## How to customize

### 1. Your name
Open `index.html` and replace every instance of `Your Name` and `YN` with your real name.

### 2. Your images
Add your photos to the `images/` folder using these exact filenames:
- `project-1.jpg` through `project-6.jpg` — your portfolio pieces
- `portrait.jpg` — your headshot for the About section

Recommended sizes:
- Portrait images: 800×1000px
- Landscape images: 1200×800px
- Keep each file under 500KB (use squoosh.app to compress)

### 3. Your details
In `index.html`, update:
- `your@email.com` → your actual email
- `@yourhandle` → your Instagram or preferred social
- `[Your City]` → your city
- `[X] years` → your experience
- Project titles and categories in each `.gallery-item`
- Stats in the About section (projects, years, clients)

### 4. Your accent color
The yellow-green accent (`#e8ff47`) is set as `--accent` in `css/style.css`.
Change it to any color you like — for example:
- `#ff6b35` for orange
- `#00d4ff` for cyan
- `#ff3366` for pink

---

## How to publish on GitHub Pages

1. Create a free account at github.com
2. Create a new repository named `yourusername.github.io`
3. Upload all these files (drag and drop in GitHub's interface)
4. Go to Settings → Pages → set source to "main" branch
5. Your site will be live at `https://yourusername.github.io`

---

## Tips
- Test on your phone before sharing — it's fully responsive
- Run images through squoosh.app before uploading to keep the site fast
- Add your site URL to your Instagram bio and resume
