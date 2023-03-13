function palindrome(palabra) {
    // Convertir todo el texto a minúsculas y eliminar espacios en blanco y signos de puntuación
    palabra = palabra.toLowerCase().replace(/\s/g, "").replace(/[^a-zA-Z0-9]/g, "");
  
    // Comparar el texto original con su inverso
    if (palabra === palabra.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  }

  console.log(palindrome("yo dono rosas oro no doy"));
  console.log(palindrome("no es asi"))