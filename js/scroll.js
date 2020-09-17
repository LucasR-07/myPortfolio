window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
})
sr.reveal('.presentation-content-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
})
sr.reveal('.presentation-content-right', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
})
sr.reveal('.btn-cv',{
    duration: 2000,
    origin: 'bottom',
    delay: 1500
})
sr.reveal('.btn-cv',{
    duration: 2000,
    origin: 'bottom',
    delay: 1500
})
sr.reveal('#about-left',{
    duration: 2000,
    origin: 'left',
    distance: '100px'
})
sr.reveal('#about-right',{
    duration: 3000,
    origin: 'right',
    distance: '100px'
})
sr.reveal('#projects',{
    duration: 2000,
    origin: 'bottom',
    distance: '300px'
})

/* Smoot Scroll */
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 700
});