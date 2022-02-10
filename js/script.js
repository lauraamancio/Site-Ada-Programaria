document.getElementById("BotaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && 
  document.getElementById("email").value != "" && 
  document.getElementById("telefone").value != ""){
    alert("ARRASOU VIADA!!! Vamos te manter atualizada com as novidades tchururu")
  }else{
    alert("ô minha querida, preenche tudo certin aí fazenofavô")
  }
}