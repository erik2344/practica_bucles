let i = 1;

while (true) {
  let factorial = 1;

  for (let j = 1; j <= i; j++) {
    factorial *= j;
  }

  console.log(`El factorial de ${i} es: ${factorial}`);

  i++;

  if (i > 10) {
    break;
  }
}