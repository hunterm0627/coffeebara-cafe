// let buttons = document.querySelector('button');

// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         buttons.forEach(btn => btn.classList.remove('active'));
//         this.classList.add('active');
//     });
// });

// Add your code to this section.
// $(function(){
//     $("#btn25").click(function(){
//         $("#gift25").collapse("show");
//     });
//     $("#btn50").click(function(){
//         $("#gift50").collapse("show");
//     });
//     $("#btn75").click(function(){
//         $("#gift75").collapse("hide");
//     });
//     $("#btn100").click(function(){
//         $("#gift100").collapse("hide");
//     });
// });

// Changes text of gift card amount when radio button is selected.
function changeText(text) {
    document.getElementById("giftAmount").innerHTML = text;
}




// *********** Cart Modal ***********

console.log("Here")

let removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons);

for(const i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i];
    button.addEventListener('click', function(event) {
        console.log('clicked') // logs click in console
        let buttonClicked = event.target 
        buttonClicked.parentElement.parentElement.parentElement.remove();
        updateCartTotal(); // 9:25 on video 
    });
}

function updateCartTotal() {
    
}