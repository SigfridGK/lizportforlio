app.controller('PdyFlutterAppCtrl', function($scope) {
    $scope.activeVidURL = "";

    $scope.click = function(url){
        $scope.activeVidURL = url;
    }

    $scope.menuList = [
        {
            AppName: "Buy Load",
            VidURL: "https://streamable.com/e/gup0a8"
        },
        {
            AppName: "Pay Via QR",
            VidURL: "https://streamable.com/e/hvzesv"
        },
        {
            AppName: "Pay Bills",
            VidURL: ""
        },
        {
            AppName: "Buy Voucher",
            VidURL: ""
        },
        {
            AppName: "COOP and Apply COOP Loan",
            VidURL: ""
        },
        {
            AppName: "GK Store",
            VidURL: ""
        },
        {
            AppName: "COOP Play To Save Lotto",
            VidURL: ""
        },
        {
            AppName: "Free SMS",
            VidURL: ""
        },
        {
            AppName: "Payday Today",
            VidURL: ""
        },
        {
            AppName: "RFID Voucher Modern Jeep",
            VidURL: ""
        },
        {
            AppName: "NL RFID Reloading",
            VidURL: ""
        },
        {
            AppName: "GK Earn",
            VidURL: ""
        },
        {
            AppName: "E-Games",
            VidURL: ""
        },
        {
            AppName: "Peoples Jeep Unli Ride",
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
    ];
});