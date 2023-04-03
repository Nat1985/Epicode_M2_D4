// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
}

const prices = [34, 5, 2, 67]
const shippingCost = 50


let pricesSum = 0;
for (i = 0; i < prices.length; i++) {
  pricesSum += prices[i];
}
console.log("Costo totale dei prodotti acquistati: " + pricesSum + "€");

let totalWithDiscount;
if (marco.isAmbassador) { /* cambio marco con paul o amy per verificare i tre diversi casi */
  totalWithDiscount = pricesSum * 0.7;
  console.log("Totale con sconto Ambassador: " + totalWithDiscount + "€");
} else {
  totalWithDiscount = pricesSum;
  console.log("(l'utente non è ambassador)");
}

let totalWithShipping;
if (totalWithDiscount <= 100) {
  console.log("Costo spedizione: " + shippingCost + "€");
  totalWithShipping = totalWithDiscount + shippingCost
  console.log("Totale con la spedizione: " + totalWithShipping + "€")
} else {
  console.log("Totale superiore a 100€ la spedizione è gratuita");
}
