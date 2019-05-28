export default function calcContainRatio(clientWidth, clientHeight, width, height, s) {

  let sw, sh, ss

  sw = clientWidth / width
  sh = clientHeight / height

  ss = sw < sh ? sw : sh
  ss *= s
  width *= ss
  height *= ss

  return {
    width,
    height
  }

}