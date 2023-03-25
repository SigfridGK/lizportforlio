window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 55 ){
        $(document).ready(function(){
            $("#addShad").fadeIn(250);
        });
    }else{
        $("#addShad").fadeOut(200);
    }
});