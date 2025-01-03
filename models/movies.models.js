import {Schema,model} from 'mongoose'



const movieSchema = new Schema({
    title:{type:String,required:true,unique:true},
    desc:{type:String,required:true},
})



   const Movie = new model('movie',movieSchema)



   export default Movie;