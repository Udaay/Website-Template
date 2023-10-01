window.addEventListener('load', function () {
  const allImages = [
    "https://thumbs2.imgbox.com/ac/e6/H856vK0z_t.jpg",
    "https://thumbs2.imgbox.com/64/a1/ouLROrlK_t.jpg",
    "https://thumbs2.imgbox.com/b5/6e/aeA2MjNv_t.jpg",
    "https://thumbs2.imgbox.com/5a/83/LoA97zNJ_t.jpg",
    "https://thumbs2.imgbox.com/fb/ee/uKrPltAK_t.jpg",
    "https://thumbs2.imgbox.com/09/b2/dUXbWiH6_t.jpg",
    "https://thumbs2.imgbox.com/7e/22/hENp3a0U_t.jpg",
    "https://thumbs2.imgbox.com/15/ce/eWazQUEK_t.jpg",
    "https://thumbs2.imgbox.com/da/4f/81HsTbbb_t.jpg",
    "https://thumbs2.imgbox.com/1b/01/scrDTgrs_t.jpg"
  ];

  const viewportHeight = document.documentElement.clientHeight;
  const main = document.querySelector("main");

  function createContainer() {
    const section = document.createElement("section");
    section.classList.add("container");
    return section;
  }

  function createImg(img) {
    const image = new Image();
    image.src = img;
    image.width = 200;
    return image;
  }

  function getRandomImg() {
    return allImages[Math.floor(Math.random() * allImages.length)];
  }

  function createImagesRow() {
    const section = createContainer();
    for (let i = 0; i < 4; i++) {
      const img = getRandomImg();
      const image = createImg(img);
      section.appendChild(image);
    }
    return section;
  }

  function loadMoreImages() {
    main.appendChild(createImagesRow());
  }

  for (let i = 0; i < 5; i++) {
    loadMoreImages();
  }

  window.addEventListener('scroll', function (event) {
    const scrolledY = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const scrollHeightEnd = (scrolledY + viewportHeight) >= pageHeight;

    if (scrollHeightEnd) {
      loadMoreImages();
    }
  });
});
