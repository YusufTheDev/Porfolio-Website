window.addEventListener("load", function(event){

    function checkCount(counter){
        if(counter === 4){
            document.getElementById("noeggs").style.display = "block";
        }
    
        if(counter === 10){
            document.getElementById("slow").style.display = "block";
            console.log("ho");
        }
    }
    let r1 = document.getElementById("rabbit1");
    let r2 = document.getElementById("rabbit2");
    let r3 = document.getElementById("rabbit3");
    let r4 = document.getElementById("rabbit4");

    let counter = 0;

    r1.addEventListener("mousemove", function(event){
        r1.style.visibility = "hidden";
        r2.style.visibility = "visible";
        counter++;
        checkCount(counter);
    })

    r2.addEventListener("mousemove", function(event){
        r2.style.visibility = "hidden";
        r3.style.visibility = "visible";
        counter++;
        checkCount(counter);
    })

    r3.addEventListener("mousemove", function(event){
        r3.style.visibility = "hidden";
        r4.style.visibility = "visible";
        counter++;
        checkCount(counter);
    })

    r4.addEventListener("mousemove", function(event){
        r4.style.visibility = "hidden";
        r1.style.visibility = "visible";
        counter++;
        checkCount(counter);
    })

});