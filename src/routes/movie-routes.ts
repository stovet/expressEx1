import express from 'express';
import Movie from '../models/movie';
const movieRoutes = express.Router();

const movies: Movie[] = [
    {id: 1, title: "Lion King", year: 1993, animated: true},
    {id: 2, title: "Beetlejuice", year: 1990, animated: false},
    {id: 3, title: "Jurassic Park", year: 1995, animated: false}];

movieRoutes.get('/', function(req, res){
    res.json(movies);
});

movieRoutes.get("/:id", function(req, res){
    let inputId: number = parseInt(req.params.id);
    for(let i = 0; i < movies.length; i++){
        if(movies[i].id === inputId){
            res.json(movies[i]);
            break;
        }
    }
    res.status(404)
    res.send({"error": `Movie with id ${req.params.id} does not exist`})
})


export default movieRoutes;