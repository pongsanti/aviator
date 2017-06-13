import {WIDTH, HEIGHT} from './scene'

export let mousePos = {x: 0, y: 0}

const handleMouseMove = (event) => {
  let tx = -1 + (event.clientX / WIDTH) * 2
  let ty = 1 - (event.clientY / HEIGHT) * 2
  mousePos = {x: tx, y: ty}
}

export default handleMouseMove
