// import { Redirect } from "expo-router";
import { Redirect } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Redirect href="/(auth)/sign-in" />;
  }
  return <Redirect href="/home" />;
}
