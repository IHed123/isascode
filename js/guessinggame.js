var number = Math.round ( Math.random() * 100 + 1 );
var guess = "";
while (guess != number) {
    guess = prompt("guess a number between 1 and 100: ");
if ( guess < number )
    alert("too low.");
else if ( guess > number )
    alert("too high.");
else 
   alert("correct! :D You win");
}
var name = prompt ("what is your name");
for (var n = 1; n <= 500; n++) {
    document.write(name + " wins!!! ");   
}