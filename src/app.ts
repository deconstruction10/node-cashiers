import express, {Request, Response} from 'express';
const app = express();
const port = 3000;

app.get('/todos', (req: Request, res: Response) => {
    res.send('Hello')
});

app.listen(3000, () => {
    console.log(`Server running on ${port}`)
});
  