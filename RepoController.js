(function() {

  var app = angular.module("githubViewer");

  var RepoController = function($scope, github, $routeParams) {

    var onRepoInfoComplete = function(data) {
      $scope.RepoInfo = data;
      github.getRepoCollaborators($scope.username, $scope.reponame).then(onRepoCollaborators, onError);
    };

    var onRepoCollaborators = function(data) {
      $scope.repoCollaborators = data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the data.";
    };

    $scope.username = $routeParams.username
    $scope.reponame = $routeParams.reponame;
    github.getRepoInfo($scope.username, $scope.reponame).then(onRepoInfoComplete, onError);

  };

  app.controller("RepoController", RepoController);

}());