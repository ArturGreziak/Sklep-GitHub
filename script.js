let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  let pizza = document.querySelector(".radioPizza:checked").value;
  let ser = document.querySelector(".serek:checked").value;
  let cenaZestawu = document.querySelector(".cenaPizzy");

  let sumaZamowienia = 0;

  

  const cenaRozmiaruPizzy = [10, 15, 20];

  const tab = cenaRozmiaruPizzy[pizza];

  sumaZamowienia += tab;

  const cenaRozmiarusera = [5, 10, 15];

  const tab2 = cenaRozmiarusera[ser];

  sumaZamowienia += tab2;

  // var skladniki = document.querySelectorAll('.skladniki input[type="checkbox"]');
  // skladniki.forEach(function (el) {
  //   if (el.checked)
  //     sumaZamowienia += Number(el.value);
  // });

  const ingredients = [
    { name: "Cebula", price: 1 },
    { name: "Szynka", price: 4 },
    { name: "Pepperoni", price: 5 },
    { name: "Chili", price: 7 },
    { name: "Ananas", price: 6 },
    { name: "Czosnek", price: 3 },
    { name: "Krewetki", price: 8 },
    { name: "Oliwki", price: 5 },
    { name: "Rukola", price: 5 },
    { name: " Kukurydza", price: 9 },
    { name: "Łosoś", price: 16.23 },
    { name: "Mozzarella", price: 3.90 },
    { name: "Papryka", price: 6.23 },
    { name: "Pomidor", price: 2.43 },
    { name: "Pieczarki", price: 7.03 },
    { name: "Cocacola", price: 6.50 },
    { name: "Cocacola", price: 6.50 },
    { name: "Keczup", price: 5.33 }
  ];

  // console.log(sumaZamowienia);
  
  
  cenaZestawu.innerHTML = sumaZamowienia.toFixed(2) + 'PLN'
});
