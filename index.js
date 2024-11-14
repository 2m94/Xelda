
const canvas = document.getElementById("gameScreen");  //Global Variable outside of the Game Class
const c = canvas.getContext("2d");          //getContext is built in to the canvas object and can be either 2d or 3d
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log("Context: ", c);


class Game{
    constructor(){

        this.player = undefined; //this is referring to this object and player refers to link

    }

    //The 3 main methods of this game
    initialize = () =>{
        this.player = {
            x:0,
            y:0,
            height:50,
            width:60

        }
        document.addEventListener("keydown", this.handleUserInput)
        document.addEventListener("keyup", this.handleUserInput)

    }
    update = () =>{
        //Handles the changes in values such as position
      
        requestAnimationFrame(this.update);/*   When we put this INSIDE the function we're calling, 
                            it continuously calls that very function ie. "recursion"
                            */
    }
    render = () =>{
        //renders the changes in values onto the screen
        const {x,y,width,height} = this.player;
        c.clearRect(0,0, 1000,1000); //This removes the image previously there. Start the clearing from x,y 0 & 0 with width 1000 & length 1000

        //From beginPath() to c.stroke() we are drawing our image
        c.beginPath(); //c.beginPath() is the equivalent of picking up your brush
        c.fillStyle = "blue";
        c.fillRect(x,y, width,height); //0 of x, 0 of y, length of 100 and width of 100
        c.stroke(); //c.stroke() is the equivalent of putting your brush down to draw

        requestAnimationFrame(this.render); //Now we have a continual render 
        
    }
    //initialize, update, and render will setup the game and keep it running

    //The function to handle user input
    handleUserInput = (e) =>{ //when a key is pressed, it's passed as an 

        /*
        key:string,
        type:string
        */

        const {key, type} = e;
        //Since we only want to handle user input IF player is on the screen, we'll wrap the following code in an if statement
        if(this.player){
            if(type === "keydown"){
                switch(key){
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
                    //"w" and "s" are handling changes in y while "a" and "d" are handling changes in x
                }
            }
        }
    }
    

}
    //According to OOP methodology, we'll now instantiate the game and call each method

const game = new Game();
    game.initialize();
    game.update(); //this is calling the above update method once after which the above update method is being looped by "requestAnimationFrame"
    game.render();  //this is calling the above render method once after which the above render method is being looped by "requestAnimationFrame"

    //Update and render need to be called "continuously" in order to move the player