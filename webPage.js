//function that loads skill animations
function loadAnimations(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"Circle",
            animate:2000,
        })
        $('.chart2').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"Circle",
            animate:2000,
        })
        $('.chart3').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"Circle",
            animate:2000,
        })
        $('.chart4').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"Circle",
            animate:2000,
        })
        $('.chart5').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"Circle",
            animate:2000,
        })
        $('.chart6').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"Circle",
            animate:2000,
        })
        $('.chart7').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"Circle",
            animate:2000,
        })
    })
}

// function to filter proyects by category

function viewCategory(cat){
    const items = document.getElementsByClassName("item");
    for(let i = 0; i < items.length; i++){
        items[i].style.display = 'none';
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i < itemCat.length; i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".projects nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSelected = document.getElementById(cat);
    itemSelected.className = "border";
}

//Function that detects when to trigger the skills animation

function skillsEffect (){
    var skills = document.getElementById("skill");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distance_skills >= 300){
        let skill = document.getElementsByClassName("chart");
        skill[0].classList.add("chart1");
        skill[1].classList.add("chart2");
        skill[2].classList.add("chart3");
        skill[3].classList.add("chart4");
        skill[4].classList.add("chart5");
        skill[5].classList.add("chart6");
        skill[6].classList.add("chart7");

        loadAnimations();
    }
}

// detecto el scrolling para aplicar la animacion de las habilidades

window.onscroll = function(){
    skillsEffect();
}

// funcion que muestra el menu responsivo

function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className="";
    }
}


//Este codigo es para agregar una función a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
const links = document.querySelectorAll("#nav a");
for(i=0; i < links.length;i++){
    links[i].onclick = function(){
        var x = document.getElementById("nav");
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}

