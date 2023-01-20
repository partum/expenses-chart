// fetch('./data.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));



async function populate() {
    let total = document.getElementById('total');
    const requestURL = './data.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const transactions = await response.json();

    populateTotal(transactions);
}


function populateTotal(obj) {
    let result = 0;
    for (let i = 0; i < obj.length; i++) {
        result += obj[i].amount
    }
    total.innerHTML = '$' + result;
}

populate();

