import LveJSVector from '../LveJSVector'


function restoreObject(objects) {

  let name
  let item
  let vector

  for (let t of objects) {

    name = t.name
    delete t.name

    item = this.lve(name).create(t)
    item.physicsset.x = t.physicsset.x
    item.physicsset.y = t.physicsset.y
    item.physicsset.a = t.physicsset.a

    for (let p in item.animationset) {

      vector = item.animationset[p]
      item.animationset[p] = new LveJSVector(vector.start, vector.end, vector.duration, vector.easing, vector.runtime)

    }

  }

}

function restoreRenderer(o) {
  delete o.canvas
  Object.assign(this.renderer.setting, o)
}

function restorePhysics(o) {
  Object.assign(this.physics.setting, o)
}

function restoreColliders(o) {

  for (let t of o) {

    let c = this.lve.createCollider(t.a, t.b)

    if (t.playing) c.play()
    else c.pause()

  }

}

function restoreSprites(o) {

  for (let t of o) {

    let {
      name,
      src,
      fps,
      frame,
      start,
      end,
    } = t

    this.lve.createSprite(name, src, {
      fps,
      frame,
      start,
      end
    })

  }

}

function restoreCamera(u) {
  this.renderer.camera = this.lve(u).get()
}

export default function restore(data) {

  let {
    camera,
    renderer,
    physics,
    colliders,
    sprites,
    objects
  } = JSON.parse(data)

  restoreRenderer.call(this, renderer)
  restorePhysics.call(this, physics)
  restoreColliders.call(this, colliders)
  restoreSprites.call(this, sprites)
  restoreObject.call(this, objects)
  restoreCamera.call(this, camera)

  this.lve.requestCaching(true)

  return this.lve

}