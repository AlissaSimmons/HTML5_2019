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
    alert("Welcome to the land of Drizdal "+ playerName);
    alert("You wake up... DEAD! Or maybe not...");
    
Prison();

    function Prison(){
    var prison = prompt("yeet yeet boi u in prison I guess. /n -look around /n -go back to sleep / n taunt the gaurd").toLowerCase();
    
    if(prison == "look around" || prison == "look"){
        var prisonLook = prompt("The prison is small, dirty and damp. A rat scurries into a hole in the corner. Bugs are everywhere and they are speaking to you.");
    }
    else if(prison == "go back to sleep" || prison == "sleep"){
        alert("You slumber.");
        var resume = confirm("Do you wish to continue?");
        
        if(resume){
            Prison();
        }
        else{
            alert("Game Over!");
        }
    }
}

}