import { Text, TextInput, View } from "react-native";

export default function Tugas2() {
  return (
    <View style={{ padding: 20, marginTop: 50, gap: 20 }}>
      {/* Belajar Text */}
      <Text>Aplikasi Data Diri Saya</Text>

      {/* Belajar Text Input */}
      <View style={{ gap: 10 }}>
        <Text>Input Your Name</Text>
        <TextInput
          placeholder="Name"
          style={{
            height: 40,
            padding: 5,
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
      </View>
      <View style={{ gap: 10 }}>
        <Text>Classroom</Text>
        <TextInput
          placeholder="Input Your Classroom"
          style={{
            height: 40,
            padding: 5,
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
      </View>
      <View style={{ gap: 10 }}>
        <Text>Hobby</Text>
        <TextInput
          placeholder="Input Your Hobby"
          style={{
            height: 40,
            padding: 5,
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
      </View>
      <Text>
        Thank You For Fill The Data!
      </Text>
    </View>
  );
}
