const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo1');
const btn = document.querySelector('#btnCalcular');
const pResult= document.querySelector('#resultado');
const form=document.querySelector('#formulario');

form.addEventListener('submit',btnOnClick);

function btnOnClick(event){
    event.preventDefault();
  let suma=Number(input1.value) +Number(input2.value) ;
    pResult.innerText ="La suma es: "+ suma;
}