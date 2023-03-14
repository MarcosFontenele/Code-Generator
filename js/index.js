
function generator(){
    const min = parseInt(document.querySelector(".min").value); //parseInt utilizamos para converter para números inteiros
    const max = parseInt(document.querySelector(".max").value);  
    const resultadoTotal = Math.floor(Math.random() * (max - min + 1)) + min; //função matemática
    const resultado1 = document.querySelector(".resultado")
    resultado1.innerHTML = resultadoTotal;
    //Comando para executar quando não for digitado nada
    if(resultado1.innerHTML==="NaN"){
        alert("Digite um valor minimo e máximo!");
        resultado1.innerHTML = "";
    }

}
//Comando para limpar os dados inseridos
function clea(){ 
    const min = document.querySelector(".min");
    const max = document.querySelector(".max");
    const resultado = document.querySelector(".resultado").innerHTML = "";
    const inserir = document.querySelector(".inserir-valor");
    inserir.value="";
    min.value = "";
    max.value = "";
    localStorage.clear();
    ShowValues()

}
function clearValor(){
    const inserir = document.querySelector(".inserir-valor");
    inserir.value="";
}

const localStoragekey = "Códigos"

function add(){
    //const cod = document.querySelector(".resultado");
    const cod = document.querySelector(".inserir-valor");
    const valor = JSON.parse(localStorage.getItem(localStoragekey) || "[]")//Utilizamos esse comando para converter string que recuperamos do localStorage em objeto.
    valor.push({ //Utilizamos para adicionar um item(código) array
        codigo: cod.value
    })
    
    localStorage.setItem(localStoragekey, JSON.stringify(valor))
    ShowValues()
}

function ShowValues(){
    const valor = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
    const list = document.querySelector(".list-value");
    list.innerHTML = ""
 
    for(let i = 0; i < valor.length; i++){
         list.innerHTML += `<li class="list-cod">${valor[i]["codigo"]}<button class="but" onclick="deleteItem(${valor[i]["codigo"]})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
         <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
       </svg></buttom></li>`
    }
}
function deleteItem(item){
    const valor = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
    const listdelete = valor.findIndex(x => x.codigo == item) //
    valor.splice(listdelete,1) //método para excluir os código
    localStorage.setItem(localStoragekey, JSON.stringify(valor))
    
    ShowValues()

}


ShowValues()




