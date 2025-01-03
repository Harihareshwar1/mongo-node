import Movie from '../models/movies.models.js';
import mongoose from 'mongoose';
const MovieIndex = async (req,res) =>{
    try{
        const movies = await Movie.find();
        res.status(200).json(movies);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

const MoviePost = async (req,res) =>{
     const newMovie = new Movie({title:req.body.title,desc:req.body.desc});
     console.log(req.body);
     try{
           const savedMovie =  await newMovie.save();
            res.status(201).json(savedMovie);
     }
     catch(err){
            res.status(400).json({message: err.message});
     }
}

const MovieUpdate = async (req,res) =>{    
   try{
    const updatedMovie = await Movie.findOneAndUpdate({_id:req.params.id},{title:req.body.title,desc:req.body.desc},{new:true});
    res.status(200).json(updatedMovie);
}   
catch(err){
    res.status(400).json({message: err.message});
}
}

const MovieDelete = async (req,res) =>{
    
try {
            await Movie.deleteOne({_id:req.params.id})
            res.status(200).json("Movie has been deleted");
    
} catch (error) {
    res.status(400).json({message: err.message});
    
}    
    }

export default { MovieIndex, MoviePost, MovieUpdate, MovieDelete };