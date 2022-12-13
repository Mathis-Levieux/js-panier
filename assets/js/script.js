
    let cart = []
    let localTotalPrice = []

fetch('items.json')
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(data => {
        data.items.forEach(element => {

            const newDiv = document.createElement('div');
            newDiv.innerHTML = `
            <img class="main-img" type="button" src="${element.imagepath}" alt="${element.itemname}" data-bs-toggle="modal"
            data-bs-target="#${element.id}">
            <p class="description">${element.itemname}</p>
            <div class="d-flex"><p class="price">${Number(element.price).toFixed(2)} </p><span> €</span></div>
            <button class="btnAdd py-3" data-id= ${element.id} data-price=${element.price} data-name="${element.itemname}" data-image=${element.imagepath} data-category=${element.category}>Ajouter au panier</button>`;
            newDiv.classList.add('item', 'col-lg-2', 'col-5', 'mx-2', 'mx-lg-2', 'fadein')
            newDiv.dataset.category = element.category


            const newDivSize = document.createElement('div');
            newDivSize.innerHTML = `
            <img class="main-img" type="button" src="${element.imagepath}" alt="${element.itemname}" data-bs-toggle="modal"
            data-bs-target="#${element.id}">
            <p class="description">${element.itemname}</p>
            <div class="d-flex"><p class="price">${Number(element.price).toFixed(2)} </p><span> €</span></div>
            <button class="btnAdda py-3" data-bs-toggle="modal" data-bs-target="#${element.id}">Ajouter au panier</button>`;
            newDivSize.classList.add('item', 'col-lg-2', 'col-5', 'mx-2', 'mx-lg-2', 'fadein')
            newDivSize.dataset.category = element.category

            if (element.category == 'maillot' || element.category == 'short') {
                document.querySelector('.produits').appendChild(newDivSize);
            } else {
                document.querySelector('.produits').appendChild(newDiv);
            }






            // MODAL
            const newModal = document.createElement('div')
            newModal.setAttribute('tabindex', '-1')
            newModal.setAttribute('aria-labelledby', element.id)
            newModal.setAttribute('aria-hidden', 'true')
            newModal.classList.add('modal', 'fade')
            newModal.id = element.id
            newModal.innerHTML = `<div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content text-light">
            <div class="modal-body">
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <img src="${element.imagepath}" class="imgzoom" alt="${element.itemname}" />
                    </div>
                    <div class="modal-text col-lg-6 col-12">
                        <h3 class="pb-2 fw-normal">${element.itemname}</h3>
                        <p>${element.description}</p>
                        <div class="d-flex"><p class="price">${Number(element.price).toFixed(2)} </p><span> €</span></div>
                        <button class="btnAdd py-3" data-id= ${element.id} data-price=${element.price} data-name="${element.itemname}" data-image=${element.imagepath} data-category=${element.category}>Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`




            const newModalSize = document.createElement('div')
            newModalSize.setAttribute('tabindex', '-1')
            newModalSize.setAttribute('aria-labelledby', element.id)
            newModalSize.setAttribute('aria-hidden', 'true')
            newModalSize.classList.add('modal', 'fade')
            newModalSize.id = element.id
            newModalSize.innerHTML = `<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content text-light">
<div class="modal-body">
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
        aria-label="Close"></button>
    <div class="row">
        <div class="col-lg-6 col-12">
            <img src="${element.imagepath}" class="imgzoom" alt="${element.itemname}" />
        </div>
        <div class="modal-text col-lg-6 col-12">
            <h3 class="pb-2 fw-normal">${element.itemname}</h3>
            <p>${element.description}</p>
            <div class="d-flex"><p class="price">${Number(element.price).toFixed(2)} </p><span> €</span></div>
            <label for="marque">Choisissez votre taille</label>
            <select name="taille" id="taille">
              <option value="S">S</option> 
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select> 
            <button class="btnAdd py-3" data-id= ${element.id} data-price=${element.price} data-name="${element.itemname}" data-image=${element.imagepath} data-category=${element.category}>Ajouter au panier</button>
        </div>
    </div>
</div>
</div>
</div>`

            if (element.category == 'maillot' || element.category == 'short') {
                document.querySelector('.produits').appendChild(newModalSize);
            } else {
                document.querySelector('.produits').appendChild(newModal);
            }
        });
    });

