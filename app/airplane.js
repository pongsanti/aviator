import {Object3D, BoxGeometry, MeshPhongMaterial,
FlatShading, Mesh} from 'three'
import Colors from './palette'
import {scene} from './scene'

class Airplane {
  constructor () {
    this.mesh = new Object3D()

    const geomCockpit = new BoxGeometry(60, 50, 50, 1, 1, 1)
    const matCockpit = new MeshPhongMaterial({
      color: Colors.red, shading: FlatShading
    })
    const cockpit = new Mesh(geomCockpit, matCockpit)
    cockpit.castShadow = true
    cockpit.receiveShadow = true
    this.mesh.add(cockpit)

    const geomEngine = new BoxGeometry(20, 50, 50, 1, 1, 1)
    const matEngine = new MeshPhongMaterial({
      color: Colors.white, shading: FlatShading
    })
    const engine = new Mesh(geomEngine, matEngine)
    engine.position.x = 40
    engine.castShadow = true
    engine.receiveShadow = true
    this.mesh.add(engine)

    const geomTail = new BoxGeometry(15, 20, 5, 1, 1, 1)
    const matTail = new MeshPhongMaterial({
      color: Colors.red, shading: FlatShading
    })
    const tailPlane = new Mesh(geomTail, matTail)
    tailPlane.position.set(-35, 25, 0)
    tailPlane.castShadow = true
    tailPlane.receiveShadow = true
    this.mesh.add(tailPlane)

    const geomSideWing = new BoxGeometry(40, 8, 150, 1, 1, 1)
    const matSideWing = new MeshPhongMaterial({
      color: Colors.red, shading: FlatShading
    })
    const sideWing = new Mesh(geomSideWing, matSideWing)
    sideWing.castShadow = true
    sideWing.receiveShadow = true
    this.mesh.add(sideWing)

    const geomPropeller = new BoxGeometry(20, 10, 10, 1, 1, 1)
    const matPropeller = new MeshPhongMaterial({
      color: Colors.brown, shading: FlatShading
    })
    this.propeller = new Mesh(geomPropeller, matPropeller)
    this.propeller.castShadow = true
    this.propeller.receiveShadow = true

    const geomBlade = new BoxGeometry(1, 100, 20, 1, 1, 1)
    const matBlade = new MeshPhongMaterial({
      color: Colors.brownDark, shading: FlatShading
    })
    const blade = new Mesh(geomBlade, matBlade)
    blade.position.set(8, 0, 0)
    blade.castShadow = true
    blade.receiveShadow = true

    this.propeller.add(blade)
    this.propeller.position.set(50, 0, 0)
    this.mesh.add(this.propeller)
  }
}

let airplane

const createPlane = () => {
  airplane = new Airplane()
  airplane.mesh.scale.set(.25, .25, .25)
  airplane.mesh.position.y = 100
  scene.add(airplane.mesh)
}
export {airplane}
export default createPlane
