// Display Menu

const ShowMenu = () => {
  let btnMenu = document.getElementById('p3-btn-menu');
  let mainNav = document.getElementById('p3-main-nav');

  btnMenu.firstElementChild.classList.toggle("p3-none");
  btnMenu.lastElementChild.classList.toggle("p3-none");
  
  mainNav.classList.toggle('p3-watching');
}

export default ShowMenu;