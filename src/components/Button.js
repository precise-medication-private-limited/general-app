import { StyleSheet, Text, Pressable, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Color, FontFamily } from "../utils/GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { Button as PatientButton } from "@rneui/themed";

const Button = ({
  value = "Done",
  color = Color.chemoHeader,
  onPress,
  page = "default",
  size = "100%",
}) => {
  // State variables to manage dynamic colors
  const [notificationColor, setNotificationColor] = useState(
    Color.defaultNotification || Color.chemoHeader
  );

  useEffect(() => {
    if (page === "chemotherapy") {
      setNotificationColor(Color.chemoNotification || "#888");
    } else if (page === "breast-cancer") {
      setNotificationColor(Color.bcHeader || "#555");
    }
  }, [page]);

  return (
    <PatientButton
      title={value}
      onPress={onPress}
      buttonStyle={[styles.patientButton, { width: size }]}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ['#E582AD', '#ffa6bb'],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
    />
  );
};



export default Button;

const styles = StyleSheet.create({
  patientButton: {
    alignSelf: "center",
    backgroundColor: Color.bcHighlight,
    padding: 12,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontFamily: FontFamily.bold,
    fontSize: 16,
  },
});
