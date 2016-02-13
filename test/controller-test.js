describe('unit test for firstController', function() {
  var $scope;
  //find and load myapp module from files section of karma.conf.js
  beforeEach(module('myapp'));

  beforeEach(inject(function($rootScope, $controller) {
    //creating scope
    $scope = $rootScope.$new();
    //instantiating firstController while passing $scope as argument/dependencies
    $controller('firstController', {$scope: $scope});
  }));

  it('to test the value of title', function() {
    console.log($scope.title);
    expect($scope.title).toBe('World !');
  });

});