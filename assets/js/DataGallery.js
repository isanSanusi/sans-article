const dataGallery = [
   {
      title: "Agro Feed",
      imageUrl: "assets/img/gallery/logo pakan 2.png",
      imageDescription: "logo vector untuk UMK pakan ternak di bandung",
   },
   {
      title: "Club Logo",
      imageUrl: "assets/img/gallery/motorclublogo.jpg",
      imageDescription: "vector logo club motor CDR,PSD,SVG",
   },
   {
      title: "Banner",
      imageUrl: "assets/img/gallery/Banner Chiken 2.png",
      imageDescription: "Ready Print CDR",
   },
   {
      title: "X Banner",
      imageUrl: "assets/img/gallery/banner Chiken.png",
      imageDescription: "Ready Print CDR",
   },
   {
      title: "X Banner",
      imageUrl: "assets/img/gallery/warung sunda.png",
      imageDescription: "Ready Print CDR",
   },
   {
      title: "X Banner",
      imageUrl: "assets/img/gallery/Banner Counter.png",
      imageDescription: "Ready Print CDR",
   },
   {
      title: "X Banner",
      imageUrl: "assets/img/gallery/bANNER oFFICE.png",
      imageDescription: "Ready Print CDR",
   },
   {
      title: "X Banner",
      imageUrl: "assets/img/gallery/Petshop banner.png",
      imageDescription: "Ready Print CDR",
   },
   {
      title: "X Banner",
      imageUrl: "assets/img/gallery/vegan banner.png",
      imageDescription: "Ready Print CDR",
   },
];

const myPorto = () => {
   const gallery = document.getElementById("root");

   dataGallery.forEach((item) => {
      const card = document.createElement("div");
      card.className = "cardsGallery";
      card.innerHTML = `
    <div class="gallery_img">
    <img src="${item.imageUrl}" alt="${item.imageDescription}">
    </div>
    <h3 class="gallery_title">${item.title}</h3>
      <p class="gallery_description">${item.imageDescription}</p>
    `;
      gallery.appendChild(card);
   });
};

myPorto();
