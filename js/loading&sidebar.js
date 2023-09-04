

// $(document).ready(function () {
//     $(".sk-folding-cube").fadeOut(50, function () {
//         $("#loading").fadeOut(50, function () {
//             $("body").css("overflow", "auto");
//         })
//     })
    
// });



let sideBarInnerWidth = $(".sideBar-inner").innerWidth();
$("#sideBar").css("left", -sideBarInnerWidth)
$("#close-open").click(function(){
    

    if($("#sideBar").css("left") == "0px")
    {
        $("#sideBar").animate({left:-sideBarInnerWidth}, 700, function(){
            $(".sideBar-linkes").slideUp(300);
        });
        $(".fa-xmark").addClass("d-none");
        $(".fa-bars").removeClass("d-none");
    }
    else
    {
        $("#sideBar").animate({left:'0px'}, 700, function(){
            $(".sideBar-linkes").slideDown(300);
        })
        $(".fa-xmark").removeClass("d-none");
        $(".fa-bars").addClass("d-none");
    }
});