import {render} from './scene'
import {sea} from './sea'
import {sky} from './sky'
import {airplane} from './airplane'
import {mousePos} from './mouse_event'

const loop = () => {
  sea.mesh.rotation.z += .005
  sky.mesh.rotation.z += .01

  updatePlane()

  render()
  requestAnimationFrame(loop)
}

const updatePlane = () => {
  let targetX = normalize(mousePos.x, -1, 1, -100, 100)
  let targetY = normalize(mousePos.y, -1, 1, 25, 175)

  airplane.mesh.position.y = targetY
  airplane.mesh.position.x = targetX
  airplane.propeller.rotation.x += 0.3
}

const normalize = (v, vmin, vmax, tmin, tmax) => {
  let nv = Math.max(Math.min(v, vmax), vmin)
  let dv = vmax - vmin
  let pc = (nv - vmin)/dv
  let dt = tmax - tmin
  let tv = tmin + (pc*dt)
  return tv
}

export default loop