// Single line comment
/*

Multiline comment

*/

//document.write("<h1>I can't wait for <em>spring!</em></h1>");


// alert("Warning! Will Robinson... Warning!");

// confirm("Do you like pokemon?");

// ("What type of pokemon do you like/");

Game();

function Game(){
    
    document.write("Paint.");
    var playerName = prompt("What is your name?");
    alert("Welcome, "+ playerName);
    alert("You wake up... DEAD! Or maybe not... How peculiar.");
    
Bottomfloor();

    function Bottomfloor(){
        var Bottomfloor = prompt("You sit up and find yourself in a white room. There is a door behind you, some paintings in front of you, and a set of stairs to the right.").toLowerCase();
    
    if(Bottomfloor == "look around" || Bottomfloor == "look"){
        var bottomfloorLook = prompt("The room is quite small. You see a rat scurry into a hole in the corner and there are beetles towards the tops of all the walls. There is a door behind you, some paintings in front of you, and a set of stairs to the right.");
    }
    else if(Bottomfloor == "walk"){
        var direction = prompt("What do you wish to walk towards?");
        
        if(direction == "paintings" || "painting"){
            alert("There are five paintings.")
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
}