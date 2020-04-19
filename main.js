
// Sticky menu background
window.addEventListener('scroll', function(){
    if (window.scrollY > 90){
        document.querySelector('#main-header').style.opacity = 0.9;
    }
    else {
        document.querySelector('#main-header').style.opacity = 1;
    }
});

// search button to filter input for products
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("product");
    li = ul.getElementsByTagName("h3");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
// end!


// add class active on clicking the button .. add to cart
$(document).on('click','.bc1' , function(){
    $('.p1').addClass('active');
});
$(document).on('click','.bc2' , function(){
    $('.p2').addClass('active');
});
$(document).on('click','.bc3' , function(){
    $('.p3').addClass('active');
});
$(document).on('click','.bc4' , function(){
    $('.p4').addClass('active');
});
$(document).on('click','.bc5' , function(){
    $('.p5').addClass('active');
});
$(document).on('click','.bc6' , function(){
    $('.p6').addClass('active');
});
$(document).on('click','.bc7' , function(){
    $('.p7').addClass('active');
});
$(document).on('click','.bc8' , function(){
    $('.p8').addClass('active');
});
$(document).on('click','.bc9' , function(){
    $('.p9').addClass('active');
});
$(document).on('click','.bc10' , function(){
    $('.p10').addClass('active');
});


// increament items with class items in cart after clicking the button Add To Cart
// initiate input
let input = document.querySelector('#cart');
// initiate other variables
const btnAdd1 = document.querySelector('.bc1');
btnAdd1.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
const btnAdd2 = document.querySelector('.bc2');
btnAdd2.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
const btnAdd3 = document.querySelector('.bc3');
btnAdd3.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
const btnAdd4 = document.querySelector('.bc4');
btnAdd4.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
const btnAdd5 = document.querySelector('.bc5');
btnAdd5.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
const btnAdd6 = document.querySelector('.bc6');
btnAdd6.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
const btnAdd7 = document.querySelector('.bc7');
btnAdd7.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
const btnAdd8 = document.querySelector('.bc8');
btnAdd8.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
const btnAdd9 = document.querySelector('.bc9');
btnAdd9.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
const btnAdd10 = document.querySelector('.bc10');
btnAdd10.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
// end of procedure add to cart


// onclicking the cart open all products with class active and add a class section-c to the main section
$(document).on('click','.cart-content' , function(){
    $('.main-section').addClass('section-c');
});

// remove item from cart .. remove class active by clicking button remove
$(document).on('click','.br1' , function(){
    $('.p1').removeClass('active');
});
$(document).on('click','.br2' , function(){
    $('.p2').removeClass('active');
});
$(document).on('click','.br3' , function(){
    $('.p3').removeClass('active');
});
$(document).on('click','.br4' , function(){
    $('.p4').removeClass('active');
});
$(document).on('click','.br5' , function(){
    $('.p5').removeClass('active');
});
$(document).on('click','.br6' , function(){
    $('.p6').removeClass('active');
});
$(document).on('click','.br7' , function(){
    $('.p7').removeClass('active');
});
$(document).on('click','.br8' , function(){
    $('.p8').removeClass('active');
});
$(document).on('click','.br9' , function(){
    $('.p9').removeClass('active');
});
$(document).on('click','.br10' , function(){
    $('.p10').removeClass('active');
});


// decreament items in cart after removing class active .. delete from cart
const btnSubtract1 = document.querySelector('.br1');
btnSubtract1.addEventListener('click', () =>{
    input.value = parseInt(input.value)  -1;
});
const btnSubtract2 = document.querySelector('.br2');
btnSubtract2.addEventListener('click', () =>{
    input.value = parseInt(input.value)  -1;
});
const btnSubtract3 = document.querySelector('.br3');
btnSubtract3.addEventListener('click', () =>{
    input.value = parseInt(input.value)  -1;
});
const btnSubtract4 = document.querySelector('.br4');
btnSubtract4.addEventListener('click', () =>{
    input.value = parseInt(input.value)  -1;
});
const btnSubtract5 = document.querySelector('.br5');
btnSubtract5.addEventListener('click', () =>{
    input.value = parseInt(input.value)  -1;
});
const btnSubtract6 = document.querySelector('.br6');
btnSubtract6.addEventListener('click', () =>{
    input.value = parseInt(input.value)  -1;
});
const btnSubtract7 = document.querySelector('.br7');
btnSubtract7.addEventListener('click', () =>{
    input.value = parseInt(input.value)  -1;
});
const btnSubtract8 = document.querySelector('.br8');
btnSubtract8.addEventListener('click', () =>{
    input.value = parseInt(input.value)  -1;
});
const btnSubtract9 = document.querySelector('.br9');
btnSubtract9.addEventListener('click', () =>{
    input.value = parseInt(input.value)  -1;
});
const btnSubtract10 = document.querySelector('.br10');
btnSubtract10.addEventListener('click', () =>{
    input.value = parseInt(input.value)  -1;
});


//a function for making all the buttons clickable ..attaching audio
var bleep = new Audio ();
bleep.src = "mouse2.mp3";
function playAudio(){
    bleep.play();
}

