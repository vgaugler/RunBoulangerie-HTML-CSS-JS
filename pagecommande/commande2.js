// scroll menu

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    var panier = document.querySelector(".panier")
    panier.classList.toggle("sticky", window.scrollY > 0);
})

// toggle menu 

function toggleMenu(){
var menuToggle = document.querySelector('.toggle');
var menu = document.querySelector('.menu');
menuToggle.classList.toggle('active');
menu.classList.toggle('active');

}


let result = 0;
const btn1 = document.getElementsByClassName('button1');
const btn2 = document.getElementsByClassName('button2');
const panier = document.querySelector('.panier_item');
const btnOk = document.getElementsByClassName('ok');
const boxPanier = document.querySelector('.panier');
const panier_title = document.querySelector('.panier_title');
const panier_user = document.querySelector('.panier_user');
const panierBox = document.querySelector('.panierBox');
let numberCroissant = 0;
let numberPainRaisin = 0;
let numberPainChoc = 0;
let addResultCard = "";
let addResultCard2 = "";
let addResultCard3 = "";
const price = document.querySelector('.panier_price');
const panierPriceStorage = document.querySelector('.panierPriceStorage')



    function setData(){

        localStorage.setItem('panier', panier.outerHTML);
        localStorage.setItem('price', price.outerHTML);
        localStorage.setItem('priceCroissant', addResultCard.outerHTML);
        localStorage.setItem('priceRaisin', addResultCard2.outerHTML);
        localStorage.setItem('priceChoco', addResultCard3.outerHTML);

    };

    const findPanier = () => {
        
        let myPanier = localStorage.getItem('panier');
        let myPrice = localStorage.getItem('price');
        let myCroissant = localStorage.getItem('priceCroissant');
        let myRaisin = localStorage.getItem('priceRaisin');
        let myChoco = localStorage.getItem('priceChoco');
        panierBox.innerHTML = myPanier;
        panierPriceStorage.innerHTML = myPrice;
    
    };
    
    findPanier();

    for ( let i = 0; i<btn1.length; i++){
        
        
        var buttonAdd = btn1[i]
        

        buttonAdd.addEventListener('click', function(event){
            
            const resultBox = document.getElementsByClassName(event.target.id)[0];
            result = parseInt(resultBox.innerText);
            result += 1; 
            resultBox.innerText = result;
            console.log(resultBox.innerText);
            
            switch (event.target.id) {
                case "card1" :
                    numberCroissant = result;
                    break;
                case "card2" :
                    numberPainRaisin = result;
                    break;
                case "card3" :
                    numberPainChoc = result;
                default:
                    console.log('nothing');
            };

            console.log(numberCroissant);

        });

    };

    
    for ( let i = 0; i<btn2.length; i++){
        
        
        var buttonSubstract = btn2[i]
        
            
        buttonSubstract.addEventListener('click', function(event){
            
            const resultBox = document.getElementsByClassName(event.target.id)[0];
           
            result = parseInt(resultBox.innerText);
            result -= 1; 
            if (result <= 0){
                result = 0;
                alert('vous ne pouvez pas acheter zéro produit');
            }
            resultBox.innerText = result;
            console.log(resultBox.innerText);
            
            switch (event.target.id) {
                case "card1" :
                    numberCroissant = result;
                    break;
                case "card2" :
                    numberPainRaisin = result;
                    break;
                case "card3" :
                    numberPainChoc = result;
                default:
                    console.log('nothing');
            };

            console.log(numberCroissant);

        });

    };


    for (let i = 0; i<btnOk.length; i++){

        const buttonOk = btnOk[i]

        buttonOk.addEventListener('click', function(event){
            
           
            
            

            if (panier !== "") {
                 panierBox.innerHTML="";
                 panierPriceStorage.innerHTML="";
            }

            console.log(result);
            const resultBox = document.getElementsByClassName(event.target.id)[0];

            switch (event.target.id) {
                case "card1" :
                   
                    if ( addResultCard !== ""){
                        panier.removeChild(addResultCard);   
                    } else if (result <= 0){
                        alert('vous ne pouvez pas commander 0 croissants!')
                    }
                    result = parseInt(resultBox.innerText);
                    console.log(resultBox.innerText);
                    addResultCard = document.createElement("p");
                    addResultCard.innerHTML= `<i class="far fa-arrow-alt-circle-right"></i> ${numberCroissant} croissants`;
                    panier.appendChild(addResultCard);
                    panier_title.style.display= "none";
                    panier_user.style.height= "100%";
                    price.innerHTML = `Total : ${Math.round((numberCroissant*1.10+numberPainRaisin*1.30+numberPainChoc*1.50)*100)/100} euros`;
                    break;
                case "card2" :
                    
                    if ( addResultCard2 !== ""){
                        panier.removeChild(addResultCard2);
                    } else if (result <= 0){
                        alert('vous ne pouvez pas commander 0 croissants!')
                    }
                    result = parseInt(resultBox.innerText);
                    console.log(resultBox.innerText);
                    addResultCard2 = document.createElement("p");
                    addResultCard2.innerHTML= `<i class="far fa-arrow-alt-circle-right"></i> ${numberPainRaisin} pains aux raisins`;
                    panier.appendChild(addResultCard2);
                    panier_title.style.display= "none";
                    panier_user.style.height= "100%";
                    price.innerHTML = `Total : ${Math.round((numberCroissant*1.10+numberPainRaisin*1.30+numberPainChoc*1.50)*100)/100} euros`;
                    break;
                case "card3" :

                    if ( addResultCard3 !== ""){
                        panier.removeChild(addResultCard3);
                    } else if (result <= 0){
                        alert('vous ne pouvez pas commander 0 croissants!')
                    }
                    result = parseInt(resultBox.innerText);
                    console.log(resultBox.innerText);
                    addResultCard3 = document.createElement("p");
                    addResultCard3.innerHTML= `<i class="far fa-arrow-alt-circle-right"></i> ${numberPainChoc} pain au chocolat`;
                    panier.appendChild(addResultCard3);
                    panier_title.style.display= "none";
                    panier_user.style.height= "100%";
                    price.innerHTML = `Total : ${Math.round((numberCroissant*1.10+numberPainRaisin*1.30+numberPainChoc*1.50)*100)/100} euros`;
                    break;
                default:
                    console.log('nothing');
            };

            

        });

    }
  
