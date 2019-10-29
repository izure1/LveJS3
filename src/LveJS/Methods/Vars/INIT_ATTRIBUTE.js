export default function (t) {

  this.image = {
    element: document.createElement('img')
  }

  this.particle = {
    element: document.createElement('img')
  }

  this.sprite = {
    element: document.createElement('img'),
    loop: true
  }

  this.video = {
    element: document.createElement('video')
  }

  this.text = {
    text: 'Hello, World!'
  }

}