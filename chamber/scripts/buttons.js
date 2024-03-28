// nav button stuff
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('hidden');
});

const closeButton = document.querySelector('#closebanner');
const banner = document.querySelector('.banner')
closeButton.addEventListener('click', () => {
	banner.classList.toggle('hidden');
});

