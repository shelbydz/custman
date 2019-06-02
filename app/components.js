agular.module('components', [])
  .component('sideNav', {
      templateUrl: '/static/app/views/sideNav.tpt',
      controller: 'SideNavController'
  })
  .component('homeView', {
      templateUrl: '/static/app/views/home.tpt',
      controller: 'HomeViewController'
  })
;
