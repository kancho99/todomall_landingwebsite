function populateCarousel() {
  fetch("mou_data.json")
    .then((response) => response.json())
    .then((data) => {
      const carouselData = data.carousel_data;
      const swiperWrapper = document.querySelector(".swiper-wrapper");
      const mediaQuery = window.matchMedia("(max-width: 480px)");

      carouselData.forEach((item) => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        if (mediaQuery.matches) {
          slide.style.maxWidth = "342px";
          slide.style.maxHeight = "450px";
        }

        const thumbnail = document.createElement("img");
        if (mediaQuery.matches) {
          // Mobile
          thumbnail.style.width = "100%";
          thumbnail.style.maxWidth = "342px";
          thumbnail.style.height = "45%";
          thumbnail.style.minHeight = "175px";
          thumbnail.style.borderRadius = "36px 36px 0 0";
          thumbnail.style.objectFit = "cover";
        } else {
          // PC
          thumbnail.style.width = "100%";
          thumbnail.style.height = "341px";
          thumbnail.style.borderRadius = "36px 36px 0 0";
          thumbnail.style.objectFit = "cover";
        }

        thumbnail.src = item.thumbnail_url_text;
        slide.appendChild(thumbnail);

        const classInfoBox = document.createElement("div");
        slide.appendChild(classInfoBox);
        classInfoBox.classList.add("classInfoBox");

        if (mediaQuery.matches) {
          classInfoBox.style.maxWidth = "342px";
          classInfoBox.style.maxHeight = "222px";
          classInfoBox.style.minHeight = "222px";
        } else {
          // PC
          classInfoBox.style.minHeight = "196px";
          classInfoBox.style.maxHeight = "196px";
        }

        const title = document.createElement("h4");
        title.textContent = item.title_text;
        title.style.textOverflow = "ellipsis";
        title.style.whiteSpace = "nowrap";
        if (mediaQuery.matches) {
          title.style.fontSize = "16px";
          title.style.fontWeight = 800;
          title.style.lineHeight = "24px";
        }
        classInfoBox.appendChild(title);

        const description = document.createElement("h6");
        description.style.color = "#6C7487";
        if (mediaQuery.matches) {
          description.style.fontSize = "16px";
          description.style.fontWeight = 500;
          description.style.lineHeight = "24px";
        }
        description.textContent = item.description_text;
        classInfoBox.appendChild(description);

        const linkContainer = document.createElement("div");
        linkContainer.style.display = "flex";
        linkContainer.style.alignItems = "center";
        linkContainer.style.color = "#439FF5";

        const link = document.createElement("a");
        link.href = `https://edu.todomall.kr/store_todoclass/${item._id}`;
        link.textContent = "클래스 정보 보러가기 ";
        link.style.color = "#439FF5";

        if (mediaQuery.matches) {
          link.style.fontSize = "16px";
          link.style.fontWeight = 500;
          link.style.lineHeight = "160%";
        }

        linkContainer.appendChild(link);

        const arrowIcon = document.createElement("img");
        arrowIcon.src = "img/arrowicon_blue.png";
        arrowIcon.alt = "arrowicon_blue";
        arrowIcon.style.width = "24px";
        arrowIcon.style.height = "24px";
        linkContainer.appendChild(arrowIcon);

        classInfoBox.appendChild(linkContainer);

        swiperWrapper.appendChild(slide);
      });

      if (mediaQuery.matches) {
        // Mobile
        new Swiper(".swiper-container", {
          slidesPerView: 1.2,
          spaceBetween: 20,
          // autoplay: {
          //   delay: 2000,
          // },
          pagination: {
            el: ".swiper-pagination",
          },
        });
      } else {
        // PC
        new Swiper(".swiper-container", {
          slidesPerView: 1.2,
          spaceBetween: 8,
          autoplay: {
            delay: 2000,
          },
          pagination: {
            el: ".swiper-pagination",
          },
        });
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// Call the populateCarousel function
populateCarousel();
