let color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let button = document.getElementById('btn');
let colorCode = document.getElementById('code');
let navH3 = document.getElementById('nav-h3');
let navSecond = document.getElementById('li2');


button.addEventListener('click', () =>{
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += color[random()];
    }
    
    //check why some properties doesnt work with queries and only id
    navH3.style.color = hexColor;
    navSecond.style.color = hexColor;
    colorCode.textContent = hexColor;
    colorCode.style.color = hexColor;
    document.body.style.backgroundColor = hexColor;
})
let random = function (){
    return Math.floor(Math.random() * color.length);
}