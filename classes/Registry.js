import { PositionComponent } from "./Component";
import Entity from "./entity";

class Registry{
    constructor(){
        this.numberOfEntities = 0;
        this.systems = {}
        this.entitiesToBeAdded = []
    }
/*
{
    name: "Position",
    value:{
        x:0,
        y:0,
        height:50,
        width:50
    }
}
*/
    createEntity = (components)=>{

        const newEntity = new Entity(this.numberOfEntities++, this) //Here "this" refers to the instantiation of this very Registry class
        let newEntityComponents = {}

        for(let i=0; i < components.length; i++){
            const component = components[i]

            switch(component["name"]){
                case "Position":{
                const componentObj = component["Value"]
                newEntityComponents["Position"] = new PositionComponent(component["name"], componentObj)
                break;
                }
                case "Movement":{
                    const componentObj = component["Value"]
                    newEntityComponents["Movement"] = new PositionComponent(component["name"], componentObj)
                    break;
                    }
                default:
                break;
            }
        }
        newEntity.components = newEntityComponents;
        this.entitiesToBeAdded.push(newEntity)
        return newEntity
    }

    //SystemType, string, example: "MovementSystem"
    addSystem = (systemType) =>{
        let newSystem;
        switch(systemType){
            case "MovementSystem":{
                newSystem = new MovementSystem(systemType)
                break;

            }
            default: {
                break;
            }
        }
        this.systems[systemType] = newSystem
    }
}

export default Registry;