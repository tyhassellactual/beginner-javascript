      const slides = [
    { image: "lotus.jpg", link: "https://a.co/d/ehehnSU" },
    { image: "peacock.jpg", link: "https://a.co/d/3yOWsDf" },
    { image: "sunMoon.jpg", link: "https://a.co/d/hLekrTw" },
    { image: "drumSet.jpg", link: "https://a.co/d/5AWjJCS" },
    { image: "fairy.jpg", link: "https://a.co/d/2JZ9O2h" },
    { image: "sasquatch.jpg", link: "https://a.co/d/aDhH44Q" },
    ];
        let currentIndex = 0;
        const slideshowImage = document.getElementById("slideshow-image");
        const imageLink = document.getElementById("image-link");
        const prevButton = document.getElementById("prev-btn");
        const nextButton = document.getElementById("next-btn");

        function updateSlideshow() {
            const currentSlide = slides[currentIndex];
            slideshowImage.src = currentSlide.image;
            imageLink.href = currentSlide.link;
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === slides.length - 1;
        }

        prevButton.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlideshow();
            }
        });

        nextButton.addEventListener("click", () => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateSlideshow();
            }
        });

        updateSlideshow();
