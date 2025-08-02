# Deployment Instructions

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   # If you haven't already, create a new repository on GitHub
   git remote add origin https://github.com/yourusername/notion-knowledge-vault.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy via Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

## Alternative: Deploy to Netlify

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder to deploy
   - Or connect your GitHub repository for automatic deployments

## Alternative: Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

## Environment Variables

No environment variables are required for this application. All functionality works with static files.

## Build Output

The application is configured for static export and will generate:
- Static HTML files
- Optimized CSS and JavaScript
- All guide documents in the public folder
- Responsive design assets

## Post-Deployment

After deployment, your application will include:
- Interactive setup wizard
- Database configuration tool
- Template gallery with 50+ templates
- Implementation checklist with progress tracking
- Team onboarding dashboard
- Complete guide viewer with search
- Downloadable resources

## Troubleshooting

If you encounter issues:
1. Ensure all dependencies are installed: `npm install`
2. Check the build succeeds locally: `npm run build`
3. Verify all files are committed to git
4. Check deployment logs for specific errors

## Custom Domain

To use a custom domain:
1. Configure DNS to point to your hosting provider
2. Add the domain in your hosting provider's dashboard
3. Enable HTTPS (usually automatic)

The application is now ready for production use!
