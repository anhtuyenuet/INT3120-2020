import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { MonoText } from "../components/StyledText";
import Colors from "../constants/Colors";

export default class Questions extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.comming}>Comming soon</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 15,
  },
  comming: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
  },
});
