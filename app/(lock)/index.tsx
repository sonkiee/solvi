import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const Lock = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Lock Screen</Text>

      <Button
        title="Unlock"
        onPress={() => {
          router.replace("/home");
        }}
      />
    </View>
  );
};
export default Lock;
