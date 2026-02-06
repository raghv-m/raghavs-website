# ULTIMATE CYBERSECURITY PORTFOLIO REDESIGN PROMPT
## For Claude Code - Premium Edition with Apple Glass Effects 🔐✨

---

## 🎯 MISSION
Transform www.raghv.dev from a full-stack developer portfolio into a **cutting-edge cybersecurity showcase** with Apple-level polish, glassmorphism effects, buttery-smooth animations, and bulletproof security.

---

## 🎨 DESIGN PHILOSOPHY: "Cyber Glass Fusion"

Blend **cybersecurity aesthetics** (terminal, matrix, hacker vibes) with **Apple's premium design language** (glassmorphism, smooth animations, luxurious spacing, refined interactions).

Think: macOS Monterey/Ventura glass effects meets cyberpunk terminal aesthetics.

---

## 🌈 COLOR PALETTE - Premium Cyber

### Dark Theme (Primary)
```css
--bg-primary: #0a0a0f;           /* Deep space black */
--bg-secondary: #12121a;         /* Card backgrounds */
--bg-glass: rgba(18, 18, 26, 0.7); /* Glassmorphism base */

--accent-cyan: #00d9ff;          /* Primary CTAs, links */
--accent-green: #00ff88;         /* Success, security indicators */
--accent-purple: #b026ff;        /* Highlights, special elements */
--accent-orange: #ff6b35;        /* Warnings, alerts */

--text-primary: #ffffff;         /* Main headings */
--text-secondary: #a0a0a0;       /* Body text */
--text-tertiary: #606060;        /* Muted text */

--border-glass: rgba(255, 255, 255, 0.1);  /* Glass borders */
--glow-cyan: rgba(0, 217, 255, 0.5);       /* Neon glow effects */
--glow-green: rgba(0, 255, 136, 0.5);
```

### Gradients
```css
--gradient-hero: linear-gradient(135deg, #0a0a0f 0%, #1a0f2e 50%, #0a0a0f 100%);
--gradient-glass: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
--gradient-accent: linear-gradient(90deg, #00d9ff 0%, #b026ff 100%);
```

---

## 🪟 GLASSMORPHISM SPECS (Apple-Style)

Every card, section, and interactive element should use:

```css
.glass-card {
    background: rgba(18, 18, 26, 0.7);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.glass-card:hover {
    border-color: rgba(0, 217, 255, 0.3);
    box-shadow: 
        0 12px 48px rgba(0, 217, 255, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Use glassmorphism for:**
- Navigation bar
- Project cards
- Skill category containers
- Terminal windows
- Contact form
- Footer sections
- Modal overlays

---

## ✨ ANIMATION REQUIREMENTS - Buttery Smooth

### Animation Principles
- **60 FPS minimum** - Use transform and opacity only (GPU-accelerated)
- **Cubic bezier easing** - `cubic-bezier(0.4, 0, 0.2, 1)` for all transitions
- **Staggered reveals** - Elements fade in sequentially on scroll
- **Spring physics** - For interactive elements (buttons, cards)
- **Reduced motion support** - Respect `prefers-reduced-motion`

### Key Animations to Implement

#### 1. Page Load Animation
```javascript
// Sequence on page load:
1. Hero section fades in (0-0.6s)
2. Terminal window types out (0.8-2.5s)
3. Stats counter animates (1.5-3s)
4. Rest of content fades in with stagger (2s-4s)
```

#### 2. Scroll-Triggered Animations
```javascript
// Use Intersection Observer for:
- Fade in sections as they enter viewport
- Counter animations when stats become visible
- Skill tags reveal with stagger effect
- Project cards slide in from bottom
- Delay: 100ms between each element
```

#### 3. Micro-Interactions
```css
/* Buttons */
.btn:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 217, 255, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:active {
    transform: translateY(0) scale(0.98);
    transition: all 0.1s ease;
}

