app.controller('PdyAppCtrl', function($scope) {
    $scope.activeVidURL = "https://streamable.com/e/sfa0x9";

    $scope.click = function(url){
        $scope.activeVidURL = url;
    }

    $scope.menuList = [
        {
            AppName: "Payday Home",
            VidURL: "https://streamable.com/e/sfa0x9"
        },
        {
            AppName: "Request Amount",
            VidURL: "https://streamable.com/e/89xj8t"
        },
        {
            AppName: "Bank Transfer",
            VidURL: "https://streamable.com/e/n421o6"
        },
        {
            AppName: "Services",
            VidURL: "https://streamable.com/e/rncj0o"
        }
    ];

    $scope.otherVid = [
        {
            AppName: "Chat Support",
            VidURL: "https://streamable.com/e/q1zwc5"
        },
        {
            AppName: "Paybills",
            VidURL: "https://streamable.com/e/nmjuog"
        },
    ];
});