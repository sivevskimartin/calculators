function triangle() {
    var a = document.getElementById('triangle1').value;
    var b = document.getElementById('triangle2').value;
    var c = document.getElementById('triangle3').value;
    var d = document.getElementById('triangle4').value;

    document.getElementById('triangleP').value = parseFloat(a)+parseFloat(b)+parseFloat(c); 
    document.getElementById('triangleA').value = parseFloat(a)*parseFloat(d)/2; 
}

function circle() {
    var r = document.getElementById('radius').value;

    document.getElementById('circleP').value = (2*parseFloat(r)*Math.PI).toFixed(6);
    document.getElementById('circleA').value = (Math.pow(parseFloat(r), 2)*Math.PI).toFixed(5);
}

function precentage() {
    var p = document.getElementById('precenatageInput1').value;
    var o = document.getElementById('precenatageInput2').value;
    document.getElementById('precentageRes').value = (parseFloat(p)/100)*parseFloat(o);
}

function precentageReset() {
    document.getElementById('precenatageInput1').value = "";
    document.getElementById('precenatageInput2').value = "";
    document.getElementById('precentageRes').value = "";
}

function precentageMath() {
    var a = document.getElementById('precentageMath1').value;
    var b = document.getElementById('precentageMath2').value;
    var operation = document.getElementById('percentageSelect').value;
    var result;
    if(operation=='increase') {
        result = parseFloat(a) * (1+(parseFloat(b)/100));
        document.getElementById('precentageMathRes').value = result;     
    }
    else {
        result = parseFloat(a) * (1-(parseFloat(b)/100));
        document.getElementById('precentageMathRes').value = result;
    }
}

function precentageMathReset() {
    document.getElementById('precentageMath1').value = "";
    document.getElementById('precentageMath2').value = "";
    document.getElementById('precentageMathRes').value = "";
}

function bmi() {
    var a = document.getElementById('bmiInput2').value / 100;
    var b = document.getElementById('bmiInput3').value;
    var result = ((parseFloat(b) / Math.pow(parseFloat(a), 2))).toFixed(2);
    document.getElementById('bmiLab').innerHTML = result;
    document.getElementById('bmiResult').style.display = "block";
    if(result<18.5) {
        document.getElementById('bmiLab2').innerHTML = "Underweight";
    }
    else if(result>=18.5 && result<=24.9) {
        document.getElementById('bmiLab2').innerHTML = "Healthy";
    }
    else if(result>=25 && result<=29.9) {
        document.getElementById('bmiLab2').innerHTML = "Overweight";
    }
    else {
        document.getElementById('bmiLab2').innerHTML = "Overweight";
    }

}

function bmiReset() {
    document.getElementById('bmiInput1').value = "";
    document.getElementById('bmiInput2').value = "";
    document.getElementById('bmiInput3').value = "";
    document.getElementById('bmiResult').style.display = "none";
}