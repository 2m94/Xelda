import Registry from "./classes/Registry.js";
const canvas = document.getElementById("gameScreen")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d")
console.log("Context: ", c)


class Game{ //From this Game class, we create the "entity"
    constructor(){
        this.player = undefined; // Initializing an object instance of the class
        this.registry = undefined;
    }

    initialize=()=>{

        this.player ={ 
        x : 0,
        y : 0,
        height :50,
        width :50

        }

        this.registry.addSystem("MovementSystem")
        console.log(This.registry.systems)

        document.addEventListener("keyup", this.handleUserInput)

        document.addEventListener("keydown", this.handleUserInput)
        
    }
    update=()=>{
        

        requestAnimationFrame(this.update)
    }

    render=()=>{
        const {x, y, width, height} = this.player;
        c.clearRect(0,0,canvas.width,canvas.height)
        c.beginPath(); //Drawing an image on canvas always starts with this
        c.fillStyle = "turquoise";
        c.fillRect(x, y, width, height);
        c.stroke(); //Draws whatever we describe after beginPath()
        requestAnimationFrame(this.render);
    }

    handleUserInput = (e)=>{

        /*
        key:...,
        type:string
        */

        const {key,type} = e;

        if(this.player){

            if(type == "keydown"){
                switch (key) {
                    
                    case "w":
                        this.player.y -= 1;
                        break;
                    case "a":
                        this.player.x -= 1;
                        break;
                    case "s":
                        this.player.y += 1;
                        break;
                    case "d":
                        this.player.x += 1;
                        break;
                    default:
                        break;
                }
            }
        }

    }
}

const game = new Game(); //Create a new game object
game.initialize();
game.update();
game.render();
    