function displayTshirt() {
    let test = document.querySelectorAll('[data-category]')
    test.forEach(element => {
        if (element.dataset.category == 'maillot') {
            element.style.display = 'flex';
            document.querySelector('#nouveaute').innerText = 'Maillots'
        } else {
            element.style.display = 'none'
        }
    })
}

function displayShort() {
    let test = document.querySelectorAll('[data-category]')
    test.forEach(element => {
        if (element.dataset.category == 'short') {
            element.style.display = 'flex';
            document.querySelector('#nouveaute').innerText = 'Shorts'
        } else {
            element.style.display = 'none'
        }
    })
}

function displaySocks() {
    let test = document.querySelectorAll('[data-category]')
    test.forEach(element => {
        if (element.dataset.category == 'chaussettes') {
            element.style.display = 'flex';
            document.querySelector('#nouveaute').innerText = 'Chaussettes'
        } else {
            element.style.display = 'none'
        }
    })
}
function displayCasquette() {
    let test = document.querySelectorAll('[data-category]')
    test.forEach(element => {
        if (element.dataset.category == 'casquette') {
            element.style.display = 'flex';
            document.querySelector('#nouveaute').innerText = 'Casquettes'
        } else {
            element.style.display = 'none'
        }
    })
}
function displayEcharpe() {
    let test = document.querySelectorAll('[data-category]')
    test.forEach(element => {
        if (element.dataset.category == 'echarpe') {
            element.style.display = 'flex';
            document.querySelector('#nouveaute').innerText = 'Echarpes'
        } else {
            element.style.display = 'none'
        }
    })
}
function displayBonnet() {
    let test = document.querySelectorAll('[data-category]')
    test.forEach(element => {
        if (element.dataset.category == 'bonnet') {
            element.style.display = 'flex';
            document.querySelector('#nouveaute').innerText = 'Bonnets'
        } else {
            element.style.display = 'none'
        }
    })
}
function displayBall() {
    let test = document.querySelectorAll('[data-category]')
    test.forEach(element => {
        if (element.dataset.category == 'ballon') {
            element.style.display = 'flex';
            document.querySelector('#nouveaute').innerText = 'Ballons'
        } else {
            element.style.display = 'none'
        }
    })
}
function displayGoodies() {
    let test = document.querySelectorAll('[data-category]')
    test.forEach(element => {
        if (element.dataset.category == 'goodies') {
            element.style.display = 'flex';
            document.querySelector('#nouveaute').innerText = 'Goodies'
        } else {
            element.style.display = 'none'
        }
    })
}


// CREATION DE MODAL

document.querySelector('#panier').addEventListener('click', () => {
    document.querySelector('main').style.display = 'none'
    document.querySelector('.article').style.display = 'block'

})





