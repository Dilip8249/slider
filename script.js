let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length; //5
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;

  const offset = -currentIndex * 100; // Moves to the left
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
  // console.log(`current Index: ${currentIndex}`);
  // console.log(`totalSlides: ${totalSlides}`);
  // console.log(`step: ${step}`);
  // console.log(document.querySelector(".slides"));
}

// (0 + 1 + 5) % 5;
