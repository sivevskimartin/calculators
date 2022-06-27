//TRIANGLE

function triangle() {
    var sideA = document.getElementById('sideA').value;
    var sideB = document.getElementById('sideB').value;
    var sideC = document.getElementById('sideC').value;
    var height = document.getElementById('triangleHeight').value;

    if(sideA<0 || sideB<0 || sideC<0 || height<0) {
        alert("SIDES CAN'T BE NEGATIVE NUMBERS");
        if(sideA < 0) {
            document.getElementById('sideA').value = "";
        }
        if(sideB < 0) {
            document.getElementById('sideB').value = "";
        }
        if(sideC < 0) {
            document.getElementById('sideC').value = "";
        }
        if(height < 0) {
            document.getElementById('triangleHeight').value = "";
        } 
    }
    else if(sideA=="" || sideB=="" || sideC=="") {
        alert("ALL INPUTS MUST BE FILLED");
    }
    else {
        document.getElementById('triangleP').value = parseFloat(sideA)+parseFloat(sideB)+parseFloat(sideC); 
        document.getElementById('triangleA').value = parseFloat(sideA)*parseFloat(height)/2; 
    }
}

function triangleReset() {
    document.getElementById('sideA').value = "";
    document.getElementById('sideB').value = "";
    document.getElementById('sideC').value = "";
    document.getElementById('triangleHeight').value = "";
    document.getElementById('triangleP').value = "";
    document.getElementById('triangleA').value = "";
}

//CIRCLE

function circle() {
    var r = document.getElementById('radius').value;

    if(r<0) {
        alert("RADIUS CAN'T BE NEGATIVE");
        document.getElementById('radius').value = "";
    }
    else if(r=="") {
        alert("RADIUS MUST BE FILLED");
    }
    else {   
        document.getElementById('circleP').value = (2*parseFloat(r)*Math.PI).toFixed(6);
        document.getElementById('circleA').value = (Math.pow(parseFloat(r), 2)*Math.PI).toFixed(5);
    }
}

function circleReset() {
    document.getElementById('radius').value = "";
    document.getElementById('circleP').value = "";
    document.getElementById('circleA').value = "";
}

//PERCENTAGE

