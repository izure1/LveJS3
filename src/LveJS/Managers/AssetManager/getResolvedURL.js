import url from 'url'


export default function (src) {

  return url.resolve(this.baseURL, src)

}