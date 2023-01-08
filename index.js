
var i = 0
document.querySelector(".displayNum").innerHTML = i


function addOne() {
    i++
    document.querySelector(".displayNum").innerHTML = i
}



function subOne() {
        if (i<=0){
        return 0
    }
    i--
    document.querySelector(".displayNum").innerHTML = i
}




function reset() {
    i = 0
    document.querySelector(".displayNum").innerHTML=i

}
