alert("You are in my domain now");

function askUser() {
    var name = prompt("Enter your Name:", "");
    if (name != null) {
        document.get("name").innerHTML = "Hello " + name + "!"
    }

}

function askHow() {
    var user = prompt("How are you doing today? ", "");
    if (user != null) {
        document.getElementById("health").innerHTML = "", alert("It's good that you've been" + user);
    }
}

function funny() {
    document.getElementById("insult").innerHTML = "Psych...Fooled you! XD ", alert("If I throw a stick will you leave?");
}

function addition() {
    var num1 = Number(prompt("Enter a number: "));
    var num2 = Number(prompt("Enter another number: "))
    if (num1 != null && num2 != null) {
        document.getElementById("add").innerHTML = "Numbers added: " + (num1 + num2), alert("Your number is: " + (num1 + num2));
    }

}

function tax() {
    var salesTax = 6.25 / 100;
    alert("Calculating Sales Tax");
    var askTax = Number(prompt("Enter an item or service cost: "));
    var cTax = askTax * salesTax;
    if (askTax != null) {
        document.getElementById("tax").innerHTML = "Tax Calculated is: $ " + (cTax), alert("Tax is: $ " + cTax);

    }
}