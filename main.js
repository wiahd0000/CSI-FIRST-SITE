const menus = document.getElementById("menus");

const burger = document.getElementById("burger");

burger.addEventListener("click", ()=>{
menus.classList.toggle("active")
});


menus.querySelectorAll("a").forEach(link =>{
  link.addEventListener("click", ()=>{
    menus.classList.remove("active");
  })
});

// home image slider

const homeImage = document.getElementById("homeImage");

const image =[
 "https://i.pinimg.com/736x/c1/53/cc/c153cc4cab6c2e5822cda68b2a6b0805.jpg",

 "https://i.pinimg.com/736x/ba/15/f6/ba15f6a27fcc3b40d2d8a0da1fc0674e.jpg",

 "https://i.pinimg.com/736x/1a/14/d6/1a14d64af7073f067aa0ae457455ccbb.jpg",

 "https://i.pinimg.com/1200x/ed/02/20/ed0220f09938e362bc96fe139a560fdf.jpg"
];

let index = 0;

setInterval(()=>{
  index++;
  if(index >= image.length){
    index = 0;
  }
  homeImage.src = image[index]
}, 5000);

