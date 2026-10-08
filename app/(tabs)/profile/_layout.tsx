import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Account",
        }}
      />
      <Stack.Screen
        name="appearance"
        options={{
          headerShown: false,
          title: "Appearance",
        }}
      />
    </Stack>
  );
}
