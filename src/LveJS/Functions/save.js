function getCameraName() {
  return this.renderer.camera ? this.renderer.camera.name : null
}

function getRendererSetting() {
  return this.renderer.setting
}

function getPhysicsSetting() {
  return this.physics.setting
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
  let objects

  camera = getCameraName.call(this)
  renderer = getRendererSetting.call(this)
  physics = getPhysicsSetting.call(this)
  objects = getObjects.call(this)


  camera = JSON.stringify(camera)
  renderer = JSON.stringify(renderer)
  physics = JSON.stringify(physics)
  objects = JSON.stringify(objects)

  return {
    camera,
    renderer,
    physics,
    objects
  }

}