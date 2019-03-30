var config = {
    apiKey: "AIzaSyBhrWGWF88ZKbxJT8j_UncUOYa2xfcE-3o",
    authDomain: "project1-714e4.firebaseapp.com",
    databaseURL: "https://project1-714e4.firebaseio.com",
    projectId: "project1-714e4",
    storageBucket: "project1-714e4.appspot.com",
    messagingSenderId: "254167247661"
};

var uiConfig = {
  signInSuccessUrl: 'index.html',
  signInOptions: [
 
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],

  tosUrl: '<your-tos-url>',

  privacyPolicyUrl: function() {
    window.location.assign('<your-privacy-policy-url>');
  }
};


var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', uiConfig);

if (ui.isPendingRedirect()) {
  ui.start('#firebaseui-auth-container', uiConfig);
}

initApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;
      user.getIdToken().then(function(accessToken) {
        document.getElementById('sign-in-status').textContent = 'Signed in';
        document.getElementById('sign-in').textContent = 'Sign out';
        document.getElementById('account-details').textContent = JSON.stringify({
          displayName: displayName,
          email: email,
          emailVerified: emailVerified,
          phoneNumber: phoneNumber,
          photoURL: photoURL,
          uid: uid,
          accessToken: accessToken,
          providerData: providerData
        }, null, '  ');
      });
    } else {
      // User is signed out.
      document.getElementById('sign-in-status').textContent = 'Signed out';
      document.getElementById('sign-in').textContent = 'Sign in';
      document.getElementById('account-details').textContent = 'null';
    }
  }, function(error) {
    console.log(error);
  });
};

window.addEventListener('load', function() {
  initApp()
});
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
 
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,

      authMethod: 'https://accounts.google.com',
    
      clientId: 'xxxxxxxxxxxxxxxxx.apps.googleusercontent.com'
    },
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],

  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
});
ui.disableAutoSignIn();

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      forceSameDevice: false,
      emailLinkSignIn: function() {
        return {
          url: 'https://www.example.com/completeSignIn?showPromo=1234',

          dynamicLinkDomain: 'example.page.link',
 
          handleCodeInApp: true,

          iOS: {
            bundleId: 'com.example.ios'
          },

          android: {
            packageName: 'com.example.android',
            installApp: true,
            minimumVersion: '12'
          }
        };
      }
    }
  ]
});

if (ui.isPendingRedirect()) {
  ui.start('#firebaseui-auth-container', uiConfig);
}

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    }
  ]
});

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      var user = authResult.user;
      var credential = authResult.credential;
      var isNewUser = authResult.additionalUserInfo.isNewUser;
      var providerId = authResult.additionalUserInfo.providerId;
      var operationType = authResult.operationType;
    
    },
    signInFailure: function(error) {
      return handleUIError(error);
    },
    uiShown: function() {
      document.getElementById('loader').style.display = 'none';
    }
  },
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,

  queryParameterForWidgetMode: 'mode',

  queryParameterForSignInSuccessUrl: 'index.html',

  signInFlow: 'popup',
  signInSuccessUrl: 'index.html',
  signInOptions: [
 
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,

      requireDisplayName: true
    },
    
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],

  tosUrl: '<your-tos-url>',

  privacyPolicyUrl: function() {
    window.location.assign('<your-privacy-policy-url>');
  }
};

var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);








