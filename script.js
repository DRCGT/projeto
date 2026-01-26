function toggleMode() {
  const html =
    document.documentElement /*a mudança para branco esta no html e o que representa o html é o DocumentElement*/

  html.classList.toggle("light") //esse toggle faz exatamente o que o if faz de troca de cor

  /* if (html.classList.contains("light")) {
    html.classList.remove("ligth")
  } else {
    html.classList.add("light")
  } if é uma condicional que vai responder um tipo de dado buleano ou vai ser true(verdadeiro) ou false(falso) caso for verdadeiro vai remover o light e ficar escuro se não ele vai ficar da cor clara*/

  /*pegar a tag  img e substituir a imagem, pporém se tiver light mode , adicionar a imagem avatar light
  se tiver sem light mode vai manter a imagem normal */

  const img = document.querySelector("#profile img")
  //query selector é um comando que faz pesquisar pelo seletor pois é o mesmo seletor que usamos para colocar o tamanho da imagem profile img

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    //setAttribute diz que vai modificar um atributo nesse caso é o src e na frente eu uso virgula depois eu coloco o caminho onde esta  a imagem onde eu quero trocar
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
