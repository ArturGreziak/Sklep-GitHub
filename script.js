let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  let pizza = document.querySelector(".radioPizza:checked").value;
  let ser = document.querySelector(".serek:checked").value;
  let cenaZestawu = document.querySelector(".cenaPizzy");

  let sumaZamowienia = 0;

  // if (pizza === "pizzaMala")
  // {
  //   sumaZamowienia += 10.21;
  // } else if (pizza === "pizzaSrednia")
  // {
  //   sumaZamowienia += 15.53;
  // } else if (pizza === "pizzaDuza")
  // {
  //   sumaZamowienia += 20.91;
  // }
  const cenaRozmiaruPizzy = [10, 15, 20];

  const cenaRozmiarusera = [5, 10, 15];

  // if (ser === "serMaly")
  // {
  //   sumaZamowienia += 5.27;
  // } else if (ser === "serSredni")
  // {
  //   sumaZamowienia += 10.53;
  // } else if (ser === "serDuzy")
  // {
  //   sumaZamowienia += 15.91;
  // }

  var skladniki = document.querySelectorAll('.skladniki input[type="checkbox"]');
  skladniki.forEach(function (el) {
    if (el.checked)
      sumaZamowienia += Number(el.value);
  });

  console.log(sumaZamowienia);
  
  
  cenaZestawu.innerHTML = sumaZamowienia.toFixed(2) + 'PLN'
});
