# Adding Team Photos

## Quick Setup with Placeholder Images

If you want to quickly add placeholder images for testing, you can use these free services:

### Option 1: UI Avatars (Recommended for quick setup)
Visit: https://ui-avatars.com

Example URLs you can use directly in `app/page.tsx`:
- `https://ui-avatars.com/api/?name=Alex+Johnson&size=200&background=6366f1&color=fff`
- `https://ui-avatars.com/api/?name=Sarah+Chen&size=200&background=6366f1&color=fff`
- `https://ui-avatars.com/api/?name=Michael+Rodriguez&size=200&background=6366f1&color=fff`
- `https://ui-avatars.com/api/?name=Emily+Watson&size=200&background=6366f1&color=fff`
- `https://ui-avatars.com/api/?name=David+Kim&size=200&background=6366f1&color=fff`
- `https://ui-avatars.com/api/?name=Lisa+Anderson&size=200&background=6366f1&color=fff`

### Option 2: Unsplash (Professional photos)
Visit: https://unsplash.com/s/photos/portrait

Download professional portrait photos and save them to `public/images/team/` with the correct filenames.

### Option 3: Use Your Own Photos
1. Take or collect professional headshots of your team members
2. Crop them to square format (1:1 aspect ratio)
3. Resize to at least 400x400px
4. Optimize the images (use tools like TinyPNG or ImageOptim)
5. Save them to `public/images/team/` with these exact filenames:
   - `alex-johnson.jpg`
   - `sarah-chen.jpg`
   - `michael-rodriguez.jpg`
   - `emily-watson.jpg`
   - `david-kim.jpg`
   - `lisa-anderson.jpg`

## Image Specifications
- **Format**: JPG, PNG, or WebP
- **Size**: 400x400px minimum (square)
- **File Size**: < 200KB recommended
- **Quality**: High quality, professional appearance

## Testing
After adding images, restart your development server:
```bash
npm run dev
```

The images will automatically appear in the team member cards. If an image is missing, the component will fall back to showing initials.
