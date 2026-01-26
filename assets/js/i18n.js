// i18n.js – ترجمة مشتركة لكل الصفحات (index + privacy + about)
// غيّر اللغة فوراً، dir يتعدل، نصوص كاملة ومناسبة

const I18N = {
  ar: {
    dir: "rtl",
    lang: "ar",
    lblLang: "اللغة",
    backHome: "العودة للرئيسية",
    aboutLink: "من نحن",
    privacyLink: "سياسة الخصوصية",
    contactLink: "تواصل",

    // index.html – نصوص مشتركة
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

    // privacy.html
    privacyPageTitle: "سياسة الخصوصية",
    privacyTitle: "سياسة الخصوصية",
    privacyUpdated: "آخر تحديث: يناير 2026",
    privacyH1: "ما الذي نجمعه؟",
    privacyP1: "لا نجمع أي بيانات شخصية تُحدد هويتك، ولا نرسل أي من المدخلات التي تضعها إلى أي خادم خارجي. جميع الحسابات تتم محليًا داخل متصفحك فقط.",
    privacyH2: "التخزين المحلي",
    privacyP2: "نحفظ بعض البيانات مؤقتًا داخل جهازك لتسهيل الاستخدام. يمكنك حذفها بضغطة زر «مسح» أو من إعدادات المتصفح.",
    privacyH3: "الإعلانات وملفات تعريف الارتباط",
    privacyP3: "نستخدم Google AdSense. قد تستخدم Google ملفات تعريف ارتباط لعرض إعلانات مناسبة وقياس الأداء. يمكنك إدارة الإعدادات من Google Ads أو المتصفح.",
    privacyH4: "مشاركة الرابط",
    privacyP4: "الرابط قد يحتوي على المدخلات التي أدخلتها. لا تُرسل هذه المعلومات إلى أي خادم.",
    privacyH5: "التواصل",
    privacyP5: "لأي استفسار: tarekjawish89@gmail.com",
    privacyH6: "التغييرات على السياسة",
    privacyP6: "قد نحدث هذه السياسة. استمرار استخدام الموقع يعني قبول التحديثات.",
    privacyFoot: "باستخدام الموقع توافق على هذه السياسة.",

    // about.html
    aboutPageTitle: "من نحن",
    aboutTitle: "من نحن",
    aboutUpdated: "آخر تحديث: يناير 2026",
    aboutH1: "مقدمة",
    aboutP1: "حاسبة العمر المباشر أداة مجانية لحساب عمرك لحظيًا بدقة عالية. تدعم العربية والتركية والإنجليزية وتعمل بدون تسجيل.",
    aboutH2: "كيف تعمل؟",
    aboutP2: "أدخل تاريخ ميلادك (واختياريًا الساعة) ثم اضغط «احسب». كل الحسابات داخل متصفحك فقط.",
    aboutH3: "لماذا الدقة؟",
    aboutP3: "نحسب السنوات والأشهر بدقة تقويمية حقيقية + دعم التقويم الهجري.",
    aboutH4: "المستقبل",
    aboutP4: "نخطط لإضافة إحصائيات ممتعة ودعم PWA بدون نت.",
    aboutH5: "التواصل",
    aboutP5: "طارق جويش – tarekjawish89@gmail.com",
    aboutFoot: "شكرًا لزيارتك، عمرًا مديدًا بالصحة."
  },

  en: {
    dir: "ltr",
    lang: "en",
    lblLang: "Language",
    backHome: "Back to Home",
    aboutLink: "About",
    privacyLink: "Privacy Policy",
    contactLink: "Contact",

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

    privacyPageTitle: "Privacy Policy",
    privacyTitle: "Privacy Policy",
    privacyUpdated: "Last updated: January 2026",
    privacyH1: "What do we collect?",
    privacyP1: "We do not collect personal data or send inputs to servers. All calculations run locally.",
    privacyH2: "Local Storage",
    privacyP2: "We store some data temporarily on your device. You can clear it anytime.",
    privacyH3: "Ads & Cookies",
    privacyP3: "We use Google AdSense. Google may use cookies for ads. Manage via Google Ads or browser.",
    privacyH4: "Share Link",
    privacyP4: "Share link may contain your inputs. No data is sent to servers.",
    privacyH5: "Contact",
    privacyP5: "For inquiries: tarekjawish89@gmail.com",
    privacyH6: "Policy Changes",
    privacyP6: "We may update this policy. Continued use means acceptance.",
    privacyFoot: "By using the site you agree to this policy.",

    aboutPageTitle: "About Us",
    aboutTitle: "About Us",
    aboutUpdated: "Last updated: January 2026",
    aboutH1: "Introduction",
    aboutP1: "Live Age Calculator is a free tool to calculate your age in real time with high accuracy. Supports Arabic, Turkish, English.",
    aboutH2: "How it works?",
    aboutP2: "Enter birth date/time and click «Calculate». Everything runs in your browser.",
    aboutH3: "Why accuracy matters?",
    aboutP3: "We calculate years/months with real calendar precision + Hijri support.",
    aboutH4: "Future plans",
    aboutP4: "Adding stats, more languages, offline PWA support.",
    aboutH5: "Contact",
    aboutP5: "Tarek Jawish – tarekjawish89@gmail.com",
    aboutFoot: "Thanks for visiting. Wishing you a long healthy life."
  },

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

    privacyPageTitle: "Gizlilik Politikası",
    privacyTitle: "Gizlilik Politikası",
    privacyUpdated: "Son güncelleme: Ocak 2026",
    privacyH1: "Ne topluyoruz?",
    privacyP1: "Kişisel veri toplamıyoruz, hesaplamalar tarayıcıda yerel yapılır.",
    privacyH2: "Yerel Depolama",
    privacyP2: "Bazı verileri cihazınızda saklıyoruz. İstediğiniz zaman temizleyebilirsiniz.",
    privacyH3: "Reklamlar ve Çerezler",
    privacyP3: "Google AdSense kullanıyoruz. Çerez tercihlerini yönetebilirsiniz.",
    privacyH4: "Bağlantı Paylaşımı",
    privacyP4: "Paylaşım bağlantısı girdiğiniz bilgileri içerebilir. Sunucuya gönderilmez.",
    privacyH5: "İletişim",
    privacyP5: "Sorular için: tarekjawish89@gmail.com",
    privacyH6: "Politika Değişiklikleri",
    privacyP6: "Politikayı güncelleyebiliriz. Kullanıma devam etmek kabul anlamına gelir.",
    privacyFoot: "Siteyi kullanarak politikayı kabul etmiş olursunuz.",

    aboutPageTitle: "Hakkında",
    aboutTitle: "Hakkında",
    aboutUpdated: "Son güncelleme: Ocak 2026",
    aboutH1: "Site Hakkında",
    aboutP1: "Canlı Yaş Hesaplayıcı ücretsiz araçtır. Yaşınızı gerçek zamanlı hesaplar, Arapça/Türkçe/İngilizce destekler.",
    aboutH2: "Nasıl çalışır?",
    aboutP2: "Doğum tarihi/saati girin ve «Hesapla»ya basın. Her şey tarayıcıda yapılır.",
    aboutH3: "Doğruluk neden önemli?",
    aboutP3: "Gerçek takvim hassasiyetinde yıl/ay hesaplarız + Hicri takvim desteği.",
    aboutH4: "Gelecek",
    aboutP4: "İstatistikler, daha fazla dil, çevrimdışı PWA desteği planlıyoruz.",
    aboutH5: "İletişim",
    aboutP5: "Tarek Jawish – tarekjawish89@gmail.com",
    aboutFoot: "Ziyaretiniz için teşekkürler, sağlıklı uzun ömür dileriz."
  }
};

