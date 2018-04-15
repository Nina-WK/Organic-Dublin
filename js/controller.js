 angular.module('OrganicControllers', [])
    .controller('HomeController', function($scope) {
    	$scope.carouselInterval = 3000;
    	$scope.slides = [
    {
      image: 'pics/photo1.jpeg',
      cap: 'Caption goes here'
    },
    {
      image: 'pics/photo2.jpeg',
      cap: 'Caption goes here'
    },
    {
      image: 'pics/photo3.jpeg',
      cap: 'Caption goes here'
    },
    {
      image: 'pics/photo4.jpg',
      cap: 'Caption goes here'
    }
  ];
});
