/**
 * ICIDA.COM.CY - Language Switcher
 * Bilingual Support (Greek/English)
 */

class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'el';
    // Embed translations directly to support file:// protocol without CORS errors
    this.translations = {
      el: {
        "nav": {
          "home": "ΑΡΧΙΚΗ",
          "products": "ΠΡΟΪΟΝΤΑ",
          "services": "ΥΠΗΡΕΣΙΕΣ",
          "about": "ΣΧΕΤΙΚΑ",
          "resellers": "ΜΕΤΑΠΩΛΗΤΕΣ",
          "downloads": "ΛΗΨΕΙΣ",
          "contact": "ΕΠΙΚΟΙΝΩΝΙΑ"
        },
        "hero": {
          "title": "Καινοτομία & Αριστεία στη Βιομηχανία",
          "subtitle": "Η ICIDA παρέχει προηγμένες λύσεις παραγωγής, διανομής και αντιπροσωπείας στην Ευρωπαϊκή αγορά",
          "cta_primary": "Εξερευνήστε τα Προϊόντα μας",
          "cta_secondary": "Γίνετε Συνεργάτης"
        },
        "home": {
          "services_title": "Οι Υπηρεσίες μας",
          "services_subtitle": "Ολοκληρωμένες λύσεις για κάθε επιχειρηματική ανάγκη",
          "service_1_title": "Παραγωγή Προϊόντων",
          "service_1_desc": "Κατασκευάζουμε υψηλής ποιότητας προϊόντα με σύγχρονες τεχνολογίες και πιστοποιήσεις",
          "service_2_title": "Διανομή ΕΕ",
          "service_2_desc": "Διανέμουμε προϊόντα σε όλη την Ευρωπαϊκή Ένωση με αξιοπιστία και ταχύτητα",
          "service_3_title": "Αντιπροσωπείες",
          "service_3_desc": "Αντιπροσωπεύουμε κορυφαίους κατασκευαστές από Κορέα, Ιταλία, Κίνα και άλλες χώρες",
          "service_4_title": "Δίκτυο Μεταπωλητών",
          "service_4_desc": "Δημιουργήστε επιτυχημένη συνεργασία με το δυναμικό μας δίκτυο",
          "featured_title": "Προτεινόμενα Προϊόντα",
          "featured_subtitle": "Τα πιο δημοφιλή προϊόντα από την γκάμα μας",
          "cta_title": "Ενδιαφέρεστε να γίνετε Μεταπωλητής;",
          "cta_subtitle": "Εγγραφείτε στο δίκτυό μας και απολαύστε αποκλειστικά οφέλη",
          "cta_button": "Αίτηση Συνεργασίας",
          "brands_title": "Τα Brands μας",
          "brands_subtitle": "Καινοτόμα προϊόντα που παράγονται και συσκευάζονται από την ICIDA Technologies",
          "partners_title": "Στρατηγικές Συνεργασίες",
          "partners_subtitle": "Αποκλειστικές συνεργασίες με κορυφαίους διεθνείς κατασκευαστές"
        },
        "products": {
          "page_title": "Τα Προϊόντα μας",
          "page_subtitle": "Ανακαλύψτε την πλήρη γκάμα των προϊόντων και λύσεων μας",
          "korean_title": "Enterpack - Μηχανές Συσκευασίας Τροφίμων",
          "korean_desc": "Επαγγελματικές μηχανές σφράγισης δίσκων (tray sealers) και συσκευασίας με MAP για όλες τις επιχειρήσεις",
          "inks_title": "Μελάνια Εκτύπωσης",
          "inkjet_title": "Inkjet Μελάνια",
          "inkjet_desc": "Επαγγελματικά μελάνια inkjet για βιομηχανική χρήση",
          "dtf_title": "DTF Μελάνια",
          "dtf_desc": "Μελάνια DTF (Direct to Film) για εκτυπώσεις υψηλής ποιότητας",
          "media_title": "ICIDA Media - Επαγγελματικά Χαρτιά",
          "media_desc": "Ειδικά χαρτιά εκτύπωσης για επαγγελματική χρήση",
          "software_title": "ZOrders Software",
          "software_desc": "Έξυπνο λογισμικό διαχείρισης εργαστηρίου",
          "view_details": "Περισσότερα",
          "download_specs": "Λήψη Τεχνικών Χαρακτηριστικών"
        },
        "services_page": {
          "page_title": "Οι Υπηρεσίες μας",
          "page_subtitle": "Ολοκληρωμένες λύσεις από την παραγωγή μέχρι τη διανομή",
          "manufacturing_title": "Παραγωγή & Κατασκευή",
          "manufacturing_desc": "Παράγουμε προϊόντα υψηλής ποιότητας με σύγχρονο εξοπλισμό και πιστοποιήσεις. Η ομάδα μας εξασφαλίζει τήρηση διεθνών προτύπων σε κάθε στάδιο παραγωγής.",
          "distribution_title": "Διανομή στην ΕΕ",
          "distribution_desc": "Διαθέτουμε εκτεταμένο δίκτυο διανομής σε όλη την Ευρωπαϊκή Ένωση. Εξασφαλίζουμε γρήγορη και ασφαλή παράδοση των προϊόντων σας.",
          "representation_title": "Αντιπροσωπείες & Διαμεσολάβηση",
          "representation_desc": "Αντιπροσωπεύουμε κορυφαίους κατασκευαστές από Κορέα, Ιταλία, Κίνα και άλλες χώρες. Παρέχουμε πλήρη υποστήριξη για είσοδο στην Ευρωπαϊκή αγορά."
        },
        "about": {
          "page_title": "Σχετικά με την ICIDA",
          "page_subtitle": "Η ιστορία μας, οι αξίες μας, το όραμά μας",
          "profile_title": "Εταιρικό Προφίλ",
          "profile_desc": "Η ICIDA Technologies είναι μια δυναμική εταιρεία που δραστηριοποιείται στην παραγωγή, διανομή και αντιπροσώπευση προϊόντων στην Ευρωπαϊκή αγορά. Με έδρα στην Κύπρο, παρέχουμε ολοκληρωμένες λύσεις σε επιχειρήσεις σε όλη την ΕΕ.",
          "mission_title": "Αποστολή",
          "mission_desc": "Να παρέχουμε καινοτόμες λύσεις υψηλής ποιότητας που υπερβαίνουν τις προσδοκίες των πελατών μας.",
          "vision_title": "Όραμα",
          "vision_desc": "Να γίνουμε ο κορυφαίος συνεργάτης επιχειρήσεων στην Ευρώπη για βιομηχανικά προϊόντα και λύσεις.",
          "certifications_title": "Πιστοποιήσεις",
          "partnerships_title": "Συνεργασίες"
        },
        "resellers": {
          "page_title": "Γίνετε Μεταπωλητής",
          "page_subtitle": "Συνεργαστείτε μαζί μας και αναπτύξτε την επιχείρησή σας",
          "benefits_title": "Πλεονεκτήματα Συνεργασίας",
          "benefit_1_title": "Ανταγωνιστικές Τιμές",
          "benefit_1_desc": "Ειδικές τιμές για μεταπωλητές με εκπτώσεις ανάλογα τον όγκο",
          "benefit_2_title": "Τεχνική Υποστήριξη",
          "benefit_2_desc": "Πλήρης τεχνική υποστήριξη και εκπαίδευση για όλα τα προϊόντα",
          "benefit_3_title": "Marketing Support",
          "benefit_3_desc": "Διαφημιστικό υλικό και υποστήριξη marketing",
          "benefit_4_title": "Γρήγορη Παράδοση",
          "benefit_4_desc": "Προτεραιότητα στις παραδόσεις και ευέλικτοι όροι πληρωμής",
          "form_title": "Φόρμα Αίτησης Μεταπωλητή",
          "form_subtitle": "Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας σύντομα"
        },
        "downloads": {
          "page_title": "Κέντρο Λήψεων",
          "page_subtitle": "Τεχνικά φύλλα, brochures, πιστοποιητικά και βίντεο",
          "datasheets_title": "Τεχνικά Φύλλα",
          "brochures_title": "Brochures",
          "certificates_title": "Πιστοποιητικά",
          "videos_title": "Βίντεο Λειτουργίας"
        },
        "contact": {
          "page_title": "Επικοινωνήστε μαζί μας",
          "page_subtitle": "Είμαστε εδώ να σας βοηθήσουμε",
          "form_title": "Στείλτε μας Μήνυμα",
          "info_title": "Στοιχεία Επικοινωνίας",
          "address": "Διεύθυνση",
          "phone": "Τηλέφωνο",
          "email": "Email",
          "whatsapp": "WhatsApp",
          "social": "Social Media"
        },
        "form": {
          "name": "Ονοματεπώνυμο",
          "email": "Email",
          "phone": "Τηλέφωνο",
          "company": "Εταιρεία",
          "subject": "Θέμα",
          "message": "Μήνυμα",
          "market": "Περιοχή Δραστηριοποίησης",
          "experience": "Εμπειρία (έτη)",
          "submit": "Αποστολή",
          "required": "Υποχρεωτικό πεδίο",
          "success": "Το μήνυμα εστάλη επιτυχώς!",
          "error": "Υπήρξε σφάλμα. Παρακαλώ δοκιμάστε ξανά."
        },
        "footer": {
          "about_title": "Σχετικά",
          "products_title": "Προϊόντα",
          "services_title": "Υπηρεσίες",
          "contact_title": "Επικοινωνία",
          "copyright": "© 2025 ICIDA Technologies. Όλα τα δικαιώματα κατοχυρωμένα.",
          "developed_by": "Developed by ICIDA Technologies"
        }
      },
      en: {
        "nav": {
          "home": "HOME",
          "products": "PRODUCTS",
          "services": "SERVICES",
          "about": "ABOUT",
          "resellers": "RESELLERS",
          "downloads": "DOWNLOADS",
          "contact": "CONTACT"
        },
        "hero": {
          "title": "Innovation & Excellence in Industry",
          "subtitle": "ICIDA provides advanced manufacturing, distribution and representation solutions in the European market",
          "cta_primary": "Explore Our Products",
          "cta_secondary": "Become a Partner"
        },
        "home": {
          "services_title": "Our Services",
          "services_subtitle": "Comprehensive solutions for every business need",
          "service_1_title": "Product Manufacturing",
          "service_1_desc": "We manufacture high-quality products with modern technologies and certifications",
          "service_2_title": "EU Distribution",
          "service_2_desc": "We distribute products throughout the European Union with reliability and speed",
          "service_3_title": "Representations",
          "service_3_desc": "We represent leading manufacturers from Korea, Italy, China and other countries",
          "service_4_title": "Reseller Network",
          "service_4_desc": "Create a successful partnership with our dynamic network",
          "featured_title": "Featured Products",
          "featured_subtitle": "The most popular products from our range",
          "cta_title": "Interested in Becoming a Reseller?",
          "cta_subtitle": "Join our network and enjoy exclusive benefits",
          "cta_button": "Partnership Application",
          "brands_title": "Our Brands",
          "brands_subtitle": "Innovative products manufactured by ICIDA Technologies",
          "partners_title": "Strategic Partnerships",
          "partners_subtitle": "Exclusive partnerships with leading international manufacturers"
        },
        "products": {
          "page_title": "Our Products",
          "page_subtitle": "Discover our complete range of products and solutions",
          "korean_title": "Enterpack - Food Packaging Machines",
          "korean_desc": "Professional tray sealers and MAP packaging machines for all businesses",
          "inks_title": "Printing Inks",
          "inkjet_title": "Inkjet Inks",
          "inkjet_desc": "Professional inkjet inks for industrial use",
          "dtf_title": "DTF Inks",
          "dtf_desc": "DTF (Direct to Film) inks for high-quality printing",
          "media_title": "ICIDA Media - Professional Papers",
          "media_desc": "Specialized printing papers for professional use",
          "software_title": "ZOrders Software",
          "software_desc": "Smart laboratory management software",
          "view_details": "View Details",
          "download_specs": "Download Specifications"
        },
        "services_page": {
          "page_title": "Our Services",
          "page_subtitle": "Comprehensive solutions from production to distribution",
          "manufacturing_title": "Manufacturing & Production",
          "manufacturing_desc": "We produce high-quality products with modern equipment and certifications. Our team ensures compliance with international standards at every stage of production.",
          "distribution_title": "EU Distribution",
          "distribution_desc": "We have an extensive distribution network throughout the European Union. We ensure fast and safe delivery of your products.",
          "representation_title": "Representations & Intermediation",
          "representation_desc": "We represent leading manufacturers from Korea, Italy, China and other countries. We provide full support for entry into the European market."
        },
        "about": {
          "page_title": "About ICIDA",
          "page_subtitle": "Our story, our values, our vision",
          "profile_title": "Company Profile",
          "profile_desc": "ICIDA Technologies is a dynamic company operating in the production, distribution and representation of products in the European market. Based in Cyprus, we provide comprehensive solutions to businesses throughout the EU.",
          "mission_title": "Mission",
          "mission_desc": "To provide innovative high-quality solutions that exceed our customers' expectations.",
          "vision_title": "Vision",
          "vision_desc": "To become the leading business partner in Europe for industrial products and solutions.",
          "certifications_title": "Certifications",
          "partnerships_title": "Partnerships"
        },
        "resellers": {
          "page_title": "Become a Reseller",
          "page_subtitle": "Partner with us and grow your business",
          "benefits_title": "Partnership Benefits",
          "benefit_1_title": "Competitive Prices",
          "benefit_1_desc": "Special prices for resellers with volume discounts",
          "benefit_2_title": "Technical Support",
          "benefit_2_desc": "Full technical support and training for all products",
          "benefit_3_title": "Marketing Support",
          "benefit_3_desc": "Marketing materials and marketing support",
          "benefit_4_title": "Fast Delivery",
          "benefit_4_desc": "Priority in deliveries and flexible payment terms",
          "form_title": "Reseller Application Form",
          "form_subtitle": "Complete the form below and we will contact you soon"
        },
        "downloads": {
          "page_title": "Download Center",
          "page_subtitle": "Datasheets, brochures, certificates and videos",
          "datasheets_title": "Technical Datasheets",
          "brochures_title": "Brochures",
          "certificates_title": "Certificates",
          "videos_title": "Product Videos"
        },
        "contact": {
          "page_title": "Contact Us",
          "page_subtitle": "We're here to help you",
          "form_title": "Send us a Message",
          "info_title": "Contact Information",
          "address": "Address",
          "phone": "Phone",
          "email": "Email",
          "whatsapp": "WhatsApp",
          "social": "Social Media"
        },
        "form": {
          "name": "Full Name",
          "email": "Email",
          "phone": "Phone",
          "company": "Company",
          "subject": "Subject",
          "message": "Message",
          "market": "Market Coverage",
          "experience": "Experience (years)",
          "submit": "Submit",
          "required": "Required field",
          "success": "Message sent successfully!",
          "error": "There was an error. Please try again."
        },
        "footer": {
          "about_title": "About",
          "products_title": "Products",
          "services_title": "Services",
          "contact_title": "Contact",
          "copyright": "© 2025 ICIDA Technologies. All rights reserved.",
          "developed_by": "Developed by ICIDA Technologies"
        }
      }
    };

    this.init();
  }

  async init() {
    // Set initial language without waiting for fetch
    this.setLanguage(this.currentLang);

    // Setup event listeners
    this.setupEventListeners();
  }

  loadLanguages() {
    // Deprecated: Translations are now embedded to support local file execution
    return Promise.resolve();
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    // Update UI
    this.updateUI();
    this.updateButtons();
  }

  updateUI() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getTranslation(key);

      if (translation) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
  }

  getTranslation(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        console.warn(`Translation not found for key: ${key}`);
        return key;
      }
    }

    return value;
  }

  updateButtons() {
    const buttons = document.querySelectorAll('.lang-switcher__btn');
    buttons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  setupEventListeners() {
    const buttons = document.querySelectorAll('.lang-switcher__btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        this.setLanguage(lang);
      });
    });
  }

  getCurrentLang() {
    return this.currentLang;
  }

  t(key) {
    return this.getTranslation(key);
  }
}

// Initialize language manager when DOM is ready
let languageManager;

document.addEventListener('DOMContentLoaded', () => {
  languageManager = new LanguageManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LanguageManager;
}
