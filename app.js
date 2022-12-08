let P = document.getElementById('le-paragraphe')
let a =1

function paramVAR(...bonjour){
    P.innerHTML = "Bonjour"
    for (let name of bonjour){
        P.innerHTML += name + ", ";
    }

    P.innerHTML = P.innerHTML.trim().slice(0, -1);
}
paramVAR(' param1','param2','param3')

