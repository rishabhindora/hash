/*const navSlide = () =>
{
    const logo = document.querySelector('.logo');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');

   burger.addEventListner('click', function () {
           nav.classList.toggle('nav-active');
       });
    console.log('abc');
}

navSlide();
*/
/*function navSlide() {
    const nav = document.querySelector('.navlinks');
    nav.classList.toggle('nav-active');
};*/

function navSlide() {
    const nav = document.querySelector('.navlinks');
    nav.classList.toggle('nav-active');
};


document.getElementsByClassName("burger").addEventListener("click", navSlide);