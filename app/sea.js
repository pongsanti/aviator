import Colors from './palette'
import {scene} from './scene'
import {CylinderGeometry, Matrix4, MeshPhongMaterial, FlatShading,
Mesh} from 'three'

class Sea {
  constructor () {
    const geom = new CylinderGeometry(600, 600, 800, 40, 10)
    geom.applyMatrix(new Matrix4().makeRotationX(-Math.PI/2))

    const mat = new MeshPhongMaterial({
      color: Colors.blue,
      transparent: true,
      opacity: 6,
      shading: FlatShading
    })

    this.mesh = new Mesh(geom, mat)
    this.mesh.receiveShadow = true
  }
}

const sea = new Sea()

const createSea = () => {
  sea.mesh.position.y = -600
  scene.add(sea.mesh)
}

export {sea}
export default createSea
