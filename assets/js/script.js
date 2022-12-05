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
            <img src="${element.image_path}" alt="${element.item_name}">
            <p class="description">${element.item_name}</p>
            <p class="price">60€</p>
            <button>Ajouter au panier</button>`;
            newDiv.classList.add('item','col-lg-2','col-5','mx-2','mx-lg-2')
            newDiv.dataset.category = element.category

            document.querySelector('.maillot').appendChild(newDiv);


        });
    });
function hideBall(){
    let test = document.querySelectorAll('[data-category="ball"]')
    test.forEach(element => {
        element.style.display='none'
    })
    
}
