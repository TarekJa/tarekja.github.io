// i18n.js – نظام الترجمة المشترك لكل الصفحات
// يغطي: index.html + privacy.html + about.html

const I18N = {
  ar: {
    dir: "rtl",
    lang: "ar",
    lblLang: "اللغة",
    backHome: "العودة للرئيسية",
    aboutLink: "من نحن",
    privacyLink: "سياسة الخصوصية",
    contactLink: "تواصل",

    // ── نصوص مشتركة (index + footer)
    shareBtnText: "مشاركة",
    shareModalTitle: "مشاركة",
    liveTitle: "عمرك الآن",
    tzBadge: "توقيت تركيا",
    rYears: "السنوات",
    rMonths: "الأشهر",
    rWeeks: "الأسابيع",
    rDays: "الأيام",
    rHours: "الساعات",
    rMinutes: "الدقائق",
    rSeconds: "الثواني",

    // ── نصوص صفحة الخصوصية (privacy.html)
    privacyPageTitle: "سياسة الخصوصية",
    privacyTitle: "سياسة الخصوصية",
    privacyUpdated: "آخر تحديث: يناير 2026",
    privacyH1: "ما الذي نجمعه؟",
    privacyP1: "لا نجمع أي بيانات شخصية تُحدد هويتك، ولا نرسل أي من المدخلات التي تضعها (الاسم، تاريخ الميلاد، ساعة الميلاد) إلى أي خادم خارجي. جميع العمليات الحسابية تتم محليًا داخل متصفحك فقط.",
    privacyH2: "التخزين المحلي (Local Storage)",
    privacyP2: "لحسن تجربة الاستخدام، نحفظ بعض البيانات مؤقتًا داخل جهازك (مثل الاسم وتاريخ وساعة الميلاد المدخلين سابقًا) حتى تظل محفوظة في الزيارات التالية. يمكنك حذف هذه البيانات في أي وقت بالضغط على زر «مسح» في الصفحة الرئيسية، أو من خلال إعدادات المتصفح.",
    privacyH3: "الإعلانات وملفات تعريف الارتباط",
    privacyP3: "نستخدم خدمة Google AdSense لعرض الإعلانات. قد تستخدم Google وشركاؤها ملفات تعريف الارتباط أو تقنيات مشابهة لجمع بيانات حول استخدامك للموقع بهدف عرض إعلانات ذات صلة وقياس أداء الإعلانات. لا نتحكم في هذه البيانات. يمكنك إدارة تفضيلات الإعلانات من إعدادات Google Ads أو المتصفح.",
    privacyH4: "ميزة مشاركة الرابط",
    privacyP4: "عند استخدام زر المشاركة، يتم إنشاء رابط يحتوي على المدخلات التي أدخلتها (تاريخ ووقت الميلاد إن وجد) حتى يتمكن الشخص الآخر من رؤية نفس النتيجة. هذه المعلومات لا تُرسل إلى أي خادم، بل تبقى ضمن الرابط فقط.",
    privacyH5: "كيف نتواصل معك؟",
    privacyP5: "لأي استفسار، اقتراح، ملاحظة أو شكوى، يمكنك التواصل معنا مباشرة عبر البريد: tarekjawish89@gmail.com",
    privacyH6: "التغييرات على هذه السياسة",
    privacyP6: "قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر النسخة الجديدة هنا مع تاريخ التحديث. استمرار استخدامك للموقع بعد أي تعديل يُعتبر موافقة ضمنية على السياسة المحدثة.",
    privacyFoot: "باستمرارك في استخدام الموقع، فإنك توافق على هذه السياسة وأي تحديثات لها.",

    // ── نصوص صفحة "من نحن" (about.html)
    aboutPageTitle: "من نحن",
    aboutTitle: "من نحن",
    aboutUpdated: "آخر تحديث: يناير 2026",
    aboutH1: "مقدمة عن الموقع",
    aboutP1: "حاسبة العمر المباشر هي أداة مجانية بسيطة وسريعة تهدف إلى مساعدتك في معرفة عمرك بدقة لحظية (بالثواني والدقائق والساعات والأيام والأسابيع والأشهر والسنوات). تم تصميمها لتكون خفيفة، تعمل بدون تسجيل دخول، وتدعم ثلاث لغات رئيسية: العربية، التركية، والإنجليزية. الموقع مبني بتقنيات ويب حديثة (HTML, CSS, JavaScript) ويعمل على جميع الأجهزة.",
    aboutH2: "كيف تعمل الحاسبة؟",
    aboutP2: "كل ما تحتاجه هو إدخال تاريخ ميلادك (واختياريًا ساعة الميلاد)، ثم تضغط «احسب العمر». الحساب يتم بالكامل داخل متصفحك دون إرسال أي بيانات إلى خادم خارجي. تستخدم تقنيات JavaScript الحديثة مثل Intl.DateTimeFormat لدعم التقويم الهجري (أم القرى)، والحساب الدقيق للأشهر والسنوات بناءً على التواريخ الحقيقية.",
    aboutH3: "لماذا الدقة مهمة؟",
    aboutP3: "معظم حاسبات العمر تعطي نتائج تقريبية فقط. نحن نذهب خطوة أبعد: نحسب السنوات والأشهر بدقة تقويمية حقيقية (مثل: «33 سنة و4 أشهر و12 يوم»). كما نعرض العمر بالتقويم الهجري بدقة، مع مراعاة اختلاف طول السنة الهجرية، وهذا يجعل النتيجة أكثر واقعية ومفيدة خاصة للجمهور العربي والمسلم.",
    aboutH4: "المستقبل والتطوير",
    aboutP4: "الموقع ما زال في طور التطوير المستمر. نخطط لإضافة ميزات جديدة مثل: حساب العمر بالدقائق من لحظة الولادة، إحصائيات ممتعة، دعم المزيد من اللغات، ونسخة تطبيق جوال (PWA) تعمل بدون إنترنت. كل هذا مجانًا وبدون إعلانات مزعجة.",
    aboutH5: "التواصل والدعم",
    aboutP5: "صاحب المشروع: طارق جويش – خبير MEAL يعمل في المجال الإنساني. إذا عندك اقتراح، ملاحظة، أو فكرة لتحسين الموقع، تواصل معي مباشرة عبر البريد: tarekjawish89@gmail.com أو عبر LinkedIn.",
    aboutFoot: "نشكرك على زيارتك، ونتمنى لك عمرًا طويلًا مليئًا بالصحة والسعادة."
  },

  // ── الإنجليزية (en) ────────────────────────────────────────────────────────
  en: {
    dir: "ltr",
    lang: "en",
    lblLang: "Language",
    backHome: "Back to Home",
    aboutLink: "About",
    privacyLink: "Privacy Policy",
    contactLink: "Contact",

    // Shared
    shareBtnText: "Share",
    shareModalTitle: "Share",
    liveTitle: "Your age now",
    tzBadge: "Turkey time",

    rYears: "Years",
    rMonths: "Months",
    rWeeks: "Weeks",
    rDays: "Days",
    rHours: "Hours",
    rMinutes: "Minutes",
    rSeconds: "Seconds",

    // Privacy
    privacyPageTitle: "Privacy Policy",
    privacyTitle: "Privacy Policy",
    privacyUpdated: "Last updated: January 2026",
    privacyH1: "What do we collect?",
    privacyP1: "We do not collect any personally identifiable information and do not transmit any input data to external servers. All calculations are performed locally in your browser.",
    privacyH2: "Local Storage",
    privacyP2: "We temporarily store some data on your device for convenience. You can delete it at any time using the «Clear» button or browser settings.",
    privacyH3: "Ads & Cookies",
    privacyP3: "We use Google AdSense. Google may use cookies to serve relevant ads and measure performance. You can manage preferences via Google Ads or browser settings.",
    privacyH4: "Share Link Feature",
    privacyP4: "The share link may contain your inputs so others can see the same result. No data is sent to any server.",
    privacyH5: "How to contact us?",
    privacyP5: "For inquiries or complaints: tarekjawish89@gmail.com",
    privacyH6: "Changes to this Policy",
    privacyP6: "We may update this policy. Continued use constitutes acceptance of updates.",
    privacyFoot: "By continuing to use the site, you agree to this policy.",

    // About
    aboutPageTitle: "About Us",
    aboutTitle: "About Us",
    aboutUpdated: "Last updated: January 2026",
    aboutH1: "Introduction to the Site",
    aboutP1: "Live Age Calculator is a free, simple and fast tool designed to help you know your exact age in real time (seconds, minutes, hours, days, weeks, months, years). It is lightweight, requires no login, and supports three main languages: Arabic, Turkish, and English.",
    aboutH2: "How does the calculator work?",
    aboutP2: "Enter your birth date (and optionally time), then click «Calculate Age». All calculations happen in your browser without sending data to any server. It uses modern JavaScript features like Intl.DateTimeFormat for Hijri calendar support and precise month/year calculation.",
    aboutH3: "Why is accuracy important?",
    aboutP3: "Most age calculators give approximate results. We go further: we calculate years and months with real calendar precision (e.g. '33 years, 4 months, 12 days'). We also show Hijri age accurately, considering the shorter Hijri year, making results more realistic.",
    aboutH4: "Future & Development",
    aboutP4: "The site is under continuous development. We plan to add: age in minutes since birth, fun stats, more languages, and offline PWA support. All free and without annoying ads.",
    aboutH5: "Contact & Support",
    aboutP5: "Project owner: Tarek Jawish – MEAL Expert in humanitarian field. For suggestions or feedback, contact me at: tarekjawish89@gmail.com or via LinkedIn.",
    aboutFoot: "Thank you for visiting, and we wish you a long life full of health and happiness."
  },

  // ── التركية (tr) ───────────────────────────────────────────────────────────
  tr: {
    dir: "ltr",
    lang: "tr",
    lblLang: "Dil",
    backHome: "Ana sayfaya dön",
    aboutLink: "Hakkında",
    privacyLink: "Gizlilik Politikası",
    contactLink: "İletişim",

    shareBtnText: "Paylaş",
    shareModalTitle: "Paylaş",
    liveTitle: "Şu anki yaşın",
    tzBadge: "Türkiye saati",

    rYears: "Yıl",
    rMonths: "Ay",
    rWeeks: "Hafta",
    rDays: "Gün",
    rHours: "Saat",
    rMinutes: "Dakika",
    rSeconds: "Saniye",

    // Privacy (تركي)
    privacyPageTitle: "Gizlilik Politikası",
    privacyTitle: "Gizlilik Politikası",
    privacyUpdated: "Son güncelleme: Ocak 2026",
    privacyH1: "Ne topluyoruz?",
    privacyP1: "Kişisel tanımlayıcı veri toplamıyoruz ve girdiğiniz bilgileri dış sunuculara göndermiyoruz. Tüm hesaplamalar tarayıcınızda yerel olarak yapılır.",
    privacyH2: "Yerel Depolama (Local Storage)",
    privacyP2: "Kullanım kolaylığı için bazı verileri cihazınızda geçici olarak saklıyoruz. Ana sayfadaki «Temizle» butonuyla veya tarayıcı ayarlarından silebilirsiniz.",
    privacyH3: "Reklamlar ve Çerezler",
    privacyP3: "Google AdSense kullanıyoruz. Google ilgili reklamlar için çerez kullanabilir. Tercihlerinizi Google Ads veya tarayıcı ayarlarından yönetebilirsiniz.",
    privacyH4: "Bağlantı Paylaşma Özelliği",
    privacyP4: "Paylaşım bağlantısı girdiğiniz bilgileri içerebilir. Bu bilgiler herhangi bir sunucuya gönderilmez.",
    privacyH5: "Bize nasıl ulaşılır?",
    privacyP5: "Sorular veya şikayetler için: tarekjawish89@gmail.com",
    privacyH6: "Politikadaki Değişiklikler",
    privacyP6: "Bu politikayı zaman zaman güncelleyebiliriz. Güncellenmiş sürüm burada yayınlanacaktır. Siteyi kullanmaya devam etmek güncellemeleri kabul ettiğiniz anlamına gelir.",
    privacyFoot: "Siteyi kullanmaya devam ederek bu politikayı kabul etmiş olursunuz.",

    // About (تركي)
    aboutPageTitle: "Hakkında",
    aboutTitle: "Hakkında",
    aboutUpdated: "Son güncelleme: Ocak 2026",
    aboutH1: "Site Hakkında",
    aboutP1: "Canlı Yaş Hesaplayıcı ücretsiz, basit ve hızlı bir araçtır. Doğum tarihinizi gerçek zamanlı olarak (saniye, dakika, saat, gün, hafta, ay, yıl) hesaplamanıza yardımcı olur. Hafiftir, giriş gerektirmez ve Arapça, Türkçe, İngilizce dillerini destekler.",
    aboutH2: "Hesaplayıcı nasıl çalışır?",
    aboutP2: "Doğum tarihinizi (isteğe bağlı saat) girin ve «Yaşı Hesapla»ya basın. Tüm hesaplamalar tarayıcınızda yapılır, veri sunucuya gönderilmez. Modern JavaScript ile Hicri takvimi destekler ve gerçek takvim hassasiyetinde ay/yıl hesaplar.",
    aboutH3: "Doğruluk neden önemli?",
    aboutP3: "Çoğu hesaplayıcı yaklaşık sonuç verir. Biz daha ileri gideriz: gerçek takvim hassasiyetinde yıl ve ay hesaplarız (ör: «33 yıl, 4 ay, 12 gün»). Hicri yaşı da doğru hesaplarız, bu sonuçları daha gerçekçi ve özellikle Müslümanlar için faydalı kılar.",
    aboutH4: "Gelecek ve Geliştirme",
    aboutP4: "Site sürekli geliştirilmektedir. Yakında ekleyeceğimiz özellikler: doğumdan beri dakikalar, eğlenceli istatistikler, daha fazla dil, çevrimdışı PWA desteği. Hepsi ücretsiz ve rahatsız edici reklam olmadan.",
    aboutH5: "İletişim ve Destek",
    aboutP5: "Proje sahibi: Tarek Jawish – İnsani yardım alanında MEAL Uzmanı. Öneri, yorum veya fikir için doğrudan iletişime geçin: tarekjawish89@gmail.com veya LinkedIn.",
    aboutFoot: "Ziyaretiniz için teşekkür eder, sağlıklı ve mutlu uzun bir ömür dileriz."
  }
};

