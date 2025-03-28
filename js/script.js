// definizione delle variabili del DOM e/o delle variabili

const inputKm = document.getElementById('km');
const inputAge = document.getElementById('age');
const button = document.getElementById('send-btn');
const userName = document.getElementById('myName');
const finalKm = document.getElementById('printKm');
const finalAge = document.getElementById('printAge');
const totalPrice = document.getElementById('finalPrice');
const finalName = document.getElementById('printName');

button.addEventListener('click', function(event){

    event.preventDefault();

    const valueKm = inputKm.value;
    const valueAge = inputAge.value;
    const valueName = userName.value.trim();

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
    userName.value = '';

    const kmElement = document.createElement('p');
    kmElement.append(valueKm);
    finalKm.appendChild(kmElement);

    const ageElement = document.createElement('p');
    ageElement.append(valueAge);
    finalAge.appendChild(ageElement);

    const priceElement = document.createElement('p');
    priceElement.append(finalPrice);
    totalPrice.appendChild(priceElement);

    const nameElement = document.createElement('p');
    nameElement.append(valueName);
    finalName.appendChild(nameElement);

})
