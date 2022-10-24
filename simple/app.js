let colorList = ['Red', 'Magenta', '#B9A73C', 'rgba(120, 39, 12, 0.8)', 'Grey', '#6DB6E3', '#2FC082', 'Orange', 'Gainsboro']

let button = document.getElementById('btn');
let colorCode = document.getElementById('code');
let navH3 = document.getElementById('nav-h3');
let navFirst = document.getElementById('li');


button.addEventListener('click', function(){
    let color = colorList[random()];

    document.body.style.backgroundColor = color;
    colorCode.textContent = color;
    colorCode.style.color = color;
    navH3.style.color = color;
    navFirst.style.color = color;
})
let random = ()=>{
   return Math.floor(Math.random()*colorList.length)
}