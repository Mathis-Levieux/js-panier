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
            <img src="${element.image_path}" alt="${element.item_name}" data-bs-toggle="modal"
            data-bs-target="${element.id}">
            <p class="description">${element.item_name}</p>
            <p class="price">60€</p>
            <button>Ajouter au panier</button>`;
            newDiv.classList.add('item', 'col-lg-2', 'col-5', 'mx-2', 'mx-lg-2')
            newDiv.dataset.category = element.category

            document.querySelector('.maillot').appendChild(newDiv);

           
           
           
            // MODAL
            const newModal = document.createElement('div')
            newModal.setAttribute('tabindex', '-1')
            newModal.setAttribute('aria-labelledby', element.id)
            newModal.setAttribute('aria-hidden', 'true')
            newModal.classList.add('modal', 'fade')
            newModal.id = element.id
            newModal.innerHTML = `<div class="modal fade" id="${element.id}" tabindex="-1" aria-labelledby="${element.id}" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-dark text-light">
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
    </div>
</div>`




            document.querySelectorAll('img').forEach(element => {
                element.addEventListener('click', () => {
                    document.querySelector('.maillot').appendChild(newModal);
                })

            })




        });
    });
function hideBall() {
    let test = document.querySelectorAll('[data-category="ball"]')
    test.forEach(element => {
        element.style.display = 'none'
    })
}


// CREATION DE MODAL
