import express from 'express';
import proposalRouter from './routes/proposal'

const app = express();
const PORT = 3000;

app.use(express.urlencoded( {extended: false}))
app.use(express.json())

app.use('/proposals', proposalRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
