$(document).ready(function(){
    $(".option").click(function (e) {
        $("#container").removeClass();
        $("#container").addClass(this.title);
        $(".option").removeClass("option-active");
        $(this).addClass("option-active");
    });
});