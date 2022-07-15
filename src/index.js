import './scss/index.scss'
import anime from 'animejs/lib/anime.es.js'
import earth from './assets/images/planet-earth.svg'
import earthGeo from './assets/images/geology-earth.png'
import data from './assets/data/data.json'
import { RenderPlanet } from './js/PlanetPage'

let position = data
    .map((e) => {
        return e.name
    })
    .indexOf('Earth')

let planetData = data[position]
let { name, overview, structure, geology } = planetData
let { rotation, revolution, radius, temperature } = planetData

const open = document.querySelector('.nav-mobile-btn')
const planetImg = document.querySelector('.planet-img')
const planetGeo = document.querySelector('.planet-geology')

planetImg.src = earth
planetGeo.src = earthGeo

function openAnimation() {
    anime({
        targets: '.nav-mobile-btn.open .line1',
        rotate: '45deg',
        translateY: '4px',
        margin: '0px',
    })
    anime({
        targets: '.nav-mobile-btn.open .line2',
        opacity: 0,
        margin: '0px',
    })
    anime({
        targets: '.nav-mobile-btn.open .line3',
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
    if (open.classList.contains('open') === true) {
        open.classList.toggle('open')
        closeAnimation()
    } else {
        console.log('test1')
        open.classList.add('open')
        openAnimation()
    }
})
