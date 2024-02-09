const container = document.getElementById('data-container');
const form = document.querySelector('form');
const buttons = document.querySelectorAll('.controls button');


const BASE_URL = 'https://jsonplaceholder.typicode.com';

const renderData = (data) => {
    container.textContent = JSON.stringify(data, null, ' ')
}

const getPostDataById = (id) => {
    return fetch(`${BASE_URL}/posts/${id}`)
}

const createPost = (data) => {
    return fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            'title':'rrrrrrrr',
            'user': '2'
        })
    })
}

const submitForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let object = {};
    data.forEach(function(value, key){
        object[key] = value;
    });
    
    console.log(object);

    createPost(object).then((response) => {
        return response.json()
    }).then(responseData => {
        renderData(responseData);
    })
}

const pressControlButton = (event) => {
    const id = event.target.getAttribute('data-id');
    console.log('ID: ', id);
    getPostDataById(id).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
        renderData(data);
    })
}



buttons.forEach(button => {
    button.addEventListener('click', pressControlButton);
})

form.addEventListener('submit', submitForm);