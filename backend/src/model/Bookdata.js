//accessing Mongoose pckage
const mongoose= require('mongoose');
//mongoose.set('useFindAndModify', false);

//database connection
mongoose.connect('mongodb+srv://userone:userone@ictak.gst1n.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

    //'mongodb://localhost:27017/librarysk');

//schemadefinition
const Schema = mongoose.Schema;



const BookSchema=new Schema(
    {
        title: String,
        author: String,
        genre: String,
        image:String,
        
    }
);



//model creation
var Bookdata = mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;