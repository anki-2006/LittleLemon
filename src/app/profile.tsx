import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const savedName = await AsyncStorage.getItem("userName");
    const savedEmail = await AsyncStorage.getItem("userEmail");

    setName(savedName || "");
    setEmail(savedEmail || "");
  };

  const saveProfile = async () => {
    await AsyncStorage.setItem("userName", name);
    await AsyncStorage.setItem("userEmail", email);

    Alert.alert("Success", "Profile saved successfully.");
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userName");
    await AsyncStorage.removeItem("userEmail");

    router.replace("/");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <Text style={styles.label}>Name</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Email</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={saveProfile}
      >
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={logout}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#495E57",
    marginBottom: 20,
  },

  label: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 7,
  },

  input: {
    borderWidth: 1,
    borderColor: "#777777",
    borderRadius: 8,
    padding: 13,
    fontSize: 16,
  },

  saveButton: {
    backgroundColor: "#F4CE14",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 25,
  },

  saveText: {
    fontSize: 17,
    fontWeight: "bold",
  },

  logoutButton: {
    backgroundColor: "#495E57",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },

  logoutText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});