// Utilize a estrutura ‘switch’ e crie uma página web que contenha um formulário que 
// possibilite:
// a. O usuário selecionar um menu de opções (‘HTML select’) de produtos previamente 
// cadastrados (mínimo 5 produtos);
// b. Clicar em um botão ‘exibir’ que exibe a imagem do produto selecionado.

const form = document.getElementById("myForm");
const goods = document.getElementById("goods");
const img = document.createElement("img");


function pickYourGoods(product) {

    switch (product) {
        case "margarida":
            url =  "../image/melissaRosa.webp";
            break;
        case "coracao":
            url =  "../image/melissaLaranja.webp";
            break;
        case "lilas":
            url =  "../image/botaLilas.webp";
            break;
        case "rosa":
            url =  "../image/botaRosa.webp";
            break;
        case "preta":
            url =  "../image/botaPreta.webp";
    }
}


form.addEventListener("submit", function (event) {
    let goodsValue = goods.value;
    pickYourGoods(goodsValue);
    goods.value = "";
    img.src = url;
    document.getElementById('result').appendChild(img);
    event.preventDefault();
    return console.log(url);
});
