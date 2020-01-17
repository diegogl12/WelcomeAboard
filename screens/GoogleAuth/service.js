import * as Google from "expo-google-app-auth";
const signInWithGoogleAsync = async () => {
  return await Google.logInAsync({
    androidClientId:
      "84015056402-3u4ucftufkl0ahnpp3jjse0k0753ujn3.apps.googleusercontent.com",
    iosClientId:
      "84015056402-un96g8h4hotcbeq1f1g8sq01o8vvc943.apps.googleusercontent.com",
    scopes: ["profile", "email"]
  });
};
export default signInWithGoogleAsync;
