import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Upload = ({
  onUpload,
  title,
  desc,
}: {
  onUpload?: (uri: string) => void;
  title: string;
  desc: string;
}) => {
  const [image, setImage] = useState<string | null>(null);

  const requestPermissions = async () => {
    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
    // const mediaStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
    return cameraStatus.granted;
    // && mediaStatus.granted;
  };

  const pickImageFromLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets?.length) {
      setImage(result.assets[0].uri);
      onUpload?.(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets?.length) {
      setImage(result.assets[0].uri);
      onUpload?.(result.assets[0].uri);
    }
  };

  const chooseImage = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) {
      alert("Permission required to access camera and media library.");
      return;
    }

    Alert.alert("Upload Proof", "Choose an option", [
      {
        text: "Take Photo",
        onPress: takePhoto,
      },
      {
        text: "Choose from Library",
        onPress: pickImageFromLibrary,
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title ?? "Upload Proof"}</Text>
      <TouchableOpacity style={styles.uploadInner} onPress={chooseImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.imagePreview} />
        ) : (
          <>
            <AntDesign name="plus" size={24} color="#888" />
            <Text style={styles.uploadText}>{desc ?? "Select an image"}</Text>
          </>
        )}
      </TouchableOpacity>

      <Text style={styles.uploadRequirements}>
        • Minimum size: 800 x 800 pixels{"\n"}• Aspect Ratio: 1:1{"\n"}•
        Formats: JPG, PNG{"\n"}• Maximum File Size: 6MB
      </Text>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  uploadInner: {
    height: 200,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  uploadText: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
  uploadRequirements: {
    marginTop: 12,
    fontSize: 12,
    color: "#777",
    lineHeight: 18,
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "cover",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
    textTransform: "capitalize",
    marginLeft: 8,
  },
});
