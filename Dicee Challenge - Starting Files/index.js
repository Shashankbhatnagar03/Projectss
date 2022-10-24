var ran1 = Math.floor(Math.random()*6)+1;


var ranImage ="dice"+ran1+".png";

var ranImgS = "images/"+ranImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",ranImgS);

var ran2 = Math.floor(Math.random()*6)+1;

var ranImgS2 = "images/dice"+ran2+".png";

document.querySelectorAll("img")[1].setAttribute("src",ranImgS2);




if(ran1>ran2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(ran2>ran1)
{
    document.querySelector("h1").innerHTML="Player 2 wins ";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}