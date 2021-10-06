
function show(){
    var t1 = document.getElementById("result1").innerHTML;
    var t2 = document.getElementById("result2").innerHTML;
    var t3 = document.getElementById("result3").innerHTML;
    var col = document.getElementById("setColor");
    // var rr = "rgba(".concat(t1,', ',t2,', ',t3,')');
    
    col.style.background = "rgb("+t1+", "+t2+", "+t3+")";;
    
    
}

function change(elem){
    var res = document.getElementById("result1");
    res.innerHTML = elem;
    show();
    update();
}
function change1(elem){
    var res = document.getElementById("result2");
    res.innerHTML = elem;
    show();
    update();
}
function change2(elem){
    var res = document.getElementById("result3");
    res.innerHTML = elem;
    show();
    update();
}
function def(){
    var a = document.getElementById("m1");
    a.value="0"; 
    var b = document.getElementById("m2");
    b.value="0"; 
    var c = document.getElementById("m3");
    c.value="0"; 
}
def();

// function update(){
//     var r = document.getElementById("result1");
//     var g = document.getElementById("result1");
//     var b = document.getElementById("result1");
    
//     var hex = "#"+ 
    
// }