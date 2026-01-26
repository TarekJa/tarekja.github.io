// i18n.js - ترجمة مشتركة لـ privacy و about و index
const I18N = {
  ar: {
    dir: "rtl",
    lang: "ar",
    lblLang: "اللغة",
    backHome: "العودة للرئيسية",
    aboutLink: "من نحن",
    privacyLink: "سياسة الخصوصية",
    // خصوصية
    pageTitle: "سياسة الخصوصية",
    title: "سياسة الخصوصية",
    updated: "آخر تحديث: يناير 2026",
    h1: "ما الذي نجمعه؟",
    p1: "لا نجمع أي بيانات شخصية ولا نرسل أي معلومات تدخلها إلى خوادمنا. كل الحسابات محلياً داخل متصفحك.",
    h2: "التخزين المحلي",
    p2: "نحفظ بعض البيانات مؤقتاً داخل جهازك لتسهيل الاستخدام. يمكنك مسحها بضغطة زر «مسح».",
    h3: "الإعلانات وملفات تعريف الارتباط",
    p3: "نستخدم Google AdSense. قد تستخدم Google ملفات تعريف ارتباط لعرض إعلانات مناسبة. يمكنك إدارة الإعدادات من المتصفح.",
    h4: "مشاركة الرابط",
    p4: "الرابط قد يحتوي على المدخلات التي أدخلتها. لا تُرسل إلى أي خادم.",
    h5: "كيف نتواصل معك؟",
    p5: "لأي استفسار: tarekjawish89@gmail.com",
    h6: "التغييرات على السياسة",
    p6: "قد نحدث السياسة. استمرار استخدام الموقع يعني قبول التحديثات.",
    foot: "باستخدام الموقع توافق على السياسة."
  },
  en: {
    dir: "ltr",
    lang: "en",
    lblLang: "Language",
    backHome: "Back to Home",
    aboutLink: "About",
    privacyLink: "Privacy Policy",
    pageTitle: "Privacy Policy",
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    h1: "What do we collect?",
    p1: "We do not collect personal data or send inputs to servers. Calculations run locally.",
    h2: "Local Storage",
    p2: "We store some data temporarily on your device. You can clear it anytime.",
    h3: "Ads & Cookies",
    p3: "We use Google AdSense. Manage cookie preferences in your browser.",
    h4: "Share Link",
    p4: "The link may contain your inputs. No data is sent to servers.",
    h5: "Contact",
    p5: "For inquiries: tarekjawish89@gmail.com",
    h6: "Policy Changes",
    p6: "We may update this policy. Continued use means acceptance.",
    foot: "By using the site you agree to this policy."
  },
  tr: {
    dir: "ltr",
    lang: "tr",
    lblLang: "Dil",
    backHome: "Ana sayfaya dön",
    aboutLink: "Hakkında",
    privacyLink: "Gizlilik Politikası",
    pageTitle: "Gizlilik Politikası",
    title: "Gizlilik Politikası",
    updated: "Son güncelleme: Ocak 2026",
    h1: "Ne topluyoruz?",
    p1: "Kişisel veri toplamıyoruz. Hesaplamalar tarayıcıda yapılır.",
    h2: "Yerel Depolama",
    p2: "Bazı verileri cihazınızda saklıyoruz. İstediğiniz zaman temizleyebilirsiniz.",
    h3: "Reklamlar ve Çerezler",
    p3: "Google AdSense kullanıyoruz. Çerez ayarlarını tarayıcıdan yönetebilirsiniz.",
    h4: "Bağlantı Paylaşımı",
    p4: "Bağlantı girdiğiniz bilgileri içerebilir. Sunucuya gönderilmez.",
    h5: "İletişim",
    p5: "Sorular için: tarekjawish89@gmail.com",
    h6: "Politika Değişiklikleri",
    p6: "Politikayı güncelleyebiliriz. Kullanıma devam etmek kabul anlamına gelir.",
    foot: "Siteyi kullanarak politikayı kabul etmiş olursunuz."
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
