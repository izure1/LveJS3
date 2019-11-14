function getCameraName() {
  return this.renderer.camera ? this.renderer.camera.name : null
}

function getRendererSetting() {
  return this.renderer.setting
}

function getPhysicsSetting() {
  return this.physics.setting
}

function getColliders() {
  return Array.from(this.physics.colliders.values())
}

function getSprites() {
  return Array.from(this.spriteManager.sprites.values())
}

function getObjects() {

  let array = []

  for (let t of this.renderer.objects.filter(t => !t.__system__.ghost)) {

    delete t.element

    array.push({
      name: t.name,
      ...t
    })

  }

  return array

}


export default function save() {

  let camera
  let renderer
  let physics
  let colliders
  let sprites
  let objects

  camera = getCameraName.call(this)
  renderer = getRendererSetting.call(this)
  physics = getPhysicsSetting.call(this)
  colliders = getColliders.call(this)
  sprites = getSprites.call(this)
  objects = getObjects.call(this)

  return JSON.stringify({
    camera,
    renderer,
    physics,
    colliders,
    sprites,
    objects,
  }).replace(/\\/g, '\\\\')

}