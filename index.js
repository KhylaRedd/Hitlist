import {writeJSONFile, readJSONFile} from "./src/helper.js"
import { generateNewEnemy, NemCreation , destroy,sort,show, edit,title} from "./nemisis.js";

const inform = console.log;


function run() {
    const action = process.argv[2];
    const nemisis = process.argv[3];
      let foes = readJSONFile("./data","foes.json")
      let writeToFile = false;
      let possiblefoes = [];
      let sign = foes.zodiacSign;
    
      
    

      switch(action){
         case "add":
        //npm run create//
            const newNems = NemCreation(nemisis)
            possiblefoes = [...foes, ...newNems]
            writeToFile = true;//lets me overwrite
            break;
            
        case "destroy":
         //npm run show//
            possiblefoes= destroy(nemisis, foes);
            writeToFile = true;
            break;

        case "sort":
           possiblefoes= sort(nemisis,foes);
           writeToFile = false;
           break;

        case "show":
          possiblefoes= show(foes);
          writeToFile= false;
          break;

        case "update":
            possiblefoes= edit(foes,nemisis)
            writeToFile= false;
            break;

        case"start":
            console.log ("Welcome to the Hitlist, A silly little inventory for those whose fates are doomed! While here you may add,destroy,show, sort and edit. But, be mindful of the lives you toy with muahahaha"
            )
            
            break;

        case"title":
            title("The HitList");
            break;





        //add sort by zodiac sign and trustworthiness
        }

        if(writeToFile) {
            writeJSONFile("./data", "foes.json", possiblefoes)
        }
    }


    run()
