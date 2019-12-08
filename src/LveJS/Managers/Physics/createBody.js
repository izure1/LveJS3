let bodyDef = null

function getBodyDef(B) {

  if (!bodyDef) {
    bodyDef = new B.b2BodyDef
  }

  return bodyDef

}


/**
 * 
 * @param {String} t Body Type (static, dynamic)
 */
export default function createBody(t) {

  let B = this.box2d
  let r = getBodyDef(B)

  switch (t) {

    case 'static':
      t = B.b2_staticBody
      break

    case 'dynamic':
      t = B.b2_dynamicBody
      break

    default:
      t = B.b2_dynamicBody
      break

  }

  r.set_type(t)
  return r

}