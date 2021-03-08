const selectNavbarItem = document.querySelectorAll('#menu li a');

const activeClass = () => {
  selectNavbarItem.forEach(item => {
    item.addEventListener('click', (e) => {
      console.log(item.value);

      removeActiveClass();
      item.classList.add('active');
      e.preventDefault();
      window.location.hash = '#test';
    })
  })
};

const removeActiveClass = () => {
  selectNavbarItem.forEach(item => {
    item.classList.remove('active');
  })
};

export { activeClass };