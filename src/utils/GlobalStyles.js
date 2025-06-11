import {
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
/* fonts */
export const FontFamily = {
  Inter_Regular: "Inter-Regular",
  Inter_Medium: "Inter-Medium",
  Inter_Bold: "Inter-Bold",
  Inter_SemiBold: "Inter-SemiBold",
};

/* font sizes */
export const FontSize = {

  peviewHeader: 14.4,
  previewLabel: 14.4,
  previewValue: 14.4,
  previewBtn: 14.4,

  heading_H1: 24,
  heading_H2: 20,
  heading_H3: 18,
  body_Text: 14,
  button_Text: 16,
  caption: 12,
};

/* Colors */
export const Color = {
  // General Colors
  colorWhite: "#fff",
  colorBlack: "#000",

  // Buttons
  inactivebutton: "#8e8e8e70",


  // Breast Cancer Side
  bcHeader: "#ffa6bb",
  bcHighlight: "#FF70A2",
  bclight: "#FFF2F4",
  bcBackground: "#F9F9F9",
  bcNotification: "#fff",
  bcColorSelectedButton: "#E582AD",
  bcSubSection: "#F8F8F8",
  headingColor: '#D81B60',

  // Chemotherapy Side
  chemoHeader: "#7fcac6",
  chemoNotification: "#a3d9d6",
  chemoBackground: "#d9efee",

  // text colors
  lightGray: "#E0E0E0",
  darkGray: "#333333",
  Blue: "#4A90E2",

  // Question answer colors
  answerColor: "#555555",
  questionColor: "#333333",
  background: '#F8F9FA',
  highlight: '#E0F7FA',
};

/* border radiuses */
export const Border = {
  box_br: 1,
  br_11xl: 30,
  br_8xs: 5,
  br_3xs: 10,
  br_xl: 20,
};

/* Button color */
export const ButtonColor = {
  patient_submit_button_color: ["#E1A1C4", "#FB2C82"],
  option_button_color: ["#C78DC4", "#FFFFFF"],
  option_select_color: "#E582AD",
};

/* Margin */
export const Margin = {
  margin_v: 10,
  margin_h: "2%",
  margin_bottom: 20,
  margin_top: 10,

  m_h: 10,
  m_bttom: 20,
  m_top: 10,
};

/* linierGradients */
export const linearGradient = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },

  Welcome_bgcolor: ["#8FD4AF", "#FFCFDE"],
  Doctor_bgcolor: ["#8FD4AF", "#8FD4AF"],
  Doctor_Box: ["#74AF93", "#74AF93"],
  Patient_box_color: ["#FFE7FE", "#ECB4E0"],
  Patient_box_color: ["#FFC5D7", "#FFC5D7"],
  Patient_bgcolor: ["#FFCFDE", "#FFCFDE"],
};
