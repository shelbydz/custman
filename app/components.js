angular.module('components', [])
  .directive('sideNav', function () {
  return{
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function ($scope, $element) {
      },
      template: '<p>Side Nav</p>',
      replace: true
  }
});
