import {Scene, Fog, PerspectiveCamera, WebGLRenderer} from 'three'

export let HEIGHT = window.innerHeight
export let WIDTH = window.innerWidth

let camera
let scene = new Scene()
const renderer = new WebGLRenderer({alpha:true, antialias: true})

const createScene = () => {
  scene.fog = new Fog(0xf7d9aa, 100, 950)

  const aspectRatio = WIDTH/HEIGHT
  const fieldOfView = 60
  const nearPlane = 1
  const farPlane = 10000

  camera = new PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane)
  camera.position.x = 0
  camera.position.z = 200
  camera.position.y = 100

  renderer.setSize(WIDTH, HEIGHT)
  renderer.shadowMap.enabled = true

  const container = document.getElementById('world')
  container.appendChild(renderer.domElement)

  window.addEventListener('resize', handleWindowResize, false)
}

const handleWindowResize = () => {
  HEIGHT = window.innerHeight
  WIDTH = window.innerWidth
  renderer.setSize(WIDTH, HEIGHT)
  camera.aspect = WIDTH/HEIGHT
  camera.updateProjectionMatrix()
}

const render = () => {
  renderer.render(scene, camera)
}

export {scene, render}

export default createScene
