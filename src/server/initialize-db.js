import { defaultState } from './default-state';
import {population} from './populate';
import { connectDB } from './connect-db';

async function initializeDB(){
    let db = await connectDB();
    let user = await db.collection('users').findOne({id:"U1"});
    if (!user){
        for (let collectionName in defaultState){
            let collection = db.collection(collectionName);
            await collection.insertMany(defaultState[collectionName]);
        }
    }
}

// This is a file to facilitate to populate database collection 'obituaries' with dummy data
// the images are stored in base64 format
async function populateDB(){
    let db = await connectDB();
    let person;
    for (person in population){
        console.log(person.userId);
    }
    console.log('population 0 is ',population[0].name)
}

async function test_initialize_populateDB(){
    await initializeDB();
    console.log("Done initializing DB");
    await populateDB();
    process.exit(0);
}
 
test_initialize_populateDB();