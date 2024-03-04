"use stric";

// ---------- HTML Elemnts---------------
let toglBtn = $("#togl-btn"),
  toglMnyu = $("#togl-menyu"),
  navMenu = $(".nav-menu"),
  asideMenuBtn = $("#navigition-menu"),
  asideMenyu = $("#aside"),
  loginOutList = $("#login-out");
//-----------------Glabal veraybls----------
//------------Toggle menu -------
toglBtn.addEventListener("click", () => {
  toglMnyu.classList.toggle("togl-menyu");
});
//--Navigation menu render -------
function renderNavList(data) {
  data.forEach((el) => {
    let navList = render(
      "li",
      navlistClass,
      `
        
        <a href="${el.link}" class="flex items-center gap-3 ">
           <i class="bi ${el.icon}"></i>
           <span>${el.titl}</span>
        </a>
        `
    );
    navMenu.appendChild(navList);
  });
}
renderNavList(navigationMenu);
//---Aside menyu---------
asideMenuBtn.addEventListener("click", () => {
  asideMenyu.classList.toggle("hide-aside");
})(
  (function () {
    let token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "../../pages/login.html";
    }
  })()
);
function logiOut() {
  localStorage.removeItem("token");
  window.location.href = "../../pages/login.html";
}