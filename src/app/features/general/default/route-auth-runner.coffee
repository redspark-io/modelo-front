angular.module "modeloBase"
  .run ($rootScope, routeAuth) ->
    routeAuth.updateUserInfo()

    $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromState, fromParams) ->
      routeAuth.verifyRouteAccess(toState, event)