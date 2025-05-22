import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

// Fix: Rename to PascalCase
const ExchangeTabIcon = ({ color, size }: { color: string; size: number }) => (
  <View style={styles.exchange}>
    <FontAwesome name="yen" color={color} size={size} />
  </View>
);

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="bills"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="filetext1" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="exchange"
        options={{
          tabBarIcon: ({ color, size }) => (
            <ExchangeTabIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="grid" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  exchange: {
    // position: 'absolute',
    // top: 15,
    // right: 15,
    // backgroundColor: 'white',
    // borderRadius: 50,
    // padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
