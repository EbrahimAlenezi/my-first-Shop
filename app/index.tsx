import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import ProductList from "../components/ProductList";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Cookie Store</Text>
      <Text style={styles.subtitle}>Where the best cookies are made.</Text>

      <Image
        source={{
          uri: "https://img.youm7.com/ArticleImgs/2017/7/13/73264-%D8%B3%D8%A8%D9%88%D8%AF%D9%8A%D8%B1.jpg",
        }}
        style={styles.bannerImage}
      />

      <ProductList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 4 },
  subtitle: { opacity: 0.7, marginBottom: 16 },
  bannerImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
});
