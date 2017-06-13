import createScene from './scene'
import createLights from './light'
import createSea from './sea'
import createSky from './sky'
import createPlane from './airplane'
import handleMouseMove from './mouse_event'

import loop from './loop'

const init = () => {
  createScene()
  createLights()

  createSea()
  createSky()
  createPlane()

  document.addEventListener('mousemove', handleMouseMove, false)

  loop()
}

window.addEventListener('load', init, false)
