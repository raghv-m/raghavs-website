# Photography Gallery Deployment Guide

## Current Setup

The photography gallery has been updated to work with placeholder images that will display correctly when deployed. Here's what was changed:

### Frontend Changes (`components/photography-gallery.tsx`)
- ✅ Updated image sources to use `https://picsum.photos/` for random placeholder images
- ✅ Added fallback mechanism using `https://via.placeholder.com/` if primary images fail
- ✅ Simplified filenames from complex Instagram-style names to simple `photo1.jpg`, `photo2.jpg`, etc.
- ✅ Added error handling for image loading

### Backend Changes (`backend/routes/photography.js`)
- ✅ Updated photo data to match simplified filenames
- ✅ Maintained all existing API endpoints
- ✅ Kept filtering and search functionality intact

## How to Add Your Real Photos

### Option 1: Use Cloud Storage (Recommended)

1. **Upload to Cloud Storage** (AWS S3, Google Cloud Storage, or similar):
   ```
   - Create a bucket for your photos
   - Upload your photos with the simplified names (photo1.jpg, photo2.jpg, etc.)
   - Make the bucket publicly accessible for reading
   ```

2. **Update Frontend Image Sources**:
   ```typescript
   // In components/photography-gallery.tsx, replace:
   src={`https://picsum.photos/400/300?random=${photo.filename}`}
   
   // With your cloud storage URL:
   src={`https://your-bucket.s3.amazonaws.com/${photo.filename}`}
   ```

### Option 2: Serve from Backend (Alternative)

1. **Create an images folder in your backend**:
   ```
   backend/
   ├── images/
   │   ├── photo1.jpg
   │   ├── photo2.jpg
   │   └── ...
   ```

2. **Add static file serving to backend/server.js**:
   ```javascript
   const path = require('path');
   
   // Add this after your middleware setup:
   app.use('/api/images', express.static(path.join(__dirname, 'images')));
   ```

3. **Update Frontend Image Sources**:
   ```typescript
   // In components/photography-gallery.tsx, replace:
   src={`https://picsum.photos/400/300?random=${photo.filename}`}
   
   // With your backend URL:
   src={`${process.env.NEXT_PUBLIC_API_URL}/images/${photo.filename}`}
   ```

### Option 3: Use Next.js Public Folder

1. **Add images to Next.js public folder**:
   ```
   public/
   ├── images/
   │   ├── photo1.jpg
   │   ├── photo2.jpg
   │   └── ...
   ```

2. **Update Frontend Image Sources**:
   ```typescript
   // In components/photography-gallery.tsx, replace:
   src={`https://picsum.photos/400/300?random=${photo.filename}`}
   
   // With public folder path:
   src={`/images/${photo.filename}`}
   ```

## Environment Variables

Add these to your `.env.local` file:

```env
# For Option 2 (Backend serving)
NEXT_PUBLIC_API_URL=http://localhost:5000

# For production, use your deployed backend URL
# NEXT_PUBLIC_API_URL=https://your-backend-domain.com
```

## Image Optimization Tips

1. **Resize images** to reasonable sizes (800x600 for lightbox, 400x300 for thumbnails)
2. **Use WebP format** for better compression
3. **Optimize file sizes** (aim for <500KB per image)
4. **Use descriptive alt text** (already implemented)

## Testing Your Setup

1. **Local Development**:
   ```bash
   # Start backend
   cd backend && npm start
   
   # Start frontend
   npm run dev
   ```

2. **Check Network Tab** in browser dev tools to ensure images are loading
3. **Test filtering** and lightbox functionality
4. **Verify responsive design** on different screen sizes

## Deployment Checklist

- [ ] Images are uploaded to your chosen storage solution
- [ ] Frontend image URLs are updated
- [ ] Environment variables are set for production
- [ ] Backend is deployed and accessible
- [ ] CORS is properly configured
- [ ] Images load correctly in production
- [ ] All functionality works (filtering, lightbox, etc.)

## Troubleshooting

### Images Not Loading
- Check browser network tab for 404 errors
- Verify image URLs are correct
- Ensure CORS is properly configured
- Check file permissions on cloud storage

### Performance Issues
- Optimize image sizes
- Consider using a CDN
- Implement lazy loading (already done)
- Use WebP format for better compression

### Backend Issues
- Check server logs for errors
- Verify static file serving is configured
- Ensure proper file paths

## Current Status

✅ **Ready for deployment** - The gallery will work with placeholder images
🔄 **Ready for real photos** - Follow the guide above to add your actual photos
✅ **All functionality preserved** - Filtering, lightbox, responsive design all work
✅ **Error handling** - Fallback images if primary sources fail 