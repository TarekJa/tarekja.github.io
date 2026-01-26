// privacy.js - ترجمة صفحة الخصوصية فقط

const I18N = {
  ar: {
    dir: "rtl",
    lang: "ar",
    lblLang: "اللغة",
    back: "العودة للرئيسية",
    aboutLink: "من نحن",
    title: "سياسة الخصوصية",
    updated: "آخر تحديث: يناير 2026",
    h1: "ما الذي نجمعه؟",
    p1: "لا نجمع أي بيانات شخصية تُحدد هويتك، ولا نرسل أي من المدخلات التي تضعها (الاسم، تاريخ الميلاد، ساعة الميلاد) إلى أي خادم خارجي. جميع العمليات الحسابية تتم محليًا داخل متصفحك فقط، ولا يتم تخزينها أو معالجتها على خوادمنا.",
    h2: "التخزين المحلي (Local Storage)",
    p2: "لحسن تجربة الاستخدام، نحفظ بعض البيانات مؤقتًا داخل جهازك (مثل الاسم وتاريخ وساعة الميلاد المدخلين سابقًا) حتى تظل محفوظة في الزيارات التالية. يمكنك حذف هذه البيانات في أي وقت بالضغط على زر «مسح» في الصفحة الرئيسية، أو من خلال إعدادات المتصفح (Clear browsing data → Local Storage).",
    h3: "الإعلانات وملفات تعريف الارتباط",
    p3: "نستخدم خدمة Google AdSense لعرض الإعلانات. قد تستخدم Google وشركاؤها ملفات تعريف الارتباط أو تقنيات مشابهة لجمع بيانات حول استخدامك للموقع (مثل نوع الجهاز، المتصفح، الصفحات المشاهدة) بهدف عرض إعلانات ذات صلة وقياس أداء الإعلانات. لا نتحكم في هذه البيانات ولا نصل إليها. يمكنك إدارة تفضيلات الإعلانات أو تعطيل ملفات التعريف من إعدادات Google Ads أو إعدادات المتصفح.",
    h4: "ميزة مشاركة الرابط",
    p4: "عند استخدام زر المشاركة، يتم إنشاء رابط يحتوي على المدخلات التي أدخلتها (تاريخ ووقت الميلاد إن وجد) حتى يتمكن الشخص الآخر من رؤية نفس النتيجة مباشرة. هذه المعلومات لا تُرسل إلى أي خادم، بل تبقى ضمن الرابط فقط. كن حذرًا عند مشاركة الرابط إذا كان يحتوي معلومات حساسة.",
    h5: "كيف نتواصل معك؟",
    p5: "لأي استفسار، اقتراح، ملاحظة أو شكوى، يمكنك التواصل معنا مباشرة عبر البريد الإلكتروني: tarekjawish89@gmail.com",
    h6: "التغييرات على هذه السياسة",
    p6: "قد نقوم بتحديث هذه السياسة من وقت لآخر لتعكس التغييرات في الموقع أو الخدمات. سيتم نشر النسخة الجديدة هنا مع ذكر تاريخ التحديث. استمرار استخدامك للموقع بعد أي تعديل يُعتبر موافقة ضمنية على السياسة المحدثة.",
    foot: "باستمرارك في استخدام الموقع، فإنك توافق على هذه السياسة وأي تحديثات لها."
  },
  en: {
    dir: "ltr",
    lang: "en",
    lblLang: "Language",
    back: "Back to Home",
    aboutLink: "About",
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    h1: "What do we collect?",
    p1: "We do not collect any personally identifiable information and do not transmit any input data (name, birth date, birth time) to external servers. All calculations are performed locally in your browser.",
    h2: "Local Storage",
    p2: "For better user experience, we temporarily store some data on your device (such as name and previously entered birth date/time). You can delete this data at any time using the «Clear» button on the main page or through your browser settings.",
    h3: "Ads & Cookies",
    p3: "We use Google AdSense to display advertisements. Google and its partners may use cookies or similar technologies to collect usage data (device type, browser, viewed pages) for showing relevant ads and measuring performance. We do not control or access this data. You can manage ad preferences or disable cookies via Google Ads settings or your browser.",
    h4: "Share Link Feature",
    p4: "When using the share button, a link is generated containing your entered inputs (birth date/time if provided) so others can view the same result directly. This information stays within the link and is not sent to any server. Be cautious when sharing links containing personal information.",
    h5: "How to contact us?",
    p5: "For any inquiry, suggestion, comment, or complaint, please contact us directly at: tarekjawish89@gmail.com",
    h6: "Changes to this Policy",
    p6: "We may update this policy from time to time. The updated version will be posted here with the revision date. Your continued use of the site after any changes constitutes acceptance of the updated policy.",
    foot: "By continuing to use the site, you agree to this policy and any future updates."
  },
  tr: {
    dir: "ltr",
    lang: "tr",
    lblLang: "Dil",
    back: "Ana sayfaya dön",
    aboutLink: "Hakkında",
    title: "Gizlilik Politikası",
    updated: "Son güncelleme: Ocak 2026",
    h1: "Ne topluyoruz?",
    p1: "Kişisel olarak tanımlanabilir veri toplamıyoruz ve girdiğiniz bilgileri (isim, doğum tarihi, doğum saati) dış sunuculara iletmiyoruz. Tüm hesaplamalar tarayıcınızda yerel olarak yapılır.",
    h2: "Yerel Depolama (Local Storage)",
    p2: "Daha iyi kullanıcı deneyimi için bazı verileri cihazınızda geçici olarak saklıyoruz (önceden girilen isim, doğum tarihi/saati). Bu verileri ana sayfadaki «Temizle» butonuyla veya tarayıcı ayarlarından istediğiniz zaman silebilirsiniz.",
    h3: "Reklamlar ve Çerezler",
    p3: "Reklam göstermek için Google AdSense kullanıyoruz. Google ve iş ortakları, cihaz türü, tarayıcı ve görüntülenen sayfalar gibi kullanım verilerini toplamak için çerez veya benzer teknolojiler kullanabilir. Bu verilere erişimimiz veya kontrolümüz yoktur. Reklam tercihlerinizi Google Ads ayarlarından veya tarayıcınızdan yönetebilirsiniz.",
    h4: "Bağlantı Paylaşma Özelliği",
    p4: "Paylaş düğmesi kullanıldığında, girdiğiniz bilgiler (doğum tarihi/saati varsa) içeren bir bağlantı oluşturulur ki başkası aynı sonucu görebilsin. Bu bilgiler yalnızca bağlantı içinde kalır ve herhangi bir sunucuya gönderilmez. Kişisel bilgi içeren bağlantıları paylaşırken dikkatli olun.",
    h5: "Bize nasıl ulaşılır?",
    p5: "Her türlü soru, öneri, yorum veya şikayet için doğrudan bize ulaşabilirsiniz: tarekjawish89@gmail.com",
    h6: "Politikadaki Değişiklikler",
    p6: "Bu politikayı zaman zaman güncelleyebiliriz. Güncellenmiş sürüm burada güncelleme tarihiyle birlikte yayınlanacaktır. Herhangi bir değişiklikten sonra siteyi kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.",
    foot: "Siteyi kullanmaya devam ederek bu politikayı ve gelecekteki güncellemeleri kabul etmiş olursunuz."
  }
};

