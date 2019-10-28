export default function disconnect(u) {

  if (!this.handler.has(u)) {
    return
  }

  this.handler.get(u).disconnect()
  this.handler.delete(u)
  
  return this

}