const activeClass = () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    })
  })
}

export { activeClass };