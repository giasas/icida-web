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
          "fujifilm_brand": "Korea FUJIFILM Photokiosk",
          "fujifilm_cat": "ΑΥΤΟΜΑΤΟΙ ΠΩΛΗΤΕΣ ΦΩΤΟΓΡΑΦΙΑΣ",
          "fujifilm_brand_desc": "Η ICIDA αποτελεί τον επίσημο συνεργάτη της <a href=\"https://en.fujifilm-kiosk.com/\" target=\"_blank\" style=\"color: var(--color-primary); font-weight: 700;\">Fujifilm Korea</a> για Ελλάδα και Κύπρο, προσφέροντας την πλήρη σειρά των καινοτόμων Selfie Photokiosks. Συνδυάζουμε την κορυφαία τεχνολογία εκτύπωσης της Fujifilm με τις σύγχρονες τάσεις του K-Culture, δημιουργώντας το μέλλον της αυτόματης φωτογράφησης.",
          "partners_title": "Στρατηγικές Συνεργασίες",
          "partners_subtitle": "Αποκλειστικές συνεργασίες με κορυφαίους διεθνείς κατασκευαστές"
        },
        "event": {
          "banner_title": "PhotoVision 2026 - Αθήνα",
          "banner_desc": "Θα μας βρείτε στην έκθεση PhotoVision 2026! Ελάτε να γνωρίσετε από κοντά τις λύσεις μας και να συζητήσουμε για νέες συνεργασίες.",
          "banner_location": "Κλειστό Παλαιού Φαλήρου (Tae Kwon Do)",
          "banner_dates": "13-15 Μαρτίου 2026",
          "banner_cta": "Περισσότερα για την Έκθεση"
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
          "fujifilm_title": "Korea FUJIFILM Photokiosk",
          "fujifilm_desc": "Προηγμένα συστήματα αυτόματων πωλητών (Korea FUJIFILM Photokiosk) από την Fujifilm Korea. Υψηλή ποιότητα εκτύπωσης dye-sublimation, ενσωμάτωση με mirrorless κάμερες και modular σχεδιασμός για κάθε χώρο.",
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
          "representation_desc": "Αντιπροσωπεύουμε κορυφαίους κατασκευαστές από Κορέα, Ιταλία, Κίνα και άλλες χώρες. Παρέχουμε πλήρη υποστήριξη για είσοδο στην Ευρωπαϊκή αγορά.",
          "white_label_title": "White Label & OEM Solutions",
          "white_label_desc": "Παραγωγή ετικετών για συσκευασίες και προϊόντα. Ιδανικό για επιχειρήσεις που θέλουν να προωθήσουν τα προϊόντα τους με το δικό τους brand. Προσφέρουμε πλήρη υποστήριξη για White Label και OEM λύσεις.",
          "software_dev_title": "Ανάπτυξη Λογισμικού & Αυτοματοποίηση",
          "software_dev_desc": "Αναπτύσσουμε custom εφαρμογές για αυτοματοποίηση εργασιών και ειδικά modules ως επέκταση των εφαρμογών που ήδη χρησιμοποιούν οι πελάτες. Βελτιστοποιούμε τις επιχειρηματικές διαδικασίες με έξυπνες λύσεις λογισμικού."
        },
        "about": {
          "page_title": "Σχετικά με την ICIDA",
          "page_subtitle": "Η ιστορία μας, οι αξίες μας, το όραμά μας",
          "profile_title": "Εταιρικό Προφίλ",
          "profile_desc": "Η ICIDA Technologies αποτελεί έναν κόμβο καινοτομίας, εξειδικευμένο στον σχεδιασμό, την παραγωγή και τη στρατηγική διανομή βιομηχανικών λύσεων αιχμής. Με επίκεντρο την Κύπρο και ένα εκτεταμένο δίκτυο συνεργατών σε όλη την Ευρωπαϊκή Ένωση, γεφυρώνουμε το χάσμα μεταξύ της υψηλής τεχνολογίας και των πρακτικών επιχειρηματικών αναγκών. Η τεχνογνωσία μας εκτείνεται από τα επαγγελματικά μελάνια εκτύπωσης έως τα προηγμένα συστήματα αυτόματης φωτογράφησης και συσκευασίας τροφίμων.",
          "mission_title": "Αποστολή",
          "mission_desc": "Να παρέχουμε καινοτόμες λύσεις υψηλής ποιότητας που υπερβαίνουν τις προσδοκίες των πελατών μας.",
          "vision_title": "Όραμα",
          "vision_desc": "Στόχος μας είναι να καθιερωθούμε ως ο πιο αξιόπιστος στρατηγικός σύμβουλος και προμηθευτής τεχνολογικών λύσεων στην Ευρώπη, προωθώντας την επιχειρηματική αριστεία μέσω της καινοτομίας και των αποκλειστικών διεθνών συνεργασιών.",
          "certifications_title": "Πιστοποιήσεις",
          "partnerships_title": "Στρατηγικές Συνεργασίες",
          "kita_title": "Διεθνείς Διασυνδέσεις (<a href=\"https://www.kita.org/\" target=\"_blank\" style=\"color: inherit; text-decoration: underline;\">KITA</a>)",
          "kita_desc": "Βρισκόμαστε σε συνεχή επικοινωνία με τον <a href=\"https://www.kita.org/\" target=\"_blank\" style=\"color: var(--color-primary); font-weight: 700;\">KITA</a> (Korea International Trade Association), τον κορυφαίο οργανισμό εμπορίου της Νότιας Κορέας. Η συνεργασία αυτή στοχεύει στη διαρκή αναζήτηση και εισαγωγή νέων, πρωτοποριακών τεχνολογιών στην Ευρωπαϊκή αγορά, φέρνοντάς μας σε επαφή με τους πιο αξιόπιστους κατασκευαστές της Ασιατικής ηπείρου για τη δημιουργία νέων στρατηγικών συνεργασιών."
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
          "error": "Υπήρξε σφάλμα. Παρακαλώ δοκιμάστε ξανά.",
          "partner_inquiry": "Σας ενδιαφέρει να γίνετε μεταπωλητής ή συνεργάτης;",
          "partner_btn": "Ενδιαφέρομαι!",
          "partner_modal_title": "Αίτηση Συνεργασίας",
          "q1": "Ποιο προϊόν σας ενδιαφέρει περισσότερο;",
          "q1_o1": "Korea FUJIFILM Photokiosks",
          "q1_o2": "Enterpack Μηχανές Συσκευασίας",
          "q1_o3": "Μελάνια & Αναλώσιμα",
          "q2": "Σε ποια χώρα δραστηριοποιείστε;",
          "q2_o1": "Ελλάδα",
          "q2_o2": "Κύπρος",
          "q2_o3": "Γερμανία",
          "q2_o4": "Ιταλία",
          "q2_o5": "Γαλλία",
          "q2_o6": "Ισπανία",
          "q2_o_other": "Άλλη Χώρα...",
          "other_country_label": "Προσδιορίστε Χώρα",
          "other_country_placeholder": "Ποια χώρα;",
          "q3": "Τύπος Επιχείρησης",
          "q3_o1": "Υφιστάμενος Μεταπωλητής",
          "q3_o2": "Νέα Επιχείρηση",
          "q3_o3": "Επαγγελματίας Φωτογράφος / Εργαστήριο",
          "select_subject": "Επιλέξτε θέμα...",
          "sub_general": "Γενική Πληροφορία",
          "sub_products": "Ερώτηση για Προϊόντα",
          "sub_prices": "Αίτηση Τιμοκαταλόγου",
          "sub_support": "Τεχνική Υποστήριξη",
          "sub_partnership": "Πρόταση Συνεργασίας",
          "sub_other": "Άλλο"
        },
        "footer": {
          "about_title": "Σχετικά",
          "products_title": "Προϊόντα",
          "services_title": "Υπηρεσίες",
          "contact_title": "Επικοινωνία",
          "inks": "Μελάνια Εκτύπωσης",
          "media": "ICIDA Media",
          "software": "ZOrders Software",
          "copyright": "© 2025 ICIDA Technologies. Όλα τα δικαιώματα κατοχυρωμένα.",
          "developed_by": "Developed by ICIDA Technologies",
          "reg_info": "ICIDA TECHNOLOGIES | Αρ. Εγγραφής: ΕΕ 56857 | Εγγεγραμμένη στην Κύπρο: 25/01/2023",
          "about_description": "Η ICIDA Technologies παρέχει ολοκληρωμένες λύσεις παραγωγής, διανομής και αντιπροσωπείας στην Ευρωπαϊκή αγορά.",
          "production": "Παραγωγή",
          "distribution": "Διανομή ΕΕ",
          "representation": "Αντιπροσωπείες"
        },
        "fujifilm_page": {
          "hero_title": "Korea FUJIFILM Photokiosks",
          "hero_subtitle": "Ολοκληρωμένες λύσεις Korea FUJIFILM Photokiosk από την Fujifilm Korea",
          "lineup": {
            "title": "Επιλέξτε το δικό σας SELFIE KIOSK",
            "subtitle": "SELFIE KIOSK LINE UP",
            "booth": "SELFIE BOOTH",
            "high_angle": "HIGH ANGLE",
            "mega_photo": "MEGA PHOTO",
            "photo_card": "SELFIE PHOTO CARD",
            "stand_wood": "SELFIE STAND WOOD",
            "stand_box": "SELFIE STAND BOX",
            "cube": "SELFIE CUBE"
          },
          "features": {
            "title": "Σας δίνουμε όλα όσα χρειάζεστε",
            "subtitle": "Για να ξεκινήσετε τη δική σας επιχείρηση Photo Booth",
            "latest_tech": "Τελευταία Τεχνολογία Photo Booth",
            "high_quality": "Υψηλή Ποιότητα Εκτύπωσης (FUJIFILM)",
            "expert_support": "Εξειδικευμένη Τεχνική & Επιχειρηματική Υποστήριξη",
            "ce_cert": "Πιστοποίηση CE",
            "rohs_cert": "Πιστοποίηση RoHS",
            "multi_lang": "Υποστήριξη Πολλαπλών Γλωσσών",
            "qr_pay": "Πληρωμή με QR Code",
            "card_pay": "Πληρωμή με Κάρτα",
            "custom_ui": "Προσαρμογή UI & Πλαισίου"
          },
          "use_cases": {
            "title": "Πώς μπορώ να χρησιμοποιήσω το SELFIE KIOSK;",
            "subtitle": "Παραδείγματα Χρήσης",
            "exhibition": "Εκθέσεις / Events",
            "store": "Καταστήματα",
            "party_festival": "Πάρτι / Φεστιβάλ",
            "popup": "Pop-up Stores"
          }
        }
      },
      "en": {
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
          "fujifilm_brand": "Korea FUJIFILM Photokiosk",
          "fujifilm_cat": "KOREAN SELFIE PHOTOKIOSKS",
          "fujifilm_brand_desc": "ICIDA is the official partner of <a href=\"https://en.fujifilm-kiosk.com/\" target=\"_blank\" style=\"color: var(--color-primary); font-weight: 700;\">Fujifilm Korea</a> for Greece and Cyprus, providing the complete lineup of innovative Selfie Photokiosks. We combine Fujifilm's world-class imaging technology with the latest K-Culture trends, defining the future of automated photography.",
          "partners_title": "Strategic Partnerships",
          "partners_subtitle": "Exclusive partnerships with leading international manufacturers"
        },
        "event": {
          "banner_title": "PhotoVision 2026 - Athens",
          "banner_desc": "Find us at PhotoVision 2026! Come and discover our solutions in person and let's discuss new partnerships.",
          "banner_location": "Tae Kwon Do Arena, Athens",
          "banner_dates": "March 13-15, 2026",
          "banner_cta": "More Info"
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
          "fujifilm_title": "Korea FUJIFILM Photokiosk",
          "fujifilm_desc": "Advanced Korea FUJIFILM Photokiosk systems from Fujifilm Korea. High-quality dye-sublimation printing, integration with mirrorless cameras, and modular design for any space.",
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
          "representation_desc": "We represent leading manufacturers from Korea, Italy, China and other countries. We provide full support for entry into the European market.",
          "white_label_title": "White Label & OEM Solutions",
          "white_label_desc": "Custom label production for packaging and products. Ideal for businesses looking to promote their products under their own brand. We offer full support for White Label and OEM solutions.",
          "software_dev_title": "Software Development & Automation",
          "software_dev_desc": "We develop custom applications for workflow automation and specialized modules as extensions to existing client applications. We optimize business processes with smart software solutions."
        },
        "about": {
          "page_title": "About ICIDA",
          "page_subtitle": "Our story, our values, our vision",
          "profile_title": "Company Profile",
          "profile_desc": "ICIDA Technologies is an innovation hub specializing in the design, production, and strategic distribution of cutting-edge industrial solutions. Centered in Cyprus with an extensive network of partners across the European Union, we bridge the gap between high technology and practical business needs. Our expertise ranges from professional printing inks to advanced automated photography systems and food packaging solutions.",
          "mission_title": "Mission",
          "mission_desc": "To provide innovative high-quality solutions that exceed our customers' expectations.",
          "vision_title": "Vision",
          "vision_desc": "Our goal is to establish ourselves as the most reliable strategic advisor and supplier of technological solutions in Europe, promoting business excellence through innovation and exclusive international partnerships.",
          "certifications_title": "Certifications",
          "partnerships_title": "Strategic Partnerships",
          "kita_title": "International Connections (<a href=\"https://www.kita.org/\" target=\"_blank\" style=\"color: inherit; text-decoration: underline;\">KITA</a>)",
          "kita_desc": "We are in constant communication with <a href=\"https://www.kita.org/\" target=\"_blank\" style=\"color: var(--color-primary); font-weight: 700;\">KITA</a> (Korea International Trade Association), South Korea's leading trade organization. This partnership aims to continuously search for and introduce new, pioneering technologies to the European market, putting us in contact with the most reliable manufacturers on the Asian continent to create new strategic partnerships."
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
          "error": "There was an error. Please try again.",
          "partner_inquiry": "Are you interested in becoming a reseller or partner?",
          "partner_btn": "I'm Interested!",
          "partner_modal_title": "Partnership Application",
          "q1": "Which product interests you the most?",
          "q1_o1": "Korea FUJIFILM Photokiosks",
          "q1_o2": "Enterpack Packaging Machines",
          "q1_o3": "Inks & Consumables",
          "q2": "In which country do you operate?",
          "q2_o1": "Greece",
          "q2_o2": "Cyprus",
          "q2_o3": "Germany",
          "q2_o4": "Italy",
          "q2_o5": "France",
          "q2_o6": "Spain",
          "q2_o_other": "Other Country...",
          "other_country_label": "Specify Country",
          "other_country_placeholder": "Which country?",
          "q3": "Business Type",
          "q3_o1": "Existing Reseller",
          "q3_o2": "New Business",
          "q3_o3": "Professional Photographer / Lab",
          "select_subject": "Select subject...",
          "sub_general": "General Inquiry",
          "sub_products": "Product Inquiry",
          "sub_prices": "Price List Request",
          "sub_support": "Technical Support",
          "sub_partnership": "Partnership Proposal",
          "sub_other": "Other"
        },
        "footer": {
          "about_title": "About",
          "products_title": "Products",
          "services_title": "Services",
          "contact_title": "Contact",
          "inks": "Printing Inks",
          "media": "ICIDA Media",
          "software": "ZOrders Software",
          "copyright": "© 2025 ICIDA Technologies. All rights reserved.",
          "developed_by": "Developed by ICIDA Technologies",
          "reg_info": "ICIDA TECHNOLOGIES | Reg. No: EE 56857 | Registered in Cyprus: 25/01/2023",
          "about_description": "ICIDA Technologies provides comprehensive manufacturing, distribution and representation solutions in the European market.",
          "production": "Manufacturing",
          "distribution": "EU Distribution",
          "representation": "Representations"
        },
        "fujifilm_page": {
          "hero_title": "Korea FUJIFILM Photokiosks",
          "hero_subtitle": "Comprehensive Korea FUJIFILM Photokiosk solutions from Fujifilm Korea",
          "lineup": {
            "title": "Choose your own SELFIE KIOSK",
            "subtitle": "SELFIE KIOSK LINE UP",
            "booth": "SELFIE BOOTH",
            "high_angle": "HIGH ANGLE",
            "mega_photo": "MEGA PHOTO",
            "photo_card": "SELFIE PHOTO CARD",
            "stand_wood": "SELFIE STAND WOOD",
            "stand_box": "SELFIE STAND BOX",
            "cube": "SELFIE CUBE"
          },
          "features": {
            "title": "We Give You Everything You Need",
            "subtitle": "to Start Your Own Photo Booth Business",
            "latest_tech": "Latest Photo Booth Technology",
            "high_quality": "High Quality Photo Prints (FUJIFILM)",
            "expert_support": "Expert Technical & Business Support",
            "ce_cert": "CE Certification",
            "rohs_cert": "RoHS Certification",
            "multi_lang": "Multi-language Support",
            "qr_pay": "QR code Payment",
            "card_pay": "Card Payment",
            "custom_ui": "UI & Frame Customizing"
          },
          "use_cases": {
            "title": "How can I use SELFIE KIOSK?",
            "subtitle": "Use Cases",
            "exhibition": "Exhibition",
            "store": "Store",
            "party_festival": "Party / Festival",
            "popup": "POP UP"
          }
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
          element.innerHTML = translation;
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
