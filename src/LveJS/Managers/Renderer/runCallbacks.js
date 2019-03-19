export default function (callbacks = [], tt = 0) {

  for (let callback of callbacks) callback(tt)

}