let quantity = 0;
let total = 0;
window.addEventListener('click', e => {

    if (e.target.classList.contains('btnAdd')) {

     

    document.querySelectorAll('.nom-article').forEach(element =>{
        if (e.target.dataset.id == element.dataset.id){
          
          element.nextElementSibling.nextElementSibling.firstElementChild.innerHTML++
          total+= Number(e.target.dataset.price)
         
     
        }
    })


        const newItem = document.createElement('div');
        newItem.classList.add('panier-container', 'row', 'mx-0')
        if (e.target.dataset.category === 'maillot' || e.target.dataset.category === 'short') {
            newItem.innerHTML =
                `
            <div class="col-lg-2 col-3 py-3 img-article"><img
               src="${e.target.dataset.image}" alt="">
       </div>
       <div class="col-lg-3 col-9 nom-article" data-id="${e.target.dataset.id}">${e.target.dataset.name}</div>
     <span class="size col-lg-2 col-3">Taille:
     <select name="taille" id="taille">
     <option value="#">${e.target.previousSibling.previousSibling.value}</option> 
     <option value="S">S</option> 
     <option value="M">M</option>
     <option value="L">L</option>
     <option value="XL">XL</option>
   </select>
     </span>
       <div class="col-lg-2 col-3 quantite-article">
           <p>1</p><i id="plusItem" class="bi bi-plus-circle" data-price="${Number(e.target.dataset.price).toFixed(2)}"></i><i id="minusItem" class="bi bi-dash-circle" data-price="${Number(e.target.dataset.price).toFixed(2)}"></i>
       </div>
       <div class="col-lg-1 col-3 prix-article">${Number(e.target.dataset.price).toFixed(2)} </div>
       <img class="col-lg-2 col-3 delete"  src="assets/img/delete.png" alt="">

   `
            document.querySelector('.article').appendChild(newItem)
            total += Number(e.target.dataset.price);
            document.querySelector('.totalPrice').innerHTML = (Number(total).toFixed(2));
            quantity++;
            document.querySelector('#nbPanier').innerHTML = quantity

    


   
       let  items = {
            itemId: e.target.dataset.id,
            img: e.target.dataset.image,
            name: e.target.dataset.name,
            size: e.target.previousSibling.previousSibling.value,
            price: Number(e.target.dataset.price).toFixed(2),
            quantity:quantity,
    
        }

        cart.push(items)
  localTotalPrice.push(Number(items.price))
  localStorage.setItem("prixtotal", JSON.stringify(localTotalPrice.reduce((a, b) => a + b, 0)))
    localStorage.setItem("panier", JSON.stringify(cart));


   

        } else {
            newItem.innerHTML =
                `
                <div class="col-lg-2 col-3 py-3 img-article"><img
                   src="${e.target.dataset.image}" alt="">
           </div>
           <div class="col-lg-3 col-9 nom-article" data-id="${e.target.dataset.id}">${e.target.dataset.name}</div>
           <span class="size col-lg-2 col-3"></span>
           <div class="col-lg-2 col-3 quantite-article">
               <p class="quantite">1</p><i id="plusItem" class="bi bi-plus-circle"  data-price="${Number(e.target.dataset.price).toFixed(2)}"></i><i id="minusItem" class="bi bi-dash-circle" data-price="${Number(e.target.dataset.price).toFixed(2)}"></i>
           </div>
           <div class="col-lg-1 col-3 prix-article">${Number(e.target.dataset.price).toFixed(2)}</div>
           <img class="col-lg-2 col-3 delete"  src="assets/img/delete.png" alt="">
    `
            document.querySelector('.article').appendChild(newItem)
            total += Number(e.target.dataset.price);
            document.querySelector('.totalPrice').innerHTML = (Number(total).toFixed(2));
            quantity++;
            document.querySelector('#nbPanier').innerHTML = quantity

               
       let  items = {
        itemId: e.target.dataset.id,
        img: e.target.dataset.image,
        name: e.target.dataset.name,
        size: e.target.previousSibling.previousSibling.value,
        price: Number(e.target.dataset.price).toFixed(2),
        quantity: 1,

    }

    cart.push(items)

    localTotalPrice.push(Number(items.price))
    localStorage.setItem("prixtotal", JSON.stringify(localTotalPrice.reduce((a, b) => a + b, 0)))
    localStorage.setItem("panier", JSON.stringify(cart));


        }
     
    }



})

// bouton delete

document.querySelector('.article').addEventListener("click", event => {
    if (event.target.classList.contains("delete")) {
        quantity -= Number(event.target.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.nextSibling.innerHTML)
        document.querySelector('#nbPanier').innerHTML = quantity
        total -= (Number(event.target.previousSibling.previousSibling.innerHTML))
        document.querySelector('.totalPrice').innerHTML = (Number(total).toFixed(2));
        event.target.parentElement.remove()

        
        
      
        localStorage.removeItem("panier", JSON.stringify());
    }
})

