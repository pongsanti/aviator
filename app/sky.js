import {Object3D} from 'three'
import Cloud from './cloud'
import {scene} from './scene'


class Sky {
  constructor() {
    this.mesh = new Object3D()

    this.nClounds = 20
    const stepAngle = Math.PI*2 / this.nClounds

    for (let i = 0; i < this.nClounds; i++) {
      const c = new Cloud()

      const a = stepAngle*i
      const h = 750 + Math.random()*200

      c.mesh.position.y = Math.sin(a)*h
      c.mesh.position.x = Math.cos(a)*h

      c.mesh.position.z = a + Math.PI/2

      c.mesh.position.z = -400-Math.random()*400

      const s = 1+Math.random()*2
      c.mesh.scale.set(s,s,s)

      this.mesh.add(c.mesh)
    }
  }
}

const sky = new Sky()

const createSky = () => {
  sky.mesh.position.y = -600
  scene.add(sky.mesh)
}

export {sky}
export default createSky
