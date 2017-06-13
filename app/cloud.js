import {Object3D, BoxGeometry, MeshPhongMaterial, Mesh} from 'three'
import Colors from './palette'

class Cloud {
  constructor () {
    this.mesh = new Object3D()

    const geom = new BoxGeometry(20, 20, 20)
    const mat = new MeshPhongMaterial({
      color: Colors.white
    })

    let nBlocs = 3+Math.floor(Math.random()*3)
    for(let i = 0; i < nBlocs; i++) {
      const m = new Mesh(geom, mat)
      m.position.x = i*15
      m.position.y = Math.random()*10
      m.position.z = Math.random()*10
      m.rotation.z = Math.random()*Math.PI*2
      m.rotation.y = Math.random()*Math.PI*2

      let s = .1 + Math.random()*.9
      m.scale.set(s, s, s)

      m.castShadow = true
      m.receiveShadow = true

      this.mesh.add(m)
    }
  }
}

export default Cloud