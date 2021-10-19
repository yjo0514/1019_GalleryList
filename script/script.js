$(function(){


    /* div#sideGNBLink 시작(사이드 GNB링크아이콘) */    
    let chkToF = true;
    $("#sideGNBLink").click(function() {
        $(this).toggleClass("applied");

        // $("#sideMenuBG").fadeToggle(250);
        // if (chkToF) {
        //     $("#sideMenuArea").animate({"right": "0"}, 250);
        //     chkToF = false;
        // } else {
        //     $("#sideMenuArea").animate({"right": "-50%"}, 250);
        //     chkToF = true;
        // }
    });
    /* div#sideGNBLink 끝(사이드 GNB링크아이콘) */
});