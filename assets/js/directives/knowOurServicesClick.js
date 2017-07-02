rjsmApp.directive('knowOurServicesDir', [function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            elm
                .on('click',function() {
                    icon_elem = $("#" + elm[0].id + " .expand-icon");
                    if (elm[0].id == "know-home-service") {
                        elem = $("#home-service-expanded");
                        img_src = $("#" + elm[0].id + " .expand-icon").attr("src");
                    } else if (elm[0].id == "know-corporate-service") {
                        elem = $("#corporate-service-expanded");
                        img_src = $("#" + elm[0].id + " .expand-icon").attr("src");
                    }
                    console.log(icon_elem);
                    if (img_src == "assets/images/expand_icon.svg") {
                        elem.css("display", "block");
                        icon_elem.attr("src", "assets/images/collapse_icon.svg");
                    } else {
                        elem.css("display", "none");
                        icon_elem.attr("src", "assets/images/expand_icon.svg");
                    }
                })
        }
    };
}]);