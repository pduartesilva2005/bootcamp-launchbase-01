## Operador de Comparação

- `>` Maior
- `<` Menor
- `>=` Menor igual
- `<=` Menor igual a
- `==` Igual a
- `===` Igual e do mesmo tipo
- `!=` Diferente de
- `!==` Diferente, inclusive do tipo

---

### Desafio

```js
const idade = 17;
// Verificar se a pessoa é maior igual a 18 anos
// se sim, deixa entrar, se não, bloqueia a entrada

if (idade >= 18) {
  console.log('Deixar entrar');
} else {
  console.log('Bloquear estrada');
}

// Se a pessoa tiver 17 anos
// Avisar para voltar quando fizer 18 anos

if (idade === 17) {
  console.log('Volte quando tiver 18');
}
```

---

## Operadores Lógicos

- `&&` "E" -> as duas condições devem ser verdadeiras para que a condição final seja verdadeira
- `||` "OU" -> uma das condições deve ser verdadeira para qua condição final seja verdadeira
- `!` "NÃO" -> Nega a condição

### Desafio

```js
const idade = 18;
// Verificar se a pessoa é maior igual a 18 anos
// Se sim, deixar entrar, se não, bloquear a estrada
// Se a pessoa tiver 17 anos
// Avisar para voltar quando fizer 18 anos

if (!(idade >= 18) || idade === 17) {
  console.log('Bloquear a entrada');
} else {
  console.log('Deixar entrar');
}
```

---

### Operadores Aritméticos

- `*` Multiplicação
- `/` Divisão
- `%` Resto de divisão
- `+` Adição
- `-` Subtração

---

```js
console.log(2 * 2); // 4
console.log(2 / 2); // 1
console.log(2 % 1.5); // 0.5
console.log(2 + 2); // 4
console.log(2 - 2); // 0;
```
