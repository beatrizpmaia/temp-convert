
let temperatura

/*Convertendo de Celcius para Fahrenheit*/
function celciusFahrenheit(temperatura) {
    let r1 = (temperatura * 9/5) + 32
    console.log("A temperatura de " + temperatura + "°C equivale a " + r1 + "F.");
}

/*Convertendo de Fahrenheit para Celcius*/
function fahrenheitCelcius (temperatura) {
    let r2 = (temperatura - 32) * 5/9 
    console.log("A temperatura de " + temperatura + "F equivale a " + r2.toFixed(2) + "°C.");
}

/*Convertendo de Celcius para Kelvin*/
function celciusKelvin (temperatura) {
    let r3 = (temperatura + 273.15)
    console.log("A temperatura de " + temperatura + "°C equivale a " + r3.toFixed(2) + "K.");  
}

/*Convertendo de Kelvin para Celcius*/
function kelvinCelcius (temperatura) {
    let r4 = (temperatura - 273.15); 
    console.log("A temperatura de " + temperatura + "K equivale a " + r4.toFixed(2) + "°C.");  
}

/*Convertendo de Fahrenheit para Kelvin*/
function fahrenheitKelvin(temperatura) {
    let r5 = (temperatura - 32) * 5/9 + 273.15; 
    console.log("A temperatura de " + temperatura + "F equivale a " + r5.toFixed(2) + "K.");   
}

/*Convertendo de Kelvin para Fahrenheit*/
function kelvinFahrenheit(temperatura) {
    let r6 = (temperatura - 273.15) * 9/5 + 32; 
    console.log("A temperatura de " + temperatura + "K equivale a " + r6.toFixed(2) + "F."); 
}


