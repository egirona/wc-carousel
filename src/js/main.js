function Check_next()
    {
    var i = 0,
        items = document.getElementsByName("item"),
        itemsCount = items.length;
    for ( i ; i < itemsCount ; ++i )
        {
        if ( items[i].checked === true )
            {
            if ( i == itemsCount - 1 )
            {
                items[0].checked = true;
            } else {
                items[i + 1].checked = true;
            }
            break;
        }
    }
}
var initAuto = function ()
    {
        setInterval(function () { Check_next();}, 3000);
    };
var stopAuto = function ()
    {
        clearInterval(initAuto);
    };
initAuto();
function handleMouseOver() {
    stopAuto();
}
function handleMouseOut() {
    initAuto();
}
