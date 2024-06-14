
import { readJSONFile}  from "./src/helper.js"
import { faker } from "@faker-js/faker"
import figlet from "figlet";
import { nanoid } from "nanoid";
let foes = readJSONFile("./data","foes.json")




function generateNewEnemy() {

  const newNemisis = {
    id: nanoid(4),

    firstName: faker.person.firstName(),
    
    lastName: faker.person.lastName(),

    age: faker.number.int({ min: 18, max: 48 }),

    zodiacSign: faker.person.zodiacSign(),
    trustWorthy: faker.datatype.boolean(),
    proneToBattle: faker.datatype.boolean(),
    leastFavMusic: faker.music.genre(),
    favoriteBand: `${faker.commerce.productAdjective()} ${faker.animal.cat()}`,
    ThingstoNote:`${ faker.person.bio(2)} ,${ faker.person.bio(3)} `
  };

  return newNemisis;
}

function NemCreation(num) {
  const possibleNewNems = [];
  for (let i = 0; i < num; i++) {
    const newFoe = generateNewEnemy();
    possibleNewNems.push(newFoe);
  }console.log("THIS LIST IS NOT MEANT FOR EVIL")
  return possibleNewNems;
}

function show(foes){
    console.log(foes)
  
}


function sort(sign, foes) {
  const sortedarr = foes.filter((foe) => {
    
   return foe.zodiacSign === sign
  });
  console.log(sortedarr);
  return sortedarr;
}

function destroy(nemId, foes){
  const indexOfFoe = foes?.findIndex(foe => 
    foe.id === nemId) 
   
      if(indexOfFoe > -1){foes?.splice(indexOfFoe,1);


      
        console.log(foes)
        } 
      return foes;
     }

     function edit(foes, nemId){
         const updatedFirstName = process.argv[4]
         const index = foes.findIndex((foe) => foe.id === nemId);
         if( index > -1){
          if(updatedFirstName)
          foes[index].firstName = updatedFirstName
        
          foes[index].lastName = process.argv[5]
         }
         console.log(foes[index])
         return 
    }
    function title(text){

        console.log(figlet.textSync(text,{
          font: "Bloody",
          horizontalLayout: "fitted",
          verticalLayout: "default",
          width: 100,
          whitespaceBreak: true,  
        }
        ))
      
    }


    

     
    
  
    

  



generateNewEnemy();

 export {generateNewEnemy, NemCreation, destroy, sort,show, edit, title}
 //module.exports = { generateNewEnemy, NemCreation };
