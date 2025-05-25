import Container from "@/components/ui/Container";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <Container top={1}>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View>
          <Text>ProfileScreen</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