document.querySelector('#logo').addEventListener('click', () => {
    location.reload();
})

document.querySelector('.article').addEventListener("click", event => {

    if (event.target.id == 'plusItem') {
        event.target.previousSibling.innerHTML++
        quantity++
        document.querySelector('#nbPanier').innerHTML = quantity
        let itemPrice = event.target.dataset.price 
        let totalItemPrice = itemPrice * event.target.previousSibling.innerHTML;
        event.target.parentElement.nextSibling.nextSibling.innerHTML = totalItemPrice.toFixed(2)
        total +=Number(event.target.dataset.price)
         document.querySelector('.totalPrice').innerHTML = total.toFixed(2)
        
    }
    if (event.target.id == 'minusItem') {
        if (event.target.previousSibling.previousSibling.innerHTML == 1) {
            event.target.parentElement.parentElement.remove()
            
        }
        event.target.previousSibling.previousSibling.innerHTML--
        quantity--
        document.querySelector('#nbPanier').innerHTML = quantity;
        let itemPrice = event.target.dataset.price  // REGLER LE BUG DES VALEURS DES OBJETS
        let totalItemPrice = itemPrice * event.target.previousSibling.previousSibling.innerHTML;
        event.target.parentElement.nextSibling.nextSibling.innerHTML = totalItemPrice.toFixed(2)
        total -=Number(event.target.dataset.price)
        document.querySelector('.totalPrice').innerHTML = total.toFixed(2)

       
    }
})




let local = JSON.parse(localStorage.getItem('panier'));
local.forEach(element => {
    if (element.size){
    const newItem = document.createElement('div');
    newItem.classList.add('panier-container', 'row', 'mx-0')
 
        newItem.innerHTML =
            `
        <div class="col-lg-2 col-3 py-3 img-article"><img
           src="${element.img}" alt="">
   </div>
   <div class="col-lg-3 col-9 nom-article" data-id="${element.itemId}">${element.name}</div>
 <span class="size col-lg-2 col-3">Taille:
 <select name="taille" id="taille">
 <option value="#">${element.size}</option> 
 <option value="S">S</option> 
 <option value="M">M</option>
 <option value="L">L</option>
 <option value="XL">XL</option>
</select>
 </span>
   <div class="col-lg-2 col-3 quantite-article">
       <p>${Number(element.quantity)}</p><i id="plusItem" class="bi bi-plus-circle" data-price=""></i><i id="minusItem" class="bi bi-dash-circle" data-price=""></i>
   </div>
   <div class="col-lg-1 col-3 prix-article">${Number(element.price).toFixed(2)} </div>
   <img class="col-lg-2 col-3 delete"  src="assets/img/delete.png" alt="">

`
cart.push(element)
document.querySelector('.article').appendChild(newItem)
    }else{
        const newItem = document.createElement('div');
        newItem.classList.add('panier-container', 'row', 'mx-0')
        newItem.innerHTML =
        `
        <div class="col-lg-2 col-3 py-3 img-article"><img
           src="${element.img}" alt="">
   </div>
   <div class="col-lg-3 col-9 nom-article" data-id="${element.itemId}">${element.name}</div>
   <span class="size col-lg-2 col-3"></span>
   <div class="col-lg-2 col-3 quantite-article">
       <p class="quantite">${Number(element.quantity)}</p><i id="plusItem" class="bi bi-plus-circle"  data-price="${Number(element.price).toFixed(2)}"></i><i id="minusItem" class="bi bi-dash-circle" data-price="${Number(element.price).toFixed(2)}"></i>
   </div>
   <div class="col-lg-1 col-3 prix-article">${Number(element.price).toFixed(2)}</div>
   <img class="col-lg-2 col-3 delete"  src="assets/img/delete.png" alt="">
`
    document.querySelector('.article').appendChild(newItem)
    cart.push(element)
    }
  
})

let localPrice = JSON.parse(localStorage.getItem('prixtotal'));

document.querySelector('.totalPrice').innerHTML = localPrice.toFixed(2)

