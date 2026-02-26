import { Stack } from "expo-router";
import React from "react";
export default function RootLayout() {
  return (
    <>
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        headerShown:false,
      }}></Stack.Screen>

      <Stack.Screen name="/admin/index" options={{
        title:"Área do admin"
      }}>
      </Stack.Screen>
    </Stack>
    </>
  );
}
