console.log("Your index.js file is loaded correctly!");
$("button").on("click",function(){
    console.log("You viewed my resume or projects!");
});

function fade(){
    $(".preloader").fadeOut("slow");
}
setTimeout(fade, 3000);
