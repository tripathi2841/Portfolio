const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/about_student",{useCreateIndex:true,useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=>{
//     console.log("connection is succesful");
// }).catch((err)=>{
//     console.log("Not connected");
// })

mongoose.connect("mongodb+srv://Harshittripathi:Harshit@2841@main.hwlhz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useCreateIndex:true,useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connection is succesful");
}).catch((err)=>{
    console.log("Not connected");
})


const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    mesaage:String
})

const StudentInfo = new mongoose.model("StudentInfo",studentSchema);
module.exports = StudentInfo;