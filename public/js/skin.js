jQuery(document).ready(function () {
    jQuery("#big_carousel").owlCarousel({
        slideSpeed: 1500,
        paginationSpeed: 600,
        items: 5,
        autoPlay: true,
        stopOnHover: true,
        addClassActive: true,
        autoHeight: true,
        responsive: true,
        navigation: false,
        navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        pagination: true,
        paginationNumbers: false
    });
});

jQuery(document).ready(function () {
    jQuery("#ticker").liScroll({travelocity: 0.07});
});