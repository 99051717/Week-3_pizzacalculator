
//Constanten

const pizzaS = 4;
const pizzaM = 6;
const pizzaL = 8; 


//Variable + prompt
var kleinepizza = prompt("hoeveel kleine pizzas wil je ?");
var mediumpizza = prompt("hoeveel medium pizzas wil je ?");
var grotepizza = prompt("hoeveel grote pizzas wil je ?");
 
//indi
var totaalk = (pizzaS*kleinepizza)
var totaalm = (pizzaM*mediumpizza)
var totaall = (pizzaL*grotepizza)

 document.write('<br> Totaal kleine pizza(s) = € ' + totaalk); 
 document.write('<br> Totaal medium pizza(s) = € ' + totaalm); 
 document.write('<br> Totaal grote pizzas(s) = € ' + totaall); 

document.write('<br></br>')
//Berekening 

document.write(kleinepizza + " Kleine pizza(s)" + '<br>')
document.write(mediumpizza + " Medium pizza(s)" + '<br>')
document.write(grotepizza + " Grote pizza(s)" + '<br><br> ')

var totalS = kleinepizza*pizzaS;
var totalM = pizzaM*mediumpizza;
var totalL = pizzaL*grotepizza;
document.write('Total =  €' + (totalS+totalM+totalL));
