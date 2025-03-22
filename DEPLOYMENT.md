# Deploying the Grade 1 Math Assessment App to Vercel

This guide will walk you through deploying your Grade 1 Math Assessment application to Vercel via the web interface.

## Prerequisites

- A GitHub account
- Your Grade 1 Math Assessment code pushed to a GitHub repository

## Step 1: Push your code to GitHub (if not already done)

Ensure your code is pushed to a GitHub repository:

```bash
# Add all changes
git add .

# Commit the changes
git commit -m "Prepare Grade 1 Math Assessment app for deployment"

# Push to GitHub (replace with your repository URL)
git push origin main
```

## Step 2: Deploy to Vercel

1. Go to [Vercel's website](https://vercel.com/) and sign up/log in
2. Click on the **Add New** button and select **Project**
3. Connect your GitHub account if you haven't already
4. Select the repository containing your Grade 1 Math Assessment application
5. Configure your project:
   - Project Name: You can keep the default or customize it
   - Framework Preset: Next.js (should be automatically detected)
   - Root Directory: Leave empty (unless your app is in a subdirectory)
   - Build and Output Settings: Keep defaults
6. Click **Deploy**

## Step 3: Wait for Deployment

Vercel will automatically build and deploy your application. This typically takes less than a minute.

## Step 4: Access Your Deployed Application

Once deployment is complete, you'll receive a URL for your application (e.g., `https://grade1-math-assessment.vercel.app`).

## Step 5: Set Up a Custom Domain (Optional)

1. From your project dashboard, click on **Domains**
2. Follow the prompts to add and configure your custom domain

## Continuous Deployment

Your application is now set up for continuous deployment! Each time you push changes to your GitHub repository, Vercel will automatically deploy the latest version.

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in the Vercel dashboard
2. Ensure your application works locally
3. Verify that your `next.config.js` file is correctly configured
4. Check that your dependencies are correctly listed in `package.json` 