export default () => {
    $("#modal__tag-name").val("");
    $("#modal__tag-type").val("");
    $("#image-input").val("");
    $("#modal__my-favourites").removeAttr("checked");
    $("#modal__my-feed").removeAttr("checked");
    $('.fileinput').fileinput("clear")    
    $(".modal__name-validation").addClass("visibility-hidden")
}