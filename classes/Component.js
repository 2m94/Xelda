//A component is a grouping of a specific kind of data
class Component{
    constructor(componentType){

        this.componentType = componentType; //this will be a String
    }
}

class PositionComponent extends Component{
    constructor(componentType, componentObj){
        super(componentType)

        this.x = componentObj.x;
        this.y = componentObj.y;
        this.width = componentObj.width
        this.height = componentObj.height

    }
}

class MovementComponent extends Component{
    constructor(componentType, componentObj){
        super(componentType);
        this.vX = componentObj.vX;
        this.vy = componentObj.vy;
        this.collisionX = false;
        this.collisionY = false;


    }
}

export {MovementComponent, PositionComponent}