// ── الدوال الأساسية ───────────────────────────────────────────────────────────

function getInitialLang() {
  // 1. من الـ URL
  const urlLang = new URLSearchParams(location.search).get("lang");
  if (urlLang && I18N[urlLang]) return urlLang;

  // 2. من localStorage
  const saved = localStorage.getItem("lac_lang");
  if (saved && I18N[saved]) return saved;

  // 3. من لغة المتصفح
  const langs = navigator.languages || [navigator.language || "en"];
  const lower = langs.map(l => l.toLowerCase());
  if (lower.some(l => l.startsWith("ar"))) return "ar";
  if (lower.some(l => l.startsWith("tr"))) return "tr";
  return "en";
}

function applyLanguage(lang) {
  if (!I18N[lang]) lang = "ar";
  const t = I18N[lang];

  // تغيير اتجاه و لغة الصفحة
  document.documentElement.lang = t.lang;
  document.documentElement.dir = t.dir;

  // العناصر المشتركة (موجودة في كل الصفحات)
  document.getElementById("lblLang")?.textContent = t.lblLang;
  document.getElementById("backHome")?.textContent = t.backHome;
  document.getElementById("aboutLink")?.textContent = t.aboutLink;
  document.getElementById("privacyLink")?.textContent = t.privacyLink;

  // ── خصوصية ──
  if (document.getElementById("privacyTitle") || document.getElementById("title")) {
    document.getElementById("pageTitle")?.textContent = t.privacyPageTitle || t.privacyTitle;
    document.getElementById("title")?.textContent = t.privacyTitle;
    document.getElementById("updated")?.textContent = t.privacyUpdated;
    document.getElementById("h1")?.textContent = t.privacyH1;
    document.getElementById("p1")?.textContent = t.privacyP1;
    document.getElementById("h2")?.textContent = t.privacyH2;
    document.getElementById("p2")?.textContent = t.privacyP2;
    document.getElementById("h3")?.textContent = t.privacyH3;
    document.getElementById("p3")?.textContent = t.privacyP3;
    document.getElementById("h4")?.textContent = t.privacyH4;
    document.getElementById("p4")?.textContent = t.privacyP4;
    document.getElementById("h5")?.textContent = t.privacyH5;
    document.getElementById("p5")?.textContent = t.privacyP5;
    document.getElementById("h6")?.textContent = t.privacyH6;
    document.getElementById("p6")?.textContent = t.privacyP6;
    document.getElementById("foot")?.textContent = t.privacyFoot;
  }

  // ── من نحن ──
  if (document.getElementById("aboutTitle") || document.getElementById("title")) {
    document.getElementById("pageTitle")?.textContent = t.aboutPageTitle || t.aboutTitle;
    document.getElementById("title")?.textContent = t.aboutTitle;
    document.getElementById("updated")?.textContent = t.aboutUpdated;
    document.getElementById("h1")?.textContent = t.aboutH1;
    document.getElementById("p1")?.textContent = t.aboutP1;
    document.getElementById("h2")?.textContent = t.aboutH2;
    document.getElementById("p2")?.textContent = t.aboutP2;
    document.getElementById("h3")?.textContent = t.aboutH3;
    document.getElementById("p3")?.textContent = t.aboutP3;
    document.getElementById("h4")?.textContent = t.aboutH4;
    document.getElementById("p4")?.textContent = t.aboutP4;
    document.getElementById("h5")?.textContent = t.aboutH5;
    document.getElementById("p5")?.textContent = t.aboutP5;
    document.getElementById("foot")?.textContent = t.aboutFoot;
  }

  // تحديث قيمة الـ select
  const select = document.getElementById("langSelect");
  if (select) select.value = lang;

  // حفظ الاختيار
  localStorage.setItem("lac_lang", lang);
}

// ── تهيئة الصفحة عند التحميل ──────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const lang = getInitialLang();
  applyLanguage(lang);

  const select = document.getElementById("langSelect");
  if (select) {
    select.addEventListener("change", e => {
      applyLanguage(e.target.value);
    });
  }
});
