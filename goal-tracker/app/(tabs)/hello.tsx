import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TextInput,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

export type HelloProps = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Hello: React.FC<HelloProps> = ({ name, baseEnthusiasmLevel = 0 }) => {
  const [enthusiasmLevel, setEnthusiasmLevel] =
    React.useState(baseEnthusiasmLevel);

  const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0);

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join("!") : "";

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello {name}
        {getExclamationMarks(enthusiasmLevel)}
      </Text>
      <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
        <Pressable>
          <Link href="/stats" style={styles.link}>
            <ThemedText type="link">Go to stats screen!</ThemedText>
          </Link>
        </Pressable>
      </View>
    </View>
  );
};

const HelloScreen: React.FC = () => {
  const [_showKeyboard, setShowKeyboard] = React.useState(false);
  const [userName, setUserName] = React.useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={userName}
          onChangeText={setUserName}
          onFocus={() => setShowKeyboard(true)}
          onBlur={() => setShowKeyboard(false)}
        />
        <Hello name={userName || "Stranger"}></Hello>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 150,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#fff",
  },
  link: {},
});

export default HelloScreen;
