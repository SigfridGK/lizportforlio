var isAdded = 0;
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 55 ){
        if (isAdded == 0){
            $(document).ready(function(){
                isAdded = 1;
                $("#test").fadeIn(250);
            });
        }
    }else{
        if (isAdded == 1){
            isAdded = 0;
            $("#test").fadeOut(200);
        }
    }
});
