app.controller('NativeAppCtrl', function($scope) {
    $scope.activeVidURL = "https://streamable.com/e/riwcgf";
    
    $scope.click = function(url){
        $scope.activeVidURL = url;
    }
    
    $scope.menuList = [
        {
            AppName: "Home",
            VidURL: "https://streamable.com/e/2r8esc"
        },
        {
            AppName: "Textbook",
            VidURL: "https://streamable.com/e/fs9dby"
        },
        {
            AppName: "Lesson Booking",
            VidURL: "https://streamable.com/e/sufizc"
        },
    ];

    $scope.otherVid = [
        {
            AppName: "Settings",
            VidURL: "https://streamable.com/e/t97bqx"
        },
    ];
});