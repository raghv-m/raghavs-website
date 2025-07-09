# 🚀 Portfolio Deployment Guide

This guide will help you deploy both the frontend (Next.js) and backend (Express.js) of your portfolio to production.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier available)
- Railway account (free tier available) or Render account
- Domain name (optional but recommended)

## 🎯 Deployment Strategy

- **Frontend**: Vercel (perfect for Next.js)
- **Backend**: Railway or Render (great for Node.js APIs)
- **Database**: MongoDB Atlas (free tier available)

---

## 🎨 Frontend Deployment (Vercel)

### Step 1: Prepare Frontend

1. **Update API URL**: Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
```

2. **Update contact form**: Modify `components/contact-form.tsx` to use the backend API:
```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// In your submit function:
const response = await fetch(`${API_URL}/api/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### Step 2: Deploy to Vercel

1. **Push to GitHub**:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings:
     - Framework Preset: Next.js
     - Root Directory: `./` (root)
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Add Environment Variables:
     - `NEXT_PUBLIC_API_URL`: Your backend URL

3. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

---

## ⚙️ Backend Deployment (Railway)

### Step 1: Prepare Backend

1. **Install dependencies**:
```bash
cd backend
npm install
```

2. **Create environment file**:
```bash
cp env.example .env
```

3. **Update `.env`**:
```bash
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.vercel.app
JWT_SECRET=your-super-secret-jwt-key-here
```

### Step 2: Deploy to Railway

1. **Push backend to GitHub**:
```bash
cd backend
git init
git add .
git commit -m "Initial backend commit"
git remote add origin https://github.com/yourusername/portfolio-backend.git
git push -u origin main
```

2. **Deploy on Railway**:
   - Go to [railway.app](https://railway.app)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your backend repository
   - Railway will auto-detect Node.js

3. **Configure Environment Variables**:
   - In Railway dashboard, go to your project
   - Click "Variables" tab
   - Add all variables from your `.env` file

4. **Deploy**:
   - Railway will automatically deploy
   - Get your backend URL from the "Deployments" tab
   - Test: `https://your-backend-url.railway.app/health`

### Alternative: Deploy to Render

1. Go to [render.com](https://render.com)
2. Create new "Web Service"
3. Connect your GitHub repo
4. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node

---

## 🗄️ Database Setup (Optional)

### MongoDB Atlas

1. **Create MongoDB Atlas account**:
   - Go to [mongodb.com/atlas](https://mongodb.com/atlas)
   - Create free cluster

2. **Get connection string**:
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string

3. **Update backend**:
   - Add `MONGODB_URI` to your environment variables
   - Update backend to use MongoDB (future enhancement)

---

## 🔗 Connect Frontend to Backend

### Update Frontend API Calls

1. **Create API service** (`lib/api.ts`):
```typescript
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const api = {
  contact: async (data: any) => {
    const response = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  photography: async (tag?: string) => {
    const url = tag ? `${API_BASE}/api/photography?tag=${tag}` : `${API_BASE}/api/photography`;
    const response = await fetch(url);
    return response.json();
  },
  
  projects: async () => {
    const response = await fetch(`${API_BASE}/api/projects`);
    return response.json();
  },
  
  skills: async () => {
    const response = await fetch(`${API_BASE}/api/skills`);
    return response.json();
  }
};
```

2. **Update components to use API**:
```typescript
// In your components, replace static data with API calls
const { data: photos } = await api.photography();
const { data: projects } = await api.projects();
```

---

## 🧪 Testing Your Deployment

### Backend Health Check
```bash
curl https://your-backend-url.railway.app/health
```

### API Endpoints Test
```bash
# Photography
curl https://your-backend-url.railway.app/api/photography

# Projects
curl https://your-backend-url.railway.app/api/projects

# Skills
curl https://your-backend-url.railway.app/api/skills
```

### Frontend Test
- Visit your Vercel URL
- Test contact form
- Test photography gallery
- Test all pages and functionality

---

## 🔧 Environment Variables Summary

### Frontend (.env.local)
```bash
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
```

### Backend (.env)
```bash
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.vercel.app
JWT_SECRET=your-super-secret-jwt-key-here
```

---

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**:
   - Ensure `FRONTEND_URL` is set correctly in backend
   - Check that frontend URL matches exactly

2. **Build Failures**:
   - Check Node.js version compatibility
   - Ensure all dependencies are installed
   - Check for TypeScript errors

3. **API Not Responding**:
   - Verify backend is running
   - Check environment variables
   - Test health endpoint

4. **Images Not Loading**:
   - Ensure images are in `public/assets/` folder
   - Check file paths in photography data

### Debug Commands

```bash
# Test backend locally
cd backend
npm install
npm run dev

# Test frontend locally
npm run dev

# Check build
npm run build
```

---

## 📈 Performance Optimization

### Frontend
- Images are already optimized with Next.js
- Lazy loading implemented
- Compression enabled

### Backend
- Rate limiting configured
- Compression middleware enabled
- Security headers set

---

## 🔒 Security Considerations

- ✅ CORS properly configured
- ✅ Rate limiting enabled
- ✅ Security headers set
- ✅ Input validation implemented
- ✅ Error handling in place

---

## 🎉 Success!

Your portfolio is now live with:
- ✅ Frontend on Vercel
- ✅ Backend API on Railway
- ✅ Contact form functionality
- ✅ Photography gallery with API
- ✅ Projects and skills data
- ✅ Professional deployment

**Next Steps**:
1. Add your custom domain
2. Set up email notifications for contact form
3. Add analytics (Google Analytics, Vercel Analytics)
4. Set up monitoring and logging
5. Add database for persistent data storage

---

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review deployment logs in Vercel/Railway
3. Test endpoints individually
4. Verify environment variables

**Happy Deploying! 🚀** 