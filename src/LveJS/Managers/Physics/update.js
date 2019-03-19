export default function update(tt = 0) {

  for (let t of this.bodies) {
    this.destroyObject(t)
  }

  this.world.Step(tt / 1000, 3, 3)
  this.world.ClearForces()

}