//increament likes on click 
// if function is to ensure that the value of like is not more than 5
var like1 = document.getElementById('like1'); 
function addLikes1(){
    if(like1.value <= 4){
        like1.value = parseInt(like1.value) + 1;
    }
};
var like2 = document.getElementById('like2'); 
function addLikes2(){
    if(like2.value <= 4){
        like2.value = parseInt(like2.value) + 1;
    }
};
var like3 = document.getElementById('like3'); 
function addLikes3(){
    if(like3.value <= 4){
        like3.value = parseInt(like3.value) + 1;
    }
};
var like4 = document.querySelector('#like4'); 
function addLikes4(){
    if(like4.value <= 4){
        like4.value = parseInt(like4.value) + 1;
    }
};
var like5 = document.getElementById('like5'); 
function addLikes5(){
    if(like5.value <= 4){
        like5.value = parseInt(like5.value) + 1;
    }
};
var like6 = document.getElementById('like6'); 
function addLikes6(){
    if(like6.value <= 4){
        like6.value = parseInt(like6.value) + 1;
    }
};
var like7 = document.getElementById('like7'); 
function addLikes7(){
    if(like7.value <= 4){
        like7.value = parseInt(like7.value) + 1;
    }
};
var like8 = document.getElementById('like8'); 
function addLikes8(){
    if(like8.value <= 4){
        like8.value = parseInt(like8.value) + 1;
    }
};
var like9 = document.getElementById('like9'); 
function addLikes9(){
    if(like9.value <= 4){
        like9.value = parseInt(like9.value) + 1;
    }
};
var like10 = document.querySelector('#like10'); 
function addLikes10(){
    if(like10.value <= 4){
        like10.value = parseInt(like10.value) + 1;
    }
};
 

// calculations to get final price
// if function to avoid null incase no class active
$(document).ready(function(){
    $("#total-price").click(function(){ //A function to check if a product  has class active
        if($(".p1").hasClass("active")){
            var prod1 = document.querySelector('#price1').value;
            var prodNo1 = document.querySelector('#price-no1').value;
            cost1 = parseInt(prod1)*parseInt(prodNo1);
        } else {
            cost1 = 0;
        };
        if($(".p2").hasClass("active")){
            var prod2 = document.querySelector('#price2').value;
            var prodNo2 = document.querySelector('#price-no2').value;
            cost2 = parseInt(prod2)*parseInt(prodNo2);
        } else {
            cost2 = 0;
        };
        if($(".p3").hasClass("active")){
            var prod3 = document.querySelector('#price3').value;
            var prodNo3 = document.querySelector('#price-no3').value;
            cost3 = parseInt(prod3)*parseInt(prodNo3);
        } else {
            cost3 = 0;
        };
        if($(".p4").hasClass("active")){
            var prod4 = document.querySelector('#price4').value;
            var prodNo4 = document.querySelector('#price-no4').value;
            cost4 = parseInt(prod4)*parseInt(prodNo4);
        } else {
            cost4 = 0;
        };
        if($(".p5").hasClass("active")){
            var prod5 = document.querySelector('#price5').value;
            var prodNo5 = document.querySelector('#price-no5').value;
            cost5 = parseInt(prod5)*parseInt(prodNo5);
        } else {
            cost5 = 0;
        };
        if($(".p6").hasClass("active")){
            var prod6 = document.querySelector('#price6').value;
            var prodNo6 = document.querySelector('#price-no6').value;
            cost6 = parseInt(prod6)*parseInt(prodNo6);
        } else {
            cost6 = 0;
        };
        if($(".p7").hasClass("active")){
            var prod7 = document.querySelector('#price7').value;
            var prodNo7 = document.querySelector('#price-no7').value;
            cost7 = parseInt(prod7)*parseInt(prodNo7);
        } else {
            cost7 = 0;
        };
        if($(".p8").hasClass("active")){
            var prod8 = document.querySelector('#price8').value;
            var prodNo8 = document.querySelector('#price-no8').value;
            cost8 = parseInt(prod8)*parseInt(prodNo8);
        } else {
            cost8 = 0;
        };
        if($(".p9").hasClass("active")){
            var prod9 = document.querySelector('#price9').value;
            var prodNo9 = document.querySelector('#price-no9').value;
            cost9 = parseInt(prod9)*parseInt(prodNo9);
        } else {
            cost9 = 0;
        };
        if($(".p10").hasClass("active")){
            var prod10 = document.querySelector('#price10').value;
            var prodNo10 = document.querySelector('#price-no10').value;
            cost10 = parseInt(prod10)*parseInt(prodNo10);
        } else {
            cost10 = 0;
        };
        var cost = document.querySelector('#cost');
        cost.value = cost1 + cost2 + cost3 + cost4 + cost5 + cost6 + cost7 + cost8 + cost9 + cost10;
    });
});


// alert user his product has been placed successfuly
// function orderPlaced() {
//     alert("Your Order has been placed successfully");
// };

// getting total price into the form input by passing it to a hidden input
$(document).on('click','#total-price' , function(){
    var costValue = document.querySelector('#cost');
    var costInput = document.querySelector('#input-price');
    
    costInput.value = costValue.value;
});
