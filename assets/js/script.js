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
            <button class="btnAdd py-3" data-id= ${element.id} data-price=${element.price} data-name="${element.itemname}" data-image=${element.imagepath} data-category=${element.category} data-quantity="1">Ajouter au panier</button>
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
    location.reload();
})


// ------------------------------------------- Fonction d'ajout au panier --------------------------------------------
var cart = [];
cart['Details'] = [];
cart['Products'] = [];




function updateCartDetails(){
    let qt = 0;
    let total = 0;

    for (const [key, element] of Object.entries(cart['Products'])) {
 
        // mettre à jour la quantité globale
        qt = Number(qt)+Number(element.quantity)

        //mettre à jour le prix global
        total = total+(element.price*element.quantity)
    }
    
    cart['Details']['nbItems'] = qt;
    cart['Details']['orderTotal'] = total;

    
}


function addToCart(item){

    if(cart['Products'][item.id]){
        cart['Products'][item.id].quantity++;
    }
    else {
        cart['Products'][item.id] = item;
    }

    updateCartDetails();

}


window.addEventListener('click', e => {

    if (e.target.classList.contains('btnAdd')) {
        addToCart(e.target.dataset);
        console.table(e.target.dataset)
        console.log(cart)
    }
})