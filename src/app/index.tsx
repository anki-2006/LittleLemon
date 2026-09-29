import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function OnboardingScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNext = async () => {
    if (!name.trim() || !email.trim()) {
      return;
    }

    await AsyncStorage.setItem("userName", name);
    await AsyncStorage.setItem("userEmail", email);

    router.replace("/home");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.logo}>🍋 LITTLE LEMON</Text>

      <View style={styles.hero}>
        <View style={styles.heroText}>
          <Text style={styles.title}>Little Lemon</Text>

          <Text style={styles.city}>Chicago</Text>

          <Text style={styles.description}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
          }}
          style={styles.heroImage}
        />
      </View>

      <Text style={styles.label}>Name *</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email *</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity
        style={[
          styles.nextButton,
          (!name.trim() || !email.trim()) && styles.disabledButton,
        ]}
        disabled={!name.trim() || !email.trim()}
        onPress={handleNext}
      >
        <Text style={styles.nextText}>Next</Text>
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

  logo: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#495E57",
    letterSpacing: 2,
    marginTop: 30,
    marginBottom: 25,
  },

  hero: {
    backgroundColor: "#495E57",
    borderRadius: 12,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  heroText: {
    flex: 1,
    paddingRight: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F4CE14",
  },

  city: {
    fontSize: 22,
    color: "#FFFFFF",
    marginBottom: 10,
  },

  description: {
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 21,
  },

  heroImage: {
    width: 105,
    height: 140,
    borderRadius: 10,
  },

  label: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 22,
    marginBottom: 7,
    color: "#333333",
  },

  input: {
    borderWidth: 1,
    borderColor: "#777777",
    borderRadius: 8,
    padding: 13,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
  },

  nextButton: {
    backgroundColor: "#F4CE14",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 28,
  },

  disabledButton: {
    backgroundColor: "#CCCCCC",
  },

  nextText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
});