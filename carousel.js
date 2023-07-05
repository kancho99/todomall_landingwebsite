function populateCarousel() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const carouselData = data.carousel_data;
      const swiperWrapper = document.querySelector(".swiper-wrapper");

      carouselData.forEach((item) => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.style.padding = "0";
        slide.setAttribute("data-swiper-autoplay", "2000");

        const thumbnail = document.createElement("img");
        thumbnail.style.borderRadius = "36px 36px 0 0";
        thumbnail.style.width = "100%";
        thumbnail.style.maxWidth = "539px";

        thumbnail.style.height = "300px";
        thumbnail.classList.add("carousel_image");
        thumbnail.src = item.thumbnail_url_text;
        slide.appendChild(thumbnail);

        const classInfoBox = document.createElement("div");
        classInfoBox.classList.add("classInfoBox");

        const title = document.createElement("h4");
        title.textContent = item.title_text;
        classInfoBox.appendChild(title);

        const description = document.createElement("h6");
        description.style.color = "#6C7487";
        description.style.marginBottom = "8px";
        description.textContent = item.description_text;
        classInfoBox.appendChild(description);

        const linkContainer = document.createElement("div");
        linkContainer.style.display = "flex";
        linkContainer.style.alignItems = "center";
        linkContainer.style.color = "#439FF5";

        const link = document.createElement("a");
        link.href = `https://edu.todomall.kr/store_todoclass/${item._id}`;
        link.textContent = "클래스 정보 보러가기 ";
        linkContainer.appendChild(link);

        const arrowIcon = document.createElement("img");
        arrowIcon.src = "img/arrowicon_blue.png";
        arrowIcon.alt = "arrowicon_blue";
        arrowIcon.style.width = "24px";
        arrowIcon.style.height = "24px";
        linkContainer.appendChild(arrowIcon);

        classInfoBox.appendChild(linkContainer);
        slide.appendChild(classInfoBox);

        swiperWrapper.appendChild(slide);
      });

      // Initialize Swiper
      new Swiper(".swiper-container", {
        slidesPerView: 1.3,
        spaceBetween: 33,
        speed: 400,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// Call the populateCarousel function
populateCarousel();
