import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  require("@/assets/images/Image-0.png"),
  require("@/assets/images/Image-1.png"),
  require("@/assets/images/Image-2.png"),
  require("@/assets/images/Image-3.png"),
  require("@/assets/images/Image-4.png"),
];

export default function UpdateScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [ title, setTitle ] = useState("");
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Update Note</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Note Title"
          style={styles.inputTitle}
          selectionColor="#FF5B13"
          value="test"
        />

        <TextInput
          placeholder="Note Content"
          style={styles.inputContent}
          selectionColor="#FF5B13"
          multiline={true}
          value="test"
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.boxImage,
                selectedImage === index && styles.imageSelected,
              ]}
              onPress={() => setSelectedImage(index)}
            >
              <Image source={image} style={styles.image} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          padding: 16,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FF5B13",
            padding: 15,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 16,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputTitle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
  },
  inputContent: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    height: 150,
    textAlignVertical: "top",
  },
  boxImage: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  imageSelected: {
    borderColor: "#FF5B13",
  },
  form: {
    padding: 16,
  },
});
