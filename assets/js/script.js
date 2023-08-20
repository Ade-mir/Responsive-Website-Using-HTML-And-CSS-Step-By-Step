// 1. Newsletter Subscription Form Functionality:
// Event Listener on Form Submission:

// When the user submits the form with the ID "subscribe-form", an event listener is triggered.
// The e.preventDefault(); prevents the default behavior of form submissions, which would reload the page.
// Extracting Email Input:

// var emailInput = document.getElementById("subscribe");: Retrieves the input field with ID "subscribe".
// var email = emailInput.value;: Extracts the actual email value entered by the user.
// Feedback Message Handling:

// A feedback message will be shown to the user in a div with the ID "subscribe-response-message".
// If the email input is empty, the message will inform the user that the email cannot be blank.
// If the email input is filled, the message will thank the user for subscribing.
// Clearing Input and Feedback Message:

// After extracting the email, the input field is cleared for future use.
// Using setTimeout, the feedback message is hidden after 5 seconds (5000 milliseconds).

// Newsletter Start

document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    var emailInput = document.getElementById("subscribe");
    var email = emailInput.value;
    var responseMessageDiv = document.getElementById(
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
// Newsletter End

// 2. Testimonials Slider using Slick:
// Selecting the Element:

// $(".testimonials-slider").slick({...}): This selects the element with class "testimonials-slider" and applies the Slick carousel functionality to it.
// Slider Settings:

// General Settings:

// dots: false: This means no navigation dots will appear below the slider.
// arrows: true: Navigation arrows will be displayed on the left and right of the slider.
// speed: 300: The transition speed between slides is set to 300 milliseconds.
// slidesToShow: 2: By default, the slider will display 2 testimonial items at once.
// slidesToScroll: 1: Only one slide will move forward or backward upon navigation.
// Custom Navigation Arrows:

// The prevArrow and nextArrow properties use SVG icons from Bootstrap Icons for navigation, represented as left and right chevrons.
// Responsive Settings:

// Based on the screen width, the slider's appearance will change.
// If the screen width is less than 992px, only one slide will be shown.
// Similarly, for screen widths less than 600px or 480px, only one slide is displayed.

// Testimonials Slider Start
$(".testimonials-slider").slick({
  dots: false,
  arrows: true,
  speed: 300,
  slidesToShow: 2,
  prevArrow:
    '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg></div>',
  // https://icons.getbootstrap.com/icons/chevron-left/
  nextArrow:
    '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></div>',
  // https://icons.getbootstrap.com/icons/chevron-right/
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// Testimonials Slider End
