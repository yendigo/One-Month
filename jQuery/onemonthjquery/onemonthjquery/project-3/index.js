$(document).ready(function () {

    $("#list-items").html(localStorage.getItem("list-items"));

    $(".add-items").submit(function(event) {
        event.preventDefault();

        var item = $("#todo-list-item").val();

        if (item==="Christine") {
            $("#list-items").append("<li><input class='checkbox' type='checkbox'/><iframe src=\"https://giphy.com/embed/3ofT5ySFXZ01oJ7aoM\" width='310' float='left' height='100' frameBorder='0' class='giphy-embed'></iframe><p><a href=\"https://giphy.com/gifs/spacejam-space-jam-movie-3ofT5ySFXZ01oJ7aoM\"></a></p><a class='remove'>x</a><hr></li>");
            localStorage.setItem("list-items", $("#list-items").html());
            $("#todo-list-item").val("");
        }
        else if (item) {
            $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
            localStorage.setItem("list-items", $("#list-items").html());
            $("#todo-list-item").val("");
        }
    });

    $(document).on("change", ".checkbox", function() {

        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
        }
        else {
            $(this).attr("checked", "checked");
        }

        $(this).parent().toggleClass("completed");
        localStorage.setItem("list-items", $("#list-items").html());
    }); 

    $(document).on("click", ".remove", function() {
        $(this).parent().animate({
            height: "toggle",
            opacity: "toggle"
          }, "slow", function(){
            $(this).remove();
            localStorage.setItem("list-items", $("#list-items").html());
          });
    });
});
