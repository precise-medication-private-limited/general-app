import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  ScrollView,
  Easing,
  StatusBar,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import Toast from "react-native-toast-message";
import Modal from "react-native-modal";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import Entypo from "@expo/vector-icons/Entypo";
import * as Progress from "react-native-progress";
import { Header } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

// Questions
import { healthHistoryQuestions } from "../questions/healthHistoryQuestions";

// UI components
import { Color, FontFamily, FontSize } from "../../utils/GlobalStyles";
import AnimatedDropDown from "../components/AnimatedDropDown";
import RenderQuestion from "../components/RenderQuestion";
import SkeletonLoader from "../loader/SkeletonLoader";
import Button from "../../components/Button";

// Backend component
import apiService from "../../services/api";

const { height, width } = Dimensions.get("window");

const Edit_Medical_History = ({ navigation, route }) => {
  const { profile } = useSelector((state) => state.profile);

  const [vaccineExpanded, setVaccineExpanded] = useState(false);

  const [expandedSection, setExpandedSection] = useState({
    vision: false,
    cancer: false,
    musculoskeletal: false,
    urological: false,
    gastrointestinal: false,
    neurological: false,
    respiratory: false,
    daibetes: false,
    cardiovascular: false,
  });

  const [language, setLanguage] = useState(asyncLanguage || "en");
  const [asyncLanguage, setAsyncLanguage] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    AsyncStorage.getItem("language")
      .then((lang) => setLanguage(lang || "en"))
      .catch(console.error);
  }, []);

  // Question (Vision)
  const engVision = "Vision";
  const bengVision = "দৃষ্টি"; // Bengali
  const assVision = "দৃষ্টি"; // Assamese
  const hindiVision = "दृष्टि"; // Hindi

  // Cancer
  const engCancer = "Cancer";
  const bengCancer = "ক্যান্সার"; // Bengali
  const assCancer = "কেন্সাৰ"; // Assamese
  const hindiCancer = "कैंसर"; // Hindi

  // Musculoskeletal
  const engMusculoskeletal = "Musculoskeletal";
  const bengMusculoskeletal = "মাসকিউলোস্কেলিটাল"; // Bengali
  const assMusculoskeletal = "মাস্কিউলোস্কেলিটেল"; // Assamese
  const hindiMusculoskeletal = "मस्क्यूलोस्केलेटल"; // Hindi

  // Urological Conditions
  const engUrological = "Urological Conditions";
  const bengUrological = "ইউরোলজিকাল কন্ডিশনস"; // Bengali
  const assUrological = "ইউৰোলজিকেল কণ্ডিশ্বন"; // Assamese
  const hindiUrological = "यूरोलॉजिकल कंडीशंस"; // Hindi

  // Gastrointestinal Disorders
  const engGastrointestinal = "Gastrointestinal Disorders";
  const bengGastrointestinal = "গ্যাস্ট্রোইনটেস্টাইনাল ডিসঅর্ডারস"; // Bengali
  const assGastrointestinal = "গ্যাস্ট্ৰইণ্টেষ্টাইনাল ডিজঅৰ্ডাৰস"; // Assamese
  const hindiGastrointestinal = "जठरांत्र संबंधी विकार"; // Hindi

  // Neurological Disorders
  const engNeurological = "Neurological Disorders";
  const bengNeurological = "নার্ভ সিস্টেমের রোগ"; // Bengali
  const assNeurological = "নাৰ্ভ চিস্টেমৰ ৰোগ"; // Assamese
  const hindiNeurological = "तंत्रिका तंत्र विकार"; // Hindi

  // Respiratory Conditions
  const engRespiratory = "Respiratory Conditions";
  const bengRespiratory = "শ্বাস প্রশ্বাসের সমস্যা"; // Bengali
  const assRespiratory = "শ্বাস প্ৰশ্বাসৰ সমস্যা"; // Assamese
  const hindiRespiratory = "श्वसन संबंधित समस्याएँ"; // Hindi

  // Cardiovascular Conditions
  const engCardiovascular = "Cardiovascular Conditions";
  const bengCardiovascular = "কার্ডিওভাসকুলার কন্ডিশনস"; // Bengali
  const assCardiovascular = "কাৰ্ডিঅ’ভাসকুলাৰ কণ্ডিশ্বন"; // Assamese
  const hindiCardiovascular = "हृदय संबंधी विकार"; // Hindi

  // Diabetes and Endocrine Disorders
  const engDiabetesEndocrine = "Diabetes and Endocrine Disorders";
  const bengDiabetesEndocrine = "ডায়াবেটিস এবং এন্ডোক্রাইন ডিসঅর্ডারস"; // Bengali
  const assDiabetesEndocrine = "ডায়াবেটিছ আৰু এণ্ডোক্রাইন ডিজঅৰ্ডাৰস"; // Assamese
  const hindiDiabetesEndocrine = "मधुमेह और अंतःस्रावी विकार"; // Hindi

  // Vision Chronic Options
  const englishOptions1 = [
    { id: "1", label: "Glaucoma", value: "Glaucoma" },
    { id: "2", label: "Cataracts", value: "Cataracts" },
    { id: "3", label: "Diabetic Retinopathy", value: "Diabetic Retinopathy" },
    {
      id: "4",
      label: "Age-Related Macular Degeneration (AMD)",
      value: "Age-Related Macular Degeneration (AMD)",
    },
    {
      id: "5",
      label: "Chronic Dry Eye Syndrome",
      value: "Chronic Dry Eye Syndrome",
    },
    { id: "6", label: "Others", value: "Others" },
  ];

  const bengaliOptions1 = [
    { id: "1", label: "গ্লকোমা", value: "Glaucoma" },
    { id: "2", label: "ক্যাটারাক্টস", value: "Cataracts" },
    { id: "3", label: "ডায়াবেটিক রেটিনোপ্যাথি", value: "Diabetic Retinopathy" },
    {
      id: "4",
      label: "বয়সজনিত ম্যাকুলার ডিজেনারেশন (AMD)",
      value: "Age-Related Macular Degeneration (AMD)",
    },
    {
      id: "5",
      label: "ক্রনিক ড্রাই আই সিন্ড্রোম",
      value: "Chronic Dry Eye Syndrome",
    },
    { id: "6", label: "অন্যান্য", value: "Others" },
  ];

  const assameseOptions1 = [
    { id: "1", label: "গ্লকোমা", value: "Glaucoma" },
    { id: "2", label: "কেটাৰেক্টছ", value: "Cataracts" },
    { id: "3", label: "ডায়বেটিক ৰেটিন’পথি", value: "Diabetic Retinopathy" },
    {
      id: "4",
      label: "বয়সৰ সৈতে সম্পৰ্কিত ম্যাকুলাৰ ডিজেনাৰেচন (AMD)",
      value: "Age-Related Macular Degeneration (AMD)",
    },
    {
      id: "5",
      label: "কৰণিক ড্ৰাই আই সিন্ড্ৰম",
      value: "Chronic Dry Eye Syndrome",
    },
    { id: "6", label: "অন্যান্য", value: "Others" },
  ];

  const hindiOptions1 = [
    { id: "1", label: "ग्लूकोमा", value: "Glaucoma" },
    { id: "2", label: "मोतियाबिंद", value: "Cataracts" },
    { id: "3", label: "डायबिटिक रेटिनोपैथी", value: "Diabetic Retinopathy" },
    {
      id: "4",
      label: "उम्र-संबंधी मैक्युलर डिजनरेशन (AMD)",
      value: "Age-Related Macular Degeneration (AMD)",
    },
    {
      id: "5",
      label: "क्रोनिक ड्राई आई सिंड्रोम",
      value: "Chronic Dry Eye Syndrome",
    },
    { id: "6", label: "अन्य", value: "Others" },
  ];

  // Cancer options for different languages
  const englishOptionsCancer = [
    { id: "1", label: "Breast Cancer", value: "Breast Cancer" },
    { id: "2", label: "Lung Cancer", value: "Lung Cancer" },
    { id: "3", label: "Prostate Cancer", value: "Prostate Cancer" },
    { id: "4", label: "Colorectal Cancer", value: "Colorectal Cancer" },
    { id: "5", label: "Leukemia/Lymphoma", value: "Leukemia/Lymphoma" },
    { id: "6", label: "Skin Cancer", value: "Skin Cancer" },
    { id: "7", label: "Others", value: "Others" },
  ];

  const bengaliOptionsCancer = [
    { id: "1", label: "ব্রেস্ট ক্যান্সার", value: "Breast Cancer" },
    { id: "2", label: "লাং ক্যান্সার", value: "Lung Cancer" },
    { id: "3", label: "প্রোস্টেট ক্যান্সার", value: "Prostate Cancer" },
    { id: "4", label: "কলোরেক্টাল ক্যান্সার", value: "Colorectal Cancer" },
    { id: "5", label: "লিউকেমিয়া/লিম্ফোমা", value: "Leukemia/Lymphoma" },
    { id: "6", label: "স্কিন ক্যান্সার", value: "Skin Cancer" },
    { id: "7", label: "অন্যান্য", value: "Others" },
  ];

  const hindiOptionsCancer = [
    { id: "1", label: "ब्रेस्ट कैंसर", value: "Breast Cancer" },
    { id: "2", label: "लंग कैंसर", value: "Lung Cancer" },
    { id: "3", label: "प्रोस्टेट कैंसर", value: "Prostate Cancer" },
    { id: "4", label: "कोलोरेक्टल कैंसर", value: "Colorectal Cancer" },
    { id: "5", label: "ल्यूकेमिया/लिम्फोमा", value: "Leukemia/Lymphoma" },
    { id: "6", label: "स्किन कैंसर", value: "Skin Cancer" },
    { id: "7", label: "अन्य", value: "Others" },
  ];

  const assameseOptionsCancer = [
    { id: "1", label: "ব্ৰেষ্ট ক্যানচাৰ", value: "Breast Cancer" },
    { id: "2", label: "লাং ক্যানচাৰ", value: "Lung Cancer" },
    { id: "3", label: "প্ৰষ্টেট ক্যানচাৰ", value: "Prostate Cancer" },
    { id: "4", label: "ক'লৰেক্টেল ক্যানচাৰ", value: "Colorectal Cancer" },
    { id: "5", label: "লিউকেমিয়া/লিম্ফোমা", value: "Leukemia/Lymphoma" },
    { id: "6", label: "চামৰাৰ ক্যানচাৰ", value: "Skin Cancer" },
    { id: "7", label: "অন্যান্য", value: "Others" },
  ];

  const CancerOptions = {
    en: englishOptionsCancer,
    bn: bengaliOptionsCancer,
    hi: hindiOptionsCancer,
    as: assameseOptionsCancer,
  };
  // Renal Urological Chronic Options
  const englishOptionsRenalUrological = [
    {
      id: "1",
      label: "Chronic Kidney Disease (CKD)",
      value: "Chronic Kidney Disease (CKD)",
    },
    {
      id: "2",
      label: "Recurrent Urinary Tract Infections (UTIs)",
      value: "Recurrent Urinary Tract Infections (UTIs)",
    },
    { id: "3", label: "Kidney Stones", value: "Kidney Stones" },
    {
      id: "4",
      label: "Prostate Disorders (Benign Prostatic Hyperplasia - BPH)",
      value: "Prostate Disorders (Benign Prostatic Hyperplasia - BPH)",
    },
    { id: "5", label: "Others", value: "Others" },
  ];

  const hindiOptionsRenalUrological = [
    {
      id: "1",
      label: "क्रोनिक किडनी रोग (CKD)",
      value: "Chronic Kidney Disease (CKD)",
    },
    {
      id: "2",
      label: "बार-बार यूरिनरी ट्रैक्ट इन्फेक्शन्स (UTIs)",
      value: "Recurrent Urinary Tract Infections (UTIs)",
    },
    { id: "3", label: "किडनी स्टोन्स", value: "Kidney Stones" },
    {
      id: "4",
      label: "प्रोस्टेट विकार (बेनीन प्रोस्टेटिक हाइपरप्लेसिया - BPH)",
      value: "Prostate Disorders (Benign Prostatic Hyperplasia - BPH)",
    },
    { id: "5", label: "अन्य", value: "Others" },
  ];

  const bengaliOptionsRenalUrological = [
    {
      id: "1",
      label: "চিরস্থায়ী বৃক্ক রোগ (CKD)",
      value: "Chronic Kidney Disease (CKD)",
    },
    {
      id: "2",
      label: "পুনরাবৃত্তি ইউরিনারি ট্র্যাক্ট ইনফেকশন (UTIs)",
      value: "Recurrent Urinary Tract Infections (UTIs)",
    },
    { id: "3", label: "বৃক্ক পাথর", value: "Kidney Stones" },
    {
      id: "4",
      label: "প্রোস্টেটের অসুখ (বেনাইন প্রোস্টেটিক হাইপারপ্ল্যাসিয়া - BPH)",
      value: "Prostate Disorders (Benign Prostatic Hyperplasia - BPH)",
    },
    { id: "5", label: "অন্যান্য", value: "Others" },
  ];

  const assameseOptionsRenalUrological = [
    {
      id: "1",
      label: "চিৰস্থায়ী বৃক্ক ৰোগ (CKD)",
      value: "Chronic Kidney Disease (CKD)",
    },
    {
      id: "2",
      label: "পুনৰাৱৃত্তি ইউৰিনাৰী ট্রেক্ট ইনফেকশন (UTIs)",
      value: "Recurrent Urinary Tract Infections (UTIs)",
    },
    { id: "3", label: "বৃক্কৰ পাথৰ", value: "Kidney Stones" },
    {
      id: "4",
      label: "প্ৰোস্টেটৰ অসুখ (বেনাইন প্ৰোস্টেটিক হাইপারপ্লেচিয়া - BPH)",
      value: "Prostate Disorders (Benign Prostatic Hyperplasia - BPH)",
    },
    { id: "5", label: "অন্যান্য", value: "Others" },
  ];

  const ReOptions = {
    en: englishOptionsRenalUrological,
    bn: bengaliOptionsRenalUrological,
    hi: hindiOptionsRenalUrological,
    as: assameseOptionsRenalUrological,
  };

  // Gas Chronic Options
  const englishOptionsGastrointestinal = [
    {
      id: "1",
      label: "Gastroesophageal Reflux Disease (GERD)",
      value: "Gastroesophageal Reflux Disease (GERD)",
    },
    {
      id: "2",
      label: "Irritable Bowel Syndrome (IBS)",
      value: "Irritable Bowel Syndrome (IBS)",
    },
    {
      id: "3",
      label: "Chronic Hepatitis (Hepatitis B or C)",
      value: "Chronic Hepatitis (Hepatitis B or C)",
    },
    {
      id: "4",
      label: "Fatty Liver Disease (Non-Alcoholic Steatohepatitis - NASH)",
      value: "Fatty Liver Disease (Non-Alcoholic Steatohepatitis - NASH)",
    },
    { id: "5", label: "Others", value: "Others" },
  ];

  const hindiOptionsGastrointestinal = [
    {
      id: "1",
      label: "गैस्ट्रोइसोफेगल रिफ्लक्स डिजीज (GERD)",
      value: "Gastroesophageal Reflux Disease (GERD)",
    },
    {
      id: "2",
      label: "इरिटेबल बाउल सिंड्रोम (IBS)",
      value: "Irritable Bowel Syndrome (IBS)",
    },
    {
      id: "3",
      label: "क्रोनिक हेपेटाइटिस (हेपेटाइटिस B या C)",
      value: "Chronic Hepatitis (Hepatitis B or C)",
    },
    {
      id: "4",
      label: "फैटी लिवर डिजीज (नॉन-अल्कोहलिक स्टीटोहेपेटाइटिस - NASH)",
      value: "Fatty Liver Disease (Non-Alcoholic Steatohepatitis - NASH)",
    },
    { id: "5", label: "अन्य", value: "Others" },
  ];

  const bengaliOptionsGastrointestinal = [
    {
      id: "1",
      label: "গ্যাসট্রোইসোফেগাল রিফ্লাক্স ডিজিজ (GERD)",
      value: "Gastroesophageal Reflux Disease (GERD)",
    },
    {
      id: "2",
      label: "ইরিটেবল বাওয়েল সিনড্রোম (IBS)",
      value: "Irritable Bowel Syndrome (IBS)",
    },
    {
      id: "3",
      label: "চিরস্থায়ী হেপাটাইটিস (হেপাটাইটিস B অথবা C)",
      value: "Chronic Hepatitis (Hepatitis B or C)",
    },
    {
      id: "4",
      label: "ফ্যাটি লিভার ডিজিজ (নন-আলকোহলিক স্টেটোহেপাটাইটিস - NASH)",
      value: "Fatty Liver Disease (Non-Alcoholic Steatohepatitis - NASH)",
    },
    { id: "5", label: "অন্যান্য", value: "Others" },
  ];

  const assameseOptionsGastrointestinal = [
    {
      id: "1",
      label: "গ্যাস্ট্রোইসোফেগাল ৰিফ্লাক্স ডিজিজ (GERD)",
      value: "Gastroesophageal Reflux Disease (GERD)",
    },
    {
      id: "2",
      label: "ইৰিটেবল বাওয়েল সিনড্ৰোম (IBS)",
      value: "Irritable Bowel Syndrome (IBS)",
    },
    {
      id: "3",
      label: "চিৰস্থায়ী হেপাটাইটিস (হেপাটাইটিস B অথবা C)",
      value: "Chronic Hepatitis (Hepatitis B or C)",
    },
    {
      id: "4",
      label: "ফেটী লিভাৰ ডিজিজ (নন-আলকোহলিক স্টেটোহেপাটাইটিস - NASH)",
      value: "Fatty Liver Disease (Non-Alcoholic Steatohepatitis - NASH)",
    },
    { id: "5", label: "অন্যান্য", value: "Others" },
  ];

  const GasOptions = {
    en: englishOptionsGastrointestinal,
    bn: bengaliOptionsGastrointestinal,
    hi: hindiOptionsGastrointestinal,
    as: assameseOptionsGastrointestinal,
  };

  // Neurological Chronic Options
  const englishOptionsNeurological = [
    { id: "1", label: "Epilepsy", value: "Epilepsy" },
    { id: "2", label: "Parkinson’s Disease", value: "Parkinson’s Disease" },
    {
      id: "3",
      label: "Alzheimer’s Disease and Other Dementias",
      value: "Alzheimer’s Disease and Other Dementias",
    },
    {
      id: "4",
      label: "Multiple Sclerosis (MS)",
      value: "Multiple Sclerosis (MS)",
    },
    {
      id: "5",
      label: "Migraines and Chronic Headaches",
      value: "Migraines and Chronic Headaches",
    },
    {
      id: "6",
      label: "Neuropathy (Peripheral Neuropathy)",
      value: "Neuropathy (Peripheral Neuropathy)",
    },
    { id: "7", label: "Others", value: "Others" },
  ];

  const hindiOptionsNeurological = [
    { id: "1", label: "मिर्गी", value: "Epilepsy" },
    { id: "2", label: "पार्किंसंस रोग", value: "Parkinson’s Disease" },
    {
      id: "3",
      label: "एल्जाइमर रोग और अन्य डिमेंशिया",
      value: "Alzheimer’s Disease and Other Dementias",
    },
    {
      id: "4",
      label: "मल्टीपल स्क्लेरोसिस (MS)",
      value: "Multiple Sclerosis (MS)",
    },
    {
      id: "5",
      label: "माइग्रेन और पुरानी सिरदर्द",
      value: "Migraines and Chronic Headaches",
    },
    {
      id: "6",
      label: "न्यूरोपैथी (पेरिफेरल न्यूरोपैथी)",
      value: "Neuropathy (Peripheral Neuropathy)",
    },
    { id: "7", label: "अन्य", value: "Others" },
  ];

  const bengaliOptionsNeurological = [
    { id: "1", label: "মৃগী", value: "Epilepsy" },
    { id: "2", label: "পারকিনসন রোগ", value: "Parkinson’s Disease" },
    {
      id: "3",
      label: "এলজাইমার রোগ এবং অন্যান্য ডিমেনশিয়া",
      value: "Alzheimer’s Disease and Other Dementias",
    },
    {
      id: "4",
      label: "মাল্টিপল স্ক্লেরোসিস (MS)",
      value: "Multiple Sclerosis (MS)",
    },
    {
      id: "5",
      label: "মাইগ্রেন এবং দীর্ঘস্থায়ী মাথাব্যথা",
      value: "Migraines and Chronic Headaches",
    },
    {
      id: "6",
      label: "নিউরোপ্যাথি (পেরিফেরাল নিউরোপ্যাথি)",
      value: "Neuropathy (Peripheral Neuropathy)",
    },
    { id: "7", label: "অন্যান্য", value: "Others" },
  ];

  const assameseOptionsNeurological = [
    { id: "1", label: "মৃগী", value: "Epilepsy" },
    { id: "2", label: "পাৰ্কিনচনৰ ৰোগ", value: "Parkinson’s Disease" },
    {
      id: "3",
      label: "এলজাইমাৰ ৰোগ আৰু অন্য ডিমেনশিয়া",
      value: "Alzheimer’s Disease and Other Dementias",
    },
    {
      id: "4",
      label: "মাল্টিপল স্ক্লেৰ'সিছ (MS)",
      value: "Multiple Sclerosis (MS)",
    },
    {
      id: "5",
      label: "মাইগ্ৰেইন আৰু দীঘলীয়া মূৰ্ছা",
      value: "Migraines and Chronic Headaches",
    },
    {
      id: "6",
      label: "নিউৰোপেথি (পেৰিফেৰেল নিউৰোপেথি)",
      value: "Neuropathy (Peripheral Neuropathy)",
    },
    { id: "7", label: "অন্যান্য", value: "Others" },
  ];

  const NeuroOptions = {
    en: englishOptionsNeurological,
    bn: bengaliOptionsNeurological,
    hi: hindiOptionsNeurological,
    as: assameseOptionsNeurological,
  };

  // Respiratory Chronic Options
  const englishOptionsRespiratory = [
    { id: "1", label: "Asthma", value: "Asthma" },
    {
      id: "2",
      label: "Chronic Obstructive Pulmonary Disease (COPD)",
      value: "Chronic Obstructive Pulmonary Disease (COPD)",
    },
    { id: "3", label: "Sleep Apnea", value: "Sleep Apnea" },
    { id: "4", label: "Chronic Bronchitis", value: "Chronic Bronchitis" },
    { id: "5", label: "Pulmonary Fibrosis", value: "Pulmonary Fibrosis" },
    { id: "6", label: "Others", value: "Others" },
  ];

  const hindiOptionsRespiratory = [
    { id: "1", label: "अस्थमा", value: "Asthma" },
    {
      id: "2",
      label: "क्रोनिक ऑब्सट्रक्टिव पल्मोनरी डिजीज (COPD)",
      value: "Chronic Obstructive Pulmonary Disease (COPD)",
    },
    { id: "3", label: "स्लीप एपनिया", value: "Sleep Apnea" },
    { id: "4", label: "क्रोनिक ब्रॉन्काइटिस", value: "Chronic Bronchitis" },
    { id: "5", label: "पल्मोनरी फाइब्रोसिस", value: "Pulmonary Fibrosis" },
    { id: "6", label: "अन्य", value: "Others" },
  ];

  const bengaliOptionsRespiratory = [
    { id: "1", label: "অস্থমা", value: "Asthma" },
    {
      id: "2",
      label: "চিরস্থায়ী অবস্ট্রাকটিভ পালমোনারি ডিজিজ (COPD)",
      value: "Chronic Obstructive Pulmonary Disease (COPD)",
    },
    { id: "3", label: "নিদ্রা অ্যাপনিয়া", value: "Sleep Apnea" },
    { id: "4", label: "চিরস্থায়ী ব্রঙ্কাইটিস", value: "Chronic Bronchitis" },
    { id: "5", label: "পালমোনারি ফাইব্রোসিস", value: "Pulmonary Fibrosis" },
    { id: "6", label: "অন্যান্য", value: "Others" },
  ];

  const assameseOptionsRespiratory = [
    { id: "1", label: "অস্থমা", value: "Asthma" },
    {
      id: "2",
      label: "চিৰস্থায়ী অবস্ট্ৰাকটিভ পালমোনাৰী ডিজিজ (COPD)",
      value: "Chronic Obstructive Pulmonary Disease (COPD)",
    },
    { id: "3", label: "নিদ্ৰা এপেনিয়া", value: "Sleep Apnea" },
    { id: "4", label: "চিৰস্থায়ী ব্রঙ্কাইটিস", value: "Chronic Bronchitis" },
    { id: "5", label: "পালমোনাৰী ফাইব্ৰ'ছিছ", value: "Pulmonary Fibrosis" },
    { id: "6", label: "অন্যান্য", value: "Others" },
  ];

  const ResOptions = {
    en: englishOptionsRespiratory,
    bn: bengaliOptionsRespiratory,
    hi: hindiOptionsRespiratory,
    as: assameseOptionsRespiratory,
  };

  // Cardio Chronic Options
  const englishOptionsCardiovascular = [
    { id: "1", label: "Hypertension", value: "Hypertension" },
    { id: "2", label: "Heart Disease", value: "Heart Disease" },
    {
      id: "3",
      label: "Congestive Heart Failure (CHF)",
      value: "Congestive Heart Failure (CHF)",
    },
    { id: "4", label: "Arrhythmia", value: "Arrhythmia" },
    {
      id: "5",
      label: "Coronary Artery Disease",
      value: "Coronary Artery Disease",
    },
    { id: "6", label: "Others", value: "Others" },
  ];

  const hindiOptionsCardiovascular = [
    { id: "1", label: "हाईपरटेंशन", value: "Hypertension" },
    { id: "2", label: "हृदय रोग", value: "Heart Disease" },
    {
      id: "3",
      label: "कॉन्जेसटिव हार्ट फेल्योर (CHF)",
      value: "Congestive Heart Failure (CHF)",
    },
    { id: "4", label: "एरिथमिया", value: "Arrhythmia" },
    {
      id: "5",
      label: "कोरोनरी आर्टरी डिजीज",
      value: "Coronary Artery Disease",
    },
    { id: "6", label: "अन्य", value: "Others" },
  ];

  const bengaliOptionsCardiovascular = [
    { id: "1", label: "উচ্চ রক্তচাপ", value: "Hypertension" },
    { id: "2", label: "হৃদরোগ", value: "Heart Disease" },
    {
      id: "3",
      label: "কনজেস্টিভ হার্ট ফেইলিউর (CHF)",
      value: "Congestive Heart Failure (CHF)",
    },
    { id: "4", label: "অ্যারিথমিয়া", value: "Arrhythmia" },
    {
      id: "5",
      label: "কোরনারি আর্টারি ডিজিজ",
      value: "Coronary Artery Disease",
    },
    { id: "6", label: "অন্যান্য", value: "Others" },
  ];

  const assameseOptionsCardiovascular = [
    { id: "1", label: "উচ্চ ৰক্তচাপ", value: "Hypertension" },
    { id: "2", label: "হৃদৰোগ", value: "Heart Disease" },
    {
      id: "3",
      label: "কনজেষ্টিভ হৃদয় ফেলিওৰ (CHF)",
      value: "Congestive Heart Failure (CHF)",
    },
    { id: "4", label: "অ্যারিথমিয়া", value: "Arrhythmia" },
    {
      id: "5",
      label: "কৰ'নাৰী আৰ্টাৰী ডিজিজ",
      value: "Coronary Artery Disease",
    },
    { id: "6", label: "অন্যান্য", value: "Others" },
  ];

  const CardOptions = {
    en: englishOptionsCardiovascular,
    bn: bengaliOptionsCardiovascular,
    hi: hindiOptionsCardiovascular,
    as: assameseOptionsCardiovascular,
  };

  // Diabetes Chronic Options
  const englishOptionsDiabetes = [
    { id: "1", label: "Type 1 Diabetes", value: "Type 1 Diabetes" },
    { id: "2", label: "Type 2 Diabetes", value: "Type 2 Diabetes" },
    { id: "3", label: "Gestational Diabetes", value: "Gestational Diabetes" },
    { id: "4", label: "Hypothyroidism", value: "Hypothyroidism" },
    { id: "5", label: "Hyperthyroidism", value: "Hyperthyroidism" },
    { id: "6", label: "Others", value: "Others" },
  ];

  const hindiOptionsDiabetes = [
    { id: "1", label: "टाइप 1 डायबिटीज", value: "Type 1 Diabetes" },
    { id: "2", label: "टाइप 2 डायबिटीज", value: "Type 2 Diabetes" },
    { id: "3", label: "गेसटेशनल डायबिटीज", value: "Gestational Diabetes" },
    { id: "4", label: "हाइपोथायरायडिज़म", value: "Hypothyroidism" },
    { id: "5", label: "हाइपरथायरायडिज़म", value: "Hyperthyroidism" },
    { id: "6", label: "अन्य", value: "Others" },
  ];

  const bengaliOptionsDiabetes = [
    { id: "1", label: "টাইপ 1 ডায়াবেটিস", value: "Type 1 Diabetes" },
    { id: "2", label: "টাইপ 2 ডায়াবেটিস", value: "Type 2 Diabetes" },
    {
      id: "3",
      label: "গ্যাস্টেশনাল ডায়াবেটিস",
      value: "Gestational Diabetes",
    },
    { id: "4", label: "হাইপোথাইরয়েডিজম", value: "Hypothyroidism" },
    { id: "5", label: "হাইপারথাইরয়েডিজম", value: "Hyperthyroidism" },
    { id: "6", label: "অন্যান্য", value: "Others" },
  ];

  const assameseOptionsDiabetes = [
    { id: "1", label: "টাইপ 1 ডায়াবেটিস", value: "Type 1 Diabetes" },
    { id: "2", label: "টাইপ 2 ডায়াবেটিস", value: "Type 2 Diabetes" },
    { id: "3", label: "গেষ্টেশানাল ডায়াবেটিস", value: "Gestational Diabetes" },
    { id: "4", label: "হাইপোথাইরয়েডিজম", value: "Hypothyroidism" },
    { id: "5", label: "হাইপারথাইরয়েডিজম", value: "Hyperthyroidism" },
    { id: "6", label: "অন্যান্য", value: "Others" },
  ];

  const DiabatOptions = {
    en: englishOptionsDiabetes,
    bn: bengaliOptionsDiabetes,
    hi: hindiOptionsDiabetes,
    as: assameseOptionsDiabetes,
  };

  // Musculoskeletal Chronic Options
  const englishOptionsMusculoskeletal = [
    { id: "1", label: "Osteoarthritis", value: "Osteoarthritis" },
    { id: "2", label: "Osteoporosis", value: "Osteoporosis" },
    { id: "3", label: "Chronic Back Pain", value: "Chronic Back Pain" },
    { id: "4", label: "Fibromyalgia", value: "Fibromyalgia" },
    { id: "5", label: "Gout", value: "Gout" },
    { id: "6", label: "Others", value: "Others" },
  ];

  const bengaliOptionsMusculoskeletal = [
    { id: "1", label: "অস্টিওআর্থ্রাইটিস", value: "Osteoarthritis" },
    { id: "2", label: "অস্টিওপোরোসিস", value: "Osteoporosis" },
    { id: "3", label: "ক্রনিক পিঠের ব্যথা", value: "Chronic Back Pain" },
    { id: "4", label: "ফাইব্রোমাইলজিয়া", value: "Fibromyalgia" },
    { id: "5", label: "গাউট", value: "Gout" },
    { id: "6", label: "অন্যান্য", value: "Others" },
  ];

  const hindiOptionsMusculoskeletal = [
    { id: "1", label: "ऑस्टियोआर्थराइटिस", value: "Osteoarthritis" },
    { id: "2", label: "ऑस्टियोपोरोसिस", value: "Osteoporosis" },
    { id: "3", label: "क्रोनिक बैक पेन", value: "Chronic Back Pain" },
    { id: "4", label: "फाइब्रोमायल्जिया", value: "Fibromyalgia" },
    { id: "5", label: "गाउट", value: "Gout" },
    { id: "6", label: "अन्य", value: "Others" },
  ];

  const assameseOptionsMusculoskeletal = [
    { id: "1", label: "অষ্টিঅ’আৰ্থ্ৰাইটিছ", value: "Osteoarthritis" },
    { id: "2", label: "অষ্টিঅ’প’ৰ’ছিছ", value: "Osteoporosis" },
    { id: "3", label: "ক্ৰনিক পিঠিৰ বিষ", value: "Chronic Back Pain" },
    { id: "4", label: "ফাইব্ৰোমাইলজিয়া", value: "Fibromyalgia" },
    { id: "5", label: "গাউট", value: "Gout" },
    { id: "6", label: "অন্যান্য", value: "Others" },
  ];
  const MusculoskeletalOptions = {
    en: englishOptionsMusculoskeletal,
    bn: bengaliOptionsMusculoskeletal,
    hi: hindiOptionsMusculoskeletal,
    as: assameseOptionsMusculoskeletal,
  };

  // Infectious Disease
  const optionsDisease =
    language === "en"
      ? [
          { id: "1", label: "COVID-19", value: "COVID-19" },
          { id: "2", label: "Tuberculosis", value: "Tuberculosis" },
          { id: "3", label: "Other", value: "Other" },
        ]
      : language === "bn"
      ? [
          { id: "1", label: "কোভিড-১৯", value: "COVID-19" },
          { id: "2", label: "যক্ষ্মা", value: "Tuberculosis" },
          { id: "3", label: "অন্যান্য", value: "Other" },
        ]
      : language === "hi"
      ? [
          { id: "1", label: "कोविड-19", value: "COVID-19" },
          { id: "2", label: "क्षयरोग", value: "Tuberculosis" },
          { id: "3", label: "अन्य", value: "Other" },
        ]
      : language === "as"
      ? [
          { id: "1", label: "ক’ভিড-১৯", value: "COVID-19" },
          { id: "2", label: "যক্ষ্মা", value: "Tuberculosis" },
          { id: "3", label: "অন্যান্য", value: "Other" },
        ]
      : [
          { id: "1", label: "COVID-19", value: "COVID-19" },
          { id: "2", label: "Tuberculosis", value: "Tuberculosis" },
          { id: "3", label: "Other", value: "Other" },
        ]; // Default to English

  // Vaccine
  const englishOptionsVaccine = [
    { id: "1", label: "BCG (Bacillus Calmette-Guérin)", value: "BCG" },
    { id: "2", label: "OPV (Oral Polio Vaccine)", value: "OPV" },
    { id: "3", label: "Hepatitis B", value: "Hepatitis B" },
    { id: "4", label: "Pentavalent Vaccine", value: "Pentavalent" },
    { id: "5", label: "Rotavirus Vaccine", value: "Rotavirus" },
    { id: "6", label: "PCV (Pneumococcal Conjugate Vaccine)", value: "PCV" },
    { id: "7", label: "IPV (Inactivated Polio Vaccine)", value: "IPV" },
    { id: "8", label: "Measles and Rubella (MR) Vaccine", value: "MR" },
    { id: "9", label: "JE Vaccine (Japanese Encephalitis)", value: "JE" },
    { id: "10", label: "Hepatitis A", value: "Hepatitis A" },
    { id: "11", label: "Varicella Vaccine", value: "Varicella" },
    { id: "12", label: "HPV (Human Papillomavirus) Vaccine", value: "HPV" },
    {
      id: "13",
      label: "Diphtheria, Pertussis, and Tetanus Vaccine",
      value: "DPT",
    },
    { id: "14", label: "Meningococcal Vaccine", value: "Meningococcal" },
    { id: "15", label: "Typhoid Conjugate Vaccine (TCV)", value: "TCV" },
    { id: "16", label: "Tdap (Tetanus, Diphtheria, Pertussis)", value: "TDAP" },
    { id: "17", label: "Pneumococcal Vaccine", value: "Pneumococcal" },
    { id: "18", label: "Zoster Vaccine", value: "Zoster" },
    { id: "19", label: "Yellow Fever Vaccine", value: "Yellow Fever" },
    { id: "20", label: "Rabies Vaccine", value: "Rabies" },
    { id: "21", label: "Typhoid Vaccine", value: "Typhoid" },
    { id: "22", label: "Cholera Vaccine", value: "Cholera" },
    { id: "23", label: "COVID-19 Vaccines", value: "Covid-19" },
    { id: "24", label: "H1N1 Influenza Vaccine", value: "H1N1" },
    { id: "25", label: "Anthrax Vaccine", value: "Anthrax" },
  ];

  const hindiOptionsVaccine = [
    { id: "1", label: "BCG (बैसिलस कैलमेट-ग्यूरिन)", value: "BCG" },
    { id: "2", label: "OPV (मौखिक पोलियो वैक्सीन)", value: "OPV" },
    { id: "3", label: "हेपेटाइटिस बी", value: "Hepatitis B" },
    { id: "4", label: "पेंटावैलेंट वैक्सीन", value: "Pentavalent" },
    { id: "5", label: "रोटावायरस वैक्सीन", value: "Rotavirus" },
    { id: "6", label: "PCV (न्यूमोकॉकल कंजुगेट वैक्सीन)", value: "PCV" },
    { id: "7", label: "IPV (इनएक्टिवेटेड पोलियो वैक्सीन)", value: "IPV" },
    { id: "8", label: "खसरा और रूबेला (MR) वैक्सीन", value: "MR" },
    { id: "9", label: "JE वैक्सीन (जापानी एन्सेफैलाइटिस)", value: "JE" },
    { id: "10", label: "हेपेटाइटिस ए", value: "Hepatitis A" },
    { id: "11", label: "वेरिसेला वैक्सीन", value: "Varicella" },
    { id: "12", label: "HPV (ह्यूमन पैपिलोमावायरस) वैक्सीन", value: "HPV" },
    { id: "13", label: "डिप्थीरिया, पर्टसिस, और टेटनस वैक्सीन", value: "DPT" },
    { id: "14", label: "मेनीनगोक्कल वैक्सीन", value: "Meningococcal" },
    { id: "15", label: "टायफॉइड कंजुगेट वैक्सीन (TCV)", value: "TCV" },
    { id: "16", label: "Tdap (टेटनस, डिप्थीरिया, पर्टसिस)", value: "TDAP" },
    { id: "17", label: "न्यूमोकॉकल वैक्सीन", value: "Pneumococcal" },
    { id: "18", label: "जोस्टर वैक्सीन", value: "Zoster" },
    { id: "19", label: "यलो फीवर वैक्सीन", value: "Yellow Fever" },
    { id: "20", label: "रेबीज वैक्सीन", value: "Rabies" },
    { id: "21", label: "टायफॉइड वैक्सीन", value: "Typhoid" },
    { id: "22", label: "कोलेरा वैक्सीन", value: "Cholera" },
    { id: "23", label: "COVID-19 वैक्सीनेशन", value: "Covid-19" },
    { id: "24", label: "H1N1 इन्फ्लूएंजा वैक्सीन", value: "H1N1" },
    { id: "25", label: "एंथ्रैक्स वैक्सीन", value: "Anthrax" },
  ];

  const bengaliOptionsVaccine = [
    { id: "1", label: "BCG (ব্যাসিলাস ক্যালমেট-গ্যুরিন)", value: "BCG" },
    { id: "2", label: "OPV (মৌখিক পোলিও ভ্যাকসিন)", value: "OPV" },
    { id: "3", label: "হেপাটাইটিস বি", value: "Hepatitis B" },
    { id: "4", label: "পেন্টাভ্যালেন্ট ভ্যাকসিন", value: "Pentavalent" },
    { id: "5", label: "রোটাভাইরাস ভ্যাকসিন", value: "Rotavirus" },
    { id: "6", label: "PCV (নিউমোকক্কাল কনজুগেট ভ্যাকসিন)", value: "PCV" },
    { id: "7", label: "IPV (ইনঅ্যাকটিভেটেড পোলিও ভ্যাকসিন)", value: "IPV" },
    { id: "8", label: "খসরা এবং রুবেলা (MR) ভ্যাকসিন", value: "MR" },
    { id: "9", label: "JE ভ্যাকসিন (জাপানি এনসেফালাইটিস)", value: "JE" },
    { id: "10", label: "হেপাটাইটিস এ", value: "Hepatitis A" },
    { id: "11", label: "ভেরিসেলা ভ্যাকসিন", value: "Varicella" },
    {
      id: "12",
      label: "HPV (হিউম্যান প্যাপিলোমাভাইরাস) ভ্যাকসিন",
      value: "HPV",
    },
    {
      id: "13",
      label: "ডিপথিরিয়া, পারটুসিস, এবং টেটানাস ভ্যাকসিন",
      value: "DPT",
    },
    { id: "14", label: "মেনিনগক্কাল ভ্যাকসিন", value: "Meningococcal" },
    { id: "15", label: "টাইফয়েড কনজুগেট ভ্যাকসিন (TCV)", value: "TCV" },
    { id: "16", label: "Tdap (টেটানাস, ডিপথিরিয়া, পারটুসিস)", value: "TDAP" },
    { id: "17", label: "নিউমোকক্কাল ভ্যাকসিন", value: "Pneumococcal" },
    { id: "18", label: "জোস্টার ভ্যাকসিন", value: "Zoster" },
    { id: "19", label: "ইয়েলো ফিভার ভ্যাকসিন", value: "Yellow Fever" },
    { id: "20", label: "রেবিস ভ্যাকসিন", value: "Rabies" },
    { id: "21", label: "টাইফয়েড ভ্যাকসিন", value: "Typhoid" },
    { id: "22", label: "কলেরা ভ্যাকসিন", value: "Cholera" },
    { id: "23", label: "COVID-19 ভ্যাকসিন", value: "COVID-19" },
    { id: "24", label: "H1N1 ইনফ্লুয়েঞ্জা ভ্যাকসিন", value: "H1N1 Influenza" },
    { id: "25", label: "অ্যন্থ্রাক্স ভ্যাকসিন", value: "Anthrax" },
  ];
  const assameseOptionsVaccine = [
    { id: "1", label: "BCG (বেসিলাস ক্যালমেট-গ্যুরিন)", value: "BCG" },
    { id: "2", label: "OPV (মৌখিক পোলিও ভ্যাকসিন)", value: "OPV" },
    { id: "3", label: "হেপাটাইটিস বি", value: "Hepatitis B" },
    { id: "4", label: "পেন্টাভ্যালেন্ট ভ্যাকসিন", value: "Pentavalent" },
    { id: "5", label: "রোটাভাইরাস ভ্যাকসিন", value: "Rotavirus" },
    { id: "6", label: "PCV (নিউমোকক্কাল কনজুগেট ভ্যাকসিন)", value: "PCV" },
    { id: "7", label: "IPV (ইনঅ্যাকটিভেটেড পোলিও ভ্যাকসিন)", value: "IPV" },
    { id: "8", label: "খসরা আৰু ৰুবেলা (MR) ভ্যাকসিন", value: "MR Vaccine" },
    {
      id: "9",
      label: "JE ভ্যাকসিন (জাপানি এনসেফালাইটিস)",
      value: "JE Vaccine",
    },
    { id: "10", label: "হেপাটাইটিস এ", value: "Hepatitis A" },
    { id: "11", label: "ভেরিসেলা ভ্যাকসিন", value: "Varicella" },
    {
      id: "12",
      label: "HPV (হিউম্যান প্যাপিলোমাভাইরাস) ভ্যাকসিন",
      value: "HPVV",
    },
    {
      id: "13",
      label: "ডিপথিরিয়া, পারটুসিস, আৰু টেটানাস ভ্যাকসিন",
      value: "DPT",
    },
    { id: "14", label: "মেনিনগোক্কাল ভ্যাকসিন", value: "Meningococcal" },
    { id: "15", label: "টাইফয়েড কনজুগেট ভ্যাকসিন (TCV)", value: "TCV" },
    { id: "16", label: "Tdap (টেটানাস, ডিপথিরিয়া, পারটুসিস)", value: "TDAP" },
    { id: "17", label: "নিউমোকক্কাল ভ্যাকসিন", value: "Pneumococcal" },
    { id: "18", label: "জোস্টার ভ্যাকসিন", value: "Zoster" },
    { id: "19", label: "ইয়েলো ফিভার ভ্যাকসিন", value: "Yellow Fever" },
    { id: "20", label: "ৰেবিস ভ্যাকসিন", value: "Rabies" },
    { id: "21", label: "টাইফয়েড ভ্যাকসিন", value: "Typhoid" },
    { id: "22", label: "কলেরা ভ্যাকসিন", value: "Cholera" },
    { id: "23", label: "COVID-19 ভ্যাকসিন", value: "COVID-19" },
    { id: "24", label: "H1N1 ইনফ্লুয়েঞ্জা ভ্যাকসিন", value: "H1N1 Influenza" },
    { id: "25", label: "অ্যন্থ্রাক্স ভ্যাকসিন", value: "Anthrax" },
  ];

  // Allergies
  const AleergiesOptions =
    language === "en"
      ? [
          { id: "1", label: "Drug", value: "Drug" },
          { id: "2", label: "Food", value: "Food" },
          { id: "3", label: "Environment", value: "Environment" },
        ]
      : language === "bn"
      ? [
          { id: "1", label: "ওষুধ", value: "Drug" },
          { id: "2", label: "খাদ্য", value: "Food" },
          { id: "3", label: "পরিবেশ", value: "Environment" },
        ]
      : language === "hi"
      ? [
          { id: "1", label: "दवा", value: "Drug" },
          { id: "2", label: "खाद्य", value: "Food" },
          { id: "3", label: "पर्यावरण", value: "Environment" },
        ]
      : language === "as"
      ? [
          { id: "1", label: "ঔষধ", value: "Drug" },
          { id: "2", label: "খাদ্য", value: "Food" },
          { id: "3", label: "পরিবেশ", value: "Environment" },
        ]
      : [
          { id: "1", label: "Drug", value: "Drug" },
          { id: "2", label: "Food", value: "Food" },
          { id: "3", label: "Environment", value: "Environment" },
        ]; // Default to English

  // Treatment Option
  const TreatmentOptions =
    language === "en"
      ? [
          { id: "1", label: "Ayurveda", value: "ayurveda" },
          { id: "2", label: "Homeopathy", value: "homeopathy" },
          { id: "3", label: "Other treatments", value: "other_treatments" },
        ]
      : language === "bn"
      ? [
          { id: "1", label: "আয়ুর্বেদ", value: "ayurveda" },
          { id: "2", label: "হোমিওপ্যাথি", value: "homeopathy" },
          { id: "3", label: "অন্যান্য চিকিৎসা", value: "other_treatments" },
        ]
      : language === "hi"
      ? [
          { id: "1", label: "आयुर्वेद", value: "ayurveda" },
          { id: "2", label: "होम्योपैथी", value: "homeopathy" },
          { id: "3", label: "अन्य उपचार", value: "other_treatments" },
        ]
      : language === "as"
      ? [
          { id: "1", label: "আয়ুর্বেদ", value: "ayurveda" },
          { id: "2", label: "হোমিওপ্যাথি", value: "homeopathy" },
          { id: "3", label: "অন্যান্য চিকিৎসা", value: "other_treatments" },
        ]
      : [
          { id: "1", label: "Ayurveda", value: "ayurveda" },
          { id: "2", label: "Homeopathy", value: "homeopathy" },
          { id: "3", label: "Other treatments", value: "other_treatments" },
        ]; // Default to English

  // Reproductive Health Option
  const HealthConditionsOptions =
    language === "en"
      ? [
          {
            id: "1",
            label: "Erectile Dysfunction",
            value: "Erectile Dysfunction",
          },
          { id: "2", label: "Fertility", value: "Fertility" },
          { id: "3", label: "Others", value: "Others" },
        ]
      : language === "bn"
      ? [
          {
            id: "1",
            label: "স্টেম্বান ডিফাংকশন",
            value: "Erectile Dysfunction",
          },
          { id: "2", label: "প্রজনন", value: "Fertility" },
          { id: "3", label: "অন্যান্য", value: "Others" },
        ]
      : language === "hi"
      ? [
          { id: "1", label: "स्तंभन दोष", value: "Erectile Dysfunction" },
          { id: "2", label: "प्रजनन क्षमता", value: "Fertility" },
          { id: "3", label: "अन्य", value: "Others" },
        ]
      : language === "as"
      ? [
          { id: "1", label: "অঙ্গ সম্পূর্ণতা", value: "Erectile Dysfunction" },
          { id: "2", label: "প্রজনন ক্ষমতা", value: "Fertility" },
          { id: "3", label: "অন্যান্য", value: "Others" },
        ]
      : [
          {
            id: "1",
            label: "Erectile Dysfunction",
            value: "Erectile Dysfunction",
          },
          { id: "2", label: "Fertility", value: "Fertility" },
          { id: "3", label: "Others", value: "Others" },
        ]; // Default to English

  // Time Option
  const TimeOptions = {
    englabel: ["Month", "Year", "Day"],
    hindilabel: ["महीना", "साल", "दिन"],
    assameseLabel: ["মাহ", "বছর", "দিন"],
    benglabel: ["মাস", "বছর", "দিন"],
    value: ["month", "year", "day"],
  };
  const languageMap = {
    en: "englabel",
    hi: "hindilabel",
    bn: "benglabel",
    as: "assameseLabel",
  };

  // Variables
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  // For Modal
  const [tempAnswer, setTempAnswer] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const [tempModalValues, setTempModalValues] = useState({
    chronic: { conditions: [] },
    vision: { condition: [], other: null },
    cancer: { type: [], other: null },
    musculoskeletal: { type: [], other: null },
    urological: { type: [], other: null },
    gastrointestinal: { type: [], other: null },
    neurological: { type: [], other: null },
    respiratory: { type: [], other: null },
    diabetes: { type: [], other: null },
    cardiovascular: { type: [], other: null },
    infections: { types: [], other: null },
    allergies: { types: [] },
    surgery: { details: null },
    vaccine: { selected: [] },
    alternativeMedicine: { types: [], other: null },
    reproductiveHealth: { conditions: [], other: null },
    menstruation: { cycle: null },
    hospitalization: { reason: null, duration: "", durationType: "" },
  });

  // Preview Modal
  const [previewModal, setPreviewModal] = useState(false);

  // For Chronic Condition

  const [Chronic, setChronic] = useState(null);
  const [ChronicConditionArray, setChronicConditionArray] = useState([]);

  // For Chronic Condition Records
  const [Vision_Condition, setVision_Condition] = useState([]);
  const [Cancer_Type, setCancer_Type] = useState([]);
  const [Musculoskeletal_Type, setMusculoskeletal_Type] = useState([]);
  const [Urological_Type, setUrological_Type] = useState([]);
  const [Gas_Type, setGas_Type] = useState([]);
  const [Neuro_Type, setNeuro_Type] = useState([]);
  const [Res_Type, setRes_Type] = useState([]);
  const [Diabat_Type, setDiabat_Type] = useState([]);
  const [Card_Type, setCard_Type] = useState([]);

  // Others record
  const [Vision, setVision] = useState(null);
  const [Cancer, setCancer] = useState(null);
  const [Musculoskeletal, setMusculoskeletal] = useState(null);
  const [Urological, setUrological] = useState(null);
  const [Gas, setGas] = useState(null);
  const [Neurological, setNeurological] = useState(null);
  const [Respiratory, setRespiratory] = useState(null);
  const [Diabatis, setDiabatis] = useState(null);
  const [Cardio, setCardio] = useState(null);

  // For other questions
  const [infect, setinfect] = useState(null);
  const [infectname, setinfectname] = useState([]);
  const [infectnameother, setinfectnameother] = useState(null);

  const [allergies, setallergies] = useState(null);
  const [allergiesname, setallergiesname] = useState([]);

  const [Vaccinatin, setVaccinatin] = useState(null);
  const [selectedVaccine, setselectedVaccine] = useState([]);

  const [AlterMed, setAlterMed] = useState(null);
  const [AlterMedname, setAlterMedname] = useState([]);
  const [AlterMednamementions, setAlterMednamementions] = useState(null);

  // For Gender And Render Conditional Question
  const [gender, setgender] = useState("Male");

  const [REpHealth, setREpHealth] = useState(null);
  const [REpHealthname, setREpHealthname] = useState([]);
  const [REpHealthnamementins, setREpHealthnamementins] = useState(null);

  const [Menstruation, setMenstruation] = useState(null);
  const [Menstruationname, setMenstruationname] = useState(null);

  const [surgery, setsurgery] = useState(null);
  const [surgeryname, setsurgeryname] = useState(null);

  const [Hospitalization, setHospitalization] = useState(null);
  const [Hospitalizationname, setHospitalizationname] = useState(null);
  const [HospitalizationnameDuration, setHospitalizationnameDuration] =
    useState("");
  const [HospitalizationnameDurationname, setHospitalizationnameDurationname] =
    useState(TimeOptions.value[0]);

  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [contentHeight, setContentHeight] = useState(0);

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight], // Adjust height based on actual content
  });

  const scrollViewRef = useRef(null);
  const scrollViewRefex = useRef(null);

  const changeLanguage = (value) => {
    setLanguage(value);
  };

  // Chronic Condition
  const handleChronicConditionSelection = (value) => {
    setChronic(value);
    if (value === "Yes") {
      setTempModalValues((prev) => ({
        ...prev,
        chronic: {
          conditions: ChronicConditionArray,
        },
      }));
      setTempAnswer("Chronic");
      setModalVisible(true);
      StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
    } else if (value === "No") {
      setChronicConditionArray([]);
      setVision_Condition([]);
      setVision(null);
      setCancer_Type([]);
      setCancer(null);
      setMusculoskeletal_Type([]);
      setMusculoskeletal(null);
      setUrological_Type([]);
      setUrological(null);
      setGas_Type([]);
      setGas(null);
      setNeuro_Type([]);
      setNeurological(null);
      setRes_Type([]);
      setRespiratory(null);
      setDiabat_Type([]);
      setDiabatis(null);
      setCard_Type([]);
      setCardio(null);
    }
  };

  const handleChronicConfirm = () => {
    // Update the state based on ChronicConditionArray
    if (tempModalValues && tempModalValues?.chronic?.conditions?.length > 0) {
      setChronicConditionArray(tempModalValues.chronic.conditions);
      setChronic("Yes");
    } else {
      setChronic("No");
    }
    setModalVisible(false);
  };

  const toggleSelection = (value, setter, currentValues) => {
    if (currentValues.includes(value)) {
      setter(currentValues.filter((item) => item !== value));
    } else {
      setter([...currentValues, value]);
    }
  };
  const handleVision = () => {
    setTempAnswer("vision");
    // Initialize temp values for vision with current state
    setTempModalValues((prev) => ({
      ...prev,
      vision: {
        condition: Vision_Condition,
        other: Vision,
      },
    }));
    StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setModalVisible(true);
  };
  const handleCancer = () => {
    setTempAnswer("cancer");
    setTempModalValues((prev) => ({
      ...prev,
      cancer: {
        type: Cancer_Type,
        other: Cancer,
      },
    }));
    StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setModalVisible(true);
  };
  const handleMusculoskeletal = () => {
    setTempAnswer("Musculoskeletal");
    setTempModalValues((prev) => ({
      ...prev,
      musculoskeletal: {
        type: Musculoskeletal_Type,
        other: Musculoskeletal,
      },
    }));
    StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setModalVisible(true);
  };
  const handleUrological = () => {
    setTempAnswer("Urological");
    setTempModalValues((prev) => ({
      ...prev,
      urological: {
        type: Urological_Type,
        other: Urological,
      },
    }));
    StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setModalVisible(true);
  };
  const handleGas = () => {
    setTempAnswer("Gas");
    setTempModalValues((prev) => ({
      ...prev,
      gastrointestinal: {
        type: Gas_Type,
        other: Gas,
      },
    }));
    StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setModalVisible(true);
  };
  const handleNeuro = () => {
    setTempAnswer("Neuro");
    setTempModalValues((prev) => ({
      ...prev,
      neurological: {
        type: Neuro_Type,
        other: Neurological,
      },
    }));
    StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setModalVisible(true);
  };
  const handleRes = () => {
    setTempAnswer("Res");
    setTempModalValues((prev) => ({
      ...prev,
      respiratory: {
        type: Res_Type,
        other: Respiratory,
      },
    }));
    StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setModalVisible(true);
  };
  const handleCard = () => {
    setTempAnswer("Card");
    setTempModalValues((prev) => ({
      ...prev,
      cardiovascular: {
        type: Card_Type,
        other: Cardio,
      },
    }));
    StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setModalVisible(true);
  };
  const handleDiabet = () => {
    setTempAnswer("Diabat");
    setTempModalValues((prev) => ({
      ...prev,
      diabetes: {
        type: Diabat_Type,
        other: Diabatis,
      },
    }));
    StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setModalVisible(true);
  };

  // Clear Temp
  const handleModalHide = () => {
    // Reset temporary state after modal fully closes
    setTempAnswer(null);
    StatusBar.setBackgroundColor("transparent");
  };
  const handleInfectSelection = (selectedOption) => {
    setinfect(selectedOption);
    if (selectedOption === "Yes") {
      setTempModalValues((prev) => ({
        ...prev,
        infections: {
          types: infectname,
          other: infectnameother,
        },
      }));
      setTempAnswer("Infect");
      setTempModalValues((prev) => ({
        ...prev,
        infections: {
          types: infectname,
          other: infectnameother,
        },
      }));
      StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
      setModalVisible(true);
    } else if (selectedOption === "No") {
      setinfectname([]);
      setinfectnameother(null);
    }
  };
  const handleSurgerySelection = (selectedOption) => {
    setsurgery(selectedOption);
    if (selectedOption === "Yes") {
      setTempModalValues((prev) => ({
        ...prev,
        surgery: {
          details: surgeryname,
        },
      }));
      setTempAnswer("Surgery");
      StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
      setModalVisible(true);
    } else if (selectedOption === "No") {
      setsurgeryname(null);
    }
  };
  const handleAllergySelection = (selectedOption) => {
    setallergies(selectedOption);
    if (selectedOption === "Yes") {
      setTempModalValues((prev) => ({
        ...prev,
        allergies: {
          types: allergiesname,
        },
      }));
      setTempAnswer("Allergy");
      StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
      setModalVisible(true);
    } else if (selectedOption === "No") {
      setallergiesname([]);
    }
  };
  const handleVactineSelection = (selectedOption) => {
    setVaccinatin(selectedOption);
    if (selectedOption === "Yes") {
      setTempModalValues((prev) => ({
        ...prev,
        vaccine: {
          selected: selectedVaccine,
        },
      }));
      setTempAnswer("Vactine");
      StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
      setModalVisible(true);
    } else if (selectedOption === "No") {
      setselectedVaccine([]);
    }
  };
  const handleAlterMedSelection = (selectedOption) => {
    setAlterMed(selectedOption);
    if (selectedOption === "Yes") {
      setTempModalValues((prev) => ({
        ...prev,
        alternativeMedicine: {
          types: AlterMedname,
          other: AlterMednamementions,
        },
      }));
      setTempAnswer("Altermed");
      StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
      setModalVisible(true);
    } else if (selectedOption === "No") {
      setAlterMedname([]);
      setAlterMednamementions(null);
    }
  };
  const handleRepHealthSelection = (selectedOption) => {
    setREpHealth(selectedOption);
    if (selectedOption === "Yes") {
      setTempModalValues((prev) => ({
        ...prev,
        reproductiveHealth: {
          conditions: REpHealthname,
          other: REpHealthnamementins,
        },
      }));
      setTempAnswer("Male");
      StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
      setModalVisible(true);
    } else if (selectedOption === "No") {
      setREpHealthname([]);
    }
  };
  const handleMenstruationSelection = (selectedOption) => {
    setMenstruation(selectedOption);
    if (selectedOption === "Yes") {
      setTempModalValues((prev) => ({
        ...prev,
        menstruation: {
          cycle: Menstruationname,
        },
      }));
      setTempAnswer("Female");
      StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
      setModalVisible(true);
    } else if (selectedOption === "No") {
      setMenstruationname(null);
    }
  };
  const handleHospitlizationSelection = (selectedOption) => {
    setHospitalization(selectedOption);
    if (selectedOption === "Yes") {
      setTempModalValues((prev) => ({
        ...prev,
        hospitalization: {
          reason: Hospitalizationname,
          duration: HospitalizationnameDuration,
          durationType: HospitalizationnameDurationname || TimeOptions.value[0],
        },
      }));
      setTempAnswer("Hospital");
      StatusBar.setBackgroundColor("rgba(0, 0, 0, 0.5)");
      setModalVisible(true);
    } else if (selectedOption === "No") {
      setHospitalizationname(null);
      setHospitalizationnameDuration("");
      setHospitalizationnameDurationname(TimeOptions.value[0]);
    }
  };
  useEffect(() => {
    if (Chronic === "Yes") {
      // Ensure animation runs after state update
      setExpanded(true);
      Animated.timing(animation, {
        toValue: ChronicConditionArray.length > 0 ? 1 : 0,
        duration: 550,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      }).start();
    } else if (Chronic === "No") {
      const toValue = 0; // Toggle animation value
      setExpanded(false);
      Animated.timing(animation, {
        toValue,
        duration: 550,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false, // height doesn't support native driver
      }).start();
    } else {
      const toValue = 0; // Toggle animation value
      setExpanded(false);
      Animated.timing(animation, {
        toValue,
        duration: 550,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false, // height doesn't support native driver
      }).start();
    }
  }, [ChronicConditionArray, Chronic]);

  const visionOptions = {
    en: englishOptions1,
    bn: bengaliOptions1,
    hi: hindiOptions1,
    as: assameseOptions1,
  };

  const getVisionLabel = (language, values) => {
    const options = visionOptions[language] || englishOptions1; // Default to English options
    return values
      ?.map((value) => {
        const selected = options.find((option) => option.value === value);
        return selected ? selected.label : value; // Return translated label or default value
      })
      .join(", "); // Join multiple selected values with commas
  };

  const getCancerLabel = (language, values) => {
    const options = CancerOptions[language] || englishOptionsCancer; // Default to English options
    return values
      ?.map((value) => {
        const selected = options.find((option) => option.value === value);
        return selected ? selected.label : value; // Return translated label or default value
      })
      .join(", ");
  };

  const getMusculoskeletalLabel = (language, values) => {
    const options =
      MusculoskeletalOptions[language] || englishOptionsMusculoskeletal;
    return values
      ?.map((value) => {
        const selected = options.find((option) => option.value === value);
        return selected ? selected.label : value;
      })
      .join(", ");
  };

  const getUrologicalLabel = (language, values) => {
    const options = ReOptions[language] || englishOptionsRenalUrological;
    return values
      ?.map((value) => {
        const selected = options.find((option) => option.value === value);
        return selected ? selected.label : value;
      })
      .join(", ");
  };

  const getGastrointestinalLabel = (language, values) => {
    const options = GasOptions[language] || englishOptionsGastrointestinal;
    return values
      ?.map((value) => {
        const selected = options.find((option) => option.value === value);
        return selected ? selected.label : value;
      })
      .join(", ");
  };

  const getNeurologicalLabel = (language, values) => {
    const options = NeuroOptions[language] || englishOptionsNeurological;
    return values
      ?.map((value) => {
        const selected = options.find((option) => option.value === value);
        return selected ? selected.label : value;
      })
      .join(", ");
  };

  const getResLabel = (language, values) => {
    const options = ResOptions[language] || englishOptionsRespiratory;
    return values
      ?.map((value) => {
        const selected = options.find((option) => option.value === value);
        return selected ? selected.label : value;
      })
      .join(", ");
  };

  const getCardLabel = (language, values) => {
    const options = CardOptions[language] || englishOptionsCardiovascular;
    return values
      ?.map((value) => {
        const selected = options.find((option) => option.value === value);
        return selected ? selected.label : value;
      })
      .join(", ");
  };

  const getDiabatLabel = (language, values) => {
    const options = DiabatOptions[language] || englishOptionsDiabetes;
    return values
      ?.map((value) => {
        const selected = options.find((option) => option.value === value);
        return selected ? selected.label : value;
      })
      .join(", ");
  };

  const getDiseaseLabel = (language, values) => {
    return values
      .map((value) => {
        const selected = optionsDisease.find(
          (option) => option.value === value
        );
        return selected ? selected.label : value; // Return translated label or default value
      })
      .join(", "); // Join multiple selected values with commas
  };

  const getAltermedicineLabel = (language, value) => {
    const selected = TreatmentOptions.find((option) => option.value === value);
    return selected ? selected.label : value; // Return translated label if found, else return value
  };
  const getHospLabel = (language, value) => {
    const index = TimeOptions.value.indexOf(value); // Get index from value array

    if (index !== -1) {
      const labels = {
        en: TimeOptions.englabel,
        hi: TimeOptions.hindilabel,
        as: TimeOptions.assameseLabel,
        bn: TimeOptions.benglabel,
      };

      return labels[language]?.[index] || value; // Return the correct label or fallback to value
    }

    return value; // If value is not found, return it as is
  };

  const getRephelthLabel = (language, values) => {
    return values
      .map((value) => {
        const selected = HealthConditionsOptions.find(
          (option) => option.value === value
        );
        return selected ? selected.label : value; // Return translated label if found, else return raw value
      })
      .join(", "); // Join multiple selected values with commas
  };

  const notMentionedText = {
    en: "Not Mentioned",
    bn: "উল্লেখ করা হয়নি",
    hi: "उल्लेख नहीं किया गया",
    as: "উল্লেখ কৰা নহয়",
  };

  // Function to get the translated label from options
  const getAllergyLabel = (selectedAllergies) => {
    return selectedAllergies
      .map((selectedAllergy) => {
        const selectedOption = AleergiesOptions.find(
          (option) => option.value === selectedAllergy
        );
        return selectedOption ? selectedOption.label : selectedAllergy; // Return label if found, otherwise return raw value
      })
      .join(", "); // Join multiple selected values with commas
  };

  const MenstruationLabel = {
    en: `Menstruation - `,
    bn: "মাহাৱাৰী - ",
    hi: "माहवारी - ",
    as: "মাহাৱাৰী - ",
  };

  // Function to get the translated label from options
  const getCycleOptions = (language) => {
    switch (language) {
      case "bn":
        return [
          { id: "1", label: "নিয়মিত", value: "regular" },
          { id: "2", label: "অস্বাভাবিক", value: "irregular" },
        ];
      case "hi":
        return [
          { id: "1", label: "नियमित", value: "regular" },
          { id: "2", label: "असामान्य", value: "irregular" },
        ];
      case "as":
        return [
          { id: "1", label: "নিয়মিত", value: "regular" },
          { id: "2", label: "অসামান্য", value: "irregular" },
        ];
      default:
        return [
          { id: "1", label: "Regular", value: "regular" },
          { id: "2", label: "Irregular", value: "irregular" },
        ];
    }
  };

  // Updated function to get menstruation label
  const getMenstruationLabel = (item, language) => {
    const options = getCycleOptions(language);

    if (Array.isArray(item)) {
      const labels = item
        .map((value) => {
          const matchedOption = options.find(
            (option) => option.value === value
          );
          return matchedOption ? matchedOption.label : null;
        })
        .filter(Boolean) // Remove null/undefined values
        .join(", "); // Join multiple labels with a comma

      // console.log("Matched Labels:", labels);
      return labels;
    } else {
      const selectedOption = options.find((option) => option.value === item);
      // console.log("Matched Option:", selectedOption);
      return selectedOption ? selectedOption.label : "";
    }
  };

  // Language-dependent labels
  const vaccineLabels = {
    en: "Vaccine -",
    hindi: "टीका -",
    bengali: "ভ্যাকসিন -",
    assamese: "টীকা -",
  };

  const getVaccineOptions = (language) => {
    const vaccineOptions = {
      en: englishOptionsVaccine,
      hi: hindiOptionsVaccine,
      bn: bengaliOptionsVaccine,
      as: assameseOptionsVaccine,
    };

    return vaccineOptions[language] || englishOptionsVaccine;
  };

  const getVaccineOptionsAsString = (language, filterValues) => {
    const options = getVaccineOptions(language);

    // Filter the options based on the passed array of values
    const filteredOptions = options.filter((option) =>
      filterValues.includes(option.value)
    );

    // Map through filtered options to get their corresponding labels
    const labels = filteredOptions.map((option) => option.label).join(", ");
    const labelPrefix = vaccineLabels[language] || vaccineLabels.english;

    return `${labels}`;
  };

  const getVaccineOptionsAsString2 = (language, filterValues) => {
    const options = getVaccineOptions(language);

    // Filter the options based on the passed array of values
    const filteredOptions = options.filter((option) =>
      filterValues.includes(option.value)
    );

    // Map through filtered options to get their corresponding labels
    const labels = filteredOptions.map((option) => option.label).join(", ");

    return `${labels}`;
  };

  // Ends Here For Fetch Options/Labels

  const toggleModal = () => {
    if (previewModal) {
      fadeOut();
    } else {
      setPreviewModal(true);
      fadeIn();
    }
  };

  // Fade In function to display all modals
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  // Fade out function for Preview Modal
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setPreviewModal(false);
    });
  };
  // Display Error
  const getErrorMessage = (language, messageKey) => {
    const messages = {
      ChronicCondition: {
        en: "Please mention any Chronic Condition",
        bn: "দয়া করে যেকোনো দীর্ঘস্থায়ী অবস্থা উল্লেখ করুন",
        hi: "कृपया किसी भी पुरानी स्थिति का उल्लेख करें",
        as: "অনুগ্ৰহ কৰি যিকোনো দীঘলীয়া অৱস্থা উল্লেখ কৰক",
      },
      SelectChronicConditions: {
        en: "Please select all the Chronic Conditions",
        bn: "দয়া করে সমস্ত দীর্ঘস্থায়ী অবস্থা নির্বাচন করুন",
        hi: "कृपया सभी पुरानी स्थितियों का चयन करें",
        as: "অনুগ্ৰহ কৰি সকলো দীঘলীয়া অৱস্থা বাছনি কৰক",
      },
      InfectiousDisease: {
        en: "Please mention any Infectious Disease",
        bn: "দয়া করে কোনো সংক্রামক রোগ উল্লেখ করুন",
        hi: "कृपया किसी भी संक्रामक रोग का उल्लेख करें",
        as: "অনুগ্ৰহ কৰি কোনো সংক্ৰামক ৰোগ উল্লেখ কৰক",
      },
      MentionInfectiousDisease: {
        en: "Mention Infectious Disease",
        bn: "সংক্রামক রোগ উল্লেখ করুন",
        hi: "संक्रामक रोग का उल्लेख करें",
        as: "সংক্ৰামক ৰোগ উল্লেখ কৰক",
      },
      SurgeryHistory: {
        en: "Please provide Surgery History",
        bn: "দয়া করে অস্ত্রোপচারের ইতিহাস প্রদান করুন",
        hi: "कृपया सर्जरी का इतिहास प्रदान करें",
        as: "অনুগ্ৰহ কৰি শল্য চিকিৎসাৰ ইতিহাস প্ৰদান কৰক",
      },
      Allergies: {
        en: "Please mention any Allergies",
        bn: "দয়া করে যেকোনো অ্যালার্জি উল্লেখ করুন",
        hi: "कृपया किसी भी एलर्जी का उल्लेख करें",
        as: "অনুগ্ৰহ কৰি যিকোনো এলাৰ্জি উল্লেখ কৰক",
      },
      AllergyType: {
        en: "Please specify Allergy Type",
        bn: "দয়া করে অ্যালার্জির ধরন উল্লেখ করুন",
        hi: "कृपया एलर्जी का प्रकार बताएं",
        as: "অনুগ্ৰহ কৰি এলাৰ্জিৰ প্ৰকাৰ উল্লেখ কৰক",
      },
      Vaccination: {
        en: "Please mention any Vaccination",
        bn: "দয়া করে যেকোনো টিকাদান উল্লেখ করুন",
        hi: "कृपया किसी भी टीकाकरण का उल्लेख करें",
        as: "অনুগ্ৰহ কৰি যিকোনো টিকাকৰণ উল্লেখ কৰক",
      },
      SelectVaccinations: {
        en: "Please select Vaccinations",
        bn: "দয়া করে টিকাদান নির্বাচন করুন",
        hi: "कृपया टीकाकरण का चयन करें",
        as: "অনুগ্ৰহ কৰি টিকাকৰণ বাছনি কৰক",
      },
      AlternativeMedicineUse: {
        en: "Please mention any Alternative Medicine Use",
        bn: "দয়া করে যেকোনো বিকল্প ওষুধ ব্যবহারের উল্লেখ করুন",
        hi: "कृपया किसी भी वैकल्पिक औषधि उपयोग का उल्लेख करें",
        as: "অনুগ্ৰহ কৰি যিকোনো বিকল্প ঔষধ ব্যৱহাৰৰ উল্লেখ কৰক",
      },
      SelectAlternativeMedicine: {
        en: "Please select Alternative Medicine",
        bn: "দয়া করে বিকল্প ওষুধ নির্বাচন করুন",
        hi: "कृपया वैकल्पिक औषधि का चयन करें",
        as: "অনুগ্ৰহ কৰি বিকল্প ঔষধ বাছনি কৰক",
      },
      ReproductiveHealth: {
        en: "Please provide Reproductive Health details",
        bn: "দয়া করে প্রজনন স্বাস্থ্য সম্পর্কিত বিশদ প্রদান করুন",
        hi: "कृपया प्रजनन स्वास्थ्य का विवरण प्रदान करें",
        as: "অনুগ্ৰহ কৰি প্ৰজনন স্বাস্থ্যৰ বিৱৰণ প্ৰদান কৰক",
      },
      ReproductiveHealthCondition: {
        en: "Please mention Reproductive Health Condition",
        bn: "দয়া করে প্রজনন স্বাস্থ্য পরিস্থিতির উল্লেখ করুন",
        hi: "कृपया प्रजनन स्वास्थ्य स्थिति का उल्लेख करें",
        as: "অনুগ্ৰহ কৰি প্ৰজনন স্বাস্থ্য অৱস্থা উল্লেখ কৰক",
      },
      Menstruation: {
        en: "Please mention details about Menstruation",
        bn: "দয়া করে ঋতুচক্র সম্পর্কে বিশদ উল্লেখ করুন",
        hi: "कृपया मासिक धर्म के बारे में विवरण दें",
        as: "অনুগ্ৰহ কৰি ঋতুস্ৰাব সম্পৰ্কে বিস্তারিত উল্লেখ কৰক",
      },
      MenstruationCycle: {
        en: "Please specify the Menstruation Cycle",
        bn: "দয়া করে ঋতুচক্র উল্লেখ করুন",
        hi: "कृपया मासिक धर्म चक्र का उल्लेख करें",
        as: "অনুগ্ৰহ কৰি ঋতুস্ৰাৱ চক্ৰ উল্লেখ কৰক",
      },
      Hospitalization: {
        en: "Please mention any past Hospitalization",
        bn: "দয়া করে পূর্ববর্তী হাসপাতালে ভর্তি হওয়ার তথ্য উল্লেখ করুন",
        hi: "कृपया किसी भी पिछले अस्पताल में भर्ती होने का उल्लेख करें",
        as: "অনুগ্ৰহ কৰি অতীতৰ চিকিৎসালয়ত ভৰ্তিৰ তথ্য উল্লেখ কৰক",
      },
      FillHospitalizationDetails: {
        en: "Please fill in the Hospitalization details",
        bn: "দয়া করে হাসপাতালে ভর্তি সংক্রান্ত বিশদ প্রদান করুন",
        hi: "कृपया अस्पताल में भर्ती होने का विवरण भरें",
        as: "অনুগ্ৰহ কৰি চিকিৎসালয়ত ভৰ্তিৰ বিৱৰণ প্ৰদান কৰক",
      },
    };

    return messages[messageKey]
      ? messages[messageKey][language]
      : "Invalid message key or language";
  };

  // Error Variable
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);
  const [error6, setError6] = useState(false);
  const [error7, setError7] = useState(false);
  const [error8, setError8] = useState(false);
  const [error9, setError9] = useState(false);

  // Preview
  const handlePreview = () => {
    // Validate each condition and show relevant messages
    if (Chronic === null) {
      setError1(true);
      showToast(getErrorMessage(language, "ChronicCondition"));
      scrollViewRef?.current?.scrollTo({ y: 0, animated: true });
      return;
    }
    if (Chronic === "Yes" && ChronicConditionArray.length === 0) {
      setError1(true);
      showToast(getErrorMessage(language, "ChronicCondition"));
      scrollViewRef?.current?.scrollTo({ y: 0, animated: true });
      return;
    }
    if (
      Chronic === "Yes" &&
      ((ChronicConditionArray?.includes("Vision") &&
        Vision_Condition?.length === 0) ||
        (ChronicConditionArray?.includes("Cancer") &&
          Cancer_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Musculoskeletal Disorder") &&
          Musculoskeletal_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Urological Condition") &&
          Urological_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Gastrointestinal Disorder") &&
          Gas_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Neurological Disorder") &&
          Neuro_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Respiratory Condition") &&
          Res_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Endocrine Disorder") &&
          Diabat_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Cardiovascular Disease") &&
          Card_Type?.length === 0))
    ) {
      setError1(true);
      showToast(getErrorMessage(language, "SelectChronicConditions"));
      scrollViewRef?.current?.scrollTo({ y: 0, animated: true });
      return;
    }
    if (infect === null) {
      setError2(true);
      showToast(getErrorMessage(language, "InfectiousDisease"));
      if (expanded) {
        scrollViewRef?.current?.scrollTo({ y: 800, animated: true });
      } else {
        scrollViewRef?.current?.scrollTo({ y: 60, animated: true });
      }
      return;
    }
    if (infect === "Yes" && infectname?.length === 0) {
      setError2(true);
      showToast(getErrorMessage(language, "MentionInfectiousDisease"));
      if (expanded) {
        scrollViewRef?.current?.scrollTo({ y: 800, animated: true });
      } else {
        scrollViewRef?.current?.scrollTo({ y: 60, animated: true });
      }
      return;
    }
    // if (surgery === null) {
    //   setError3(true);
    //   showToast(getErrorMessage(language, "SurgeryHistory"));
    //   if (expanded) {
    //     scrollViewRef?.current?.scrollTo({ y: 860, animated: true });
    //   } else {
    //     scrollViewRef?.current?.scrollTo({ y: 120, animated: true });
    //   }
    //   return;
    // }
    if (allergies === null) {
      setError4(true);
      showToast(getErrorMessage(language, "Allergies"));
      if (expanded) {
        scrollViewRef?.current?.scrollTo({ y: 900, animated: true });
      } else {
        scrollViewRef?.current?.scrollTo({ y: 180, animated: true });
      }
      return;
    }
    if (allergies === "Yes" && allergiesname?.length === 0) {
      setError4(true);
      showToast(getErrorMessage(language, "AllergyType"));
      if (expanded) {
        scrollViewRef?.current?.scrollTo({ y: 900, animated: true });
      } else {
        scrollViewRef?.current?.scrollTo({ y: 180, animated: true });
      }
      return;
    }
    if (Vaccinatin === null) {
      setError5(true);
      showToast(getErrorMessage(language, "Vaccination"));
      if (expanded) {
        scrollViewRef?.current?.scrollTo({ y: 900, animated: true });
      } else {
        scrollViewRef?.current?.scrollTo({ y: 240, animated: true });
      }
      return;
    }
    if (Vaccinatin === "Yes" && selectedVaccine.length === 0) {
      setError5(true);
      showToast(getErrorMessage(language, "SelectVaccinations"));
      if (expanded) {
        scrollViewRef?.current?.scrollTo({ y: 900, animated: true });
      } else {
        scrollViewRef?.current?.scrollTo({ y: 240, animated: true });
      }
      return;
    }
    // if (AlterMed === null) {
    //   setError6(true);
    //   showToast(getErrorMessage(language, "AlternativeMedicineUse"));
    //   if (expanded) {
    //     scrollViewRef?.current?.scrollTo({ y: 900, animated: true });
    //   } else {
    //     scrollViewRef?.current?.scrollTo({ y: 300, animated: true });
    //   }
    //   return;
    // }
    // if (AlterMed === "Yes" && AlterMedname?.length === 0) {
    //   setError6(true);
    //   showToast(getErrorMessage(language, "SelectAlternativeMedicine"));
    //   if (expanded) {
    //     scrollViewRef?.current?.scrollTo({ y: 900, animated: true });
    //   } else {
    //     scrollViewRef?.current?.scrollTo({ y: 300, animated: true });
    //   }
    //   return;
    // }
    if (gender === "Male") {
      if (REpHealth === null) {
        setError7(true);
        showToast(getErrorMessage(language, "ReproductiveHealth"));
        if (expanded) {
          scrollViewRef?.current?.scrollTo({ y: 900, animated: true });
        } else {
          scrollViewRef?.current?.scrollTo({ y: 360, animated: true });
        }
        return;
      }
      if (REpHealth === "Yes" && REpHealthname?.length === 0) {
        setError7(true);
        showToast(getErrorMessage(language, "ReproductiveHealthCondition"));
        if (expanded) {
          scrollViewRef?.current?.scrollTo({ y: 900, animated: true });
        } else {
          scrollViewRef?.current?.scrollTo({ y: 360, animated: true });
        }
        return;
      }
    }
    if (gender === "Female") {
      if (Menstruation === null) {
        setError8(true);
        showToast(getErrorMessage(language, "Menstruation"));
        if (expanded) {
          scrollViewRef?.current?.scrollTo({ y: 900, animated: true });
        } else {
          scrollViewRef?.current?.scrollTo({ y: 360, animated: true });
        }
        return;
      }
      if (Menstruation === "Yes" && Menstruationname === null) {
        setError8(true);
        showToast(getErrorMessage(language, "MenstruationCycle"));
        if (expanded) {
          scrollViewRef?.current?.scrollTo({ y: 900, animated: true });
        } else {
          scrollViewRef?.current?.scrollTo({ y: 360, animated: true });
        }
        return;
      }
    }
    if (Hospitalization === null) {
      setError9(true);
      showToast(getErrorMessage(language, "Hospitalization"));
      if (expanded) {
        scrollViewRef?.current?.scrollTo({ y: 900, animated: true });
      } else {
        scrollViewRef?.current?.scrollTo({ y: 420, animated: true });
      }
      return;
    }
    if (
      Hospitalization === "Yes" &&
      (Hospitalizationname === null || HospitalizationnameDuration === "")
    ) {
      setError9(true);
      showToast(getErrorMessage(language, "FillHospitalizationDetails"));
      if (expanded) {
        scrollViewRef?.current?.scrollTo({ y: 900, animated: true });
      } else {
        scrollViewRef?.current?.scrollTo({ y: 420, animated: true });
      }
      return;
    }

    // If no errors, open the modal
    toggleModal();
  };

  // Get Data useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await apiService.healthTracking.getMedicalHistory();

        const data = response.data.data.medicalHistory;

        if (response.status === 200 && data) {
          // Chronic Conditions
          setChronic(data.chronic);
          setChronicConditionArray(data.chronicCondition || []);

          // Chronic Condition Records
          setVision_Condition(
            data.chronicConditionRecord?.visionCondition || []
          );
          setVision(data.chronicConditionRecord?.visionConditionOther || null);
          setCancer_Type(data.chronicConditionRecord?.cancerType || []);
          setCancer(data.chronicConditionRecord?.cancerTypeOther || null);
          setMusculoskeletal_Type(
            data.chronicConditionRecord?.musculoskeletalType || []
          );
          setMusculoskeletal(
            data.chronicConditionRecord?.musculoskeletalTypeOther || null
          );
          setUrological_Type(data.chronicConditionRecord?.urologicalType || []);
          setUrological(
            data.chronicConditionRecord?.urologicalTypeOther || null
          );
          setGas_Type(data.chronicConditionRecord?.gasType || []);
          setGas(data.chronicConditionRecord?.gasTypeOther || null);
          setNeuro_Type(data.chronicConditionRecord?.neuroType || []);
          setNeurological(data.chronicConditionRecord?.neuroTypeOther || null);
          setRes_Type(data.chronicConditionRecord?.resType || []);
          setRespiratory(data.chronicConditionRecord?.resTypeOther || null);
          setDiabat_Type(data.chronicConditionRecord?.diabatType || []);
          setDiabatis(data.chronicConditionRecord?.diabatTypeOther || null);
          setCard_Type(data.chronicConditionRecord?.cardType || []);
          setCardio(data.chronicConditionRecord?.cardTypeOther || null);

          // Infections
          setinfect(data.infect);
          setinfectname(data.infectname || []);
          setinfectnameother(data.infectnameOther || null);

          // Surgery
          setsurgery(data.surgery);
          setsurgeryname(data.surgeryname || null);

          // Allergies
          setallergies(data.allergies);
          setallergiesname(data.allergiesname || []);

          // Vaccination
          setVaccinatin(data.vaccinatin);
          setselectedVaccine(data.selectedVaccine || []);

          // Alternative Medicine
          setAlterMed(data.alterMed);
          setAlterMedname(data.alterMedname || []);
          setAlterMednamementions(data.alterMednamementions || null);

          // Reproductive Health
          setREpHealth(data.reproductiveHealth);
          setREpHealthname(data.reproductiveHealthCondition || []);
          setREpHealthnamementins(
            data.reproductiveHealthConditionOther || null
          );

          // Menstruation (Only applicable for females)
          setMenstruation(data.menstruation);
          setMenstruationname(data.menstruationCycle || null);

          // Hospitalization
          setHospitalization(data.hospitalization);
          setHospitalizationname(data.hospitalizationDetails || null);
          setHospitalizationnameDuration(
            data.hospitalizationnameDuration || ""
          );
          setHospitalizationnameDurationname(
            data.hospitalizationnameDurationname || TimeOptions.value[0]
          );
        }
        setgender(profile?.data?.gender || null);
      } catch (error) {
        console.error("Error fetching medical history:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Show Error using Toast
  const showToast = (message) => {
    Toast.show({
      type: "error", // You can use 'success', 'error', or 'info'
      position: "top",
      text1:
        language === "en"
          ? "Error!"
          : language === "bn"
          ? "ত্রুটি!" // Bengali: Error
          : language === "hi"
          ? "त्रुटि!" // Hindi: Error
          : language === "as"
          ? "ভুল!" // Assamese: Error
          : "Error!", // Default to English if no language matches
      text2: message,
      style: {
        backgroundColor: "red",
        paddingVertical: 15, // Increase padding for more space
        paddingHorizontal: 25, // Increase padding for more space
        borderRadius: 15, // Optional: rounded corners
      },
      text1Style: {
        fontSize: 17, // Increase font size for the main title
        fontWeight: "bold", // Optional: bold text
      },
      text2Style: {
        fontSize: 16, // Increase font size for the description
      },
    });
  };

  // This Part is for Close Modal function and flags for error checking
  const [infectflag, setinfectflag] = useState(false);
  const handleCloseModalinfect = () => {
    if (tempModalValues?.infections?.types?.length > 0) {
      setinfectname(tempModalValues.infections.types);
      setinfectnameother(tempModalValues.infections.other);
      setinfectflag(true);
      setinfect("Yes"); // Set the infect value after confirmation
    } else {
      setinfectflag(false);
      setinfect("No"); // Set to No if no conditions selected
    }
    setModalVisible(false);
  };

  const [allergyflag, setallergyflag] = useState(false);
  const handleCloseModalallergy = () => {
    if (tempModalValues?.allergies?.types?.length > 0) {
      setallergiesname(tempModalValues.allergies.types);
      setallergyflag(true);
      setallergies("Yes"); // Set allergies value after confirmation
    } else {
      setallergyflag(false);
      setallergies("No"); // Set to No if no allergies selected
    }
    setModalVisible(false);
  };

  const [vacflag, setvacflag] = useState(false);
  const handleCloseModalvac = () => {
    if (tempModalValues?.vaccine?.selected?.length > 0) {
      setselectedVaccine(tempModalValues.vaccine.selected);
      setvacflag(true);
      setVaccinatin("Yes"); // Set vaccination value after confirmation
    } else {
      setvacflag(false);
      setVaccinatin("No"); // Set to No if no vaccines selected
    }
    setModalVisible(false);
  };

  const [medflag, setmedflag] = useState(false);
  const handleCloseModalmed = () => {
    if (tempModalValues?.alternativeMedicine?.types?.length > 0) {
      setAlterMedname(tempModalValues.alternativeMedicine.types);
      setAlterMednamementions(tempModalValues.alternativeMedicine.other);
      setmedflag(true);
      setAlterMed("Yes"); // Set alternative medicine value after confirmation
    } else {
      setmedflag(false);
      setAlterMed("No"); // Set to No if no alternative medicine selected
    }
    setModalVisible(false);
  };

  const [Maleflag, setMaleflag] = useState(false);
  const handleCloseModalMale = () => {
    if (tempModalValues?.reproductiveHealth?.conditions?.length > 0) {
      setREpHealthname(tempModalValues.reproductiveHealth.conditions);
      setREpHealthnamementins(tempModalValues.reproductiveHealth.other);
      setMaleflag(true);
      setREpHealth("Yes"); // Set reproductive health value after confirmation
    } else {
      setMaleflag(false);
      setREpHealth("No"); // Set to No if no conditions selected
    }
    setModalVisible(false);
  };

  const [FeMaleflag, setFeMaleflag] = useState(false);
  const handleCloseModalFeMale = () => {
    if (tempModalValues?.menstruation?.cycle !== null) {
      setMenstruationname(tempModalValues.menstruation.cycle);
      setFeMaleflag(true);
      setMenstruation("Yes"); // Set menstruation value after confirmation
    } else {
      setFeMaleflag(false);
      setMenstruation("No"); // Set to No if no details provided
    }
    setModalVisible(false);
  };

  const [hosflag, sethosflag] = useState(false);
  const handleCloseModalhos = () => {
    if (
      tempModalValues?.hospitalization?.reason !== null &&
      tempModalValues?.hospitalization?.duration !== ""
    ) {
      setHospitalizationname(tempModalValues.hospitalization.reason);
      setHospitalizationnameDuration(tempModalValues.hospitalization.duration);
      setHospitalizationnameDurationname(
        tempModalValues.hospitalization.durationType
      );
      sethosflag(true);
      setHospitalization("Yes"); // Set hospitalization value after confirmation
    } else {
      sethosflag(false);
      setHospitalization("No"); // Set to No if no details provided
    }
    setModalVisible(false);
  };

  const [Chronicflag, setChronicflag] = useState(false);
  const handleCloseModalChronic = () => {
    switch (tempAnswer) {
      case "vision":
        setVision_Condition(tempModalValues.vision.condition);
        setVision(tempModalValues.vision.other);
        break;
      case "cancer":
        setCancer_Type(tempModalValues.cancer.type);
        setCancer(tempModalValues.cancer.other);
        break;
      case "Musculoskeletal":
        setMusculoskeletal_Type(tempModalValues.musculoskeletal.type);
        setMusculoskeletal(tempModalValues.musculoskeletal.other);
        break;
      case "Urological":
        setUrological_Type(tempModalValues.urological.type);
        setUrological(tempModalValues.urological.other);
        break;
      case "Gas":
        setGas_Type(tempModalValues.gastrointestinal.type);
        setGas(tempModalValues.gastrointestinal.other);
        break;
      case "Neuro":
        setNeuro_Type(tempModalValues.neurological.type);
        setNeurological(tempModalValues.neurological.other);
        break;
      case "Res":
        setRes_Type(tempModalValues.respiratory.type);
        setRespiratory(tempModalValues.respiratory.other);
        break;
      case "Diabat":
        setDiabat_Type(tempModalValues.diabetes.type);
        setDiabatis(tempModalValues.diabetes.other);
        break;
      case "Card":
        setCard_Type(tempModalValues.cardiovascular.type);
        setCardio(tempModalValues.cardiovascular.other);
        break;
      case "Chronic":
        setChronicConditionArray(tempModalValues.chronic.conditions);
        break;
    }

    // Check if any conditions are selected
    const hasConditions =
      tempModalValues.vision.condition.length > 0 ||
      tempModalValues.cancer.type.length > 0 ||
      tempModalValues.musculoskeletal.type.length > 0 ||
      tempModalValues.urological.type.length > 0 ||
      tempModalValues.gastrointestinal.type.length > 0 ||
      tempModalValues.neurological.type.length > 0 ||
      tempModalValues.respiratory.type.length > 0 ||
      tempModalValues.diabetes.type.length > 0 ||
      tempModalValues.cardiovascular.type.length > 0;

    if (hasConditions) {
      setChronicflag(true);
      setChronic("Yes");
    } else {
      setChronicflag(false);
      setChronic("No");
    }

    setModalVisible(false);
  };
  // Ends Here

  // Error Useeffect
  useEffect(() => {
    // Consolidate all conditions for error handling
    const conditions = [
      // Chronic
      {
        // Condition for smoking: checks if details.smoking is not "", or if details.smoking is "Yes" and details.smokingFrequency is not null
        condition:
          (Chronic === "No" && error1) ||
          (Chronic === "Yes" && Chronicflag && error1),
        setter: setError1,
      },
      // Infect
      {
        // Condition for smoking: checks if details.smoking is not null, or if details.smoking is "Yes" and details.smokingFrequency is not null
        condition:
          (infect === "No" && error2) ||
          (infect === "Yes" && infectflag && error2),
        setter: setError2,
      },
      // Surgery
      {
        // Condition for smoking: checks if details.smoking is not null, or if details.smoking is "Yes" and details.smokingFrequency is not null
        condition: surgery !== null && error3,
        setter: setError3,
      },
      // Allergy
      {
        // Condition for smoking: checks if details.smoking is not null, or if details.smoking is "Yes" and details.smokingFrequency is not null
        condition:
          (allergies === "No" && error4) ||
          (allergies === "Yes" && allergyflag && error4),
        setter: setError4,
      },
      // Vaccine
      {
        // Condition for smoking: checks if details.smoking is not null, or if details.smoking is "Yes" and details.smokingFrequency is not null
        condition:
          (Vaccinatin === "No" && error5) ||
          (Vaccinatin === "Yes" && vacflag && error5),
        setter: setError5,
      },
      // Alter Med
      {
        // Condition for smoking: checks if details.smoking is not null, or if details.smoking is "Yes" and details.smokingFrequency is not null
        condition:
          (AlterMed === "No" && error6) ||
          (AlterMed === "Yes" && medflag && error6),
        setter: setError6,
      },
      // Male
      {
        // Condition for smoking: checks if details.smoking is not null, or if details.smoking is "Yes" and details.smokingFrequency is not null
        condition:
          (REpHealth === "No" && error7) ||
          (REpHealth === "Yes" && Maleflag && error7),
        setter: setError7,
      },
      // FeMale
      {
        // Condition for smoking: checks if details.smoking is not null, or if details.smoking is "Yes" and details.smokingFrequency is not null
        condition:
          (Menstruation === "No" && error8) ||
          (Menstruation === "Yes" && FeMaleflag && error8),
        setter: setError8,
      },
      // Hospita
      {
        // Condition for smoking: checks if details.smoking is not null, or if details.smoking is "Yes" and details.smokingFrequency is not null
        condition:
          (Hospitalization === "No" && error9) ||
          (Hospitalization === "Yes" && hosflag && error9),
        setter: setError9,
      },
    ];

    // Iterate over conditions and apply error setters only when the condition is met
    conditions.forEach(({ condition, setter }) => {
      if (condition) setter(false); // Reset the error to false
    });
  }, [
    error1,
    error2,
    error3,
    error4,
    error5,
    error6,
    error7,
    error8,
    error9,
    Chronic,
    Chronicflag,
    infect,
    infectflag,
    surgery,
    allergyflag,
    allergies,
    vacflag,
    Vaccinatin,
    medflag,
    AlterMed,
    Maleflag,
    REpHealth,
    FeMaleflag,
    hosflag,
    Hospitalization,
    Menstruation,
  ]);

  useEffect(() => {
    setinfectflag(infectname?.length > 0);
    setallergyflag(allergiesname?.length > 0);
    setvacflag(selectedVaccine?.length > 0);
    setmedflag(AlterMedname?.length > 0);
    setMaleflag(REpHealthname?.length > 0);
    setFeMaleflag(!!Menstruationname);
    sethosflag(
      Hospitalizationname !== null && HospitalizationnameDuration !== ""
    );

    if (
      Chronic === "Yes" &&
      ((ChronicConditionArray?.includes("Vision") &&
        Vision_Condition?.length === 0) ||
        (ChronicConditionArray?.includes("Cancer") &&
          Cancer_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Musculoskeletal Disorder") &&
          Musculoskeletal_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Urological Condition") &&
          Urological_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Gastrointestinal Disorder") &&
          Gas_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Neurological Disorder") &&
          Neuro_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Respiratory Condition") &&
          Res_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Endocrine Disorder") &&
          Diabat_Type?.length === 0) ||
        (ChronicConditionArray?.includes("Cardiovascular Disease") &&
          Card_Type?.length === 0))
    ) {
      setChronicflag(false);
    } else {
      setChronicflag(true);
    }
  }, [
    infectname,
    allergiesname,
    selectedVaccine,
    AlterMedname,
    REpHealthname,
    Menstruationname,
    Hospitalizationname,
    HospitalizationnameDuration,
    Chronic,
    ChronicConditionArray,
    Vision_Condition,
    Cancer_Type,
    Musculoskeletal_Type,
    Urological_Type,
    Gas_Type,
    Neuro_Type,
    Res_Type,
    Diabat_Type,
    Card_Type,
  ]);

  const handleSubmit = async () => {
    try {
      setLoadingSubmit(true);
      // Prepare the data to be sent to the backend
      const data = {
        chronic: Chronic,
        chronicCondition: ChronicConditionArray, //Array
        chronicConditionRecord: {
          visionCondition: Vision_Condition,
          visionConditionOther: Vision,
          cancerType: Cancer_Type,
          cancerTypeOther: Cancer,
          musculoskeletalType: Musculoskeletal_Type,
          musculoskeletalTypeOther: Musculoskeletal,
          urologicalType: Urological_Type,
          urologicalTypeOther: Urological,
          gasType: Gas_Type,
          gasTypeOther: Gas,
          neuroType: Neuro_Type,
          neuroTypeOther: Neurological,
          resType: Res_Type,
          resTypeOther: Respiratory,
          diabatType: Diabat_Type,
          diabatTypeOther: Diabatis,
          cardType: Card_Type,
          cardTypeOther: Cardio,
        },
        infect: infect,
        infectname: infectname,
        infectnameOther: infectnameother,

        // surgery: surgery,
        // surgeryname: surgeryname,

        allergies: allergies,
        allergiesname: allergiesname,

        vaccinatin: Vaccinatin,
        selectedVaccine: selectedVaccine, //Array

        // alterMedname: AlterMedname, //Array
        // alterMednamementions: AlterMednamementions,
        // alterMed: AlterMed,

        reproductiveHealth: REpHealth,
        reproductiveHealthCondition: REpHealthname,
        reproductiveHealthConditionOther: REpHealthnamementins,

        menstruation: Menstruation,
        menstruationCycle: Menstruationname,

        hospitalization: Hospitalization,
        hospitalizationDetails: Hospitalizationname,
        hospitalizationnameDuration: HospitalizationnameDuration,
        hospitalizationnameDurationname: HospitalizationnameDurationname,
      };
      console.log("Data to be sent:", JSON.stringify(data, null, 2));
      // Send the updated data to the backend
      const response = await apiService.healthTracking.updateMedicalHistory(
        data
      );
      if (response.status === 200) {
        ToastAndroid.show(
          "Medical History submit successfully",
          ToastAndroid.SHORT
        );
        setPreviewModal(false);
        navigation.goBack();
      } else if (response.status === 201) {
        ToastAndroid.show(
          "Medical History  Updated successfully",
          ToastAndroid.SHORT
        );
        setPreviewModal(false);
        navigation.goBack();
      } else {
        Alert.alert("Update Failed", "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Update Error:", error);
      console.error("Update Error:", error);
      Alert.alert("Faild to Submit", "Please check your internet connection.");
    } finally {
      setLoadingSubmit(false);
    }
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    calculateProgress();
  }, [
    Chronic,
    ChronicConditionArray,
    Vision_Condition,
    Cancer_Type,
    Musculoskeletal_Type,
    Urological_Type,
    Gas_Type,
    Neuro_Type,
    Res_Type,
    Diabat_Type,
    Card_Type,
    Vision,
    Cancer,
    Musculoskeletal,
    Urological,
    Gas,
    Neurological,
    Respiratory,
    Diabatis,
    Cardio,

    infect,
    infectname,
    infectnameother,

    allergies,
    allergiesname,

    Vaccinatin,
    selectedVaccine,

    AlterMed,
    AlterMedname,
    AlterMednamementions,

    gender,

    REpHealth,
    REpHealthname,
    REpHealthnamementins,

    Menstruation,
    Menstruationname,

    Hospitalization,
    Hospitalizationname,
    HospitalizationnameDuration,
    HospitalizationnameDurationname,
  ]);

  const calculateProgress = () => {
    let newProgress = 0;

    // Chronic Conditions
    if (Chronic === "No") {
      newProgress += 1; // If Chronic is "No", progress is 1
    } else if (Chronic === "Yes") {
      // Check if all conditions in ChronicConditionArray are valid
      const allConditionsValid = ChronicConditionArray.every((condition) => {
        switch (condition) {
          case "Vision":
            return (
              Vision_Condition.length > 0 &&
              (!Vision_Condition.includes("Others") || Vision !== null)
            );
          case "Cancer":
            return (
              Cancer_Type.length > 0 &&
              (!Cancer_Type.includes("Others") || Cancer !== null)
            );
          case "Musculoskeletal Disorder":
            return (
              Musculoskeletal_Type.length > 0 &&
              (!Musculoskeletal_Type.includes("Others") ||
                Musculoskeletal !== null)
            );
          case "Urological Condition":
            return (
              Urological_Type.length > 0 &&
              (!Urological_Type.includes("Others") || Urological !== null)
            );
          case "Gastrointestinal Disorder":
            return (
              Gas_Type.length > 0 &&
              (!Gas_Type.includes("Others") || Gas !== null)
            );
          case "Neurological Disorder":
            return (
              Neuro_Type.length > 0 &&
              (!Neuro_Type.includes("Others") || Neurological !== null)
            );
          case "Respiratory Condition":
            return (
              Res_Type.length > 0 &&
              (!Res_Type.includes("Others") || Respiratory !== null)
            );
          case "Endocrine Disorder":
            return (
              Diabat_Type.length > 0 &&
              (!Diabat_Type.includes("Others") || Diabatis !== null)
            );
          case "Cardiovascular Disease":
            return (
              Card_Type.length > 0 &&
              (!Card_Type.includes("Others") || Cardio !== null)
            );
          default:
            return false; // Invalid condition
        }
      });

      // If all conditions are valid, progress is 1
      if (ChronicConditionArray.length > 0 && allConditionsValid) {
        newProgress += 1;
      }
    }

    // Infectious Diseases
    if (infect === "No") {
      newProgress += 1;
    } else if (infect === "Yes" && infectname.length > 0) {
      if (infectname.includes("Other") && infectnameother) {
        newProgress += 1;
      } else if (!infectname.includes("Other") && !infectnameother) {
        newProgress += 1;
      }
    }

    // Allergies
    if (allergies === "No") {
      newProgress += 1;
    } else if (allergies === "Yes" && allergiesname.length > 0) {
      newProgress += 1;
    }

    // Vaccinations
    if (Vaccinatin === "No") {
      newProgress += 1;
    } else if (Vaccinatin === "Yes" && selectedVaccine.length > 0) {
      newProgress += 1;
    }

    // Altermedications
    // if (AlterMed === "No") {
    //   newProgress += 1;
    // } else if (AlterMed === "Yes" && AlterMedname.length > 0) {
    //   if (AlterMedname.includes("Other treatments") && AlterMednamementions) {
    //     newProgress += 1;
    //   } else if (
    //     !AlterMedname.includes("Other treatments") &&
    //     !AlterMednamementions
    //   ) {
    //     newProgress += 1;
    //   }
    // }

    // Reproductive Health
    if (gender == "Male") {
      if (REpHealth === "No") {
        newProgress += 1;
      } else if (REpHealth === "Yes" && REpHealthname.length > 0) {
        if (REpHealthname.includes("Other") && REpHealthnamementins) {
          newProgress += 1;
        } else if (!REpHealthname.includes("Other") && !REpHealthnamementins) {
          newProgress += 1;
        }
      }
    }

    if (gender == "Female") {
      if (Menstruation === "No") {
        newProgress += 1;
      } else if (Menstruation === "Yes" && Menstruationname) {
        newProgress += 1;
      }
    }

    // Surgery
    // if (surgery === "No") {
    //   newProgress += 1;
    // } else if (surgery === "Yes" && surgeryname) {
    //   newProgress += 1;
    // }

    // Hospitalizations
    if (Hospitalization === "No") {
      newProgress += 1;
    } else if (
      Hospitalization === "Yes" &&
      Hospitalizationname &&
      HospitalizationnameDuration &&
      HospitalizationnameDurationname
    ) {
      newProgress += 1;
    }

    setProgress(newProgress / 6);
  };

  // Main Structure
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: "#fff",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text:
            language === "en"
              ? "Medical History"
              : language === "bn"
              ? "চিকিৎসা ইতিহাস"
              : language === "hi"
              ? "चिकित्सा इतिहास"
              : language === "as"
              ? "চিকিৎসা ইতিহাস"
              : "Medical History",
          style: { color: "#fff" },
        }}
        rightComponent={
          <AnimatedDropDown
            onSelect={changeLanguage}
            defaultFilter={language}
          />
        }
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ["#E582AD", "#ffa6bb"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
        statusBarProps={{
          barStyle: "light-content",
          backgroundColor: "transparent",
        }}
        containerStyle={{ borderBottomWidth: 0, zIndex: 2 }}
      />

      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              alignItems: "center",
            }}
          >
            <Progress.Bar
              progress={progress} // Convert percentage back to decimal for Progress.Bar
              width={width * 0.8}
              color={"green"}
              unfilledColor="#ccc"
              style={{ borderRadius: 10, borderWidth: 0 }}
            />

            {/* Display progress in whole numbers */}
            <Text
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: FontFamily.Inter_Medium,
              }}
            >
              {Math.floor(progress * 100)}%
            </Text>
          </View>

          {/* Main Scrollview */}
          <ScrollView
            // contentContainerStyle={styles.main}
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
          >
            {/* Chronic Condition */}
            <View style={[styles.section, error1 && styles.errorSection]}>
              <RenderQuestion
                optionType="radio"
                questionNumber={
                  healthHistoryQuestions[0].questionNumber[language]
                }
                question={
                  healthHistoryQuestions[0].translations[language].question
                }
                options={
                  healthHistoryQuestions[0].translations[language].options
                }
                defaultSelected={Chronic}
                onSelect={(option) => handleChronicConditionSelection(option)}
                language={language}
              />

              {/* Sub Section */}
              <Animated.View
                style={[styles.content, { height: heightInterpolation }]}
              >
                {expanded && (
                  <ScrollView
                    ref={scrollViewRefex}
                    style={{ flexGrow: 1 }}
                    key={ChronicConditionArray.length}
                  >
                    <View
                      onLayout={(event) => {
                        setContentHeight(event.nativeEvent.layout.height); // Capture content height
                      }}
                    >
                      {/* Vision */}
                      {ChronicConditionArray?.includes("Vision") && (
                        <>
                          <TouchableOpacity
                            style={styles.addDetailsButton}
                            onPress={handleVision}
                          >
                            <Text style={[styles.addDetailsButtonText]}>
                              {language === "en"
                                ? engVision
                                : language === "bn"
                                ? bengVision
                                : language === "as"
                                ? assVision
                                : language === "hi"
                                ? hindiVision
                                : engVision}
                            </Text>
                            {tempAnswer == "vision" && isModalVisible ? (
                              <Entypo
                                name="chevron-small-up"
                                size={22}
                                color="black"
                              />
                            ) : (
                              <Entypo
                                name="chevron-small-down"
                                size={22}
                                color="black"
                              />
                            )}
                          </TouchableOpacity>

                          {/* Show answers */}
                          <View style={styles.subsection}>
                            <TouchableOpacity
                              onPress={() => {
                                setExpandedSection((prevState) => ({
                                  ...prevState,
                                  vision: !prevState.vision, // Toggle the 'vision' key
                                }));
                              }}
                            >
                              <Text
                                style={styles.selectedAnswer}
                                numberOfLines={
                                  expandedSection.vision ? undefined : 1
                                }
                                ellipsizeMode="tail"
                              >
                                {Vision_Condition?.includes("Others")
                                  ? [
                                      ...Vision_Condition.filter(
                                        (item) => item !== "Others"
                                      ),
                                      Vision?.trim() ? Vision : "Others",
                                    ].join(", ")
                                  : getVisionLabel(language, Vision_Condition)}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      )}

                      {/* Cancer */}
                      {ChronicConditionArray?.includes("Cancer") && (
                        <>
                          <TouchableOpacity
                            style={[styles.addDetailsButton]}
                            onPress={handleCancer}
                          >
                            <Text style={[styles.addDetailsButtonText]}>
                              {language === "en"
                                ? engCancer
                                : language === "bn"
                                ? bengCancer
                                : language === "as"
                                ? assCancer
                                : language === "hi"
                                ? hindiCancer
                                : engCancer}
                            </Text>
                            {tempAnswer == "cancer" && isModalVisible ? (
                              <Entypo
                                name="chevron-small-up"
                                size={22}
                                color="black"
                              />
                            ) : (
                              <Entypo
                                name="chevron-small-down"
                                size={22}
                                color="black"
                              />
                            )}
                          </TouchableOpacity>

                          <View style={styles.subsection}>
                            <TouchableOpacity
                              onPress={() => {
                                setExpandedSection((prevState) => ({
                                  ...prevState,
                                  cancer: !prevState.cancer,
                                }));
                              }}
                            >
                              <Text
                                style={styles.selectedAnswer}
                                numberOfLines={
                                  expandedSection.cancer ? undefined : 1
                                }
                                ellipsizeMode="tail"
                              >
                                {Cancer_Type?.includes("Others")
                                  ? [
                                      ...Cancer_Type.filter(
                                        (item) => item !== "Others"
                                      ),
                                      Cancer || "Others",
                                    ].join(", ")
                                  : getCancerLabel(language, Cancer_Type)}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      )}

                      {/* Musculoskeletal */}
                      {ChronicConditionArray?.includes(
                        "Musculoskeletal Disorder"
                      ) && (
                        <>
                          <TouchableOpacity
                            style={[styles.addDetailsButton]}
                            onPress={handleMusculoskeletal}
                          >
                            <Text style={[styles.addDetailsButtonText]}>
                              {language === "en"
                                ? engMusculoskeletal
                                : language === "bn"
                                ? bengMusculoskeletal
                                : language === "as"
                                ? assMusculoskeletal
                                : language === "hi"
                                ? hindiMusculoskeletal
                                : engMusculoskeletal}
                            </Text>
                            {tempAnswer == "Musculoskeletal" &&
                            isModalVisible ? (
                              <Entypo
                                name="chevron-small-up"
                                size={22}
                                color="black"
                              />
                            ) : (
                              <Entypo
                                name="chevron-small-down"
                                size={22}
                                color="black"
                              />
                            )}
                          </TouchableOpacity>

                          <View style={styles.subsection}>
                            <TouchableOpacity
                              onPress={() => {
                                setExpandedSection((prevState) => ({
                                  ...prevState,
                                  musculoskeletal: !prevState.musculoskeletal,
                                }));
                              }}
                            >
                              <Text
                                style={styles.selectedAnswer}
                                numberOfLines={
                                  expandedSection.musculoskeletal
                                    ? undefined
                                    : 1
                                }
                                ellipsizeMode="tail"
                              >
                                {Musculoskeletal_Type?.includes("Others")
                                  ? [
                                      ...Musculoskeletal_Type.filter(
                                        (item) => item !== "Others"
                                      ),
                                      Musculoskeletal || "Others",
                                    ].join(", ")
                                  : getMusculoskeletalLabel(
                                      language,
                                      Musculoskeletal_Type
                                    )}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      )}

                      {/* Urological */}
                      {ChronicConditionArray?.includes(
                        "Urological Condition"
                      ) && (
                        <>
                          <TouchableOpacity
                            style={[styles.addDetailsButton]}
                            onPress={handleUrological}
                          >
                            <Text style={[styles.addDetailsButtonText]}>
                              {language === "en"
                                ? engUrological
                                : language === "bn"
                                ? bengUrological
                                : language === "as"
                                ? assUrological
                                : language === "hi"
                                ? hindiUrological
                                : engUrological}
                            </Text>
                            {tempAnswer == "Urological" && isModalVisible ? (
                              <Entypo
                                name="chevron-small-up"
                                size={22}
                                color="black"
                              />
                            ) : (
                              <Entypo
                                name="chevron-small-down"
                                size={22}
                                color="black"
                              />
                            )}
                          </TouchableOpacity>

                          <View style={[styles.subsection]}>
                            <TouchableOpacity
                              onPress={() => {
                                setExpandedSection((prevState) => ({
                                  ...prevState,
                                  urological: !prevState.urological,
                                }));
                              }}
                            >
                              <Text
                                style={styles.selectedAnswer}
                                numberOfLines={
                                  expandedSection.urological ? undefined : 1
                                }
                                ellipsizeMode="tail"
                              >
                                {Urological_Type?.includes("Others")
                                  ? [
                                      ...Urological_Type.filter(
                                        (item) => item !== "Others"
                                      ),
                                      Urological || "Others",
                                    ].join(", ")
                                  : getUrologicalLabel(
                                      language,
                                      Urological_Type
                                    )}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      )}

                      {/* Gas */}
                      {ChronicConditionArray?.includes(
                        "Gastrointestinal Disorder"
                      ) && (
                        <>
                          <TouchableOpacity
                            style={[styles.addDetailsButton]}
                            onPress={handleGas}
                          >
                            <Text style={styles.addDetailsButtonText}>
                              <Text style={[styles.addDetailsButtonText]}>
                                {language === "en"
                                  ? engGastrointestinal
                                  : language === "bn"
                                  ? bengGastrointestinal
                                  : language === "as"
                                  ? assGastrointestinal
                                  : language === "hi"
                                  ? hindiGastrointestinal
                                  : engGastrointestinal}
                              </Text>
                            </Text>
                            {tempAnswer == "Gas" && isModalVisible ? (
                              <Entypo
                                name="chevron-small-up"
                                size={22}
                                color="black"
                              />
                            ) : (
                              <Entypo
                                name="chevron-small-down"
                                size={22}
                                color="black"
                              />
                            )}
                          </TouchableOpacity>

                          <View style={styles.subsection}>
                            <TouchableOpacity
                              onPress={() => {
                                setExpandedSection((prevState) => ({
                                  ...prevState,
                                  gastrointestinal: !prevState.gastrointestinal,
                                }));
                              }}
                            >
                              <Text
                                style={styles.selectedAnswer}
                                numberOfLines={
                                  expandedSection.gastrointestinal
                                    ? undefined
                                    : 1
                                }
                                ellipsizeMode="tail"
                              >
                                {Gas_Type?.includes("Others")
                                  ? [
                                      ...Gas_Type.filter(
                                        (item) => item !== "Others"
                                      ),
                                      Gas || "Others",
                                    ].join(", ")
                                  : getGastrointestinalLabel(
                                      language,
                                      Gas_Type
                                    )}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      )}

                      {/* Neurological */}
                      {ChronicConditionArray?.includes(
                        "Neurological Disorder"
                      ) && (
                        <>
                          <TouchableOpacity
                            style={[styles.addDetailsButton]}
                            onPress={handleNeuro}
                          >
                            <Text style={[styles.addDetailsButtonText]}>
                              {language === "en"
                                ? engNeurological
                                : language === "bn"
                                ? bengNeurological
                                : language === "as"
                                ? assNeurological
                                : language === "hi"
                                ? hindiNeurological
                                : engNeurological}
                            </Text>

                            {tempAnswer == "Neuro" && isModalVisible ? (
                              <Entypo
                                name="chevron-small-up"
                                size={22}
                                color="black"
                              />
                            ) : (
                              <Entypo
                                name="chevron-small-down"
                                size={22}
                                color="black"
                              />
                            )}
                          </TouchableOpacity>

                          <View style={styles.subsection}>
                            <TouchableOpacity
                              onPress={() => {
                                setExpandedSection((prevState) => ({
                                  ...prevState,
                                  neurological: !prevState.neurological,
                                }));
                              }}
                            >
                              <Text
                                style={styles.selectedAnswer}
                                numberOfLines={
                                  expandedSection.neurological ? undefined : 1
                                }
                                ellipsizeMode="tail"
                              >
                                {Neuro_Type?.includes("Others")
                                  ? [
                                      ...Neuro_Type.filter(
                                        (item) => item !== "Others"
                                      ),
                                      Neurological || "Others",
                                    ].join(", ")
                                  : getNeurologicalLabel(language, Neuro_Type)}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      )}

                      {/* Respiratory */}
                      {ChronicConditionArray?.includes(
                        "Respiratory Condition"
                      ) && (
                        <>
                          <TouchableOpacity
                            style={[styles.addDetailsButton]}
                            onPress={handleRes}
                          >
                            <Text style={[styles.addDetailsButtonText]}>
                              {language === "en"
                                ? engRespiratory
                                : language === "bn"
                                ? bengRespiratory
                                : language === "as"
                                ? assRespiratory
                                : language === "hi"
                                ? hindiRespiratory
                                : engRespiratory}
                            </Text>
                            {tempAnswer == "Res" && isModalVisible ? (
                              <Entypo
                                name="chevron-small-up"
                                size={22}
                                color="black"
                              />
                            ) : (
                              <Entypo
                                name="chevron-small-down"
                                size={22}
                                color="black"
                              />
                            )}
                          </TouchableOpacity>

                          <View style={styles.subsection}>
                            <TouchableOpacity
                              onPress={() => {
                                setExpandedSection((prevState) => ({
                                  ...prevState,
                                  respiratory: !prevState.respiratory,
                                }));
                              }}
                            >
                              <Text
                                style={styles.selectedAnswer}
                                numberOfLines={
                                  expandedSection.respiratory ? undefined : 1
                                }
                                ellipsizeMode="tail"
                              >
                                {Res_Type?.includes("Others")
                                  ? [
                                      ...Res_Type.filter(
                                        (item) => item !== "Others"
                                      ),
                                      Respiratory || "Others",
                                    ].join(", ")
                                  : getResLabel(language, Res_Type)}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      )}

                      {/* Dibatis */}
                      {ChronicConditionArray?.includes(
                        "Endocrine Disorder"
                      ) && (
                        <>
                          <TouchableOpacity
                            style={[styles.addDetailsButton]}
                            onPress={handleDiabet}
                          >
                            <Text style={[styles.addDetailsButtonText]}>
                              {language === "en"
                                ? engDiabetesEndocrine
                                : language === "bn"
                                ? bengDiabetesEndocrine
                                : language === "as"
                                ? assDiabetesEndocrine
                                : language === "hi"
                                ? hindiDiabetesEndocrine
                                : engDiabetesEndocrine}
                            </Text>

                            {tempAnswer == "Diabat" && isModalVisible ? (
                              <Entypo
                                name="chevron-small-up"
                                size={22}
                                color="black"
                              />
                            ) : (
                              <Entypo
                                name="chevron-small-down"
                                size={22}
                                color="black"
                              />
                            )}
                          </TouchableOpacity>

                          <View style={styles.subsection}>
                            <TouchableOpacity
                              onPress={() => {
                                setExpandedSection((prevState) => ({
                                  ...prevState,
                                  diabatis: !prevState.diabatis,
                                }));
                              }}
                            >
                              <Text
                                style={styles.selectedAnswer}
                                numberOfLines={
                                  expandedSection.diabatis ? undefined : 1
                                }
                                ellipsizeMode="tail"
                              >
                                {Diabat_Type?.includes("Others")
                                  ? [
                                      ...Diabat_Type.filter(
                                        (item) => item !== "Others"
                                      ),
                                      Diabatis || "Others",
                                    ].join(", ")
                                  : getDiabatLabel(language, Diabat_Type)}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      )}

                      {/* Cardio */}
                      {ChronicConditionArray?.includes(
                        "Cardiovascular Disease"
                      ) && (
                        <>
                          <TouchableOpacity
                            style={[styles.addDetailsButton]}
                            onPress={handleCard}
                          >
                            <Text style={[styles.addDetailsButtonText]}>
                              {language === "en"
                                ? engCardiovascular
                                : language === "bn"
                                ? bengCardiovascular
                                : language === "as"
                                ? assCardiovascular
                                : language === "hi"
                                ? hindiCardiovascular
                                : engCardiovascular}
                            </Text>

                            {tempAnswer == "Card" && isModalVisible ? (
                              <Entypo
                                name="chevron-small-up"
                                size={22}
                                color="black"
                              />
                            ) : (
                              <Entypo
                                name="chevron-small-down"
                                size={22}
                                color="black"
                              />
                            )}
                          </TouchableOpacity>

                          <View style={styles.subsection}>
                            <TouchableOpacity
                              onPress={() => {
                                setExpandedSection((prevState) => ({
                                  ...prevState,
                                  cardio: !prevState.cardio,
                                }));
                              }}
                            >
                              <Text
                                style={styles.selectedAnswer}
                                numberOfLines={
                                  expandedSection.cardio ? undefined : 1
                                }
                                ellipsizeMode="tail"
                              >
                                {Card_Type.includes("Others")
                                  ? [
                                      ...Card_Type.filter(
                                        (item) => item !== "Others"
                                      ),
                                      Cardio || "Others",
                                    ].join(", ")
                                  : getCardLabel(language, Card_Type)}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      )}
                    </View>
                  </ScrollView>
                )}
              </Animated.View>
            </View>

            {/* Infection */}
            <View style={[styles.section, error2 && styles.errorSection]}>
              <RenderQuestion
                optionType="radio"
                questionNumber={
                  healthHistoryQuestions[1].questionNumber[language]
                }
                question={
                  healthHistoryQuestions[1].translations[language].question
                }
                language={language}
                defaultSelected={infect}
                options={
                  healthHistoryQuestions[1].translations[language].options
                }
                onSelect={(selectedoption) =>
                  handleInfectSelection(selectedoption)
                }
              />
              <View style={styles.subsection}>
                {infectname && infect === "Yes" && (
                  <Text style={styles.selectedAnswer}>
                    {`${
                      infectname.includes("Other")
                        ? [
                            ...infectname.filter((item) => item !== "Other"),
                            infectnameother || "Other",
                          ].join(", ")
                        : getDiseaseLabel(language, infectname)
                    }`}
                  </Text>
                )}
              </View>
            </View>

            {/* Allergy */}
            <View style={[styles.section, error4 && styles.errorSection]}>
              <RenderQuestion
                optionType="radio"
                questionNumber={
                  healthHistoryQuestions[2].questionNumber[language]
                }
                question={
                  healthHistoryQuestions[2].translations[language].question
                }
                language={language}
                defaultSelected={allergies}
                options={
                  healthHistoryQuestions[2].translations[language].options
                }
                onSelect={(selectedoption) =>
                  handleAllergySelection(selectedoption)
                }
              />
              <View style={styles.subsection}>
                {allergiesname && allergies === "Yes" && (
                  <Text style={styles.selectedAnswer}>
                    {getAllergyLabel(allergiesname)}
                  </Text>
                )}
              </View>
            </View>

            {/* Vaccine */}
            <View style={[styles.section, error5 && styles.errorSection]}>
              <RenderQuestion
                optionType="radio"
                questionNumber={
                  healthHistoryQuestions[3].questionNumber[language]
                }
                question={
                  healthHistoryQuestions[3].translations[language].question
                }
                language={language}
                defaultSelected={Vaccinatin}
                options={
                  healthHistoryQuestions[3].translations[language].options
                }
                onSelect={(selectedoption) =>
                  handleVactineSelection(selectedoption)
                }
              />
              <View style={styles.subsection}>
                {selectedVaccine && Vaccinatin === "Yes" && (
                  <TouchableOpacity
                    onPress={() => setVaccineExpanded((prev) => !prev)}
                  >
                    <Text
                      style={styles.selectedAnswer}
                      numberOfLines={vaccineExpanded ? undefined : 1}
                      ellipsizeMode="tail"
                    >
                      {getVaccineOptionsAsString(language, selectedVaccine)}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Alternative Med */}
            {/* <View style={[styles.section, error6 && styles.errorSection]}>
              <RenderQuestion
                optionType="radio"
                questionNumber={
                  healthHistoryQuestions[4].questionNumber[language]
                }
                question={
                  healthHistoryQuestions[4].translations[language].question
                }
                language={language}
                defaultSelected={AlterMed}
                options={
                  healthHistoryQuestions[4].translations[language].options
                }
                onSelect={(selectedoption) =>
                  handleAlterMedSelection(selectedoption)
                }
              />
              <View style={styles.subsection}>
                {AlterMedname && AlterMed === "Yes" && (
                  <Text style={styles.selectedAnswer}>
                    {`${[
                      ...AlterMedname.filter(
                        (name) => name !== "other_treatments"
                      ) // Exclude "other_treatments" from the mapped labels
                        .map((name) => getAltermedicineLabel(language, name)), // Convert selected values to labels
                      ...(AlterMedname.includes("other_treatments") &&
                        AlterMednamementions
                        ? [AlterMednamementions]
                        : []), // Add AlterMednamementions if conditions are met
                    ].join(", ") // Join all elements with ", "
                      }`}
                  </Text>
                )}
              </View>
            </View> */}

            {/* Reproductive Health */}
            {gender === "Male" && (
              <>
                <View style={[styles.section, error7 && styles.errorSection]}>
                  <RenderQuestion
                    optionType="radio"
                    questionNumber={
                      healthHistoryQuestions[5].questionNumber[language]
                    }
                    question={
                      healthHistoryQuestions[5].translations[language].question
                    }
                    language={language}
                    options={
                      healthHistoryQuestions[5].translations[language].options
                    }
                    defaultSelected={REpHealth}
                    onSelect={(selectedoption) =>
                      handleRepHealthSelection(selectedoption)
                    }
                  />
                  <View style={styles.subsection}>
                    {REpHealthname && REpHealth === "Yes" && (
                      <Text style={styles.selectedAnswer}>
                        {REpHealthname.includes("Others")
                          ? [
                              ...REpHealthname.filter(
                                (item) => item !== "Others"
                              ),
                              REpHealthnamementins || "Others",
                            ].join(", ")
                          : getRephelthLabel(language, REpHealthname)}
                      </Text>
                    )}
                  </View>
                </View>
              </>
            )}
            {gender === "Female" && (
              <>
                <View style={[styles.section, error8 && styles.errorSection]}>
                  <RenderQuestion
                    optionType="radio"
                    questionNumber={
                      healthHistoryQuestions[6].questionNumber[language]
                    }
                    question={
                      healthHistoryQuestions[6].translations[language].question
                    }
                    language={language}
                    options={
                      healthHistoryQuestions[6].translations[language].options
                    }
                    defaultSelected={Menstruation}
                    onSelect={(selectedoption) =>
                      handleMenstruationSelection(selectedoption)
                    }
                  />
                  <View style={styles.subsection}>
                    {Menstruationname && Menstruation === "Yes" && (
                      <Text style={styles.selectedAnswer}>
                        {getMenstruationLabel(Menstruationname, language)}
                      </Text>
                    )}
                  </View>
                </View>
              </>
            )}

            {/* Surgery */}
            {/* <View style={[styles.section, error3 && styles.errorSection]}>
              <RenderQuestion
                optionType="radio"
                questionNumber={
                  healthHistoryQuestions[7].questionNumber[language]
                }
                question={
                  healthHistoryQuestions[7].translations[language].question
                }
                language={language}
                defaultSelected={surgery}
                options={
                  healthHistoryQuestions[7].translations[language].options
                }
                onSelect={(selectedoption) =>
                  handleSurgerySelection(selectedoption)
                }
              />

              <View style={styles.subsection}>
                {surgeryname && surgery === "Yes" && (
                  <Text style={styles.selectedAnswer}>
                    {surgery
                      ? surgeryname
                      : notMentionedText[language] || "Not Mentioned"}
                  </Text>
                )}
              </View>
            </View> */}

            {/* Hospitalization */}
            <View style={[styles.section, error9 && styles.errorSection]}>
              <RenderQuestion
                optionType="radio"
                questionNumber={
                  healthHistoryQuestions[8].questionNumber[language]
                }
                question={
                  healthHistoryQuestions[8].translations[language].question
                }
                language={language}
                defaultSelected={Hospitalization}
                options={
                  healthHistoryQuestions[8].translations[language].options
                }
                onSelect={(selectedoption) =>
                  handleHospitlizationSelection(selectedoption)
                }
              />

              <View style={styles.subsection}>
                {Hospitalizationname && Hospitalization === "Yes" && (
                  <Text style={styles.selectedAnswer}>
                    {Hospitalizationname} ({HospitalizationnameDuration} {""}
                    {getHospLabel(language, HospitalizationnameDurationname)})
                  </Text>
                )}
              </View>
            </View>

            {/* Submit Button */}
            <View
              style={{
                marginTop: "auto",
              }}
            >
              <Button
                value={
                  language === "en"
                    ? "Preview"
                    : language === "bn"
                    ? "পূর্বরূপ"
                    : language === "hi"
                    ? "पूर्वावलोकन"
                    : language === "as"
                    ? "পূৰ্বদৰ্শন"
                    : "Preview"
                }
                onPress={handlePreview}
                size={"95%"}
              />
            </View>
          </ScrollView>

          {/* Detail Modal */}
          <Modal
            isVisible={isModalVisible}
            onModalHide={handleModalHide}
            swipeDirection="down"
            transparent={true}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={500}
            animationOutTiming={500}
            useNativeDriver={false}
            backdropOpacity={0.5}
            style={styles.modal}
            onSwipeComplete={() => setModalVisible(false)}
            onBackdropPress={() => setModalVisible(false)}
          >
            {tempAnswer === "Chronic" && (
              <View style={[styles.modalView]}>
                <View style={styles.handle} />

                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[0].children[0].translations[language]
                      .question
                  }
                  options={
                    healthHistoryQuestions[0].children[0].translations[language]
                      .options
                  }
                  defaultSelected={tempModalValues?.chronic?.conditions}
                  multiSelect={true}
                  onSelect={(value) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      chronic: {
                        ...prev.chronic,
                        conditions: value,
                      },
                    }));
                  }}
                />

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন"
                      : language === "hi"
                      ? "पुष्टि करें"
                      : language === "as"
                      ? "নিশ্চিত কৰক"
                      : "Confirm"
                  }
                  onPress={handleChronicConfirm}
                />
              </View>
            )}
            {tempAnswer === "vision" && (
              <View style={[styles.modalView]}>
                <View style={styles.handle} />
                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[0].children[0].children[0]
                      .translations[language].question
                  }
                  options={
                    healthHistoryQuestions[0].children[0].children[0]
                      .translations[language].options
                  }
                  onSelect={(value) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      vision: {
                        ...prev.vision,
                        condition: value,
                      },
                    }));
                    if (!value.includes("Others")) {
                      setTempModalValues((prev) => ({
                        ...prev,
                        vision: {
                          ...prev.vision,
                          other: null,
                        },
                      }));
                    }
                  }}
                  defaultSelected={tempModalValues.vision.condition}
                />

                {tempModalValues.vision.condition?.includes("Others") && (
                  <>
                    <RenderQuestion
                      optionType="input"
                      question={
                        healthHistoryQuestions[0].children[0].children[0]
                          .children[0].translations[language].question
                      }
                      style={[styles.input]}
                      placeholder={
                        healthHistoryQuestions[0].children[0].children[0]
                          .children[0].translations[language].question
                      }
                      defaultSelected={tempModalValues.vision.other}
                      onSelect={(text) =>
                        setTempModalValues((prev) => ({
                          ...prev,
                          vision: {
                            ...prev.vision,
                            other: text.trim().replace(/\s+/g, " "),
                          },
                        }))
                      }
                      maxLength={40}
                    />
                  </>
                )}

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalChronic}
                />
              </View>
            )}
            {tempAnswer === "cancer" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />

                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[0].children[0].children[1]
                      .translations[language].question
                  }
                  options={
                    healthHistoryQuestions[0].children[0].children[1]
                      .translations[language].options
                  }
                  onSelect={(value) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      cancer: {
                        ...prev.cancer,
                        type: value,
                      },
                    }));
                    if (!value.includes("Others")) {
                      setTempModalValues((prev) => ({
                        ...prev,
                        cancer: {
                          ...prev.cancer,
                          other: null,
                        },
                      }));
                    }
                  }}
                  defaultSelected={tempModalValues?.cancer?.type}
                />

                {tempModalValues?.cancer?.type.includes("Others") && (
                  <>
                    <RenderQuestion
                      optionType="input"
                      question={
                        healthHistoryQuestions[0].children[0].children[1]
                          .children[0].translations[language].question
                      }
                      style={[styles.input]}
                      placeholder={
                        healthHistoryQuestions[0].children[0].children[1]
                          .children[0].translations[language].textInput
                      }
                      defaultSelected={tempModalValues?.cancer?.other}
                      onSelect={(text) =>
                        setTempModalValues((prev) => ({
                          ...prev,
                          cancer: {
                            ...prev.cancer,
                            other: text.trim().replace(/\s+/g, " "),
                          },
                        }))
                      }
                      maxLength={40}
                    />
                  </>
                )}

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalChronic}
                />
              </View>
            )}
            {tempAnswer === "Musculoskeletal" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />

                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[0].children[0].children[2]
                      .translations[language].question
                  }
                  options={
                    healthHistoryQuestions[0].children[0].children[2]
                      .translations[language].options
                  }
                  onSelect={(value) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      musculoskeletal: {
                        ...prev.musculoskeletal,
                        type: value,
                      },
                    }));
                    if (!value.includes("Others")) {
                      setTempModalValues((prev) => ({
                        ...prev,
                        musculoskeletal: {
                          ...prev.musculoskeletal,
                          other: null,
                        },
                      }));
                    }
                  }}
                  defaultSelected={tempModalValues?.musculoskeletal?.type}
                />

                {tempModalValues?.musculoskeletal?.type.includes("Others") && (
                  <>
                    <RenderQuestion
                      optionType="input"
                      question={
                        healthHistoryQuestions[0].children[0].children[2]
                          .translations[language].question
                      }
                      style={[styles.input]}
                      placeholder={
                        healthHistoryQuestions[0].children[0].children[2]
                          .translations[language].textInput
                      }
                      defaultSelected={tempModalValues?.musculoskeletal?.other}
                      onSelect={(text) =>
                        setTempModalValues((prev) => ({
                          ...prev,
                          musculoskeletal: {
                            ...prev.musculoskeletal,
                            other: text.trim().replace(/\s+/g, " "),
                          },
                        }))
                      }
                      maxLength={40}
                    />
                  </>
                )}

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalChronic}
                />
              </View>
            )}
            {tempAnswer === "Urological" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />
                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[0].children[0].children[3]
                      .translations[language].question
                  }
                  options={ReOptions[language]}
                  onSelect={(value) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      urological: {
                        ...prev.urological,
                        type: value,
                      },
                    }));
                    if (!value.includes("Others")) {
                      setTempModalValues((prev) => ({
                        ...prev,
                        urological: {
                          ...prev.urological,
                          other: null,
                        },
                      }));
                    }
                  }}
                  defaultSelected={tempModalValues?.urological?.type}
                />

                {tempModalValues?.urological?.type.includes("Others") && (
                  <>
                    <RenderQuestion
                      question={
                        healthHistoryQuestions[0].children[0].children[3]
                          .children[0].translations[language].question
                      }
                      optionType="input"
                      style={[styles.input]}
                      placeholder={
                        healthHistoryQuestions[0].children[0].children[3]
                          .children[0].translations[language].textInput
                      }
                      defaultSelected={tempModalValues?.urological?.other}
                      onSelect={(text) =>
                        setTempModalValues((prev) => ({
                          ...prev,
                          urological: {
                            ...prev.urological,
                            other: text.trim().replace(/\s+/g, " "),
                          },
                        }))
                      }
                      maxLength={40}
                    />
                  </>
                )}

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalChronic}
                />
              </View>
            )}
            {tempAnswer === "Gas" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />

                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[0].children[0].children[4]
                      .translations[language].question
                  }
                  options={
                    healthHistoryQuestions[0].children[0].children[4]
                      .translations[language].options
                  }
                  onSelect={(value) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      gastrointestinal: {
                        ...prev.gas,
                        type: value,
                      },
                    }));
                    if (!value.includes("Others")) {
                      setTempModalValues((prev) => ({
                        ...prev,
                        gastrointestinal: {
                          ...prev.gastrointestinal,
                          other: null,
                        },
                      }));
                    }
                  }}
                  defaultSelected={tempModalValues?.gastrointestinal?.type}
                />

                {tempModalValues?.gastrointestinal?.type.includes("Others") && (
                  <>
                    <RenderQuestion
                      optionType="input"
                      question={
                        healthHistoryQuestions[0].children[0].children[4]
                          .children[0].translations[language].question
                      }
                      style={[styles.input]}
                      placeholder={
                        healthHistoryQuestions[0].children[0].children[4]
                          .children[0].translations[language].textInput
                      }
                      defaultSelected={tempModalValues?.gastrointestinal?.other}
                      onSelect={(text) =>
                        setTempModalValues((prev) => ({
                          ...prev,
                          gastrointestinal: {
                            ...prev.gastrointestinal,
                            other: text.trim().replace(/\s+/g, " "),
                          },
                        }))
                      }
                      maxLength={40}
                    />
                  </>
                )}

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalChronic}
                />
              </View>
            )}
            {tempAnswer === "Neuro" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />

                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[0].children[0].children[5]
                      .translations[language].question
                  }
                  options={
                    healthHistoryQuestions[0].children[0].children[5]
                      .translations[language].options
                  }
                  onSelect={(value) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      neurological: {
                        ...prev.neurological,
                        type: value,
                      },
                    }));
                    if (!value.includes("Others")) {
                      setTempModalValues((prev) => ({
                        ...prev,
                        neurological: {
                          ...prev.neurological,
                          other: null,
                        },
                      }));
                    }
                  }}
                  defaultSelected={tempModalValues?.neurological?.type}
                />

                {tempModalValues?.neurological?.type.includes("Others") && (
                  <>
                    <RenderQuestion
                      optionType="input"
                      question={
                        healthHistoryQuestions[0].children[0].children[5]
                          .children[0].translations[language].question
                      }
                      style={[styles.input]}
                      placeholder={
                        healthHistoryQuestions[0].children[0].children[5]
                          .children[0].translations[language].textInput
                      }
                      defaultSelected={tempModalValues?.neurological?.other}
                      onSelect={(text) =>
                        setTempModalValues((prev) => ({
                          ...prev,
                          neurological: {
                            ...prev.neurological,
                            other: text.trim().replace(/\s+/g, " "),
                          },
                        }))
                      }
                      maxLength={40}
                    />
                  </>
                )}

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalChronic}
                />
              </View>
            )}
            {tempAnswer === "Res" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />

                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[0].children[0].children[6]
                      .translations[language].question
                  }
                  options={
                    healthHistoryQuestions[0].children[0].children[6]
                      .translations[language].options
                  }
                  onSelect={(value) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      respiratory: {
                        ...prev.respiratory,
                        type: value,
                      },
                    }));
                    if (!value.includes("Others")) {
                      setTempModalValues((prev) => ({
                        ...prev,
                        respiratory: {
                          ...prev.respiratory,
                          other: null,
                        },
                      }));
                    }
                  }}
                  defaultSelected={tempModalValues?.respiratory?.type}
                />

                {tempModalValues?.respiratory?.type.includes("Others") && (
                  <>
                    <RenderQuestion
                      optionType="input"
                      question={
                        healthHistoryQuestions[0].children[0].children[6]
                          .children[0].translations[language].question
                      }
                      style={[styles.input]}
                      placeholder={
                        healthHistoryQuestions[0].children[0].children[6]
                          .children[0].translations[language].textInput
                      }
                      defaultSelected={tempModalValues?.respiratory?.other}
                      onSelect={(text) =>
                        setTempModalValues((prev) => ({
                          ...prev,
                          respiratory: {
                            ...prev.respiratory,
                            other: text.trim().replace(/\s+/g, " "),
                          },
                        }))
                      }
                      maxLength={40}
                    />
                  </>
                )}

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalChronic}
                />
              </View>
            )}
            {tempAnswer === "Diabat" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />

                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[0].children[0].children[7]
                      .translations[language].question
                  }
                  options={
                    healthHistoryQuestions[0].children[0].children[7]
                      .translations[language].options
                  }
                  onSelect={(value) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      diabetes: {
                        ...prev.diabetes,
                        type: value,
                      },
                    }));
                    if (!value.includes("Others")) {
                      setTempModalValues((prev) => ({
                        ...prev,
                        diabetes: {
                          ...prev.diabetes,
                          other: null,
                        },
                      }));
                    }
                  }}
                  defaultSelected={tempModalValues?.diabetes?.type}
                />

                {tempModalValues?.diabetes?.type.includes("Others") && (
                  <>
                    <RenderQuestion
                      optionType="input"
                      question={
                        healthHistoryQuestions[0].children[0].children[7]
                          .translations[language].question
                      }
                      style={[styles.input]}
                      placeholder={
                        healthHistoryQuestions[0].children[0].children[7]
                          .translations[language].textInput
                      }
                      defaultSelected={tempModalValues?.diabetes?.other}
                      onSelect={(text) =>
                        setTempModalValues((prev) => ({
                          ...prev,
                          diabetes: {
                            ...prev.diabetes,
                            other: text.trim().replace(/\s+/g, " "),
                          },
                        }))
                      }
                      maxLength={40}
                    />
                  </>
                )}

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalChronic}
                />
              </View>
            )}
            {tempAnswer === "Card" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />
                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[0].children[0].children[8]
                      .translations[language].question
                  }
                  options={
                    healthHistoryQuestions[0].children[0].children[8]
                      .translations[language].options
                  }
                  onSelect={(value) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      cardiovascular: {
                        ...prev.cardio,
                        type: value,
                      },
                    }));
                    if (!value.includes("Others")) {
                      setTempModalValues((prev) => ({
                        ...prev,
                        cardiovascular: {
                          ...prev.cardiovascular,
                          other: null,
                        },
                      }));
                    }
                  }}
                  defaultSelected={tempModalValues?.cardiovascular?.type}
                />

                {tempModalValues?.cardiovascular?.type.includes("Others") && (
                  <>
                    <RenderQuestion
                      optionType="input"
                      question={
                        healthHistoryQuestions[0].children[0].children[8]
                          .children[0].translations[language].question
                      }
                      style={[styles.input]}
                      placeholder={
                        healthHistoryQuestions[0].children[0].children[8]
                          .children[0].translations[language].textInput
                      }
                      defaultSelected={tempModalValues?.cardiovascular?.other}
                      onSelect={(text) =>
                        setTempModalValues((prev) => ({
                          ...prev,
                          cardiovascular: {
                            ...prev.cardiovascular,
                            other: text.trim().replace(/\s+/g, " "),
                          },
                        }))
                      }
                      maxLength={40}
                    />
                  </>
                )}

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalChronic}
                />
              </View>
            )}

            {tempAnswer === "Infect" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />

                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[1].children[0].translations[language]
                      .question
                  }
                  options={
                    healthHistoryQuestions[1].children[0].translations[language]
                      .options
                  }
                  language={language}
                  defaultSelected={tempModalValues?.infections?.types}
                  multiSelect={true}
                  onSelect={(value) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      infections: {
                        ...prev.infections,
                        types: value,
                      },
                    }));
                    if (!value.includes("Other")) {
                      setTempModalValues((prev) => ({
                        ...prev,
                        infections: {
                          ...prev.infections,
                          other: null,
                        },
                      }));
                    }
                  }}
                />

                {tempModalValues?.infections?.types?.includes("Other") && (
                  <>
                    <RenderQuestion
                      optionType="input"
                      question={
                        healthHistoryQuestions[1].children[0].children[0]
                          .translations[language].question
                      }
                      style={[styles.input]}
                      placeholder={
                        healthHistoryQuestions[1].children[0].children[0]
                          .translations[language].textInput
                      }
                      defaultSelected={tempModalValues?.infections?.other}
                      onSelect={(text) => {
                        setTempModalValues((prev) => ({
                          ...prev,
                          infections: {
                            ...prev.infections,
                            other: text.trim().replace(/\s+/g, " "),
                          },
                        }));
                      }}
                      maxLength={40}
                    />
                    <View style={[styles.line, { marginTop: 10 }]} />
                  </>
                )}

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalinfect}
                />
              </View>
            )}
            {tempAnswer === "Allergy" && (
              <View style={[styles.modalView]}>
                <View style={styles.handle} />
                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[2].children[0].translations[language]
                      .question
                  }
                  options={
                    healthHistoryQuestions[2].children[0].translations[language]
                      .options
                  }
                  language={language}
                  defaultSelected={tempModalValues?.allergies?.types}
                  multiSelect={true}
                  onSelect={(selectedoption) =>
                    setTempModalValues((prev) => ({
                      ...prev,
                      allergies: {
                        ...prev.allergies,
                        types: selectedoption,
                      },
                    }))
                  }
                />

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalallergy}
                />
              </View>
            )}
            {tempAnswer === "Vactine" && (
              <View
                style={[styles.modalView, { height: "90%", paddingBottom: 0 }]}
              >
                <View style={styles.handle} />

                <ScrollView
                  style={{ flex: 1 }}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: "20%",
                  }}
                >
                  <RenderQuestion
                    optionType="checkbox"
                    question={
                      healthHistoryQuestions[3].children[0].translations[
                        language
                      ].question
                    }
                    options={
                      healthHistoryQuestions[3].children[0].translations[
                        language
                      ].options
                    }
                    onSelect={(value) => {
                      setTempModalValues((prev) => ({
                        ...prev,
                        vaccine: {
                          ...prev.vaccine,
                          selected: value,
                        },
                      }));
                    }}
                    defaultSelected={tempModalValues?.vaccine?.selected}
                  />
                </ScrollView>

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalvac}
                />
              </View>
            )}
            {tempAnswer === "Altermed" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />
                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[4].children[0].translations[language]
                      .question
                  }
                  options={
                    healthHistoryQuestions[4].children[0].translations[language]
                      .options
                  }
                  language={language}
                  defaultSelected={tempModalValues?.alternativeMedicine?.types}
                  multiSelect={true}
                  onSelect={(selectedoption) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      alternativeMedicine: {
                        ...prev.alternativeMedicine,
                        types: selectedoption,
                      },
                    }));
                    if (!selectedoption.includes("other_treatments")) {
                      setTempModalValues((prev) => ({
                        ...prev,
                        alternativeMedicine: {
                          ...prev.alternativeMedicine,
                          other: null,
                        },
                      }));
                    }
                  }}
                />

                {tempModalValues?.alternativeMedicine?.types.includes(
                  "other_treatments"
                ) && (
                  <>
                    <RenderQuestion
                      optionType="input"
                      question={
                        healthHistoryQuestions[4].children[0].children[0]
                          .translations[language].question
                      }
                      style={[styles.input]}
                      placeholder={
                        healthHistoryQuestions[4].children[0].children[0]
                          .translations[language].textInput
                      }
                      defaultSelected={
                        tempModalValues?.alternativeMedicine?.other
                      }
                      onSelect={(text) =>
                        setTempModalValues((prev) => ({
                          ...prev,
                          alternativeMedicine: {
                            ...prev.alternativeMedicine,
                            other: text.trim().replace(/\s+/g, " "),
                          },
                        }))
                      }
                      maxLength={40}
                    />
                  </>
                )}

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalmed}
                />
              </View>
            )}
            {tempAnswer === "Male" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />
                <RenderQuestion
                  optionType="checkbox"
                  question={
                    healthHistoryQuestions[5].children[0].translations[language]
                      .question
                  }
                  options={
                    healthHistoryQuestions[5].children[0].translations[language]
                      .options
                  }
                  language={language}
                  defaultSelected={
                    tempModalValues?.reproductiveHealth?.conditions
                  }
                  multiSelect={true}
                  onSelect={(selectedoption) => {
                    setTempModalValues((prev) => ({
                      ...prev,
                      reproductiveHealth: {
                        ...prev.reproductiveHealth,
                        conditions: selectedoption,
                      },
                    }));
                    if (!selectedoption.includes("Others")) {
                      setTempModalValues((prev) => ({
                        ...prev,
                        reproductiveHealth: {
                          ...prev.reproductiveHealth,
                          other: null,
                        },
                      }));
                    }
                  }}
                />

                {tempModalValues?.reproductiveHealth?.conditions.includes(
                  "Others"
                ) && (
                  <>
                    <RenderQuestion
                      optionType="input"
                      question={
                        healthHistoryQuestions[5].children[0].children[0]
                          .translations[language].question
                      }
                      style={[styles.input]}
                      placeholder={
                        healthHistoryQuestions[5].children[0].children[0]
                          .translations[language].textInput
                      }
                      defaultSelected={
                        tempModalValues?.reproductiveHealth?.other
                      }
                      onSelect={(text) =>
                        setTempModalValues((prev) => ({
                          ...prev,
                          reproductiveHealth: {
                            ...prev.reproductiveHealth,
                            other: text.trim().replace(/\s+/g, " "),
                          },
                        }))
                      }
                      maxLength={40}
                    />
                  </>
                )}

                <Button
                  value={
                    language === "en"
                      ? "Preview"
                      : language === "bn"
                      ? "পূর্বরূপ"
                      : language === "hi"
                      ? "पूर्वावलोकन"
                      : language === "as"
                      ? "পূৰ্বদৰ্শন"
                      : "Preview"
                  }
                  onPress={handleCloseModalMale}
                />
              </View>
            )}
            {tempAnswer === "Female" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />
                <RenderQuestion
                  optionType="custom"
                  question={
                    healthHistoryQuestions[6].children[0].translations[language]
                      .question
                  }
                  language={language}
                  defaultSelected={tempModalValues?.menstruation?.cycle}
                  options={
                    healthHistoryQuestions[6].children[0].translations[language]
                      .options
                  }
                  onSelect={(selectedoption) =>
                    setTempModalValues((prev) => ({
                      ...prev,
                      menstruation: {
                        ...prev.menstruation,
                        cycle: selectedoption,
                      },
                    }))
                  }
                />

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalFeMale}
                />
              </View>
            )}
            {tempAnswer === "Surgery" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />
                <RenderQuestion
                  optionType="input"
                  question={
                    healthHistoryQuestions[7].children[0].translations[language]
                      .question
                  }
                  style={[styles.input]}
                  placeholder={
                    healthHistoryQuestions[7].children[0].translations[language]
                      .textInput
                  }
                  defaultSelected={tempModalValues?.surgery?.details}
                  onSelect={(text) =>
                    setTempModalValues((prev) => ({
                      ...prev,
                      surgery: {
                        ...prev.surgery,
                        details: text.trim().replace(/\s+/g, " "),
                      },
                    }))
                  }
                  maxLength={40}
                />

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={() => {
                    setsurgeryname(tempModalValues?.surgery?.details);
                    setModalVisible(false);
                  }}
                />
              </View>
            )}
            {tempAnswer === "Hospital" && (
              <View style={styles.modalView}>
                <View style={styles.handle} />
                <RenderQuestion
                  optionType="input"
                  question={
                    healthHistoryQuestions[8].children[0].translations[language]
                      .question
                  }
                  style={[styles.input]}
                  placeholder={
                    healthHistoryQuestions[8].children[0].translations[language]
                      .textInput
                  }
                  defaultSelected={tempModalValues?.hospitalization?.reason}
                  onSelect={(text) =>
                    setTempModalValues((prev) => ({
                      ...prev,
                      hospitalization: {
                        ...prev.hospitalization,
                        reason: text.trim().replace(/\s+/g, " "),
                      },
                    }))
                  }
                  maxLength={40}
                />
                <Text style={[styles.titlemention]}>
                  {
                    healthHistoryQuestions[8].children[1].translations[language]
                      .question
                  }
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.dateInput}
                    placeholder={
                      healthHistoryQuestions[8].children[1].translations[
                        language
                      ].textInput
                    }
                    keyboardType="numeric"
                    value={tempModalValues?.hospitalization?.duration}
                    maxLength={2}
                    onChangeText={(text) =>
                      setTempModalValues((prev) => ({
                        ...prev,
                        hospitalization: {
                          ...prev.hospitalization,
                          duration: text.trim().replace(/\s+/g, " "),
                        },
                      }))
                    }
                  />

                  <View style={[styles.openModalButton]}>
                    <WheelPickerExpo
                      height={150}
                      haptics={true}
                      width={"100%"}
                      backgroundColor={"#fff"}
                      items={TimeOptions[languageMap[language]].map(
                        (item, idx) => ({
                          label: item,
                          value: TimeOptions.value[idx], // Correctly map value
                        })
                      )}
                      selectedIndex={
                        tempModalValues?.hospitalization?.durationType
                          ? TimeOptions.value.indexOf(
                              tempModalValues?.hospitalization?.durationType
                            ) !== -1
                            ? TimeOptions.value.indexOf(
                                tempModalValues?.hospitalization?.durationType
                              )
                            : 0
                          : 0
                      } // Default to first index
                      onChange={({ index }) => {
                        setTempModalValues((prev) => ({
                          ...prev,
                          hospitalization: {
                            ...prev.hospitalization,
                            durationType: TimeOptions.value[index],
                          },
                        }));
                      }}
                    />
                  </View>
                </View>

                <Button
                  value={
                    language === "en"
                      ? "Confirm"
                      : language === "bn"
                      ? "নিশ্চিত করুন" // Bengali
                      : language === "hi"
                      ? "पुष्टि करें" // Hindi
                      : language === "as"
                      ? "নিশ্চিত কৰক" // Assamese
                      : "Confirm"
                  }
                  onPress={handleCloseModalhos}
                />
              </View>
            )}
          </Modal>

          {/* Preview Modal */}
          <Modal
            isVisible={previewModal}
            transparent={true}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={500}
            animationOutTiming={500}
            useNativeDriver={false}
            style={{ flex: 1 }}
            avoidKeyboard={true}
            backdropOpacity={0.5} // Adjust backdrop opacity
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: "auto",
                height: height * 0.9,
                borderRadius: 10,
              }}
            >
              <ScrollView contentContainerStyle={styles.modalContent2}>
                <Text
                  style={{
                    fontSize: FontSize.peviewHeader,
                    fontFamily: FontFamily.Inter_Bold,
                    textAlign: "center",
                    borderBottomWidth: 0.3,
                    width: "100%",
                  }}
                >
                  {language === "en"
                    ? "Preview"
                    : language === "bn"
                    ? "পূর্বরূপ"
                    : language === "as"
                    ? "পূৰ্বদৰ্শন"
                    : language === "hi"
                    ? "पूर्वावलोकन"
                    : "Preview"}
                </Text>

                {/* Chronic */}
                {Chronic === "No" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Chronic Condition"
                        : language === "hi"
                        ? "दीर्घकालिक स्थिति"
                        : language === "as"
                        ? "দীর্ঘকালীন অৱস্থা"
                        : "দীর্ঘকালীন অৱস্থা"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {Chronic === "No"
                        ? language === "en"
                          ? "No"
                          : language === "bn"
                          ? "না"
                          : language === "as"
                          ? "নহয়"
                          : language === "hi"
                          ? "नहीं"
                          : "No"
                        : ""}
                    </Text>
                  </View>
                )}
                {Chronic === "Yes" && (
                  <View
                    style={[
                      styles.modalSections,
                      {
                        flexDirection: "column",
                        borderBottomWidth: 0,
                        padding: 0,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.modalTextLeft,
                        { fontWeight: "500", textAlign: "left" },
                      ]}
                    >
                      {language === "en"
                        ? "Chronic Condition"
                        : language === "hi"
                        ? "दीर्घकालिक स्थिति"
                        : language === "as"
                        ? "দীর্ঘকালীন অৱস্থা"
                        : "দীর্ঘকালীন অৱস্থা"}
                    </Text>
                    {ChronicConditionArray?.includes("Vision") && (
                      <View style={[styles.modalSections, { width: "100%" }]}>
                        <Text style={[styles.modalTextLeft]}>
                          {language === "en"
                            ? engVision
                            : language === "bn"
                            ? bengVision
                            : language === "as"
                            ? assVision
                            : language === "hi"
                            ? hindiVision
                            : engVision}
                        </Text>
                        <Text style={styles.modalTextRightChronic}>
                          {Vision_Condition?.includes("Others")
                            ? [
                                ...Vision_Condition.filter(
                                  (item) => item !== "Others"
                                ),
                                Vision || "Others",
                              ].join(", ")
                            : getVisionLabel(language, Vision_Condition)}
                        </Text>
                      </View>
                    )}
                    {ChronicConditionArray?.includes("Cancer") && (
                      <View style={[styles.modalSections, { width: "100%" }]}>
                        <Text style={styles.modalTextLeft}>
                          {language === "en"
                            ? engCancer
                            : language === "bn"
                            ? bengCancer
                            : language === "as"
                            ? assCancer
                            : language === "hi"
                            ? hindiCancer
                            : engCancer}
                        </Text>
                        <Text style={styles.modalTextRightChronic}>
                          {Cancer_Type?.includes("Others")
                            ? [
                                ...Cancer_Type.filter(
                                  (item) => item !== "Others"
                                ),
                                Cancer || "Others",
                              ].join(", ")
                            : getCancerLabel(language, Cancer_Type)}
                        </Text>
                      </View>
                    )}
                    {ChronicConditionArray.includes(
                      "Musculoskeletal Disorder"
                    ) && (
                      <View style={[styles.modalSections, { width: "100%" }]}>
                        <Text style={styles.modalTextLeft}>
                          {language === "en"
                            ? engMusculoskeletal
                            : language === "bn"
                            ? bengMusculoskeletal
                            : language === "as"
                            ? assMusculoskeletal
                            : language === "hi"
                            ? hindiMusculoskeletal
                            : engMusculoskeletal}
                        </Text>
                        <Text style={styles.modalTextRightChronic}>
                          {Musculoskeletal_Type?.includes("Others")
                            ? [
                                ...Musculoskeletal_Type.filter(
                                  (item) => item !== "Others"
                                ),
                                Musculoskeletal || "Others",
                              ].join(", ")
                            : getMusculoskeletalLabel(
                                language,
                                Musculoskeletal_Type
                              )}
                        </Text>
                      </View>
                    )}
                    {ChronicConditionArray.includes("Urological Condition") && (
                      <View style={[styles.modalSections, { width: "100%" }]}>
                        <Text style={styles.modalTextLeft}>
                          {language === "en"
                            ? engUrological
                            : language === "bn"
                            ? bengUrological
                            : language === "as"
                            ? assUrological
                            : language === "hi"
                            ? hindiUrological
                            : engUrological}
                        </Text>
                        <Text style={styles.modalTextRightChronic}>
                          {Urological_Type?.includes("Others")
                            ? [
                                ...Urological_Type.filter(
                                  (item) => item !== "Others"
                                ),
                                Urological || "Others",
                              ].join(", ")
                            : getUrologicalLabel(language, Urological_Type)}
                        </Text>
                      </View>
                    )}
                    {ChronicConditionArray.includes(
                      "Gastrointestinal Disorder"
                    ) && (
                      <View style={[styles.modalSections, { width: "100%" }]}>
                        <Text style={styles.modalTextLeft}>
                          {language === "en"
                            ? engGastrointestinal
                            : language === "bn"
                            ? bengGastrointestinal
                            : language === "as"
                            ? assGastrointestinal
                            : language === "hi"
                            ? hindiGastrointestinal
                            : engGastrointestinal}
                        </Text>
                        <Text style={styles.modalTextRightChronic}>
                          {Gas_Type?.includes("Others")
                            ? [
                                ...Gas_Type.filter((item) => item !== "Others"),
                                Gas || "Others",
                              ].join(", ")
                            : getGastrointestinalLabel(language, Gas_Type)}
                        </Text>
                      </View>
                    )}
                    {ChronicConditionArray.includes(
                      "Neurological Disorder"
                    ) && (
                      <View style={[styles.modalSections, { width: "100%" }]}>
                        <Text style={styles.modalTextLeft}>
                          {language === "en"
                            ? engNeurological
                            : language === "bn"
                            ? bengNeurological
                            : language === "as"
                            ? assNeurological
                            : language === "hi"
                            ? hindiNeurological
                            : engNeurological}
                        </Text>
                        <Text style={styles.modalTextRightChronic}>
                          {Neuro_Type?.includes("Others")
                            ? [
                                ...Neuro_Type.filter(
                                  (item) => item !== "Others"
                                ),
                                Neurological || "Others",
                              ].join(", ")
                            : getNeurologicalLabel(language, Neuro_Type)}
                        </Text>
                      </View>
                    )}
                    {ChronicConditionArray.includes(
                      "Respiratory Condition"
                    ) && (
                      <View style={[styles.modalSections, { width: "100%" }]}>
                        <Text style={styles.modalTextLeft}>
                          {language === "en"
                            ? engRespiratory
                            : language === "bn"
                            ? bengRespiratory
                            : language === "as"
                            ? assRespiratory
                            : language === "hi"
                            ? hindiRespiratory
                            : engRespiratory}
                        </Text>
                        <Text style={styles.modalTextRightChronic}>
                          {Res_Type?.includes("Others")
                            ? [
                                ...Res_Type.filter((item) => item !== "Others"),
                                Respiratory || "Others",
                              ].join(", ")
                            : getResLabel(language, Res_Type)}
                        </Text>
                      </View>
                    )}
                    {ChronicConditionArray.includes("Endocrine Disorder") && (
                      <View style={[styles.modalSections, { width: "100%" }]}>
                        <Text style={styles.modalTextLeft}>
                          {language === "en"
                            ? engDiabetesEndocrine
                            : language === "bn"
                            ? bengDiabetesEndocrine
                            : language === "as"
                            ? assDiabetesEndocrine
                            : language === "hi"
                            ? hindiDiabetesEndocrine
                            : engDiabetesEndocrine}
                        </Text>
                        <Text style={styles.modalTextRightChronic}>
                          {Diabat_Type?.includes("Others")
                            ? [
                                ...Diabat_Type.filter(
                                  (item) => item !== "Others"
                                ),
                                Diabatis || "Others",
                              ].join(", ")
                            : getDiabatLabel(language, Diabat_Type)}
                        </Text>
                      </View>
                    )}
                    {ChronicConditionArray.includes(
                      "Cardiovascular Disease"
                    ) && (
                      <View style={[styles.modalSections, { width: "100%" }]}>
                        <Text style={styles.modalTextLeft}>
                          {language === "en"
                            ? engCardiovascular
                            : language === "bn"
                            ? bengCardiovascular
                            : language === "as"
                            ? assCardiovascular
                            : language === "hi"
                            ? hindiCardiovascular
                            : engCardiovascular}
                        </Text>
                        <Text style={styles.modalTextRightChronic}>
                          {Card_Type.includes("Others")
                            ? [
                                ...Card_Type.filter(
                                  (item) => item !== "Others"
                                ),
                                Cardio || "Others",
                              ].join(", ")
                            : getCardLabel(language, Card_Type)}
                        </Text>
                      </View>
                    )}
                  </View>
                )}
                {/* Infectious Disease */}
                {infect === "No" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Infectious Diseases"
                        : language === "hi"
                        ? "संचारी रोग"
                        : language === "as"
                        ? "সংক্রামক ৰোগ"
                        : "সংক্রামক রোগ"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {infect === "No"
                        ? language === "en"
                          ? "No"
                          : language === "bn"
                          ? "না"
                          : language === "as"
                          ? "নহয়"
                          : language === "hi"
                          ? "नहीं"
                          : "No"
                        : ""}
                    </Text>
                  </View>
                )}
                {infect === "Yes" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Infectious Diseases"
                        : language === "hi"
                        ? "संचारी रोग"
                        : language === "as"
                        ? "সংক্রামক ৰোগ"
                        : "সংক্রামক রোগ"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {`${
                        infectname.includes("Other")
                          ? [
                              ...infectname.filter((item) => item !== "Other"),
                              infectnameother || "Other",
                            ].join(", ")
                          : getDiseaseLabel(language, infectname)
                      }`}
                    </Text>
                  </View>
                )}
                {/* Surgery */}
                {surgery === "No" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Surgery History"
                        : language === "hi"
                        ? "सर्जरी इतिहास"
                        : language === "as"
                        ? "শল্য চিকিৎসাৰ ইতিহাস"
                        : "অস্ত্রোপচারের ইতিহাস"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {surgery === "No"
                        ? language === "en"
                          ? "No"
                          : language === "bn"
                          ? "না"
                          : language === "as"
                          ? "নহয়"
                          : language === "hi"
                          ? "नहीं"
                          : "No"
                        : ""}
                    </Text>
                  </View>
                )}
                {surgery === "Yes" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Surgery History"
                        : language === "hi"
                        ? "सर्जरी इतिहास"
                        : language === "as"
                        ? "শল্য চিকিৎসাৰ ইতিহাস"
                        : "অস্ত্রোপচারের ইতিহাস"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {`${
                        surgery
                          ? surgery
                          : notMentionedText[language] || "Not Mentioned"
                      }`}
                    </Text>
                  </View>
                )}
                {/* Allergy */}
                {allergies === "No" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Allergies"
                        : language === "hi"
                        ? "एलर्जी"
                        : language === "as"
                        ? "এলাৰ্জি"
                        : "অ্যালার্জি"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {allergies === "No"
                        ? language === "en"
                          ? "No"
                          : language === "bn"
                          ? "না"
                          : language === "as"
                          ? "নহয়"
                          : language === "hi"
                          ? "नहीं"
                          : "No"
                        : ""}
                    </Text>
                  </View>
                )}
                {allergies === "Yes" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Allergies"
                        : language === "hi"
                        ? "एलर्जी"
                        : language === "as"
                        ? "এলাৰ্জি"
                        : "অ্যালার্জি"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {`${getAllergyLabel(allergiesname)}`}
                    </Text>
                  </View>
                )}
                {/* Vaccination */}
                {Vaccinatin === "No" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Vaccination History"
                        : language === "hi"
                        ? "टीकाकरण का इतिहास"
                        : language === "as"
                        ? "টীকাকৰণৰ ইতিহাস"
                        : "টিকাদানের ইতিহাস"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {Vaccinatin === "No"
                        ? language === "en"
                          ? "No"
                          : language === "bn"
                          ? "না"
                          : language === "as"
                          ? "নহয়"
                          : language === "hi"
                          ? "नहीं"
                          : "No"
                        : ""}
                    </Text>
                  </View>
                )}
                {Vaccinatin === "Yes" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Vaccination History"
                        : language === "hi"
                        ? "टीकाकरण का इतिहास"
                        : language === "as"
                        ? "টীকাকৰণৰ ইতিহাস"
                        : "টিকাদানের ইতিহাস"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {`${getVaccineOptionsAsString2(
                        language,
                        selectedVaccine
                      )}`}
                    </Text>
                  </View>
                )}
                {/* Alternative Medicine */}
                {AlterMed === "No" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Alternative Medicine Use"
                        : language === "hi"
                        ? "वैकल्पिक चिकित्सा का उपयोग"
                        : language === "as"
                        ? "বিকল্প চিকিৎসাৰ ব্যৱহাৰ"
                        : "বিকল্প চিকিৎসাৰ ব্যৱহাৰ"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {AlterMed === "No"
                        ? language === "en"
                          ? "No"
                          : language === "bn"
                          ? "না"
                          : language === "as"
                          ? "নহয়"
                          : language === "hi"
                          ? "नहीं"
                          : "No"
                        : ""}
                    </Text>
                  </View>
                )}
                {AlterMed === "Yes" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Alternative Medicine Use"
                        : language === "hi"
                        ? "वैकल्पिक चिकित्सा का उपयोग"
                        : language === "as"
                        ? "বিকল্প চিকিৎসাৰ ব্যৱহাৰ"
                        : "বিকল্প চিকিৎসাৰ ব্যৱহাৰ"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {`${
                        [
                          ...AlterMedname.filter(
                            (name) => name !== "other_treatments"
                          ) // Exclude "other_treatments" from the mapped labels
                            .map((name) =>
                              getAltermedicineLabel(language, name)
                            ), // Convert selected values to labels
                          ...(AlterMedname.includes("other_treatments") &&
                          AlterMednamementions
                            ? [AlterMednamementions]
                            : []), // Add AlterMednamementions if conditions are met
                        ].join(", ") // Join all elements with ", "
                      }`}
                    </Text>
                  </View>
                )}
                {/* Male Question */}
                {gender === "Male" && (
                  <>
                    {REpHealth === "No" && (
                      <View style={styles.modalSections}>
                        <Text style={styles.modalTextLeft}>
                          {language === "en"
                            ? "Reproductive Health"
                            : language === "hi"
                            ? "प्रजनन स्वास्थ्य"
                            : language === "as"
                            ? "প্ৰজনন স্বাস্থ্য"
                            : "প্ৰজনন স্বাস্থ্য"}
                        </Text>
                        <Text style={styles.modalTextRight}>
                          {REpHealth === "No"
                            ? language === "en"
                              ? "No"
                              : language === "bn"
                              ? "না"
                              : language === "as"
                              ? "নহয়"
                              : language === "hi"
                              ? "नहीं"
                              : "No"
                            : ""}
                        </Text>
                      </View>
                    )}
                    {REpHealth === "Yes" && (
                      <View style={styles.modalSections}>
                        <Text style={styles.modalTextLeft}>
                          {language === "en"
                            ? "Reproductive Health"
                            : language === "hi"
                            ? "प्रजनन स्वास्थ्य"
                            : language === "as"
                            ? "প্ৰজনন স্বাস্থ্য"
                            : "প্ৰজনন স্বাস্থ্য"}
                        </Text>
                        <Text style={styles.modalTextRight}>
                          {`${
                            REpHealthname.includes("Others")
                              ? [
                                  ...REpHealthname.filter(
                                    (item) => item !== "Others"
                                  ),
                                  REpHealthnamementins || "Others",
                                ].join(", ")
                              : getRephelthLabel(language, REpHealthname)
                          }`}
                        </Text>
                      </View>
                    )}
                  </>
                )}
                {/* Female Question */}
                {gender === "Female" && (
                  <>
                    {Menstruation === "No" && (
                      <View style={styles.modalSections}>
                        <Text style={styles.modalTextLeft}>
                          {language === "en"
                            ? "Menstruation"
                            : language === "hi"
                            ? "माहवारी"
                            : language === "as"
                            ? "মাহাৱাৰী"
                            : "মাহাৱাৰী"}
                        </Text>
                        <Text style={styles.modalTextRight}>
                          {Menstruation === "No"
                            ? language === "en"
                              ? "No"
                              : language === "bn"
                              ? "না"
                              : language === "as"
                              ? "নহয়"
                              : language === "hi"
                              ? "नहीं"
                              : "No"
                            : ""}
                        </Text>
                      </View>
                    )}
                    {Menstruation === "Yes" && (
                      <View style={styles.modalSections}>
                        <Text style={styles.modalTextLeft}>
                          {language === "en"
                            ? "Menstruation"
                            : language === "hi"
                            ? "माहवारी"
                            : language === "as"
                            ? "মাহাৱাৰী"
                            : "মাহাৱাৰী"}
                        </Text>
                        <Text style={styles.modalTextRight}>
                          {`${getMenstruationLabel(Menstruationname)}`}
                        </Text>
                      </View>
                    )}
                  </>
                )}
                {/* Hpspitalization */}
                {Hospitalization === "No" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Hospitalization (Major)"
                        : language === "hi"
                        ? "अस्पताल में भर्ती (मुख्य)"
                        : language === "as"
                        ? "অস্পতালত ভৰ্তি (মুখ্য)"
                        : "অস্পতালত ভৰ্তি (মুখ্য)"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {Hospitalization === "No"
                        ? language === "en"
                          ? "No"
                          : language === "bn"
                          ? "না"
                          : language === "as"
                          ? "নহয়"
                          : language === "hi"
                          ? "नहीं"
                          : "No"
                        : ""}
                    </Text>
                  </View>
                )}
                {Hospitalization === "Yes" && (
                  <View style={styles.modalSections}>
                    <Text style={styles.modalTextLeft}>
                      {language === "en"
                        ? "Hospitalization (Major)"
                        : language === "hi"
                        ? "अस्पताल में भर्ती (मुख्य)"
                        : language === "as"
                        ? "অস্পতালত ভৰ্তি (মুখ্য)"
                        : "অস্পতালত ভৰ্তি (মুখ্য)"}
                    </Text>
                    <Text style={styles.modalTextRight}>
                      {`${Hospitalizationname} (${HospitalizationnameDuration} ${getHospLabel(
                        language,
                        HospitalizationnameDurationname
                      )})`}
                    </Text>
                  </View>
                )}

                {loadingSubmit ? (
                  <View style={styles.LoadingContainer}>
                    <ActivityIndicator size="large" color={Color.bcHeader} />
                  </View>
                ) : (
                  <View style={styles.previewButtonContainer}>
                    <Button
                      value={
                        language === "en"
                          ? "Back"
                          : language === "bn"
                          ? "ফিরে যান"
                          : language === "as"
                          ? "পাছলৈ যাওক"
                          : language === "hi"
                          ? "वापस जाएं"
                          : "Back"
                      }
                      size="75%"
                      onPress={toggleModal}
                      disabled={false}
                    />
                    <Button
                      value={
                        language === "en"
                          ? "Confirm"
                          : language === "bn"
                          ? "নিশ্চিত"
                          : language === "as"
                          ? "নিশ্চিত"
                          : language === "hi"
                          ? "पुष्टि करें"
                          : "Confirm"
                      }
                      size="75%"
                      onPress={handleSubmit}
                      disabled={false}
                    />
                  </View>
                )}
              </ScrollView>
            </View>
          </Modal>
        </>
      )}
    </View>
  );
};

