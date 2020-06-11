import md5 from 'md5';
export const defaultState = {
    users: [{
        id: "U1",
        name: "Dev",
        passwordHash:md5("TUPLES")
    },{
        id: "U2",
        name: "CEO",
        passwordHash:md5("PROFITING")
    }],
    obituaries: [{
        userId : "U1",
        name: "Joan Doe",
        birthDate: "April 23th 1945",
        deathDate: "May 14th 2020",
        funeralHome: "Otway",
        coronaCase: true,
        life: "She was sooo niec!....etc."
    },{       
        userId : "U1",
        name: "Jane Doe",
        birthDate: "April 2th 1945",
        deathDate: "May 1th 2020",
        funeralHome: "Otway",
        coronaCase: true,
        life: "She was sooo nice, too!....etc."
        
    }],
    funeralArrangements: [{
        userId :"U1",
        deceasedName: "Jane Doe",
        funeralHome: "Laqua",
        status: "closed"
    }]
}