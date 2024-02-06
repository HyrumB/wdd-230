// nav button stuff
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('hidden');
});

// $(window).on("load resize", () => {
//     //Assuming you consider anything >= 1240 as desktop
//     $('.target').toggleClass('hidden', $(window).width() < 1240);
// });

//darkmode stuff
const darkmode = document.querySelector('#mode');
const light = document.querySelector('body');

// const navigation = document.querySelector('.navigation');

darkmode.addEventListener('click', () => {
	light.classList.toggle('light');


});
