function longestCountry(paises) {
    let paisMasLargo = '';
    for (let i = 0; i < paises.length; i++) {
      if (paises[i].length > paisMasLargo.length) {
        paisMasLargo = paises[i];
      }
    }
    return paisMasLargo;
  }




const paises = ["Peru", "Mexico", "Ecuador", "Republica Dominicana", "Colombia"];
console.log(longestCountry(paises));//Republica Dominicana