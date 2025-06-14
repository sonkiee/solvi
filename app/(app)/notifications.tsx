import NotificationListItem from "@/components/NotificationListItem";
import SegmentedControlRounded from "@/components/SegmentedControntrolRounded";
import BlurredHeaderContainer from "@/components/ui/BlurredHeaderContainer";
import Container from "@/components/ui/Container";
import { notifications } from "@/constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

// Dummy notifications

const NotificationsScreen = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredNotifications =
    selectedTab === "all"
      ? notifications
      : notifications.filter((item) => item.type === selectedTab);

  return (
    <Container top={1}>
      <BlurredHeaderContainer>
        <View style={styles.header}>
          <View style={styles.row}>
            <Pressable style={styles.row} onPress={() => router.back()}>
              <View style={styles.actionContainer}>
                <Ionicons name="chevron-back-outline" size={22} color="#fff" />
                <Text style={styles.title}>Notifications</Text>
              </View>
            </Pressable>

            <Pressable
              style={styles.actionContainer}
              onPress={() => console.log("Clear all pressed")}
            >
              <AntDesign name="delete" size={20} color="#ccc" />
              <Text
                style={{
                  color: "#ccc",
                }}
              >
                {" "}
                Clear all
              </Text>
            </Pressable>
          </View>

          <SegmentedControlRounded
            tabs={[
              { key: "all", label: "All" },
              { key: "info", label: "Info" },
              { key: "success", label: "Success" },
              { key: "warning", label: "Warning" },
              { key: "urgent", label: "Urgent" },
            ]}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </View>
      </BlurredHeaderContainer>

      <View style={styles.content}>
        <FlatList
          data={filteredNotifications}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          renderItem={({ item }) => (
            <NotificationListItem
              type={item.type}
              title={item.message}
              dateTime={new Date().toLocaleString()}
              description={item.message}
              onAction={() => console.log("Action pressed")}
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No notifications</Text>
            </View>
          }
        />
      </View>
    </Container>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    color: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    // paddingVertical: 10,
  },
  notificationItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  notificationType: {
    fontSize: 12,
    fontWeight: "700",
    color: "#888",
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 15,
    color: "#111",
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#aaa",
  },
});
