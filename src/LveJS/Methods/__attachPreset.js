export default function __attachPreset(preset, v) {

  for (let i in v) {
    if (!(i in preset)) continue
    preset[i] = v[i]
  }

  return this

}