 
  $(document).ready(function () {
    $('.card-slider').slick({
      speed: 300,
      cssEase: 'linear',
      arrows: false,
      infinite: true,
      pauseOnHover: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.7,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
 


//Tab section
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
 
//Parallax animation
// Get the elements we want to animate
const greenCircle = document.querySelector('.green-circle');
const headingSection = document.querySelector('.text-center.absolute');
const imageRow = document.querySelector('.image-row');
const imageOne = imageRow.querySelector('img:nth-child(1)');
const imageTwo = imageRow.querySelector('img:nth-child(2)');
const imageThree = imageRow.querySelector('img:nth-child(3)');
const imageFour = imageRow.querySelector('img:nth-child(4)');

// Get the sections that will slide up
const clientsSection = document.querySelector('section.pt-20:not(.relative)');
const servicesSection = document.querySelector('section.section-wrapper');

// Add CSS for smooth transitions
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .green-circle, .text-center.absolute, .image-row img {
      transition: transform 0.2s ease-out;
    }
    
    section.pt-20:not(.relative), section.section-wrapper {
      position: relative;
      transition: transform 0.3s ease-out;
      z-index: 30;
    }
    
    /* Ensure main content has proper stacking */
    main {
      position: relative;
      z-index: 1;
    }
    
    /* Enhance the parallax effect with proper perspective */
    body {
      perspective: 1px;
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
    }
    
    /* Background color for smoother transitions */
    body, html {
      background-color: #fff;
    }
  </style>
`);

// Initial setup - Set initial transform for client and services sections
if (clientsSection) {
  clientsSection.style.transform = 'translateY(50px)';
  clientsSection.style.opacity = '0.2';
  clientsSection.style.transition = 'transform 0.7s ease-out, opacity 0.8s ease-out';
}

if (servicesSection) {
  servicesSection.style.transform = 'translateY(100px)';
  servicesSection.style.opacity = '0.1';
  servicesSection.style.transition = 'transform 1s ease-out, opacity 1.2s ease-out';
}

// Function to handle scroll events
function handleParallaxScroll() {
  // Current scroll position
  const scrollY = window.scrollY;
  
  // Calculate parallax effects based on scroll position
  
  // Move circle down as you scroll
  const slideDownAmount = Math.min(scrollY * 0.3, 400); // Limit the maximum movement to 400px
  if (greenCircle) {
    greenCircle.style.transform = `translateY(${slideDownAmount}px)`;
  }
  
  // Move heading with circle but slightly slower
  if (headingSection) {
    headingSection.style.transform = `translateY(${slideDownAmount * 0.7}px)`;
  }
  
  // Move images horizontally in opposite directions
  const horizontalMoveAmount = Math.min(scrollY * 0.4, 200); // Limit maximum movement to 200px
  
  // Images one and two move left
  if (imageOne) {
    imageOne.style.transform = `rotate(-5deg) translateX(-${horizontalMoveAmount}px)`;
  }
  if (imageTwo) {
    imageTwo.style.transform = `rotate(8deg) translateX(-${horizontalMoveAmount * 1.2}px)`;
  }
  
  // Images three and four move right
  if (imageThree) {
    imageThree.style.transform = `rotate(-6deg) translateX(${horizontalMoveAmount * 0.8}px)`;
  }
  if (imageFour) {
    imageFour.style.transform = `rotate(3deg) translateX(${horizontalMoveAmount}px)`;
  }
  
  // Make client section come up from below
  if (clientsSection) {
    const clientSectionVisibilityPoint = 300; // Start showing client section when scrolled 300px
    const clientSectionTransform = Math.max(0, 50 - (scrollY - clientSectionVisibilityPoint) * 0.5);
    const clientSectionOpacity = Math.min(1, Math.max(0.2, (scrollY - clientSectionVisibilityPoint) * 0.005 + 0.2));
    
    if (scrollY > clientSectionVisibilityPoint) {
      clientsSection.style.transform = `translateY(${clientSectionTransform}px)`;
      clientsSection.style.opacity = clientSectionOpacity.toString();
    }
  }
  
  // Make services section come up from below
  if (servicesSection) {
    const servicesSectionVisibilityPoint = 100; // Start showing services section when scrolled 600px
    const servicesSectionTransform = Math.max(0, 100 - (scrollY - servicesSectionVisibilityPoint) * 0.5);
    const servicesSectionOpacity = Math.min(1, Math.max(0.1, (scrollY - servicesSectionVisibilityPoint) * 0.003 + 0.1));
    
    if (scrollY > servicesSectionVisibilityPoint) {
      servicesSection.style.transform = `translateY(${servicesSectionTransform}px)`;
      servicesSection.style.opacity = servicesSectionOpacity.toString();
    }
  }
}

// Add scroll event listener with throttling for performance
let lastScrollTime = 0;
window.addEventListener('scroll', function() {
  const now = Date.now();
  if (now - lastScrollTime > 10) { // Only trigger every 10ms for performance
    lastScrollTime = now;
    window.requestAnimationFrame(handleParallaxScroll);
  }
});

// Initialize position on page load
handleParallaxScroll();

// Also trigger on resize to ensure proper calculations
window.addEventListener('resize', handleParallaxScroll);