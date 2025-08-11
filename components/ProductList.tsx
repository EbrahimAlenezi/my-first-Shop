import React from "react";
import { StyleSheet, View } from "react-native";
import ProductItem from "./ProductItem";

const products = [
  {
    cookieName: "Brown cookie",
    newImageUrl:
      "https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/0f526714ac25f72de07faf564eff456e.jpg",
    productPrice: "$3.99",
  },
  {
    cookieName: "Salty Pistachio cookie",
    newImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fybVU1nP7p-fk-nlatwGIPqV4_FwlLnreg&s",
    productPrice: "$3.99",
  },
  {
    cookieName: "Kinder cookie",
    newImageUrl:
      "https://sweetlycakes.com/wp-content/uploads/2024/02/Kindercookies-11.jpg",
    productPrice: "$5.99",
  },
  {
    cookieName: "Monster cookie",
    newImageUrl:
      "https://sweetlycakes.com/wp-content/uploads/2023/12/cookiemonstercookies-12-1.jpg",
    productPrice: "$4.99",
  },
];

export default function ProductList() {
  return (
    <View style={styles.list}>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          cookieName={product.cookieName}
          newImageUrl={product.newImageUrl}
          productPrice={product.productPrice}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { width: "100%", alignItems: "center" },
});
