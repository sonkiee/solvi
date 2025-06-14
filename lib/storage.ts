import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

const Storage = {
  set: (key: string, value: string) => storage.set(key, value),
  get: (key: string) => storage.getString(key),
  delete: (key: string) => storage.delete(key),
};

export default Storage;
