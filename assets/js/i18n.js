const I18N = {
  ar: {
    dir: "rtl",
    lang: "ar",
    lblLang: "اللغة",
    backHome: "العودة للرئيسية",
    aboutLink: "من نحن",
    privacyLink: "سياسة الخصوصية",

    // خصوصية
    privacyTitle: "سياسة الخصوصية",
    updated: "آخر تحديث: يناير 2026",
    h1: "ما الذي نجمعه؟",
    p1: "لا نجمع بيانات شخصية ولا نرسل أي مدخلات إلى خوادمنا. كل الحسابات داخل المتصفح فقط.",
    h2: "التخزين المحلي",
    p2: "نحفظ بعض البيانات مؤقتاً على جهازك. يمكنك مسحها بسهولة.",
    h3: "الإعلانات وملفات تعريف الارتباط",
    p3: "نستخدم Google AdSense. قد تستخدم Google ملفات تعريف ارتباط. يمكنك إدارة الإعدادات.",
    h4: "مشاركة الرابط",
    p4: "الرابط قد يحتوي على مدخلاتك. لا تُرسل إلى أي خادم.",
    h5: "التواصل",
    p5: "للاستفسارات: tarekjawish89@gmail.com",
    h6: "التغييرات على السياسة",
    p6: "قد نحدث السياسة. استخدام الموقع يعني قبول التحديثات.",
    foot: "باستخدام الموقع توافق على السياسة."
  },
  en: {
    dir: "ltr",
    lang: "en",
    lblLang: "Language",
    backHome: "Back to Home",
    aboutLink: "About",
    privacyLink: "Privacy Policy",

    privacyTitle: "Privacy Policy",
    updated: "Last updated: January 2026",
    h1: "What do we collect?",
    p1: "We do not collect or send personal data. Calculations run locally.",
    h2: "Local Storage",
    p2: "Some data is stored temporarily on your device. You can clear it.",
    h3: "Ads & Cookies",
    p3: "We use Google AdSense. Manage cookie settings in your browser.",
    h4: "Share Link",
    p4: "Link may contain your inputs. No data sent to servers.",
    h5: "Contact",
    p5: "Inquiries: tarekjawish89@gmail.com",
    h6: "Policy Changes",
    p6: "Policy may be updated. Continued use means acceptance.",
    foot: "By using the site you agree to the policy."
  },
  tr: {
    dir: "ltr",
    lang: "tr",
    lblLang: "Dil",
    backHome: "Ana sayfaya dön",
    aboutLink: "Hakkında",
    privacyLink: "Gizlilik Politikası",

    privacyTitle: "Gizlilik Politikası",
    updated: "Son güncelleme: Ocak 2026",
    h1: "Ne topluyoruz?",
    p1: "Kişisel veri toplamıyoruz. Hesaplamalar tarayıcıda yapılır.",
    h2: "Yerel Depolama",
    p2: "Bazı veriler cihazınızda saklanır. İstediğiniz zaman temizleyebilirsiniz.",
    h3: "Reklamlar ve Çerezler",
    p3: "Google AdSense kullanıyoruz. Çerez ayarlarını tarayıcıdan yönetebilirsiniz.",
    h4: "Bağlantı Paylaşımı",
    p4: "Bağlantı girdiğiniz bilgileri içerebilir. Sunucuya gönderilmez.",
    h5: "İletişim",
    p5: "Sorular için: tarekjawish89@gmail.com",
    h6: "Politika Değişiklikleri",
    p6: "Politika güncellenebilir. Kullanıma devam etmek kabul anlamına gelir.",
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

  document.getElementById("lblLang")?.textContent = t.lblLang;
  document.getElementById("backHome")?.textContent = t.backHome;
  document.getElementById("aboutLink")?.textContent = t.aboutLink;
  document.getElementById("privacyLink")?.textContent = t.privacyLink;

  // خصوصية
  document.getElementById("title")?.textContent = t.privacyTitle;
  document.getElementById("updated")?.textContent = t.updated;
  document.getElementById("h1")?.textContent = t.h1;
  document.getElementById("p1")?.textContent = t.p1;
  document.getElementById("h2")?.textContent = t.h2;
  document.getElementById("p2")?.textContent = t.p2;
  document.getElementById("h3")?.textContent = t.h3;
  document.getElementById("p3")?.textContent = t.p3;
  document.getElementById("h4")?.textContent = t.h4;
  document.getElementById("p4")?.textContent = t.p4;
  document.getElementById("h5")?.textContent = t.h5;
  document.getElementById("p5")?.textContent = t.p5;
  document.getElementById("h6")?.textContent = t.h6;
  document.getElementById("p6")?.textContent = t.p6;
  document.getElementById("foot")?.textContent = t.foot;

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
