app.controller('PdyAppCtrl', function($scope) {
    $scope.activeVidURL = "https://streamable.com/e/869eqv";

    $scope.click = function(url){
        $scope.activeVidURL = url;
    }

    $scope.menuList = [
        {
            AppName: "Payday Home",
            VidURL: "https://streamable.com/e/869eqv"
        },
        {
            AppName: "Request Amount",
            VidURL: "https://streamable.com/e/8a2twp"
        },
        {
            AppName: "Bank Transfer",
            VidURL: "https://streamable.com/e/txu4lc"
        },
        {
            AppName: "Services",
            VidURL: "https://streamable.com/e/o5qzc5"
        }
    ];

    $scope.otherVid = [
        {
            AppName: "Chat Support",
            VidURL: "https://streamable.com/e/s0pn7h"
        },
        {
            AppName: "Paybills",
            VidURL: "https://streamable.com/e/f58qq1"
        },
    ];
});