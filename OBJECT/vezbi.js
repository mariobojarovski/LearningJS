let brod = {
    brodInfo:{
        dolzina:100,
        sirina: 20,
        model:"3G$FD",
        maxspeed:180,
    },
    membersInfo:{
        kapetan:{
            broj:1,
            godini:60,
            rabIskustvo:35,
            brNaRabMesta:2,
        },
        mornanri:{
            broj:10,
            avgStarost:35,
            avgRabIskusstvo:40,
        },
        patnici: {
            broj:200,
            avgStarost:43,
        },
    },
        location:{
            start:"Barcelona",
            end:"Oslo",
            currLoca:"GB",
        },
};
console.log("Dolzinata na brodot e " ,brod.brodInfo.dolzina ,"metri");
for (let crewMember in brod.membersInfo){
    console.log(`${crewMember}: ${brod.membersInfo[crewMember].broj}`)
  }
