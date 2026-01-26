let interval = null;

const STORAGE_KEYS = {
  name: "lac_name",
  date: "lac_birthDate",
  time: "lac_birthTime",
  lang: "lac_lang"
};

function $(id) { return document.getElementById(id); }

function saveInputs() {
  localStorage.setItem(STORAGE_KEYS.name, $("name").value || "");
  localStorage.setItem(STORAGE_KEYS.date, $("birthDate").value || "");
  localStorage.setItem(STORAGE_KEYS.time, $("birthTime").value || "");
}

function restoreInputs() {
  $("name").value = localStorage.getItem(STORAGE_KEYS.name) || "";
  $("birthDate").value = localStorage.getItem(STORAGE_KEYS.date) || "";
  $("birthTime").value = localStorage.getItem(STORAGE_KEYS.time) || "";
}

// دالة لتحويل تاريخ الإدخال إلى كائن Date
function buildLocalDate(dateStr, timeStr = "00:00:00") {
  if (!dateStr) return null;
  const [year, month, day] = dateStr.split('-').map(Number);
  const [hour, min, sec = 0] = timeStr.split(':').map(Number);
  const date = new Date(year, month - 1, day, hour, min, sec || 0);
  return isNaN(date.getTime()) ? null : date;
}

// دالة دقيقة لحساب العمر (سنوات، أشهر، أيام)
function preciseAge(birth) {
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    const lastDayPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += lastDayPrevMonth;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function formatNumber(n, lang = 'ar') {
  return new Intl.NumberFormat(lang).format(n);
}

function start() {
  const birthDateInput = $("birthDate").value;
  if (!birthDateInput) {
    alert("يرجى إدخال تاريخ الميلاد");
    return;
  }

  const birthDate = buildLocalDate(birthDateInput, $("birthTime").value || "00:00:00");
  if (!birthDate) {
    alert("تاريخ أو وقت الميلاد غير صالح");
    return;
  }

  if (birthDate.getTime() > Date.now()) {
    alert("تاريخ/وقت الميلاد لا يمكن أن يكون في المستقبل");
    return;
  }

  saveInputs();

  $("liveSection").style.display = "block";
  $("shareRow").style.display = "flex";

  // تحديث فوري + كل ثانية
  function updateAge() {
    const now = new Date();
    const diffMs = now - birthDate;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    const age = preciseAge(birthDate);

    $("years").textContent = formatNumber(age.years);
    $("months").textContent = formatNumber(age.years * 12 + age.months);
    $("weeks").textContent = formatNumber(weeks);
    $("days").textContent = formatNumber(days);
    $("hours").textContent = formatNumber(hours);
    $("minutes").textContent = formatNumber(minutes);
    $("seconds").textContent = formatNumber(seconds);
  }

  updateAge(); // تحديث فوري
  interval = setInterval(updateAge, 1000);
}

function resetApp() {
  if (interval) clearInterval(interval);
  interval = null;

  $("liveSection").style.display = "none";
  $("shareRow").style.display = "none";

  ["years", "months", "weeks", "days", "hours", "minutes", "seconds"].forEach(id => {
    const el = $(id);
    if (el) el.textContent = "";
  });

  $("name").value = "";
  $("birthDate").value = "";
  $("birthTime").value = "";

  localStorage.removeItem(STORAGE_KEYS.name);
  localStorage.removeItem(STORAGE_KEYS.date);
  localStorage.removeItem(STORAGE_KEYS.time);
}

document.addEventListener("DOMContentLoaded", () => {
  restoreInputs();

  // لا تحسب تلقائيًا عند الفتح
  // فقط إذا المستخدم ضغط "احسب" بيشتغل

  $("langSelect").addEventListener("change", e => {
    localStorage.setItem(STORAGE_KEYS.lang, e.target.value);
    location.reload(); // reload لتطبيق اللغة على كل شيء
  });
});
