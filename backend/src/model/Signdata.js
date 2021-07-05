//accessing Mongoose pckage
const mongoose= require('mongoose');

//database connection
mongoose.connect('mongodb+srv://userone:userone@ictak.gst1n.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
//,{   useNewUrlParser: true ,
//    useUnifiedTopology: true,
//    useCreateIndex: true });

// mongoose.connect('mongodb+srv://userone:userone@ictakfiles.slzuy.mongodb.net/<LIBRARYAPP>?retryWrites=true&w=majority',
    // 
//schemadefinition
const Schema = mongoose.Schema;

const signSchema= new Schema(
    {
        fname:String,
        email: String,
        password:String,
        confirm_passsword: String



    }
 
    );

//model creation
var Signdata = mongoose.model('item',signSchema);
module.exports=Signdata;