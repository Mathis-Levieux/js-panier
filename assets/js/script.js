// const items = []


fetch('items.json')
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(data => {   // ----------------------------- AFFICHAGE OBJETS ------------------------------------
        data.items.forEach(element => {

            const newDiv = document.createElement('div');
            newDiv.innerHTML = `
            <img class="main-img" type="button" src="${element.imagepath}" alt="${element.itemname}" data-bs-toggle="modal"
            data-bs-target="#${element.id}">
            <p class="description">${element.itemname}</p>
            <div class="d-flex"><p class="price">${Number(element.price).toFixed(2)} </p><span> €</span></div>
            <button class="btnAdd py-3" data-id= ${element.id} data-quantity=1 data-price=${element.price} data-name="${element.itemname}" data-image=${element.imagepath} data-category=${element.category}>Ajouter au panier</button>`;
            newDiv.classList.add('item', 'col-lg-2', 'col-5', 'mx-2', 'mx-lg-2', 'fadein')
            newDiv.dataset.category = element.category


            const newDivSize = document.createElement('div');
            newDivSize.innerHTML = `
            <img class="main-img" type="button" src="${element.imagepath}" alt="${element.itemname}" data-bs-toggle="modal"
            data-bs-target="#${element.id}">
            <p class="description">${element.itemname}</p>
            <div class="d-flex"><p class="price">${Number(element.price).toFixed(2)} </p><span> €</span></div>
            <button class="btnAdda py-3" data-bs-toggle="modal" data-bs-target="#${element.id}" data-quantity=1>Ajouter au panier</button>`;
            newDivSize.classList.add('item', 'col-lg-2', 'col-5', 'mx-2', 'mx-lg-2', 'fadein')
            newDivSize.dataset.category = element.category

            if (element.category == 'maillot' || element.category == 'short') {
                document.querySelector('.produits').appendChild(newDivSize);
            } else {
                document.querySelector('.produits').appendChild(newDiv);
            }


            // -------------------------------------------------- CREATION DES MODAL ---------------------------------------------------
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
            <button class="btnAdd py-3" data-id= ${element.id} data-quantity="1" data-price=${element.price} data-name="${element.itemname}" data-image=${element.imagepath} data-category=${element.category}>Ajouter au panier</button>
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


// ------------------------------------------- Création du local storage --------------------------------------------
var cart = JSON.parse(localStorage.getItem('cart')) || {
    'Details': {
        'nbItems': 0,
        'orderTotal': 0
    },
    'Products': {}
}
addToLocalStorage()


// ------------------------------ FONCTIONS DE TRI DES OBJETS ----------------------------------------

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


// --------------------------------------------  AFFICHAGE DU PANIER -----------------------------------------------------

document.querySelector('#panier').addEventListener('click', () => {
    document.querySelector('main').style.display = 'none'
    document.querySelector('.article').style.display = 'block'

})

// ------------------------------------------Bouton page d'accueil ---------------------------------------

document.querySelector('#logo').addEventListener('click', () => {
    document.querySelector('main').style.display = 'block'
    document.querySelector('.article').style.display = 'none'
})





function updateCartDetails() {
    let qt = 0;
    let total = 0;

    for (const [key, element] of Object.entries(cart['Products'])) {

        // mettre à jour la quantité globale
        qt = Number(qt) + Number(element.quantity)

        //mettre à jour le prix global
        total = total + (element.price * element.quantity)
    }

    cart['Details']['nbItems'] = qt;
    cart['Details']['orderTotal'] = total;

}


function addToCart(item) {
    let key = item.id;

    // si T-shirt
    // key = key + item.size


    // si le produit est déjà dans le panier, on incrémente sa quantité
    if (cart['Products'].hasOwnProperty(item.id)) {
        cart['Products'][key].quantity = Number(cart['Products'][key].quantity) + 1;
    } else {
        // sinon on l'ajoute au panier
        cart['Products'][key] = item;
        cart['Products'][key].quantity = 1;
        // items.push(item)
    }

    updateCartDetails();
    addToLocalStorage()
}


function addToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    document.querySelector('#nbPanier').innerText = JSON.parse(localStorage.getItem('cart')).Details.nbItems;
}

// Bouton ajouter au panier

window.addEventListener('click', e => {

    if (e.target.classList.contains('btnAdd')) {
        // si T-shirt
        // e.target.dataset.size = valeur du champ taille

        addToCart(e.target.dataset);
    }


})


document.querySelector('#panier').addEventListener('click', () => {
    deleteCart()
    displayCart()
})
// ------------------ FONCTION POUR SUPPRIMER LES DIVS DU PANIER AVANT DE LES REAFFICHER POUR EVITER LES DOUBLONS ---------------------
function deleteCart() {
    document.querySelectorAll('.panier-container').forEach(element => element.remove())
}

// -------------------------------- Fonction pour afficher les articles du panier -----------------------
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'))

    document.querySelector('.totalPrice').innerHTML = `Total: ${JSON.parse(localStorage.getItem('cart')).Details.orderTotal.toFixed(2)}`

    for (const [key, element] of Object.entries(cart['Products'])) {



        const newItem = document.createElement('div');
        newItem.classList.add('panier-container', 'row', 'mx-0')
        if (element.category === 'maillot' || element.category === 'short') {
            newItem.innerHTML =
                `
            <div class="col-lg-2 col-3 py-3 img-article"><img
               src="${element.image}" alt="">
       </div>
       <div class="col-lg-3 col-9 nom-article" data-id="${element.id}">${element.name}</div>
     <span class="size col-lg-2 col-3">Taille:
     <select name="taille" id="taille">
     <option value="#"></option> s
     <option value="S">S</option> 
     <option value="M">M</option>
     <option value="L">L</option>
     <option value="XL">XL</option>
   </select>
     </span>
       <div class="col-lg-2 col-3 quantite-article">
           <p>${element.quantity}</p><i data-id="${element.id}" id="plusItem" class="bi bi-plus-circle" data-price="${Number(element.price).toFixed(2)}"></i><i data-id="${element.id}" id="minusItem" class="bi bi-dash-circle" data-price="${Number(element.price).toFixed(2)}"></i>
       </div>
       <div class="col-lg-1 col-3 prix-article">${Number(element.quantity * element.price).toFixed(2)} €</div>
       <img class="col-lg-2 col-3 delete"  data-id="${element.id}" src="assets/img/delete.png" alt="">
   `
            document.querySelector('.article').appendChild(newItem)
        }

        else {
            newItem.innerHTML =
                `
            <div class="col-lg-2 col-3 py-3 img-article"><img
               src="${element.image}" alt="">
       </div>
       <div class="col-lg-3 col-9 nom-article" data-id="${element.id}">${element.name}</div>
     <span class="size col-lg-2 col-3">
     </span>
       <div class="col-lg-2 col-3 quantite-article">
           <p>${element.quantity}</p><i data-id="${element.id}" id="plusItem" class="bi bi-plus-circle" data-price="${Number(element.price).toFixed(2)}"></i><i data-id="${element.id}" id="minusItem" class="bi bi-dash-circle" data-price="${Number(element.price).toFixed(2)}"></i>
       </div>
       <div class="col-lg-1 col-3 prix-article">${Number(element.quantity * element.price).toFixed(2)} €</div>
       <img class="col-lg-2 col-3 delete"  data-id="${element.id}" src="assets/img/delete.png" alt="">
   `
            document.querySelector('.article').appendChild(newItem)
        }
    }
}

// -------- Fonction qui permet de supprimer un objet du panier -----------

document.querySelector('.article').addEventListener("click", event => {
    if (event.target.classList.contains("delete")) {
        deleteItem(event.target.dataset.id)
        event.target.parentElement.style.display = "none"
    }
})

function deleteItem(item) {

    delete cart.Products[item]

    updateCartDetails()
    addToLocalStorage()
    document.querySelector('.totalPrice').innerHTML = `Total: ${JSON.parse(localStorage.getItem('cart')).Details.orderTotal.toFixed(2)}`

}

// ---------------- FONCTION AJOUTER ET RETIRER 1 DE LA QUANTITE ---------------------

document.querySelector('.article').addEventListener("click", event => {
    if (event.target.classList.contains('bi-plus-circle')) {
        plusItem(event.target.dataset.id)
    } else if (event.target.classList.contains('bi-dash-circle')) {
        minusItem(event.target.dataset.id)
    }
})

function plusItem(item) {
    cart.Products[item].quantity++
    updateCartDetails()
    addToLocalStorage()
    deleteCart()
    displayCart()
}

function minusItem(item) {
    if (cart.Products[item].quantity == 1) {
        deleteItem(item)
        updateCartDetails()
        addToLocalStorage()
        deleteCart()
        displayCart()
    } else {
        cart.Products[item].quantity--
        updateCartDetails()
        addToLocalStorage()
        deleteCart()
        displayCart()
    }

}