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
            <img type="button" src="${element.image_path}" alt="${element.item_name}" data-bs-toggle="modal"
            data-bs-target="#${element.id}">
            <p class="description">${element.item_name}</p>
            <p class="price">${element.price} €</p>
            <button class="btnAdd py-3" data-id= ${element.id}>Ajouter au panier</button>`;
            newDiv.classList.add('item',  'col-lg-2',  'col-5',  'mx-2',  'mx-lg-2','fadein')
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
                        <img src="${element.image_path}" class="imgzoom" alt="${element.item_name}" />
                    </div>
                    <div class="col-lg-6 col-12">
                        <h3 class="pb-2 fw-normal">${element.item_name}</h3>
                        <p>${element.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`

document.querySelector('.produits').appendChild(newModal);

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
document.querySelectorAll('.btnAdd').forEach(element => {
    element.addEventListener('click', ()=> {

    })
})

// CREATION DE MODAL
