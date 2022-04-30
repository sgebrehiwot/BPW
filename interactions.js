$(document).ready(function() {
    $("html").on('click', function() {
        if($(":root").css("--color1") == "#221D07") {
            $(":root").css("--color1", "#000200");
            $(":root").css("--color2", "#481210");
            $(":root").css("--color3", "#A2484F");
            $(":root").css("--color4", "#B75145");
            $(":root").css("--color5", "#CB918D");
            $(":root").css("--color6", "#EFD9CE");
            $(":root").css("--flower_pic", "url(pink_flowers.png)");
        } else {
            $(":root").css("--color1", "#221D07");
            $(":root").css("--color2", "#713E5A");
            $(":root").css("--color3", "#837257");
            $(":root").css("--color4", "#ABA48F");
            $(":root").css("--color5", "#E9E3D0");
            $(":root").css("--color6", "#E9EEEC");
            $(":root").css("--flower_pic", "url(white_flowers.png)");
        }
    });

    $(document).ready(function(){
        $(".searchbar").keyup(function(event) {
            var k = $(this).val();
            console.log(k);
        });
    });
});