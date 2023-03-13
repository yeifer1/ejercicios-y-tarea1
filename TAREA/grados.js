function farenheitToCelsius(gradosFarenheit) {
    let gradosCelsius = (gradosFarenheit - 32) * 5 / 9;
    return gradosCelsius;
  }

  
  console.log(farenheitToCelsius(55));//12.777777777777779
console.log(farenheitToCelsius(79)); //26.11111111111111
console.log(farenheitToCelsius(123)); //50.55555555555556