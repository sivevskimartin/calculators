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
    var a = document.getElementById('bmiHeight').value / 100;
    var b = document.getElementById('bmiWeight').value;
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
    document.getElementById('bmiHeight').value = "";
    document.getElementById('bmiWeight').value = "";
    document.getElementById('bmiResult').style.display = "none";
}

function bmr() {
    var ages = document.getElementById('bmrAges').value;
    var weight = document.getElementById('bmrWeight').value;
    var height = document.getElementById('bmrHeight').value;
    var res; 
    if(document.getElementById('bmrRadio1').checked) {
        res = (10*weight)+(6.25*height)-(5*ages)+5;
        document.getElementById('bmrLab').innerHTML = res;
        document.getElementById('bmrResult').style.display="block";
    }   
    else {
        res = (10*weight)+(6.25*height)-(5*ages)-161;
        document.getElementById('bmrLab').innerHTML = res;
        document.getElementById('bmrResult').style.display="block";
    }
}

function bmrReset() {
    document.getElementById('bmrAges').value = "";
    document.getElementById('bmrWeight').value = "";
    document.getElementById('bmrHeight').value = "";
    document.getElementById('bmrResult').style.display = "none";
}

function ideal() {
    var height = document.getElementById('idealHeight').value;
    var idealResult;
    if(document.getElementById('idealRadio1').checked) {
        idealResult = (50 + (0.91*(height-152.4))).toFixed(1);
        if(idealResult<0) {
            document.getElementById('idealLab').innerHTML = 0;
        document.getElementById('idealResult').style.display="block";
        }
        else {
        document.getElementById('idealLab').innerHTML = idealResult;
        document.getElementById('idealResult').style.display="block"; 
        }
    }
    else {
        idealResult = (45.5 + (0.91*(height-152.4))).toFixed(1);
        if(idealResult<0) {
            document.getElementById('idealLab').innerHTML = 0;
        document.getElementById('idealResult').style.display="block";
        }
        else {
        document.getElementById('idealLab').innerHTML = idealResult;
        document.getElementById('idealResult').style.display="block"; 
        }
    }
}

function idealReset() {
    document.getElementById('idealHeight').value = "";
    document.getElementById('idealAges').value = "";
    document.getElementById('idealResult').style.display = "none";
}

function bodyFatRadio() {
    document.getElementById('bodyFatHipRow').style.display = "block";
    document.getElementById('bodyFatHip').style.display = "block";
}

function bodyFatRadio1() {
    document.getElementById('bodyFatHipRow').style.display = "none";
    document.getElementById('bodyFatHip').style.display = "none";
}

function bodyFat() {
    var age = document.getElementById('bodyFatAges').value;
    var weight = document.getElementById('bodyFatWeight').value;
    var height = document.getElementById('bodyFatHeight').value;
    var res;
    if(document.getElementById('bodyFatRadio1').checked)
    {
        res = (1.20*(((parseFloat(weight) / Math.pow(parseFloat(height), 2))).toFixed(2)))+(0.23*age)-16.2;
        document.getElementById('bodyFatLab').innerHTML = res;
        document.getElementById('bodyFatResult').style.display="block";
    }
}

function bodyFatReset() {
    document.getElementById('bodyFatAges').value = "";
    document.getElementById('bodyFatWeight').value = "";
    document.getElementById('bodyFatHeight').value = "";
    document.getElementById('bodyFatNeck').value = "";
    document.getElementById('bodyFatWaist').value = "";
    document.getElementById('bodyFatHip').value = "";
    document.getElementById('bodyFatResult').style.display = "none";
}