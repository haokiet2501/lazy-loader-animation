const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
})

sr.reveal(`.title`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.box`,{
    origin: 'bottom',
    interval: 200,
})