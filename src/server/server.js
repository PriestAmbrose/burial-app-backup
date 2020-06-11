import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {connectDB} from './connect-db';
import './initialize-db';
import { authenticationRoute } from './authenticate';

let port = process.env.PORT || 7777;
let app = express();

app.listen(port, console.log("Server listening on port ", port));

/*app.get('/',(req,res)=>{
    res.send("Hello world!!!! Shammar Rockim");
}) */ // that was a testing thing

// plugins for the app 
app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);

authenticationRoute(app);

if (process.env.NODE_ENV == 'production'){
    app.use(express.static(path.resolve(__dirname, '../../dist')));
    app.get('/*', (req,res =>{
        res.sendFile(path.resolve('index.html'));
    }))

}

/* The call of "storeInDb" saves one record "item" in a certain collection "col"
"col" can be either "userInfo", "obituaries" or "funeralArrangements"
"item" is a jason variable representing corresponding record 
usage: storeInDb(col,item)
*/

export const storeInDb = async (col,item) => {
    let db = await connectDB();
    let collection = db.collection(col);
    await collection.insertOne(item);
    console.info("Inserted item in collection ", col, " : ", item);
}

/* The call of "getFromDb" retrieves from collection "col" all items wich are found 
which suite 'queryFilter" 
"col" can be either "userInfo", "obituaries" or "funeralArrangements"
"queryFilter" is a jason variable representing filter (see rules of MongoDb)
and returns a Cursor variable which can iterate result of search 
usage: getFromDb(col,item)
*/

export const getFromDb = async (col,queryFilter) => {
    let db = await connectDB();
    let collection = db.collection(col);
    console.info("Query from collection ", col, " items ", queryFilter);
    return await collection.find(queryFilter);
}

/* The call of "deleteFromDb" deletes from collection "col" all items wich are found 
which suite 'queryFilter" 
"col" can be either "userInfo", "obituaries" or "funeralArrangements"
"queryFilter" is a jason variable representing filter (see rules of MongoDb) 
usage: deleteFromDb(col,item)
*/

export const deleteFromDb = async (col,queryFilter) => {
    let db = await connectDB();
    let collection = db.collection(col);

    let myCursor = await collection.find(queryFilter); // This is for console info
    console.info("Deleting ");
    
    while (await myCursor.hasNext()){
        const doc=await myCursor.next();
        console.info("Deleteing from collection ", col, " item ", doc);
    }

    collection.deleteMany(queryFilter);
}

export const addNewTask = async task=>{
    let db = await connectDB();
    let collection = db.collection('tasks');
    await collection.insertOne(task);
};

export const updateTask = async task=>{
    let { id, group, isComplete, name } = task; 
    let db = await connectDB();
    let collection = db.collection('tasks');

    if (group) {
        await collection.updateOne({id}, {$set:{group}})
    }
    if (name) {
        await collection.updateOne({id}, {$set:{name}})
    }
    if (isComplete !== undefined) {
        await collection.updateOne({id}, {$set:{isComplete}})
    }
};

app.post('/task/new', async (req, res) => {
    let task = req.body.task; 
    await addNewTask(task);
    res.status(200).send();
});

app.post('/task/update', async (req, res) => {
    let task = req.body.task; 
    await updateTask(task);
    res.status(200).send();
});