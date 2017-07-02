rjsmApp.directive('navBarHeader', [function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            elm
                .on('mouseenter',function() {
                    $(".dropdown-a").addClass('active')
                })
                .on('mouseleave',function() {
                    $(".dropdown-a").removeClass('active')
                });
        }
    };
}]);