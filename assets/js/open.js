function open(nummer) {
    let x = document.getElementById("huren");
    let y = document.getElementById("onderhoud");
    let z = document.getElementById("login");
    let a = document.getElementById("overons");
    if(nummer === 1){
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }else if(nummer === 2) {
        if (z.style.display === "none") {
            z.style.display = "block";
        } else {
            z.style.display = "none";
        }
    }else if(nummer === 3){
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }
    } else{
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    }
    
    
}