function getInitialLang() {
  const urlLang = new URLSearchParams(location.search).get("lang");
  if (urlLang && I18N[urlLang]) return urlLang;

  const saved = localStorage.getItem("lac_lang");
  if (saved && I18N[saved]) return saved;

  const langs = navigator.languages || [navigator.language || "en"];
  const lower = langs.map(l => l.toLowerCase());
  if (lower.some(l => l.startsWith("ar"))) return "ar";
  if (lower.some(l => l.startsWith("tr"))) return "tr";
  return "en";
}

function applyLanguage(lang) {
  if (!I18N[lang]) lang = "ar";
  const t = I18N[lang];

  document.documentElement.lang = t.lang;
  document.documentElement.dir = t.dir;

  // مشترك
  document.getElementById("lblLang")?.textContent = t.lblLang;
  document.getElementById("backHome")?.textContent = t.backHome;
  document.getElementById("aboutLink")?.textContent = t.aboutLink;
  document.getElementById("privacyLink")?.textContent = t.privacyLink;

  // خصوصية
  if (document.querySelector("h1#title")?.textContent.includes("سياسة") || document.querySelector("h1#title")?.textContent.includes("Privacy")) {
    document.getElementById("pageTitle")?.textContent = t.privacyPageTitle;
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

  // من نحن
  if (document.querySelector("h1#title")?.textContent.includes("من نحن") || document.querySelector("h1#title")?.textContent.includes("About")) {
    document.getElementById("pageTitle")?.textContent = t.aboutPageTitle;
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

  const select = document.getElementById("langSelect");
  if (select) select.value = lang;

  localStorage.setItem("lac_lang", lang);
}

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
