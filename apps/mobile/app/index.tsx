import { SafeAreaProviderCompat } from "@react-navigation/elements";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaProviderCompat style={styles.container}>
      <Text style={styles.title}>Mobile App</Text>
      <Text style={styles.body}>
        A minimal React Native app running in the mobile workspace.
      </Text>
      <StatusBar style="auto" />
    </SafeAreaProviderCompat>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111111",
  },
  body: {
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
    lineHeight: 22,
  },
});
