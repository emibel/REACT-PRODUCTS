// import * as addGoogleUser from './addGoogleUser';
// import * as addFacebookUser from './addFacebookUser';
import * as removeSession from './removeSession';
import * as fetchSignIn from './fetchSignIn';
import * as fetchSignUp from './fetchSignUp';
import * as signOut from './signOut';

export default {
  // ...addGoogleUser,
  // ...addFacebookUser,
  ...fetchSignIn,
  ...fetchSignUp,
  ...signOut,
  ...removeSession,
  };
