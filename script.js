// Force la page à revenir en haut lors du rechargement
history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;

    // Appliquer le thème sauvegardé au chargement de la page
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
    }

    // Gérer le clic sur le bouton
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        themeToggle.textContent = isLight ? '🌙' : '☀️';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Gérer le menu burger
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    // Fermer le menu en cliquant sur un lien (pour les pages single-page)
    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burgerMenu.classList.remove('active');
    });

    // --- Traduction ---
    const translations = {
        fr: {
            nav_profil: "Profil",
            nav_parcours: "Parcours",
            nav_competences: "Compétences",
            nav_projets: "Projets",
            nav_langues: "Langues",
            nav_contact: "Contact",
            theme_toggle_title: "Changer le thème",
            burger_menu_aria: "Ouvrir le menu",
            hero_subtitle: "Administrateur Réseaux Junior<br>et Développeur IA",
            hero_p: "Spécialisé dans l’intégration de solutions connectées.",
            hero_cta: "Me Contacter",
            title_profil: "Profil",
            profil_p: "Administrateur réseau junior et développeur IA, spécialisé dans l’intégration de solutions connectées. Déterminé, sérieux, autonome et conscient du travail qui m'attend, je suis persuadé que je serais un élément moteur au sein de votre structure !",
            title_parcours: "Parcours & Formations",
            parcours_certs_title: "Certificats & Formations",
            parcours_licence_title: "Licence en Réseaux et Télécommunications",
            parcours_school: "Institut Supérieur des Techniques Économiques Comptable et Commerciales (INTEC SUP)",
            parcours_cert1: "Certificate of Create a Virtual Private Cloud Using AWS (en ligne)",
            parcours_cert2: "Certificat sur la Creation d’un site web avec WordPress (en ligne)",
            parcours_cert3: "Certificat sur Canva pour les Débutants (en ligne)",
            parcours_cert4: "Attestation de suivi sur l’introduction à la cybersécurité, SecNum académie (en ligne, France)",
            parcours_cert8: "Certificate of Introduction to Cybersecurity Fundamentals (en ligne)",
            parcours_cert5: "Formation en Intelligence artificielle appliquée à l’IOT à Orange Digital Center",
            parcours_cert6: "Formation à l’électronique numérique et au versioning avec Git à Orange Digital Center",
            parcours_cert7: "Formation en création de site Web avec WordPress à Orange Digital Center",
            parcours_dut_title: "DUT en informatique de gestion",
            parcours_attestations_title: "Attestations de formation",
            parcours_attestation1: "Attestation de formation en HTML et CSS (IGLOS)",
            parcours_attestation2: "Attestation de formation à la suite bureautique Office (Institut Freedom)",
            parcours_bac_title: "Baccalauréat en Sciences exactes",
            parcours_bac_school: "Lycée Mamadou Kardjigue Diakité (LMKDL)",
            title_competences: "Compétences",
            skill_admin: "Administration Réseaux",
            skill_dev_ia: "Développement IA",
            skill_db: "Base de données",
            skill_iot: "Intégration IoT",
            skill_writing: "Rédaction Technique",
            skill_learning: "Auto-apprentissage",
            skill_perseverance: "Persévérance",
            skill_teamwork: "Esprit d’équipe",
            skill_admin_desc: "Configuration et maintenance de réseaux (TCP/IP, routage, commutation). Sécurisation des infrastructures et gestion des services.",
            skill_dev_ia_desc: "Développement d'applications web avec IA en intégrant des fonctionnalités puissantes pour créer des expériences utilisateur enrichies.",
            skill_db_desc: "Conception, gestion et interrogation de bases de données relationnelles pour un stockage de données efficace.",
            skill_iot_desc: "Intégration de capteurs et d'objets connectés. Programmation de microcontrôleurs Arduino et gestion des flux de données.",
            skill_writing_desc: "Rédaction de documentation technique claire, de rapports et de guides utilisateurs pour assurer la maintenabilité des projets.",
            skill_learning_desc: "Capacité à acquérir rapidement de nouvelles compétences techniques et à m'adapter aux nouvelles technologies de manière autonome.",
            skill_perseverance_desc: "Détermination à résoudre des problèmes complexes et à surmonter les obstacles techniques jusqu'à l'obtention d'un résultat fonctionnel.",
            skill_teamwork_desc: "Collaboration efficace au sein d'une équipe, partage des connaissances et communication constructive pour atteindre les objectifs communs.",
            skill_placeholder_desc: "Cliquez sur une compétence pour voir sa description.",
            title_projets: "Projets",
            project1_title: "CulturaScan (Projet Personnel)",
            project1_p: "Mise en place d’une application web contre la désinformation sur l’espace AES.",
            project2_title: "Site Statique INTEC-SUP (Projet Académique)",
            project2_p: "Création d’un site web statique pour l’université INTEC-SUP.",
            title_langues: "Langues",
            lang_fr: "Français",
            lang_fr_level: "(Très bien)",
            lang_en: "Anglais",
            lang_en_level: "(Niveau scolaire)",
            lang_bm: "Bambara",
            lang_bm_level: "(Langue maternelle)",
            title_contact: "Contact",
            contact_p: "N'hésitez pas à me contacter pour toute collaboration ou opportunité. Le meilleur moyen est de m'envoyer un email directement.",
            contact_phone: "Téléphone :",
            contact_location: "Lieu :",
            contact_cta: "✉️ Envoyez-moi un email",
            scroll_title: "Retour en haut",
            footer_copyright: "Tous droits réservés.",
        },
        en: {
            nav_profil: "Profile",
            nav_parcours: "Journey",
            nav_competences: "Skills",
            nav_projets: "Projects",
            nav_langues: "Languages",
            nav_contact: "Contact",
            theme_toggle_title: "Toggle theme",
            burger_menu_aria: "Open menu",
            hero_subtitle: "Junior Network Administrator<br>& AI Developer",
            hero_p: "Specializing in the integration of connected solutions.",
            hero_cta: "Contact Me",
            title_profil: "Profile",
            profil_p: "Junior Network Administrator and AI developer, specializing in integrating connected solutions. Determined, serious, autonomous, and aware of the work ahead, I am confident I would be a driving force within your organization!",
            title_parcours: "Education & Training",
            parcours_certs_title: "Certificates & Trainings",
            parcours_licence_title: "Bachelor's Degree in Networks and Telecommunications",
            parcours_school: "Higher Institute of Economic, Accounting and Commercial Techniques (INTEC SUP)",
            parcours_cert1: "Certificate of Create a Virtual Private Cloud Using AWS (online)",
            parcours_cert2: "Certificate on Creating a website with WordPress (online)",
            parcours_cert3: "Certificate on Canva for Beginners (online)",
            parcours_cert4: "Certificate of completion on introduction to cybersecurity, SecNum académie (online, France)",
            parcours_cert8: "Certificate of Introduction to Cybersecurity Fundamentals (online)",
            parcours_cert5: "Training in Artificial Intelligence applied to IOT at Orange Digital Center",
            parcours_cert6: "Training in digital electronics and versioning with Git at Orange Digital Center",
            parcours_cert7: "Training in website creation with WordPress at Orange Digital Center",
            parcours_dut_title: "Diploma of Technology in Management Computing",
            parcours_attestations_title: "Training Certificates",
            parcours_attestation1: "Training certificate in HTML and CSS (IGLOS)",
            parcours_attestation2: "Training certificate in Office suite (Institut Freedom)",
            parcours_bac_title: "Baccalaureate in Exact Sciences",
            parcours_bac_school: "Mamadou Kardjigue Diakité High School (LMKDL)",
            title_competences: "Skills",
            skill_admin: "Network Administration",
            skill_dev_ia: "AI Development",
            skill_db: "Databases",
            skill_iot: "IoT Integration",
            skill_writing: "Technical Writing",
            skill_learning: "Self-learning",
            skill_perseverance: "Perseverance",
            skill_teamwork: "Team Spirit",
            skill_admin_desc: "Configuration and maintenance of networks (TCP/IP, routing, switching). Securing infrastructures and managing services.",
            skill_dev_ia_desc: "Development of web applications with AI by integrating powerful features to create enriched user experiences.",
            skill_db_desc: "Design, management, and querying of relational databases for efficient data storage.",
            skill_iot_desc: "Integration of sensors and connected objects. Programming Arduino microcontrollers and managing data streams.",
            skill_writing_desc: "Writing clear technical documentation, reports, and user guides to ensure project maintainability.",
            skill_learning_desc: "Ability to quickly acquire new technical skills and adapt to new technologies autonomously.",
            skill_perseverance_desc: "Determination to solve complex problems and overcome technical obstacles until a functional result is achieved.",
            skill_teamwork_desc: "Effective collaboration within a team, sharing knowledge and constructive communication to achieve common goals.",
            skill_placeholder_desc: "Click on a skill to see its description.",
            title_projets: "Projects",
            project1_title: "CulturaScan (Personal Project)",
            project1_p: "Implementation of a web application against disinformation in the AES space.",
            project2_title: "INTEC-SUP Static Site (Academic Project)",
            project2_p: "Creation of a static website for INTEC-SUP university.",
            title_langues: "Languages",
            lang_fr: "French",
            lang_fr_level: "(Fluent)",
            lang_en: "English",
            lang_en_level: "(School level)",
            lang_bm: "Bambara",
            lang_bm_level: "(Native)",
            title_contact: "Contact",
            contact_p: "Feel free to contact me for any collaboration or opportunity. The best way is to send me an email directly.",
            contact_phone: "Phone:",
            contact_location: "Location:",
            contact_cta: "✉️ Send me an email",
            scroll_title: "Back to top",
            footer_copyright: "All rights reserved.",
        },
        bm: {
            nav_profil: "Jɔyɔrɔ",
            nav_parcours: "Taama",
            nav_competences: "Dɔnkow",
            nav_projets: "Baaraw",
            nav_langues: "Kanw",
            nav_contact: "Waleya",
            theme_toggle_title: "Tɛmɛsira yɛlɛma",
            burger_menu_aria: "Menu da wuli",
            hero_subtitle: "Reso admin jɔnni<br>ani IA Develɔpɛri",
            hero_p: "A ka fɛɛrɛw bɛɛ lajɛlen don.",
            hero_cta: "N wele",
            title_profil: "Jɔyɔrɔ",
            profil_p: "Reso admin jɔnni ani develɔpɛri, min bɛ fɛɛrɛw bɛɛ lajɛlen don. Kɔrɔtɔlen, sɔbɛ, yɛrɛmahɔrɔnyalen ani n ka baara dɔnnen, n dalen b'a la ko n bɛna kɛ fanga ye aw ka sigida kɔnɔ!",
            title_parcours: "Taama & Kalanw",
            parcours_certs_title: "Setifikaw & Kalanw",
            parcours_licence_title: "Lisansi Réseaux et Télécommunications kɔnɔ",
            parcours_school: "Institut Supérieur des Techniques Économiques Comptable et Commerciales (INTEC SUP)",
            parcours_cert1: "Certificate of Create a Virtual Private Cloud Using AWS (en ligne)",
            parcours_cert2: "Setifika WordPress ye site web dilan kan (en ligne)",
            parcours_cert3: "Setifika Canva kan a daminɛbagaw ye (en ligne)",
            parcours_cert4: "Cybersécurité daminɛ kan, SecNum académie (en ligne, France)",
            parcours_cert8: "Introduction to Cybersecurity Fundamentals (en ligne)",
            parcours_cert5: "Kalan IOT kan Orange Digital Center la",
            parcours_cert6: "Kalan elektroniki nimeriki ani Git kan Orange Digital Center la",
            parcours_cert7: "Kalan site web dilan kan WordPress fɛ Orange Digital Center la",
            parcours_dut_title: "DUT gestion informatique kɔnɔ",
            parcours_attestations_title: "Kalan setifikaw",
            parcours_attestation1: "Kalan setifika HTML & CSS kan (IGLOS)",
            parcours_attestation2: "Kalan setifika Office suite kan (Institut Freedom)",
            parcours_bac_title: "Bakalorea Sciences exactes kɔnɔ",
            parcours_bac_school: "Lycée Mamadou Kardjigue Diakité (LMKDL)",
            title_competences: "Dɔnkow",
            skill_admin: "Reso admin",
            skill_dev_ia: "IA Develɔpɛri",
            skill_db: "Données base",
            skill_iot: "IoT lajɛlen",
            skill_writing: "Tekniki sɛbɛnni",
            skill_learning: "Yɛrɛ-kalan",
            skill_perseverance: "Kɔrɔtɔli",
            skill_teamwork: "Ekipu baara",
            skill_admin_desc: "Reso sigili ani ladonni (TCP/IP, routage, commutation). Infrastructure lakana ani servisw ladonni.",
            skill_dev_ia_desc: "Aplikasion web dilanni ni IA ye, ka fɛɛrɛ barikamaw lajɛlen walasa ka baarakɛlaw ka ko kɛcogo nafoloma dilan.",
            skill_db_desc: "Données base relationnelles dilanni, ladonni ani ɲinini, données maracogo ɲuman kama.",
            skill_iot_desc: "Capteurw ani fɛnɛw bɛɛ lajɛlen don. Microcontrôleur Arduino programmasiɔn ani données taama ladonni.",
            skill_writing_desc: "Sɛbɛnni teknikɛw, rapɔriw ani baarakɛlaw ka gidw sɛbɛnni, baara lakana kama.",
            skill_learning_desc: "Fanga ka dɔnniya kura sɔrɔ joona ani ka yɛlɛma teknoloji kura ma yɛrɛmahɔrɔnyalen.",
            skill_perseverance_desc: "Kɔrɔtɔli ka gɛlɛyaw ɲɛnabɔ ani ka tekniki gɛlɛyaw bɔ yen fo ka se sɔrɔ.",
            skill_teamwork_desc: "Baara kɛcogo ɲuman ekipu kɔnɔ, dɔnniya partagi ani kumakan ɲuman ka se sɔrɔ.",
            skill_placeholder_desc: "Dɔnniya dɔ digi a ka maana ye.",
            title_projets: "Baaraw",
            project1_title: "CulturaScan (Yɛrɛ ka baara)",
            project1_p: "Web aplikasion sigili AES yɔrɔ la nkalonko juguya kama.",
            project2_title: "Site Statique INTEC-SUP (Kalan baara)",
            project2_p: "Site web statique dilanni INTEC-SUP iniversite ye.",
            title_langues: "Kanw",
            lang_fr: "Fransɛkan",
            lang_fr_level: "(A ka di kosɛbɛ)",
            lang_en: "Angilɛkan",
            lang_en_level: "(Lakorika)",
            lang_bm: "Bamanankan",
            lang_bm_level: "(Ba kan)",
            title_contact: "Waleya",
            contact_p: "Aw kana n wele walima n kan ka baara kɛ. Fɛɛrɛ ɲuman ye ka email ci n ma tɛrɛntɛrɛn.",
            contact_phone: "Telefɔni :",
            contact_location: "Yɔrɔ :",
            contact_cta: "✉️ Email ci n ma",
            scroll_title: "Segin sanfɛ",
            footer_copyright: "Droit bɛɛ lajɛlen don.",
        },
        ar: {
            nav_profil: "الملف الشخصي",
            nav_parcours: "المسار",
            nav_competences: "المهارات",
            nav_projets: "المشاريع",
            nav_langues: "اللغات",
            nav_contact: "الاتصال",
            theme_toggle_title: "تغيير السمة",
            burger_menu_aria: "فتح القائمة",
            hero_subtitle: "مسؤول شبكات مبتدئ<br>ومطور ذكاء اصطناعي",
            hero_p: "متخصص في تكامل الحلول المتصلة.",
            hero_cta: "اتصل بي",
            title_profil: "الملف الشخصي",
            profil_p: "مسؤول شبكات مبتدئ ومطور، متخصص في تكامل الحلول المتصلة. مصمم، جاد، مستقل ومدرك للعمل الذي ينتظرني، أنا مقتنع بأنني سأكون عنصراً دافعاً داخل هيكلكم!",
            title_parcours: "المسار والتكوين",
            parcours_certs_title: "الشهادات والتكوينات",
            parcours_licence_title: "إجازة في الشبكات والاتصالات",
            parcours_school: "المعهد العالي للتقنيات الاقتصادية والمحاسبية والتجارية (INTEC SUP)",
            parcours_cert1: "شهادة إنشاء سحابة افتراضية خاصة باستخدام AWS (عبر الإنترنت)",
            parcours_cert2: "شهادة في إنشاء موقع ويب باستخدام WordPress (عبر الإنترنت)",
            parcours_cert3: "شهادة في Canva للمبتدئين (عبر الإنترنت)",
            parcours_cert4: "شهادة متابعة حول مقدمة في الأمن السيبراني، SecNum académie (عبر الإنترنت، فرنسا)",
            parcours_cert8: "مقدمة في أساسيات الأمن السيبراني (عبر الإنترنت)",
            parcours_cert5: "تدريب في الذكاء الاصطناعي المطبق على إنترنت الأشياء في Orange Digital Center",
            parcours_cert6: "تدريب في الإلكترونيات الرقمية وإدارة الإصدارات باستخدام Git في Orange Digital Center",
            parcours_cert7: "تدريب في إنشاء مواقع الويب باستخدام WordPress في Orange Digital Center",
            parcours_dut_title: "دبلوم جامعي تقني في إعلامية التصرف",
            parcours_attestations_title: "شهادات التكوين",
            parcours_attestation1: "شهادة تكوين في HTML و CSS (IGLOS)",
            parcours_attestation2: "شهادة تكوين في حزمة Office المكتبية (Institut Freedom)",
            parcours_bac_title: "بكالوريا في العلوم الدقيقة",
            parcours_bac_school: "ثانوية مامادو كارجيغ دياكيتي (LMKDL)",
            title_competences: "المهارات",
            skill_admin: "إدارة الشبكات",
            skill_dev_ia: "تطوير الذكاء الاصطناعي",
            skill_db: "قواعد البيانات",
            skill_iot: "تكامل إنترنت الأشياء",
            skill_writing: "الكتابة التقنية",
            skill_learning: "التعلم الذاتي",
            skill_perseverance: "المثابرة",
            skill_teamwork: "روح الفريق",
            skill_admin_desc: "تكوين وصيانة الشبكات (TCP/IP، التوجيه، التحويل). تأمين البنى التحتية وإدارة الخدمات.",
            skill_dev_ia_desc: "تطوير تطبيقات الويب بالذكاء الاصطناعي عبر دمج ميزات قوية لإنشاء تجارب مستخدم غنية.",
            skill_db_desc: "تصميم وإدارة واستعلام قواعد البيانات العلائقية لتخزين البيانات بكفاءة.",
            skill_iot_desc: "تكامل أجهزة الاستشعار والأشياء المتصلة. برمجة المتحكمات الدقيقة Arduino وإدارة تدفقات البيانات.",
            skill_writing_desc: "كتابة وثائق تقنية واضحة وتقارير وأدلة مستخدم لضمان صيانة المشاريع.",
            skill_learning_desc: "القدرة على اكتساب مهارات تقنية جديدة بسرعة والتكيف مع التقنيات الجديدة بشكل مستقل.",
            skill_perseverance_desc: "الإصرار على حل المشكلات المعقدة والتغلب على العقبات التقنية حتى تحقيق نتيجة وظيفية.",
            skill_teamwork_desc: "التعاون الفعال ضمن فريق، ومشاركة المعرفة والتواصل البناء لتحقيق الأهداف المشتركة.",
            skill_placeholder_desc: "انقر على مهارة لرؤية وصفها.",
            title_projets: "المشاريع",
            project1_title: "CulturaScan (مشروع شخصي)",
            project1_p: "تطبيق ويب لمكافحة التضليل الإعلامي في فضاء AES.",
            project2_title: "موقع ثابت لـ INTEC-SUP (مشروع أكاديمي)",
            project2_p: "إنشاء موقع ويب ثابت لجامعة INTEC-SUP.",
            title_langues: "اللغات",
            lang_fr: "الفرنسية",
            lang_fr_level: "(جيد جدا)",
            lang_en: "الإنجليزية",
            lang_en_level: "(مستوى دراسي)",
            lang_bm: "البمبارا",
            lang_bm_level: "(اللغة الأم)",
            title_contact: "الاتصال",
            contact_p: "لا تترددوا في الاتصال بي لأي تعاون أو فرصة. أفضل طريقة هي إرسال بريد إلكتروني إلي مباشرة.",
            contact_phone: "الهاتف:",
            contact_location: "المكان:",
            contact_cta: "✉️ أرسل لي بريدًا إلكترونيًا",
            scroll_title: "العودة للأعلى",
            footer_copyright: "جميع الحقوق محفوظة.",
        }
    };

    const langBtns = document.querySelectorAll('.lang-btn');

    // --- Animations au défilement ---

    // Observateur général pour les éléments qui apparaissent
    const generalObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observateur pour les compétences, pour les animer en décalé (stagger)
    const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skills = entry.target.querySelectorAll('.skill');
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        skill.classList.add('visible');
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    // Appliquer les observateurs aux éléments cibles
    document.querySelectorAll('.card, .timeline-item, .project-card, h2').forEach(el => {
        generalObserver.observe(el);
    });

    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) skillsObserver.observe(skillsGrid);

    // --- Logique de l'animation machine à écrire ---
    let typeInterval; // Pour pouvoir arrêter l'animation en cours
    const typewriterElement = document.querySelector('#hero h2');

    function typewriter(element, text, speed = 75) {
        // Arrêter toute animation précédente
        if (typeInterval) clearInterval(typeInterval);

        let i = 0;
        element.innerHTML = ''; // Vider le texte
        element.classList.add('typewriter'); // Ajouter la classe pour le curseur

        typeInterval = setInterval(() => {
            if (i >= text.length) {
                clearInterval(typeInterval);
                element.classList.remove('typewriter'); // Retire la classe pour faire disparaître le curseur
                return;
            }

            // Gérer les balises HTML comme <br>
            if (text.charAt(i) === '<') {
                const tagEnd = text.indexOf('>', i);
                if (tagEnd !== -1) {
                    element.innerHTML += text.substring(i, tagEnd + 1);
                    i = tagEnd;
                }
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
        }, speed);
    }

    // --- Logique de traduction ---
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        // Gérer la direction du texte pour l'arabe
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }

        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-key');
            const translation = translations[lang]?.[key];
            if (translation) {
                // Si la traduction contient du HTML, on utilise innerHTML
                if (translation.includes('<')) {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Traduire les attributs spéciaux
        document.querySelectorAll('[data-key-title]').forEach(el => {
            const key = el.getAttribute('data-key-title');
            el.title = translations[lang][key];
        });
        document.querySelectorAll('[data-key-aria]').forEach(el => {
            const key = el.getAttribute('data-key-aria');
            el.setAttribute('aria-label', translations[lang][key]);
        });

        // Relancer l'animation machine à écrire avec le nouveau texte
        const newSubtitle = translations[lang]?.hero_subtitle;
        if (newSubtitle && typewriterElement) {
            typewriter(typewriterElement, newSubtitle);
        }

        localStorage.setItem('language', lang);
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    };

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Appliquer la langue sauvegardée ou le français par défaut
    const savedLang = localStorage.getItem('language') || 'fr';
    setLanguage(savedLang);

    // --- Logique d'affichage des descriptions de compétences ---
    const skills = document.querySelectorAll('.skill');
    const skillDescriptionContainer = document.getElementById('skill-description-container');

    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            // Retirer la classe 'active' de toutes les compétences
            skills.forEach(s => s.classList.remove('active'));
            // Ajouter la classe 'active' à la compétence cliquée
            skill.classList.add('active');

            const skillKey = skill.dataset.skillId; // On utilise le nouvel attribut
            const descriptionKey = `${skillKey}_desc`;
            const currentLang = localStorage.getItem('language') || 'fr';
            const description = translations[currentLang]?.[descriptionKey];

            if (description) {
                skillDescriptionContainer.textContent = description;
                skillDescriptionContainer.classList.add('visible');
            }
        });
    });


    // Mettre à jour l'année du copyright
    document.getElementById('year').textContent = new Date().getFullYear();

    // Appliquer les animations multiples au bouton CTA du hero
    const ctaButton = document.querySelector('#hero .cta-button');
    if (ctaButton) {
        ctaButton.style.animation = 'fadeInUp 0.6s ease-out 0.8s forwards, pulse-shadow 2s 1.4s infinite';
    }

    // --- Bouton de défilement vers le haut ---
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});