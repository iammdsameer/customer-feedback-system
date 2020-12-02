const express = require('express')
const app = express()

app.get('/', (req, res) =>
  res.json({ message: 'api is working', success: true })
)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`api listening on ${PORT}`))
