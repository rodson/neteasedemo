// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
})
.controller('AppCtrl', function($scope, $ionicScrollDelegate) {
  $scope.categories = [
    '直播',
    '时尚',
    '轻松一刻',
    '汽车',
    '段子',
    '军事',
    '深圳',
    '科技',
    '图片',
    '跟贴',
    '房产',
    '历史',
    '家居',
    '原创'
  ];

  $scope.selectedCategory = '直播';

  $scope.selectCategory = function(category) {
    $scope.selectedCategory = category;
    console.log($ionicScrollDelegate.getScrollPosition());
    var index = $scope.categories.indexOf(category);
    $ionicScrollDelegate.scrollTo(index * 600, 0, true);
  };

  $scope.news = [
    {
      avatar: "http://p4.qhimg.com/dr/250_500_/t01092852099fa42a8b.png",
      title: "常规赛",
      description: "马刺103-78老鹰",
      post: "http://img1.gtimg.com/14/1455/145557/14555786_200x200_0.jpg"
    },
    {
      avatar: "http://olpic.tgbusdata.cn/uploads/allimg/121221/50-121221104916459.jpg",
      title: "常规赛",
      description: "热火100-97灰熊",
      post: "http://img1.gtimg.com/14/1456/145615/14561559_200x200_0.jpg"
    },
    {
      avatar: "http://img2.imgtn.bdimg.com/it/u=2987752121,2499929832&fm=21&gp=0.jpg",
      title: "常规赛",
      description: "马刺109-87湖人",
      post: "http://img1.gtimg.com/14/1455/145514/14551413_200x200_0.jpg"
    }
  ];

});
