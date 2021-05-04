'use strict'

let sec2 = document.getElementById('sec-two');




function getRandomAge(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    console.log(getRandomAge());
}
function Donation(doname, Doage, Doamount) {

    this.doname = doname;
    this.Doage = Doage;
    this.Doamount = Doamount;
    this.age = 0;
    this.name = null;
    Donation.allinfo.push(this);
}

Donation.allinfo = [];
let table = document.getElementById('table');

Donation.prototype.render = function () {

    let tr = document.createElement('tr');
    table.appendChild(tr);
    let td = document.createElement('td');
    td.textContent = `${Donation.allinfo.length}`;
    tr.appendChild(td);

    let td1 = document.createElement('td');
    td1.textContent = `${this.doname}`;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = `${this.doage}`;
    tr.appendChild(td2);


    let td3 = document.createElement('td');
    td3.textContent = `${this.Doamount}`;
    tr.appendChild(td3);

    this.doage = getRandomAge(18, 30);


    let td4 = document.createElement('td');
    td4.textContent = `${this.age}`;
    tr.appendChild(td4);


    let td5 = document.createElement('td');
    td5.textContent = `${this.name}`;
    tr.appendChild(td5);


}

let form = document.getElementById('form');
form.addEventListener('submit', handlesubmit);

function handlesubmit(event) {
    event.preventDefault();
    let name = event.target.text.value;

    let Amo = event.target.Amount.value;

    let newdonation = new Donation(doname, doage, Doamount);
    saveLoca()
    newdonation.render();
}

function saveLoca() {
    let information = JSON.stringify(Donation.allinfo);
    localStorage.setItem(Donation, information);
}

function getSaveLoca() {

    let newdonation = localStorage.getItem('Donation');
    let order = JSon.parse(newdonation);

    for (let i = 0; i < order.length; i++) {

        let existData = new Donation(order[i].doname, order[i].doage, order[i].Doamount);
        existData.render();
    }
}

getSaveLoca();