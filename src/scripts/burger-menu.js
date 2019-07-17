const fixedMenu = document.querySelector(".fixed-menu"),
      burgerMenu = document.querySelector(".burger-menu"),
      socialsHeader = document.querySelector(".socials--header"),
      mainSection = document.querySelector(".main"),
      fixedMenuNavigation = document.querySelector(".fixed-menu-navigation"),
      fixedMenuLinks = fixedMenuNavigation.children,
      fixedMenuLinksLegth = fixedMenuLinks.length;

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('burger-menu--active');
  fixedMenu.classList.toggle('fixed-menu--active');
  socialsHeader.classList.toggle('socials--header--active');
  mainSection.classList.toggle('main--active');
  document.body.classList.toggle('body--active');
});

for(let i = 0; i < fixedMenuLinksLegth; ++i) {
  fixedMenuLinks[i].addEventListener('click', function() {
    burgerMenu.classList.remove('burger-menu--active');
    fixedMenu.classList.remove('fixed-menu--active');
    socialsHeader.classList.remove('socials--header--active');
    mainSection.classList.remove('main--active');
    document.body.classList.remove('body--active');
  });
};