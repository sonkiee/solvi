import { AntDesign } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Upload = ({
  onUpload,
  title,
  desc,
  qr,
}: {
  onUpload?: (uri: string) => void;
  title: string;
  desc?: string;
  qr?: boolean;
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [showScanner, setShowScanner] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const requestPermissions = async () => {
    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
    return cameraStatus.granted;
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

    const options = [
      { text: "Take Photo", onPress: takePhoto },
      { text: "Choose from Library", onPress: pickImageFromLibrary },
    ];

    if (qr) {
      options.push({
        text: "Scan Code",
        onPress: () => setShowScanner(true),
      });
    }

    options.push({ text: "Cancel", style: "cancel" });

    Alert.alert("Upload Proof", "Choose an option", options);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

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

      {/* QR Scanner Modal */}
      <Modal visible={showScanner} animationType="fade">
        <View style={styles.scannerContainer}>
          <CameraView
            style={StyleSheet.absoluteFill}
            onBarcodeScanned={(data) => console.log(data)}
            barcodeScannerSettings={{
              barcodeTypes: ["qr"],
            }}
          />
          <TouchableOpacity
            style={styles.closeScanner}
            onPress={() => setShowScanner(false)}
          >
            <Text style={styles.closeText}>Close Scanner</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  scannerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#000",
  },
  closeScanner: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 40,
  },
  closeText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
});
