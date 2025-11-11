import { notes } from "@/data/notesData";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const note = notes.find((note) => note.id === Number(id));

  console.log(id);
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        </TouchableOpacity>

        <Text style={styles.appBarTitle}>Note Details</Text>
      </View>
      <ScrollView>
        <Image
          style={{ width: "100%", height: 250 }}
          source={require("@/assets/images/Image-DetailScreen-1.png")}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{note?.title}</Text>
          <Text style={styles.date}>{note?.date}</Text>
          <Text style={styles.description}>{note?.description}</Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF5B13",
            margin: 16,
            padding: 15,
            borderRadius: 8,
            flex: 1,
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
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "red",
            margin: 16,
            padding: 15,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: "white",
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
  content: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: "gray",
    textAlign: "justify",
  },
});
