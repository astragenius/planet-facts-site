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

// renderPlanet Function
// renderPlanet Function get a parameter - the planet name
// set variables of each DOM element that i need to place the content.
// get needed data from data.json and store it in a variable.
// find it with a ES6 function that finde the name of the planet and extract the needed data for the content.
// set extractet data to the variables

//(maybe i need to create a function to find the needed Planet data when no ES6 function is usefull)
// The DOM element thas was createt get returnt

export const RenderPlanet = (() => {
    /* planet imgs */

    const setPlanetImgs = () => {
        const planetImg = document.querySelector('.planet-img')
        planetImg.src = mercuryImg
    }
    const setPlanetIntertnal = () => {
        const planetInternal = document.querySelector('.planet-img')
        planetInternal.src = mercuryInternal
    }
    const setPlanetGeo = () => {
        const planetGeology = document.querySelector('.planet-geology')
        planetGeology.src = mercuryGeo
    }

    /* planet content */
    const planetContent = document.getElementById('planet-content')
    const planetName = planetContent.getElementsByTagName('h2')
    const planetDescription = planetContent.getElementsByTagName('p')
    const wikiLink = planetContent.querySelector('.wiki-js')

    /* taps */

    const planetTaps = document.getElementById('taps-section')

    /* Planet Facts */
    const setPlanetFacts = () => {
        const planetFactsContainer = document.getElementById(
            'planet-facts-section'
        )
        const rotationTime = planetFactsContainer.querySelector('.rotation-js')
        const revolutionTime =
            planetFactsContainer.querySelector('.revolution-js')
        const radius = planetFactsContainer.querySelector('.radius-js')
        const averageTemp =
            planetFactsContainer.querySelector('.averageTemp-js')

        console.log(averageTemp)

        rotationTime.textContent = data[0].rotation
        revolutionTime.textContent = data[0].revolution
        radius.textContent = data[0].radius
        averageTemp.textContent = data[0].temperature
    }

    return { setPlanetFacts, setPlanetImgs, setPlanetGeo }
})()
