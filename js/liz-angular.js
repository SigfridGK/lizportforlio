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
    $scope.activeVidURL = "https://streamable.com/e/gxg7xc";

    $scope.click = function(url){
        $scope.activeVidURL = url;
    }

    $scope.menuList = [
        {
            AppName: "GK Home",
            VidURL: "https://streamable.com/e/gxg7xc"
        },
        {
            AppName: "Pay Bills",
            VidURL: "https://streamable.com/e/w0mxuj"
        },
        {
            AppName: "Buy Load and Mobile Data",
            VidURL: "https://streamable.com/e/w31kld"
        },
        {
            AppName: "Pay Via QR",
            VidURL: "https://streamable.com/e/y3qp3q"
        },
        {
            AppName: "Buy Voucher",
            VidURL: "https://streamable.com/e/2sermy"
        },
        {
            AppName: "COOP Play To Save Lotto",
            VidURL: "https://streamable.com/e/108vc1"
        },
        {
            AppName: "Payday Today",
            VidURL: "https://streamable.com/e/w34s3p"
        },
    ];

    $scope.otherVid = [
        {
            AppName: "Settings",
            VidURL: "https://streamable.com/e/3bi0vc"
        },
    ];
});