/* Links */
.nav-link::after {
    content: '';
    width: 0%;
    height: 2px;
    background: var(--accent-cyan);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover::after {
    width: 100%;
}
```

#### 4. Terminal Typing Effect
```javascript
// Realistic terminal typing:
- Cursor blinks (500ms interval)
- Characters appear one by one (50ms delay)
- Random typing speed variation (30-80ms)
- Pause after commands (500ms)
- Smooth green text glow on output
```

#### 5. Matrix Rain Background (Subtle)
```javascript
// Canvas animation:
- Falling characters in background
- 20% opacity maximum
- Green (#00ff88) color
- 30fps for performance
- Pause on mobile devices
```

#### 6. Particle System (Hero Section)
```javascript
// Floating geometric particles:
- Triangles, dots, lines connecting them
- Subtle movement (parallax effect)
- Responds to mouse movement
- WebGL or Canvas implementation
- Disable on mobile
```

#### 7. Smooth Scroll
```css
html {
    scroll-behavior: smooth;
}

/* Or use library like Lenis for advanced smoothness */
```

#### 8. Loading Screen
```javascript
// Hacker-style loading:
- Progress bar with percentage
- Random "Initializing..." messages:
  "Loading encryption keys..."
  "Establishing secure connection..."
  "Validating credentials..."
- Disappears after 2s with fade out
```

---

## 🔒 SECURITY HARDENING - CRITICAL

### 1. HTTP Security Headers
Add to server config or meta tags:

```html
<!-- In <head> -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
               font-src 'self' https://fonts.gstatic.com; 
               img-src 'self' data: https:; 
               connect-src 'self';">

<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta name="referrer" content="strict-origin-when-cross-origin">
```

### 2. Form Security (Contact Page)
```javascript
// Implement:
- Input sanitization (DOMPurify library)
- Email validation regex
- Rate limiting (max 3 submissions per hour)
- CSRF token generation
- Honeypot field (hidden from users, traps bots)
- reCAPTCHA v3 (invisible)
- Server-side validation
```

### 3. XSS Prevention
```javascript
// Sanitize all user inputs:
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}
```

### 4. Subresource Integrity (SRI)
```html
<!-- For all CDN resources -->
<link rel="stylesheet" 
      href="https://fonts.googleapis.com/..." 
      integrity="sha384-..." 
      crossorigin="anonymous">
```

### 5. HTTPS Enforcement
```javascript
// Redirect HTTP to HTTPS:
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
```

### 6. Security.txt File
Create `.well-known/security.txt`:
```
Contact: mailto:raaghvv0508@gmail.com
Expires: 2026-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://www.raghv.dev/.well-known/security.txt
```

### 7. Remove Sensitive Data
```javascript
// Audit and remove:
- API keys (move to environment variables)
- Database credentials
- Personal information in comments
- Console.log statements in production
- Source maps in production build
```

### 8. Implement HSTS
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

---

## 📱 RESPONSIVE DESIGN - Mobile First

### Breakpoints
```css
/* Mobile first approach */
:root {
    --mobile: 320px;
    --tablet: 768px;
    --laptop: 1024px;
    --desktop: 1440px;
    --ultrawide: 1920px;
}

/* Media queries */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Laptop */ }
@media (min-width: 1440px) { /* Desktop */ }
```

### Mobile Optimizations
- Touch targets minimum 44x44px
- Hamburger menu with smooth slide-in animation
- Stack all grid layouts vertically
- Reduce particle effects (performance)
- Simplify animations
- Lazy load images below fold
- Reduce blur intensity on glassmorphism (performance)

### Testing Required
- iPhone SE (375px)
- iPhone 14 Pro (393px)
- iPad (768px)
- MacBook Air (1280px)
- Desktop (1920px)

---

## 🏗️ WEBSITE STRUCTURE - All Pages

### 1. HOMEPAGE (index.html)

#### Hero Section
```
┌─────────────────────────────────────────┐
│  [Animated particle background]         │
│                                          │
│  ┌──────────── Terminal ─────────────┐  │
│  │ $ whoami                           │  │
│  │ > Raghav Mahajan                   │  │
│  │ $ cat role.txt                     │  │
│  │ > Cybersecurity Professional       │  │
│  │ $ echo $SPECIALIZATION             │  │
│  │ > Penetration Testing | Threat...  │  │
│  └────────────────────────────────────┘  │
│                                          │
│  ⚡ SECURING THE DIGITAL FRONTIER ⚡     │
│  (glitch effect on hover)                │
│                                          │
│  From Full Stack Dev → Cybersecurity    │
│                                          │
│  [View Projects] [Contact Me]           │
│                                          │
│  ┌────┐  ┌────┐  ┌─────┐               │
│  │ 15+│  │ 5  │  │ 100+│               │
│  │Proj│  │Audit│ │Vulns│               │
│  └────┘  └────┘  └─────┘               │
└─────────────────────────────────────────┘
```

**Features:**
- Full viewport height
- Animated gradient background
- Floating particles (mouse-reactive)
- Terminal with typing animation
- Glitch effect on title (subtle, on hover)
- Animated counter on stats
- Dual CTA buttons with different styles
- Scroll indicator at bottom

#### About Section (Glass Card)
```
┌─────────────────────────────────────────┐
│  < ABOUT_ME />                          │
│                                          │
│  ┌──────────┐  ┌────────────────────┐  │
│  │          │  │ THE JOURNEY         │  │
│  │  Photo   │  │                     │  │
│  │  (Glass  │  │ Text about          │  │
│  │  border) │  │ transition from     │  │
│  │          │  │ full-stack to       │  │
│  └──────────┘  │ cybersecurity...    │  │
│                 │                     │  │
│                 │ [Terminal JSON]     │  │
│                 │ {                   │  │
│                 │   "role": "..."     │  │
│                 │   "skills": [...]   │  │
│                 │ }                   │  │
│                 └────────────────────┘  │
│                                          │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐      │
│  │ 🛡️  │ │ 🔐  │ │ 🎯  │ │ ⚡  │      │
│  │Audit│ │Secure│ │Threat│ │Incident│  │
│  │     │ │ Dev  │ │Analys│ │Response│  │
│  └─────┘ └─────┘ └─────┘ └─────┘      │
└─────────────────────────────────────────┘
```

**Expertise Cards:**
- 4 glass cards with icons
- Hover: lift up, glow border
- Icon animates on hover
- Brief description under each

#### Skills Arsenal (Grid Layout)
```
< SKILLS_ARSENAL />

