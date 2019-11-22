export default function __setPhysicsDensity(v) {

  this.__system__.create.wait(() => {

    if (!this.__system__.physics.body) {
      return this
    }

    let body, total
    let {
      width = 0,
        height = 0,
        marginLeft = 0,
        marginRight = 0,
        marginTop = 0,
        marginBottom = 0
    } = this.__system__.style


    body = width * height

    total = width + marginLeft + marginRight
    total *= (height + marginTop + marginBottom)


    /* Exclude margin space density */
    let n

    n = body / total
    n = n || 1

    this.__system__.physics.body.GetFixtureList().SetDensity(v * n)
    this.__system__.physics.body.ResetMassData()

  })

  return this

}