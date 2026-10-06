# ON Media Co

> **Live website:** [onmediaco.com](https://onmediaco.com)
>
> This repository contains the original static website for ON Media Co. Slight styling changes were made when the site was converted to WordPress, so the live WordPress version may not match this source version pixel for pixel.

ON Media Co is a cinematic videography portfolio site designed for wedding films, personal stories, and brand storytelling. The project uses a lightweight, dependency-free front end built with HTML, CSS, and vanilla JavaScript.

## Features

- Four-page responsive website with shared navigation and footer components
- Home page with hero banner, company introduction, featured work, testimonials, and calls to action
- About page with company story, philosophy, and testimonials
- Gallery page with video players and still-image portfolio items
- Contact page with email, phone, location, response-time, and social-media information
- Mobile navigation menu controlled with vanilla JavaScript
- Smooth scrolling for on-page anchor links
- Header shadow state that changes as the visitor scrolls
- Responsive layouts for desktop, tablet, and mobile screen sizes
- Local image and video assets referenced from the `images/` directory

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | [`index.html`](index.html) | Introduces ON Media Co, highlights featured work, and directs visitors to the gallery or contact page. |
| About | [`about.html`](about.html) | Presents the studio story, philosophy, and client testimonials. |
| Gallery | [`gallery.html`](gallery.html) | Displays wedding-film video players and still images from the films. |
| Contact | [`contact.html`](contact.html) | Provides contact details, social links, and a direct email call to action. |

## Project Structure

```text
.
├── index.html                       # Home page
├── about.html                       # About page
├── gallery.html                     # Gallery and portfolio page
├── contact.html                     # Contact page
├── style.css                        # Shared layout, typography, colors, and responsive styles
├── script.js                        # Mobile menu, scrolling, and header interactions
├── images/                          # Logos, photography, stills, screenshots, and media references
├── wordpress-conversion-guide.txt   # Local WordPress conversion notes
├── .gitignore                       # Repository exclusions
└── README.md                        # Project documentation
```

## Technology

- HTML5
- CSS3 with custom properties, flexbox, grid, transitions, and responsive media queries
- Vanilla JavaScript
- No build system, package manager, or third-party runtime dependencies

## Running Locally

Because this is a static website, it can be opened directly in a browser. For the most reliable local experience, use a small HTTP server from the repository root.

### Option 1: Python

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

### Option 2: VS Code Live Server

Install the Live Server extension, open the repository in VS Code, and choose **Open with Live Server** from `index.html`.

The site should be viewed through an HTTP server when testing media paths and navigation rather than relying only on `file://` URLs.

## Front-End Details

### Shared styling

All pages load [`style.css`](style.css). The stylesheet defines the neutral visual system, including white, beige, dark gray, light gray, and muted sage colors. It also provides shared navigation, buttons, section layouts, video grids, testimonials, contact cards, footer styles, and mobile breakpoints.

### Shared behavior

All pages load [`script.js`](script.js). The script currently provides:

- Hamburger-menu open and close behavior on smaller screens
- Automatic mobile-menu closing when a navigation link is selected
- Smooth scrolling for same-page anchor links
- A scrolled state on the fixed header
- Click logging for gallery items, leaving room for a future lightbox or modal
- Utility helpers for debouncing and reading element positions

### Adding or replacing media

Place new local media in `images/` and update the relevant HTML or CSS reference. The current pages use image paths such as `images/hero-bg.png` and `images/couple1-still.png`. Gallery video elements expect files named `couple1.mp4`, `couple2.mp4`, and `couple3.mp4`; the repository currently contains `.mp4.txt` placeholder/reference files rather than the actual video binaries.

When adding production media:

1. Use descriptive, consistent filenames.
2. Compress large images and videos before committing them.
3. Provide meaningful `alt` text for informative images.
4. Prefer modern, web-friendly formats when browser support and the WordPress workflow allow it.
5. Confirm that CSS background-image paths remain relative to `style.css`.

## WordPress Conversion

The static site was prepared as the source for a WordPress conversion. [`wordpress-conversion-guide.txt`](wordpress-conversion-guide.txt) contains the detailed conversion notes, including:

- Splitting shared markup into WordPress template files
- Enqueuing CSS and JavaScript through `functions.php`
- Registering navigation menus and theme support
- Moving theme assets and content media into appropriate WordPress locations
- Choosing between theme-folder media, the WordPress Media Library, or a hybrid approach
- Hosting videos through WordPress, YouTube, Vimeo, or another dedicated service
- Optimizing images, videos, metadata, and accessibility before launch

The live WordPress implementation includes slight styling changes from this static source. Treat the static files as the original design and content reference, while using the live site for the current production appearance.

## Content and Contact Placeholders

Some content in the source files is intentionally placeholder material and should be replaced before treating the static version as production-ready. Examples include:

- About-page paragraphs and philosophy descriptions
- Social-media links, which currently use `#`
- The phone number displayed on the contact page
- Placeholder gallery video references
- Copyright year and any final business copy

The contact page currently displays `hello@onmediaco.com` as the primary email address.

## Deployment

Any static hosting provider can serve this project because it does not require server-side processing. A typical deployment copies the repository contents to the host's public web directory with `index.html` at the site root.

Before deploying a static copy:

- Verify all navigation links and media paths.
- Test the mobile menu at narrow viewport widths.
- Confirm that the production domain and contact details are correct.
- Replace placeholder copy, social links, and media references.
- Test gallery video playback over HTTPS.
- Check image alt text and keyboard navigation.

For the current production experience, visit [onmediaco.com](https://onmediaco.com).

## License and Usage

No license file is currently included in this repository. Confirm ownership and usage rights for all branding, photography, video, and other media before redistributing or reusing the project.
