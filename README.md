# 🎨 Raghav's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a beautiful photography gallery, project showcase, and contact form with a complete backend API.

## ✨ Features

- **🎨 Modern Design**: Glassmorphism effects, smooth animations, and responsive layout
- **📸 Photography Gallery**: Masonry layout with tag-based filtering and lightbox
- **💼 Project Showcase**: Interactive project grid with detailed information
- **📧 Contact Form**: Functional contact form with backend API integration
- **⚡ Performance**: Optimized images, lazy loading, and fast loading times
- **🔒 Security**: Rate limiting, CORS protection, and input validation
- **📱 Responsive**: Works perfectly on all devices and screen sizes

## 🏗️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Masonry CSS** - Responsive masonry layout
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security headers
- **Rate Limiting** - API protection
- **Compression** - Response compression

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd backend
npm install
cd ..
```

4. **Set up environment variables**
```bash
# Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:5000

# Backend (backend/.env)
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your-secret-key
```

5. **Start development servers**
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm run dev
```

6. **Open your browser**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/health

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── photography/       # Photography page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── photography-gallery.tsx
│   ├── projects-grid.tsx
│   ├── contact-form.tsx
│   └── ...
├── backend/               # Express.js API
│   ├── routes/           # API routes
│   │   ├── contact.js
│   │   ├── photography.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── server.js         # Main server file
│   └── package.json
├── public/               # Static assets
│   └── assets/          # Images
├── vercel.json          # Vercel configuration
└── package.json         # Frontend dependencies
```

## 🌐 API Endpoints

### Health Check
- `GET /health` - Server health status

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact/stats` - Contact statistics

### Photography
- `GET /api/photography` - Get all photos
- `GET /api/photography?tag=nature` - Filter by tag
- `GET /api/photography/tags` - Get available tags
- `GET /api/photography/:filename` - Get specific photo

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects?category=web` - Filter by category
- `GET /api/projects?featured=true` - Get featured projects
- `GET /api/projects/:id` - Get specific project
- `GET /api/projects/categories/list` - Get categories

### Skills
- `GET /api/skills` - Get all skills data
- `GET /api/skills/technical` - Get technical skills
- `GET /api/skills/soft` - Get soft skills
- `GET /api/skills/experience` - Get experience
- `GET /api/skills/education` - Get education

## 🚀 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Backend (Railway/Render)
1. Push backend to separate GitHub repo
2. Deploy to Railway or Render
3. Configure environment variables
4. Get backend URL and update frontend

📖 **See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions**

## 🎨 Customization

### Colors
Update `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... your colors
  }
}
```

### Photography
Add your photos to `public/assets/` and update the data in `backend/routes/photography.js`

### Projects
Update project data in `backend/routes/projects.js`

### Skills
Modify skills data in `backend/routes/skills.js`

## 🔧 Development

### Available Scripts

**Frontend:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

**Backend:**
```bash
cd backend
npm run dev      # Start development server
npm start        # Start production server
```

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Conventional commits

## 📸 Photography Gallery Features

- **Masonry Layout**: Responsive grid that adapts to image sizes
- **Tag Filtering**: Filter photos by categories (nature, city, cars, etc.)
- **Lightbox**: Full-screen image viewer with navigation
- **Lazy Loading**: Optimized image loading for performance
- **Glassmorphism**: Modern card design with backdrop blur
- **Smooth Animations**: Framer Motion animations throughout

## 🔒 Security Features

- **Rate Limiting**: API protection against abuse
- **CORS Configuration**: Secure cross-origin requests
- **Input Validation**: Server-side validation for all inputs
- **Security Headers**: Helmet.js for security headers
- **Error Handling**: Comprehensive error handling

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive breakpoints for tablets
- **Desktop Experience**: Enhanced features for larger screens
- **Touch Friendly**: Optimized touch interactions

## 🎯 Performance

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Images and components load on demand
- **Compression**: Backend response compression
- **Caching**: Browser and CDN caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Raghav Mahajan**
- Email: raaghvv0508@gmail.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for hosting
- [Railway](https://railway.app/) for backend hosting

---

⭐ **Star this repository if you found it helpful!** 