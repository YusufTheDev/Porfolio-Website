window.addEventListener("load", function () {
    window.arithmetic = function () {  
        let v1 = parseFloat(document.getElementById("value1").value);
        let v2 = parseFloat(document.getElementById("value2").value);
        let s = document.getElementById("operation").value;
        let r = document.getElementById("result");

        if (s === "+") {
            r.value = v1 + v2;
        } else if (s === "-") {
            r.value = v1 - v2;
        } else if (s === "*") {
            r.value = v1 * v2;
        } else if (s === "/") {
            r.value = v1 / v2;
        } else {
            r.value = v1 % v2;
        }
    };
    let v1 = document.getElementById("value1");
    let v2 = document.getElementById("value2");
    let s = document.getElementById("operation");

    v1.addEventListener("change", function(event){
        arithmetic()
    });

    v2.addEventListener("change", function(event){
        arithmetic()
    });

    s.addEventListener("change", function(event){
        arithmetic()
    });

    arithmetic();
});
