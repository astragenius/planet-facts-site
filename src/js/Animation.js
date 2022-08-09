import anime from 'animejs/lib/anime.es.js'

export function openAnimation() {
    anime({
        targets: '.nav-mobile-btn .line1',
        rotate: '45deg',
        backgroundColor: '#979797',
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
        backgroundColor: '#979797',
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
        backgroundColor: '#fff',
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
        backgroundColor: '#fff',
        translateY: '0px',
        marginTop: '5px',
        duration: 160,
        easing: 'spring(1, 80, 10, 0)',
    })
}

export const animateCSS = (element, animation, prefix = 'animate__') => {
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`
        const node = element

        node.classList.add(`${prefix}animated`, animationName)

        function handleAnimationEnd(event) {
            event.stopPropagation()
            node.classList.remove(`${prefix}animated`, animationName)
            resolve('Animation ended')
        }

        node.addEventListener('animationend', handleAnimationEnd, {
            once: true,
        })
    })
}
