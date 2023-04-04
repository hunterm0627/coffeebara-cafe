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