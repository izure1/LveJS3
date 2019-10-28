export default function setKey(keyCode, isDown) {

  if (isDown) {
    this.pressedKey.add(keyCode)
  } else {
    this.pressedKey.delete(keyCode)
  }

  return this

}