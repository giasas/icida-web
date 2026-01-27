# 🌐 ICIDA.COM.CY - Επίσημη Ιστοσελίδα

> **Modern Minimal Website for ICIDA Technologies**
> Δίγλωσση ιστοσελίδα (Ελληνικά/English) με φόρμες επικοινωνίας και download center

---

## 📋 Περιεχόμενα

- [Επισκόπηση](#επισκόπηση)
- [Χαρακτηριστικά](#χαρακτηριστικά)
- [Δομή Αρχείων](#δομή-αρχείων)
- [Εγκατάσταση & Setup](#εγκατάσταση--setup)
- [Ρυθμίσεις](#ρυθμίσεις)
- [Ενημέρωση Περιεχομένου](#ενημέρωση-περιεχομένου)
- [Deployment](#deployment)
- [Συντήρηση](#συντήρηση)

---

## 🎯 Επισκόπηση

Η ιστοσελίδα **ICIDA.COM.CY** είναι μια σύγχρονη, minimal, πολυσελιδική (multi-page) ιστοσελίδα που παρουσιάζει:

- **Προϊόντα**: Μελάνια εκτύπωσης, ICIDA Media, ZOrders Software, Κορεάτικη συνεργασία
- **Υπηρεσίες**: Παραγωγή, Διανομή ΕΕ, Αντιπροσωπείες
- **Δίκτυο Μεταπωλητών**: Πρόγραμμα συνεργασίας
- **Download Center**: Τεχνικά φύλλα, brochures, πιστοποιητικά
- **Επικοινωνία**: Φόρμες επικοινωνίας με email & WhatsApp integration

---

## ✨ Χαρακτηριστικά

### 🌍 Δίγλωσση Λειτουργία
- Ελληνικά & Αγγλικά
- Αυτόματη αποθήκευση επιλογής γλώσσας
- Εύκολη επέκταση για επιπλέον γλώσσες

### 📱 Responsive Design
- Optimized για Desktop, Tablet, Mobile
- Modern CSS Grid & Flexbox
- Touch-friendly navigation

### 📧 Φόρμες Επικοινωνίας
- FormSubmit integration (χωρίς backend)
- Email notifications
- WhatsApp integration
- Real-time validation

### 🎨 Modern Minimal Design
- Clean typography
- Generous whitespace
- Professional B2B aesthetic
- Smooth animations

### ⚡ Performance
- Lightweight CSS & JavaScript
- Lazy loading images
- Optimized for fast loading
- No heavy frameworks

### 🔍 SEO Ready
- Semantic HTML5
- Meta tags
- Open Graph tags
- Google Analytics ready

---

## 📁 Δομή Αρχείων

```
D:\ICIDA WEB\
├── index.html                    # Αρχική σελίδα
├── products.html                 # Προϊόντα
├── services.html                 # Υπηρεσίες
├── about.html                    # Σχετικά
├── resellers.html                # Μεταπωλητές
├── downloads.html                # Λήψεις
├── contact.html                  # Επικοινωνία
├── dtf-inks.html                 # DTF Inks
├── enterpack.html                # Enterpack
├── README.md                     # Αυτό το αρχείο
│
├── css/
│   ├── variables.css             # CSS μεταβλητές (χρώματα, fonts)
│   ├── style.css                 # Κύρια styles
│   └── responsive.css            # Media queries
│
├── js/
│   ├── language.js               # Διαχείριση γλωσσών
│   ├── forms.js                  # Φόρμες & validation
│   └── main.js                   # Γενική λειτουργικότητα
│
├── lang/
│   ├── el.json                   # Ελληνικά κείμενα
│   └── en.json                   # English texts
│
└── assets/
    ├── images/
    │   ├── ICIDA logo.ai         # Λογότυπο ICIDA (ΗΔΗ ΥΠΑΡΧΕΙ)
    │   ├── ICIDAlable.ai         # Labels μελανιών (ΗΔΗ ΥΠΑΡΧΕΙ)
    │   ├── products/             # Εικόνες προϊόντων
    │   ├── partners/             # Λογότυπα συνεργατών
    │   └── certifications/       # Πιστοποιητικά
    ├── videos/                   # Βίντεο λειτουργίας
    └── downloads/
        ├── datasheets/           # PDF τεχνικά φύλλα
        ├── brochures/            # Marketing materials
        └── certificates/         # Πιστοποιητικά εταιρείας
```

---

## 🚀 Εγκατάσταση & Setup

### 1. Προαπαιτούμενα

- **Web Browser** (Chrome, Firefox, Edge, Safari)
- **Text Editor** (VS Code, Sublime, Notepad++ - προαιρετικό)
- **Web Server** για local testing (προαιρετικό)

### 2. Local Testing

Για να δείτε την ιστοσελίδα τοπικά:

**Μέθοδος 1: Άμεση προβολή**
- Ανοίξτε το `index.html` με double-click

**Μέθοδος 2: Local Server (προτεινόμενο)**
```bash
# Python 3
cd "D:\ICIDA WEB"
python -m http.server 8080

# ή με Node.js
npx http-server -p 8080

# ή με PHP
php -S localhost:8080
```

Μετά ανοίξτε: `http://localhost:8080`

---

## ⚙️ Ρυθμίσεις

### 🎨 1. Ενημέρωση Χρωμάτων Brand

Επεξεργαστείτε το `css/variables.css`:

```css
:root {
  /* ΑΝΤΙΚΑΤΑΣΤΗΣΤΕ ΜΕ ΤΑ ΔΙΚΑ ΣΑΣ ΧΡΩΜΑΤΑ */
  --color-primary: #2C3E50;       /* Κύριο χρώμα */
  --color-secondary: #3498DB;     /* Δευτερεύον χρώμα */
  --color-accent: #E74C3C;        /* Accent χρώμα */
}
```

### 📧 2. Ρύθμιση FormSubmit

**Βήμα 1:** Στο `contact.html` και `resellers.html`, αντικαταστήστε:

```html
<form action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">
```

με το πραγματικό σας email:

```html
<form action="https://formsubmit.co/info@icida.com.cy" method="POST">
```

**Βήμα 2:** Πρώτη υποβολή
- Κάντε μια δοκιμαστική υποβολή φόρμας
- Θα λάβετε email επιβεβαίωσης από το FormSubmit
- Κάντε κλικ στο link επιβεβαίωσης
- Η φόρμα ενεργοποιήθηκε!

**Προαιρετικά:**
- Προσθέστε `_next` parameter για custom redirect page
- Ενεργοποιήστε CAPTCHA αν θέλετε

### 📱 3. Ρύθμιση WhatsApp

Στο `js/forms.js`, αντικαταστήστε:

```javascript
const whatsappNumber = '357XXXXXXXX'; // Χωρίς +, με κωδικό χώρας
```

Παράδειγμα για Κύπρο: `35799123456`

### 📊 4. Google Analytics (Προαιρετικό)

Στο κάτω μέρος κάθε HTML σελίδας, ενεργοποιήστε το Google Analytics:

```html
<!-- Αφαιρέστε τα σχόλια και προσθέστε το δικό σας ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID'); // Αντικαταστήστε με το ID σας
</script>
```

### 🔗 5. Ενημέρωση Social Media Links

Σε όλα τα HTML αρχεία (footer), ενημερώστε:

```html
<a href="https://www.facebook.com/icidatechnologies" ...>
<a href="https://cy.linkedin.com/company/icida-technologies" ...>
<a href="https://wa.me/357XXXXXXXX" ...> <!-- Αντικαταστήστε XX -->
```

---

## 📝 Ενημέρωση Περιεχομένου

### 📄 Κείμενα

Επεξεργαστείτε τα αρχεία γλωσσών:
- `lang/el.json` - Ελληνικά
- `lang/en.json` - English

### 🖼️ Εικόνες

1. **Λογότυπο**: Ήδη υπάρχει στο `assets/images/ICIDA logo.ai`
   - Μετατρέψτε το .ai σε .png ή .svg για web use
   - Αντικαταστήστε το path στα HTML αρχεία

2. **Εικόνες Προϊόντων**:
   - Προσθέστε εικόνες στο `assets/images/products/`
   - Ενημερώστε τα `<img src="...">` tags

3. **Πιστοποιητικά & Logos**:
   - `assets/images/certifications/`
   - `assets/images/partners/`

### 📹 Βίντεο

Προσθέστε video files στο `assets/videos/` και ενημερώστε:

```html
<video controls>
  <source src="./assets/videos/product-demo.mp4" type="video/mp4">
</video>

<!-- ή YouTube embed -->
<iframe src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>
```

### 📥 Downloads

Προσθέστε PDFs και άλλα αρχεία:
- `assets/downloads/datasheets/` - Τεχνικά φύλλα
- `assets/downloads/brochures/` - Brochures
- `assets/downloads/certificates/` - Πιστοποιητικά

Ενημερώστε links στο `downloads.html`

---

## 🌐 Deployment

### Hosting Options

**1. GitHub Pages (Δωρεάν)**
```bash
# Δημιουργήστε GitHub repository
# Upload όλα τα αρχεία
# Settings > Pages > Select branch > Save
# Η ιστοσελίδα θα είναι στο: https://username.github.io/repo-name
```

**2. Netlify (Δωρεάν)**
- Drag & drop το φάκελο στο Netlify
- Custom domain: Settings > Domain management
- Automatic SSL

**3. Vercel (Δωρεάν)**
- Deploy μέσω GitHub ή drag & drop
- Custom domain support
- Edge network

**4. Traditional Hosting**
- Upload όλα τα αρχεία μέσω FTP
- Βεβαιωθείτε ότι το `index.html` είναι στο root directory
- Configure domain DNS settings

### Custom Domain Setup

Για το **icida.com.cy**:

1. Στον domain registrar σας, ρυθμίστε DNS records:
   ```
   A Record: @ → IP του hosting
   CNAME: www → yourdomain.com
   ```

2. Περιμένετε DNS propagation (24-48 ώρες)

3. Ενεργοποιήστε SSL certificate

---

## 🔧 Συντήρηση

### Τακτικές Ενέργειες

✅ **Εβδομαδιαία**:
- Έλεγχος φορμών επικοινωνίας
- Απάντηση σε inquiries

✅ **Μηνιαία**:
- Έλεγχος Google Analytics
- Ενημέρωση περιεχομένου (αν χρειάζεται)
- Backup αρχείων

✅ **Τριμηνιαία**:
- Ανανέωση προϊόντων
- Προσθήκη νέων brochures/datasheets
- SEO optimization check

### Προσθήκη Νέου Προϊόντος

1. Προσθέστε εικόνα στο `assets/images/products/`
2. Ενημερώστε `products.html`
3. Προσθέστε τεχνικά φύλλα στο `downloads/`
4. Ενημερώστε language files (el.json, en.json)

### Προσθήκη Νέας Γλώσσας

1. Δημιουργήστε `lang/fr.json` (παράδειγμα για Γαλλικά)
2. Copy structure από `el.json` και μεταφράστε
3. Προσθέστε button στο language switcher
4. Ενημερώστε `js/language.js`

---

## 📞 Υποστήριξη

Για τεχνική υποστήριξη:
- **Email**: info@icida.com.cy
- **Phone**: +357 XX XXXXXX
- **Social**: [Facebook](https://www.facebook.com/icidatechnologies) | [LinkedIn](https://cy.linkedin.com/company/icida-technologies)

---

## 📜 Άδεια Χρήσης

© 2025 ICIDA Technologies. All rights reserved.

---

## 🚨 Σημαντικές Σημειώσεις

### ⚠️ ΠΡΙΝ ΤΟ DEPLOYMENT:

1. ✅ Αντικαταστήστε όλα τα `YOUR_EMAIL@example.com`
2. ✅ Ενημερώστε WhatsApp numbers (`357XXXXXXXX`)
3. ✅ Προσθέστε πραγματική διεύθυνση στο contact.html
4. ✅ Μετατρέψτε `.ai` logos σε web-ready formats (.png/.svg)
5. ✅ Προσθέστε τεχνικά φύλλα και brochures
6. ✅ Test όλες τις φόρμες
7. ✅ Test σε διαφορετικά devices (mobile, tablet, desktop)
8. ✅ Ενεργοποιήστε Google Analytics
9. ✅ Setup SSL certificate
10. ✅ Create backup πριν το deployment

---

✅ Όλες οι βασικές σελίδες έχουν δημιουργηθεί.

---

**🎉 Καλή επιτυχία με την νέα σας ιστοσελίδα!**

---

*Τελευταία ενημέρωση: Ιανουάριος 2025*
