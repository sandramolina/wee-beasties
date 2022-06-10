use chi_beas;
db.dropDatabase();

db.monsters.insertMany([
    {
        name:"RIK",
        finalScore: 342
    },
    {
        name:"LIZ",
        finalScore: 164
    },
    {
        name:"MAT",
        finalScore: 98
    },
    {
        name:"BOB",
        finalScore: 75
    },
    {
        name:"JON",
        finalScore: 42
    }
]);
