var app = angular.module('flapperNews', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainController'
    });

  $urlRouterProvider.otherwise('home');
}]);

app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return 0;
}]);

app.controller('MainController', [
  '$scope',
  'posts',

  function($scope, posts){

    // $scope.posts = posts.posts;

    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ];

    $scope.addPost = function(){

      if (!$scope.title || $scope.title === '') { return; }

      $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0
      });

      $scope.title = '';
      $scope.link = '';
    }

    $scope.incrementUpVotes = function(post) {
      post.upvotes += 1;
    }

  }

]);
