import './scss/index.scss'
import anime from 'animejs/lib/anime.es'

import data from './assets/data/data.json'
import { RenderPlanet } from './js/PlanetPage'

const open = document.querySelector('.nav-mobile-btn')
const mainNav = document.querySelector('.main-navigation')

const mercury = document.querySelector('.mercury')
const venus = document.querySelector('.venus')
const earth = document.querySelector('.earth')
const mars = document.querySelector('.mars')
const jupiter = document.querySelector('.jupiter')
const saturn = document.querySelector('.saturn')
const uranus = document.querySelector('.uranus')
const neptune = document.querySelector('.neptune')

mercury.addEventListener('click', () => {
    RenderPlanet.setState('Mercury')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('mercury')
})
venus.addEventListener('click', () => {
    RenderPlanet.setState('Venus')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('venus')
})
earth.addEventListener('click', () => {
    RenderPlanet.setState('Earth')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('earth')
})
mars.addEventListener('click', () => {
    RenderPlanet.setState('Mars')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('mars')
})
jupiter.addEventListener('click', () => {
    RenderPlanet.setState('Jupiter')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('jupiter')
})
saturn.addEventListener('click', () => {
    RenderPlanet.setState('Saturn')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('saturn')
})
uranus.addEventListener('click', () => {
    RenderPlanet.setState('Uranus')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('uranus')
})
neptune.addEventListener('click', () => {
    RenderPlanet.setState('Neptune')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('neptune')
})

function openAnimation() {
    anime({
        targets: '.nav-mobile-btn .line1',
        rotate: '45deg',
        translateY: '4px',
        margin: '0px',
    })
    anime({
        targets: '.nav-mobile-btn .line2',
        opacity: 0,
        margin: '0px',
    })
    anime({
        targets: '.nav-mobile-btn .line3',
        rotate: '-45deg',
        translateY: '-5px',
        margin: '0px',
    })
}
function closeAnimation() {
    anime({
        targets: '.nav-mobile-btn .line1',
        rotate: '0deg',
        translateY: '0px',
        marginTop: '5px',
    })
    anime({
        targets: '.nav-mobile-btn .line2',
        opacity: 1,
        marginTop: '5px',
    })
    anime({
        targets: '.nav-mobile-btn .line3',
        rotate: '0deg',
        translateY: '0px',
        marginTop: '5px',
    })
}

open.addEventListener('click', () => {
    let navAttribute = mainNav.getAttribute('aria-expanded')
    if (navAttribute == 'false') {
        mainNav.setAttribute('aria-expanded', true)
        openAnimation()
    } else {
        mainNav.setAttribute('aria-expanded', false)
        closeAnimation()
    }
})

/* anime({
    targets: '.nav-mobile-btn.open .line1',
    rotate: '45deg',
    translateY: '4px',
    margin: '0px',
})
 */

document.addEventListener('DOMContentLoaded', () => {
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('mercury')
})
