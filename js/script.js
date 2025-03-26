// definizione delle variabili del DOM e/o delle variabili

const inputKm = document.getElementById('km');
const inputAge = document.getElementById('age');
const button = document.getElementById('send-btn');
const finalKm = document.getElementById('printKm');
const finalAge = document.getElementById('printAge');
const finalPrice = document.getElementById('finalPrice');

button.addEventListener('click', function(){

    const valueKm = inputKm.value;
    const valueAge = inputAge.value;

    let price = valueKm*0.21;

    let finalPrice;
    
    if(valueAge < 18){
        finalPrice = price * 0.8;
    }
    else if(valueAge > 65){
        finalPrice = price * 0.6;
    }
    else{
        finalPrice = price;
    }
    
    finalPrice = finalPrice.toFixed(2);
    console.log(`Il prezzo finale del biglietto è ${finalPrice} euro`);    

    inputKm.value = '';
    inputAge.value = '';

    const kmElement = document.createElement('p');
    kmElement.append(valueKm);
    finalKm.appendChild(kmElement);

})
