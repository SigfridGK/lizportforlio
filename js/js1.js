window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll <= 0){
        $("#customNav").hide();
    }else{
        $("#customNav").show();
    }

    if (scroll > 55 ){
        $("#addShad").fadeIn(250);
    }else{
        $("#addShad").fadeOut(200);
    }

    var opacityVal = (window.innerHeight - (scroll + 100)) / 100
    $("#lizBGImg").css('opacity', opacityVal);
});