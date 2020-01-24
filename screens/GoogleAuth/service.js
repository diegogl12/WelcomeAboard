import * as Google from "expo-google-app-auth";

const USER_NAME_KEY = "userName";
const USER_PHOTO_URL_KEY = "userPhotoUrl";

export const signInWithGoogleAsync = async () => {
  return await Google.logInAsync({
    androidClientId:
      "84015056402-3u4ucftufkl0ahnpp3jjse0k0753ujn3.apps.googleusercontent.com",
    iosClientId:
      "84015056402-un96g8h4hotcbeq1f1g8sq01o8vvc943.apps.googleusercontent.com",
    scopes: ["profile", "email"]
  });
};

export const getUserName = async callback => {
  return await AsyncStorage.getItem(USER_NAME_KEY, callback);
};

export const getUserPhotoUrl = async callback => {
  return await AsyncStorage.getItem(USER_PHOTO_URL_KEY, callback);
};

export const storeUserData = async (user, callback) => {
  return await AsyncStorage.setItem("userName", user.name, () => {
    AsyncStorage.setItem("userPhotoUrl", user.photoUrl, () => {
      if (callback) {
        callback(user);
      }
    });
  });
};
