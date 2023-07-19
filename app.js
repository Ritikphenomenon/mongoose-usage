const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/data");

const fruitschema=new mongoose.Schema({
       //name:String,//normal name
       name:{
        type:String,
        required:[true," Enter name of fruits"]
       },
       //rating:Number//normal rating..
       //rating for data validator
       rating:{
        type:Number,
        min:1,
        max:10
       }
});

//for connecting the documents

const personschema= new mongoose.Schema({
    name:String,
    age:Number,
    fav:fruitschema
});

const item=mongoose.model("First",fruitschema);
const per=mongoose.model("favperson",personschema);

const grapes= new item({
    name:"cherry",
    rating:9
});
grapes.save();

const person1= new per({
    name:"any",
    age:21,
    fav:grapes
});

person1.save();


/*
//these code for pushing the data in the mogodb database

const element= new item({
    name:"Apple",
    rating:10
});

const element1= new item({
    name:"papaya",
    rating:9
});

const element2= new item({
    name:"orange",
    rating:8
});

item.insertMany([element1,element2])

.then(function(){
    console.log("successfully saved defult items to DB");
})

.catch(function(err){
    console.log(err);
});
*/
//these code for findind the database.....

/*
// it is for the finding the data..

item.find().then((results) => {
    console.log(results);
  }).catch((error) => {
    console.log(error);
  });
*/
   /*
   //data validation checking 

const element=new item({
    
    rating:3
});

element.save();

*/

/*
//for deleting the particular record

item.deleteOne({name:"orange"}).then((results) => {
    console.log(results);
  }).catch((error) => {
    console.log(error);
  });

  */

  /*
  //for updating the record successfully

  item.updateOne({ _id:"644d98a777d9fc62ce3b474e"},
  {rating: 6}).then((results) => {
    console.log(results);
  }).catch((error) => {
    console.log(error);
  });

  */




