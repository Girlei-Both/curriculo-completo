/*-----------------------------------------------*/
/*Código para funcionamento dos MENUS PRINCIPAIS*/

/*Procura no documento as classes MENU*/
const menus = document.querySelectorAll(".menu");

/*Ação que será realizada a cada clique do mouse*/
menus.forEach(menu => {
    menu.addEventListener("click", function(){

        /*Caso a opção já esteja selecionada não há um novo carregamento*/
        if(menu.classList.contains("selecionado")){
            return;
        }

        /*Funções executadas*/
        selecionarMenu(menu)
        mostrarConteudoDoMenu(menu)

    });
});

/*Função para localizar o MENU SELECIONADO - Principal*/
function selecionarMenu(menu){
    const menuSelecionado = document.querySelector(".menu.selecionado");
    menuSelecionado.classList.remove("selecionado");
    menu.classList.add("selecionado");
}

/*Função para localizar e mostrar a ABA SELECIONADA - Principal*/
function mostrarConteudoDoMenu(menu){
    const conteudoSelecionado = document.querySelector(".informacao.selecionado");
    conteudoSelecionado.classList.remove("selecionado");
    const idDoConteudoAba = `informacao-${menu.id}`;
    const conteudoMostrado = document.getElementById(idDoConteudoAba);
    conteudoMostrado.classList.add("selecionado");
}


/*-----------------------------------------------*/
/*Código para funcionamento dos MENUS SECUNDÁRIOS*/

/*Procura no documento as classes MENU-SUB*/
const menusSub = document.querySelectorAll(".menu-sub");

/*Ação que será realizada a cada clique do mouse*/
menusSub.forEach(menuSub => {
    menuSub.addEventListener("click", function(){

        /*Caso a opção já esteja selecionada não há um novo carregamento*/
        if(menuSub.classList.contains("selecionado")){
            return;
        }

        /*Funções executadas*/
        selecionarMenuSub(menuSub)
        mostrarConteudoDoMenuSub(menuSub)

    });
});

/*Função para localizar o MENU-SUB SELECIONADO - Principal*/
function selecionarMenuSub(menuSub){
    const menuSubSelecionado = document.querySelector(".menu-sub.selecionado");
    menuSubSelecionado.classList.remove("selecionado");
    menuSub.classList.add("selecionado");
}

/*Função para localizar e mostrar a ABA-SUB SELECIONADA - Principal*/
function mostrarConteudoDoMenuSub(menuSub){
    const conteudoSubSelecionado = document.querySelector(".informacao-sub.selecionado");
    conteudoSubSelecionado.classList.remove("selecionado");
    const idDoConteudoSubAba = `informacao-${menuSub.id}`;
    const conteudoSubMostrado = document.getElementById(idDoConteudoSubAba);
    conteudoSubMostrado.classList.add("selecionado");
}