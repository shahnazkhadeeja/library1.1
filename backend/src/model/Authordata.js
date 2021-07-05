//accessing Mongoose pckage
const mongoose= require('mongoose');
//mongoose.set('useFindAndModify', false);

//database connection
mongoose.connect('mongodb+srv://userone:userone@ictak.gst1n.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority'
,{useNewUrlParser: true, useUnifiedTopology: true});

//schemadefinition
const Schema = mongoose.Schema;



const AuthorSchema=new Schema(
    {
        poet: String,
        description: String,
        works: String,
        image:String,
        
    }
);



//model creation
var Authordata = mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;