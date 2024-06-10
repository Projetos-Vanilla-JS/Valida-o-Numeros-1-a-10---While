let nota;

do {
    nota = parseFloat(prompt("Por favor, insira uma nota entre 0 e 10:"));
    if (isNaN(nota)) {
        alert("O campo não pode ficar vazio")
    }
    else if(nota < 0 || nota > 10) {
        alert("Valor inválido! Insira uma nota entre 0 e 10.");
    }
} while (isNaN(nota) || nota < 0 || nota > 10);
alert(`Você inseriu uma nota válida:  ${nota}`);
  
