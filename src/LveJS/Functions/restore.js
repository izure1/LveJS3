function restoreObject(objects) {

  let name
  let item

  for (let t of objects) {
    name = t.name
    delete t.name
    item = this.lve(name).create(t)
    item.physicsset.x = t.physicsset.x
    item.physicsset.y = t.physicsset.y
    item.physicsset.a = t.physicsset.a
  }

}

function restoreRenderer(o) {
  delete o.canvas
  Object.assign(this.renderer.setting, o)
}

function restorePhysics(o) {
  Object.assign(this.physics.setting, o)
}

function restoreCamera(u) {
  this.renderer.camera = this.lve(u).get()
}

export default function (data) {

  let {
    camera,
    renderer,
    physics,
    objects
  } = data

  camera = JSON.parse(camera)
  renderer = JSON.parse(renderer)
  physics = JSON.parse(physics)
  objects = JSON.parse(objects)

  restoreRenderer.call(this, renderer)
  restorePhysics.call(this, physics)
  restoreObject.call(this, objects)
  restoreCamera.call(this, camera)

  this.lve.requestCaching(true)

  return this

}