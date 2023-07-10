function populateCarousel() {
  fetch("mou_data.json")
    .then((response) => response.json())
    .then((data) => {
      const carouselData = data.carousel_data;
      const swiperWrapper = document.querySelector(".swiper-wrapper");
      const mediaQuery = window.matchMedia("(max-width: 480px)");

      carouselData.forEach((item) => {
        const slide = document.createElement("div"); // root parent
        slide.classList.add("swiper-slide");

        const thumbnail = document.createElement("img"); // root children
        const classInfoBox = document.createElement("div"); // root children && parent
        slide.appendChild(thumbnail);
        slide.appendChild(classInfoBox);

        const title = document.createElement("h4"); // children
        const description = document.createElement("h6"); // children
        const linkContainer = document.createElement("div"); // children

        classInfoBox.appendChild(title);
        classInfoBox.appendChild(description);
        classInfoBox.appendChild(linkContainer);

        const link = document.createElement("a"); // under children
        const arrowIcon = document.createElement("img"); // under children
        linkContainer.appendChild(link);
        linkContainer.appendChild(arrowIcon);

        swiperWrapper.appendChild(slide);

        thumbnail.classList.add("swiper-slide-thumbnail");
        thumbnail.src = item.thumbnail_url_text;

        classInfoBox.classList.add("classInfoBox");

        title.textContent = item.title_text;

        description.textContent = item.description_text;

        linkContainer.style.display = "flex";
        linkContainer.style.alignItems = "center";
        linkContainer.style.color = "#439FF5";

        link.href = `https://edu.todomall.kr/store_todoclass/${item._id}`;
        link.textContent = "클래스 정보 보러가기 ";
        link.style.color = "#439FF5";

        arrowIcon.src = "img/arrowicon_blue.png";
        arrowIcon.alt = "arrowicon_blue";
        arrowIcon.style.width = "24px";
        arrowIcon.style.height = "24px";
      });

      new Swiper(".swiper-container", {
        slidesPerView: "auto",
        loop: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          640: {
            centeredSlides: false,
            spaceBetween: 20,
          },

          480: {
            centeredSlides: true,
            spaceBetween: 8,
          },
          320: {
            centeredSlides: true,
            spaceBetween: 8,
          },
        },
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// Call the populateCarousel function
populateCarousel();
