const fs = require('fs')
const path = require('path')

const ejs = require('ejs')
const express = require('express')
const glob = require('fast-glob')
const showdown = require('showdown')

const app = express()




const DIRECTORY_DOCS = path.join(__dirname, '../DOCS').replace(/\\/g, '/')


app.set('view engine', 'ejs')
app.set('views', './test/render')
app.use(express.static('./test/public'))


app.get('/', (req, res) => {
  res.render('main')
})

app.get('/LveJS.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/LveJS.js'))
})

app.get('/LveJS.Interface.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/LveJS.Interface.js'))
})

app.get('/sample', (req, res) => {

  let items
  let title

  items = fs.readdirSync(path.join(__dirname, 'render/sample'))
  items = items.filter(t => path.extname(t) === '.ejs')
  items = items.map(t => {

    let name = path.parse(t).name

    return {
      name,
      url: `/sample/${name}`
    }

  })

  title = 'LveJS sample list'

  res.render('index', {
    title,
    items,
  })

})

app.get('/sample/:name', (req, res) => {

  let name

  name = req.param('name')
  res.render(`sample/${name}`)

})

app.get('/docs/', async (req, res) => {

  let title
  let items

  items = await glob(`${DIRECTORY_DOCS}/**/*`, {
    onlyFiles: true
  })

  title = 'LveJS API DOCS'
  items = items.sort().map(t => {

    let name, url
    
    name = t.replace(DIRECTORY_DOCS, '')
    url = path.join('/docs', encodeURIComponent(name))


    return {
      name,
      url,
    }
    
  })

  res.render('index', {
    title,
    items,
  })

})

app.get('/docs/:doc', (req, res) => {

  let title
  let converter
  let article

  title = decodeURIComponent(req.param('doc'))
  converter = new showdown.Converter

  article = path.join(DIRECTORY_DOCS, title)
  article = fs.readFileSync(article, 'utf8')
  article = converter.makeHtml(article)

  res.render('markdown', {
    title,
    article,
  })

})

app.listen(9001, () => {
  console.log('http://localhost:9001')
})