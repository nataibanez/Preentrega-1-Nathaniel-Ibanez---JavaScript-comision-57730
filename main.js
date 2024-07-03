console.log("primera prueba, script funcionando");

// Initial variables setup

let isapreResponse = false;
let ageResponse = false;
let basePrice = 0;
let ageFactor = 0;
let totalPrice = 0;

// Conditional adds the base ISAPRE plan price

while (isapreResponse == false) {
    isapreCompany = prompt("Por favor ingrese su previsión \n\n Opciones:\n - banmedica\n - consalud\n - colmena\n - cruzblanca\n - masvida\n - vidatres\n - esencial");
    switch (isapreCompany){
        case "banmedica":
        case "consalud":
            console.log(`ISAPRE ${isapreCompany}`);
            basePrice = 8000;
            isapreResponse = true;
            break;
        case "colmena":
        case "cruzblanca":
        case "masvida":
            console.log(`ISAPRE ${isapreCompany}`);
            basePrice = 11000;
            isapreResponse = true;
            break;
        case "vidatres":
        case "esencial":
            console.log(`ISAPRE ${isapreCompany}`);
            basePrice = 16000;
            isapreResponse = true;
            break;
        default:
            alert("Dato incorrecto, ingrese nuevamente");
    }
    }

// Conditional adds age multiplier (measured in years) on plans

while (ageResponse == false) {
    patientAge = Number(prompt("Ingrese su edad en años"));
    if (patientAge >= 65) {
        ageFactor = 1.65;
        console.log(`Edad en tramo 65 años o más, factor multiplicador ${ageFactor}`);
        ageResponse = true;
        }
       
    else if (patientAge >= 45){
        ageFactor = 1.5;
        console.log(`Edad en tramo 45-64 años, factor multiplicador ${ageFactor}`);
        ageResponse = true;
        }
       
    else if (patientAge >= 35){
        ageFactor = 1.35;
        console.log(`Edad en tramo 35-44 años, factor multiplicador ${ageFactor}`);
        ageResponse = true;
        }
   
    else if (patientAge >= 18){
        ageFactor = 1.25;
        console.log(`Edad en tramo 18-34 años, factor multiplicador ${ageFactor}`);
        ageResponse = true;
        }

    else if (patientAge <= 19){
        ageFactor = 1;
        console.log(`Tramo de menor de edad, factor multiplicador ${ageFactor}`);
        ageResponse = true;
        }
    else{
        alert("Dato inválido, ingrese nuevamente");
    }
    }



// Function that calculates the total service price

function calculateTotalPrice (calcBasePrice, calcAgeFactor){
     totalPrice = calcBasePrice * calcAgeFactor;
     return totalPrice;
 }

// Final alert message, displays total price

totalPrice = calculateTotalPrice(basePrice, ageFactor);
console.log(`Precio total: ${totalPrice}`);
alert(`El precio total a pagar es de CLP$${totalPrice}\nPara concretar la reserva, tiene 2 posibilidades:\n - Correo electrónico nathaniel@ibco.cl\n - Whatsapp +56912345678`);

console.log("Fin del script, todo fue ejecutado exitosamente");