┌──────────────────────────────────────┐
│ 🛡️ SECURITY & PENTESTING            │
│ [Kali][Metasploit][Burp][Wireshark] │
│ [Nmap][OWASP][SQLMap][Nikto]        │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ </> SECURE DEVELOPMENT                │
│ [Python][Bash][JavaScript][Node.js]  │
│ [API Security][JWT][OAuth]           │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ 🌐 NETWORK & CLOUD SECURITY          │
│ [TCP/IP][Firewalls][VPN][IDS/IPS]    │
│ [AWS Security][Docker][SSL/TLS]      │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ 📋 SECURITY PRACTICES                │
│ [Vuln Assessment][Risk Analysis]     │
│ [Security Auditing][SIEM]            │
└──────────────────────────────────────┘
```

**Skill Tags:**
- Glass effect background
- Neon border on hover
- Glow effect
- Slight rotation on hover
- Staggered fade-in animation

#### Services/Offerings Section
```
What I Offer:

┌──────┐  ┌──────┐  ┌──────┐
│ 🔍   │  │ 🛡️   │  │ 🔐   │
│Pentest│ │Secure│  │Audit │
│      │  │ Dev  │  │      │
└──────┘  └──────┘  └──────┘
```

#### CTA Section (Full-width glass)
```
┌──────────────────────────────────────┐
│  READY TO SECURE YOUR DIGITAL ASSETS?│
│                                       │
│  Let's build secure, resilient systems│
│                                       │
│  [Start Conversation] [View Projects]│
└──────────────────────────────────────┘
```

---

### 2. PROJECTS PAGE (projects.html)

#### Filter Bar
```
┌─────────────────────────────────────┐
│ [All] [Security] [Web Apps] [Mobile]│
│           [Search: _____]            │
└─────────────────────────────────────┘
```

#### Project Grid (Glassmorphism Cards)
```
┌──────────────────┐  ┌──────────────────┐
│ [SECURITY]       │  │ [WEB APP]        │
│                  │  │                  │
│  Network Scanner │  │  Chattr          │
│  ──────────────  │  │  ──────────────  │
│  Python, Nmap    │  │  Flutter, Firebase│
│  Scans & detects │  │  Secure chat with│
│  vulnerabilities │  │  E2E encryption  │
│                  │  │                  │
│  [GitHub] [Demo] │  │  [GitHub] [Demo] │
│                  │  │                  │
│  🔒 Security:    │  │  🔒 Security:    │
│  • Port scanning │  │  • JWT auth      │
│  • CVE detection │  │  • XSS protection│
└──────────────────┘  └──────────────────┘
```

**Project Categories:**

1. **SECURITY PROJECTS** (Highlight these!)
   - Vulnerability Scanner
   - Password Strength Analyzer
   - Network Traffic Monitor
   - SQL Injection Detector
   - Web App Security Auditor
   - CTF Writeups/Challenges

2. **SECURE WEB APPLICATIONS** (Existing projects reframed)
   - **ImmigrateX**: Immigration platform
     - Security features: Secure auth, data encryption, input validation
   - **Chattr**: Real-time chat
     - Security: E2E encryption, XSS protection, rate limiting
   - **3D Chess**: Interactive game
     - Security: CSRF protection, secure WebSocket

3. **CLIENT WEBSITES** (With security badges)
   - EZ Plumbing, Mr. Rooter, Fatima's Kitchen
   - Show security implementations:
     - ✅ SSL/TLS
     - ✅ CSP Headers
     - ✅ XSS Protection
     - ✅ HTTPS Only
     - ✅ Security Audited

**Card Interactions:**
- Hover: lift up, border glow
- Click: expand with detailed view (modal)
- Filter animation: fade out/in
- Search: instant filter with highlight

---

### 3. CERTIFICATIONS PAGE (certifications.html) - NEW!

```
┌──────────────────────────────────────┐
│  < CERTIFICATIONS & LEARNING_PATH /> │
│                                       │
│  ┌────────────────────────────────┐  │
│  │ ✅ COMPLETED                   │  │
│  │                                │  │
│  │ [Badge] CompTIA Security+      │  │
│  │         Issued: 2024           │  │
│  │         [Verify Credential]    │  │
│  └────────────────────────────────┘  │
│                                       │
│  ┌────────────────────────────────┐  │
│  │ 🔄 IN PROGRESS                 │  │
│  │                                │  │
│  │ [Badge] CEH (Certified Ethical │  │
│  │         Hacker)                │  │
│  │         Progress: ████░░ 75%   │  │
│  │                                │  │
│  │ [Badge] OSCP (Offensive Sec...)│  │
│  │         Progress: ██░░░░ 40%   │  │
│  └────────────────────────────────┘  │
│                                       │
│  ┌────────────────────────────────┐  │
│  │ 📅 PLANNED                     │  │
│  │                                │  │
│  │ • CISSP                        │  │
│  │ • GIAC GPEN                    │  │
│  └────────────────────────────────┘  │
│                                       │
│  Learning Timeline:                  │
│  [Visual timeline with milestones]   │
└──────────────────────────────────────┘
```

**Features:**
- Certificate badges with glow effect
- Progress bars for in-progress certs
- Verify credential links
- Timeline visualization
- Skills gained from each cert

---

### 4. PHOTOGRAPHY PAGE (photography.html)

Keep photography but cyber-themed:

```
┌──────────────────────────────────────┐
│  < PHOTOGRAPHY />                     │
│  Beyond security - capturing moments  │
│                                       │
│  ┌────┐┌────┐┌────┐┌────┐           │
│  │img ││img ││img ││img │  (Glass   │
│  │1   ││2   ││3   ││4   │  borders, │
│  └────┘└────┘└────┘└────┘  hover    │
│                              zoom)   │
│  ┌────┐┌────┐┌────┐┌────┐           │
│  │img ││img ││img ││img │            │
│  │5   ││6   ││7   ││8   │            │
│  └────┘└────┘└────┘└────┘           │
└──────────────────────────────────────┘
```

**Gallery Features:**
- Masonry grid layout
- Lazy loading images
- Lightbox on click (glass overlay)
- Categories/tags filter
- Smooth zoom on hover
- Keyboard navigation
- Share button

---

### 5. CONTACT PAGE (contact.html)

```
┌──────────────────────────────────────┐
│  < CONTACT />                         │
│                                       │
│  ┌─── Terminal Contact Form ───────┐ │
│  │ $ send_message --to raghav      │ │
│  │                                 │ │
│  │ > Name: [______________]        │ │
│  │ > Email: [______________]       │ │
│  │ > Subject: [______________]     │ │
│  │ > Message:                      │ │
│  │   [________________________]    │ │
│  │   [________________________]    │ │
│  │                                 │ │
│  │ [🔐 ENCRYPT & SEND]             │ │
│  │                                 │ │
│  │ Encrypting message... ████ 100% │ │
│  └─────────────────────────────────┘ │
│                                       │
│  ┌─── Alternative Contact ────────┐  │
│  │ 📧 raaghvv0508@gmail.com       │  │
│  │ 📍 Edmonton, AB, Canada        │  │
│  │ 🔗 LinkedIn | GitHub           │  │
│  │                                │  │
│  │ 🔐 PGP Key Available           │  │
│  │ (for secure communication)     │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

