import ProductItem from "@/components/ProductItem";
import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

export default function Index() {
  const products = [
    {
      cookieName: "Brown cookie",
      newImageUrl:
        "https://preppykitchen.com/wp-content/uploads/2021/08/Double-Chocolate-Chip-Cookies-Recipe-500x500.jpg",
      productPrice: "3.99$",
    },
    {
      cookieName: "Salty Pistachio cookie",
      newImageUrl:
        "https://teakandthyme.com/wp-content/uploads/2024/12/pistachio-cream-cookies-DSC_3367-1x1-1200.jpg",
      productPrice: "3.99$",
    },
    {
      cookieName: "Kinder cookie",
      newImageUrl:
        "https://www.janespatisserie.com/wp-content/uploads/2020/07/IMG_4770-2.jpg",
      productPrice: "5.99$",
    },
    {
      cookieName: "Monster cookie",
      newImageUrl:
        "https://sweetlycakes.com/wp-content/uploads/2023/12/cookiemonstercookies-12-1.jpg",
      productPrice: "4.99$",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🍪 My Cookie Store</Text>
      <Text style={styles.subtitle}>Where the best cookies are made.</Text>

      <Image
        source={{
          uri: "https://img.youm7.com/ArticleImgs/2017/7/13/73264-%D8%B7%D9%81%D9%84.jpg",
        }}
        style={styles.bannerImage}
      />

      {products.map((product, index) => (
        <ProductItem
          key={index}
          cookieName={product.cookieName}
          newImageUrl={product.newImageUrl}
          productPrice={product.productPrice}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    marginBottom: 10,
  },
  bannerImage: {
    width: 200,
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
});
