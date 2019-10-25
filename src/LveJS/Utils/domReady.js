/**
 * 
 * @param {Function} f 
 */
function documentReady(f) {

  let r

  r = true

  if (document.readyState != 'loading') f()
  else {

    document.addEventListener('DOMContentLoaded', function cb() {
      document.removeEventListener('DOMContentLoaded', cb)
      f()
    })

    r = false
  }

  return r

}

/**
 * 
 * @param {HTMLElement} t 
 * @param {Function} f Onload success
 * @param {Function} fa Onload fail
 */
function elementSourceReady(t, f, fa) {

  let r

  r = true

  if (t.complete === undefined) f.call(t, t)
  else {

    if (t.complete && t.src) f.call(t, t)
    else {

      t.addEventListener('load', function cb() {
        t.removeEventListener('load', cb)
        f.call(t, t)
      })
      t.addEventListener('error', function cb() {
        t.removeEventListener('error', cb)
        f.call(t, t)
      })

      r = false

    }

  }

  return r

}

/**
 * 
 * @param {HTMLElement} t 
 * @param {Function} f Onload success
 * @param {Function} fa Onload fail
 */
function elementStreamReady(t, f, fa) {

  let r

  r = true

  if (t.readyState === 4) f.call(t, t)
  else {

    t.addEventListener('canplaythrough', function cb() {
      t.removeEventListener('canplaythrough', cb)
      f.call(t, t)
    })
    t.addEventListener('error', function cb() {
      t.removeEventListener('error', cb)
      f.call(t, t)
    })

    r = false

  }

  return r

}

/**
 * 
 * @param {*} f Onload success
 * @param {*} fa Onload fail
 */
export default function ready(f, fa = function () {}) {

  let r

  if (this === document || this === window) r = documentReady(f)
  else if (this.load && this.load.call) r = elementStreamReady(this, f, fa)
  else r = elementSourceReady(this, f, fa)

  return r

}