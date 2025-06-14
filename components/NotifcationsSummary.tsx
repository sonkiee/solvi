import { notifications } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export const typeConfig = {
  info: { icon: "information-circle", color: "#3A86FF" },
  success: { icon: "checkmark-circle", color: "#06D6A0" },
  warning: { icon: "warning", color: "#FFD166" },
  urgent: { icon: "alert-circle", color: "#EF476F" },
};

const NotificationItem = ({ notification }) => {
  const config = typeConfig[notification.type] || typeConfig.info;
  const bgColor = `${config.color}20`;

  return (
    <View style={[styles.itemContainer]}>
      <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
        <Ionicons name={config.icon} size={18} color={config.color} />
      </View>

      <View style={styles.itemContent}>
        <Text style={styles.title}>{notification.message}</Text>
        <Text style={styles.date}>{new Date().toLocaleString()}</Text>
        <Text style={styles.description}>{notification.message}</Text>
        <TouchableOpacity onPress={() => console.log("Marked as read")}>
          <Text style={styles.actionText}>Mark as read</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NotificationsSummary = ({ visible, setVisible }) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      rotation.value = withRepeat(withTiming(1, { duration: 2000 }), -1, true);
    } else {
      rotation.value = 0;
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    const angle = `${rotation.value * 10 - 5}deg`;
    return { transform: [{ rotate: angle }] };
  });

  if (!visible) return null;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setVisible(false)}
      style={styles.overlay}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Notifications</Text>
          <Text style={styles.headerText}>Mark all as read</Text>
        </View>

        <View style={styles.content}>
          {notifications.length > 0 ? (
            notifications
              .slice(0, 3)
              .map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                />
              ))
          ) : (
            <Text style={styles.noNotifText}>
              You have no new notifications.
            </Text>
          )}
        </View>

        <View style={styles.footer}></View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 999,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
  },
  container: {
    marginTop: 60,
    marginLeft: 16,
    width: 260,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    marginBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 6,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 12,
    fontWeight: "500",
  },
  content: { gap: 4, padding: 4 },
  footer: {
    marginTop: 4,
    backgroundColor: "#f0f0f0",
    padding: 6,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  noNotifText: {
    fontSize: 12,
    textAlign: "center",
    color: "#888",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
    marginVertical: 4,
    borderRadius: 6,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  itemContent: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 2,
  },
  date: {
    fontSize: 10,
    color: "#777",
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
    color: "#555",
    marginBottom: 4,
  },
  actionText: {
    fontSize: 10,
    color: "#3A86FF",
    fontWeight: "500",
  },
});

export default NotificationsSummary;
