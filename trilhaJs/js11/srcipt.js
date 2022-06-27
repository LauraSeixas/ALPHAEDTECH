const productName = document.getElementById('product');
const productDescription = document.getElementById('description');
const productPrice = document.getElementById('productPrice');

const productListShow = document.getElementById('nameList');
const productListPrice = document.getElementById('priceList');
const searchByNameDescription = document.getElementById('searchNameDescription');
const inputSearchNameDescription = document.getElementById('inputSearch');

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

function listProducts(arrayProducts) {
    mensagem.hidden = true;
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



        for (let i = 0; i < arrayProducts.length; i++) {
            fillTableBody = "<tr>";
            fillTableBody += `<td> ${arrayProducts[i].id} </td>`;
            fillTableBody += `<td> <button id ="productDescription" onclick="productList(${arrayProducts[i].id})"> ${arrayProducts[i].name} </button> </td>`;
            fillTableBody += `<td> ${arrayProducts[i].price} </td>`;
            fillTableBody += `<td> <button id ="productEdit" onclick="productEdit(${arrayProducts[i].id})"> ${imgEdit.outerHTML} </button> </td>`;
            fillTableBody += `<td> <button id ="productDelete" onclick="productDelete(${arrayProducts[i].id})"> ${imgDelete.outerHTML} </button> </td>`;
            fillTableBody += "</tr>";
            productTableBody.innerHTML += fillTableBody;
        }
    };
    productTableList.hidden = false;

};

productListButton.addEventListener('click', function () {
    listProducts(arrayProducts);
});

function productList(id) {
    i = treatmentSearch(id);
    mensagem.hidden = false;
    mensagem.innerHTML = `ID: ${arrayProducts[i].id}<br>`;
    mensagem.innerHTML += `Produto: ${arrayProducts[i].name}<br>`;
    mensagem.innerHTML += `Descrição: ${arrayProducts[i].description}<br>`;
    mensagem.innerHTML += `Valor: ${arrayProducts[i].price}<br>`;
    mensagem.innerHTML += `Incluído em: ${arrayProducts[i].includedEm}`;
};

function productEdit(id) {
    i = treatmentSearch(id);

    productName.value = arrayProducts[i].name;
    productDescription.value = arrayProducts[i].description;
    productPrice.value = arrayProducts[i].price;
    productButtonInclude.innerHTML = 'Atualizar Produto';
    productButtonInclude.value = id;
}

function atualizarEdit(id) {
    i = treatmentSearch(id);

    arrayProducts[i].name = productName.value;
    arrayProducts[i].description = productDescription.value;
    arrayProducts[i].price = productPrice.value;
    arrayProducts[i].includedEm = time();
    productButtonInclude.innerHTML = 'Incluir Produto';
    productButtonInclude.value = '';
    listProducts(arrayProducts);
    productList(id);
}

function productDelete(id) {
    i = treatmentSearch(id);
    arrayProducts.splice(i, 1);
    listProducts(arrayProducts);
}

function treatmentSearch(id) {

    for (let i = 0; i < arrayProducts.length; i++) {
        if (arrayProducts[i].id == id) {
            return i;
        }
    }
}

productListShow.addEventListener('click', function () {
    let [...productArrayOrder] = arrayProducts;
    productArrayOrder.sort(function (a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    listProducts(productArrayOrder);
});

productListPrice.addEventListener('click', function () {
    let [...productArrayOrder] = arrayProducts;
    productArrayOrder.sort(function (a, b) {
        return a.price - b.price;
    });
    listProducts(productArrayOrder);
});

searchByNameDescription.addEventListener('click', function () {

    if (inputSearchNameDescription.value === '') {
        listProducts(arrayProducts);

    } else {

        let productArraySearch = arrayProducts.filter(function (element) {
            return element.name.toUpperCase().includes(inputSearchNameDescription.value.toUpperCase()) || element.description.toUpperCase().includes(inputSearchNameDescription.value.toUpperCase());
        }
        );

        if (productArraySearch.length === 0) {
            mensagem.innerHTML = 'Não foram encontrados produtos conforme chave de pesquisa!';

        } else {
            listProducts(productArraySearch);

            console.log(productArraySearch);

        }
    }
});



