import { MovementComponent } from "./Component";
import { MovementSystem } from "./System";

class Registry{
    constructor(){
          this.numberaOfEntities = 0;
          this.entitiesToBeAdded = []; //An array that holds the entities that need to be added
          this.systems = {};                                     
          
          
          //ID is passed from the registry based on when it is created
    }
    //We'll create an array of objects
    //Each object {} will denote movement and carry properties with it
    /*
    {
        name: "Movement",
        value: {
        X:0
        Y:1
        height:50
        width:50
        }
    }
    */
    createEntity = (components) =>{
        const newEntity = new Entity(this.numberaOfEntities++, this) //this refers to the instantiation of
        //  the registry class
        let newEntityComponents = {}; 

        for(let i=0; i < components.length; i++){
            const component = components[i];

            switch (component["name"]) {
                case "Position":{
                    const componentObj = component["value"];
                    newEntityComponents["Position"] = new PositionComponent(component["name"], componentObj)
                    break;
                }
                case "Movement":{
                    const componentObj = component["value"];
                    newEntityComponents["Movement"] = new MovementComponent(component["name"], componentObj);
                }
                default:
                    break;
            }
        }
        newEntity.components = newEntityComponents;
        this.entitiesToBeAdded.push(newEntity);
    }
    //systemType: string, example:"MovementSystem"
    addSystem = (systemType) =>{  //We'll be using uniquely identified strings to get a specific system type
        let newSystem;
        switch (systemType) {
            case "MovementSystem":{ 
                newSystem = new MovementSystem(systemType);
                break;
            }
                
            default:{

                break;
            }
                
        }
        this.systems[systemType] = newSystem;
    }
}

export default Registry;