function revealContent(obj)
{
    addClassInactiveItems();
    let target = obj;
    target.classList.remove("itemAccordeonInactive");
    target.classList.add("activeItemAcordeon");
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
