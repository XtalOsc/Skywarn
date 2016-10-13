if(verbose){console.log('home.js sourced');};

var lock = new Auth0Lock( 'eGuXs5JRf4un0IWJq9isa2WtuyAyXeIR', 'skywarn.auth0.com');
// log out url, from Auth0
var logOutUrl = 'https://skywarn.auth0.com/v2/logout';

// basic controller
myApp.controller( 'home', [ '$scope', '$http', function( $scope, $http ){

  //run at controller load
  $scope.init = function(){
    if(verbose){console.log( 'in init' );};
    // check if a user's info is saved in localStorage
    if( JSON.parse( localStorage.getItem( 'userProfile' ) ) ){
      // if so, save userProfile as $scope.userProfile
      $scope.userProfile = JSON.parse( localStorage.getItem( 'userProfile' ) );
      if(verbose){console.log( 'loggedIn:', $scope.userProfile );};
      $scope.showUser = true;
      if( $scope.userProfile.email == 'admin@admin.com' ){
        $scope.isAdmin = true;
        $scope.isUser = false;
      }
      else{
        $scope.isAdmin = false;
        $scope.isUser = true;
      }
    }
    else{
      // if not, make sure we are logged out and empty
      emptyLocalStorage();
      $scope.showUser = false;
    }
  } // end init function

  $scope.logIn = function(){
    // call out logIn function from auth0.js
    console.log( 'in logIn' );
    lock.show( function( err, profile, token ) {
      if (err) {
        console.error( "auth error: ", err);
      } // end error
      else {
        // save token to localStorage
        localStorage.setItem( 'userToken', token );
        // save user profile to localStorage
        localStorage.setItem( 'userProfile', JSON.stringify( profile ) );
        // reload page because dirtyhaxorz
        location.reload();
      } // end no error
    }); //end lock.show
  }; // end scope.logIn

  $scope.logOut = function(){
    // call our logOutUrl
    $http({
      method:'GET',
      url: logOutUrl,
    }).then( function( data ){
      // if logged out OK
      if( data.data == 'OK' ){
        // empty localStorage
        emptyLocalStorage();
        $scope.showUser = false;
        $scope.isAdmin = false;
        $scope.isUser = false;
      }
    })
  }; // end scope.logIn

  // run init on controller load
  $scope.init();
}]); // end authController
var emptyLocalStorage = function(){
  localStorage.removeItem( 'userProfile' );
  localStorage.removeItem( 'userToken' );
}; // end emptyLocalStorage