/*
btn1.addEventListener('click', function(){
    result += 1;
    result1.innerHTML = result;
    result1.classList.toggle("translate");
   /* panier.innerHTML = `<i class="far fa-arrow-alt-circle-right"></i> ${result} croissant`; 
    priceCroissant = parseInt(price); 
    console.log(result);
    price.innerHTML = `Total : ${result*1.50} euros`;
    
});

btn2.addEventListener('click', function(){
    result -= 1;
    result1.innerHTML = result;  
    /*panier.innerHTML = ` ${result}, croissant`;
    console.log(result);
    priceCroissant = parseInt(price); 
    console.log(priceCroissant); 
    panier.innerHTML = `<i class="far fa-arrow-alt-circle-right"></i> ${result-1} croissant`;
    price.innerHTML = `Total : ${(result-1)*1.50} euros`;
    
});

okCard1.addEventListener('click', function(){
    let addResultCard1 = document.createElement("p");
    addResultCard1.innerHTML= `<i class="far fa-arrow-alt-circle-right"></i> ${result} croissants`;
    panier.appendChild(addResultCard1);
    boxPanier.style.height= "250px";
    price.innerHTML = `Total : ${result*1.50+resultCard2*1.75} euros`; 
});

btn1Card2.addEventListener('click', function(){
    resultCard2 += 1;
    result2.innerHTML = resultCard2;
    result2.classList.toggle("translate");
   /* panier.innerHTML = `<i class="far fa-arrow-alt-circle-right"></i> ${result} croissant`; 
    priceCroissant = parseInt(price); 
    console.log(result);
    price.innerHTML = `Total : ${result*1.50} euros`;
    
});

btn2Card2.addEventListener('click', function(){
    resultCard2 -= 1;
    result2.innerHTML = resultCard2;  
    /*panier.innerHTML = ` ${result}, croissant`;
    console.log(result);
    priceCroissant = parseInt(price); 
    console.log(priceCroissant); 
    panier.innerHTML = `<i class="far fa-arrow-alt-circle-right"></i> ${result-1} croissant`;
    price.innerHTML = `Total : ${(result-1)*1.50} euros`;
    
});

okCard2.addEventListener('click', function(){
    let addResultCard2 = document.createElement("p");
    addResultCard2.innerHTML= `<i class="far fa-arrow-alt-circle-right"></i> ${resultCard2} pains aux raisins`;
    panier.appendChild(addResultCard2);
    boxPanier.style.height= "250px";
    price.innerHTML = `Total : ${result*1.50+resultCard2*1.75} euros`; 
});

//};

/*console.log(typeof(result)); */  