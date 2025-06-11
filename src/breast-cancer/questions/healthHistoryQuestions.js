export const healthHistoryQuestions = [
  {
    // Any chronic conditions?
    id: 1,
    questionNumber: {
      en: "1",
      bn: "১",
      as: "১",
      hi: "१",
    },
    translations: {
      en: {
        question: "Have any chronic health conditions?",
        options: [
          { id: 1, label: "Yes", value: "Yes" },
          { id: 2, label: "No", value: "No" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনার কি কোনো দীর্ঘমেয়াদী স্বাস্থ্য সমস্যা আছে?",
        options: [
          { id: 1, label: "হ্যাঁ", value: "Yes" },
          { id: 2, label: "না", value: "No" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপোনাৰ কোনো দীঘলীয়া স্বাস্থ্য সমস্যা আছে নেকি?",
        options: [
          { id: 1, label: "হয়", value: "Yes" },
          { id: 2, label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपको कोई दीर्घकालिक स्वास्थ्य समस्या है?",
        options: [
          { id: 1, label: "हां", value: "Yes" },
          { id: 2, label: "नहीं", value: "No" },
        ],
        tooltip: "",
      },
    },
    children: [
      {
        // Choose chronic conditions
        id: 1,
        questionNumber: {
          en: "1.1",
          bn: "১.১",
          as: "১.১",
          hi: "१.१",
        },
        translations: {
          en: {
            question: "Choose the chronic health conditions",
            options: [
              { id: "1", label: "Vision", value: "Vision" },
              { id: "2", label: "Cancer", value: "Cancer" },
              {
                id: "3",
                label: "Musculoskeletal Disorder",
                value: "Musculoskeletal Disorder",
              },
              {
                id: "4",
                label: "Urological Condition",
                value: "Urological Condition",
              },
              {
                id: "5",
                label: "Gastrointestinal Disorder",
                value: "Gastrointestinal Disorder",
              },
              {
                id: "6",
                label: "Neurological Disorder",
                value: "Neurological Disorder",
              },
              {
                id: "7",
                label: "Respiratory Condition",
                value: "Respiratory Condition",
              },
              {
                id: "8",
                label: "Endocrine Disorder",
                value: "Endocrine Disorder",
              },
              {
                id: "9",
                label: "Cardiovascular Disease",
                value: "Cardiovascular Disease",
              },
            ],
            tooltip: "",
          },
          bn: {
            question: "আপনার কি কোনো দীর্ঘমেয়াদী স্বাস্থ্য সমস্যা আছে?",
            options: [
              { id: "1", label: "দৃষ্টিজনিত সমস্যা", value: "Vision" },
              { id: "2", label: "ক্যান্সার", value: "Cancer" },
              {
                id: "3",
                label: "মাসকুলোস্কেলেটাল রোগ",
                value: "Musculoskeletal Disorder",
              },
              {
                id: "4",
                label: "মূত্রসংক্রান্ত সমস্যা",
                value: "Urological Condition",
              },
              {
                id: "5",
                label: "পরিপাকতন্ত্রের রোগ",
                value: "Gastrointestinal Disorder",
              },
              {
                id: "6",
                label: "স্নায়বিক রোগ",
                value: "Neurological Disorder",
              },
              {
                id: "7",
                label: "শ্বাসপ্রশ্বাসজনিত সমস্যা",
                value: "Respiratory Condition",
              },
              {
                id: "8",
                label: "এন্ডোক্রাইনজনিত সমস্যা",
                value: "Endocrine Disorder",
              },
              {
                id: "9",
                label: "হৃদরোগ",
                value: "Cardiovascular Disease",
              },
            ],
            tooltip: "",
          },
          as: {
            question: "আপোনাৰ কোনো দীঘলীয়া স্বাস্থ্য সমস্যা আছে নে?",
            options: [
              { id: "1", label: "দৃষ্টিৰ সমস্যা", value: "Vision" },
              { id: "2", label: "কেন্সাৰ", value: "Cancer" },
              {
                id: "3",
                label: "মাস্কুলোস্কেলেটেল বিকাৰ",
                value: "Musculoskeletal Disorder",
              },
              {
                id: "4",
                label: "মূত্র সংক্রান্ত সমস্যা",
                value: "Urological Condition",
              },
              {
                id: "5",
                label: "জীণতন্ত্ৰীয় বিকাৰ",
                value: "Gastrointestinal Disorder",
              },
              {
                id: "6",
                label: "নিউৰ’লজিকেল বিকাৰ",
                value: "Neurological Disorder",
              },
              {
                id: "7",
                label: "শ্বাস প্ৰশ্বাসজনিত সমস্যা",
                value: "Respiratory Condition",
              },
              {
                id: "8",
                label: "এণ্ড'ক্ৰাইনজনিত সমস্যা",
                value: "Endocrine Disorder",
              },
              {
                id: "9",
                label: "হৃদরোগ",
                value: "Cardiovascular Disease",
              },
            ],
            tooltip: "",
          },
          hi: {
            question: "क्या आपको कोई दीर्घकालिक स्वास्थ्य समस्या है?",
            options: [
              { id: "1", label: "दृष्टि संबंधी समस्या", value: "Vision" },
              { id: "2", label: "कैंसर", value: "Cancer" },
              {
                id: "3",
                label: "मस्क्युलोस्केलेटल विकार",
                value: "Musculoskeletal Disorder",
              },
              {
                id: "4",
                label: "मूत्र संबंधी समस्या",
                value: "Urological Condition",
              },
              {
                id: "5",
                label: "पाचन तंत्र संबंधी विकार",
                value: "Gastrointestinal Disorder",
              },
              {
                id: "6",
                label: "तंत्रिका संबंधी विकार",
                value: "Neurological Disorder",
              },
              {
                id: "7",
                label: "श्वसन संबंधी समस्या",
                value: "Respiratory Condition",
              },
              {
                id: "8",
                label: "अंतःस्रावी विकार",
                value: "Endocrine Disorder",
              },
              {
                id: "9",
                label: "हृदय रोग",
                value: "Cardiovascular Disease",
              },
            ],
            tooltip: "",
          },
        },
        children: [
          {
            // Choose the vision conditions
            id: 1,
            questionNumber: {
              en: "1.1.1",
              bn: "১.১.১",
              as: "১.১.১",
              hi: "१.१.१",
            },
            translations: {
              en: {
                question: "Choose the vision conditions",
                options: [
                  { id: "1", label: "Glaucoma", value: "Glaucoma" },
                  { id: "2", label: "Cataracts", value: "Cataracts" },
                  {
                    id: "3",
                    label: "Diabetic Retinopathy",
                    value: "Diabetic Retinopathy",
                  },
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
                ],
                tooltip: "",
              },
              bn: {
                question: "আপনার কি কোনো দৃষ্টিজনিত সমস্যা আছে?",
                options: [
                  { id: "1", label: "গ্লকোমা", value: "Glaucoma" },
                  { id: "2", label: "ছানি", value: "Cataracts" },
                  {
                    id: "3",
                    label: "ডায়াবেটিক রেটিনোপ্যাথি",
                    value: "Diabetic Retinopathy",
                  },
                  {
                    id: "4",
                    label: "বয়সজনিত ম্যাকুলার ডিজেনারেশন (AMD)",
                    value: "Age-Related Macular Degeneration (AMD)",
                  },
                  {
                    id: "5",
                    label: "ধারাবাহিক শুষ্ক চোখের সমস্যা",
                    value: "Chronic Dry Eye Syndrome",
                  },
                  { id: "6", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              as: {
                question: "আপোনাৰ কোনো দৃষ্টিৰ সমস্যা আছে নে?",
                options: [
                  { id: "1", label: "গ্ল'ক’মা", value: "Glaucoma" },
                  { id: "2", label: "ছানি", value: "Cataracts" },
                  {
                    id: "3",
                    label: "ডায়েবেটিক ৰেটিন’পেথি",
                    value: "Diabetic Retinopathy",
                  },
                  {
                    id: "4",
                    label: "বয়সজনিত মেকুলাৰ ডিজেনাৰেচন (AMD)",
                    value: "Age-Related Macular Degeneration (AMD)",
                  },
                  {
                    id: "5",
                    label: "দীঘলীয়া শুকান চকুৰ সমস্যা",
                    value: "Chronic Dry Eye Syndrome",
                  },
                  { id: "6", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              hi: {
                question: "क्या आपको कोई दृष्टि संबंधी समस्या है?",
                options: [
                  { id: "1", label: "ग्लूकोमा", value: "Glaucoma" },
                  { id: "2", label: "मोतियाबिंद", value: "Cataracts" },
                  {
                    id: "3",
                    label: "डायबिटिक रेटिनोपैथी",
                    value: "Diabetic Retinopathy",
                  },
                  {
                    id: "4",
                    label: "उम्र से संबंधित मैक्युलर डिजनरेशन (AMD)",
                    value: "Age-Related Macular Degeneration (AMD)",
                  },
                  {
                    id: "5",
                    label: "पुरानी ड्राई आई सिंड्रोम",
                    value: "Chronic Dry Eye Syndrome",
                  },
                  { id: "6", label: "अन्य", value: "Others" },
                ],
                tooltip: "",
              },
            },
            children: [
              {
                // What is the vision condition?
                id: 1,
                questionNumber: {
                  en: "1.1.1.1",
                  bn: "১.১.১.১",
                  as: "১.১.১.১",
                  hi: "१.१.१.१",
                },
                translations: {
                  en: {
                    question: "What is the vision condition?",
                    textInput: "Enter vision condition",
                    tooltip: "Please enter details about your vision condition",
                  },
                  bn: {
                    question: "আপনার দৃষ্টিশক্তির অবস্থা কী?",
                    textInput: "দৃষ্টিশক্তির অবস্থা লিখুন",
                    tooltip:
                      "অনুগ্রহ করে আপনার দৃষ্টিশক্তির সমস্যার বিস্তারিত লিখুন",
                  },
                  as: {
                    question: "আপোনাৰ দৃষ্টিশক্তিৰ অৱস্থা কি?",
                    textInput: "দৃষ্টিশক্তিৰ অৱস্থা লিখক",
                    tooltip:
                      "অনুগ্ৰহ কৰি আপোনাৰ দৃষ্টিশক্তিৰ সমস্যাৰ বিষয়ে লিখক",
                  },
                  hi: {
                    question: "आपकी दृष्टि की स्थिति क्या है?",
                    textInput: "दृष्टि की स्थिति दर्ज करें",
                    tooltip:
                      "कृपया अपनी दृष्टि से जुड़ी समस्या का विवरण दर्ज करें",
                  },
                },
              },
            ],
          },
          {
            // Choose cancer type
            id: 2,
            questionNumber: {
              en: "1.1.2",
              bn: "১.১.২",
              as: "১.১.২",
              hi: "१.१.२",
            },
            translations: {
              en: {
                question: "Choose the types of cancer",
                options: [
                  { id: "1", label: "Breast Cancer", value: "Breast Cancer" },
                  { id: "2", label: "Lung Cancer", value: "Lung Cancer" },
                  {
                    id: "3",
                    label: "Prostate Cancer",
                    value: "Prostate Cancer",
                  },
                  {
                    id: "4",
                    label: "Colorectal Cancer",
                    value: "Colorectal Cancer",
                  },
                  {
                    id: "5",
                    label: "Leukemia/Lymphoma",
                    value: "Leukemia/Lymphoma",
                  },
                  { id: "6", label: "Skin Cancer", value: "Skin Cancer" },
                  { id: "7", label: "Others", value: "Others" },
                ],
                tooltip: "",
              },
              bn: {
                question: "আপনার ক্যান্সারের ধরন চয়ন করুন",
                options: [
                  { id: "1", label: "স্তন ক্যান্সার", value: "Breast Cancer" },
                  {
                    id: "2",
                    label: "ফুসফুসের ক্যান্সার",
                    value: "Lung Cancer",
                  },
                  {
                    id: "3",
                    label: "প্রোস্টেট ক্যান্সার",
                    value: "Prostate Cancer",
                  },
                  {
                    id: "4",
                    label: "কোলোরেক্টাল ক্যান্সার",
                    value: "Colorectal Cancer",
                  },
                  {
                    id: "5",
                    label: "লিউকেমিয়া/লিম্ফোমা",
                    value: "Leukemia/Lymphoma",
                  },
                  { id: "6", label: "ত্বকের ক্যান্সার", value: "Skin Cancer" },
                  { id: "7", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              as: {
                question: "আপোনাৰ কেঞ্চাৰৰ প্ৰকাৰ নিৰ্বাচন কৰক",
                options: [
                  { id: "1", label: "স্তন কেঞ্চাৰ", value: "Breast Cancer" },
                  { id: "2", label: "ফুসফুসৰ কেঞ্চাৰ", value: "Lung Cancer" },
                  {
                    id: "3",
                    label: "প্ৰোষ্টেট কেঞ্চাৰ",
                    value: "Prostate Cancer",
                  },
                  {
                    id: "4",
                    label: "ক'লোৰেক্টেল কেঞ্চাৰ",
                    value: "Colorectal Cancer",
                  },
                  {
                    id: "5",
                    label: "লিউকেমিয়া/লিম্ফোমা",
                    value: "Leukemia/Lymphoma",
                  },
                  { id: "6", label: "চামড়াৰ কেঞ্চাৰ", value: "Skin Cancer" },
                  { id: "7", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया कैंसर के प्रकार चुनें",
                options: [
                  { id: "1", label: "स्तन कैंसर", value: "Breast Cancer" },
                  { id: "2", label: "फेफड़ों का कैंसर", value: "Lung Cancer" },
                  {
                    id: "3",
                    label: "प्रोस्टेट कैंसर",
                    value: "Prostate Cancer",
                  },
                  {
                    id: "4",
                    label: "कोलोरेक्टल कैंसर",
                    value: "Colorectal Cancer",
                  },
                  {
                    id: "5",
                    label: "ल्यूकेमिया/लिम्फोमा",
                    value: "Leukemia/Lymphoma",
                  },
                  { id: "6", label: "त्वचा कैंसर", value: "Skin Cancer" },
                  { id: "7", label: "अन्य", value: "Others" },
                ],
                tooltip: "",
              },
            },
            children: [
              {
                // What is the cancer type?
                id: 1,
                questionNumber: {
                  en: "1.1.2.1",
                  bn: "১.১.২.১",
                  as: "১.১.২.১",
                  hi: "१.१.२.१",
                },
                translations: {
                  en: {
                    question: "What is the cancer type?",
                    textInput: "Enter cancer type",
                    tooltip: "Please enter the type of cancer",
                  },
                  bn: {
                    question: "ক্যান্সারের ধরন কী?",
                    textInput: "ক্যান্সারের ধরন লিখুন",
                    tooltip: "অনুগ্রহ করে ক্যান্সারের ধরন লিখুন",
                  },
                  as: {
                    question: "কেঞ্চাৰৰ প্ৰকাৰ কি?",
                    textInput: "কেঞ্চাৰৰ প্ৰকাৰ লিখক",
                    tooltip: "অনুগ্ৰহ কৰি কেঞ্চাৰৰ প্ৰকাৰ লিখক",
                  },
                  hi: {
                    question: "कैंसर का प्रकार क्या है?",
                    textInput: "कैंसर का प्रकार दर्ज करें",
                    tooltip: "कृपया कैंसर के प्रकार का विवरण दर्ज करें",
                  },
                },
              },
            ],
          },
          {
            // Choose musculoskeletal type
            id: 3,
            questionNumber: {
              en: "1.1.3",
              bn: "১.১.৩",
              as: "১.১.৩",
              hi: "१.१.३",
            },
            translations: {
              en: {
                question: "Choose your musculoskeletal condition type",
                options: [
                  { id: "1", label: "Osteoarthritis", value: "Osteoarthritis" },
                  { id: "2", label: "Osteoporosis", value: "Osteoporosis" },
                  {
                    id: "3",
                    label: "Chronic Back Pain",
                    value: "Chronic Back Pain",
                  },
                  { id: "4", label: "Fibromyalgia", value: "Fibromyalgia" },
                  { id: "5", label: "Gout", value: "Gout" },
                  { id: "6", label: "Others", value: "Others" },
                ],
                tooltip: "",
              },
              bn: {
                question: "আপনার মাংসপেশি ও হাড়ের সমস্যা নির্বাচন করুন",
                options: [
                  {
                    id: "1",
                    label: "অস্টিওআর্থ্রাইটিস",
                    value: "Osteoarthritis",
                  },
                  { id: "2", label: "অস্টিওপরোসিস", value: "Osteoporosis" },
                  {
                    id: "3",
                    label: "দীর্ঘস্থায়ী পিঠের ব্যথা",
                    value: "Chronic Back Pain",
                  },
                  {
                    id: "4",
                    label: "ফাইব্রোমায়ালজিয়া",
                    value: "Fibromyalgia",
                  },
                  { id: "5", label: "গাউট", value: "Gout" },
                  { id: "6", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              as: {
                question:
                  "আপোনাৰ মাংসপেশী আৰু হাড় সম্পৰ্কীয় সমস্যা নিৰ্বাচন কৰক",
                options: [
                  {
                    id: "1",
                    label: "অ’স্টিঅ’আৰ্থ্ৰাইটিছ",
                    value: "Osteoarthritis",
                  },
                  { id: "2", label: "অ’স্টিঅ’প’ৰ’ছিছ", value: "Osteoporosis" },
                  {
                    id: "3",
                    label: "দীৰ্ঘস্থায়ী পিঠিৰ ব্যথা",
                    value: "Chronic Back Pain",
                  },
                  {
                    id: "4",
                    label: "ফাইব্ৰ’মায়ালজিয়া",
                    value: "Fibromyalgia",
                  },
                  { id: "5", label: "গাউট", value: "Gout" },
                  { id: "6", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया अपनी हड्डी और मांसपेशियों की समस्या चुनें",
                options: [
                  {
                    id: "1",
                    label: "ऑस्टियोआर्थराइटिस",
                    value: "Osteoarthritis",
                  },
                  { id: "2", label: "ऑस्टियोपोरोसिस", value: "Osteoporosis" },
                  {
                    id: "3",
                    label: "पुराना पीठ दर्द",
                    value: "Chronic Back Pain",
                  },
                  { id: "4", label: "फाइब्रोमायल्जिया", value: "Fibromyalgia" },
                  { id: "5", label: "गाउट", value: "Gout" },
                  { id: "6", label: "अन्य", value: "Others" },
                ],
                tooltip: "",
              },
            },
            children: [
              {
                // What is the musculoskeletal condition
                id: 1,
                questionNumber: {
                  en: "1.1.3.1",
                  bn: "১.১.৩.১",
                  as: "১.১.৩.১",
                  hi: "1.1.3.1",
                },
                translations: {
                  en: {
                    question: "What is the musculoskeletal condition?",
                    textInput: "Enter the musculoskeletal condition",
                    tooltip: "",
                  },
                  bn: {
                    question: "মাংসপেশি ও হাড়ের সমস্যা কী?",
                    textInput: "মাংসপেশি ও হাড়ের সমস্যার নাম লিখুন",
                    tooltip: "",
                  },
                  as: {
                    question: "মাংসপেশী আৰু হাড় সম্পৰ্কীয় সমস্যা কি?",
                    textInput: "মাংসপেশী আৰু হাড় সম্পৰ্কীয় সমস্যাৰ নাম লিখক",
                    tooltip: "",
                  },
                  hi: {
                    question: "आपकी हड्डी और मांसपेशियों की समस्या क्या है?",
                    textInput:
                      "हड्डी और मांसपेशियों की समस्या का नाम दर्ज करें",
                    tooltip: "",
                  },
                },
              },
            ],
          },
          {
            // Choose urological conditions
            id: 4,
            questionNumber: {
              en: "1.1.4",
              bn: "১.১.৪",
              as: "১.১.৪",
              hi: "१.१.४",
            },
            translations: {
              en: {
                question: "Choose your urological condition type",
                options: [
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
                    label:
                      "Prostate Disorders (Benign Prostatic Hyperplasia - BPH)",
                    value:
                      "Prostate Disorders (Benign Prostatic Hyperplasia - BPH)",
                  },
                  { id: "5", label: "Others", value: "Others" },
                ],
                tooltip: "",
              },
              bn: {
                question: "আপনার মূত্রতন্ত্রের সমস্যা নির্বাচন করুন",
                options: [
                  {
                    id: "1",
                    label: "ধীরগতির কিডনি রোগ (CKD)",
                    value: "Chronic Kidney Disease (CKD)",
                  },
                  {
                    id: "2",
                    label: "পুনরাবৃত্তি প্রস্রাবনালী সংক্রমণ (UTIs)",
                    value: "Recurrent Urinary Tract Infections (UTIs)",
                  },
                  { id: "3", label: "কিডনির পাথর", value: "Kidney Stones" },
                  {
                    id: "4",
                    label:
                      "প্রস্টেট সমস্যা (বিনাইন প্রস্টেটিক হাইপারপ্লাসিয়া - BPH)",
                    value:
                      "Prostate Disorders (Benign Prostatic Hyperplasia - BPH)",
                  },
                  { id: "5", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              as: {
                question: "আপোনাৰ মূত্রতন্ত্ৰৰ সমস্যা নিৰ্বাচন কৰক",
                options: [
                  {
                    id: "1",
                    label: "দীৰ্ঘস্থায়ী কিডনী ৰোগ (CKD)",
                    value: "Chronic Kidney Disease (CKD)",
                  },
                  {
                    id: "2",
                    label: "পুনৰাবৃত্তি মূত্রনালী সংক্রমণ (UTIs)",
                    value: "Recurrent Urinary Tract Infections (UTIs)",
                  },
                  { id: "3", label: "কিডনী পাথৰ", value: "Kidney Stones" },
                  {
                    id: "4",
                    label:
                      "প্ৰ’ষ্টেট ডিজঅ’ৰ্ডাৰ (বিনাইন প্ৰ’ষ্টেটিক হাইপাৰপ্লেচিয়া - BPH)",
                    value:
                      "Prostate Disorders (Benign Prostatic Hyperplasia - BPH)",
                  },
                  { id: "5", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया अपनी मूत्र संबंधी समस्या चुनें",
                options: [
                  {
                    id: "1",
                    label: "क्रोनिक किडनी रोग (CKD)",
                    value: "Chronic Kidney Disease (CKD)",
                  },
                  {
                    id: "2",
                    label: "बार-बार होने वाला मूत्र मार्ग संक्रमण (UTIs)",
                    value: "Recurrent Urinary Tract Infections (UTIs)",
                  },
                  { id: "3", label: "किडनी स्टोन", value: "Kidney Stones" },
                  {
                    id: "4",
                    label:
                      "प्रोस्टेट विकार (सौम्य प्रोस्टेटिक हाइपरप्लासिया - BPH)",
                    value:
                      "Prostate Disorders (Benign Prostatic Hyperplasia - BPH)",
                  },
                  { id: "5", label: "अन्य", value: "Others" },
                ],
                tooltip: "",
              },
            },
            children: [
              {
                // What is the urological condition
                id: 1,
                questionNumber: {
                  en: "1.1.4.1",
                  bn: "১.১.৪.১",
                  as: "১.১.৪.১",
                  hi: "1.1.4.1",
                },
                translations: {
                  en: {
                    question: "What is the urological condition?",
                    textInput: "Enter the urological condition",
                    tooltip: "",
                  },
                  bn: {
                    question: "মূত্রনালী সংক্রান্ত সমস্যা কী?",
                    textInput: "মূত্রনালী সংক্রান্ত সমস্যার নাম লিখুন",
                    tooltip: "",
                  },
                  as: {
                    question: "মূত্রনালী সম্পৰ্কীয় সমস্যা কি?",
                    textInput: "মূত্রনালী সম্পৰ্কীয় সমস্যাৰ নাম লিখক",
                    tooltip: "",
                  },
                  hi: {
                    question: "मूत्र संबंधी समस्या क्या है?",
                    textInput: "मूत्र संबंधी समस्या का नाम दर्ज करें",
                    tooltip: "",
                  },
                },
              },
            ],
          },
          {
            // Choose gastrointestinal disorders
            id: 5,
            questionNumber: {
              en: "1.1.5",
              bn: "১.১.৫",
              as: "১.১.৫",
              hi: "१.१.५",
            },
            translations: {
              en: {
                question: "Choose Gastrointestinal disorders",
                options: [
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
                    label:
                      "Fatty Liver Disease (Non-Alcoholic Steatohepatitis - NASH)",
                    value:
                      "Fatty Liver Disease (Non-Alcoholic Steatohepatitis - NASH)",
                  },
                  { id: "5", label: "Others", value: "Others" },
                ],
                tooltip: "",
              },
              bn: {
                question: "গ্যাস্ট্রোইনটেস্টাইনাল সমস্যা নির্বাচন করুন",
                options: [
                  {
                    id: "1",
                    label: "গ্যাস্ট্রোইসোফেজিয়াল রিফ্লাক্স ডিজিজ (GERD)",
                    value: "Gastroesophageal Reflux Disease (GERD)",
                  },
                  {
                    id: "2",
                    label: "ইরিটেবল বাওয়েল সিন্ড্রোম (IBS)",
                    value: "Irritable Bowel Syndrome (IBS)",
                  },
                  {
                    id: "3",
                    label: "দীর্ঘস্থায়ী হেপাটাইটিস (হেপাটাইটিস বি বা সি)",
                    value: "Chronic Hepatitis (Hepatitis B or C)",
                  },
                  {
                    id: "4",
                    label:
                      "ফ্যাটি লিভার ডিজিজ (নন-অ্যালকোহলিক স্টিয়াটোহেপাটাইটিস - NASH)",
                    value:
                      "Fatty Liver Disease (Non-Alcoholic Steatohepatitis - NASH)",
                  },
                  { id: "5", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              as: {
                question: "গ্যাস্ট্ৰ'ইন্টেষ্টাইনেল সমস্যা নিৰ্বাচন কৰক",
                options: [
                  {
                    id: "1",
                    label: "গ্যাস্ট্ৰ'ইছ'ফেজিয়েল ৰিফ্লাক্স ৰোগ (GERD)",
                    value: "Gastroesophageal Reflux Disease (GERD)",
                  },
                  {
                    id: "2",
                    label: "ইৰিটেবল বাওল সিন্ড্ৰ'ম (IBS)",
                    value: "Irritable Bowel Syndrome (IBS)",
                  },
                  {
                    id: "3",
                    label: "দীৰ্ঘস্থায়ী হেপাটাইটিস (হেপাটাইটিস বি বা চি)",
                    value: "Chronic Hepatitis (Hepatitis B or C)",
                  },
                  {
                    id: "4",
                    label:
                      "ফেটী লিভাৰ ডিজিজ (নন-এলকহ’লিক ষ্টিয়াটোহেপাটাইটিছ - NASH)",
                    value:
                      "Fatty Liver Disease (Non-Alcoholic Steatohepatitis - NASH)",
                  },
                  { id: "5", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              hi: {
                question: "गैस्ट्रोइंटेस्टाइनल विकार चुनें",
                options: [
                  {
                    id: "1",
                    label: "गैस्ट्रोएसोफेगल रिफ्लक्स रोग (GERD)",
                    value: "Gastroesophageal Reflux Disease (GERD)",
                  },
                  {
                    id: "2",
                    label: "इर्रिटेबल बॉवेल सिंड्रोम (IBS)",
                    value: "Irritable Bowel Syndrome (IBS)",
                  },
                  {
                    id: "3",
                    label: "क्रोनिक हेपेटाइटिस (हेपेटाइटिस बी या सी)",
                    value: "Chronic Hepatitis (Hepatitis B or C)",
                  },
                  {
                    id: "4",
                    label:
                      "फैटी लिवर रोग (नॉन-अल्कोहलिक स्टियाटोहेपेटाइटिस - NASH)",
                    value:
                      "Fatty Liver Disease (Non-Alcoholic Steatohepatitis - NASH)",
                  },
                  { id: "5", label: "अन्य", value: "Others" },
                ],
                tooltip: "",
              },
            },
            children: [
              {
                // Choose urological conditions
                id: 1,
                questionNumber: {
                  en: "1.1.5.1",
                  bn: "১.১.৫.১",
                  as: "১.১.৫.১",
                  hi: "1.1.5.1",
                },
                translations: {
                  en: {
                    question: "What is the gastrointestinal disorder?",
                    textInput: "Enter the disorder",
                    tooltip: "",
                  },
                  bn: {
                    question: "পরিপাকতন্ত্রের ব্যাধি কী?",
                    textInput: "পরিপাকতন্ত্রের ব্যাধির নাম লিখুন",
                    tooltip: "",
                  },
                  as: {
                    question: "পাচনতন্ত্ৰৰ সমস্যা কি?",
                    textInput: "পাচনতন্ত্ৰৰ সমস্যাৰ নাম লিখক",
                    tooltip: "",
                  },
                  hi: {
                    question: "पाचन तंत्र की बीमारी क्या है?",
                    textInput: "बीमारी का नाम दर्ज करें",
                    tooltip: "",
                  },
                },
              },
            ],
          },
          {
            // Choose neurological conditions
            id: 6,
            questionNumber: {
              en: "1.1.6",
              bn: "১.১.৬",
              as: "১.১.৬",
              hi: "१.१.६",
            },
            translations: {
              en: {
                question: "Choose neurological disorders",
                options: [
                  { id: "1", label: "Epilepsy", value: "Epilepsy" },
                  {
                    id: "2",
                    label: "Parkinson’s Disease",
                    value: "Parkinson’s Disease",
                  },
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
                ],
                tooltip: "",
              },
              bn: {
                question: "স্নায়বিক রোগ নির্বাচন করুন",
                options: [
                  { id: "1", label: "এপিলেপ্সি", value: "Epilepsy" },
                  {
                    id: "2",
                    label: "পার্কিনসন ডিজিজ",
                    value: "Parkinson’s Disease",
                  },
                  {
                    id: "3",
                    label: "আলঝেইমার ডিজিজ এবং অন্যান্য ডিমেনশিয়া",
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
                ],
                tooltip: "",
              },
              as: {
                question: "নিউৰ'লজিকেল ৰোগ নিৰ্বাচন কৰক",
                options: [
                  { id: "1", label: "এপিলেপচি", value: "Epilepsy" },
                  {
                    id: "2",
                    label: "পাৰ্কিনছন ৰোগ",
                    value: "Parkinson’s Disease",
                  },
                  {
                    id: "3",
                    label: "আলঝেইমাৰ ৰোগ আৰু অন্যান্য ডিমেনচিয়া",
                    value: "Alzheimer’s Disease and Other Dementias",
                  },
                  {
                    id: "4",
                    label: "মাল্টিপল স্ক্লেৰ’ছিছ (MS)",
                    value: "Multiple Sclerosis (MS)",
                  },
                  {
                    id: "5",
                    label: "মাইগ্ৰেন আৰু দীঘলীয়া মূৰ বিষ",
                    value: "Migraines and Chronic Headaches",
                  },
                  {
                    id: "6",
                    label: "নিউৰ’পেথি (পেৰিফেৰেল নিউৰ’পেথি)",
                    value: "Neuropathy (Peripheral Neuropathy)",
                  },
                  { id: "7", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              hi: {
                question: "तंत्रिका संबंधी विकार चुनें",
                options: [
                  { id: "1", label: "मिर्गी", value: "Epilepsy" },
                  {
                    id: "2",
                    label: "पार्किंसन रोग",
                    value: "Parkinson’s Disease",
                  },
                  {
                    id: "3",
                    label: "अल्ज़ाइमर रोग और अन्य डिमेंशिया",
                    value: "Alzheimer’s Disease and Other Dementias",
                  },
                  {
                    id: "4",
                    label: "मल्टीपल स्क्लेरोसिस (MS)",
                    value: "Multiple Sclerosis (MS)",
                  },
                  {
                    id: "5",
                    label: "माइग्रेन और पुराना सिरदर्द",
                    value: "Migraines and Chronic Headaches",
                  },
                  {
                    id: "6",
                    label: "न्यूरोपैथी (पेरिफेरल न्यूरोपैथी)",
                    value: "Neuropathy (Peripheral Neuropathy)",
                  },
                  { id: "7", label: "अन्य", value: "Others" },
                ],
                tooltip: "",
              },
            },
            children: [
              {
                // Choose urological conditions
                id: 1,
                questionNumber: {
                  en: "1.1.6.1",
                  bn: "১.১.৬.১",
                  as: "১.১.৬.১",
                  hi: "1.1.6.1",
                },
                translations: {
                  en: {
                    question: "What is your neurological disorder?",
                    textInput: "Enter neurological disorder",
                    tooltip: "",
                  },
                  bn: {
                    question: "আপনার স্নায়ুবৈকল্য কী?",
                    textInput: "স্নায়ুবৈকল্যের নাম লিখুন",
                    tooltip: "",
                  },
                  as: {
                    question: "আপোনাৰ স্নায়ুবৈকল্য কি?",
                    textInput: "স্নায়ুবৈকল্যৰ নাম লিখক",
                    tooltip: "",
                  },
                  hi: {
                    question: "आपका न्यूरोलॉजिकल विकार क्या है?",
                    textInput: "न्यूरोलॉजिकल विकार दर्ज करें",
                    tooltip: "",
                  },
                },
              },
            ],
          },
          {
            // Choose respiratory conditions
            id: 7,
            questionNumber: {
              en: "1.1.7",
              bn: "১.১.৭",
              as: "১.১.৭",
              hi: "१.१.७",
            },
            translations: {
              en: {
                question: "Choose respiratory conditions",
                options: [
                  { id: "1", label: "Asthma", value: "Asthma" },
                  {
                    id: "2",
                    label: "Chronic Obstructive Pulmonary Disease (COPD)",
                    value: "Chronic Obstructive Pulmonary Disease (COPD)",
                  },
                  { id: "3", label: "Sleep Apnea", value: "Sleep Apnea" },
                  {
                    id: "4",
                    label: "Chronic Bronchitis",
                    value: "Chronic Bronchitis",
                  },
                  {
                    id: "5",
                    label: "Pulmonary Fibrosis",
                    value: "Pulmonary Fibrosis",
                  },
                  { id: "6", label: "Others", value: "Others" },
                ],
                tooltip: "",
              },
              bn: {
                question: "শ্বাসকষ্টজনিত সমস্যা নির্বাচন করুন",
                options: [
                  { id: "1", label: "অ্যাজমা", value: "Asthma" },
                  {
                    id: "2",
                    label: "ক্রনিক অবস্ট্রাকটিভ পালমোনারি ডিজিজ (COPD)",
                    value: "Chronic Obstructive Pulmonary Disease (COPD)",
                  },
                  { id: "3", label: "স্লিপ অ্যাপনিয়া", value: "Sleep Apnea" },
                  {
                    id: "4",
                    label: "ক্রনিক ব্রংকাইটিস",
                    value: "Chronic Bronchitis",
                  },
                  {
                    id: "5",
                    label: "পালমোনারি ফাইব্রোসিস",
                    value: "Pulmonary Fibrosis",
                  },
                  { id: "6", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              as: {
                question: "শ্বাসপ্ৰশ্বাসজনিত অৱস্থা নিৰ্বাচন কৰক",
                options: [
                  { id: "1", label: "এজমা", value: "Asthma" },
                  {
                    id: "2",
                    label: "দীৰ্ঘস্থায়ী অৱৰোধমূলক পালমোনাৰী ৰোগ (COPD)",
                    value: "Chronic Obstructive Pulmonary Disease (COPD)",
                  },
                  { id: "3", label: "স্লিপ এপনিয়া", value: "Sleep Apnea" },
                  {
                    id: "4",
                    label: "দীৰ্ঘস্থায়ী ব্ৰংকাইটিছ",
                    value: "Chronic Bronchitis",
                  },
                  {
                    id: "5",
                    label: "পালমোনাৰী ফাইব্ৰ'ছিছ",
                    value: "Pulmonary Fibrosis",
                  },
                  { id: "6", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              hi: {
                question: "श्वसन संबंधी स्थितियाँ चुनें",
                options: [
                  { id: "1", label: "अस्थमा", value: "Asthma" },
                  {
                    id: "2",
                    label: "क्रॉनिक ऑब्सट्रक्टिव पल्मोनरी डिजीज (COPD)",
                    value: "Chronic Obstructive Pulmonary Disease (COPD)",
                  },
                  { id: "3", label: "स्लीप एपनिया", value: "Sleep Apnea" },
                  {
                    id: "4",
                    label: "क्रॉनिक ब्रोंकाइटिस",
                    value: "Chronic Bronchitis",
                  },
                  {
                    id: "5",
                    label: "पल्मोनरी फाइब्रोसिस",
                    value: "Pulmonary Fibrosis",
                  },
                  { id: "6", label: "अन्य", value: "Others" },
                ],
                tooltip: "",
              },
            },
            children: [
              {
                // What is your respiratory condition?
                id: 1,
                questionNumber: {
                  en: "1.1.7.1",
                  bn: "১.১.৭.১",
                  as: "১.১.৭.১",
                  hi: "1.1.7.1",
                },
                translations: {
                  en: {
                    question: "What is your respiratory condition?",
                    textInput: "Enter the respiratory condition",
                    tooltip: "",
                  },
                  bn: {
                    question: "আপনার শ্বাসযন্ত্রের সমস্যা কী?",
                    textInput: "শ্বাসযন্ত্রের সমস্যার নাম লিখুন",
                    tooltip: "",
                  },
                  as: {
                    question: "আপোনাৰ শ্বাসপ্ৰশ্বাস সম্পৰ্কীয় সমস্যা কি?",
                    textInput: "শ্বাসপ্ৰশ্বাস সম্পৰ্কীয় সমস্যাৰ নাম লিখক",
                    tooltip: "",
                  },
                  hi: {
                    question: "आपकी श्वसन संबंधी स्थिति क्या है?",
                    textInput: "श्वसन संबंधी स्थिति दर्ज करें",
                    tooltip: "",
                  },
                },
              },
            ],
          },
          {
            // Choose diabetes conditions
            id: 8,
            questionNumber: {
              en: "1.1.8",
              bn: "১.১.৮",
              as: "১.১.৮",
              hi: "१.१.८",
            },
            translations: {
              en: {
                question: "Choose diabetes and endocrine disorders",
                options: [
                  {
                    id: "1",
                    label: "Type 1 Diabetes",
                    value: "Type 1 Diabetes",
                  },
                  {
                    id: "2",
                    label: "Type 2 Diabetes",
                    value: "Type 2 Diabetes",
                  },
                  {
                    id: "3",
                    label: "Gestational Diabetes",
                    value: "Gestational Diabetes",
                  },
                  { id: "4", label: "Hypothyroidism", value: "Hypothyroidism" },
                  {
                    id: "5",
                    label: "Hyperthyroidism",
                    value: "Hyperthyroidism",
                  },
                  { id: "6", label: "Others", value: "Others" },
                ],
                tooltip: "",
              },
              bn: {
                question: "ডায়াবেটিস এবং অন্তঃস্রাবী ব্যাধি নির্বাচন করুন",
                options: [
                  {
                    id: "1",
                    label: "টাইপ ১ ডায়াবেটিস",
                    value: "Type 1 Diabetes",
                  },
                  {
                    id: "2",
                    label: "টাইপ ২ ডায়াবেটিস",
                    value: "Type 2 Diabetes",
                  },
                  {
                    id: "3",
                    label: "গর্ভকালীন ডায়াবেটিস",
                    value: "Gestational Diabetes",
                  },
                  {
                    id: "4",
                    label: "হাইপোথাইরয়েডিজম",
                    value: "Hypothyroidism",
                  },
                  {
                    id: "5",
                    label: "হাইপারথাইরয়েডিজম",
                    value: "Hyperthyroidism",
                  },
                  { id: "6", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              as: {
                question: "ডায়াবেটিছ আৰু অন্তঃস্ৰাৱী ব্যাধি নিৰ্বাচন কৰক",
                options: [
                  {
                    id: "1",
                    label: "টাইপ ১ ডায়াবেটিছ",
                    value: "Type 1 Diabetes",
                  },
                  {
                    id: "2",
                    label: "টাইপ ২ ডায়াবেটিছ",
                    value: "Type 2 Diabetes",
                  },
                  {
                    id: "3",
                    label: "গৰ্ভকালীন ডায়াবেটিছ",
                    value: "Gestational Diabetes",
                  },
                  {
                    id: "4",
                    label: "হাইপ'থাইৰয়ডিজম",
                    value: "Hypothyroidism",
                  },
                  {
                    id: "5",
                    label: "হাইপাৰথাইৰয়ডিজম",
                    value: "Hyperthyroidism",
                  },
                  { id: "6", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              hi: {
                question: "मधुमेह और अंतःस्रावी विकार चुनें",
                options: [
                  {
                    id: "1",
                    label: "टाइप 1 डायबिटीज",
                    value: "Type 1 Diabetes",
                  },
                  {
                    id: "2",
                    label: "टाइप 2 डायबिटीज",
                    value: "Type 2 Diabetes",
                  },
                  {
                    id: "3",
                    label: "गर्भकालीन डायबिटीज",
                    value: "Gestational Diabetes",
                  },
                  {
                    id: "4",
                    label: "हाइपोथायरायडिज्म",
                    value: "Hypothyroidism",
                  },
                  {
                    id: "5",
                    label: "हाइपरथायरायडिज्म",
                    value: "Hyperthyroidism",
                  },
                  { id: "6", label: "अन्य", value: "Others" },
                ],
                tooltip: "",
              },
            },
            children: [
              {
                // What is your diabetic or endrocrine disorder?
                id: 1,
                questionNumber: {
                  en: "1.1.8.1",
                  bn: "১.১.৮.১",
                  as: "১.১.৮.১",
                  hi: "1.1.8.1",
                },
                translations: {
                  en: {
                    question: "What is your diabetic or endocrine disorder?",
                    textInput: "Enter the disorder",
                    tooltip: "",
                  },
                  bn: {
                    question: "আপনার ডায়াবেটিক বা অন্তঃস্রাবী সমস্যাটি কী?",
                    textInput: "সমস্যার নাম লিখুন",
                    tooltip: "",
                  },
                  as: {
                    question: "আপোনাৰ ডায়াবেটিক বা অন্তঃস্ৰাৱী সমস্যা কি?",
                    textInput: "সমস্যাৰ নাম লিখক",
                    tooltip: "",
                  },
                  hi: {
                    question: "आपका मधुमेह या अंतःस्रावी विकार क्या है?",
                    textInput: "विकार दर्ज करें",
                    tooltip: "",
                  },
                },
              },
            ],
          },
          {
            // Choose cardiovascular conditions
            id: 9,
            questionNumber: {
              en: "1.1.9",
              bn: "১.১.৯",
              as: "১.১.৯",
              hi: "१.१.९",
            },
            translations: {
              en: {
                question: "Choose Cardiovascular conditions",
                options: [
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
                ],
                tooltip: "",
              },
              bn: {
                question: "হৃদযন্ত্রজনিত অবস্থা নির্বাচন করুন",
                options: [
                  { id: "1", label: "উচ্চ রক্তচাপ", value: "Hypertension" },
                  { id: "2", label: "হৃদরোগ", value: "Heart Disease" },
                  {
                    id: "3",
                    label: "সংকোচনশীল হৃদপিণ্ড ব্যর্থতা (CHF)",
                    value: "Congestive Heart Failure (CHF)",
                  },
                  { id: "4", label: "অ্যারিথমিয়া", value: "Arrhythmia" },
                  {
                    id: "5",
                    label: "করোনারি ধমনী রোগ",
                    value: "Coronary Artery Disease",
                  },
                  { id: "6", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              as: {
                question: "হৃদযন্ত্ৰজনিত অৱস্থা নিৰ্বাচন কৰক",
                options: [
                  { id: "1", label: "উচ্চ ৰক্তচাপ", value: "Hypertension" },
                  { id: "2", label: "হৃদৰোগ", value: "Heart Disease" },
                  {
                    id: "3",
                    label: "সংকোচনশীল হৃদপিণ্ড বিফলতা (CHF)",
                    value: "Congestive Heart Failure (CHF)",
                  },
                  { id: "4", label: "এৰিথমিয়া", value: "Arrhythmia" },
                  {
                    id: "5",
                    label: "কৰ'নাৰী ধমনী ৰোগ",
                    value: "Coronary Artery Disease",
                  },
                  { id: "6", label: "অন্যান্য", value: "Others" },
                ],
                tooltip: "",
              },
              hi: {
                question: "हृदय संबंधी स्थितियाँ चुनें",
                options: [
                  { id: "1", label: "उच्च रक्तचाप", value: "Hypertension" },
                  { id: "2", label: "हृदय रोग", value: "Heart Disease" },
                  {
                    id: "3",
                    label: "कंजेस्टिव हार्ट फेल्योर (CHF)",
                    value: "Congestive Heart Failure (CHF)",
                  },
                  {
                    id: "4",
                    label: "अतालता (Arrhythmia)",
                    value: "Arrhythmia",
                  },
                  {
                    id: "5",
                    label: "कोरोनरी आर्टरी डिजीज",
                    value: "Coronary Artery Disease",
                  },
                  { id: "6", label: "अन्य", value: "Others" },
                ],
                tooltip: "",
              },
            },
            children: [
              {
                // What is your cardiovascular condition?
                id: 1,
                questionNumber: {
                  en: "1.1.9.1",
                  bn: "১.১.৯.১",
                  as: "১.১.৯.১",
                  hi: "1.1.9.1",
                },
                translations: {
                  en: {
                    question: "What is your cardiovascular condition?",
                    textInput: "Enter cardiovascular condition",
                    tooltip: "",
                  },
                  bn: {
                    question: "আপনার কার্ডিওভাসকুলার অবস্থা কী?",
                    textInput: "কার্ডিওভাসকুলার অবস্থার নাম লিখুন",
                    tooltip: "",
                  },
                  as: {
                    question: "আপোনাৰ কাৰ্ডিঅ’ভাসকুলাৰ অৱস্থা কি?",
                    textInput: "কাৰ্ডিঅ’ভাসকুলাৰ অৱস্থাৰ নাম লিখক",
                    tooltip: "",
                  },
                  hi: {
                    question: "आपकी हृदय संबंधी स्थिति क्या है?",
                    textInput: "हृदय संबंधी स्थिति दर्ज करें",
                    tooltip: "",
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    // Any infectious diseases
    id: 2,
    questionNumber: {
      en: "2",
      bn: "২",
      as: "২",
      hi: "२",
    },
    translations: {
      en: {
        question: "Have any infectious diseases?",
        options: [
          { id: 1, label: "Yes", value: "Yes" },
          { id: 2, label: "No", value: "No" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনার কি কোনো সংক্রামক রোগ আছে?",
        options: [
          { id: 1, label: "হ্যাঁ", value: "Yes" },
          { id: 2, label: "না", value: "No" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপোনাৰ কোনো সংক্ৰমিত ৰোগ আছে নেকি?",
        options: [
          { id: 1, label: "হয়", value: "Yes" },
          { id: 2, label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपको कोई संक्रामक रोग है?",
        options: [
          { id: 1, label: "हां", value: "Yes" },
          { id: 2, label: "नहीं", value: "No" },
        ],
        tooltip: "",
      },
    },
    children: [
      {
        // Choose choose infectious disease
        id: 1,
        questionNumber: {
          en: "2.1",
          bn: "২.১",
          as: "২.১",
          hi: "२.१",
        },
        translations: {
          en: {
            question: "Choose infectious diseases",
            options: [
              { id: "1", label: "COVID-19", value: "COVID-19" },
              { id: "2", label: "Tuberculosis", value: "Tuberculosis" },
              { id: "3", label: "Other", value: "Other" },
            ],
            tooltip: "",
          },
          bn: {
            question: "সংক্রামক রোগ নির্বাচন করুন",
            options: [
              { id: "1", label: "কোভিড-১৯", value: "COVID-19" },
              { id: "2", label: "যক্ষ্মা", value: "Tuberculosis" },
              { id: "3", label: "অন্যান্য", value: "Other" },
            ],
            tooltip: "",
          },
          as: {
            question: "সংক্রমণজনিত ৰোগ নিৰ্বাচন কৰক",
            options: [
              { id: "1", label: "কোভিড-১৯", value: "COVID-19" },
              { id: "2", label: "ক্ষয় ৰোগ (যক্ষ্মা)", value: "Tuberculosis" },
              { id: "3", label: "অন্যান্য", value: "Other" },
            ],
            tooltip: "",
          },
          hi: {
            question: "संक्रामक रोग चुनें",
            options: [
              { id: "1", label: "कोविड-19", value: "COVID-19" },
              { id: "2", label: "क्षय रोग (टीबी)", value: "Tuberculosis" },
              { id: "3", label: "अन्य", value: "Other" },
            ],
            tooltip: "",
          },
        },
        children: [
          {
            // Enter other infectious disease
            id: 1,
            questionNumber: {
              en: "1.1",
              bn: "১.১",
              as: "১.১",
              hi: "१.१",
            },
            translations: {
              en: {
                question: "What is the infectious disease?",
                textInput: "Enter the infectious disease",
                tooltip: "",
              },
              bn: {
                question: "সংক্রমণজনিত রোগ কি?",
                textInput: "সংক্রমণজনিত রোগ লিখুন",
                tooltip: "",
              },
              as: {
                question: "সংক্রমণজনিত ৰোগ কি?",
                textInput: "সংক্রমণজনিত ৰোগ লিখক",
                tooltip: "",
              },
              hi: {
                question: "संक्रामक रोग क्या है?",
                textInput: "संक्रामक रोग दर्ज करें",
                tooltip: "",
              },
            },
          },
        ],
      },
    ],
  },
  {
    // Do you have allergies
    id: 3,
    questionNumber: {
      en: "3",
      bn: "৩",
      as: "৩",
      hi: "३",
    },
    translations: {
      en: {
        question: "Do you have any allergies?",
        options: [
          { id: 1, label: "Yes", value: "Yes" },
          { id: 2, label: "No", value: "No" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনার কি কোনো অ্যালার্জি আছে?",
        options: [
          { id: 1, label: "হ্যাঁ", value: "Yes" },
          { id: 2, label: "না", value: "No" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপোনাৰ কোনো এলাৰ্জি আছে নেকি?",
        options: [
          { id: 1, label: "হয়", value: "Yes" },
          { id: 2, label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपको कोई एलर्जी है?",
        options: [
          { id: 1, label: "हां", value: "Yes" },
          { id: 2, label: "नहीं", value: "No" },
        ],
        tooltip: "",
      },
    },
    children: [
      {
        // Choose allergy
        id: 1,
        questionNumber: {
          en: "3.1",
          bn: "৩.১",
          as: "৩.১",
          hi: "३.१",
        },
        translations: {
          en: {
            question: "Choose allergies",
            options: [
              { id: "1", label: "Drug", value: "Drug" },
              { id: "2", label: "Food", value: "Food" },
              { id: "3", label: "Environment", value: "Environment" },
            ],
            tooltip: "",
          },
          bn: {
            question: "অ্যালার্জি নির্বাচন করুন",
            options: [
              { id: "1", label: "ওষুধ", value: "Drug" },
              { id: "2", label: "খাদ্য", value: "Food" },
              { id: "3", label: "পরিবেশ", value: "Environment" },
            ],
            tooltip: "",
          },
          as: {
            question: "এলাৰ্জি নিৰ্বাচন কৰক",
            options: [
              { id: "1", label: "ঔষধ", value: "Drug" },
              { id: "2", label: "আহাৰ", value: "Food" },
              { id: "3", label: "পৰিবেশ", value: "Environment" },
            ],
            tooltip: "",
          },
          hi: {
            question: "एलर्जी चुनें",
            options: [
              { id: "1", label: "दवा", value: "Drug" },
              { id: "2", label: "भोजन", value: "Food" },
              { id: "3", label: "पर्यावरण", value: "Environment" },
            ],
            tooltip: "",
          },
        },
      },
    ],
  },
  {
    // Have you been vaccinated?
    id: 4,
    questionNumber: {
      en: "4",
      bn: "৪",
      as: "৪",
      hi: "४",
    },
    translations: {
      en: {
        question: "Have you been vaccinated?",
        options: [
          { id: 1, label: "Yes", value: "Yes" },
          { id: 2, label: "No", value: "No" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনি কি টিকা নিয়েছেন?",
        options: [
          { id: 1, label: "হ্যাঁ", value: "Yes" },
          { id: 2, label: "না", value: "No" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপুনি কি টিকাকৰণ গ্ৰহণ কৰিছে?",
        options: [
          { id: 1, label: "হয়", value: "Yes" },
          { id: 2, label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपको टीकाकरण हुआ है?",
        options: [
          { id: 1, label: "हां", value: "Yes" },
          { id: 2, label: "नहीं", value: "No" },
        ],
        tooltip: "",
      },
    },
    children: [
      {
        // Choose vaccinations
        id: 1,
        questionNumber: {
          en: "4.1",
          bn: "৪.১",
          as: "৪.১",
          hi: "४.१",
        },
        translations: {
          en: {
            question: "Choose your vaccinations",
            options: [
              {
                id: "1",
                label: "BCG (Bacillus Calmette-Guérin)",
                value: "BCG",
              },
              { id: "2", label: "OPV (Oral Polio Vaccine)", value: "OPV" },
              { id: "3", label: "Hepatitis B", value: "Hepatitis B" },
              { id: "4", label: "Pentavalent Vaccine", value: "Pentavalent" },
              { id: "5", label: "Rotavirus Vaccine", value: "Rotavirus" },
              {
                id: "6",
                label: "PCV (Pneumococcal Conjugate Vaccine)",
                value: "PCV",
              },
              {
                id: "7",
                label: "IPV (Inactivated Polio Vaccine)",
                value: "IPV",
              },
              {
                id: "8",
                label: "Measles and Rubella (MR) Vaccine",
                value: "MR",
              },
              {
                id: "9",
                label: "JE Vaccine (Japanese Encephalitis)",
                value: "JE",
              },
              { id: "10", label: "Hepatitis A", value: "Hepatitis A" },
              { id: "11", label: "Varicella Vaccine", value: "Varicella" },
              {
                id: "12",
                label: "HPV (Human Papillomavirus) Vaccine",
                value: "HPV",
              },
              {
                id: "13",
                label: "Diphtheria, Pertussis, and Tetanus Vaccine",
                value: "DPT",
              },
              {
                id: "14",
                label: "Meningococcal Vaccine",
                value: "Meningococcal",
              },
              {
                id: "15",
                label: "Typhoid Conjugate Vaccine (TCV)",
                value: "TCV",
              },
              {
                id: "16",
                label: "Tdap (Tetanus, Diphtheria, Pertussis)",
                value: "TDAP",
              },
              {
                id: "17",
                label: "Pneumococcal Vaccine",
                value: "Pneumococcal",
              },
              { id: "18", label: "Zoster Vaccine", value: "Zoster" },
              {
                id: "19",
                label: "Yellow Fever Vaccine",
                value: "Yellow Fever",
              },
              { id: "20", label: "Rabies Vaccine", value: "Rabies" },
              { id: "21", label: "Typhoid Vaccine", value: "Typhoid" },
              { id: "22", label: "Cholera Vaccine", value: "Cholera" },
              { id: "23", label: "COVID-19 Vaccines", value: "Covid-19" },
              { id: "24", label: "H1N1 Influenza Vaccine", value: "H1N1" },
              { id: "25", label: "Anthrax Vaccine", value: "Anthrax" },
            ],
            tooltip: "",
          },
          bn: {
            question: "আপনার প্রাপ্ত টীকা নির্বাচন করুন",
            options: [
              {
                id: "1",
                label: "BCG (ব্যাসিলাস ক্যালমেট-গ্যুরিন)",
                value: "BCG",
              },
              { id: "2", label: "OPV (মৌখিক পোলিও ভ্যাকসিন)", value: "OPV" },
              { id: "3", label: "হেপাটাইটিস বি", value: "Hepatitis B" },
              {
                id: "4",
                label: "পেন্টাভ্যালেন্ট ভ্যাকসিন",
                value: "Pentavalent",
              },
              { id: "5", label: "রোটাভাইরাস ভ্যাকসিন", value: "Rotavirus" },
              {
                id: "6",
                label: "PCV (নিউমোকক্কাল কনজুগেট ভ্যাকসিন)",
                value: "PCV",
              },
              {
                id: "7",
                label: "IPV (ইনঅ্যাকটিভেটেড পোলিও ভ্যাকসিন)",
                value: "IPV",
              },
              { id: "8", label: "খসরা এবং রুবেলা (MR) ভ্যাকসিন", value: "MR" },
              {
                id: "9",
                label: "JE ভ্যাকসিন (জাপানি এনসেফালাইটিস)",
                value: "JE",
              },
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
              {
                id: "14",
                label: "মেনিনগক্কাল ভ্যাকসিন",
                value: "Meningococcal",
              },
              {
                id: "15",
                label: "টাইফয়েড কনজুগেট ভ্যাকসিন (TCV)",
                value: "TCV",
              },
              {
                id: "16",
                label: "Tdap (টেটানাস, ডিপথিরিয়া, পারটুসিস)",
                value: "TDAP",
              },
              {
                id: "17",
                label: "নিউমোকক্কাল ভ্যাকসিন",
                value: "Pneumococcal",
              },
              { id: "18", label: "জোস্টার ভ্যাকসিন", value: "Zoster" },
              {
                id: "19",
                label: "ইয়েলো ফিভার ভ্যাকসিন",
                value: "Yellow Fever",
              },
              { id: "20", label: "রেবিস ভ্যাকসিন", value: "Rabies" },
              { id: "21", label: "টাইফয়েড ভ্যাকসিন", value: "Typhoid" },
              { id: "22", label: "কলেরা ভ্যাকসিন", value: "Cholera" },
              { id: "23", label: "COVID-19 ভ্যাকসিন", value: "COVID-19" },
              {
                id: "24",
                label: "H1N1 ইনফ্লুয়েঞ্জা ভ্যাকসিন",
                value: "H1N1 Influenza",
              },
              { id: "25", label: "অ্যন্থ্রাক্স ভ্যাকসিন", value: "Anthrax" },
            ],
            tooltip: "",
          },
          as: {
            question: "আপোনাৰ গ্ৰহণ কৰা টীকা নিৰ্বাচন কৰক",
            options: [
              {
                id: "1",
                label: "BCG (বেসিলাস ক্যালমেট-গ্যুরিন)",
                value: "BCG",
              },
              { id: "2", label: "OPV (মৌখিক পোলিও ভ্যাকসিন)", value: "OPV" },
              { id: "3", label: "হেপাটাইটিস বি", value: "Hepatitis B" },
              {
                id: "4",
                label: "পেন্টাভ্যালেন্ট ভ্যাকসিন",
                value: "Pentavalent",
              },
              { id: "5", label: "রোটাভাইরাস ভ্যাকসিন", value: "Rotavirus" },
              {
                id: "6",
                label: "PCV (নিউমোকক্কাল কনজুগেট ভ্যাকসিন)",
                value: "PCV",
              },
              {
                id: "7",
                label: "IPV (ইনঅ্যাকটিভেটেড পোলিও ভ্যাকসিন)",
                value: "IPV",
              },
              {
                id: "8",
                label: "খসরা আৰু ৰুবেলা (MR) ভ্যাকসিন",
                value: "MR Vaccine",
              },
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
              {
                id: "14",
                label: "মেনিনগোক্কাল ভ্যাকসিন",
                value: "Meningococcal",
              },
              {
                id: "15",
                label: "টাইফয়েড কনজুগেট ভ্যাকসিন (TCV)",
                value: "TCV",
              },
              {
                id: "16",
                label: "Tdap (টেটানাস, ডিপথিরিয়া, পারটুসিস)",
                value: "TDAP",
              },
              {
                id: "17",
                label: "নিউমোকক্কাল ভ্যাকসিন",
                value: "Pneumococcal",
              },
              { id: "18", label: "জোস্টার ভ্যাকসিন", value: "Zoster" },
              {
                id: "19",
                label: "ইয়েলো ফিভার ভ্যাকসিন",
                value: "Yellow Fever",
              },
              { id: "20", label: "ৰেবিস ভ্যাকসিন", value: "Rabies" },
              { id: "21", label: "টাইফয়েড ভ্যাকসিন", value: "Typhoid" },
              { id: "22", label: "কলেরা ভ্যাকসিন", value: "Cholera" },
              { id: "23", label: "COVID-19 ভ্যাকসিন", value: "COVID-19" },
              {
                id: "24",
                label: "H1N1 ইনফ্লুয়েঞ্জা ভ্যাকসিন",
                value: "H1N1 Influenza",
              },
              { id: "25", label: "অ্যন্থ্রাক্স ভ্যাকসিন", value: "Anthrax" },
            ],
            tooltip: "",
          },
          hi: {
            question: "अपने लिए टीकाकरण चुनें",
            options: [
              { id: "1", label: "BCG (बैसिलस कैलमेट-ग्यूरिन)", value: "BCG" },
              { id: "2", label: "OPV (मौखिक पोलियो वैक्सीन)", value: "OPV" },
              { id: "3", label: "हेपेटाइटिस बी", value: "Hepatitis B" },
              { id: "4", label: "पेंटावैलेंट वैक्सीन", value: "Pentavalent" },
              { id: "5", label: "रोटावायरस वैक्सीन", value: "Rotavirus" },
              {
                id: "6",
                label: "PCV (न्यूमोकॉकल कंजुगेट वैक्सीन)",
                value: "PCV",
              },
              {
                id: "7",
                label: "IPV (इनएक्टिवेटेड पोलियो वैक्सीन)",
                value: "IPV",
              },
              { id: "8", label: "खसरा और रूबेला (MR) वैक्सीन", value: "MR" },
              {
                id: "9",
                label: "JE वैक्सीन (जापानी एन्सेफैलाइटिस)",
                value: "JE",
              },
              { id: "10", label: "हेपेटाइटिस ए", value: "Hepatitis A" },
              { id: "11", label: "वेरिसेला वैक्सीन", value: "Varicella" },
              {
                id: "12",
                label: "HPV (ह्यूमन पैपिलोमावायरस) वैक्सीन",
                value: "HPV",
              },
              {
                id: "13",
                label: "डिप्थीरिया, पर्टसिस, और टेटनस वैक्सीन",
                value: "DPT",
              },
              {
                id: "14",
                label: "मेनीनगोक्कल वैक्सीन",
                value: "Meningococcal",
              },
              {
                id: "15",
                label: "टायफॉइड कंजुगेट वैक्सीन (TCV)",
                value: "TCV",
              },
              {
                id: "16",
                label: "Tdap (टेटनस, डिप्थीरिया, पर्टसिस)",
                value: "TDAP",
              },
              { id: "17", label: "न्यूमोकॉकल वैक्सीन", value: "Pneumococcal" },
              { id: "18", label: "जोस्टर वैक्सीन", value: "Zoster" },
              { id: "19", label: "यलो फीवर वैक्सीन", value: "Yellow Fever" },
              { id: "20", label: "रेबीज वैक्सीन", value: "Rabies" },
              { id: "21", label: "टायफॉइड वैक्सीन", value: "Typhoid" },
              { id: "22", label: "कोलेरा वैक्सीन", value: "Cholera" },
              { id: "23", label: "COVID-19 वैक्सीनेशन", value: "Covid-19" },
              { id: "24", label: "H1N1 इन्फ्लूएंजा वैक्सीन", value: "H1N1" },
              { id: "25", label: "एंथ्रैक्स वैक्सीन", value: "Anthrax" },
            ],
            tooltip: "",
          },
        },
      },
    ],
  },
  {
    // Do you take alternative medicines
    id: 5,
    questionNumber: {
      en: "5",
      bn: "৫",
      as: "৫",
      hi: "५",
    },
    translations: {
      en: {
        question: "Do you take any alternative medicines?",
        options: [
          { id: 1, label: "Yes", value: "Yes" },
          { id: 2, label: "No", value: "No" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনি কি কোনো বিকল্প ঔষধ গ্রহণ করেন?",
        options: [
          { id: 1, label: "হ্যাঁ", value: "Yes" },
          { id: 2, label: "না", value: "No" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপুনি কি কোনো বিকল্প ঔষধ গ্ৰহণ কৰিছে?",
        options: [
          { id: 1, label: "হয়", value: "Yes" },
          { id: 2, label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आप कोई वैकल्पिक औषधि लेते हैं?",
        options: [
          { id: 1, label: "हां", value: "Yes" },
          { id: 2, label: "नहीं", value: "No" },
        ],
        tooltip: "",
      },
    },
    children: [
      {
        // Choose alternative medications
        id: 1,
        questionNumber: {
          en: "5.1",
          bn: "৫.১",
          as: "৫.১",
          hi: "५.१",
        },
        translations: {
          en: {
            question: "Choose alternative medicines",
            options: [
              { id: "1", label: "Ayurveda", value: "ayurveda" },
              { id: "2", label: "Homeopathy", value: "homeopathy" },
              { id: "3", label: "Other treatments", value: "other_treatments" },
            ],
            tooltip: "Select the alternative medicine you prefer",
          },
          bn: {
            question: "বিকল্প চিকিৎসা নির্বাচন করুন",
            options: [
              { id: "1", label: "আয়ুর্বেদ", value: "ayurveda" },
              { id: "2", label: "হোমিওপ্যাথি", value: "homeopathy" },
              { id: "3", label: "অন্যান্য চিকিৎসা", value: "other_treatments" },
            ],
            tooltip: "আপনার পছন্দের বিকল্প চিকিৎসা নির্বাচন করুন",
          },
          as: {
            question: "বিকল্প চিকিৎসা নিৰ্বাচন কৰক",
            options: [
              { id: "1", label: "আয়ুৰ্বেদ", value: "ayurveda" },
              { id: "2", label: "হোমিঅ'পেথি", value: "homeopathy" },
              { id: "3", label: "অন্যান্য চিকিৎসা", value: "other_treatments" },
            ],
            tooltip: "আপোনাৰ পছন্দৰ বিকল্প চিকিৎসা নিৰ্বাচন কৰক",
          },
          hi: {
            question: "वैकल्पिक चिकित्सा चुनें",
            options: [
              { id: "1", label: "आयुर्वेद", value: "ayurveda" },
              { id: "2", label: "होम्योपैथी", value: "homeopathy" },
              { id: "3", label: "अन्य उपचार", value: "other_treatments" },
            ],
            tooltip: "अपनी पसंद की वैकल्पिक चिकित्सा चुनें",
          },
        },
        children: [
          {
            // Mention medication
            id: 1,
            questionNumber: {
              en: "5.1.1",
              bn: "৫.১.১",
              as: "৫.১.১",
              hi: "५.१.१",
            },
            translations: {
              en: {
                question: "Mention Medication",
                textInput: "Enter the medication",
                tooltip: "Provide the name of the medication",
              },
              bn: {
                question: "ঔষধ উল্লেখ করুন",
                textInput: "ঔষধের নাম লিখুন",
                tooltip: "ঔষধের নাম প্রদান করুন",
              },
              as: {
                question: "ঔষধ উল্লেখ কৰক",
                textInput: "ঔষধৰ নাম লিখক",
                tooltip: "ঔষধৰ নাম প্ৰদান কৰক",
              },
              hi: {
                question: "दवा का उल्लेख करें",
                textInput: "दवा का नाम दर्ज करें",
                tooltip: "दवा का नाम प्रदान करें",
              },
            },
          },
        ],
      },
    ],
  },
  {
    //Do you have any reproductive health issues?
    id: 6,
    questionNumber: {
      en: "6",
      bn: "৬",
      as: "৬",
      hi: "६",
    },
    translations: {
      en: {
        question: "Do you have any reproductive health issues?",
        options: [
          { id: 1, label: "Yes", value: "Yes" },
          { id: 2, label: "No", value: "No" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনার কি কোনো প্ৰজনন স্বাস্থ্য সমস্যা আছে?",
        options: [
          { id: 1, label: "হ্যাঁ", value: "Yes" },
          { id: 2, label: "না", value: "No" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপোনাৰ কোনো প্ৰজনন স্বাস্থ্য সমস্যা আছে নেকি?",
        options: [
          { id: 1, label: "হয়", value: "Yes" },
          { id: 2, label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपको कोई प्रजनन स्वास्थ्य समस्या है?",
        options: [
          { id: 1, label: "हां", value: "Yes" },
          { id: 2, label: "नहीं", value: "No" },
        ],
        tooltip: "",
      },
    },
    children: [
      {
        // Choose reproductive health issues
        id: 1,
        questionNumber: {
          en: "6.1",
          bn: "৬.১",
          as: "৬.১",
          hi: "६.१",
        },
        translations: {
          en: {
            question: "Choose reproductive health issues",
            options: [
              {
                id: "1",
                label: "Erectile Dysfunction",
                value: "Erectile Dysfunction",
              },
              {
                id: "2",
                label: "Fertility",
                value: "Fertility",
              },
              {
                id: "3",
                label: "Others",
                value: "Others",
              },
            ],
            tooltip: "Select any reproductive health issues you are facing",
          },
          bn: {
            question: "প্রজনন স্বাস্থ্য সমস্যাগুলি নির্বাচন করুন",
            options: [
              {
                id: "1",
                label: "স্নায়বিক দুর্বলতা (Erectile Dysfunction)",
                value: "Erectile Dysfunction",
              },
              {
                id: "2",
                label: "উর্বরতা সমস্যা",
                value: "Fertility",
              },
              {
                id: "3",
                label: "অন্যান্য",
                value: "Others",
              },
            ],
            tooltip: "আপনার যে কোনো প্রজনন স্বাস্থ্য সমস্যা নির্বাচন করুন",
          },
          as: {
            question: "প্ৰজনন স্বাস্থ্য সমস্যা বাছনি কৰক",
            options: [
              {
                id: "1",
                label: "স্নায়বিক দুর্বলতা (Erectile Dysfunction)",
                value: "Erectile Dysfunction",
              },
              {
                id: "2",
                label: "উৰ্বৰতা সমস্যা",
                value: "Fertility",
              },
              {
                id: "3",
                label: "অন্যান্য",
                value: "Others",
              },
            ],
            tooltip: "আপোনাৰ যিকোনো প্ৰজনন স্বাস্থ্য সমস্যা বাছনি কৰক",
          },
          hi: {
            question: "प्रजनन स्वास्थ्य समस्याएँ चुनें",
            options: [
              {
                id: "1",
                label: "नपुंसकता (Erectile Dysfunction)",
                value: "Erectile Dysfunction",
              },
              {
                id: "2",
                label: "प्रजनन क्षमता (Fertility)",
                value: "Fertility",
              },
              {
                id: "3",
                label: "अन्य",
                value: "Others",
              },
            ],
            tooltip: "कृपया कोई भी प्रजनन स्वास्थ्य समस्या चुनें",
          },
        },
        children: [
          {
            // What is your reproducticve health issue?
            id: 1,
            questionNumber: {
              en: "6.1.1",
              bn: "৬.১.১",
              as: "৬.১.১",
              hi: "6.1.1",
            },
            translations: {
              en: {
                question: "What is your reproductive health issue?",
                textInput: "Enter the reproductive health issue",
                tooltip: "",
              },
              bn: {
                question: "আপনার প্রজনন স্বাস্থ্য সমস্যা কী?",
                textInput: "প্রজনন স্বাস্থ্য সমস্যার নাম লিখুন",
                tooltip: "",
              },
              as: {
                question: "আপোনাৰ প্ৰজনন স্বাস্থ্য সমস্যা কি?",
                textInput: "প্ৰজনন স্বাস্থ্য সমস্যাৰ নাম লিখক",
                tooltip: "",
              },
              hi: {
                question: "आपकी प्रजनन स्वास्थ्य समस्या क्या है?",
                textInput: "प्रजनन स्वास्थ्य समस्या दर्ज करें",
                tooltip: "",
              },
            },
          },
        ],
      },
    ],
  },
  {
    // Do you Menstruate?
    id: 7,
    questionNumber: {
      en: "6",
      bn: "৬",
      as: "৬",
      hi: "६",
    },
    translations: {
      en: {
        question: "Do you menstruate?",
        options: [
          { id: 1, label: "Yes", value: "Yes" },
          { id: 2, label: "No", value: "No" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনার কি মাসিক হয়?",
        options: [
          { id: 1, label: "হ্যাঁ", value: "Yes" },
          { id: 2, label: "না", value: "No" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপোনাৰ মাসিক হয় নেকি?",
        options: [
          { id: 1, label: "হয়", value: "Yes" },
          { id: 2, label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपको मासिक धर्म होता है?",
        options: [
          { id: 1, label: "हां", value: "Yes" },
          { id: 2, label: "नहीं", value: "No" },
        ],
        tooltip: "",
      },
    },
    children: [
      {
        // Choose menstrual cycle
        id: 1,
        questionNumber: {
          en: "7.1",
          bn: "৭.১",
          as: "৭.১",
          hi: "७.१",
        },
        translations: {
          en: {
            question: "Choose your menstrual cycle",
            options: [
              { id: "1", label: "Regular", value: "regular" },
              { id: "2", label: "Irregular", value: "irregular" },
            ],
            tooltip: "Select the type of menstrual cycle you experience",
          },
          bn: {
            question: "আপনার ঋতুস্রাব চক্র নির্বাচন করুন",
            options: [
              { id: "1", label: "নিয়মিত", value: "regular" },
              { id: "2", label: "অনিয়মিত", value: "irregular" },
            ],
            tooltip: "আপনার ঋতুস্রাব চক্রের ধরন নির্বাচন করুন",
          },
          as: {
            question: "আপোনাৰ মাসিক চক্র নিৰ্বাচন কৰক",
            options: [
              { id: "1", label: "নিয়মীয়া", value: "regular" },
              { id: "2", label: "অনিয়মীয়া", value: "irregular" },
            ],
            tooltip: "আপোনাৰ মাসিক চক্রৰ ধৰণ নিৰ্বাচন কৰক",
          },
          hi: {
            question: "अपना मासिक धर्म चक्र चुनें",
            options: [
              { id: "1", label: "नियमित", value: "regular" },
              { id: "2", label: "अनियमित", value: "irregular" },
            ],
            tooltip: "अपने मासिक धर्म चक्र के प्रकार का चयन करें",
          },
        },
      },
    ],
  },
  {
    // Have you undergone any surgery?
    id: 8,
    questionNumber: {
      en: "7",
      bn: "৭",
      as: "৭",
      hi: "७",
    },
    translations: {
      en: {
        question: "Have you undergone any surgery?",
        options: [
          { id: 1, label: "Yes", value: "Yes" },
          { id: 2, label: "No", value: "No" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনার কি কোনো অস্ত্রোপচার হয়েছে?",
        options: [
          { id: 1, label: "হ্যাঁ", value: "Yes" },
          { id: 2, label: "না", value: "No" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপুনি কি আগতে কোনো অস্ত্ৰোপচাৰ কৰাইছে?",
        options: [
          { id: 1, label: "হয়", value: "Yes" },
          { id: 2, label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपने कोई सर्जरी करवाई है?",
        options: [
          { id: 1, label: "हां", value: "Yes" },
          { id: 2, label: "नहीं", value: "No" },
        ],
        tooltip: "",
      },
    },
    children: [
      {
        // What was the surgery?
        id: 1,
        questionNumber: {
          en: "8.1",
          bn: "৮.১",
          as: "৮.১",
          hi: "८.१",
        },
        translations: {
          en: {
            question: "What was the surgery?",
            textInput: "Enter the name of the surgery",
            tooltip: "Please provide the name of the surgery you had",
          },
          bn: {
            question: "অস্ত্রোপচার কী ছিল?",
            textInput: "অস্ত্রোপচারের নাম লিখুন",
            tooltip: "আপনার করা অস্ত্রোপচারের নাম প্রদান করুন",
          },
          as: {
            question: "অস্ত্ৰোপচাৰটো কি আছিল?",
            textInput: "অস্ত্ৰোপচাৰৰ নাম লিখক",
            tooltip: "আপুনি কৰা অস্ত্ৰোপচাৰৰ নাম দিয়ক",
          },
          hi: {
            question: "सर्जरी क्या थी?",
            textInput: "सर्जरी का नाम दर्ज करें",
            tooltip: "कृपया की गई सर्जरी का नाम प्रदान करें",
          },
        },
      },
    ],
  },
  {
    //Have you had any major hospitalizations?
    id: 9,
    questionNumber: {
      en: "8",
      bn: "৮",
      as: "৮",
      hi: "८",
    },
    translations: {
      en: {
        question: "Have you had any major hospitalizations?",
        options: [
          { id: 1, label: "Yes", value: "Yes" },
          { id: 2, label: "No", value: "No" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনার কি কোনো বড় হাসপাতালে ভর্তি হওয়ার ঘটনা আছে?",
        options: [
          { id: 1, label: "হ্যাঁ", value: "Yes" },
          { id: 2, label: "না", value: "No" },
        ],
        tooltip: "",
      },
      as: {
        question:
          "আপোনাৰ কি কেতিয়াবা ডাঙৰ ৰোগৰ বাবে চিকিৎসালয়ত ভৰ্তি হৈছিল নেকি?",
        options: [
          { id: 1, label: "হয়", value: "Yes" },
          { id: 2, label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपको कभी किसी बड़ी अस्पताल में भर्ती होना पड़ा?",
        options: [
          { id: 1, label: "हां", value: "Yes" },
          { id: 2, label: "नहीं", value: "No" },
        ],
        tooltip: "",
      },
    },
    children: [
      {
        // Cause of hospitalization
        id: 1,
        questionNumber: {
          en: "9.1",
          bn: "৯.১",
          as: "৯.১",
          hi: "९.१",
        },
        translations: {
          en: {
            question: "What is the cause of hospitalization?",
            textInput: "Enter the cause of hospitalization",
            tooltip: "Please provide the reason for your hospitalization",
          },
          bn: {
            question: "হাসপাতালে ভর্তি হওয়ার কারণ কী?",
            textInput: "হাসপাতালে ভর্তি হওয়ার কারণ লিখুন",
            tooltip: "আপনার হাসপাতালে ভর্তি হওয়ার কারণ প্রদান করুন",
          },
          as: {
            question: "হাস্পতালত ভৰ্তি হোৱাৰ কাৰণ কি?",
            textInput: "হাস্পতালত ভৰ্তি হোৱাৰ কাৰণ লিখক",
            tooltip: "অনুগ্ৰহ কৰি আপোনাৰ হাস্পতালত ভৰ্তি হোৱাৰ কাৰণ দিয়ক",
          },
          hi: {
            question: "अस्पताल में भर्ती होने का कारण क्या है?",
            textInput: "अस्पताल में भर्ती होने का कारण दर्ज करें",
            tooltip: "कृपया अपने अस्पताल में भर्ती होने का कारण प्रदान करें",
          },
        },
      },
      {
        // Enter duration of hospitalization
        id: 2,
        questionNumber: {
          en: "9.2",
          bn: "৯.২",
          as: "৯.২",
          hi: "९.२",
        },
        translations: {
          en: {
            question: "What is the duration?",
            textInput: "Enter the duration",
            tooltip: "Please enter the duration in days or months",
          },
          bn: {
            question: "সময়সীমা কত?",
            textInput: "সময়সীমা লিখুন",
            tooltip: "অনুগ্রহ করে সময়সীমা দিন বা মাসে লিখুন",
          },
          as: {
            question: "সময়সীমা কিমান?",
            textInput: "সময়সীমা লিখক",
            tooltip: "অনুগ্ৰহ কৰি সময়সীমা দিন বা মাহত লিখক",
          },
          hi: {
            question: "अवधि कितनी है?",
            textInput: "अवधि दर्ज करें",
            tooltip: "कृपया अवधि दिनों या महीनों में दर्ज करें",
          },
        },
      },
    ],
  },
];

export const labels = [
  {
    translations: {
      en: {
        label: "Add Details",
      },
      bn: {
        label: "বিস্তারিত যোগ করুন",
      },
      as: {
        label: "বিৱৰণ যোগ কৰক",
      },
      hi: {
        label: "विवरण जोड़ें",
      },
    },
  },
  {
    translations: {
      en: {
        label: "Update",
      },
      bn: {
        label: "আপডেট করুন",
      },
      as: {
        label: "আপডেট কৰক",
      },
      hi: {
        label: "अपडेट करें",
      },
    },
  },
];
