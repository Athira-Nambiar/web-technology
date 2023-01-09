const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const port = 9000


var obj = {
    "item": "Biriyani",
    "descprition": "biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot.",
    "calories": "350cal",
    "quantity": "serves 2",
    "price": "Rs.380"
}

app.use(express.static('public'));

//start server at port 9000
app.listen(port, () => console.log(`Server listening on port ${port}`))
app.use(express.static(path.join(__dirname, '../frontend/')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'))
})

app.get('/View', (req, res) => {
  fs.readFile('./items.json', (err, data) => {
      if(!err) {
          res.write(data)
          res.end()
          return
      }
      res.write("Error reading items.json file")
      res.end()
      console.log("Error reading items.json file")
  })
})


app.get('/Additemsdata', (req, res) => {
    fs.readFile('./items.json', (err, data) => {
        if(!err) {
            var updated = JSON.parse(data)
            updated.push(obj)
            fs.writeFile('./items.json', JSON.stringify(updated, null, 2), (err) => {
                if(!err) {
                    console.log("File Write Successful")
                }
                else {
                    console.log(err)
                }
            })
        }
    })
    res.statusCode=302
    res.setHeader('Location','/')
    return res.end()
})