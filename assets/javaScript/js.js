const navigationHeight = document.querySelector('.header').offsetHeight;

console.log(navigationHeight);

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + px);