**Form Security:**
- Honeypot field (hidden)
- Rate limiting (3 per hour)
- reCAPTCHA v3
- Input sanitization
- Email validation
- CSRF token
- "Encrypting..." animation on submit
- Success message in terminal style

**Alternative Contact:**
- Email with copy button
- Social links (glass buttons)
- Location
- PGP key download option
- Response time indicator

---

## 🎯 TYPOGRAPHY SYSTEM

### Fonts
```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap');

:root {
    /* Headings - Futuristic */
    --font-heading: 'Orbitron', sans-serif;
    
    /* Code/Terminal */
    --font-mono: 'JetBrains Mono', monospace;
    
    /* Body - Clean */
    --font-body: 'Inter', sans-serif;
}
```

### Typography Scale
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 4rem;      /* 64px */
```

### Usage
```css
h1 { font: 900 var(--text-6xl) var(--font-heading); }
h2 { font: 700 var(--text-4xl) var(--font-heading); }
h3 { font: 600 var(--text-2xl) var(--font-heading); }
.terminal { font: 400 var(--text-base) var(--font-mono); }
p { font: 400 var(--text-base) var(--font-body); }
```

---

## 🧭 NAVIGATION

### Desktop Nav (Sticky Glass)
```
┌────────────────────────────────────────────┐
│ [R_MAHAJAN]_  /home /projects /certs /contact│
│               ──────(active underline)      │
└────────────────────────────────────────────┘
```

**Features:**
- Sticky on scroll
- Glassmorphism background
- Logo with cursor blink animation
- Active link: cyan underline (smooth expand)
- Hover: glow effect
- Smooth scroll to sections
- Backdrop blur increases on scroll

### Mobile Nav (Hamburger)
```
┌────────────────────┐
│ [R_MAHAJAN]_  [≡] │
└────────────────────┘

