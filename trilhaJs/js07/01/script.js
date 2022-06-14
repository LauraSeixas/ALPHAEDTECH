// Crie uma página web que possua um elemento HTML select que possa selecionar uma lista 
// de carros esportivos, considerando:
// a. Identificar a mudança de carro selecionado e alterar a imagem associada;
// b. Exibir as informações referentes a este carro (dados do carro como nome, fabricante, 
// velocidade máxima, 0-100km e outras informações que julgar pertinente);
// c. A página web deve ser bem construída visualmente.

const form = document.getElementById("myForm");
const select = document.querySelector("select");
const img = document.querySelector("img");
const result = document.getElementById("result");

let pname = document.getElementById("name");
let pfabricante = document.getElementById("fabricant");
let pvelocidade = document.getElementById("velocidade");
let paceleracao = document.getElementById("aceleracao");


document.querySelector("select").addEventListener("change", myFunction);


function myFunction() {
    let url = "";
    let name ="";
    let fabricante = "";
    let velocidade = "";
    let aceleracao = "";
    select.value;

    if (select.value === "ramone") {
        url = "../image/ramone.webp";
        name = "1959 Chevrolet Impala";
        fabricante = "Chevrolet";
        velocidade = "229 km/h";
        aceleracao = "0-100 km/h em 7 segundos";
        console.log("ramone");
    } else if (select.value === "sargento") {
        url = "../image/sargento.jpg";
        name = "Jeep Willys MB ";
        fabricante = "Willys";
        velocidade = "105 km/h";
        aceleracao = "0-100 km/h em - segundos";
        console.log("sargento");
    } else if (select.value === "mater") {   
        url = "../image/mater.jpg";
        name = "Task Force Tow truck";
        fabricante = "Chevrolet";
        velocidade = "100 km/h";
        aceleracao = "0-100 km/h em - segundos";
        console.log("mater");    
    }

    img.src = url;
    document.getElementById("pname").innerHTML = name;
    document.getElementById("pfabricante").innerHTML = fabricante;
    document.getElementById("pvelocidade").innerHTML = velocidade;
    document.getElementById("paceleracao").innerHTML = aceleracao;
}


