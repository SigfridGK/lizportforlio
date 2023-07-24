app.controller('GBAppCtrl', function($scope) {
    $scope.activeVidURL = "https://streamable.com/e/o2gw19";

    $scope.click = function(url){
        $scope.activeVidURL = url;
    }

    $scope.texstt1 = false;
    $scope.click1 = function(){
        $scope.texstt1 = $scope.texstt1 == true ? false : true;
    }

    $scope.menuList = [
        {
            AppName: "Gift Card Inventory",
            VidURL: "https://streamable.com/e/h4nokv"
        },
        {
            AppName: "Merchants",
            VidURL: "https://streamable.com/e/u6gcaf"
        },
        {
            AppName: "Merchant Details",
            VidURL: "https://streamable.com/e/28uzu1"
        },
        {
            AppName: "Nearest Branches",
            VidURL: "https://streamable.com/e/mmxxii"
        },
        {
            AppName: "Universal Search",
            VidURL: "https://streamable.com/e/njxifs"
        },
    ];

    $scope.otherVid = [
        {
            AppName: "Settings",
            VidURL: "https://streamable.com/e/odz35i"
        },
    ];
});
