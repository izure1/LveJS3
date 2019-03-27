export default function disconnect(u) {

  if (!u in this.list) {
    return
  }

  this.list[u].disconnect()
  return this

}