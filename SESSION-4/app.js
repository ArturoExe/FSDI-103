let hunger=0;//hunger meter
let pet=0;//happiness meter
let play=0;//energy meter




let feedPokemon = () => {

    if (document.getElementById("hungerBar").value<100) {
            //increase hunger bar
        hunger=document.getElementById("hungerBar").value+=10;
         document.getElementById("txtHunger").innerHTML=hunger;
         
         //decrease happiness bar
         play=document.getElementById("happinessBar").value-=10;
         document.getElementById("txtHappiness").innerHTML=play;
        
    
    }else{
        alert("Hunger Bar Maxed !!")
    }

}

let petPokemon = () => {

        if (document.getElementById("energyBar").value<100) {
                //decrease happiness bar
             pet=document.getElementById("happinessBar").value-=10;
            document.getElementById("txtHappiness").innerHTML=pet;

             //increase energy bar
            play=document.getElementById("energyBar").value+=10;
             document.getElementById("txtEnergy").innerHTML=play;

        }else{
            alert("Energy Bar Maxed !!");
        }        




}

let playPokemon = () => {

    if (document.getElementById("happinessBar").value<100) {
    //increase the happiness level if the pokemon plays
    play=document.getElementById("happinessBar").value+=10;
    document.getElementById("txtHappiness").innerHTML=play;

    //decrease the energy if pet plays
     play=document.getElementById("energyBar").value-=10;
    document.getElementById("txtEnergy").innerHTML=play;
    
     //decrease the energy if pet plays
     hunger=document.getElementById("hungerBar").value-=10;
    document.getElementById("txtHunger").innerHTML=hunger;

   
    }
    else{
        alert("Happiness Bar Maxed !!")
    }
   



}

if (pet==0) {
    
    document.querySelector(".text-pokemon").style.display="block";
}

const startGame = () => {
    document.querySelector("main").style.display="block";
    document.querySelector(".text-pokemon").style.display="none";


}

