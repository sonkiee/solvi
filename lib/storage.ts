// import { MMKV } from "react-native-mmkv";
import AsyncStorage from "@react-native-async-storage/async-storage";

// export const storage = new MMKV();

const Storage = {
  set: async (key: string, value: string) =>
    await AsyncStorage.setItem(key, value),
  get: async (key: string) => await AsyncStorage.getItem(key),
  delete: async (key: string) => await AsyncStorage.removeItem(key),
};

export default Storage;
