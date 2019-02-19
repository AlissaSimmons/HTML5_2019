var inventory = {
    Dagger: 0,
    Hearts: 0,
    MushroomPeices: 0,
    Feathers: 0,
    Stars: 0
}

Game();

function Game(){
    
    document.write("Paint.");
    var playerName = prompt("What is your title?");
    confirm("Velkommen, "+ playerName);
    
    var nickNames = ["Beezer", "Shrek", "Vanya", "Orco", "Peaches", "Munch"];
    
    nickname = nickNames[Math.floor(Math.random()* 6)]
    
    confirm("How about I call you "+nickname+" instead?");
    alert("You really agree to being called " +nickname+ "? Wow, now I know you won't make it.");
    
    alert("You wake up with hazy vision. After being still for a moment, the colors slowly seperate and you can make out basic shapes again.");
    
Bottomfloor();

    function Bottomfloor(){
        var Bottomfloor = prompt("You sit up and find yourself in a white room. There is a door behind you, some paintings in front of you, and a set of stairs to the right. What would you like to do?").toLowerCase();
    
    if(Bottomfloor == "look around" || Bottomfloor == "look"){
        var bottomfloorLook = prompt("The room is quite small. There is a door behind you, some paintings in front of you, and a set of stairs to the right. Everything but the paintings is white.");
    }
    else if(Bottomfloor == "walk"){
        var direction = prompt("What do you wish to walk towards?");
        
        if(direction == "upstaris" || "stairs"){
            Upstairs();
        }
        
        if(direction == "paintings" || "painting"){
            alert("There are five paintings.");
            alert("The sign on the wall says do not touch, but there is an urge in the back of your mind that begs you to. At this rate, you're not sure you have a choice anymore.");
            
            var choice = prompt("Although you don't have a choice but to touch one of the paintings, you do have a choice of which one. There is a painting of a forest, the ocean, space, what appears to be someone of royalty, and a bear. So, what painting do you coose?").toLowerCase();
            
            if(choice == "forest" || "the forest painting" || "the forest one"){
                Forest();
            }
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
                        alert("You now have " +inventory.MushroomPeices+" Mushroom Peice(s).");
                        Forest();
                        }
                        else{
                        alert("Farewell.");
                        Bottomfloor();
                        }
    }
    function Upstairs(){
        alert("You are upstairs.");
        alert("There is a painting here too, but it appears to be all blacked out.");
        
        var upstairsnow = prompt("Do you wish to leave or stay?");
            if(upstairsnow == "leave");{
                Bottomfloor();
            }
            
            else if(upstairsnow == "stay");{
                alert("You stare at the blank, black square for a while, pondering its purpose.");
            }
                
        var touch? = prompt("Do you wish to touch this painting?");
                if(touch == "yes"){
                BlackPainting();
            }
                    
                
    }
}    