function setLanguage(lang) {
  if (!I18N[lang]) lang = "ar";
  const t = I18N[lang];

  document.documentElement.lang = t.lang;
  document.documentElement.dir = t.dir;

  // العناصر المشتركة
  const lblLang = document.getElementById("lblLang");
  if (lblLang) lblLang.textContent = t.lblLang;

  const back = document.getElementById("backHome");
  if (back) back.textContent = t.back;

  const about = document.getElementById("aboutLink");
  if (about) about.textContent = t.aboutLink;

  // عناصر صفحة الخصوصية فقط
  document.getElementById("pageTitle") && (document.getElementById("pageTitle").textContent = t.title);
  document.getElementById("title") && (document.getElementById("title").textContent = t.title);
  document.getElementById("updated") && (document.getElementById("updated").textContent = t.updated);
  document.getElementById("h1") && (document.getElementById("h1").textContent = t.h1);
  document.getElementById("p1") && (document.getElementById("p1").textContent = t.p1);
  document.getElementById("h2") && (document.getElementById("h2").textContent = t.h2);
  document.getElementById("p2") && (document.getElementById("p2").textContent = t.p2);
  document.getElementById("h3") && (document.getElementById("h3").textContent = t.h3);
  document.getElementById("p3") && (document.getElementById("p3").textContent = t.p3);
  document.getElementById("h4") && (document.getElementById("h4").textContent = t.h4);
  document.getElementById("p4") && (document.getElementById("p4").textContent = t.p4);
  document.getElementById("h5") && (document.getElementById("h5").textContent = t.h5);
  document.getElementById("p5") && (document.getElementById("p5").textContent = t.p5);
  document.getElementById("h6") && (document.getElementById("h6").textContent = t.h6);
  document.getElementById("p6") && (document.getElementById("p6").textContent = t.p6);
  document.getElementById("foot") && (document.getElementById("foot").textContent = t.foot);

  // تحديث قيمة الـ select
  const select = document.getElementById("langSelect");
  if (select) select.value = lang;
}

function pickLanguage() {
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

// تهيئة الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const lang = pickLanguage();
  setLanguage(lang);

  const select = document.getElementById("langSelect");
  if (select) {
    select.addEventListener("change", e => {
      const newLang = e.target.value;
      localStorage.setItem("lac_lang", newLang);
      setLanguage(newLang);
    });
  }
});
