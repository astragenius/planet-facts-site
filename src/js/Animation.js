import anime from 'animejs/lib/anime.es.js'

export function openAnimation() {
    anime({
        targets: '.nav-mobile-btn .line1',
        rotate: '45deg',
        translateY: '4px',
        margin: '0px',
        duration: 160,
        easing: 'spring(1, 80, 10, 0)',
    })
    anime({
        targets: '.nav-mobile-btn .line2',
        opacity: 0,
        margin: '0px',
        duration: 120,
        easing: 'spring(1, 80, 10, 0)',
    })
    anime({
        targets: '.nav-mobile-btn .line3',
        rotate: '-45deg',
        translateY: '-5px',
        margin: '0px',
        duration: 160,
        easing: 'spring(1, 80, 10, 0)',
    })
}
export function closeAnimation() {
    anime({
        targets: '.nav-mobile-btn .line1',
        rotate: '0deg',
        translateY: '0px',
        marginTop: '5px',
        duration: 120,
        easing: 'spring(1, 80, 10, 0)',
    })
    anime({
        targets: '.nav-mobile-btn .line2',
        opacity: 1,
        marginTop: '5px',
        duration: 120,
        easing: 'spring(1, 80, 10, 0)',
    })
    anime({
        targets: '.nav-mobile-btn .line3',
        rotate: '0deg',
        translateY: '0px',
        marginTop: '5px',
        duration: 160,
        easing: 'spring(1, 80, 10, 0)',
    })
}
