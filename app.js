// بيانات تجريبية + حفظ اسم المستخدم بعد تسجيل الدخول (بدون Backend)

function getUser(){
  return JSON.parse(localStorage.getItem("minseti_user") || "null");
}

function setUser(name){
  localStorage.setItem("minseti_user", JSON.stringify({ name }));
}

function showToast(text){
  const toast = document.getElementById("toast");
  if(!toast) return;
  toast.textContent = text;
  toast.style.display = "block";
  setTimeout(()=> toast.style.display = "none", 2500);
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const saveBtn = document.getElementById("saveBtn");
  const courseBtns = document.querySelectorAll("[data-course]");

  if (loginForm){
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      if(!name){
        showToast("من فضلك أدخل الاسم");
        return;
      }
      setUser(name);
      window.location.href = "dashboard.html";
    });
  }

  if (saveBtn){
    saveBtn.addEventListener("click", () => {
      showToast("تم حفظ التقدم (نموذج واجهة).");
    });
  }

  courseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const title = btn.getAttribute("data-course") || "الدورة";
      showToast(`تم البدء في: ${title} (واجهة تجريبية)`);
    });
  });

  const userNameEl = document.getElementById("userName");
  if (userNameEl){
    const user = getUser();
    if(user && user.name){
      userNameEl.textContent = user.name;
    } else {
      userNameEl.textContent = "ضيف";
    }
  }
});
