fetch('items.json')
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(data => {

    })