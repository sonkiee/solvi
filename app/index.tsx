import { Redirect } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [isLocked, setIsLocked] = useState(true);
  const [user, setUser] = useState(true);

  if (!user) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  if (isLocked) {
    return <Redirect href="/(lock)" />;
  }

  return <Redirect href="/home" />;
}
