import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Little Lemon",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="home"
        options={{
          title: "Little Lemon",
          headerBackTitle: "Back",
        }}
      />

      <Stack.Screen
        name="profile"
        options={{
          title: "Profile",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}