import data from '../assets/data/data.json'

import mercuryImg from '../assets/images/planet-mercury.svg'
import mercuryInternal from '../assets/images/planet-mercury-internal.svg'
import mercuryGeo from '../assets/images/geology-mercury.png'

import venusImg from '../assets/images/planet-venus.svg'
import venusInternal from '../assets/images/planet-venus-internal.svg'
import venusGeo from '../assets/images/geology-venus.png'

import earthImg from '../assets/images/planet-earth.svg'
import earthInternal from '../assets/images/planet-earth-internal.svg'
import earthGeo from '../assets/images/geology-earth.png'

import marsImg from '../assets/images/planet-mars.svg'
import marsInternal from '../assets/images/planet-mars-internal.svg'
import marsGeo from '../assets/images/geology-mars.png'

import jupiterImg from '../assets/images/planet-jupiter.svg'
import jupiterInternal from '../assets/images/planet-jupiter-internal.svg'
import jupiterGeo from '../assets/images/geology-jupiter.png'

import saturnImg from '../assets/images/planet-saturn.svg'
import saturnInternal from '../assets/images/planet-saturn-internal.svg'
import saturnGeo from '../assets/images/geology-saturn.png'

import uranusImg from '../assets/images/planet-uranus.svg'
import uranusInternal from '../assets/images/planet-uranus-internal.svg'
import uranusGeo from '../assets/images/geology-uranus.png'

import neptuneImg from '../assets/images/planet-neptune.svg'
import neptuneInternal from '../assets/images/planet-neptune-internal.svg'
import neptuneGeo from '../assets/images/geology-neptune.png'
import { animateCSS } from './Animation'

let planetData = data[0]
const setPlanetContent = function () {
    const planetContentContainer = document.getElementById('planet-content')
    const h2 = planetContentContainer.querySelector('h2')
    const p = planetContentContainer.querySelector('p')
    const wikiLink = planetContentContainer.querySelector('.wiki-js')

    function getName() {
        const name = planetData.name
        //h2.classList.add('animate__lightSpeedInRight')
        h2.textContent = name
        /*  h2.addEventListener(
            'animationend',
            () => {
                h2.classList.remove('animate__lightSpeedInRight')
            },
            { once: true }
        ) */

        animateCSS(h2, 'lightSpeedInRight')
    }
    function getOverview() {
        const overview = planetData.overview
        p.classList.add('animate__fadeIn')
        p.textContent = overview.content
        wikiLink.src = overview.source
        p.addEventListener(
            'animationend',
            () => {
                p.classList.remove('animate__fadeIn')
            },
            { once: true }
        )
    }

    function getStructure() {
        const structure = planetData.structure
        p.textContent = structure.content
        wikiLink.src = structure.source
    }

    function getGeology() {
        const geology = planetData.geology
        p.textContent = geology.content
        wikiLink.src = geology.source
    }

    return { getName, getOverview, getStructure, getGeology }
}
export const RenderPlanet = (() => {
    const planetFactsContainer = document.getElementById('planet-facts-section')
    const setContent = setPlanetContent()

    function setState(planet) {
        let planetPosition = data
            .map((e) => {
                return e.name
            })
            .indexOf(planet)

        planetData = data[planetPosition]
    }
    function setPlanetSize(newPlanet) {
        const dataPlanet = document.querySelector('[data-planet]')
        dataPlanet.dataset.planet = newPlanet
    }
    function planetFactsContent() {
        const { rotation, revolution, radius, temperature } = planetData
        const rotationFact = planetFactsContainer.querySelector('.rotation-js')
        const revolutionFact =
            planetFactsContainer.querySelector('.revolution-js')
        const radiusFact = planetFactsContainer.querySelector('.radius-js')
        const temperatureFact =
            planetFactsContainer.querySelector('.temperature-js')

        rotationFact.textContent = rotation
        revolutionFact.textContent = revolution
        radiusFact.textContent = radius
        temperatureFact.textContent = temperature
    }

    function taps() {
        const planetImages = planetData.images
        const overviewImage = planetImages.planet
        const taps = document.getElementById('taps-section')
        const overview = taps.querySelector('[data-tap=overview')
        const internal = taps.querySelector('[data-tap=internal')
        const geology = taps.querySelector('[data-tap=geology')
        const planetGeology = document.querySelector('.planet-geology')
        const overviewPlanet = document.querySelector('.planet-img')
        const wikiLink = document.querySelector('.wiki-js')
        overviewPlanet.src = overviewImage
        wikiLink.href = planetData.overview.source
        planetGeology.src = '#'
        setContent.getName()

        overview.addEventListener('click', () => {
            planetGeology.src = '#'
            const overviewImage = planetImages.planet
            const overviewPlanet = document.querySelector('.planet-img')

            overviewPlanet.src = overviewImage
            wikiLink.href = planetData.overview.source
            setContent.getOverview()
        })
        internal.addEventListener('click', () => {
            planetGeology.src = '#'
            const image = planetImages.internal
            const planet = document.querySelector('.planet-img')
            planet.src = ''
            planet.src = image
            wikiLink.href = planetData.structure.source
            setContent.getStructure()
        })
        geology.addEventListener('click', () => {
            const image = planetImages.geology
            planetGeology.src = image
            wikiLink.href = planetData.geology.source
            setContent.getGeology()
        })
    }

    function planet() {
        taps()
        setContent.getOverview()
        planetFactsContent()
    }

    return { planet, setState, setPlanetSize }
})()