[Tap ≡]

┌────────────────────┐
│ [R_MAHAJAN]_  [×] │
├────────────────────┤
│                    │
│ /home              │
│ /projects          │
│ /certifications    │
│ /photography       │
│ /contact           │
│                    │
│ ──────────────     │
│ [GitHub] [LinkedIn]│
└────────────────────┘
```

**Mobile Menu:**
- Slide in from right
- Glass background
- Smooth animation
- Close on link click
- Close on outside click
- Hamburger → X animation

---

## ⚡ PERFORMANCE OPTIMIZATION

### 1. Images
```javascript
// Lazy loading
<img loading="lazy" src="..." alt="...">

// Modern formats
- Use WebP with JPG fallback
- Compress images (TinyPNG)
- Responsive images with srcset
- Blur-up loading technique
```

### 2. CSS
```css
/* Critical CSS inline in <head> */
/* Non-critical CSS async load */

/* Minimize repaints */
- Use transform instead of top/left
- Use opacity instead of display
- Will-change for animated elements
```

### 3. JavaScript
```javascript
// Defer non-critical JS
<script defer src="..."></script>

// Code splitting if using bundler
// Remove console.logs in production
// Minify and compress
```

### 4. Fonts
```css
/* Font display swap */
@font-face {
    font-display: swap;
}

/* Preload critical fonts */
<link rel="preload" href="font.woff2" as="font">
```

### 5. Third-Party Scripts
```javascript
// Load Google Fonts async
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

