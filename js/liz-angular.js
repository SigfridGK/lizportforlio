var app = angular.module('myApp', [])
.config(function($sceDelegateProvider) {  
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. **.
        'https://streamable.com/**'
    ]);
});

app.controller('GKAppCtrl', function($scope) {
    $scope.activeVidURL = "https://streamable.com/e/8ukijh";

    $scope.click = function(url){
        $scope.activeVidURL = url;
    }

    $scope.menuList = [
        {
            AppName: "GK Home",
            VidURL: "https://streamable.com/e/8ukijh"
        },
        {
            AppName: "Pay Bills",
            VidURL: "https://streamable.com/e/3qurao"
        },
        {
            AppName: "Buy Load and Mobile Data",
            VidURL: "https://streamable.com/e/zi5wq1"
        },
        {
            AppName: "Pay Via QR",
            VidURL: "https://streamable.com/e/0hfi4q"
        },
        {
            AppName: "Buy Voucher",
            VidURL: "https://streamable.com/e/5vlqy6"
        },
        {
            AppName: "COOP Play To Save Lotto",
            VidURL: "https://streamable.com/e/9zr7la"
        },
        {
            AppName: "Payday Today",
            VidURL: "https://streamable.com/e/9creh0"
        },
    ];

    $scope.otherVid = [
        {
            AppName: "Settings",
            VidURL: "https://streamable.com/e/nxuu9o"
        },
    ];
});
