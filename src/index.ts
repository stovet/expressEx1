import express from 'express';
import movieRoutes from './routes/movie-routes';

const app = express();
const port = 3000;

app.use(express.json());

app.use("/movies/", movieRoutes)




app.listen(port, function(){
    console.log(`listening on ${port}`);
})

