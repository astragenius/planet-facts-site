import { closeAnimation, openAnimation } from './Animation'

const mainNav = document.querySelector('.main-navigation')

export function toggleNavMenu() {
    let navAttribute = mainNav.getAttribute('aria-expanded')
    const body = document.querySelector('body')

    if (navAttribute == 'false') {
        mainNav.setAttribute('aria-expanded', true)
        body.classList.toggle('no-scroll')
        openAnimation()
    } else {
        mainNav.setAttribute('aria-expanded', false)
        body.classList.toggle('no-scroll')
        closeAnimation()
    }
}
