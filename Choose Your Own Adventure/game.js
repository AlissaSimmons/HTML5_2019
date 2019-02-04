// Single line comment
/*

Multiline comment

*/

//document.write("<h1>I can't wait for <em>spring!</em></h1>");


// alert("Warning! Will Robinson... Warning!");

// confirm("Do you like pokemon?");

// ("What type of pokemon do you like/");

var inventory = {
    Coins: 10,
    Dagger: 0,
    Hearts: 0,
    MushroomPeices: 0,
}

Game();

function Game(){
    
    document.write("Paint.");
    var playerName = prompt("What is your title?");
    alert("Velkommen, "+ playerName);
    alert("You wake up with hazy vision. After being still for a moment, the colors slowly seperate and you can make out basic shapes again.");
    
Bottomfloor();

    function Bottomfloor(){
        var Bottomfloor = prompt("You sit up and find yourself in a white room. There is a door behind you, some paintings in front of you, and a set of stairs to the right.").toLowerCase();
    
    if(Bottomfloor == "look around" || Bottomfloor == "look"){
        var bottomfloorLook = prompt("The room is quite small. There is a door behind you, some paintings in front of you, and a set of stairs to the right. Everything but the paintings is white.");
    }
    else if(Bottomfloor == "walk"){
        var direction = prompt("What do you wish to walk towards?");
        
        if(direction == "paintings" || "painting"){
            alert("There are five paintings.");
            alert("The sign on the wall says do not touch, but there is an urge in the back of your mind.")
        }
        
    else if(Bottomfloor == "go back to sleep" || Bottomfloor == "sleep"){
        alert("You slumber...");
        var resume = confirm("Do you wish to continue?");
        
        if(resume){
            Bottomfloor();
        }
        else{
            alert("Game Over!");
        }
    }
}
}
    function Forest(){
        alert("You entered the forest painting. You look around and everything is made up of layered strokes of paint. The colors are vibrant.");
        
            var mushroom = prompt("Do you wish to take a peice of the mushroom?");
                if(mushroom == "yes")
                    var mushroomtake = confirm("are you certain?");
                        if(mushroomtake){
                        // ads =1 mushroom peice
                        inventory.MushroomPeices ++;
                        // Displays mushroom peices
                        alert("You now have" +inventory.MushroomPeices+" Mushroom Peices.");
                        Forest();
                        }
                        else{
                        alert("Farewell.");
                        Bottomfloor();
                        }
    }
}