function toggleMenu(){
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}

  var slideIndex1 = 0;
        showSlides(1);

        // JavaScript for the second slideshow
        var slideIndex2 = 0;
        showSlides(2);

        function showSlides(slideshowNumber) {
            var i;
            var slides = document.querySelectorAll("#slideshow-container-" + slideshowNumber + " .slide");

            // Hide all slides
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            // Move to the next slide
            if (slideshowNumber === 1) {
                slideIndex1++;
                if (slideIndex1 > slides.length) {
                    slideIndex1 = 1;
                }
                slides[slideIndex1 - 1].style.display = "block";
                setTimeout(function () { showSlides(1); }, 2000); // Adjust as needed
            } else if (slideshowNumber === 2) {
                slideIndex2++;
                if (slideIndex2 > slides.length) {
                    slideIndex2 = 1;
                }
                slides[slideIndex2 - 1].style.display = "block";
                setTimeout(function () { showSlides(2); }, 2000); // Adjust as needed
            }
        }
		
		function playPause() {
        var video = document.querySelector('video');
        if (video.paused)
            video.play();
        else
            video.pause();
    }