export default function getLevelObj(u) {

  let r
  let levels, level

  r = []
  levels = u.split('::')

  for (let t of this) {

    level = levels[0]

    for (let j = 0, len_j = levels.length; j < len_j; j++) {

      if (
        t.level === level ||
        t.level === 'anywhere'
      ) {
        r.push(t)
        break
      }

      if (levels[j + 1] !== undefined) {
        level += `::${levels[j + 1]}`
      }

    }

  }

  return r
  
}