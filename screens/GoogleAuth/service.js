import * as Google from "expo-google-app-auth";
import { AsyncStorage } from "react-native";

const USER_NAME_KEY = "userName";
const USER_EMAIL_KEY = "userEmail";
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

export const getUserEmail = async callback => {
  return await AsyncStorage.getItem(USER_EMAIL_KEY, callback);
};

export const getUserPhotoUrl = async callback => {
  return await AsyncStorage.getItem(USER_PHOTO_URL_KEY, callback);
};

export const getUser = callback => {
  return AsyncStorage.multiGet(
    [USER_NAME_KEY, USER_EMAIL_KEY, USER_PHOTO_URL_KEY],
    callback
  );
};

export const storeUserData = (user, callback) => {
  return AsyncStorage.multiSet(
    [
      [USER_NAME_KEY, user.name],
      [USER_EMAIL_KEY, user.email],
      [USER_PHOTO_URL_KEY, user.photoUrl]
    ],
    callback
  );
};

export const signOutUser = (callback) => {
  return AsyncStorage.clear(callback);
}
