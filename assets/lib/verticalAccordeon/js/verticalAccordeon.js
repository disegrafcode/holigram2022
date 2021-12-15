let objAnterior = undefined;
let closing = false;

function revealContent(obj)
{
    let target = obj;
    if(closing)
    {
        return;
    }
    if(!target.classList.contains("activeItemAcordeon"))
    {
        addClassInactiveItems();
        exitActiveItem(objAnterior);

        target.classList.remove("itemAccordeonInactive");
        target.classList.add("activeItemAcordeon");
        objAnterior = obj;
    }
}


function addClassInactiveItems()
{
    let parent = document.getElementById("accordeon1");
    let items = parent.querySelectorAll(".itemAccordeon");
    for(let i=0; i<items.length;i++)
    {
        items[i].classList.add("itemAccordeonInactive");
    }
}

function exitActiveItem(obj)
{
    if(obj!=undefined)
    {
        obj.classList.remove("activeItemAcordeon");
        obj.classList.add("exitAccordeonAnimation");

        /* END ANIMATION */
        obj.addEventListener("webkitAnimationEnd", function(){
            obj.classList.remove("exitAccordeonAnimation");
        });
        obj.addEventListener("animationend", function(){
            obj.classList.remove("exitAccordeonAnimation");
        });
        /* END ANIMATION */
    }
}

function restarAllItems()
{
    closing = true;
    let parent = document.getElementById("accordeon1");
    let items = parent.querySelectorAll(".itemAccordeon");
    for(let i=0; i<items.length;i++)
    {
        items[i].classList.remove("activeItemAcordeon");
        items[i].classList.remove("itemAccordeonInactive");
        items[i].classList.remove("exitAccordeonAnimation");
    }
    objAnterior = undefined;

    setTimeout(function () {
        closing = false;
    }, 1000);
}

