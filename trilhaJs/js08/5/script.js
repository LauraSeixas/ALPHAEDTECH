// 5. Crie um objeto sem atributos ‘{}’ e adicione um atributo “Um atributo com espaços” com 
// valor numérico 1, e exiba no console, de duas formas:
// a. Utilizando colchetes;
// b. Sem utilizar colchetes.

objetoSemAtributos = {};
objetoSemAtributos["Um atributo com espaços"] = 1;
console.log(objetoSemAtributos);

const objetoSemAtributos2 = { "Um atributo com espaços": 2, };

for (const [key, value] of
    Object.entries(objetoSemAtributos2)) {
    if (key == "Um atributo com espaços") {
        console.log(value);
    }
};