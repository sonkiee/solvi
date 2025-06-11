import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Alerts = ({
  type = "warning",
  title = "Warning",
  description = "This is a description of the alert.",
  onDismiss,
}) => {
  const [visible, setVisible] = useState(true);
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDismiss();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const colors = {
    warning: { bg: "#FFF4E5", icon: "#FFA726", iconName: "warning-outline" },
    info: {
      bg: "#E3F2FD",
      icon: "#42A5F5",
      iconName: "information-circle-outline",
    },
    success: {
      bg: "#E8F5E9",
      icon: "#66BB6A",
      iconName: "checkmark-circle-outline",
    },
    error: { bg: "#FFEBEE", icon: "#EF5350", iconName: "close-circle-outline" },
  };

  const { bg, icon, iconName } = colors[type] || colors.warning;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 10,
      onPanResponderMove: Animated.event([null, { dx: translateX }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (Math.abs(gestureState.dx) > SCREEN_WIDTH * 0.3) {
          Animated.timing(translateX, {
            toValue: gestureState.dx > 0 ? SCREEN_WIDTH : -SCREEN_WIDTH,
            duration: 300,
            useNativeDriver: true,
          }).start(() => handleDismiss());
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const handleDismiss = () => {
    setVisible(false);
    if (onDismiss) onDismiss();
  };

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: bg, transform: [{ translateX }] },
      ]}
      {...panResponder.panHandlers}
    >
      <Ionicons name={iconName} size={24} color={icon} style={styles.icon} />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={handleDismiss}>
            <Ionicons name="close" size={20} color="#333" />
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>{description}</Text>

        <TouchableOpacity onPress={handleDismiss} style={styles.dismissBtn}>
          <Text style={styles.dismissText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Alerts;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 12,
    margin: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignItems: "flex-start",
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    zIndex: 999, // stays on top
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  dismissBtn: {
    marginTop: 8,
  },
  dismissText: {
    fontSize: 14,
    color: "#007BFF",
    fontWeight: "500",
  },
});
