import Button from "@/components/ui/Button";
import { EvilIcons, Feather } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const works = [
  {
    label: "Share your code",
    description: "Invite your friends using your referral code",
  },
  {
    label: "Friend signs up",
    description: "Your friend signs up and makes their first deposit",
  },
  {
    label: "Earn rewards",
    description: "You both receive ₦1000 as reward",
  },
];

const ReferAndEarnScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          styles.section,
          { flexDirection: "row", justifyContent: "space-between", gap: 10 },
        ]}
      >
        <View>
          <Feather
            name="gift"
            size={23}
            color="#3A1078"
            style={styles.mainIcon}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Refer & Earn</Text>
          <Text style={styles.description}>
            Invite your friends to join Solvi and earn ₦1000 when they make
            their first deposit.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Your Referral Code</Text>

        <View style={styles.codeContainer}>
          <Text style={styles.code}>ABC123</Text>

          <TouchableOpacity onPress={() => console.log("Copy Code")}>
            <Text style={styles.copy}>Copy</Text>
          </TouchableOpacity>
        </View>

        <Button
          onPress={() => console.log("Share Code")}
          icon={<EvilIcons name="share-google" size={24} color="white" />}
          title="Share Code"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>How it works</Text>

        {works.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>{index + 1}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.listLabel}>{item.label}</Text>
              <Text style={styles.listDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <View style={styles.iconCircle}>
            <Feather name="users" size={24} color="#3A1078" />
          </View>
          <Text style={styles.statLabel}>Total Referrals</Text>
          <Text style={styles.statValue}>0</Text>
        </View>

        <View style={styles.statBox}>
          <View style={styles.iconCircle}>
            <Feather name="dollar-sign" size={24} color="#3A1078" />
          </View>
          <Text style={styles.statLabel}>Total Earned</Text>
          <Text style={styles.statValue}>₦0</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReferAndEarnScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#fff",
    margin: 6,
    flexGrow: 1,
  },
  section: {
    marginBottom: 25,
  },
  mainIcon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 5,
    color: "#111",
  },
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  code: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  copy: {
    fontSize: 14,
    color: "#3A1078",
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc",
  },
  statBox: {
    alignItems: "center",
    flex: 1,
    paddingVertical: 15,
  },
  iconCircle: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  numberCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  numberText: {
    fontWeight: "600",
    color: "#3A1078",
  },
  listLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
    marginBottom: 2,
  },
  listDescription: {
    fontSize: 13,
    color: "#555",
    lineHeight: 18,
  },
});
