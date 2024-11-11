// Label - Converter DE
const selectCurrencyConvertFrom = document.querySelector(
  ".select-currency-convert-from"
);
// Label - Converter PARA
const selectCurrencyToConvert = document.querySelector(
  ".select-currency-to-convert"
);
// Botão de converter
const convertButton = document.querySelector("#convert-button");

function convertValues() {
  // Input (Digitar valor pora converter)
  const inputValueToConvert = document.getElementById("value-to-convert").value;

  // Paragrafo valor da moeda - Converter DE
  const paragraphValueToConvert = document.querySelector(
    "#paragraph-value-to-convert"
  );

  // Paragrafo valor da moeda - Converter PARA
  const convertedValueParagraph = document.querySelector(
    "#converted-value-paragraph"
  );

  // Paragrafo com o nome da moeda convertida
  const convertedCurrencyName = document.querySelector(
    "#name-converted-currency"
  );

  // Imagem da moeda convertida
  const imageConvertedCurrency = document.querySelector(
    "#image-converted-currency"
  );

  // Formatação do paragrafo com valor da moeda (Converter DE)
  paragraphValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValueToConvert);

  // Valor atual das moedas em BRL
  const dolarToday = 5.69;
  const euroToday = 6.14;
  const libraToday = 7.35;
  const bitcoinToday = 382503.41;
  const dirhamToday = 1.56;
  const ieneToday = 0.036;
  const dolarCanadenseToday = 4.23;
  const francoSuicoToday = 6.24;
  const pesoArgentinoToday = 0.014;
  const coroaNorueguesaToday = 0.56;
  const pesoMexicanoToday = 0.27;
  const rupiaIndianaToday = 0.062;
  const randToday = 0.34;

  if (selectCurrencyToConvert.value == "convert-to-dollar") {
    convertedValueParagraph.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValueToConvert / dolarToday);

    convertedCurrencyName.innerHTML = "Dollar";
    imageConvertedCurrency.src = "./assets/estados-unidos.png";
  }

  if (selectCurrencyToConvert.value == "convert-to-euro") {
    convertedValueParagraph.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValueToConvert / euroToday);

    convertedCurrencyName.innerHTML = "Euro";
    imageConvertedCurrency.src = "./assets/alemanha.png";
  }

  if (selectCurrencyToConvert.value == "convert-to-pound") {
    convertedValueParagraph.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputValueToConvert / libraToday);

    convertedCurrencyName.innerHTML = "Pound";
    imageConvertedCurrency.src = "./assets/argentina.png";
  }

  if (selectCurrencyToConvert.value == "convert-to-bitcoin") {
    convertedValueParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
    }).format(inputValueToConvert / bitcoinToday);

    convertedCurrencyName.innerHTML = "Bitcoin";
    imageConvertedCurrency.src = "./assets/bitcoin.png";
  }

  if (selectCurrencyToConvert.value === "convert-to-dirham") {
    convertedValueParagraph.innerHTML = new Intl.NumberFormat("ar-AE", {
      style: "currency",
      currency: "AED",
    }).format(inputValueToConvert / dirhamToday);

    convertedCurrencyName.innerHTML = "Dirham";
    imageConvertedCurrency.src = "./assets/emirados-arabes-unidos.png";
  }

  if (selectCurrencyToConvert.value === "convert-to-yen") {
    convertedValueParagraph.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputValueToConvert / ieneToday);

    convertedCurrencyName.innerHTML = "Iene";
    imageConvertedCurrency.src = "./assets/japao.png";
  }

  if (selectCurrencyToConvert.value === "convert-to-canadianDollar") {
    convertedValueParagraph.innerHTML = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(inputValueToConvert / dolarCanadenseToday);

    convertedCurrencyName.innerHTML = "Dólar Canadense";
    imageConvertedCurrency.src = "./assets/canada.png";
  }

  if (selectCurrencyToConvert.value === "convert-to-swissFranc") {
    convertedValueParagraph.innerHTML = new Intl.NumberFormat("fr-CH", {
      style: "currency",
      currency: "CHF",
    }).format(inputValueToConvert / francoSuicoToday);

    convertedCurrencyName.innerHTML = "Franco Suíço";
    imageConvertedCurrency.src = "./assets/suica.png";
  }

  if (selectCurrencyToConvert.value === "convert-to-norwegianKrone") {
    convertedValueParagraph.innerHTML = new Intl.NumberFormat("nb-NO", {
      style: "currency",
      currency: "NOK",
    }).format(inputValueToConvert / coroaNorueguesaToday);

    convertedCurrencyName.innerHTML = "Coroa Norueguesa";
    imageConvertedCurrency.src = "./assets/noruega.png";
  }

  if (selectCurrencyToConvert.value === "convert-to-mexicanPeso") {
    convertedValueParagraph.innerHTML = new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(inputValueToConvert / pesoMexicanoToday);

    convertedCurrencyName.innerHTML = "Peso Mexicano";
    imageConvertedCurrency.src = "./assets/mexico.png";
  }

  if (selectCurrencyToConvert.value === "convert-to-indianRupee") {
    convertedValueParagraph.innerHTML = new Intl.NumberFormat("hi-IN", {
      style: "currency",
      currency: "INR",
    }).format(inputValueToConvert / rupiaIndianaToday);

    convertedCurrencyName.innerHTML = "Rupia Indiana";
    imageConvertedCurrency.src = "./assets/india.png";
  }

  if (selectCurrencyToConvert.value === "convert-to-rand") {
    convertedValueParagraph.innerHTML = new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(inputValueToConvert / randToday);

    convertedCurrencyName.innerHTML = "Rand";
    imageConvertedCurrency.src = "./assets/africa-do-sul.png";
  }
}

convertButton.addEventListener("click", convertValues);
selectCurrencyToConvert.addEventListener("change", convertValues);
