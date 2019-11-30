export default function (url) {

  if (url.substr(-1) !== '/') {
    url += '/'
  }

  this.baseURL = url
  return this

}