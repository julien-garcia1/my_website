const selectNavbarItem = document.querySelectorAll('#menu li a');

const activeClass = () => {
  // const test = "#";
  // const text = "Les # meilleurs viennent avec moi";

  // const rplce = text.replace(test, '10');
  // console.log(rplce);
  selectNavbarItem.forEach(item => {
    item.addEventListener('click', (e) => {
      const urlHash = item.innerHTML.toLowerCase();
      const textWithoutSpace = urlHash.replace(" ", "-");

      clearActiveClass();
      item.classList.add('active');
      e.preventDefault();
      window.location.hash = '#' + textWithoutSpace;
    })
  })
};

const clearActiveClass = () => {
  selectNavbarItem.forEach(item => {
    item.classList.remove('active');
  })
};

export { activeClass };