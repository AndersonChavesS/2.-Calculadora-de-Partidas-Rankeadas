function calcularRank(vitorias, derrotas) {
  // Calcular o saldo de vitórias
  const saldoVitorias = vitorias - derrotas;

  // Determinar o nível do jogador
  let nivel;
  switch (true) {
    case vitorias < 10:
      nivel = 'Ferro';
      break;
    case vitorias >= 11 && vitorias <= 20:
      nivel = 'Bronze';
      break;
    case vitorias >= 21 && vitorias <= 50:
      nivel = 'Prata';
      break;
    case vitorias >= 51 && vitorias <= 80:
      nivel = 'Ouro';
      break;
    case vitorias >= 81 && vitorias <= 90:
      nivel = 'Diamante';
      break;
    case vitorias >= 91 && vitorias <= 100:
      nivel = 'Lendário';
      break;
    case vitorias >= 101:
      nivel = 'Imortal';
      break;
    default:
      nivel = 'Indefinido';
  }

  // Exibir a mensagem com o saldo de vitórias e o nível
  console.log(
    `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
  );
}

// Exemplo de uso da função
calcularRank(85, 20);
