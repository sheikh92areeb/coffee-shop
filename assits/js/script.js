let navbar = document.querySelector(".navbar");

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');    
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector(".search-form");

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');    
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector(".cart-items-container");

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');    
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 100,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.navbar a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active')
		}else{
			sectionsClass.classList.remove('active')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: '3000',
    delay: '400',
    reset: true // Animation repeat
}) 

sr.reveal(`.home .content`)
sr.reveal(`.about .image`, {origin:'left'})
sr.reveal(`.about .content`, {origin: 'right'})
sr.reveal(`.box, .contact .row`, {delay:600, origin: 'bottom', distance: '200px'})
sr.reveal(`.footer, .heading`, {origin: 'center', distance: '0'})