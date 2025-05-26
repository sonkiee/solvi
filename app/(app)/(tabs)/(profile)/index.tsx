import { Containing } from "@/components/Reusables";
import Container from "@/components/ui/Container";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  const user = {
    name: "Sonkey Lala",
    email: "sonkey@example.com",
    // avatar: require("@/assets/images/avatar.png"),
  };

  const abbr = user.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  console.log(abbr);
  return (
    <Container top={1}>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.container}>
          <Text>ProfileScreen</Text>
          <Containing>
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <View style={styles.avatar}></View>

              <View>
                <Text style={styles.nameText}> sonkey lala</Text>
                <Text style={styles.emailText}> email </Text>
              </View>
            </View>
          </Containing>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  nameText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#aaa",
    textTransform: "capitalize",
  },
  emailText: {},
  avatar: {
    borderRadius: 9999,
    borderWidth: StyleSheet.hairlineWidth,
    height: 70,
    width: 70,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
});
