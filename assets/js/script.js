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
            <p class="price">${Number(element.price).toFixed(2)} €</p>
            <button class="btnAdd py-3" data-id= ${element.id} data-price=${element.price} data-name="${element.itemname}" data-image=${element.imagepath} data-category=${element.category}>Ajouter au panier</button>`;
            newDiv.classList.add('item', 'col-lg-2', 'col-5', 'mx-2', 'mx-lg-2', 'fadein')
            newDiv.dataset.category = element.category

            document.querySelector('.produits').appendChild(newDiv);




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
                        <p>${Number(element.price).toFixed(2)} €</p>
                        <button class="btnAdd py-3" data-id="${element.id}">Ajouter au panier</button>
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
            <p>${Number(element.price).toFixed(2)} €</p>
            <label for="marque">Choisissez votre taille</label>
            <select name="taille" id="taille">
              <option value="S">S</option> 
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select> <br/>
            <button class="btnAdd py-3" data-id="${element.id}">Ajouter au panier</button>
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





const btn = document.querySelectorAll('.btnAdd');
btn.forEach(element => {
    element.addEventListener('click', () => {
        console.log('clic')
        fetch('items.json')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => {
                console.log(data)
            })
    })
})
window.addEventListener('click', e => {
    if (e.target.classList.contains('btnAdd')) {
        const newItem = document.createElement('div');
        newItem.classList.add('panier-container','row','mx-0')
        newItem.innerHTML =
            `
            <div class="col-lg-2 col-3 py-3 img-article"><img
               src="${e.target.dataset.image}" alt="">
       </div>
       <div class="col-lg-3 col-9 nom-article">${e.target.dataset.name}</div><span class="col-lg-2 col-3">Taille: M</span>
       <div class="col-lg-2 col-3 quantite-article">
           <p>1</p><i class="bi bi-plus-circle"></i><i class="bi bi-dash-circle"></i>
       </div>
       <div class="col-lg-1 col-3 prix-article">${Number(e.target.dataset.price).toFixed(2)} €</div>
       <img class="col-lg-2 col-3 delete"  src="assets/img/delete.png" alt="">

   `





   document.querySelector('.article').appendChild(newItem)

    }
})

document.querySelector('.article').addEventListener("click", event => {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove()

    }
})

document.querySelector('#logo').addEventListener('click',()=>{
    location.reload();
})