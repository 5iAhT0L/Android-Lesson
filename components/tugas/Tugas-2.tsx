import { Text, TextInput, View } from "react-native";

export default function Tugas2() {
  return (
    <View>
      {/* Belajar Text */}
      <Text>Hello World</Text>

      {/* Belajar Text Input */}
      <TextInput
        placeholder="Type Here To Edit"
        style={{ height: 40, padding: 5, borderColor: "gray", borderWidth: 1 }}
      />
    </View>
  );
}
