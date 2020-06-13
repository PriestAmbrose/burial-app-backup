import { storeInDb, getFromDb, deleteFromDb} from '../src/server/server';

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
        });
    
    await storeInDb ('obituaries',
    {
        userId:'U1',
        name: 'Nick Ashford',
        birthDate: 'May 4, 1942',
        deathDate: 'August 22, 2011',
        place: 'New York City, New York',
        age: '70',
        life: '../../obituaries/Nick Ashford.txt',
        photo: [
            '../../obituaries/1092457_o_2.jpeg',
            '../../obituaries/1092459_o.jpeg',
            '../../obituaries/1092460_o.jpeg' 
        ]
    });

    var myCursor = await getFromDb('funeralArrangements',
        {'funeralHome':'Lauqua'});
    
    while (await myCursor.hasNext()){
        const doc=await myCursor.next();
        console.info("Found in collection ", 'funeralArrangements', " item ", doc);
    }
    
    await deleteFromDb ("userInfo", {'id':'U2'});
   
})();

