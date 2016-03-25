
// исчезновение ng-show
// var ul = document.getElementsByTagName('ul');
// console.log(ul[3]);
// for (var i=0; i<ul.length; i++) {	
// 	ul[i].style.position = 'fixed';
// 	//ul[i].style.opacity = '0';



// 	setTimeout(function() {
// 		ul[i].style.position = 'static';
// 	},400);	




// };

// /// АКтивность поля ввода суммы 
// document.getElementById("sum").disabled = true;
// var active = document.getElementById("btn");
// active.onclick = function() {

//     document.getElementById("sum").disabled = false;

// };



cardNumber= document.getElementById("cardnumber");
secureCode = document.getElementById("secure");
sum = document.getElementById("sum");

secureCode.onkeyup = secureCode.onchange = secureCode.onpaste= function(){
    this.value= this.value.replace(/[^\d]/g, "").replace(/\d{4}(?!$|(?:\s$))/g, "$& ")
    var cardType = document.getElementById("cardtype");

};

sum.onkeyup = sum.onchange = sum.onpaste= function(){
    this.value= this.value.replace(/[^\d]/g, "").replace(/\d{15}(?!$|(?:\s$))/g, "$& ")
    var cardType = document.getElementById("cardtype");

};
cardNumber.onkeyup = cardNumber.onchange = cardNumber.onpaste= function(){
	this.value= this.value.replace(/[^\d]/g, "").replace(/\d{4}(?!$|(?:\s$))/g, "$& ")
	var cardType = document.getElementById("cardtype");

	if (cardNumber.value !== "") {	



		var cardBody = document.getElementById("card_body");
		var iconCard = document.getElementById("type_icon");
		var cardType = document.getElementById("cardtype");

		cardBody.style.transition =  'width 1s linear';
		cardBody.style.width =  '525px';

		//Бэкгроунд иконки
		var valType = document.getElementById("cardtype").textContent;
		console.log(valType);
		var urltype = 'url(' + valType + '.png)';
		iconCard.style.background = urltype;



        // Выпрыгивание иконки
        if (iconCard.style.left !== '420px' && valType !== "") {
        	iconCard.style.transition =  'left 0.6s linear';
        	iconCard.style.left =  '268px';

        	setTimeout(function() {	

        		iconCard.style.transition =  'left 0.6s linear';
        		iconCard.style.left =  '420px';
        	},500);	

        };



        setTimeout(function() {
        	cardBody.style.transition =  'height 1s linear';
        	cardBody.style.height =  '300px';


        	cardNumber.style.transition =  'margin-top 1s linear';
        	cardNumber.style.marginTop =  '50px';


        },1000);	


    } else if (cardNumber.value == "" ) {
    	var iconCard = document.getElementById("type_icon");
    	var cardBody = document.getElementById("card_body");
    	cardBody.style.transition =  'height 1s linear';
    	cardBody.style.height =  '64px';
    	cardNumber.style.transition =  'margin-top 1s linear';
    	cardNumber.style.marginTop =  '10px';




    	setTimeout(function() {
    		cardBody.style.transition =  'width 1s linear';
    		cardBody.style.width =  '226px';	



    		iconCard.style.transition =  'left 0.4s linear';
    		iconCard.style.left =  '528px';



    	},1000);

    }


};





