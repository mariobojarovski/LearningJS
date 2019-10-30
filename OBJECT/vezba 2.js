let school ={
    teachers:{
        Math:{
            name:'Jone Stones',
            age:34,
            worExp:10,
            classesPerWeek:36,
            say(){
                console.log("Maybe");
            }
        },
        Chem:{
            name:'Jone Walker',
            age:28,
            worExp:5,
            classesPerWeek:34,
            say(){
                console.log("NO");
            }
        },
        Hist:{
            name:'Ben Ten',
            age:34,
            worExp:10,
            classesPerWeek:26,
            say(){
                console.log("Wait");
            }
        },
        Geog:{
            name:'Jassica Odegard',
            age:22,
            worExp:2,
            classesPerWeek:16,
            say(){
                console.log("Good bye");
            }
        },
        Phys:{
            name:'Gero Alen',
            age:28,
            worExp:7,
            classesPerWeek:46,
            say(){
                console.log("How are you")
            }
        },
        Engl:{
            name:'Alen Vegas',
            age:30,
            worExp:10,
            classesPerWeek:11,
            say(){
                console.log("Hello World")
            }
        },
    },
};
for(let teacher in school.teachers ){
    console.log("Teacher: "+`${school.teachers[teacher].name}`+" Years old: "+`${school.teachers[teacher].age}`+" He has "+`${school.teachers[teacher].worExp}`+" years work exp")
}