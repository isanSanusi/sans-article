const Banyol = [
  "Terkadang, diam itu lebih baik daripada ngomong. Tapi, kalau lapar, ya ngomong aja.",
  "Semua manusia sama di hadapan ikan.",
  "Cantik itu relatif, tergantung letak kamera dan intensitas cahaya.",
  "Hidup ini singkat. Tersenyumlah selagi kamu memiliki gigi.",
  "Hidup adalah seni menggambar tanpa penghapus.",
  "Mau gagal, mau sukses, itu tidak penting. Yang penting berhasil.",
  "Jangan mengarungi lautan karena karung lebih cocok untuk beras.",
  "Karunya, karung di tanya.",
  "Di mana ada kelebihan, di situ ada kembalian.",
  "Dompetku sama seperti bawang, membukanya membuatku menangis",
  "Seberat apa pun masalahmu, jangan lupa mengeluh",
  "Kunci kesehatan cuma satu, yaitu jangan sakit",
  "Jangan membenci dirimu sendiri, karena itu tugas orang lain",
  "Anda sopan kami curiga",
  "Jodoh emang gak ke mana, tapi saingan di mana-mana",
];
const images = [
  { id: 1, name: "image1", img: "assets/img/aboutimage1.jpg" },
  { id: 2, name: "image2", img: "assets/img/aboutimage2.jpg" },
  { id: 3, name: "image3", img: "assets/img/aboutimage3.jpg" },
  { id: 4, name: "image4", img: "assets/img/aboutimage4.jpg" },
];
const Icons = [
  {
    id: 4,
    name: "Home",
    link: "#home",
    svg: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clip-rule="evenodd"/>
  </svg>`,
  },
  {
    id: 1,
    name: "My Laptop",
    link: "#laptop",
    svg: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z" clip-rule="evenodd"/>
  </svg>`,
  },
  {
    id: 2,
    name: "Text Editor",
    link: "#texteditor",
    svg: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
  </svg>`,
  },
  {
    id: 3,
    name: "My Journey",
    link: "#journey",
    svg: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2c.6 0 1-.4 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
  </svg>`,
  },
  {
    id: 4,
    name: "About Me",
    link: "#aside",
    svg: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
  </svg>`,
  },
];
const targetElement = [
  { target: ".main_header", placement: "appendChild" },
  { target: "#aside", placement: "insertBefore", referenceNode: ".creator" },
  {
    target: ".bio_section",
    placement: "insertBefore",
    referenceNode: "#tableBio",
  },
];

const navigations = () => {
  const navDesk = document.getElementById("btnNav_desk");
  const navMobile = document.getElementById("btnNav_mobile");
  Icons.map((nav) => {
    navMobile.innerHTML += `<li class="link">
            <a href="${nav.link}" class="nav_link_mobile">
              ${nav.svg}
              <h5>${nav.name}</h5>
            </a>
          </li>`;
    navDesk.innerHTML += `<li><a href="${nav.link}" class="nav_link_desk">${nav.name}</a></li>`;
  });
  const navs = document.querySelectorAll("nav");
  const p = document.querySelector("#journey p");
  navs.forEach((nav) => {
    nav.addEventListener("click", () => {
      document.querySelectorAll(".btn_show_journey a").forEach((link) => {
        link.classList.remove("active");
      });
      document.querySelectorAll(".section_journey").forEach((section) => {
        section.style.display = "none";
      });
      p.style.display = "block";
    });
  });
};
navigations();

const slide = () => {
  const greetings = document.querySelector(".greeting");
  const containerHeader = document.querySelector(".container_header");
  const sliders = document.createElement("div");
  sliders.setAttribute("class", "slider");
  images.forEach((img) => {
    sliders.innerHTML += `<div key="${img.id}" class="slider_image fade"><img src="${img.img}" alt="${img.name}"/></div>`;
  });
  containerHeader.insertBefore(sliders, greetings);
  let slideIndex = 0;
  showSlides();
  function showSlides() {
    const sliderImages = document.querySelectorAll(".slider_image");
    sliderImages.forEach((slider, index) => {
      slider.style.display = index === slideIndex ? "block" : "none";
    });
    slideIndex = (slideIndex + 1) % sliderImages.length;
    setTimeout(showSlides, 5000);
  }
};
slide();

const updateTanggalJam = () => {
  const tanggal = document.querySelector("#tanggal-jam");
  const dates = new Date();
  const optionsTanggal = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false,
  };
  const optionsJam = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const formatTanggal = dates.toLocaleDateString("id-ID", optionsTanggal);
  const formatJam = dates.toLocaleTimeString("id-ID", optionsJam);
  tanggal.textContent = `${formatTanggal} ~ ${formatJam}`;
};
setInterval(updateTanggalJam, 1000);
updateTanggalJam();

const Banyolan = () => {
  const jokesThisDay = Banyol[Math.floor(Math.random() * Banyol.length)];
  const quoteContent = `<h3>Kata mutiara hari ini</h3><span><q id="kataBijak2">${jokesThisDay}</q></span>`;
  targetElement.forEach((location) => {
    const quote = document.createElement("div");
    quote.setAttribute("class", `quote ${location.target.slice(1)}`);
    const childElement = document.querySelector(location.target);
    const referenceNode = location.referenceNode
      ? document.querySelector(location.referenceNode)
      : null;
    childElement[location.placement](quote, referenceNode);
    quote.innerHTML = quoteContent;
  });
};
Banyolan();

const showMyJourney = () => {
  const titles = ["HTML", "CSS", "JavaScript"];
  const p = document.querySelector("#journey p");
  const buttonShow = document.createElement("div");
  buttonShow.setAttribute("class", "btn_show_journey");
  buttonShow.innerHTML = titles
    .map((title) => `<a href="#journey">${title}</a>`)
    .join("");
  document.getElementById("journey").insertBefore(buttonShow, p);
  const link = document.querySelectorAll(".btn_show_journey a");
  link.forEach((btn) => {
    btn.addEventListener("click", () => {
      link.forEach((x) => {
        x.classList.remove("active");
      });
      btn.classList.add("active");

      const targetId = btn.textContent;
      document.querySelectorAll(".section_journey").forEach((section) => {
        section.style.display = section.id === targetId ? "block" : "none";
      });
      p.style.display = "none";
    });
  });
};
showMyJourney();

const footers = () => {
  const footerContent = `<h4>created with <span>&hearts;</span> by Sandi Hadiansyah | &copy; ${new Date().toLocaleDateString(
    "id-ID",
    { year: "numeric" }
  )}</h4>`;

  const footerDesk = document.createElement("div");
  const footerMobile = document.createElement("div");
  footerMobile.setAttribute("class", "footer_mobile");
  document.querySelector(".main_footer").appendChild(footerDesk).innerHTML =
    footerContent;
  document.querySelector(".content_aside").appendChild(footerMobile).innerHTML =
    footerContent;
};
footers();
