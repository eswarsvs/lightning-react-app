let url = "/contacts";

export let findAll = () => new Promise((resolve, reject) => {
    fetch(url, {credentials: 'same-origin'})
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});

export let findById = id => new Promise((resolve, reject) => {
    fetch(url + "/"+id, {credentials: 'same-origin'})
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});

export let findByName = name => new Promise((resolve, reject) => {
    fetch(url + "?name="+name, {credentials: 'same-origin'})
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});

export let updateItem = contact => new Promise((resolve, reject) => {
    fetch(url, {
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'put',
        body: JSON.stringify(contact)
    })
    .then(response => response.json())
    .then(data => {
        resolve(data);
    })
    .catch(e => reject(e));
});

export let createItem = contact =>  new Promise((resolve, reject) => {
    fetch(url, {
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(contact)
    })
    .then(response => response.json())
    .then(data => {
        resolve(data);
    })
    .catch(e => reject(e));
});

export let deleteItem = contact => new Promise((resolve, reject) => {
    fetch(url, {
        credentials: 'same-origin',
        method: 'del'
    })
    .then(response => response.json())
    .then(data => {
        resolve(data);
    })
    .catch(e => reject(e));
});