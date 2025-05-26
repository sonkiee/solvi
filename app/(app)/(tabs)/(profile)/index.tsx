import { Containing } from "@/components/Reusables";
import Container from "@/components/ui/Container";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <Container top={1}>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.container}>
          <Text>ProfileScreen</Text>
          <Containing>
            <View>
              <Text> sss</Text>
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
  },
  emailText: {},
});
