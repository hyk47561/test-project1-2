var config = {
    apiKey: "AIzaSyBhrWGWF88ZKbxJT8j_UncUOYa2xfcE-3o",
    authDomain: "project1-714e4.firebaseapp.com",
    databaseURL: "https://project1-714e4.firebaseio.com",
    projectId: "project1-714e4",
    storageBucket: "project1-714e4.appspot.com",
    messagingSenderId: "254167247661"
};



firebase.initializeApp(config);

var redirectUrl = "index.html";
var authResult = "index.html";

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      var token = result.credential.accessToken;
    }
    var user = result.user;
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });


var uiConfig = {
    

    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        
        {provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
         requireDisplayName: true
          },
        
        {provider: firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
          },  
    ],
   
    
    tosUrl: 'index.html',

    privacyPolicyUrl: function () {
        window.location.assign('index.html');
    }
};

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', uiConfig);

if (ui.isPendingRedirect()) {
    ui.start('#firebaseui-auth-container', uiConfig);
}

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,

            authMethod: 'https://accounts.google.com',

            clientId: 'xxxxxxxxxxxxxxxxx.apps.googleusercontent.com'
        },

        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,

            signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,

            forceSameDevice: false,

        

            emailLinkSignIn: {

              url: 'index.html',

              dynamicLinkDomain: 'index.html',

              handleCodeInApp: true,

              iOS: {
                  bundleId: 'com.example.ios'
              },

              android: {
                  packageName: 'com.example.android',
                  installApp: true,
                  minimumVersion: '12'
              }
          }
        },
        { provider: firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID }
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
});

// anonymousUser.linkWithCredential(permanentCredential);

firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'index.html'; //After successful login, user will be redirected to home.html
  }
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });

var user = firebase.auth().currentUser;

  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });

  var user = firebase.auth().currentUser;
  var name, email, uid, emailVerified;
  
  if (user != null) {
    name = user.displayName;
    email = user.email;
    emailVerified = user.emailVerified;
    uid = user.uid;  
  }  

  var user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
  });
}

ui.disableAutoSignIn();

