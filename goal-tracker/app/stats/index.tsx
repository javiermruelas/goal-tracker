import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

export const StatsScreen: React.FC = ({}) => {
  return (
    <View>
      <Pressable>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {},
});

export default StatsScreen;
