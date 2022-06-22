
const productName = document.getElementById('product');
const productDescription = document.getElementById('description');
const productPrice = document.getElementById('price');

const productButtonInclude = document.getElementById('buttonInclude');
const productListButton = document.getElementById('buttonList');
const mensagem = document.querySelector('h4');

const productTableList = document.getElementById('tableList');
let productTableBody = document.getElementById('tableBody');

productTableList.hidden = true;
mensagem.hidden = true;


let arrayProducts = [];

let imgEdit, imgDelete, tr, tdId, tdName, tdPrice, tdEdit, tdDelete, countId = 0;


function time() {
    let timestamp = Date.now();
    let timestampEdit = new Date(timestamp);
    let day = timestampEdit.getDate();
    let month = timestampEdit.getMonth() + 1;
    let year = timestampEdit.getFullYear();
    let hora = timestampEdit.getHours();
    let minutos = timestampEdit.getMinutes();
    let segundos = timestampEdit.getSeconds();
    let dataIncludedEm = day + '/' + month + '/' + year + ' - ' + hora + ':' + minutos + ':' + segundos;
    return dataIncludedEm;
}

function informationProduct() {

    let objProducts = {};
    mensagem.hidden = false;
    if (productName.value === '' || productDescription.value === '' || productPrice.value === '') {
        alert('Preencha todos os campos!');
    } else if (productPrice.value < 1) {
        throw 'Falha no cadastro do produto, pois valor menor que R$ 1!';
    } else {
        objProducts.id = countId;
        objProducts.name = productName.value;
        objProducts.description = productDescription.value;
        objProducts.price = productPrice.value;
        objProducts.includedEm = time();
        console.log(objProducts);
        arrayProducts.push(objProducts);
        mensagem.innerHTML = `Produto ${objProducts.name} incluído com sucesso!`;

        countId++;
    }
}

productButtonInclude.addEventListener('click', function (event) {

    event.preventDefault();
    try {
        if (productButtonInclude.innerHTML === 'Atualizar Produto') {
            atualizarEdit(productButtonInclude.value);
        } else if (productName.value && productDescription.value && productPrice.value) {
            informationProduct();
        } else {
            throw 'Falha no cadastro do produto, pois algum campo está vazio!';
        }
        productName.value = '';
        productDescription.value = '';
        productPrice.value = '';
    } catch (error) {
        alert(error);
    }
});

function listProducts() {
    productTableBody.innerHTML = "";
    if (arrayProducts.length === 0) {
        productTableList.hidden = true;
        return mensagem.innerHTML = 'Nenhum produto cadastrado!';
    } else {
        let fillTableBody;
        imgEdit = document.createElement('img');
        imgDelete = document.createElement('img');
        imgEdit.src = "./image/edit_img.svg";
        imgDelete.src = "./image/delete_img.svg";

        let i = 0;

        while (i < arrayProducts.length) {
            fillTableBody = "<tr>";
            fillTableBody += `<td> ${arrayProducts[i].id} </td>`;
            fillTableBody += `<td> <button id ="productDescription" onclick="productList(${i})"> ${arrayProducts[i].name} </button> </td>`;
            fillTableBody += `<td> ${arrayProducts[i].price} </td>`;
            fillTableBody += `<td> <button id ="productEdit" onclick="productEdit(${i})"> ${imgEdit.outerHTML} </button> </td>`;
            fillTableBody += `<td> <button id ="productDelete" onclick="productDelete(${i})"> ${imgDelete.outerHTML} </button> </td>`;
            fillTableBody += "</tr>";
            productTableBody.innerHTML += fillTableBody;
            i++;
        };
    };
    productTableList.hidden = false;
};

productListButton.addEventListener('click', function () {
    listProducts();
});

function productList(i) {
    mensagem.innerHTML = `ID: ${arrayProducts[i].id}<br>`;
    mensagem.innerHTML += `Produto: ${arrayProducts[i].name}<br>`;
    mensagem.innerHTML += `Descrição: ${arrayProducts[i].description}<br>`;
    mensagem.innerHTML += `Valor: ${arrayProducts[i].price}<br>`;
    mensagem.innerHTML += `Incluído em: ${arrayProducts[i].includedEm}`;
};

function productEdit(i) {
    productName.value = arrayProducts[i].name;
    productDescription.value = arrayProducts[i].description;
    productPrice.value = arrayProducts[i].price;
    productButtonInclude.innerHTML = 'Atualizar Produto';
    productButtonInclude.value = i;
}

function atualizarEdit(i) {
    arrayProducts[i].name = productName.value;
    arrayProducts[i].description = productDescription.value;
    arrayProducts[i].price = productPrice.value;
    arrayProducts[i].includedEm = time();
    productButtonInclude.innerHTML = 'Incluir Produto';
    productButtonInclude.value = '';
    listProducts();
    productList(i);
}

function productDelete(i) {
    while (i < arrayProducts.length - 1) {
        arrayProducts[i].id = arrayProducts[i + 1].id;
        arrayProducts[i].name = arrayProducts[i + 1].name;
        arrayProducts[i].description = arrayProducts[i + 1].description;
        arrayProducts[i].price = arrayProducts[i + 1].price;
        arrayProducts[i].includedEm = arrayProducts[i + 1].includedEm;
        i++;
    }
    arrayProducts.length = arrayProducts.length - 1;
    listProducts();
}


