
const button = document.querySelector("#send");


function media(){
  let name = document.querySelector('#name').value;
  let n1 = parseFloat(document.querySelector("#n1").value);
  let n2 = parseFloat(document.querySelector("#n2").value);
  let n3 = parseFloat(document.querySelector("#n3").value);
  let n4 = parseFloat(document.querySelector("#n4").value);
  let total = (n1 + n2 + n3 + n4) / 4;
  let res = document.querySelector('#res');
  let clssification = '';
  if(total >= 5) {
    clssification = 'foi aprovado(a). Parabéns!'
  } else{
    clssification = 'foi reprovado(a)!'
  }
  res.textContent = `O aluno(a) ${name}, tem a média ${total.toFixed(1)} e ${clssification}`;
}



button.addEventListener('click', media);




