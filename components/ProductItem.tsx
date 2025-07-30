import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ProductItemProps {
  cookieName: string;
  newImageUrl: string;
  productPrice: string;
}

const ProductItem = (props: ProductItemProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.newImageUrl }} style={styles.image} />
      <Text style={styles.name}>{props.cookieName}</Text>
      <Text style={styles.price}>{props.productPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 10,
    width: 200,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  name: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    color: "#555",
  },
});

export default ProductItem;
