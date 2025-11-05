import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const notes: Note[] = [
  {
    id: 1,
    image: require("@/assets/images/Image-0.png"),
    title: "Belajar React Native",
    description:
      "Mempelajari dasar-dasar React Native untuk pengembangan aplikasi mobile.",
    date: "2024-06-01",
  },
  {
    id: 2,
    image: require("@/assets/images/Image-1.png"),
    title: "Proyek Kodein",
    description: "Mengerjakan proyek aplikasi catatan menggunakan Kodein.",
    date: "2024-06-02",
  },
  {
    id: 3,
    image: require("@/assets/images/Image-2.png"),
    title: "Desain UI",
    description:
      "Membuat desain antarmuka pengguna yang menarik dan fungsional.",
    date: "2024-06-03",
  },
  {
    id: 4,
    image: require("@/assets/images/Image-3.png"),
    title: "Testing Aplikasi",
    description: "Melakukan pengujian aplikasi untuk memastikan kualitasnya.",
    date: "2024-06-04",
  },
  {
    id: 5,
    image: require("@/assets/images/Image-3.png"),
    title: "Testing Aplikasi",
    description: "Melakukan pengujian aplikasi untuk memastikan kualitasnya.",
    date: "2024-06-04",
  },
  {
    id: 6,
    image: require("@/assets/images/Image-3.png"),
    title: "Testing Aplikasi",
    description: "Melakukan pengujian aplikasi untuk memastikan kualitasnya.",
    date: "2024-06-04",
  },
  {
    id: 7,
    image: require("@/assets/images/Image-3.png"),
    title: "Testing Aplikasi",
    description: "Melakukan pengujian aplikasi untuk memastikan kualitasnya.",
    date: "2024-06-04",
  },

];

type Note = {
  id: number;
  image: ImageSourcePropType | { uri: string };
  title: string;
  description: string;
  date: string;
};

const NoteItem = ({ item }: { item: Note }) => {
  return (
    <View style={styles.card}>
      <Image style={{ width: 70, height: 70 }} source={item.image} />
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc}>{item.description}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
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
        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 14, flexGrow: 1 }}
          ListEmptyComponent={() => <EmptyData />}
        />
      </View>

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={32} color={"white"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const EmptyData = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("@/assets/images/Image-4.png")}
      />
      <Text style={styles.emptyTitle}>Add your first note</Text>
      <Text style={styles.emptyDesc}>
        Save your thoughts, task or inspiration
      </Text>
    </View>
  );
};

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
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDesc: {
    fontSize: 14,
    color: "gray",
  },
  cardDate: {
    fontSize: 12,
    color: "gray",
  },

  emptyContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  emptyTitle: {},
  emptyDesc: {},
});

