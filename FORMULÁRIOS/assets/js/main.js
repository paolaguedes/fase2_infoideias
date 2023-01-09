import bairros from "./bairros.js"
import minDate from "./dateCurrent.js"
import "./modalSucess.js"

function gerarListaBairros (bairros) {
  const listaBairros = document.getElementById('listaBairros')
  let option = ""

  if(bairros && bairros.length) {
    bairros.forEach((obj) => {
      option += `<option value=${obj.value}>${obj.name}</option>`
    })
  }

  listaBairros.innerHTML = option
}

gerarListaBairros(bairros)

let inputDate = document.getElementById("dt_nascimento")
inputDate.setAttribute("max", minDate)