export default Edit_Medical_History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bcBackground,
  },
  heading: {
    fontSize: 18,
    fontFamily: FontFamily.Inter_Bold,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  text: {
    fontSize: 16,
    fontFamily: FontFamily.Inter_Regular,
  },
  questionContainer: {
    marginVertical: 20,
    rowGap: 10,
  },
  sectionHeader: {
    fontFamily: FontFamily.Inter_Bold,
    fontSize: 22,
    marginTop: 15,
    padding: 8,
  },
  subSectionHeader: {
    fontFamily: FontFamily.Inter_Bold,
    fontSize: 22,
    textAlign: "center",
    marginTop: 12,
  },
  section: {
    borderWidth: 0.1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 18,
  },

  modalCloseButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    overflow: "hidden",
    margin: 0,
    position: "relative",
  },
  modalView: {
    backgroundColor: "#fff",
    padding: 20,
    minHeight: "20%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: FontFamily.Inter_Bold,
    marginBottom: 20,
    textAlign: "center",
  },
  submitButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: Color.bcHeader,
    borderRadius: 5,
    alignItems: "center",
    width: "80%",
    marginHorizontal: "auto",
    position: "absolute",
    bottom: 20,
  },
  submitButtonText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: FontFamily.Inter_Medium,
  },
  selectedAnswer: {
    textAlign: "left",
    fontFamily: FontFamily.Inter_Medium,
    color: "green",
    fontSize: 10, // Increased for better readability
    lineHeight: 18, // Helps with vertical alignment
  },
  errorSection: {
    borderWidth: 2,
    borderColor: "red",
  },
  backdrop: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalSections: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "97%",
    padding: 10,
    marginVertical: 4,
    borderBottomWidth: 0.8,
    borderColor: "#E0E0E0",
  },
  modalTextLeft: {
    fontSize: FontSize.previewLabel,
    flexShrink: 1,
    fontFamily: FontFamily.Inter_Medium,
    textAlign: "left",
    color: "#424242",
  },
  modalTextRight: {
    width: "62%",
    fontSize: FontSize.previewValue,
    fontFamily: FontFamily.Inter_Regular,
    textAlign: "right",
    color: "#757575",
  },
  modalTextRightChronic: {
    width: "62%",
    fontSize: FontSize.previewValue,
    fontFamily: FontFamily.Inter_Regular,
    textAlign: "right",
    color: "#757575",
  },
  modalButtons: {
    width: "45%",
    alignItems: "center",
    padding: 5,
    backgroundColor: Color.bcHeader,
    borderRadius: 3,
  },
  modalButtonText: {
    fontSize: 16,
    fontFamily: FontFamily.Inter_Medium,
  },
  modalContent2: {
    width: "100%",
    padding: "3%",
    minHeight: "30%",
    borderRadius: 10,
    backgroundColor: Color.bcBackground,
    alignItems: "center",
  },
  textinput: {
    borderWidth: 2,
    borderRadius: 3,
    width: "75%",
    marginHorizontal: "auto",
    borderColor: Color.bcNotification,
    marginBottom: "2%",
  },
  titlemention: {
    fontSize: 15,
    fontFamily: FontFamily.Inter_Regular,
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 2,
  },
  subsection: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 10,
    marginBottom: 0,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    minHeight: 18, // Changed from fixed height
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  mentiontitle: {
    textAlign: "center",
    fontFamily: FontFamily.Inter_Bold,
    fontSize: FontSize.size_all,
    marginBottom: "2%",
    marginTop: "4%",
  },
  input: {
    borderWidth: 2,
    borderRadius: 3,
    width: "75%",
    marginHorizontal: "auto",
    borderColor: Color.bcHeader,
    marginBottom: "2%",
  },
  itemset: {
    padding: 8,
    borderWidth: 0.5,
    borderColor: Color.bcHeader,
    backgroundColor: Color.bcBackground,
    borderRadius: 5,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginVertical: 3,
    // columnGap:20,
    backgroundColor: Color.bcHeader,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "80%",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  handle: {
    width: 40,
    height: 5,
    borderRadius: 4,
    backgroundColor: "#00000040",
    alignSelf: "center",
    marginBottom: 10,
  },
  submodal: {
    margin: 0,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    overflow: "hidden",
  },
  subModalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    maxHeight: "80%",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  item: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  selectedItem: {
    backgroundColor: Color.bcHeader, // Highlight selected item
  },
  inputContainer: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    overflow: "hidden",
  },
  dateInput: {
    width: "60%",
    marginHorizontal: 0,
    height: 40,
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: "#e0e0e0",
  },
  openModalButton: {
    width: "38%",
    alignItems: "center",
  },
  main: {
    padding: 5,
  },
  addDetailsButton: {
    padding: 8,
    borderWidth: 0.8,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 5,
    flexDirection: "row",
  },
  addDetailsButtonText: {
    fontSize: 15,
    fontFamily: FontFamily.Inter_Regular,
  },
  previewButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "auto",
  },
  LoadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.bcBackground,
    paddingVertical: 20,
  },
});
