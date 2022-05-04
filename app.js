const dataArray = [
    {
        id: 1,
        name: "Bill Gates",
        pictureurl: './asset/bill.jpg',
        description: 'Parce quil nest pas toujours facile dexprimer ses sentiments, quels que soient sonâcourte, souanter entretenir ou la rallumer!'
    },
    {
        id:2,
        name:'Dev',
        pictureurl:'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg',
        description: 'Parce quil nest pas toujours facile dexprimer ses sentiments, quels que soient sonâcourte, souanter entretenir ou la rallumer!'
    },
    {
        id:3,
        name:'google',
        pictureurl:'./asset/google.png',
        description: 'Parce quil nest pas toujours facile dexprimer ses sentiments, quels que soient sonâcourte, souanter entretenir ou la rallumer!'
    },
    {
        id:4,
        name:'lap',
        pictureurl:'./asset/lap.jpg',
        description: 'Parce quil nest pas toujours facile dexprimer ses sentiments, quels que soient sonâcourte, souanter entretenir ou la rallumer!'
    },
    {
        id:5,
        name:'mark',
        pictureurl:'./asset/mark.jpg',
        description: 'Parce quil nest pas toujours facile dexprimer ses sentiments, quels que soient sonâcourte, souanter entretenir ou la rallumer!'
    },
    {
        id:6,
        name:'p',
        pictureurl:'./asset/p.jpeg',
        description: 'Parce quil nest pas toujours facile dexprimer ses sentiments, quels que soient sonâcourte, souanter entretenir ou la rallumer!'
    },
    {
        id:7,
        name:'pc',
        pictureurl:'./asset/pc.jpeg',
        description: 'Parce quil nest pas toujours facile dexprimer ses sentiments, quels que soient sonâcourte, souanter entretenir ou la rallumer!'
    },
    {
        id:8,
        name:'programmer',
        pictureurl:'./asset/programmer.png',
        description: 'Parce quil nest pas toujours facile dexprimer ses sentiments, quels que soient sonâcourte, souanter entretenir ou la rallumer!'
    },
    {
        id:9,
        name:'web',
        pictureurl:'./asset/web.jpg',
        description: 'Parce quil nest pas toujours facile dexprimer ses sentiments, quels que soient sonâcourte, souanter entretenir ou la rallumer!'
    }
]

let htmlcode = ``;

dataArray.forEach(function(singleObjects){
    htmlcode = htmlcode + `
    <div class="card" id="card">
    <div class="item1">
        <img class="activebtn" src="${singleObjects.pictureurl}" alt="">
        <div class="item2">${singleObjects.name}</div>
    </div>
    <div class="item3">${singleObjects.description}</div>
    </div>`
})


function myFunction() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = htmlcode;

}
