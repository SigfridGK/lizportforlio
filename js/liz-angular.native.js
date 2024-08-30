app.controller('NativeAppCtrl', function($scope) {
    $scope.activeVidURL = "https://streamable.com/e/7ufqyv";
    
    $scope.click = function(url){
        $scope.activeVidURL = url;
    }
    
    $scope.menuList = [
        {
            AppName: "Home",
            VidURL: "https://streamable.com/e/3p0kg2"
        },
        {
            AppName: "Textbook",
            VidURL: "https://streamable.com/e/go8bf3"
        },
        {
            AppName: "Lesson Booking",
            VidURL: "https://streamable.com/e/03i0we"
        },
    ];

    $scope.otherVid = [
        {
            AppName: "Settings",
            VidURL: "https://streamable.com/e/8bzsmj"
        },
    ];
});