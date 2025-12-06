# Strapi CMS User Guide

## 📖 Introduction

This guide helps content managers use the Strapi CMS to manage website content.

## 🚀 Getting Started

### Accessing Strapi Admin

1. Navigate to: `http://localhost:1337/admin` (local) or `https://cms.nocko.com/admin` (production)
2. Login with your admin credentials
3. You'll see the Content Manager dashboard

## 📝 Content Types

### Pages

**Purpose**: Manage website pages (About, Contact, etc.)

**Fields**:
- `title` - Page title (required)
- `slug` - URL-friendly identifier (auto-generated from title)
- `metaTitle` - SEO title
- `metaDescription` - SEO description
- `content` - Page content (rich text)
- `heroImage` - Hero section image
- `seo` - Additional SEO data (JSON)
- `geo` - Geographic targeting (JSON)

**How to create**:
1. Go to Content Manager → Pages
2. Click "Create new entry"
3. Fill in required fields
4. Click "Save" then "Publish"

### Services

**Purpose**: Manage IT services offered

**Fields**:
- `title` - Service name (required)
- `slug` - URL slug (auto-generated)
- `description` - Service description
- `icon` - Service icon image
- `features` - Service features (JSON array)
- `caseStudies` - Related case studies
- `pricing` - Pricing information (JSON)
- `geo` - Geographic targeting

**How to create**:
1. Go to Content Manager → Services
2. Click "Create new entry"
3. Fill in service details
4. Link related case studies
5. Save and publish

### Case Studies

**Purpose**: Showcase client success stories

**Fields**:
- `title` - Case study title (required)
- `slug` - URL slug
- `client` - Client name
- `industry` - Industry type
- `service` - Primary service
- `services` - Related services (multiple)
- `challenge` - Client challenge (rich text)
- `solution` - Solution provided (rich text)
- `results` - Results achieved (JSON)
- `testimonial` - Client testimonial
- `images` - Case study images

**How to create**:
1. Go to Content Manager → Case Studies
2. Click "Create new entry"
3. Fill in case study details
4. Upload images
5. Link to related services
6. Save and publish

### Articles

**Purpose**: Blog posts and articles

**Fields**:
- `title` - Article title (required)
- `slug` - URL slug
- `excerpt` - Short description
- `content` - Article content (rich text)
- `author` - Article author
- `category` - Article category
- `tags` - Article tags (JSON)
- `featuredImage` - Featured image
- `seo` - SEO metadata

**How to create**:
1. Go to Content Manager → Articles
2. Click "Create new entry"
3. Write article content
4. Add featured image
5. Set category and tags
6. Save and publish

### Industries

**Purpose**: Industries served by NOCKO

**Fields**:
- `name` - Industry name (required)
- `slug` - URL slug
- `description` - Industry description
- `icon` - Industry icon
- `services` - Related services
- `caseStudies` - Related case studies

## 🖼️ Media Library

### Uploading Images

1. Go to Media Library
2. Click "Upload" or drag & drop files
3. Images are automatically optimized
4. Use descriptive filenames for SEO

### Best Practices

- Use WebP format when possible
- Optimize images before upload
- Use descriptive alt text
- Organize images in folders

## 🔐 Permissions

### Public API Access

By default, all content types have public read access. To modify:

1. Go to Settings → Users & Permissions → Roles → Public
2. Configure permissions for each content type
3. Enable `find` and `findOne` for public access

## 📋 Content Workflow

### Publishing Process

1. **Draft**: Create content in draft mode
2. **Review**: Review content for accuracy
3. **Publish**: Click "Publish" to make content live
4. **Update**: Content updates appear after ISR revalidation (1 hour)

### Content Updates

- Changes are saved immediately
- Published changes appear on site after cache revalidation
- Use "Unpublish" to temporarily hide content

## 🎨 Rich Text Editor

### Formatting Options

- **Bold** (`Ctrl+B`)
- *Italic* (`Ctrl+I`)
- Headings (H1-H6)
- Lists (ordered, unordered)
- Links
- Images
- Code blocks

### Tips

- Use headings for structure
- Keep paragraphs short
- Use lists for readability
- Add links to related content

## 🔍 SEO Best Practices

### Meta Titles

- Keep under 60 characters
- Include keywords naturally
- Make it compelling

### Meta Descriptions

- Keep under 160 characters
- Include call-to-action
- Use keywords naturally

### Content Structure

- Use proper heading hierarchy (H1 → H2 → H3)
- Add alt text to images
- Use descriptive link text
- Include keywords naturally

## 🚨 Common Issues

### Content Not Appearing

- Check if content is published
- Wait for ISR revalidation (up to 1 hour)
- Clear Next.js cache
- Check API permissions

### Images Not Loading

- Verify image is uploaded to Media Library
- Check image URL in content
- Ensure image is published

### API Errors

- Check API permissions
- Verify content is published
- Check Strapi logs

## 📞 Support

For technical issues, contact the development team.




