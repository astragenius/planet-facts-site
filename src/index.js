import './scss/index.scss'
import { toggleNavMenu } from './js/MobileNav'
import { RenderPlanet } from './js/PlanetPage'

const open = document.querySelector('.nav-mobile-btn')

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
    toggleNavMenu()
})
venus.addEventListener('click', () => {
    RenderPlanet.setState('Venus')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('venus')

    toggleNavMenu()
})
earth.addEventListener('click', () => {
    RenderPlanet.setState('Earth')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('earth')
    toggleNavMenu()
})
mars.addEventListener('click', () => {
    RenderPlanet.setState('Mars')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('mars')
    toggleNavMenu()
})
jupiter.addEventListener('click', () => {
    RenderPlanet.setState('Jupiter')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('jupiter')
    toggleNavMenu()
})
saturn.addEventListener('click', () => {
    RenderPlanet.setState('Saturn')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('saturn')
    toggleNavMenu()
})
uranus.addEventListener('click', () => {
    RenderPlanet.setState('Uranus')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('uranus')
    toggleNavMenu()
})
neptune.addEventListener('click', () => {
    RenderPlanet.setState('Neptune')
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('neptune')
    toggleNavMenu()
})

open.addEventListener('click', toggleNavMenu)

document.addEventListener('DOMContentLoaded', () => {
    RenderPlanet.planet()
    RenderPlanet.setPlanetSize('mercury')
})
