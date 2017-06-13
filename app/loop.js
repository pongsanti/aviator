import {render} from './scene'
import {sea} from './sea'
import {sky} from './sky'
import {airplane} from './airplane'

const loop = () => {
  airplane.propeller.rotation.x += 0.3
  sea.mesh.rotation.z += .005
  sky.mesh.rotation.z += .01

  render()
  requestAnimationFrame(loop)
}

export default loop