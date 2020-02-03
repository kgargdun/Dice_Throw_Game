var randomNum1;
randomNum1 = Math.floor(Math.random()*6);
var image1 =document.querySelector(".img1");
var my=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
image1.setAttribute("src",my[randomNum1]);
randomNum2 = Math.floor(Math.random()*6);
var image2 =document.querySelector(".img2");
image2.setAttribute("src",my[randomNum2]);
var txt=document.querySelector(".heading h1");
if(randomNum1>randomNum2)
{
  txt.innerHTML="Player one wins! Refresh";
}
else if(randomNum1<randomNum2)
{
    txt.innerHTML="Player two wins! Refresh";
}
else{
    txt.innerHTML="Oops Draw! Refresh";
}
