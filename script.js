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

  var skladniki = document.querySelectorAll('.skladniki input[type="checkbox"]');
  skladniki.forEach(function (el) {
    if (el.checked)
      sumaZamowienia += Number(el.value);
  });

  console.log(sumaZamowienia);
  
  
  cenaZestawu.innerHTML = sumaZamowienia.toFixed(2) + 'PLN'
});
