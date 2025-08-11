import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ProductItemProps {
  cookieName: string;
  newImageUrl: string;
  productPrice: string;
}

export default function ProductItem(props: ProductItemProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.newImageUrl }} style={styles.image} />
      <Text style={styles.name}>{props.cookieName}</Text>
      <Text style={styles.price}>{props.productPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  image: { width: "100%", height: 150, borderRadius: 8 },
  name: { marginTop: 10, fontSize: 16, fontWeight: "600" },
  price: { marginTop: 4, fontSize: 14, opacity: 0.7 },
});
