let formElement = document.querySelector(".js-form");

const ingredients = [
  { value: "Cebula", price: 1, class_img: "towarC", src: "assets/cebula.png", alt: "Cebula", class_input: "jedzenie" },
  { value: "Szynka", price: 4, class_img: "towarSZ", src: "assets/szynka.png", alt: "szynka", class_input: "jedzenie" },
  { value: "Pepperoni", price: 5, class_img: "towarPE", src="assets/pepperoni.png", alt: "pepperoni", class_input: "jedzenie" },
  { value: "Chili", price: 7, class_img: "chili", src: "assets/chili.png", alt: "chili", class_input: "jedzenie" },
  { value: "Ananas", price: 6, class_img: "ananas", src: "assets/ananas.png", alt: "ananas", class_input: "jedzenie" },
  { value: "Czosnek", price: 3, class_img: "czosnek", src: "assets/czosnek.png", alt: "czosnek", class_input: "jedzenie" },
  { value: "Krewetki", price: 8, class_img: "krewetki", src: "assets/krewetki.png", alt: "krewetki", class_input: "jedzenie" },
  { value: "Oliwki", price: 5, class_img: "oliwki", src: "assets/oliwki.png", alt: "oliwki", class_input: "jedzenie" },
  { value: "Rukola", price: 5, class_img: "rukola", src: "assets/rukola.png", alt: "rukola", class_input: "jedzenie" },
  { value: " Kukurydza", price: 9, class_img: "kukurydza", src: "assets/kukurydza.png", alt: "kukurydza", class_input: "jedzenie" },
  { value: "Łosoś", price: 16.23, class_img: "łosoś", src: "assets/losos.png", alt: "łosoś", class_input: "jedzenie" },
  { value: "Mozzarella", price: 3.90, class_img: "mozzarella", src: "assets/mozzarella.png", alt: "mozzarella" },
  { value: "Papryka", price: 6.23, class_img: "papryka", src: "assets/papryka.png", alt: "papryka", class_input: "jedzenie" },
  { value: "Pomidor", price: 2.43, class_img: "pomidor", src: "assets/pomidor.png", alt: "pomidor", class_input: "jedzenie" },
  { value: "Pieczarki", price: 7.03, class_img: "pieczarki", src: "assets/pieczarki.png", alt: "pieczarki", class_input: "jedzenie" },
  { value: "Cocacola", price: 6.50, class_img: "white", src: "assets/white.png", alt: "white", class_input: "jedzenie" },
  { value: "Cocacola", price: 6.50, class_img: "black", src: "assets/black.png", alt: "bleck", class_input: "jedzenie" },
  { value: "Keczup", price: 5.33, class_img: "keczup", src: "assets/keczup.png", alt: "keczup", class_input: "jedzenie" }
];



for (let i = 0; i < ingredients.length; i++)
{


}

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



  console.log(sumaZamowienia);


  cenaZestawu.innerHTML = sumaZamowienia.toFixed(2) + 'PLN'
});
