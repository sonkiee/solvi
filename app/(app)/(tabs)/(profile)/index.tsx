import IconButton from "@/components/IconButton";
import { Containing } from "@/components/Reusables";
import Container from "@/components/ui/Container";
import { Feather } from "@expo/vector-icons";
import { RelativePathString } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  const user = {
    name: "Sonkey Lala",
    email: "sonkey@example.com",
    avatar: "",
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
              <View style={styles.avatar}>
                {user?.avatar ? (
                  <Image source={avatar} style={styles.avatar} />
                ) : (
                  <Text style={styles.avatarText}>{abbr}</Text>
                )}
              </View>

              <View>
                <Text style={styles.nameText}> {user.name}</Text>
                <Text style={styles.emailText}> {user.email} </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                flex: 1,
                marginTop: 10,
                gap: 10,
              }}
            >
              {[
                {
                  label: "edit profile",
                  icon: <Feather name="settings" size={20} color="#aaa" />,
                  link: "/share-profile",
                },
                {
                  label: "share profile",
                  icon: <Feather name="share-2" size={20} color="#aaa" />,
                  link: "/messages",
                },
              ].map((item, index) => (
                <IconButton
                  key={index}
                  title={item.label}
                  icon={item.icon}
                  link={item.link as RelativePathString}
                />
              ))}
            </View>
          </Containing>

          <View
            style={{ flexDirection: "row", gap: 12, width: "100%", flex: 1 }}
          >
            {["notifications", "rewards", "balance"].map((section, index) => (
              <Containing key={index}>
                <Text>{section}</Text>
              </Containing>
            ))}
          </View>
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
  emailText: {
    fontSize: 14,
    color: "#aaa",
    textTransform: "lowercase",
  },
  avatar: {
    borderRadius: 9999,
    borderWidth: StyleSheet.hairlineWidth,
    height: 70,
    width: 70,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 30,
    fontWeight: "700",
    color: "#ccc",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 8,
    borderRadius: 9999,
  },
});
