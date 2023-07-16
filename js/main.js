const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

navLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    // Hide all sections
    sections.forEach(function (section) {
      section.classList.add('hidden');
    });

    // Show the selected section
    const target = this.getAttribute('href');
    const targetSection = document.querySelector(target);
    targetSection.classList.remove('hidden');
  });
});

const worksItems = document.querySelectorAll('.works-item');

worksItems.forEach(function (worksItem) {
  worksItem.addEventListener('click', function () {
    const overlay = document.querySelector('.overlay');
    const expandedImg = overlay.querySelector('img');
    const imgSrc = this.dataset.overlayImg;
    expandedImg.setAttribute('src', imgSrc);
    overlay.classList.add('active');
  });
});

const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', function (event) {
  if (event.target === this) {
    this.classList.remove('active');
  }
});
