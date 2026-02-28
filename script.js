document.addEventListener('DOMContentLoaded',()=>{

  // --- Mobile Navigation Toggle ---
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', (e) => {
      // Check if the menu is active and the click is outside both the menu and the hamburger
      if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }
  
  // --- Language Switcher Logic ---
  const translations = {
    en: {
      nav_home: "Home", nav_marine: "Marine", nav_service: "Service", nav_jobs: "Jobs", nav_about: "About", nav_contact: "Contact", nav_register: "Register",
      hero_badge: "Government Licensed Agency",
      hero_title_1: "Forging Success with", hero_title_2: "Elite Global Talent",
      hero_desc: "Your strategic partner for ethical, compliant, and efficient manpower solutions. We bridge the gap between ambition and achievement across the GCC.",
      btn_hire: "Hire Talent", btn_find_jobs: "Find Jobs",
      metric_years: "Years Excellence", metric_compliance: "Compliance",
      about_title: "About Al Kabeer & Partners",
      about_desc: "Headquartered in Dubai, Al Kabeer & Partners is a premier government-licensed recruitment consultancy. We specialize in sourcing top-tier talent for industries ranging from construction to corporate management.",
      about_li_1: "Government-approved & compliant", about_li_2: "Transparent fees and documentation",
      about_li_3: "Verified employer network across GCC", about_li_4: "Ethical & secure placements",
      why_title: "Why Choose Us",
      why_1_title: "Compliance First", why_1_desc: "All processes handled through approved government channels.",
      why_2_title: "Verified Employers", why_2_desc: "We partner only with trusted employers across the GCC.",
      why_3_title: "Dedicated Support", why_3_desc: "End-to-end assistance from screening to onboarding.",
      why_4_title: "Transparent Pricing", why_4_desc: "Clear policies, receipts and no hidden fees.",
      services_title: "Our Services",
      serv_1_title: "Permanent Staffing", serv_1_desc: "Strategic talent acquisition for senior, mid-level, and specialized corporate roles.",
      serv_2_title: "Bulk & Contract Hiring", serv_2_desc: "Scalable workforce deployment for the hospitality, construction, and facilities management sectors.",
      serv_3_title: "Visa & Compliance", serv_3_desc: "Comprehensive visa processing, medical clearance coordination, and government liaison services.",
      serv_4_title: "Employer Solutions", serv_4_desc: "Tailored recruitment strategies, rigorous background verification, and seamless onboarding support.",
      gcc_title: "International Opportunities in the GCC",
      gcc_desc: "We provide recruitment services across the Gulf Cooperation Council (GCC) countries, connecting talent with leading employers in:",
      country_uae: "🇦🇪 UAE", country_ksa: "🇸🇦 Saudi Arabia", country_qatar: "🇶🇦 Qatar", country_kuwait: "🇰🇼 Kuwait", country_oman: "🇴🇲 Oman", country_bahrain: "🇧🇭 Bahrain",
      jobs_title: "Current Vacancies",
      job_security: "Security Guards",
      desc_security: "Protecting assets with vigilance and integrity.",
      job_cleaners: "Cleaners",
      desc_cleaners: "Maintaining hygiene standards for safe environments.",
      job_housemaids: "Housemaids",
      desc_housemaids: "Trusted domestic support for peace of mind.",
      job_cashiers: "Cashiers",
      desc_cashiers: "Efficient handling of transactions with accuracy.",
      job_officeboys: "Office Boys",
      desc_officeboys: "Ensuring smooth daily office operations.",
      job_hospitality: "Hospitality Staff",
      desc_hospitality: "Delivering exceptional guest experiences.",
      job_construction: "Construction Workers",
      desc_construction: "Building the future with skill and dedication.",
      btn_apply: "Apply Now",
      register_title: "Apply / Register",
      register_desc: "Click \"Apply Now\" on a job to start, or fill out the form for general registration.",
      lbl_name: "Name", ph_name: "Full Name",
      lbl_email: "Email", ph_email: "Email",
      lbl_phone: "Phone", ph_phone: "Phone Number",
      btn_submit: "Submit",
      footer_tagline: "Trusted international recruitment partner for compliant, transparent, and ethical staffing solutions across the GCC.",
      footer_contact: "Contact Us",
      footer_address: "Al Fardan Centre, 211A–211B<br>Corniche Street, Al Majaz 3<br>Al Majaz, Sharjah, UAE",
      btn_whatsapp: "WhatsApp",
      footer_rights: "All rights reserved.",
      
      // Marine Page English
      mar_hero_badge: "ISO 9001:2015 Certified",
      mar_hero_title_span: "MARINE",
      mar_hero_desc: "Premier Marine Crewing Agency. We have successfully placed 8000+ Crew worldwide on Tankers, Bulk Carriers, Containers, and Offshore vessels.",
      mar_btn_vacancies: "View Vacancies", mar_btn_pool: "Join Our Pool",
      mar_profile_title: "Marine Division Profile",
      mar_profile_desc: "Al Kabeer Marine is a dedicated division specializing in the recruitment and management of seafarers for the global maritime industry. We are fully MLC 2006 compliant and maintain a vast database of qualified officers and ratings.",
      mar_profile_li_1: "Supplying crew for Main Fleet & Offshore",
      mar_profile_li_2: "Strict pre-departure medical & background checks",
      mar_profile_li_3: "STCW certification verification",
      mar_profile_li_4: "24/7 Crew support & logistics",
      mar_vessel_title: "Vessel Types Served",
      mar_vessel_1: "🛢️ Tankers (VLCC)", mar_vessel_2: "📦 Bulk Carriers", mar_vessel_3: "🚢 Containers", mar_vessel_4: "⚓ Offshore / DP",
      mar_vacancies_title: "Urgent Marine Vacancies",
      mar_job_master: "Master / Captain", mar_job_master_exp: "Exp: 24M+ on Tankers",
      mar_job_ce: "Chief Engineer", mar_job_ce_exp: "Exp: ME Engine Required",
      mar_job_co: "Chief Officer", mar_job_co_exp: "Vessel: Bulk Carrier",
      mar_job_eto: "Electrical Officer (ETO)", mar_job_eto_exp: "High Voltage Cert. Req",
      mar_job_pump: "Pumpman", mar_job_pump_exp: "Exp: Framo Pumps",
      mar_job_rating: "Able Seaman / Oiler", mar_job_rating_exp: "COP Holder Only",
      mar_reg_desc: "Submit your CV for Marine positions.",
      lbl_rank: "Rank / Position", ph_rank: "e.g. Chief Officer", mar_btn_submit: "Submit Application"
    },
    ar: {
      nav_home: "الرئيسية", nav_marine: "القسم البحري", nav_service: "خدماتنا", nav_jobs: "وظائف", nav_about: "من نحن", nav_contact: "اتصل بنا", nav_register: "تسجيل",
      hero_badge: "وكالة مرخصة حكومياً",
      hero_title_1: "نصنع النجاح مع", hero_title_2: "نخبة المواهب العالمية",
      hero_desc: "شريكك الاستراتيجي لحلول القوى العاملة الأخلاقية والمتوافقة والفعالة. نسد الفجوة بين الطموح والإنجاز في جميع أنحاء دول مجلس التعاون الخليجي.",
      btn_hire: "توظيف المواهب", btn_find_jobs: "ابحث عن وظيفة",
      metric_years: "سنوات من التميز", metric_compliance: "امتثال قانوني",
      about_title: "عن الكبير وشركاه",
      about_desc: "يقع مقرنا الرئيسي في دبي، الكبير وشركاه هي شركة استشارات توظيف رائدة مرخصة حكومياً. نحن متخصصون في توفير أفضل المواهب للصناعات التي تتراوح من البناء إلى إدارة الشركات.",
      about_li_1: "معتمدون حكومياً ومتوافقون", about_li_2: "رسوم ووثائق شفافة",
      about_li_3: "شبكة أصحاب عمل موثوقة في الخليج", about_li_4: "توظيف أخلاقي وآمن",
      why_title: "لماذا تختارنا",
      why_1_title: "الامتثال أولاً", why_1_desc: "تتم جميع العمليات من خلال القنوات الحكومية المعتمدة.",
      why_2_title: "أصحاب عمل موثوقون", why_2_desc: "نحن نتشارك فقط مع أصحاب العمل الموثوق بهم في جميع أنحاء الخليج.",
      why_3_title: "دعم مخصص", why_3_desc: "مساعدة شاملة من الفحص إلى التوظيف.",
      why_4_title: "تسعير شفاف", why_4_desc: "سياسات واضحة، إيصالات ولا رسوم خفية.",
      services_title: "خدماتنا",
      serv_1_title: "التوظيف الدائم", serv_1_desc: "اكتساب المواهب الاستراتيجية للأدوار العليا والمتوسطة والمتخصصة.",
      serv_2_title: "التوظيف الجماعي والتعاقدي", serv_2_desc: "نشر القوى العاملة القابلة للتطوير لقطاعات الضيافة والبناء وإدارة المرافق.",
      serv_3_title: "التأشيرات والامتثال", serv_3_desc: "معالجة شاملة للتأشيرات وتنسيق التصاريح الطبية وخدمات الاتصال الحكومي.",
      serv_4_title: "حلول أصحاب العمل", serv_4_desc: "استراتيجيات توظيف مخصصة، وتحقق صارم من الخلفية، ودعم سلس للتوظيف.",
      gcc_title: "فرص دولية في دول مجلس التعاون الخليجي",
      gcc_desc: "نقدم خدمات التوظيف في جميع أنحاء دول مجلس التعاون الخليجي، ونربط المواهب بأصحاب العمل الرائدين في:",
      country_uae: "🇦🇪 الإمارات", country_ksa: "🇸🇦 السعودية", country_qatar: "🇶🇦 قطر", country_kuwait: "🇰🇼 الكويت", country_oman: "🇴🇲 عمان", country_bahrain: "🇧🇭 البحرين",
      jobs_title: "الوظائف الحالية",
      job_security: "حراس أمن",
      desc_security: "حماية الأصول بيقظة ونزاهة.",
      job_cleaners: "عمال نظافة",
      desc_cleaners: "الحفاظ على معايير النظافة لبيئات آمنة.",
      job_housemaids: "عاملات منزلية",
      desc_housemaids: "دعم منزلي موثوق لراحة البال.",
      job_cashiers: "صرافين (كاشير)",
      desc_cashiers: "التعامل الفعال مع المعاملات بدقة.",
      job_officeboys: "عمال مكتب (أوفيس بوي)",
      desc_officeboys: "ضمان سير العمليات المكتبية اليومية بسلاسة.",
      job_hospitality: "موظفي ضيافة",
      desc_hospitality: "تقديم تجارب استثنائية للضيوف.",
      job_construction: "عمال بناء",
      desc_construction: "بناء المستقبل بمهارة وتفاني.",
      btn_apply: "قدم الآن",
      register_title: "التقديم / التسجيل",
      register_desc: "انقر فوق \"قدم الآن\" على وظيفة للبدء، أو املأ النموذج للتسجيل العام.",
      lbl_name: "الاسم", ph_name: "الاسم الكامل",
      lbl_email: "البريد الإلكتروني", ph_email: "البريد الإلكتروني",
      lbl_phone: "الهاتف", ph_phone: "رقم الهاتف",
      btn_submit: "إرسال",
      footer_tagline: "شريك التوظيف الدولي الموثوق لحلول التوظيف المتوافقة والشفافة والأخلاقية في جميع أنحاء الخليج.",
      footer_contact: "اتصل بنا",
      footer_address: "مركز الفردان، 211A–211B<br>شارع الكورنيش، المجاز 3<br>المجاز، الشارقة، الإمارات",
      btn_whatsapp: "واتساب",
      footer_rights: "جميع الحقوق محفوظة.",

      // Marine Page Arabic
      mar_hero_badge: "حاصلة على شهادة ISO 9001:2015",
      mar_hero_title_span: "البحرية",
      mar_hero_desc: "وكالة رائدة في توظيف الطواقم البحرية. قمنا بنجاح بتوظيف أكثر من 8000 فرد طاقم حول العالم على الناقلات، وسفن البضائع السائبة، والحاويات، والسفن البحرية.",
      mar_btn_vacancies: "عرض الشواغر", mar_btn_pool: "انضم إلى فريقنا",
      mar_profile_title: "ملف القسم البحري",
      mar_profile_desc: "الكبير البحرية هو قسم مخصص متخصص في توظيف وإدارة البحارة للصناعة البحرية العالمية. نحن متوافقون تمامًا مع اتفاقية العمل البحري MLC 2006 ونحتفظ بقاعدة بيانات ضخمة من الضباط والبحارة المؤهلين.",
      mar_profile_li_1: "توفير أطقم للأسطول الرئيسي والبحري",
      mar_profile_li_2: "فحوصات طبية وخلفية صارمة قبل المغادرة",
      mar_profile_li_3: "التحقق من شهادات STCW",
      mar_profile_li_4: "دعم لوجستي للطاقم على مدار 24/7",
      mar_vessel_title: "أنواع السفن المخدومة",
      mar_vessel_1: "🛢️ ناقلات النفط (VLCC)", mar_vessel_2: "📦 سفن البضائع السائبة", mar_vessel_3: "🚢 سفن الحاويات", mar_vessel_4: "⚓ سفن الأوفشور / DP",
      mar_vacancies_title: "شواغر بحرية عاجلة",
      mar_job_master: "قبطان / ماستر", mar_job_master_exp: "خبرة: 24 شهر+ على الناقلات",
      mar_job_ce: "كبير مهندسين", mar_job_ce_exp: "خبرة: محركات ME مطلوبة",
      mar_job_co: "كبير ضباط", mar_job_co_exp: "السفينة: بضائع سائبة",
      mar_job_eto: "ضابط كهرباء (ETO)", mar_job_eto_exp: "شهادة الجهد العالي مطلوبة",
      mar_job_pump: "فني مضخات", mar_job_pump_exp: "خبرة: مضخات Framo",
      mar_job_rating: "بحار مؤهل / مزيت", mar_job_rating_exp: "حاملي شهادة الكفاءة فقط",
      mar_reg_desc: "أرسل سيرتك الذاتية للوظائف البحرية.",
      lbl_rank: "الرتبة / المنصب", ph_rank: "مثال: كبير ضباط", mar_btn_submit: "تقديم الطلب"
    }
  };

  const langToggle = document.getElementById('lang-toggle');
  let currentLang = 'en';

  if(langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ar' : 'en';
      updateLanguage(currentLang);
    });
  }

  function updateLanguage(lang) {
    // 1. Update Direction
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    // 2. Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(translations[lang][key]) {
        // Use innerHTML for keys that might contain <br> (like footer address)
        if(key === 'footer_address' || key === 'hero_title_1') {
           el.innerHTML = translations[lang][key];
        } else {
           el.textContent = translations[lang][key];
        }
      }
    });

    // 3. Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if(translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // 4. Update Button Text
    if(langToggle) langToggle.textContent = lang === 'en' ? 'EN | العربية' : 'English | عربي';
  }

  // Initialize AOS
  if(typeof AOS !== 'undefined') AOS.init({ once: true, offset: 100 });

  // EmailJS init
  (function () {
    if (typeof emailjs !== "undefined") {
      emailjs.init("rFKUtDn1xK-KOlPZd");
    }
  })();
  
  // --- Scroll-to-form logic ---
  const registerSection = document.getElementById('register');
  const jobInput = document.getElementById('job');
  
  document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', () => {
      const jobTitle = button.dataset.job;
      if (jobInput) {
        // Set the job title in the hidden input
        jobInput.value = jobTitle || 'General Application';
      }
      if (registerSection) {
        // Scroll to the form
        registerSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Form Submission via EmailJS ---
  const applyForm = document.getElementById("applyForm");
  if (applyForm) {
    applyForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const button = this.querySelector("button");
      const originalText = button.textContent;
      button.textContent = "Sending...";
      button.disabled = true;

      emailjs.sendForm("service_c8xsn7p", "template_3qv07td", this)
        .then(function () {
          alert("Application sent successfully!");
          applyForm.reset();
          if(jobInput) jobInput.value = ''; // Clear job title
        }, function (error) {
          alert("Failed to send. Check console.");
          console.error(error);
        })
        .finally(function() {
          button.textContent = originalText;
          button.disabled = false;
        });
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        const target = document.querySelector(href);
        if(target){ 
          e.preventDefault(); 
          target.scrollIntoView({behavior:'smooth',block:'start'}); 
        }
      }
    })
  });

  // 3D tilt interaction for cards
  if (window.matchMedia('(hover: hover)').matches) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotY = (x - 0.5) * 12;
        const rotX = (0.5 - y) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // Hero parallax: subtle high-quality 3D motion for top elements
  const hero = document.querySelector('.hero-inner');
  const heroVisual = document.querySelector('.hero-visual .card');
  const heroCopy = document.querySelector('.hero-copy');
  if(hero && heroVisual && window.matchMedia('(prefers-reduced-motion: no-preference)').matches){
    function onHeroMove(e){
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX || (e.touches && e.touches[0].clientX)) - rect.left) / rect.width - 0.5;
      const y = ((e.clientY || (e.touches && e.touches[0].clientY)) - rect.top) / rect.height - 0.5;
      const rotY = x * 6; // small rotation
      const rotX = -y * 6;
      heroVisual.style.transform = `translateZ(20px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
      heroCopy.style.transform = `translateX(${x * -10}px) translateY(${y * -6}px)`;
    }
    function onHeroLeave(){
      heroVisual.style.transform = '';
      heroCopy.style.transform = '';
    }
    hero.addEventListener('mousemove', onHeroMove);
    hero.addEventListener('mouseleave', onHeroLeave);
    hero.addEventListener('touchmove', (ev)=>{ if(ev.touches[0]) onHeroMove(ev.touches[0]) }, {passive:true});
    hero.addEventListener('touchend', onHeroLeave);
  }
});
