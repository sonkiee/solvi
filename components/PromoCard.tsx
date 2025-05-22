import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PromoCard = ({
  label,
  icon,
  colors,
}: {
  label: string;
  icon: React.ReactElement;
  colors: string[];
}) => {
  return (
    <LinearGradient
      colors={[colors[0], colors[1]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.content}>{label}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            gap: 5,
          }}
        >
          <Text style={{ fontWeight: "400", color: "#ccc", fontSize: 15 }}>
            Learn more
          </Text>
          <Feather name="arrow-right" size={12} color="#ccc" />
        </View>
        {icon}
      </View>
    </LinearGradient>
  );
};

export default PromoCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: 280 * 0.8,
    height: 160 * 0.8,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    flexDirection: "column",
    justifyContent: "space-between",
  },
  label: {
    color: "#ccc",
    textTransform: "capitalize",
    fontWeight: "700",
    // fontSize: 15,
  },
  content: {
    color: "#bbb",
    fontSize: 13,
  },
});
