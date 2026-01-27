# 🎨 ICIDA Logo Files

## Διαθέσιμα Αρχεία

### SVG Files (Vector - Best Quality)
- **logo.svg** - Τετράγωνο logo (800x800) - Για social media, favicons
- **logo-horizontal.svg** - Οριζόντιο logo (1200x300) - Για header
- **logo-white.svg** - Logo με διάφανο φόντο - Για footer

### Πώς να Προσθέσετε PNG Versions

1. **Αποθηκεύστε την εικόνα που στείλατε:**
   - Αποθηκεύστε ως: `logo-square.png` (τετράγωνο)
   - Προτεινόμενα μεγέθη: 500x500px, 1000x1000px

2. **Δημιουργήστε επιπλέον variations** (προαιρετικό):
   ```
   logo-square-500.png     → 500x500px (για web)
   logo-square-1000.png    → 1000x1000px (retina)
   logo-horizontal-500.png → width: 500px (για header)
   favicon-32.png          → 32x32px (για browser tab)
   favicon-64.png          → 64x64px (retina favicon)
   ```

## Χρωματική Παλέτα

- **Background Blue:** #2E4092
- **Text White:** #FFFFFF

## Χρήση στην Ιστοσελίδα

### Header
```html
<img src="./assets/images/logo-horizontal.svg" alt="ICIDA Logo" class="header__logo">
```

### Footer
```html
<img src="./assets/images/logo-white.svg" alt="ICIDA Logo" class="footer__logo">
```

### Favicon
```html
<link rel="icon" type="image/svg+xml" href="./assets/images/logo.svg">
```

## Online Tools για PNG Creation

Αν θέλετε να φτιάξετε PNG versions από το SVG:

1. **CloudConvert:** https://cloudconvert.com/svg-to-png
2. **SVGOMG:** https://jakearchibald.github.io/svgomg/
3. **Canva:** Ανεβάστε το SVG και export σε PNG

## Optimizaton Tips

- **SVG:** Χρησιμοποιήστε για scalability
- **PNG:** Χρησιμοποιήστε για compatibility
- **Compress PNGs:** https://tinypng.com/
