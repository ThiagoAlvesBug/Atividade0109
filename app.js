const cardList = document.querySelectorAll(".card");

let modalWrapper = document.querySelector(".modal-wrapper");
let modal = modalWrapper.querySelector(".modal");

let onCardClick = (event) => {

    let card = event.target.closest(".card");
    let imageSource = card.querySelector("img").src;
    //console.log(imageSource);
    // let title = card.querySelector(".caption>h5");
    let caption = card.querySelector(".caption");
    let title = caption.querySelector("h5"); 
    //console.log(title);
    modal.innerHTML = card.innerHTML;
    // console.log(teste);
    modalWrapper.classList.add("is-active")
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
    // console.log(imageItem);
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