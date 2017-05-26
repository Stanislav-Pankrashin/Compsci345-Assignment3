/* event listener listens to messages containing a target path, and then changes the iframe */
window.addEventListener('message', function(event){
    var path = event.data;

    $("#pageLinker").attr("src", path)
});

/* function which changes the iframe using the sidebar buttons*/
function sidebarButtonChanger(id){
    var path = "html/" + id + "_page.html";
    var header = id[0].toUpperCase() + id.slice(1) + " Page";

    $("#pageName").html(header);

    $("#pageLinker").attr("src", path);
}

/*Sets the page to the target path*/
function changePage(target_path){
    var path = target_path;

    /* can send a message to another window, which listens in onto the message and changes the iframe */
    window.parent.postMessage(target_path, '*');
}


/* Changes the visibility of an element, given its id */
function changeVisibility(target, sender){
    var element = $("#" + target);

    if (element.hasClass("hidden")){
        element.removeClass("hidden");
    }else{
        element.addClass("hidden");
    }

    /* if the caller object has a caret, swap the direction */
    var children = $("#" + sender).children();
    try {
        if(children.hasClass("glyphicon-chevron-down")){
            children.removeClass("glyphicon-chevron-down");
            children.addClass("glyphicon-chevron-up");

        }else if (children.hasClass("glyphicon-chevron-up")){
            children.removeClass("glyphicon-chevron-up");
            children.addClass("glyphicon-chevron-down");
        }
    } catch (error) {
        
    }
}

function onClickTest(){
    console.log("Clicked!");
}