$(document).ready(function(){

    pages = ["#starting-interface","#character-interface", "#trolling-interface"];

    $(".advance , .continue").on("click", buttonRender);
    $(".advance1 , .continue").on("click", buttonRender1);
    $(".advance2 , .continue").on("click", buttonRender2);
    $(".nav").on("click", showSideTarget);
    $(".blurb-hold").on("click", showParagraph)
    $(".showtext").on("click", showtext) 
    $(".showtext").hover(changeMouseType)

    //these functions work, but seem too long for me to be satisfied with them
    //  it seems like its too much work for what im doing. (I'm new!)
    //  there's also a bit of a challenge with specificity here. I feel like 
    //  if things get a little bigger they might break if i get sloppy. 
    //  I'll look at these after I get some content in and refactor some stuff.

    var video = document.getElementById("myVideo");

    document.getElementById("myAudio").volume = 0.2;


    function hideAll(){
        for (var i = 0; i < pages.length; i++){
            $(pages[i]).hide();
        }
    };

    function showSideTarget(){
        hideAll();
        //this nicely gets the text from my li-classes
        var liClass = $(this).attr("class").split(/\s+/)[0]

        switch(liClass){
            case "li-one":
                $(pages[0]).show();
                break;
            
            case "li-two":
                $(pages[1]).show();
                break;
        };

    };

    $(pages[1]).hide();
    $(pages[2]).hide();
    function buttonRender(){
        var currentPage = $(this).closest("section").attr("id");

        switch(currentPage) {
            case "starting-interface":
                $(pages[0]).hide();
                $(pages[1]).show();
                break;

            case "character-interface":
                $(pages[1]).hide();
                $(pages[1]).show();
                break;
        }

    };

    function buttonRender1(){
        var currentPage = $(this).closest("section").attr("id");

        switch(currentPage) {
            case "character-interface":
                $(pages[1]).hide();
                $(pages[0]).show();
                break;
        }

    };

    function buttonRender2(){
        var currentPage = $(this).closest("section").attr("id");

        switch(currentPage) {
            case "character-interface":
                $(pages[1]).hide();
                $(pages[2]).show();
                break;

            case "starting-interface":
                $(pages[0]).hide();
                $(pages[2]).show();
                break;
        }

    };

    function showParagraph(){
        $(this).children().slideToggle();
        $(this).children(".btn").addClass("btn-info");  
    };

    $("h4").hide();
    function showtext(){
        $("h4").show();
        document.body.style.cursor = "default";
    }
    
    function changeMouseType(){
        document.body.style.cursor = "pointer";
    }
});

