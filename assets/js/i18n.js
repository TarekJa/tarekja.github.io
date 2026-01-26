// i18n.js - نظام ترجمة مشترك لكل الصفحات

const I18N = {
  ar: {
    dir: "rtl",
    lang: "ar",
    // نصوص عامة (بتستخدم في كل الصفحات)
    langLabel: "اللغة",
    backHome: "العودة للرئيسية",
    aboutLink: "من نحن",
    privacyLink: "سياسة الخصوصية",
    contactLink: "تواصل",
    // نصوص صفحة الخصوصية
    privacyTitle: "سياسة الخصوصية",
    privacyUpdated: "آخر تحديث: يناير 2026",
    privacyH1: "ما الذي نجمعه؟",
    privacyP1: "لا نجمع أي بيانات شخصية ولا نرسل أي معلومات تدخلها إلى خوادمنا. كل شيء يحسب داخل المتصفح.",
    privacyH2: "التخزين المحلي",
    privacyP2: "نحفظ بعض البيانات مؤقتاً على جهازك لتسهيل الاستخدام. يمكنك مسحها بضغطة زر.",
    privacyH3: "الإعلانات وملفات تعريف الارتباط",
    privacyP3: "نستخدم Google AdSense. قد تستخدم Google ملفات تعريف ارتباط لعرض إعلانات مناسبة.",
    // ... أضف باقي النصوص للخصوصية هون لاحقاً إذا بدك
  },
  en: {
    dir: "ltr",
    lang: "en",
    langLabel: "Language",
    backHome: "Back to Home",
    aboutLink: "About",
    privacyLink: "Privacy Policy",
    contactLink: "Contact",
    privacyTitle: "Privacy Policy",
    privacyUpdated: "Last updated: January 2026",
    privacyH1: "What do we collect?",
    privacyP1: "We do not collect or send any personal data to servers. Everything is calculated in your browser.",
    privacyH2: "Local Storage",
    privacyP2: "We temporarily store some data on your device for convenience. You can clear it anytime.",
    privacyH3: "Ads & Cookies",
    privacyP3: "We use Google AdSense. Google may use cookies to serve relevant ads.",
  },
  tr: {
    dir: "ltr",
    lang: "tr",
    langLabel: "Dil",
    backHome: "Ana sayfaya dön",
    aboutLink: "Hakkında",
    privacyLink: "Gizlilik Politikası",
    contactLink: "İletişim",
    privacyTitle: "Gizlilik Politikası",
    privacyUpdated: "Son güncelleme: Ocak 2026",
    privacyH1: "Ne topluyoruz?",
    privacyP1: "Kişisel veri toplamıyor ve sunucularımıza bilgi göndermiyoruz. Her şey tarayıcınızda hesaplanır.",
    privacyH2: "Yerel Depolama",
    privacyP2: "Kullanım kolaylığı için bazı verileri cihazınızda saklıyoruz. İstediğiniz zaman silebilirsiniz.",
    privacyH3: "Reklamlar ve Çerezler",
    privacyP3: "Google AdSense kullanıyoruz. Google ilgili reklamlar için çerez kullanabilir.",
  }
};

function getInitialLang() {
  // 1. من الـ URL
  const urlLang = new URLSearchParams(location.search).get("lang");
  if (urlLang && I18N[urlLang]) return urlLang;

  // 2. من localStorage
  const saved = localStorage.getItem("lac_lang");
  if (saved && I18N[saved]) return saved;

  // 3. من لغة الجهاز
  const langs = navigator.languages || [navigator.language || "en"];
  const lower = langs.map(l => l.toLowerCase());
  if (lower.some(l => l.startsWith("ar"))) return "ar";
  if (lower.some(l => l.startsWith("tr"))) return "tr";
  return "en";
}

function applyLanguage(lang) {
  if (!I18N[lang]) lang = "ar";
  const t = I18N[lang];

  // تطبيق الاتجاه واللغة على الصفحة
  document.documentElement.lang = t.lang;
  document.documentElement.dir = t.dir;

  // تحديث العناصر المشتركة (إذا موجودة في الصفحة)
  const langLabel = document.getElementById("lblLang");
  if (langLabel) langLabel.textContent = t.langLabel;

  const back = document.getElementById("backHome");
  if (back) back.textContent = t.backHome;

  // تحديث روابط الصفحات إذا موجودة
  const aboutLink = document.querySelector('a[href="about.html"]');
  if (aboutLink) aboutLink.textContent = t.aboutLink;

  const privacyLink = document.querySelector('a[href="privacy.html"]');
  if (privacyLink) privacyLink.textContent = t.privacyLink;

  // نصوص خاصة بصفحة الخصوصية (إذا كنا في privacy.html)
  if (document.getElementById("privacyTitle")) {
    document.getElementById("title").textContent = t.privacyTitle;
    document.getElementById("updated").textContent = t.privacyUpdated;
    document.getElementById("h1").textContent = t.privacyH1;
    document.getElementById("p1").textContent = t.privacyP1;
    // أضف باقي الـ ids حسب ما في privacy.html
  }

  // حفظ الاختيار
  localStorage.setItem("lac_lang", lang);

  // تحديث قيمة الـ select إذا موجود
  const select = document.getElementById("langSelect");
  if (select) select.value = lang;
}

// تهيئة الصفحة عند التحميل
document.addEventListener("DOMContentLoaded", () => {
  const lang = getInitialLang();
  applyLanguage(lang);

  // ربط تغيير اللغة
  const select = document.getElementById("langSelect");
  if (select) {
    select.addEventListener("change", e => {
      applyLanguage(e.target.value);
    });
  }
});
