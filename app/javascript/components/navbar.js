const navbarScroll = () => {
  const navDiv = document.querySelector("nav");

  if (navDiv) {
    window.addEventListener('scroll', () => {
      navDiv.classList.add('scroll-navbar');
    })
  };
};

export { navbarScroll };