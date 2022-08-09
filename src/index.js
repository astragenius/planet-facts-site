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
    RenderPlanet.renderPlanetSite()
    RenderPlanet.setPlanetSize('mercury')
    toggleNavMenu()
})
venus.addEventListener('click', () => {
    RenderPlanet.setState('Venus')
    RenderPlanet.renderPlanetSite()
    RenderPlanet.setPlanetSize('venus')

    toggleNavMenu()
})
earth.addEventListener('click', () => {
    RenderPlanet.setState('Earth')
    RenderPlanet.renderPlanetSite()
    RenderPlanet.setPlanetSize('earth')
    toggleNavMenu()
})
mars.addEventListener('click', () => {
    RenderPlanet.setState('Mars')
    RenderPlanet.renderPlanetSite()
    RenderPlanet.setPlanetSize('mars')
    toggleNavMenu()
})
jupiter.addEventListener('click', () => {
    RenderPlanet.setState('Jupiter')
    RenderPlanet.renderPlanetSite()
    RenderPlanet.setPlanetSize('jupiter')
    toggleNavMenu()
})
saturn.addEventListener('click', () => {
    RenderPlanet.setState('Saturn')
    RenderPlanet.renderPlanetSite()
    RenderPlanet.setPlanetSize('saturn')
    toggleNavMenu()
})
uranus.addEventListener('click', () => {
    RenderPlanet.setState('Uranus')
    RenderPlanet.renderPlanetSite()
    RenderPlanet.setPlanetSize('uranus')
    toggleNavMenu()
})
neptune.addEventListener('click', () => {
    RenderPlanet.setState('Neptune')
    RenderPlanet.renderPlanetSite()
    RenderPlanet.setPlanetSize('neptune')
    toggleNavMenu()
})

open.addEventListener('click', toggleNavMenu)

document.addEventListener('DOMContentLoaded', () => {
    RenderPlanet.renderPlanetSite()
    RenderPlanet.setPlanetSize('mercury')
})
