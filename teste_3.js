function experiencia(anos) {
  if (anos <= 1) {
    return "Iniciante";
  } else if (anos <= 3) {
    return "Intermediário";
  } else if (anos <= 6) {
    return "Avançado";
  } else {
    return "Jedi Master";
  }
}

var anosEstudo = 2;
console.log(experiencia(anosEstudo));
