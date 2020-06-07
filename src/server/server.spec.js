import { storeInDb, getFromDb, deleteFromDb} from './server';

(async function myFunc(){
    await storeInDb ('obituaries',
        {
        userId : "U1",
        name: "Joanen Doelite",
        birthDate: "September 2nd 1995",
        deathDate: "March 4th 2000",
        funeralHome: "Otwaykey",
        coronaCase: false,
        life: "She was sooo niece!....etc."
        })
    
    var myCursor = await getFromDb('funeralArrangements',
        {'funeralHome':'Lauqua'});
    
    while (await myCursor.hasNext()){
        const doc=await myCursor.next();
        console.info("Found in collection ", 'funeralArrangements', " item ", doc);
    }
    
    await deleteFromDb ("userInfo", {'id':'U2'});
   
})();

