app.controller('PdyAppCtrl', function($scope) {
    $scope.activeVidURL = "https://streamable.com/e/bfhx6h";

    $scope.click = function(url){
        $scope.activeVidURL = url;
    }

    $scope.menuList = [
        {
            AppName: "Payday Home",
            VidURL: "https://streamable.com/e/e23pr3"
        },
        {
            AppName: "Request Amount",
            VidURL: "https://streamable.com/e/wcpr4p"
        },
        {
            AppName: "Bank Transfer",
            VidURL: "https://streamable.com/e/v48pc2"
        },
        {
            AppName: "Services",
            VidURL: "https://streamable.com/e/87s36z"
        }
    ];

    $scope.otherVid = [
        {
            AppName: "Complete Bank Transfer and Chat Support",
            VidURL: "https://streamable.com/e/k143rr"
        },
    ];
});