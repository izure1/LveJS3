export default {

  type: {
    lists: ['camera', 'square', 'circle', 'text', 'image', 'sprite', 'video'],
    get message() {
      return `'type' option is must be require. select one from next: ${this.lists.join(', ')}`
    }
  }

}