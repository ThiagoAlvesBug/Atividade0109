const cardList = document.querySelectorAll(".card");
const galeryList = document.querySelector(".card-galery");

let modalWrapper = document.querySelector(".modal-wrapper");
let modal = modalWrapper.querySelector(".modal");

let modalWrapperGalery = document.querySelector(".modal-wrapper-galery");
let modalGalery = modalWrapperGalery.querySelector(".modal-galery");

let onCardClick = (event) => {

    let card = event.target.closest(".card");
    let imageSource = card.querySelector("img").src;
    let caption = card.querySelector(".caption");
    let title = caption.querySelector("h5"); 
    modal.innerHTML = card.innerHTML;
    modalWrapper.classList.add("is-active");
}

let onModalWrapperClick = (event) =>{
    if (event.target === modalWrapper){
        modalWrapper.classList.remove("is-active");
    } 
}
modalWrapper.addEventListener("click", onModalWrapperClick);

for (let index = 0; index<cardList.length; index++){
    let cardItem = cardList[index];
    cardItem.addEventListener("click", onCardClick);
}


let onGaleryCardClick = (event) => {

    let cardGalery = event.target.closest(".card-galery");
    let galerySource = cardGalery.querySelector("img").src;
    let captionGalery = cardGalery.querySelector(".caption-galery");
    let title = captionGalery.querySelector("h5"); 
    modal.innerHTML = card.innerHTML;
    modalWrapperGalery.classGaleryList.add("is-active");
}

let onModalWrapperGaleryClick = (event) =>{
    if (event.target === modalWrapperGalery){
        modalWrapperGalery.classGaleryList.remove("is-active");
    } 
}
modalWrapperGalery.addEventListener("click", onModalWrapperGaleryClick);

for (let indexGalery = 0; indexGalery<cardGalery.length; indexGalery++){
    let cardGaleryItem = cardGalery[indexGalery];
    cardGaleryItem.addEventListener("click", onModalWrapperGaleryClick);
}

/*
     <div class="card">
       <img src="Images/D2R_SkillTree.jpg" alt="Árvore de Habilidades"/>
       <div class="caption">
         <h5>Criação</h5>
         <p>Lorem Ipsum dolor sit amet</p>
       </div>
     </div>
*/

/*
    PascalCase
    camelCase
    snake_case
    kebab-case
*/

/*
    let thiago = {
        name:"Thiago",
        age: 20,
        height: 170.5
    }
     let victor = {
        name:"Victor",
        age: 26,
        height: 172.0
    }

    victor.age = thiago.age
    console.log(victor)
*/