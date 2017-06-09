import {Scene, PerspectiveCamera, WebGLRenderer,
BoxGeometry, MeshBasicMaterial, Mesh, Geometry,
Vector3,
LineBasicMaterial, LineDashedMaterial, Line} from 'three'

let scene = new Scene()
let camera = new PerspectiveCamera(
  45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 100)
camera.lookAt(new Vector3(0, 0, 0))

let renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

let material = new LineBasicMaterial({color: 0x0000ff})
let geometry = new Geometry()
geometry.vertices.push(new Vector3(-10, 0, 0))
geometry.vertices.push(new Vector3(0, 10, 0))
geometry.vertices.push(new Vector3(10, 0, 0))

let line = new Line(geometry, material)

scene.add(line)
renderer.render(scene, camera)
// function render () {
//   requestAnimationFrame(render)
//   renderer.render(scene, camera)
// }

// render()