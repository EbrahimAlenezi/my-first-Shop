import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,

        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: `bold` }}>My Cockie Store</Text>
      <Text>Where the best Cockies are made.</Text>
      <Image
        source={{
          uri: `https://img.youm7.com/ArticleImgs/2017/7/13/73264-%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%A7%D9%84%D9%83%D9%88%D9%83%D9%8A%D8%B2.jpg`,
        }}
        style={{ width: 200, height: 200 }}
      />
      <View
        style={{
          padding: 15,
          width: 400,

          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            source={{
              uri: `https://media-cdn.tripadvisor.com/media/photo-s/13/e8/56/35/cockies-vegan.jpg`,
            }}
            style={{ width: 150, height: 150 }}
          />
          <Text style={{ fontWeight: `bold` }}>Salty Pistasio Cockie </Text>
          <Text>3.99$</Text>
        </View>
        <View>
          <Image
            source={{
              uri: `https://preppykitchen.com/wp-content/uploads/2021/08/Double-Chocolate-Chip-Cookies-Recipe-500x500.jpg`,
            }}
            style={{ width: 150, height: 150 }}
          />
          <Text style={{ fontWeight: `bold` }}>Brown choclate Cockie </Text>
          <Text>3.99$</Text>
        </View>
      </View>
    </View>
  );
}