// Lazy load reCAPTCHA
// Only load when contact form is visible
```

### 6. Caching
```
# .htaccess or server config
Cache-Control: public, max-age=31536000
```

### Target Metrics (Lighthouse)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## ♿ ACCESSIBILITY

### ARIA Labels
```html
<button aria-label="Open menu">☰</button>
<nav aria-label="Main navigation">
```

### Keyboard Navigation
```javascript
// Tab through all interactive elements
// Enter/Space to activate buttons
// Escape to close modals/menus
// Arrow keys for sliders/carousels
```

### Focus Indicators
```css
:focus-visible {
    outline: 2px solid var(--accent-cyan);
    outline-offset: 4px;
}
```

### Color Contrast
- Text: WCAG AAA (7:1 ratio minimum)
- Large text: AA (4.5:1)
- Test with color contrast checker

### Screen Reader Support
```html
<!-- Skip to main content -->
<a href="#main" class="skip-link">Skip to main content</a>

<!-- Proper heading hierarchy -->
<h1> → <h2> → <h3> (no skipping)

<!-- Alt text for images -->
<img src="..." alt="Descriptive text">
```

---

## 📊 SEO OPTIMIZATION

### Meta Tags (Every Page)
```html
<head>
    <!-- Primary -->
    <title>Raghav Mahajan - Cybersecurity Professional | Edmonton, AB</title>
    <meta name="description" content="Cybersecurity professional specializing in penetration testing, security auditing, and secure application development. Based in Edmonton, AB.">
    <meta name="keywords" content="cybersecurity, penetration testing, security auditing, ethical hacking, edmonton, alberta, canada">
    
    <!-- Open Graph (Social Sharing) -->
    <meta property="og:title" content="Raghav Mahajan - Cybersecurity Professional">
    <meta property="og:description" content="Securing the digital frontier with expertise in penetration testing and security auditing">
    <meta property="og:image" content="https://www.raghv.dev/og-image.jpg">
    <meta property="og:url" content="https://www.raghv.dev">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Raghav Mahajan - Cybersecurity Professional">
    <meta name="twitter:description" content="Securing the digital frontier">
    <meta name="twitter:image" content="https://www.raghv.dev/twitter-card.jpg">
    
    <!-- Canonical -->
    <link rel="canonical" href="https://www.raghv.dev">
    
    <!-- Schema.org Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Raghav Mahajan",
        "jobTitle": "Cybersecurity Professional",
        "description": "Penetration tester and security auditor",
        "url": "https://www.raghv.dev",
        "sameAs": [
            "https://github.com/raaghvv",
            "https://linkedin.com/in/raghavmahajan08"
        ],
        "knowsAbout": ["Cybersecurity", "Penetration Testing", "Web Development"]
    }
    </script>
</head>
```

### Sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.raghv.dev/</loc>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.raghv.dev/projects.html</loc>
        <priority>0.8</priority>
    </url>
    <!-- Add all pages -->
</urlset>
```

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://www.raghv.dev/sitemap.xml
```

---

## 📁 FILE STRUCTURE

```
www.raghv.dev/
│
├── index.html                 # Homepage
├── projects.html              # Projects showcase
├── certifications.html        # Certifications (NEW)
├── photography.html           # Photography gallery
├── contact.html               # Contact form
│
├── css/
│   ├── main.css              # Main styles
│   ├── glassmorphism.css     # Glass effects
│   ├── animations.css        # All animations
│   └── responsive.css        # Media queries
│
├── js/
│   ├── main.js               # Core functionality
│   ├── animations.js         # Animation controllers
│   ├── matrix.js             # Matrix rain effect
│   ├── particles.js          # Particle system
│   ├── terminal.js           # Terminal typing effect
│   └── form-validation.js    # Contact form security
│
├── assets/
│   ├── images/
│   │   ├── projects/         # Project screenshots
│   │   ├── certs/            # Certificate badges
│   │   ├── photography/      # Photo gallery
│   │   └── og-image.jpg      # Social sharing
│   │
│   └── resume/
│       └── cv-raghav.pdf     # Updated resume
│
├── .well-known/
│   └── security.txt          # Security disclosure
│
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## 🔧 TECHNICAL IMPLEMENTATION

### Core Technologies
```
✅ HTML5 (Semantic markup)
✅ CSS3 (Grid, Flexbox, Custom Properties)
✅ Vanilla JavaScript (No jQuery!)
✅ Canvas API (Matrix rain, particles)
✅ Intersection Observer (Scroll animations)
✅ Local Storage (Theme preference)
```

