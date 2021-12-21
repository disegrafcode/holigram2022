function showDetalleItemServicios(obj) {
    if (obj.classList.contains('itemServiciosActive')) {
        obj.classList.remove("itemServiciosActive");
        obj.classList.add("itemServiciosSalida");
        /* END ANIMATION */
        obj.addEventListener("webkitAnimationEnd", function () {
            obj.classList.remove("itemServiciosSalida");
        });
        obj.addEventListener("animationend", function () {
            obj.classList.remove("itemServiciosSalida");
        });
        /* END ANIMATION */
    }
    else {
        obj.classList.add("itemServiciosActive");
    }

}