function precentage() {
    var p = document.getElementById('precenatageInput1').value;
    var o = document.getElementById('precenatageInput2').value;

    if(p<0 || o<0) {
        alert("CAN'T CALCULATE PERCENTAGE WITH NEGATIVE NUMBERS");
        document.getElementById('precenatageInput1').value = "";
        document.getElementById('precenatageInput2').value = "";
    }
    else if(o=="" || p=="") {
        alert("ALL INPUTS MUST BE FILLED");
    }
    else {
        document.getElementById('precentageRes').value = (parseFloat(p)/100)*parseFloat(o);
    }
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

    if(a<0 || b<0) {
        alert("CANT'T DO " + operation + " WITH NEGATIVE NUMBERS");
        if(a < 0) {
            document.getElementById('precentageMath1').value = "";
        }
        if(b < 0) {
            document.getElementById('precentageMath2').value = "";
        }
    }
    else if(a=="" || b=="") {
        alert("ALL INPUTS MUST BE FILLED");
    }

    if(operation=='INCREASE') {
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

//BMI

function bmi() {
    var height = document.getElementById('bmiHeight').value / 100;
    var weight = document.getElementById('bmiWeight').value;
    var ages = document.getElementById('bmiAges').value;
    var result = ((parseFloat(weight) / Math.pow(parseFloat(height), 2))).toFixed(2);

    if(height < 0 || weight < 0 || ages < 0) {
        alert("CAN'T CALCULATE BMI WITH NEGATIVE NUMBERS");
        if(height < 0) {
            document.getElementById('bmiHeight').value = "";
        }
        if(weight < 0) {
            document.getElementById('bmiWeight').value = "";
        }
        if(ages < 0) {
            document.getElementById('bmiAges').value = "";
        }
    }
    else if(height=="" || weight=="" || ages=="") {
        alert("ALL INPUTS MUST BE FILLED");
    }
    else {
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
}

function bmiReset() {
    document.getElementById('bmiHeight').value = "";
    document.getElementById('bmiWeight').value = "";
    document.getElementById('bmiAges').value = "";
    document.getElementById('bmiResult').style.display = "none";
}

//BMR

function bmr() {
    var ages = document.getElementById('bmrAges').value;
    var weight = document.getElementById('bmrWeight').value;
    var height = document.getElementById('bmrHeight').value;
    var res; 

    if(ages<0 || weight<0 || height<0) {
        alert("CAN'T CALCULATE BMR WITH NEGATIVE NUMBERS");
        if(ages < 0) {
            document.getElementById('bmrAges').value = "";
        }
        if(weight < 0) {
            document.getElementById('bmrWeight').value = "";
        }
        if(height < 0) {
            document.getElementById('bmrHeight').value = "";
        }
    }
    else if(ages=="" || weight=="" || height=="") {
        alert("ALL INPUTS MUST BE FILLED");
    }
    else {
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
}

function bmrReset() {
    document.getElementById('bmrAges').value = "";
    document.getElementById('bmrWeight').value = "";
    document.getElementById('bmrHeight').value = "";
    document.getElementById('bmrResult').style.display = "none";
}

//IDEAL WEIGHT

function ideal() {
    var height = document.getElementById('idealHeight').value;
    var ages = document.getElementById('idealAges').value;
    var idealResult;

    if(height < 0 || ages<0) {
        alert("CAN'T CALCULATE IDEAL WEIGHT WITH NEGATIVE NUMBERS");
        if(height < 0) {
            document.getElementById('idealHeight').value = "";
        }
        if(ages < 0) {
            document.getElementById('idealAges').value = "";
        } 
    }
    else if(height=="" || ages=="") {
        alert("ALL INPUTS MUST BE FILLED");
    }
    else {
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
}

function idealReset() {
    document.getElementById('idealHeight').value = "";
    document.getElementById('idealAges').value = "";
    document.getElementById('idealResult').style.display = "none";
}

//BODY FAT

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
    var neck = document.getElementById('bodyFatNeck').value;
    var waist = document.getElementById('bodyFatWaist').value;
    var hip = document.getElementById('bodyFatHip').value;
    var res;

    if(age < 0 || weight < 0 || height < 0 || neck < 0 || waist < 0 || hip < 0) {
        alert("CAN'T CALCULATE BODY FAT WITH NEGATIVE NUMBERS");
        if(age<0) {
            document.getElementById('bodyFatAges').value = "";
        }
        if(weight < 0) {
            document.getElementById('bodyFatWeight').value = ""; 
        }
        if(height < 0) {
            document.getElementById('bodyFatHeight').value = "";
        }
        if(neck < 0) {
            document.getElementById('bodyFatNeck').value = "";
        }
        if(waist < 0) {
            document.getElementById('bodyFatWaist').value = "";
        }
        if(hip < 0) {
            document.getElementById('bodyFatHip').value = "";
        }
    }
    else if(age=="" || weight=="" || height=="" || neck=="" || waist=="" || hip=="") {
        alert("ALL INPUTS MUST BE FILLED");
    }
    else {
        res = (1.20*(((parseFloat(weight) / Math.pow(parseFloat(height), 2))).toFixed(2)))+(0.23*age);
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

//RENT

function rent() {
    var rentTax = document.getElementById('rentInput1').value;
    var rentDebt = document.getElementById('rentInput2').value;
    var res;

    if(rentTax < 0 || rentDebt < 0) {
        alert("CAN'T CALCULATE RENT WITH NEGATIVE NUMBERS");
        if(rentTax < 0) {
            document.getElementById('rentInput1').value = "";
        }
        if(rentDebt < 0) {
            document.getElementById('rentInput2').value = "";
        }
    }
    else if(rentTax=="" || rentDebt=="") {
        alert("ALL INPUTS MUST BE FILLED");
    }
    else {
        document.getElementById('rentLab').innerHTML = res;
        document.getElementById('rentResult').style.display="block";
    }
    
}

function rentReset() {
    document.getElementById('rentInput1').value = "";
    document.getElementById('rentInput2').value = "";
    document.getElementById('rentResult').style.display = "none";
}

//AUTO LEASE

function lease() {
    var price = document.getElementById('leasePrice').value;
    var term = document.getElementById('leaseTerm').value;
    var payment = document.getElementById('leasePayment').value;
    var trade = document.getElementById('leaseTrade').value;
    var tax = document.getElementById('leaseTax').value;
    var res;
    if(price < 0 || term < 0 || payment < 0 || trade < 0 || tax < 0) {
        alert('')
        if(price < 0) {
            document.getElementById('leasePrice').value = "";
        }
        if(term < 0) {
            document.getElementById('leaseTerm').value = "";
        }
        if(payment < 0) {
            document.getElementById('leasePayment').value = "";
        }
        if(trade < 0) {
            document.getElementById('leaseTrade').value = "";
        }
        if(tax < 0) {
            document.getElementById('leaseTax').value = "";
        }
    }
    else if(price=="" || term=="" || payment=="" || trade=="" || tax=="") {
        alert("ALL INPUTS MUST BE FILLED");
    }
    else {
        document.getElementById('leaseLab').innerHTML = res;
        document.getElementById('leaseResult').style.display="block";
    }
    
}


function leaseReset() {
    document.getElementById('leasePrice').value = "";
    document.getElementById('leaseTerm').value = "";
    document.getElementById('leasePayment').value = "";
    document.getElementById('leaseTrade').value = "";
    document.getElementById('leaseTax').value = "";
    document.getElementById('leaseResult').style.display = "none";
}
