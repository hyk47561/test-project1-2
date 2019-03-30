var config = {
    apiKey: "AIzaSyBhrWGWF88ZKbxJT8j_UncUOYa2xfcE-3o",
    authDomain: "project1-714e4.firebaseapp.com",
    databaseURL: "https://project1-714e4.firebaseio.com",
    projectId: "project1-714e4",
    storageBucket: "project1-714e4.appspot.com",
    messagingSenderId: "254167247661"
};



firebase.initializeApp(config);


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
        
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],

    tosUrl: '<your-tos-url>',

    privacyPolicyUrl: function () {
        window.location.assign('<your-privacy-policy-url>');
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

        

            emailLinkSignIn: function () {
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
        },
        { provider: firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID }
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
});

anonymousUser.linkWithCredential(permanentCredential);

var data = null;
var anonymousUser = firebase.auth().currentUser;
ui.start('#firebaseui-auth-container', {
  autoUpgradeAnonymousUsers: true,
  signInSuccessUrl: 'index.html',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      return true;
    },
    signInFailure: function(error) {
      if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
        return Promise.resolve();
      }
      var cred = error.credential;
      var app = firebase.app();
      return app.database().ref('users/' + firebase.auth().currentUser.uid)
          .once('value')
          .then(function(snapshot) {
            data = snapshot.val();
            return firebase.auth().signInWithCredential(cred);
          })
          .then(function(user) {
            return app.database().ref('users/' + user.uid).set(data);
          })
          .then(function() {
            return anonymousUser.delete();
          }).then(function() {
            data = null;
            window.location.assign('index.html');
          });

    }
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

var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
var user = firebase.auth().currentUser;
var newPassword = getASecureRandomPassword();

user.updatePassword(newPassword).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});



ui.disableAutoSignIn();