import app from './app'
import { PORT } from './config/constant'

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} is running...`)
})
