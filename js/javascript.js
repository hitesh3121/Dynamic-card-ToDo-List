
let header = document.getElementById('header');
let description = document.getElementById('description');
const second_container = document.querySelector('.second-container');
const delete_Btn = document.querySelector('.deleteBtn');
let card_details = {};
let cardcode = ``;
let counter = 0;
const update = document.getElementById('headerid');
let element = document.querySelector('.delete')

const button = document.querySelector('.submitBtn');
button.addEventListener('click', e => {
    e.preventDefault();

    card_details = {
        header: header.value,
        description: description.value,
    };

    cardcode = cardcode + `
        <div class="second-card" id='cardid${counter + 1}'>
            <div type='button' name='delete' class='delete btn btn-primary' >
            </div>
            <img src="../asset/img.jpg" alt="">
            <div style="margin: 10px;">
                <label  class="h6" for="header">${card_details.header}</label>
            </div>
            <div>
                <label class="h6" for="description">${card_details.description}</label>
            </div>
            <a class='deleteBtn btn btn-primary' onclick="remove(this)" href="#">delete...</a>
        </div>
        </div>`
    second_container.innerHTML = cardcode;
    counter++;
});

function remove(e){
    let confirmation = confirm("Are You Sure!!");
    console.log(confirmation)
    if(confirmation) e.parentNode.remove()
}

