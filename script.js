var restaurantname="indian hyat";
var order=[]; // array 

// event listener

//for the cancel link event
window.addEventListener("DOMContentLoaded"/*load is used : then everything is loaded but in DOMcontentloaded only html page is required, images would load later*/,function(){
    updatecart();
    //alert("welcome to "+ restaurantname);
    var lnkCancel = document.querySelector("#lnkStartOver");//document is an object in js that represent html page. 
    lnkCancel.addEventListener("click",function(){
        var areyousure=confirm("are you sure to cancel the order");
        if (areyousure){
            order=[];
            updatecart();
        }

    });
    //listen to meals click
    var meals=document.querySelectorAll(".meal"); // queryselector wold give one object so we used all
    for (var meal of meals){
        meal.addEventListener("click",function(){
            //alert("i am a meal")
            var title=this.dataset.title;
            //alert(title);
            order.push(title);
            updatecart();
        });
    }

});

function updatecart(){
    var html="";
    for (var meal of order){
        html +="<li>"+meal+"</li>"
    }
    var ul=document.querySelector("#cart ul")
    ul.innerHTML=html;

    var cart= document.querySelector("#cart");
    if (order.length==0){
        cart.style.backgroundColor="gray";
    }else{
        cart.style.backgroundColor="#006";
    }
};