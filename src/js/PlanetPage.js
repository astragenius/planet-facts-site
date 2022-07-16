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

let planetData = data[0]
export const RenderPlanet = (() => {
    const planetFactsContainer = document.getElementById('planet-facts-section')
    const { name, overview, structure, geology } = planetData

    function setState(planet) {
        let planetPosition = data
            .map((e) => {
                return e.name
            })
            .indexOf(planet)

        planetData = data[planetPosition]
    }
    function planetFactsContent() {
        const { rotation, revolution, radius, temperature } = planetData
        const rotationFact = planetFactsContainer.querySelector('.rotation-js')
        const revolutionFact =
            planetFactsContainer.querySelector('.rotation-js')
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
        overviewPlanet.src = overviewImage

        overview.addEventListener('click', () => {
            planetGeology.src = ''
            const overviewImage = planetImages.planet
            const overviewPlanet = document.querySelector('.planet-img')
            overviewPlanet.src = overviewImage
        })
        internal.addEventListener('click', () => {
            planetGeology.src = ''
            const image = planetImages.internal
            const planet = document.querySelector('.planet-img')
            planet.src = image
        })
        geology.addEventListener('click', () => {
            const image = planetImages.geology
            planetGeology.src = image
        })
    }

    function planet() {
        taps()
        planetFactsContent()
    }

    return { planet, setState }
})()
