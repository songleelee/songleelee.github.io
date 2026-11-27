'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
/* 메뉴별 프로필 사진 바꾸기 */
const avatarImg = document.querySelector(".avatar-box img");
const defaultAvatar = "./assets/images/my-avatar.png";

const avatarByPage = {
  about: "./assets/images/my-avatar.png",
  resume: "./assets/images/avatar-resume.png",
  portfolio: "./assets/images/avatar-portfolio.png",
  blog: "./assets/images/avatar-blog.png",
  contact: "./assets/images/avatar-contact.png"
};

/* 미리 불러와서 바뀔 때 깜빡임 방지 */
Object.values(avatarByPage).forEach(function (src) {
  new Image().src = src;
});

document.querySelectorAll("[data-nav-link]").forEach(function (link) {
  link.addEventListener("click", function () {
    const page = link.textContent.trim().toLowerCase();
    if (avatarImg) {
      avatarImg.src = avatarByPage[page] || defaultAvatar;
    }
  });
});

// Portfolio 탭을 누르면 그 탭의 설명만 보여주기
const pfDescs = document.querySelectorAll("[data-pf-desc]");
function showPfDesc(value) {
  pfDescs.forEach(function (d) {
    d.classList.toggle("active", d.dataset.pfDesc === value);
  });
}
document.querySelectorAll("[data-filter-btn], [data-select-item]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    showPfDesc(btn.innerText.trim().toLowerCase());
  });
});

// Kookmin Review 호별 기사 뷰어
(function () {
  const ISSUES = {
    "300": { title: "No.300 · Mar 11, 2024", pages: ["r300-p1.jpg","r300-p2.jpg","r300-p3.jpg","r300-p4-5.jpg","r300-p6.jpg","r300-p7.jpg","r300-p8.jpg"] },
    "301": { title: "No.301 · Apr 8, 2024",  pages: ["r301-p1.jpg","r301-p2.jpg","r301-p3.jpg","r301-p4.jpg","r301-p5.jpg","r301-p6.jpg","r301-p7.jpg","r301-p8.jpg"] },
    "302": { title: "No.302 · May 27, 2024", pages: ["r302-p1.jpg","r302-p2.jpg","r302-p3.jpg","r302-p4.jpg","r302-p5.jpg","r302-p6.jpg","r302-p7.jpg","r302-p8.jpg"] },
    "303": { title: "No.303 · Sep 9, 2024",  pages: ["r303-p1.jpg","r303-p2.jpg","r303-p3.jpg","r303-p4.jpg","r303-p5.jpg","r303-p6.jpg","r303-p7.jpg","r303-p8.jpg"] },
    "304": { title: "No.304 · Oct 7, 2024",  pages: ["r304-p1.jpg","r304-p2.jpg","r304-p3.jpg","r304-p4-5.jpg","r304-p6.jpg","r304-p7.jpg","r304-p8.jpg"] },
    "305": { title: "No.305 · Nov 25, 2024", pages: ["r305-p1.jpg","r305-p2.jpg","r305-p3.jpg","r305-p4.jpg","r305-p5.jpg","r305-p6.jpg","r305-p7.jpg","r305-p8.jpg"] }
  };
  const DIR = "./assets/images/review/";
  const modal = document.getElementById("rvModal");
  if (!modal) return;
  const img = document.getElementById("rvImg");
  const title = document.getElementById("rvTitle");
  const count = document.getElementById("rvCount");
  const prev = document.getElementById("rvPrev");
  const next = document.getElementById("rvNext");
  let cur = null, idx = 0;

  function show() {
    const pages = ISSUES[cur].pages;
    img.src = DIR + pages[idx];
    img.alt = ISSUES[cur].title + " page " + (idx + 1);
    count.textContent = (idx + 1) + " / " + pages.length;
    prev.disabled = idx === 0;
    next.disabled = idx === pages.length - 1;
    modal.querySelector(".rv-stage").scrollTop = 0;
  }
  function openIssue(n) {
    if (!ISSUES[n]) return;
    cur = n; idx = 0;
    title.textContent = "The Kookmin Review " + ISSUES[n].title;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    show();
  }
  function closeViewer() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  document.addEventListener("click", function (e) {
    const card = e.target.closest(".rv-open");
    if (card) { e.preventDefault(); openIssue(card.dataset.issue); }
  });
  prev.addEventListener("click", function () { if (idx > 0) { idx--; show(); } });
  next.addEventListener("click", function () {
    if (idx < ISSUES[cur].pages.length - 1) { idx++; show(); }
  });
  document.getElementById("rvClose").addEventListener("click", closeViewer);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeViewer(); });
  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeViewer();
    if (e.key === "ArrowLeft") prev.click();
    if (e.key === "ArrowRight") next.click();
  });
})();
  
