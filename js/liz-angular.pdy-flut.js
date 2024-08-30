app.controller('PdyFlutterAppCtrl', function($scope) {
    $scope.activeVidURL = "https://streamable.com/e/bfhx6h";
    
    $scope.click = function(url){
        $scope.activeVidURL = url;
    }

    $scope.menuList = [
        {
            AppName: "Home Payday",
            VidURL: "https://streamable.com/e/haekri"
        },
        {
            AppName: "Pay Via QR",
            VidURL: "https://streamable.com/e/aeiusb"
        },
        {
            AppName: "Voucher Invetory",
            VidURL: "https://streamable.com/e/hticzz"
        },
        {
            AppName: "Pay Bills",
            VidURL: "https://streamable.com/e/qyel5j"
        },
        {
            AppName: "Request Amount",
            VidURL: "https://streamable.com/e/tpolux"
        },
        {
            AppName: "Buy Load",
            VidURL: "https://streamable.com/e/i86gj3"
        },
        {
            AppName: "Peoples Jeep Unli Ride",
            VidURL: "https://streamable.com/e/8if2lk"
        },
        
    ];

    $scope.otherVid = [
        {
            AppName: "Transactions and Inventory",
            VidURL: "https://streamable.com/e/nrmsi1"
        },
        // {
        //     AppName: "GK Support Chat",
        //     VidURL: "https://streamable.com/e/rabjq6"
        // },
    ];
});