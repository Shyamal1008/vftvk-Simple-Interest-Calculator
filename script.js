function compute() {   // It will run when cumpute interest is clicked
    var principal = document.getElementById("principal").value; //Whatever the value is putted by user it will get stored in principal variable
    if (principal <= 0) { // if user enters negative or zero number it will show alert
        alert("enter a positive number");
        document.getElementById("principal").focus(); // the focus will come back on box after ok is clicked
        return;
    }

    var rate = document.getElementById("rate").value; // Value is stored through slider as rate
    var years = document.getElementById("years").value; // value is stored in years variable
    var Interest = principal * years * rate / 100; // Value is stored in Interest in Interest variable
    // var TotalSum = parseInt(Interest) + parseInt(principal); //This will showw total monet including Interest and Principal

    var CurrentDate = new Date();  // Current date is stored in currentDate variable
    var CurrentYear = parseInt(CurrentDate.getFullYear()) + parseInt(years); // Parsing will convert string to Integer and will help to show the future year

    var Attention = document.getElementById("result"); // 
        Attention.innerHTML = document.getElementById("result").innerHTML="If you deposit <span class='highlight'>"+principal+"</span>,\<br\>at an interest rate of <span class='highlight'>  "+rate+"%</span>\<br\>You will receive an amount of <span class='highlight'> "+Interest+"</span>,\<br\>in the year<span class='highlight'> "+CurrentYear+"</span>\<br\>"
} // This will show the result the result on screen after all the computation is done in form of html

function SliderValue() {  //When slider is moved
    var slider = document.getElementById("rate"); 
    var output = document.getElementById("rate_val");
    output.innerHTML = slider.value; // Shows the default slider value

    // Every time we change the slider it will show the current value
    slider.oninput = function () {
        output.innerHTML = slider.value;
    }
}

