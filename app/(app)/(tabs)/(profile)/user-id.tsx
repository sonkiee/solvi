import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const UserIDScreen = () => {
  const baseName = "sonkey"; // your static name
  const [userId, setUserId] = useState(`${baseName}_${generateRandomPart()}`);

  function generateRandomPart() {
    return Math.random().toString(36).substring(2, 7); // short random string (5 chars)
  }

  const genId = () => {
    const newUserId = `${baseName}_${generateRandomPart()}`;
    setUserId(newUserId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Unique User ID</Text>

      <Text style={styles.description}>
        This is your unique identifier in the Olvi system. You can share this ID
        with others to receive payments.
      </Text>

      <View style={styles.userIdBox}>
        <Text style={styles.userIdText}>{userId}</Text>
      </View>

      <Text style={styles.note}>
        Your user ID is automatically generated using your name and a unique
        identifier. It cannot be manually changed, but you may regenerate it if
        needed.
      </Text>

      <Button title="Regenerate User ID" onPress={genId} />
    </View>
  );
};

export default UserIDScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#fff",
    margin: 6,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: "#444",
    marginBottom: 20,
  },
  userIdBox: {
    backgroundColor: "#3A1078",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  userIdText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  note: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
