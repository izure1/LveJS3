const fs = require('fs')
const path = require('path')
const process = require('process')

const ejs = require('ejs')
const express = require('express')
const serveIndex = require('serve-index')
const showdown = require('showdown')
const open = require('open')

const app = express()


const DIRECTORY_RENDER = path.join(__dirname, '../test/render').replace(/\\/g, '/')
const DIRECTORY_DOCS = path.join(__dirname, '../docs').replace(/\\/g, '/')


app.set('view engine', 'ejs')
app.set('views', './test/render')

app.use(express.static('./test/public'))

app.use('/sample', serveIndex(`${DIRECTORY_RENDER}/sample`))
app.use('/docs', serveIndex(DIRECTORY_DOCS))



app.get('/', (req, res) => {
  res.render('main')
})

app.get('/LveJS.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/LveJS.js'))
})

app.get('/LveJS.Interface.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/LveJS.Interface.js'))
})

app.get(/(.*)\.ejs$/, (req, res) => {

  let file

  file = decodeURIComponent(req.url).substr(1)
  res.render(file)

})

app.get(/.*\.md$/, (req, res) => {

  let file
  let converter
  let title, article

  file = decodeURIComponent(req.url)
  file = path.join(process.cwd(), file)
  title = path.basename(file)

  converter = new showdown.Converter
  article = fs.readFileSync(file, 'utf8')
  article = converter.makeHtml(article)

  res.render('markdown', {
    title,
    article,
  })

})

app.listen(9001, () => {
  open('http://localhost:9001')
})