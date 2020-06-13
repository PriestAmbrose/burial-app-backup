import { defaultState } from './default-state';
import {population} from './population';
import { connectDB } from './connect-db';
import { storeInDb, getFromDb, deleteFromDb} from './server';

async function initializeDB(){
    let db = await connectDB();
    let user = await db.collection('userInfo').findOne({id:"U1"});
    if (!user){
        for (let collectionName in defaultState){
            console.info("Inserting collection", collectionName);
            let collection = db.collection(collectionName);
            await collection.insertMany(defaultState[collectionName]);
        }
    }
}

// This is a file to facilitate to populate database collection 'obituaries' with dummy data
// the images are stored in base64 format
async function populateDB(){

    population.forEach(async function(value){
        //TODO: store each item of array of population in database
        // converting images in base64 format and rendering text
        // amount of images shouldn't exceed 16 Mbytes

        console.log("storing obituary", value);
        await storeInDb('obituaries',value);

    });
    
    /*let person;
    for (person in population){
        console.log(person.userId);
    }
    console.log('population 0 is ',population[0].name)*/
}

async function test_initialize_populateDB(){
    await initializeDB();
    console.log("Done initializing DB");
    await populateDB();
    process.exit(0);
}
 
test_initialize_populateDB();