import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface NotificationListItemProps {
  type?: "info" | "success" | "warning" | "urgent";
  title?: string;
  dateTime?: string;
  description?: string;
  onAction?: () => void;
}

const typeConfig = {
  info: { icon: "information-circle", color: "#3A86FF" },
  success: { icon: "checkmark-circle", color: "#06D6A0" },
  warning: { icon: "warning", color: "#FFD166" },
  urgent: { icon: "alert-circle", color: "#EF476F" },
};

const NotificationListItem = ({
  type = "info",
  title,
  dateTime,
  description,
  onAction,
}: NotificationListItemProps) => {
  const config = typeConfig[type] || typeConfig.info;
  const bgColor = `${config.color}20`; // Light transparent background

  return (
    <View style={[styles.container, { borderLeftColor: config.color }]}>
      <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
        <Ionicons name={config.icon} size={24} color={config.color} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title || "Title goes here"}</Text>
        <Text style={styles.date}>{dateTime || "Date and time here"}</Text>
        <Text style={styles.description}>
          {description || "Notification description goes here."}
        </Text>
        <TouchableOpacity onPress={onAction}>
          <Text style={styles.actionText}>Mark as read</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
    marginVertical: 6,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#3A86FF", // Default border color
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: "#777",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    color: "#3A86FF",
    fontWeight: "500",
  },
});
