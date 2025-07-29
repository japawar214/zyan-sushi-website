# 🍣 Zyan Sushi - Image Assets Guide

This guide shows you exactly where to place your images and what they should be named for the Zyan Sushi website.

## 📁 Directory Structure

```
public/
├── assets/
    └── images/
        ├── logo/           # Restaurant logo images
        ├── gallery/        # Hero/background images
        ├── menu/           # Food/dish images
        └── locations/      # Restaurant location images
```

## 🖼️ Required Images

### 1. Logo Images (`public/assets/images/logo/`)

**File Name:** `logo.jpg` or `logo.png`
- **Size:** 100x100 pixels (square)
- **Format:** JPG or PNG
- **Purpose:** Main logo for navigation and footer
- **Current Usage:** Lines 95, 401 in App.tsx

---

### 2. Hero/Background Images (`public/assets/images/gallery/`)

**File Name:** `hero-background.jpg`
- **Size:** 1920x1080 pixels (landscape)
- **Format:** JPG (for better file size)
- **Purpose:** Main hero section background
- **Current Usage:** Line 125 in App.tsx
- **Current file:** `jakub-dziubak-iOHJKJqO6E0-unsplash.jpg`

---

### 3. About Section Image (`public/assets/images/gallery/`)

**File Name:** `restaurant-interior.jpg`
- **Size:** 600x400 pixels (landscape)
- **Format:** JPG
- **Purpose:** Shows restaurant interior in "About" section
- **Current Usage:** Line 188 in App.tsx

---

### 4. Location Images (`public/assets/images/locations/`)

**File Names:**
- `breu-branco.jpg`
- `tucurui.jpg`
- `tailandia.jpg`

- **Size:** 400x300 pixels each (landscape)
- **Format:** JPG
- **Purpose:** Show each restaurant location
- **Current Usage:** Lines 242, 250, 258 in App.tsx

---

### 5. Featured Dishes (`public/assets/images/menu/`)

**File Names:**
- `sashimi-premium.jpg`
- `combo-especial.jpg`
- `temaki-artesanal.jpg`

- **Size:** 400x300 pixels each (landscape)
- **Format:** JPG
- **Purpose:** Showcase special dishes
- **Current Usage:** Lines 325, 330, 335 in App.tsx

---

## 🔧 How to Replace Images

### Step 1: Prepare Your Images
1. Resize your images to the exact dimensions specified above
2. Name them exactly as shown (case-sensitive)
3. Use JPG format for photos, PNG for logos with transparency

### Step 2: Place Images in Correct Folders
```
📁 public/assets/images/
├── 📁 logo/
│   └── 🖼️ logo.jpg (100x100px)
├── 📁 gallery/
│   ├── 🖼️ hero-background.jpg (1920x1080px)
│   └── 🖼️ restaurant-interior.jpg (600x400px)
├── 📁 locations/
│   ├── 🖼️ breu-branco.jpg (400x300px)
│   ├── 🖼️ tucurui.jpg (400x300px)
│   └── 🖼️ tailandia.jpg (400x300px)
└── 📁 menu/
    ├── 🖼️ sashimi-premium.jpg (400x300px)
    ├── 🖼️ combo-especial.jpg (400x300px)
    └── 🖼️ temaki-artesanal.jpg (400x300px)
```

### Step 3: Update the Code (Optional)
After placing your images, you'll need to update the image paths in `src/App.tsx`:

**Replace these lines:**

Line 95: Change to:
```tsx
src="./assets/images/logo/logo.jpg"
```

Line 125: Change to:
```tsx
backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('./assets/images/gallery/hero-background.jpg')`
```

Line 188: Change to:
```tsx
src="./assets/images/gallery/restaurant-interior.jpg"
```

Line 242: Change to:
```tsx
image: './assets/images/locations/breu-branco.jpg',
```

Line 250: Change to:
```tsx
image: './assets/images/locations/tucurui.jpg',
```

Line 258: Change to:
```tsx
image: './assets/images/locations/tailandia.jpg',
```

Line 325: Change to:
```tsx
image: './assets/images/menu/sashimi-premium.jpg',
```

Line 330: Change to:
```tsx
image: './assets/images/menu/combo-especial.jpg',
```

Line 335: Change to:
```tsx
image: './assets/images/menu/temaki-artesanal.jpg',
```

Line 401: Change to:
```tsx
src="./assets/images/logo/logo.jpg"
```

## 📝 Image Guidelines

### Quality & Format
- **JPG:** Use for photos (smaller file size)
- **PNG:** Use for logos with transparency
- **Quality:** 80-90% compression for web optimization

### Dimensions
- Always use the exact dimensions specified
- Images that are too large will slow down the website
- Images that are too small will look pixelated

### Content Suggestions
- **Logo:** Your restaurant's actual logo
- **Hero Background:** Appealing sushi/restaurant ambiance photo
- **Restaurant Interior:** Clean, inviting interior shot
- **Location Images:** Exterior or interior shots of each location
- **Menu Items:** High-quality photos of your actual dishes

## 🚀 Quick Start Checklist

- [ ] Create the folder structure as shown above
- [ ] Resize all images to specified dimensions
- [ ] Name files exactly as specified (case-sensitive)
- [ ] Place images in correct folders
- [ ] Update image paths in App.tsx (optional, for local images)
- [ ] Test the website to ensure all images load properly

## 💡 Tips

1. **Optimize images** before uploading to reduce loading times
2. **Use consistent lighting** for food photos
3. **Keep logos simple** and high contrast
4. **Take high-quality photos** for best results
5. **Backup your images** before making changes

---

*Need help? Contact your developer or refer to the App.tsx file for current image usage.*
