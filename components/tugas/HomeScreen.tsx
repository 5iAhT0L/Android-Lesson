import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const notes = [
  {
    id: 1,
    image: require("@/assets/images/Logo-Notes-Kodein.png"),
    title: "Belajar React Native",
    description:
      "Mempelajari dasar-dasar React Native untuk pengembangan aplikasi mobile.",
    date: "2024-06-01",
  },
  {
    id: 2,
    image: require("@/assets/images/Logo-Notes-Kodein.png"),
    title: "Proyek Kodein",
    description: "Mengerjakan proyek aplikasi catatan menggunakan Kodein.",
    date: "2024-06-02",
  },
];

type Note = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
};

const NoteItem = ({ item }: { item: Note }) => {
  return (
    <View style={styles.card}>
      <Image
        style={{ width: 70, height: 70 }}
        source={require("@/assets/images/Logo-Notes-Kodein.png")}
      />
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Judul</Text>
        <Text style={styles.cardDesc}>Deskripsi</Text>
        <Text style={styles.cardDate}>Tanggal</Text>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 32, height: 32 }}
          source={require("@/assets/images/Logo-Notes-Kodein.png")}
        />
        <Text style={styles.kodeinText}>Kodein</Text>
        <Text style={styles.notesText}>Notes</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Image
            style={{ width: 70, height: 70 }}
            source={require("@/assets/images/Logo-Notes-Kodein.png")}
          />
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Judul</Text>
            <Text style={styles.cardDesc}>Deskripsi</Text>
            <Text style={styles.cardDate}>Tanggal</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={32} color={"white"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 8,
  },

  kodeinText: {
    fontSize: 20,
    fontWeight: 700,
  },
  notesText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#ff8800e2",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  fab: {
    backgroundColor: "#ff8800e2",
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    bottom: 45,
    right: 23,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: "white",
    elevation: 5,
    padding: 6,
    borderRadius: 8,
  },
  cardContainer: {},
  cardTitle: {},
  cardDesc: {},
  cardDate: {},
});
