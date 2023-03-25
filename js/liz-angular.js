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
    $scope.activeVidURL = "https://streamable.com/e/gup0a8";

    $scope.click = function(url){
        $scope.activeVidURL = url;
    }

    $scope.menuList = [
        {
            AppName: "Buy Load & Pay Bills",
            VidURL: "https://streamable.com/e/53pmbb"
        },
        {
            AppName: "Pay Via QR",
            VidURL: "https://streamable.com/e/hvzesv"
        },
        {
            AppName: "Buy Voucher",
            VidURL: "https://streamable.com/e/4xmy5x"
        },
        // {
        //     AppName: "COOP and Apply COOP Loan",
        //     VidURL: ""
        // },
        {
            AppName: "GK Store",
            VidURL: "https://streamable.com/e/dzliit"
        },
        {
            AppName: "COOP Play To Save Lotto",
            VidURL: "https://streamable.com/e/5t4f9k"
        },
        // {
        //     AppName: "Free SMS",
        //     VidURL: ""
        // },
        // {
        //     AppName: "Payday Today",
        //     VidURL: ""
        // },
        // {
        //     AppName: "RFID Voucher Modern Jeep",
        //     VidURL: ""
        // },
        // {
        //     AppName: "NL RFID Reloading",
        //     VidURL: ""
        // },
        // {
        //     AppName: "E-Games",
        //     VidURL: ""
        // },
        {
            AppName: "GK Earn & PPl's Jeep Unli Ride",
            VidURL: "https://streamable.com/e/8if2lk"
        },
        
    ];

    $scope.otherVid = [
        {
            AppName: "QR Complete Transaction & View History",
            VidURL: "https://streamable.com/e/vjsmqv"
        },
        {
            AppName: "GK Support Chat",
            VidURL: "https://streamable.com/e/rabjq6"
        },
        {
            AppName: "Settings",
            VidURL: "https://streamable.com/e/a4xlk0"
        },
    ];
});