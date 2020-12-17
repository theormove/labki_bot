var sign = document.getElementById("signlog");
var formWindow = document.getElementById("form_window");
var cancel = document.getElementById("cancel_icon");
cancel.addEventListener("click",
    function(e) {
        formWindow.style.display = "none";
        $("body").removeClass("fixed");
    }
);
sign.onclick = function() {
    formWindow.style.display = "block";
    $("body").addClass("fixed");
    addEventListener("keydown", function(e) {
        if (e.keyCode == 27) {
            formWindow.style.display = "none";
            $("body").removeClass("fixed");
        }
    });
};
formWindow.addEventListener("click",
    function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.id == "form_window") {
            formWindow.style.display = "none";
            $("body").removeClass("fixed");
        }
    }
);
$(".tab a").on("click", function(e) {
    e.preventDefault();

    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");

    target = $(this).attr("href");

    $(".tab-content > div").not(target).hide();

    $(target).fadeIn(600);
});