const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
})

sr.reveal(`.title, .row`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.row`,{
    origin: 'bottom',
    interval: 100,
})