### Optional Enhancements
```
✅ Lenis (Smooth scroll library)
✅ GSAP (Advanced animations - if needed)
✅ Particles.js (Particle system)
✅ Typed.js (Terminal typing)
✅ AOS (Animate On Scroll)
```

### Build Tools (Optional)
```
- Vite (Fast build tool)
- PostCSS (CSS processing)
- Autoprefixer (Browser compatibility)
- PurgeCSS (Remove unused CSS)
- Terser (JS minification)
```

---

## ✅ IMPLEMENTATION CHECKLIST

### Phase 1: Security & Foundation (CRITICAL)
- [ ] Implement all security headers
- [ ] Add CSP policy
- [ ] Create security.txt
- [ ] Sanitize all inputs
- [ ] Add rate limiting
- [ ] Remove sensitive data
- [ ] HTTPS enforcement
- [ ] SRI for CDN resources

### Phase 2: Core Design
- [ ] Set up color variables
- [ ] Implement glassmorphism system
- [ ] Create typography scale
- [ ] Build navigation (desktop + mobile)
- [ ] Design hero section
- [ ] Code terminal component

### Phase 3: Homepage
- [ ] Hero with animations
- [ ] About section
- [ ] Skills arsenal
- [ ] Stats counter
- [ ] CTA section
- [ ] Footer

### Phase 4: Additional Pages
- [ ] Projects page with filters
- [ ] Certifications page
- [ ] Photography gallery
- [ ] Contact form with security
- [ ] 404 page (cyber-themed)

### Phase 5: Animations
- [ ] Page load sequence
- [ ] Scroll-triggered reveals
- [ ] Terminal typing effect
- [ ] Matrix rain background
- [ ] Particle system
- [ ] Micro-interactions
- [ ] Loading screen

### Phase 6: Responsive Design
- [ ] Mobile navigation
- [ ] Tablet layouts
- [ ] Desktop layouts
- [ ] Touch optimizations
- [ ] Performance on mobile

### Phase 7: Optimization
- [ ] Image optimization
- [ ] Lazy loading
- [ ] Code minification
- [ ] Font optimization
- [ ] Caching strategy
- [ ] Lighthouse audit

### Phase 8: Testing
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Accessibility audit
- [ ] Security audit
- [ ] Performance testing
- [ ] SEO check

### Phase 9: Deployment
- [ ] Update DNS records
- [ ] SSL certificate
- [ ] CDN setup (optional)
- [ ] Analytics (Google Analytics/Plausible)
- [ ] Monitor uptime
- [ ] Backup strategy

---

## 🎨 DESIGN EXAMPLES & INSPIRATION

### Glassmorphism References
- macOS Big Sur/Monterey/Ventura windows
- iOS 15+ design language
- Windows 11 Fluent Design

### Cybersecurity Aesthetics
- Terminal/command line interfaces
- Hacker movie UIs (realistic, not Hollywood)
- Cyberpunk 2077 menus
- Watch Dogs 2 UI
- GitHub dark mode

### Animation Inspiration
- Apple product pages (smooth, purposeful)
- Stripe website (clean micro-interactions)
- Linear app (fluid transitions)

---

## 📝 CONTENT UPDATES

### Homepage Copy
```
HERO:
"SECURING THE DIGITAL FRONTIER"

SUBHEADING:
"Cybersecurity Professional | Penetration Tester | Security Researcher"

BIO:
"Transitioning from Full Stack Development to Cybersecurity, 
combining deep technical knowledge with advanced security expertise 
to protect digital assets and build resilient systems."

CTA:
"Explore Security Projects" | "Let's Connect"
```

### About Section
```
THE JOURNEY

My path into cybersecurity began while building production web 
applications. As I developed scalable systems with React, Node.js, 
and cloud technologies, I became fascinated with the security 
challenges inherent in modern software.

This curiosity evolved into a passion. I started identifying 
vulnerabilities in my own projects, then in others. What began as 
defensive programming transformed into offensive security research.

Now, I leverage my development background to approach cybersecurity 
from a unique angle - I understand how systems are built because 
I've built them. This perspective allows me to think like both the 
developer and the attacker, finding vulnerabilities others miss.

SPECIALIZATIONS:
• Penetration Testing & Ethical Hacking
• Web Application Security Auditing
• Vulnerability Assessment & Management
• Secure Software Development Lifecycle
• Threat Analysis & Incident Response
```

