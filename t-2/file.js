function setBg () {
    // var red = $("#red[type=range]").val();
    // var green = $("#green[type=range]").val();
    // var blue = $("#blue[type=range]").val();
    // var bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    // $ ("body").css("background:", bgColor());

    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;

    var bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("heading").style.color = bgColor;
};