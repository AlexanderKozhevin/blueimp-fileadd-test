var app = angular.module('todoApp', ['blueimp.fileupload']);

app.controller('TodoListController', function($scope) {
  $scope.yourName = 'hacky'
  $scope.options = {
    autoUpload: false,
    method: 'POST',
    formData: [],
    maxChunkSize: 1000000,
    singleFileUploads: true,
    sequentialUploads: true,
    limitMultiFileUploads: 1,
    xhrFields: {
      withCredentials: false
    }
  }
  $scope.$on('fileuploadadd', function(){
    alert('file has been added')
    console.log('file added')
  })


});

$( document ).ready(function() {
    console.log( "ready!" );
      angular.bootstrap(document.body, ['todoApp']);

});
