app.controller('PdyAppCtrl', function($scope) {
    $scope.activeVidURL = "https://streamable.com/e/jv82u9";

    $scope.click = function(url){
        $scope.activeVidURL = url;
    }

    $scope.menuList = [
        {
            AppName: "Payday Home",
            VidURL: "https://streamable.com/e/jv82u9"
        },
        {
            AppName: "Request Amount",
            VidURL: "https://streamable.com/e/y5c3vy"
        },
        {
            AppName: "Bank Transfer",
            VidURL: "https://streamable.com/e/y5c3vy"
        },
        {
            AppName: "Services",
            VidURL: "https://streamable.com/e/a34swa"
        }
    ];

    $scope.otherVid = [
        {
            AppName: "Complete Bank Transfer and Chat Support",
            VidURL: "https://streamable.com/e/k143rr"
        },
        {
            AppName: "Paybills",
            VidURL: "https://streamable.com/e/roucjj"
        },
    ];
});