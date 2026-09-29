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
import { router } from "expo-router";

const menuItems = [
  {
    id: "1",
    name: "Greek Salad",
    category: "Starters",
    description: "Fresh vegetables with feta cheese and olives.",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600",
  },
  {
    id: "2",
    name: "Grilled Chicken",
    category: "Mains",
    description: "Juicy grilled chicken served with fresh vegetables.",
    price: "$18.99",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600",
  },
  {
    id: "3",
    name: "Pasta",
    category: "Mains",
    description: "Traditional pasta with delicious tomato sauce.",
    price: "$15.99",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
  },
  {
    id: "4",
    name: "Baklava",
    category: "Desserts",
    description: "Sweet Mediterranean pastry with nuts and honey.",
    price: "$7.99",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600",
  },
  {
    id: "5",
    name: "Lemon Cake",
    category: "Desserts",
    description: "Soft lemon cake with a fresh citrus flavor.",
    price: "$6.99",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600",
  },
];

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Starters", "Mains", "Desserts"];

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch =
      category === "All" || item.category === category;

    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🍋 Little Lemon</Text>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => router.push("/profile")}
        >
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroText}>
          <Text style={styles.heroTitle}>Little Lemon</Text>

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

      {/* Search */}
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Search menu"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Menu Breakdown */}
      <Text style={styles.sectionTitle}>Order for Delivery</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.categoryButton,
              category === item && styles.selectedCategory,
            ]}
            onPress={() => setCategory(item)}
          >
            <Text
              style={[
                styles.categoryText,
                category === item && styles.selectedText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Food Menu List */}
      <Text style={styles.sectionTitle}>Menu</Text>

      {filteredItems.map((item) => (
        <View key={item.id} style={styles.menuItem}>
          <View style={styles.menuInfo}>
            <Text style={styles.menuName}>{item.name}</Text>

            <Text style={styles.menuDescription}>
              {item.description}
            </Text>

            <Text style={styles.price}>{item.price}</Text>
          </View>

          <Image
            source={{ uri: item.image }}
            style={styles.menuImage}
          />
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    height: 65,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#495E57",
  },

  profileButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F4CE14",
    justifyContent: "center",
    alignItems: "center",
  },

  profileIcon: {
    fontSize: 20,
  },

  hero: {
    backgroundColor: "#495E57",
    padding: 20,
    flexDirection: "row",
  },

  heroText: {
    flex: 1,
    paddingRight: 10,
  },

  heroTitle: {
    fontSize: 31,
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
    width: 115,
    height: 145,
    borderRadius: 10,
  },

  searchBox: {
    margin: 15,
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  searchIcon: {
    fontSize: 18,
  },

  searchInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 12,
  },

  categories: {
    paddingLeft: 15,
    paddingBottom: 10,
  },

  categoryButton: {
    backgroundColor: "#E5E5E5",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
  },

  selectedCategory: {
    backgroundColor: "#495E57",
  },

  categoryText: {
    fontWeight: "bold",
  },

  selectedText: {
    color: "#FFFFFF",
  },

  menuItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },

  menuInfo: {
    flex: 1,
    paddingRight: 10,
  },

  menuName: {
    fontSize: 19,
    fontWeight: "bold",
  },

  menuDescription: {
    color: "#555555",
    marginTop: 5,
    lineHeight: 19,
  },

  price: {
    fontWeight: "bold",
    marginTop: 8,
  },

  menuImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
});