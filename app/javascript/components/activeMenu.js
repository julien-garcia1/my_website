const selectNavbarItem = document.querySelectorAll('#menu li a');

const activeClass = () => {
  selectNavbarItem.forEach(item => {
    item.addEventListener('click', (e) => {
      const urlHash = item.innerHTML.toLowerCase();
      clearActiveClass();
      item.classList.add('active');
      e.preventDefault();
      window.location.hash = '#' + urlHash;
    })
  })
};

const clearActiveClass = () => {
  selectNavbarItem.forEach(item => {
    item.classList.remove('active');
  })
};

export { activeClass };