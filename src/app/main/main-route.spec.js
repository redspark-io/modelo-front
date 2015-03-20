'use strict';

describe('route', function(){
  var scope, $rootScope, $state, $injector, myServiceMock, state = 'home';


  beforeEach(module('ui.router'));
  beforeEach(module('modeloFront.templates'));
  beforeEach(module('modeloFront.app.main'));

  beforeEach(function() {

    //module('myApp', function($provide) {
    //  $provide.value('myService', myServiceMock = {});
    //});
    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {
      
      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;

      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      //$templateCache.put('template.html', '');
    })

  });

  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/');
  });

  it('should resolve data', function() {
    //myServiceMock.findAll = jasmine.createSpy('findAll').andReturn('findAll');

    $state.go(state);
    $rootScope.$digest();
    expect($state.current.name).toBe(state);

    // Call invoke to inject dependencies and run function
    //expect($injector.invoke($state.current.resolve.data)).toBe('findAll');
  });
  

});
