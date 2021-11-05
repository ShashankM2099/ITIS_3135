function getShape(my_number) {
    alert("This program is working currently!")

    switch (Number(my_number)) {
        case 1:
            document.querySelector("#information").textContent = " It is Henagon" + my_number + "!"
            alert("It's a Monogon.")
            break
        case 2:
            document.querySelector("#information").textContent = " It is Digon" + my_number + "!"
            alert("It's a Bigon.")
            break
        case 3:
            document.querySelector("#information").textContent = "It's a trigon"
            alert("TriiiiiiGon")
            break;
        case 4:
            document.querySelector("#information").textContent = " It is Tetragon" + my_number + "!"
            alert("It's a tetragon.")
            break
        case 5:
            document.querySelector("#information").textContent = " It is Pentagon" + my_number + "!"
            alert("The worlds Largest prison Pentagon")
            break
        case 6:
            document.querySelector("#information").textContent = " 6 sided die is Hexagon" + my_number + "!"
            alert("It's a Hexagon.")
            break
        case 7:
            document.querySelector("#information").textContent = " It is Heptagon" + my_number + "!"
            alert("It's a Heptagon.")
            break
        case 8:
            document.querySelector("#information").textContent = " It is OctaGon" + my_number + "!"
            alert("It's a OctaGon.")
            break
        case 9:
            document.querySelector("#information").textContent = " It is Enneagon" + my_number + "!"
            alert("It's a EnneaGon.")
            break
        case 10:
            document.querySelector("#information").textContent = " It is Decagon" + my_number + "!"
            alert("It's a Decagon and that is name!!.")
            break

    }

}

function validateEntry() {
    var num = Number(prompt("Enter a number commanded by Norm the 9'er between 1-10: "))
    if (num >= 0 && num <= 10) {
        getShape(num)
    } else {
        alert("Number must be in 1-10 inclusive range.")
    }

}