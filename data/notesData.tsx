import { ImageSourcePropType } from "react-native";

export const notes: Note[] = [
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