### Skills Section - Reframed
```
FROM DEVELOPER TO DEFENDER:

🛡️ SECURITY ARSENAL
  Kali Linux | Metasploit | Burp Suite | Wireshark
  Nmap | OWASP ZAP | SQLMap | Nikto

🔐 SECURE DEVELOPMENT
  Python | Bash | JavaScript | Node.js
  API Security | JWT | OAuth | Cryptography

🌐 NETWORK & CLOUD
  TCP/IP | Firewalls | VPN | IDS/IPS
  AWS Security | Docker | Kubernetes

📋 METHODOLOGIES
  OWASP Top 10 | MITRE ATT&CK | NIST
  Risk Assessment | Compliance | SIEM
```

---

## 🚀 POST-LAUNCH

### Analytics Setup
```javascript
// Google Analytics 4 or Plausible (privacy-focused)
// Track:
- Page views
- Button clicks (CTA conversion)
- Form submissions
- Project views
- Time on site
```

### Maintenance Tasks
```
MONTHLY:
- Update project portfolio
- Add new certifications
- Security audit
- Update dependencies
- Check broken links

QUARTERLY:
- Lighthouse performance audit
- Security header check
- SSL certificate renewal check
- Backup verification
- Content refresh
```

### Future Enhancements
```
PHASE 2 (Optional):
- Blog section for security writeups
- CTF challenge walkthroughs
- Dark/Light theme toggle
- Code syntax highlighting
- Email newsletter signup
- Vulnerability disclosure program
- Open source contributions showcase
```

---

## 🎯 SUCCESS METRICS

After launch, measure:

```
✅ Performance
- Lighthouse score: 95+
- Page load time: <2s
- Time to Interactive: <3s

✅ Security
- Security headers grade: A+
- SSL Labs rating: A+
- No critical vulnerabilities

✅ User Engagement
- Bounce rate: <40%
- Avg. session duration: >2min
- CTA click rate: >5%

✅ SEO
- Google ranking for "cybersecurity edmonton"
- Indexed pages on Google
- Backlinks acquired
```

---

## 💡 PRO TIPS

1. **Start with mobile design** - Easier to scale up than down
2. **Use CSS variables** - Makes theme changes effortless
3. **Test on real devices** - Not just browser DevTools
4. **Optimize images first** - Biggest performance win
5. **Security is not optional** - Implement from day 1
6. **Animations should enhance** - Not distract
7. **Keep it fast** - 3 seconds or users bounce
8. **Accessibility matters** - Everyone should use your site
9. **Content is king** - Great design + weak content = failure
10. **Ship and iterate** - Perfect is the enemy of done

---

## 🔐 FINAL SECURITY REMINDER

Before going live, run these security checks:

```bash
# Security headers
https://securityheaders.com/?q=raghv.dev

# SSL/TLS
https://www.ssllabs.com/ssltest/analyze.html?d=raghv.dev

# Observatory
https://observatory.mozilla.org/analyze/raghv.dev

# Manual checks
- No exposed API keys
- No console errors in production
- Forms properly validated
- HTTPS enforced
- Security.txt present
```

---

## 🎉 YOU GOT THIS!

This redesign will transform your portfolio from a solid full-stack showcase 
into an EPIC cybersecurity powerhouse. The combination of Apple-level 
polish with cybersecurity aesthetics will make you stand out from every 
other candidate.

You're not just changing colors - you're telling a story of evolution, 
expertise, and commitment to security.

**NOW GO BUILD SOMETHING INCREDIBLE! 🚀🔐**

---

## 📞 NEED HELP?

If Claude Code gets stuck or you need clarification:

1. Break down complex sections into smaller tasks
2. Test components individually before combining
3. Use browser DevTools to debug
4. Check console for errors
5. Validate HTML/CSS with W3C validators
6. Ask Claude Code to explain specific implementations

**Remember**: This is a marathon, not a sprint. Build it right, 
build it secure, build it beautiful.

GOOD LUCK, RAGHAV! 💪🔥
