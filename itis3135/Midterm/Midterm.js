var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000, 2500, 1500, 4000, 2200, 1200, 4400];

var $ = function(id) { return document.getElementById(id); };
var duration = [];
window.onload = function() {
    //event handlers
    function updateCalories() {
        var days = document.getElementById("days").value;
        var calories = document.getElementById("calories").value;
        if (calories == "") {
            alert("Enter a Valid Number");
            return;
        }

        let i = 0;
        for (i = 0; i < days.length; i++) {
            let element = days[i];
            if (element == days)
                break;
        }
        duration[i] = parseInt(calories);
        alert(
            `Your consumption is ${duration[i]}hrs on ${days}`
        );
        document.getElementById("duration").innerHTML = "Consumed Calories is" + calories;
        //    console.log(duration);

    }

    function showAverageCalories() {
        let sum = 0;
        for (var i = 0; i < calories.length; i++) {
            if (duration[i] != undefined) {
                sum += duration[i];
            }
        }
        sum = sum / 7;
        var data = `<h3>Average Calorie Consumed is:</h3><div class="duration"> ${sum} <div>`;
        document.getElementById("avg").innerHTML = data;
    }

    function showMax() {
        var data = `<b>Your maximum consumed calorie is  `;
        data += `<b>Days</b><br/>`;

        for (var i = 0; i < 7; i++) {
            if (duration[i] != undefined && duration[i] < 7) {
                data += `<b>${days[i]}   ${duration[i]} </b><br/> `;
            }
        }
        document.getElementById("ans").innerHTML = data;

    }
}