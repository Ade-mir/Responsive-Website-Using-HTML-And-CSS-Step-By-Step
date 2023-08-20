document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let emailInput = document.getElementById("subscribe");
    let email = emailInput.value;
    let responseMessageDiv = document.getElementById(
      "subscribe-response-message"
    );

    if (email === "") {
      responseMessageDiv.innerHTML = "Email cannot be empty.";
      responseMessageDiv.style.display = "block";
      return;
    }

    emailInput.value = "";

    responseMessageDiv.innerHTML = "Thank you for subscribing!";
    responseMessageDiv.style.display = "block";

    setTimeout(function () {
      responseMessageDiv.style.display = "none";
    }, 5000);
  });

$(".testimonials-slider").slick({
  dots: false,
  arrows: true,
  speed: 300,
  slidesToShow: 2,
  prevArrow:
    '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg></div>',
  nextArrow:
    '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></div>',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      setting: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      setting: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      setting: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
