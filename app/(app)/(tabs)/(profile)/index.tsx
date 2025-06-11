import IconButton from "@/components/IconButton";
import ProfileListItem from "@/components/ProfileListItem";
import { Containing, SegmentedControl } from "@/components/Reusables";
import Container from "@/components/ui/Container";
import { currency } from "@/utils/currency";
import {
  Feather,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { RelativePathString } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ICON_COLOR = "#4f2986";
const ICON_SIZE = 20;

const tabs = [
  { key: "account", label: "Account" },
  { key: "wallet", label: "Wallet" },
  { key: "security", label: "Security" },
];

const account = [
  {
    key: "personal-details",
    label: "Personal details",
    linkTo: "personal-details",
    icon: <Feather name="user" size={ICON_SIZE} color={ICON_COLOR} />,
  },
  {
    key: "",
    label: "business details",
    linkTo: "business-details",
    icon: (
      <Ionicons name="business-outline" size={ICON_SIZE} color={ICON_COLOR} />
    ),
  },
  {
    key: "",
    label: "kyc and verification",
    linkTo: "kyc",
    icon: <Octicons name="verified" size={ICON_SIZE} color={ICON_COLOR} />,
  },
  {
    key: "",
    label: "bank details",
    linkTo: "bank-details",
    icon: <Feather name="credit-card" size={ICON_SIZE} color={ICON_COLOR} />,
  },
  {
    key: "",
    label: "user id",
    linkTo: "user-id",
    icon: <Feather name="user" size={24} color={ICON_COLOR} />,
  },
];

const wallet = [
  {
    key: "",
    label: "Manage cards",
    linkTo: "manage-cards",
    icon: <Feather name="credit-card" size={ICON_SIZE} color={ICON_COLOR} />,
  },
  {
    key: "",
    label: "Default currency",
    linkTo: "default-currency",
    icon: <Fontisto name="money-symbol" size={ICON_SIZE} color={ICON_COLOR} />,
  },
  {
    key: "",
    label: "refer and earn",
    linkTo: "refer-and-earn",
    icon: <Ionicons name="gift-outline" size={ICON_SIZE} color={ICON_COLOR} />,
  },
];

const security = [
  {
    key: "change-password",
    label: "change password",
    linkTo: "change-password",
    icon: <Feather name="user" size={ICON_SIZE} color={ICON_COLOR} />,
  },
  {
    key: "2fa",
    label: "two-factor authentication",
    linkTo: "2fa",
    icon: (
      <MaterialCommunityIcons
        name="two-factor-authentication"
        size={ICON_SIZE}
        color={ICON_COLOR}
      />
    ),
  },
  {
    key: "manage-biometrics",
    label: "manage biometrics",
    linkTo: "manage-biometrics",
    icon: (
      <MaterialCommunityIcons
        name="fingerprint"
        size={ICON_SIZE}
        color={ICON_COLOR}
      />
    ),
  },
];

type TabKey = "account" | "wallet" | "security";

const ProfileScreen = () => {
  const [selectedTab, setSelectedTab] = useState<TabKey>("account");

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

  return (
    <Container top={1}>
      <ScrollView
        contentInsetAdjustmentBehavior="always"
        contentContainerStyle={{
          marginBottom: 40,
          paddingBottom: 40,
        }}
      >
        <View style={styles.container}>
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
                  icon: (
                    <Feather name="settings" size={ICON_SIZE} color="#aaa" />
                  ),
                  linkTo: "/share-profile",
                },
                {
                  label: "share profile",
                  icon: (
                    <Feather name="share-2" size={ICON_SIZE} color="#aaa" />
                  ),
                  linkTo: "/messages",
                },
              ].map((item, index) => (
                <IconButton
                  key={index}
                  title={item.label}
                  icon={item.icon}
                  linkTo={item.linkTo as RelativePathString}
                />
              ))}
            </View>
          </Containing>

          <View
            style={{ flexDirection: "row", gap: 10, width: "100%", flex: 1 }}
          >
            {[
              {
                label: "notifications",
                icon: <Feather name="bell" size={ICON_SIZE} color="#aaa" />,
                link: "",
                number: 3,
              },
              {
                label: "rewards",
                icon: (
                  <Ionicons name="gift-outline" size={ICON_SIZE} color="#aaa" />
                ),
                link: "",
                number: 250,
              },
              {
                label: "balance",
                icon: (
                  <Ionicons
                    name="wallet-outline"
                    size={ICON_SIZE}
                    color="#aaa"
                  />
                ),
                link: "",
                number: 1000,
              },
            ].map((section, index) => (
              <Containing key={index} style={{ gap: 2 }}>
                {section.icon}
                <Text style={styles.text}>{section.label}</Text>
                <Text style={styles.number}>{currency(section.number)}</Text>
              </Containing>
            ))}
          </View>

          <View>
            <SegmentedControl
              tabs={tabs}
              selectedTab={selectedTab}
              onTabChange={(key: TabKey) => setSelectedTab(key)}
            />
          </View>

          <View
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: 6,
              padding: 10,
              marginTop: 10,
            }}
          >
            {(selectedTab === "account"
              ? account
              : selectedTab === "wallet"
              ? wallet
              : security
            ).map((item, index) => (
              <ProfileListItem
                key={index}
                label={item.label}
                icon={item.icon}
                linkTo={item.linkTo as RelativePathString}
              />
            ))}
          </View>

          <View
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: 6,
              // padding: 10,
              marginTop: 10,
            }}
          >
            {[
              {
                key: "",
                label: "Delete account",
                linkTo: "",
                icon: (
                  <Feather name="trash-2" size={ICON_SIZE} color={ICON_COLOR} />
                ),
              },
            ].map((item, index) => (
              <ProfileListItem
                key={index}
                label={item.label}
                icon={item.icon}
                linkTo={item.linkTo as RelativePathString}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, gap: 8 },
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
  number: {
    fontSize: 16,
    fontWeight: "600",
    color: "#aaa",
  },
  text: {
    fontSize: 14,
    color: "#aaa",
    textTransform: "capitalize",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#444",
  },
});
