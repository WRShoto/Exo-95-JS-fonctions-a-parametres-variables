let P = document.getElementById('le-paragraphe')
let a =1

function paramVAR(...bonjour){
    P.innerHTML = "Bonjour"
    for (let name of bonjour){
        P.innerHTML += name + ", ";
    }
    P.innerHTML = P.innerHTML.trim().slice(0, -1);
    if (a<5){
        paramVAR('param1','param2','param3','param4')
    }

}
paramVAR(' param1','param2','param3')


//2


function number(un,deux,trois){

}