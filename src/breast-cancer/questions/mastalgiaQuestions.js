export const mastalgiaQuestions = [
  {
    id: 1,
    questionNumber: {
      en: "1",
      bn: "১",
      as: "১",
      hi: "१",
    },
    optionType: "radio",
    translations: {
      en: {
        question: "Is your Menstruation today?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip:
          "Indicate if you are experiencing breast pain today. This helps monitor patterns and identify triggers for effective treatment.",
      },
      bn: {
        question: "আপনার কি আজ মাসিক চলছে?",
        options: [
          { id: "1", label: "হ্যা", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip:
          "আজ কি আপনার স্তনে ব্যথা হচ্ছে? এটি চিহ্নিত করুন। এটি প্যাটার্ন ট্র্যাক করতে এবং ব্যথার কারণ সনাক্ত করতে সহায়ক।",
      },
      as: {
        question: "আপোনাৰ কি আজি মাসিক চলি আছে?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip:
          "আজ আপুনি স্তন বেদনা অনুভৱ কৰিছে নেকি? ইয়াক চিনাক্ত কৰক। এইটো পেটাৰ্ন মনিটৰ কৰি কাৰণসমূহ চিনাক্ত কৰাত সহায় কৰে।",
      },
      hi: {
        question: "क्या आपको आज माहवारी हो रही है?",
        options: [
          { id: "1", label: "हां", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip:
          "क्या आज आपको स्तन में दर्द हो रहा है? इसे चिह्नित करें। यह पैटर्न ट्रैक करने और दर्द के कारणों को समझने में मदद करता है।",
      },
    },
  },
  {
    id: 2,
    questionNumber: {
      en: "2",
      bn: "২",
      as: "২",
      hi: "२",
    },
    optionType: "radio",
    translations: {
      en: {
        question: "Have pain in the breast today?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip:
          "Identify the location of your breast pain. Touch the specific part on the image or select the position using the buttons provided. This helps your doctor understand the pain area accurately.",
      },
      bn: {
        question: "ব্যাথা হচ্ছে?",
        options: [
          { id: "1", label: "হ্যা", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip:
          "আপনার স্তনের ব্যথার অবস্থান চিহ্নিত করুন। ছবির নির্দিষ্ট অংশে স্পর্শ করুন বা প্রদত্ত বোতামগুলি ব্যবহার করে অবস্থান নির্বাচন করুন। এটি আপনার ডাক্তারের কাছে ব্যথার অবস্থানটি সঠিকভাবে বুঝতে সহায়তা করবে।",
      },
      as: {
        question: "ব্যথা হৈছে?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip:
          "আপোনাৰ স্তনৰ বেদনাৰ স্থান চিনাক্ত কৰক। ছবিৰ নিৰ্দিষ্ট অংশত স্পৰ্শ কৰক বা প্ৰদান কৰা বুটাম ব্যৱহাৰ কৰি স্থান নিৰ্বাচন কৰক। এইটো আপোনাৰ ডাক্তৰে সঠিকভাৱে বেদনাৰ স্থান বুজিবলৈ সহায় কৰে।",
      },
      hi: {
        question: "क्या दर्द हो रहा है?",
        options: [
          { id: "1", label: "हां", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip:
          "अपने स्तन के दर्द के स्थान की पहचान करें। चित्र पर सही स्थान को छूएं या दिए गए बटनों का उपयोग करके स्थान चुनें। इससे डॉक्टर को दर्द के क्षेत्र को सही से समझने में मदद मिलेगी।",
      },
    },
    children: [
      {
        id: 1,
        questionNumber: {
          en: "2.1",
          bn: "২.১",
          as: "২.১",
          hi: "२.१",
        },
        optionType: "slider",
        translations: {
          en: {
            question: "How much pain Level/Intensity?",
            options: [
              "1 (Minimal)",
              "2 (Less)",
              "3 (Medium)",
              "4 (High)",
              "5 (Intense)",
            ],
            label: "Pain Level",
            tooltip:
              "Select your pain level for today. Use the slider to choose from five options: Very Low, Low, Moderate, High, or Very High. This helps track pain intensity over time.",
          },
          bn: {
            question: "কতটা ব্যাথা?",
            options: [
              "১ (সামান্য)",
              "২ (কম)",
              "৩ (মাঝারি)",
              "৪ (বেশি)",
              "৫ (খুব বেশি)",
            ],
            label: "ব্যাথার স্তর",
            tooltip:
              "আজকের ব্যথার স্তর নির্বাচন করুন। পাঁচটি বিকল্প থেকে চয়ন করতে স্লাইডার ব্যবহার করুন: খুব কম, কম, মাঝারি, বেশি, বা খুব বেশি। এটি সময়ের সাথে ব্যথার তীব্রতা ট্র্যাক করতে সাহায্য করে।",
          },
          as: {
            question: "কিমান বেদনা?",
            options: [
              "১ (অল্প)",
              "২ (কম)",
              "৩ (মধ্যম)",
              "৪ (অধিক)",
              "৫ (তীব্ৰ)",
            ],
            label: "বেদনাৰ স্তৰ",
            tooltip:
              "আজিৰ বেদনা স্তৰ নিৰ্বাচন কৰক। চ্লাইডাৰ ব্যৱহাৰ কৰি পাঁচটা বিকল্পৰ পৰা বাছনি কৰক: খুব কম, কম, মধ্যম, অধিক বা খুব অধিক। এইটো সময়ৰ সৈতে বেদনা তীব্ৰতা অনুসৰণ কৰাত সহায় কৰে।",
          },
          hi: {
            question: "दर्द की रेटिंग?",
            options: [
              "१ (कम)",
              "२ (अधिक कम)",
              "३ (मध्यम)",
              "४ (अधिक)",
              "५ (अधिकतम)",
            ],
            label: "दर्द का स्तर",
            tooltip:
              "आज के दर्द का स्तर चुनें। स्लाइडर का उपयोग करके पाँच विकल्पों में से चुनें: बहुत कम, कम, मध्यम, अधिक, या बहुत अधिक। यह समय के साथ दर्द की तीव्रता को ट्रैक करने में मदद करता है।",
          },
        },
      },
      {
        id: 2,
        questionNumber: {
          en: "2.2",
          bn: "২.২",
          as: "২.২",
          hi: "२.२",
        },
        optionType: "custom",
        translations: {
          en: {
            question: "Where is the pain (Coverage)?",
            options: [
              { id: "1", label: "Entire Breast", value: "Entire Breast" },
              { id: "2", label: "Part Of Breast", value: "Part Of Breast" },
            ],
            tooltip:
              "Identify the coverage of your breast pain. Touch to select the coverage using the buttons provided. This helps your doctor understand the pain coverage accurately.",
          },
          bn: {
            question: "ব্যথা কতদূর বিস্তৃত?",
            options: [
              { id: "1", label: "সাম্পূর্ণ স্তন", value: "Entire Breast" },
              {
                id: "2",
                label: "স্তনের একটি অংশ",
                value: "Part Of Breast",
              },
            ],
            tooltip:
              "আপনার স্তনের ব্যথার পরিসর চিহ্নিত করুন। দেওয়া বোতামগুলি ব্যবহার করে স্পর্শ করে কভারেজ নির্বাচন করুন। এটি আপনার ডাক্তারকে ব্যথার পরিসর সঠিকভাবে বুঝতে সাহায্য করে।",
          },
          as: {
            question: "ব্যথা কিমান দূৰলৈ বিস্তৃত?",
            options: [
              { id: "1", label: "সম্পূৰ্ণ স্তন", value: "Entire Breast" },
              { id: "2", label: "স্তনৰ অংশ", value: "Part Of Breast" },
            ],
            tooltip:
              "আপোনাৰ স্তনৰ ব্যথাৰ পৰিসৰ চিনাক্ত কৰক। উপলব্ধ বুটামসমূহ ব্যৱহাৰ কৰি স্পৰ্শ কৰি কভারেজ নিৰ্বাচন কৰক। এইটো আপোনাৰ ডাক্টৰক ব্যথাৰ পৰিসৰ ঠিকভাৱে বুজিবলৈ সহায় কৰে।",
          },
          hi: {
            question: "दर्द कितना फैला हुआ है?",
            options: [
              { id: "1", label: "पूरा स्तन", value: "Entire Breast" },
              { id: "2", label: "स्तन का हिस्सा", value: "Part Of Breast" },
            ],
            tooltip:
              "अपने स्तन के दर्द के कवरेज की पहचान करें। दिए गए बटन का उपयोग करके स्पर्श करें और कवरेज चुनें। यह आपके डॉक्टर को दर्द के कवरेज को सही तरीके से समझने में मदद करता है।",
          },
        },
        children: [
          {
            id: 1,
            number: "Q2.2.1",
            optionType: "checkbox",
            translations: {
              en: {
                question: "Select the Affected Breast for Whole Breast Pain.",

                options: [
                  { id: "1", label: "Left", value: "Left" },
                  { id: "2", label: "Right", value: "Right" },
                ],
                tooltip: "",
              },
              bn: {
                question: "পূর্ণ স্তনের জন্য আক্রান্ত স্তন নির্বাচন করুন।",
                options: [
                  { id: "1", label: "বামে", value: "Left" },
                  { id: "2", label: "ডানে", value: "Right" },
                ],
                tooltip: "",
              },
              as: {
                question:
                  "সম্পূৰ্ণ স্তনৰ ব্যথাৰ বাবে আক্ৰান্ত স্তনটো বাছনি কৰক।",
                options: [
                  { id: "1", label: "বাওঁ", value: "Left" },
                  { id: "2", label: "সোঁম", value: "Right" },
                ],
                tooltip: "",
              },
              hi: {
                question: "पूरे स्तन के लिए प्रभावित स्तन चुनें।",
                options: [
                  { id: "1", label: "बाएँ", value: "Left" },
                  { id: "2", label: "दाएँ", value: "Right" },
                ],
                tooltip: "",
              },
            },
          },
          {
            id: 2,
            number: "Q2.2.2",
            optionType: "",
            translations: {
              en: {
                question: "Select the Affected Part of Breast.",
                options: [],
                tooltip: "",
              },
              bn: {
                question: "স্তনের আক্রান্ত অংশ নির্বাচন করুন।",
                options: [],
                tooltip: "",
              },
              as: {
                question: "স্তনৰ আক্ৰান্ত অংশ বাছনি কৰক।",
                options: [],
                tooltip: "",
              },
              hi: {
                question: "स्तन का प्रभावित हिस्सा चुनें।",
                options: [],
                tooltip: "",
              },
            },
          },
        ],
      },
      {
        id: 3,
        questionNumber: {
          en: "2.3",
          bn: "২.৩",
          as: "২.৩",
          hi: "२.३",
        },
        optionType: "custom",
        translations: {
          en: {
            question: "Can you express the pain type?",

            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "Don't know", value: "Don't know" },
            ],
            tooltip:
              "Select the type of pain you are experiencing: Dull, Sharp, Burning, Shooting, or Other. If 'Other,' use the text box to describe it in your own words. This helps your doctor understand your pain more clearly.",
          },
          bn: {
            question: "ব্যথা প্রকার বর্ণনা করুন?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "জানি না", value: "Don't know" },
            ],
            tooltip:
              "আপনি যে ধরণের ব্যথা অনুভব করছেন তা নির্বাচন করুন: মৃদু, তীক্ষ্ণ, জ্বলন্ত, গুলি-জাতীয়, বা অন্যান্য। যদি 'অন্যান্য' হয়, তবে টেক্সট বক্সে নিজের ভাষায় এটি বর্ণনা করুন। এটি আপনার ডাক্তারের জন্য আপনার ব্যথা আরও স্পষ্টভাবে বুঝতে সাহায্য করবে।",
          },
          as: {
            question: "ব্যথা প্রকার বর্ণনা করুন?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "জানি না", value: "Don't know" },
            ],
            tooltip:
              "আপুনি অনুভৱ কৰা বেদনা ধৰণ বাছনি কৰক: ম্লান, তীক্ষ্ণ, জ্বলন্ত, গুলিৰ দৰে বা অন্য। যদি 'অন্য' হয়, তেন্তে টেক্সট বক্সত নিজৰ ভাষাত বৰ্ণনা কৰক। এইটো আপোনাৰ ডাক্তৰে আপোনাৰ বেদনা অধিক স্পষ্টতাৰে বুজিবলৈ সহায় কৰে।",
          },
          hi: {
            question: "दर्द का प्रकार बताने कैसे है?",
            options: [
              { id: "1", label: "है", value: "Yes" },
              { id: "2", label: "जानते नहीं", value: "Don't know" },
            ],
            tooltip:
              "आप जिस प्रकार का दर्द महसूस कर रहे हैं उसे चुनें: मद्धम, तेज, जलन वाला, गोली की तरह, या अन्य। यदि 'अन्य' है, तो इसे टेक्स्ट बॉक्स में अपने शब्दों में वर्णित करें। इससे डॉक्टर को आपके दर्द को बेहतर तरीके से समझने में मदद मिलेगी।",
          },
        },
        children: [
          {
            id: 1,
            number: "Q2.3.1",
            optionType: "custom",
            translations: {
              en: {
                question: "Choose pain type?",
                options: [
                  { id: "1", label: "Dull", value: "Dull" },
                  { id: "2", label: "Sharp", value: "Sharp" },
                  { id: "3", label: "Burning", value: "Burning" },
                  { id: "4", label: "Shooting", value: "Shooting" },
                  { id: "5", label: "Other", value: "Other" },
                ],
                tooltip: "",
              },
              bn: {
                question: "বেদনার ধরন নির্বাচন করুন?",
                options: [
                  { id: "1", label: "মন্দ", value: "Dull" },
                  { id: "2", label: "তীক্ষ্ণ", value: "Sharp" },
                  { id: "3", label: "জ্বলন্ত", value: "Burning" },
                  { id: "4", label: "শুটিং", value: "Shooting" },
                  { id: "5", label: "অন্যান্য", value: "Other" },
                ],
                tooltip: "",
              },
              as: {
                question: "বেদনা ধৰণ বাছনি কৰক?",
                options: [
                  { id: "1", label: "মৃদু", value: "Dull" },
                  { id: "2", label: "তীক্ষ্ণ", value: "Sharp" },
                  { id: "3", label: "জ্বলন্ত", value: "Burning" },
                  { id: "4", label: "শুটিং", value: "Shooting" },
                  { id: "5", label: "অন্যান্য", value: "Other" },
                ],
                tooltip: "",
              },
              hi: {
                question: "दर्द का प्रकार चुनें?",
                options: [
                  { id: "1", label: "मंद", value: "Dull" },
                  { id: "2", label: "तेज़", value: "Sharp" },
                  { id: "3", label: "जलन", value: "Burning" },
                  { id: "4", label: "गोली मारने जैसा", value: "Shooting" },
                  { id: "5", label: "अन्य", value: "Other" },
                ],
                tooltip: "",
              },
            },
          },
          {
            id: 2,
            number: "Q2.3.2",
            optionType: "input",
            translations: {
              en: {
                question: "Specify other pain type.",
                textInput: "Specify other pain type",
                tooltip: "",
              },
              bn: {
                question: "অন্যান্য বেদনার ধরন উল্লেখ করুন",
                textInput: "অন্যান্য বেদনার ধরন উল্লেখ করুন",
                tooltip: "",
              },
              as: {
                question: "অন্যান্য বেদনা ধৰণ উল্লেখ কৰক",
                textInput: "অন্যান্য বেদনা ধৰণ উল্লেখ কৰ",
                tooltip: "",
              },
              hi: {
                question: "अन्य दर्द प्रकार निर्दिष्ट करें",
                textInput: "अन्य दर्द प्रकार निर्दिष्ट करें",
                tooltip: "",
              },
            },
          },
        ],
      },
      {
        id: 4,
        questionNumber: {
          en: "2.4",
          bn: "২.৪",
          as: "২.৪",
          hi: "२.४",
        },
        optionType: "custom",
        translations: {
          en: {
            question: "What is the onset of pain?",
            options: [
              { id: "1", label: "Sudden", value: "Sudden" },
              { id: "2", label: "Gradual", value: "Gradual" },
            ],
            tooltip:
              "Select how your pain began: Sudden (started quickly) or Gradual (developed over time). This helps your doctor understand the nature of your pain.",
          },
          bn: {
            question: "ব্যথা কখন শুরু হয়?",
            options: [
              { id: "1", label: "হঠাৎ", value: "Sudden" },
              { id: "2", label: "প্রক্রিয়ামত", value: "Gradual" },
            ],
            tooltip:
              "আপনার ব্যথা কীভাবে শুরু হয়েছিল তা নির্বাচন করুন: হঠাৎ (দ্রুত শুরু হয়েছে) বা ধীরে ধীরে (সময়ের সাথে বিকশিত হয়েছে)। এটি আপনার ডাক্তারের কাছে আপনার ব্যথার প্রকৃতি বুঝতে সহায়ক।",
          },
          as: {
            question: "ব্যথা কেতিয়া আৰম্ভ হয়?",
            options: [
              { id: "1", label: "হঠাৎ", value: "Sudden" },
              { id: "2", label: "পদক্ষেপৰ", value: "Gradual" },
            ],
            tooltip:
              "আপোনাৰ বেদনা কেনেকৈ আৰম্ভ হৈছিল চয়ন কৰক: হঠাৎ (দ্ৰুত আৰম্ভ) বা ধীৰে ধীৰে (সময়ৰ সৈতে বিকাশ)। এইটো আপোনাৰ ডাক্তৰে আপোনাৰ বেদনাৰ প্ৰকৃতি বুজিবলৈ সহায় কৰে।",
          },
          hi: {
            question: "दर्द कब शुरू हुआ?",
            options: [
              { id: "1", label: "अचानक", value: "Sudden" },
              { id: "2", label: "क्रमिक", value: "Gradual" },
            ],
            tooltip:
              "अपने दर्द की शुरुआत कैसे हुई, चुनें: अचानक (जल्दी शुरू हुआ) या धीरे-धीरे (समय के साथ विकसित हुआ)। यह आपके डॉक्टर को आपके दर्द की प्रकृति समझने में मदद करता है।",
          },
        },
      },
      {
        id: 5,
        questionNumber: {
          en: "2.5",
          bn: "২.৫",
          as: "২.৫",
          hi: "२.५",
        },
        optionType: "custom",
        translations: {
          en: {
            question: "How long the pain lasts?",
            options: [
              { id: "1", label: "Short", value: "Short (Few Minutes)" },
              { id: "2", label: "Long", value: "Long (Few Hours)" },
            ],
            tooltip:
              "Select how long the pain lasted: Short (a few minutes) or Long (a few hours). This helps track pain duration and its impact on your daily activities.",
          },
          bn: {
            question: "ব্যথা কতক্ষণ থাকে?",
            options: [
              { id: "1", label: "সংক্ষিপ্ত", value: "Short (Few Minutes)" },
              { id: "2", label: "দীর্ঘ", value: "Long (Few Hours)" },
            ],
            tooltip:
              "ব্যথা কতক্ষণ স্থায়ী ছিল তা নির্বাচন করুন: সংক্ষিপ্ত (কয়েক মিনিট) বা দীর্ঘ (কয়েক ঘন্টা)। এটি ব্যথার সময়কাল এবং আপনার দৈনন্দিন কার্যকলাপে এর প্রভাব ট্র্যাক করতে সহায়ক।",
          },
          as: {
            question: "ব্যথা কিমান সময় থাকে?",
            options: [
              { id: "1", label: "সংক্ষিপ্ত", value: "Short (Few Minutes)" },
              { id: "2", label: "দীঘল", value: "Long (Few Hours)" },
            ],
            tooltip:
              "বেদনা কিমান সময় স্থায়ী হৈছিল চয়ন কৰক: কম সময় (কেইটামান মিনিট) বা দীঘল সময় (কেইটামান ঘণ্টা)। এইটো বেদনা সময়সীমা আৰু দৈনন্দিন কাৰ্যৰ ওপৰত ইয়াৰ প্ৰভাৱ অনুসৰণ কৰাত সহায় কৰে।",
          },
          hi: {
            question: "दर्द कितने समय तक रहता है?",
            options: [
              { id: "1", label: "छोटा", value: "Short (Few Minutes)" },
              { id: "2", label: "लंबा", value: "Long (Few Hours)" },
            ],
            tooltip:
              "दर्द कितने समय तक रहा, चुनें: छोटा (कुछ मिनट) या लंबा (कुछ घंटे)। यह दर्द की अवधि और आपकी दैनिक गतिविधियों पर इसके प्रभाव को ट्रैक करने में मदद करता है।",
          },
        },
      },
      {
        id: 6,
        questionNumber: {
          en: "2.6",
          bn: "২.৬",
          as: "২.৬",
          hi: "२.६",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Triggering Factor?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "",
          },
          bn: {
            question: "প্ররোচনাকারী কারণ?",
            options: [
              { id: "1", label: "হ্যা", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "",
          },
          as: {
            question: "প্ৰৰোচনকাৰী কাৰণ?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
            ],
            tooltip: "",
          },
          hi: {
            question: "उत्तेजक कारण?",
            options: [
              { id: "1", label: "हां", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "",
          },
        },
        children: [
          {
            id: 1,
            number: "Q2.6.1",
            optionType: "custom",
            translations: {
              en: {
                question: "Specify Triggering Factor",
                options: [
                  { id: "1", label: "Movement", value: "Movement" },
                  {
                    id: "2",
                    label: "Certain Clothing",
                    value: "Certain Type of Clothing",
                  },
                  { id: "3", label: "Pressure", value: "Pressure" },
                  { id: "4", label: "Other", value: "Other" },
                ],
                otherOptions: "Specify Triggering Factor",
                tooltip: "",
              },
              bn: {
                question: "ট্রিগরিং ফ্যাক্টর উল্লেখ করুন",
                options: [
                  { id: "1", label: "আচরণ", value: "Movement" },
                  {
                    id: "2",
                    label: "নির্দিষ্ট ধরনের পোশাক",
                    value: "Certain Type of Clothing",
                  },
                  { id: "3", label: "চাপ", value: "Pressure" },
                  { id: "4", label: "অন্যান্য", value: "Other" },
                ],
                otherOptions: "ট্রিগরিং ফ্যাক্টর উল্লেখ করুন",
                tooltip: "",
              },
              as: {
                question: "ট্ৰিগাৰিং ফেক্টৰ উল্লেখ কৰক",
                options: [
                  { id: "1", label: "আচৰণ", value: "Movement" },
                  {
                    id: "2",
                    label: "নির্দিষ্ট পোচাক",
                    value: "Certain Type of Clothing",
                  },
                  { id: "3", label: "চাপ", value: "Pressure" },
                  { id: "4", label: "অন্যান্য", value: "Other" },
                ],
                otherOptions: "ট্ৰিগাৰিং ফেক্টৰ উল্লেখ কৰক",
                tooltip: "",
              },
              hi: {
                question: "ट्रिगरिंग फैक्टर निर्दिष्ट करें",
                options: [
                  { id: "1", label: "आंदोलन", value: "Movement" },
                  {
                    id: "2",
                    label: "विशेष प्रकार का कपड़ा",
                    value: "Certain Type of Clothing",
                  },
                  { id: "3", label: "दबाव", value: "Pressure" },
                  { id: "4", label: "अन्य", value: "Other" },
                ],
                otherOptions: "ट्रिगरिंग फैक्टर निर्दिष्ट करें",
                tooltip: "",
              },
            },
          },
        ],
      },
      {
        id: 7,
        questionNumber: {
          en: "2.7",
          bn: "২.৭",
          as: "২.৭",
          hi: "२.७",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Any relief measures to reduce pain.",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "",
          },
          bn: {
            question: "উপশমের পদ্ধতি?",
            options: [
              { id: "1", label: "হ্যা", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "",
          },
          as: {
            question: "উপশমৰ পদ্ধতি?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
            ],
            tooltip: "",
          },
          hi: {
            question: "राहत का तरीका?",
            options: [
              { id: "1", label: "हां", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "",
          },
        },

        children: [
          {
            id: 1,
            number: "Q2.7.1",
            optionType: "custom",
            translations: {
              en: {
                question: "Specify Relief Method",
                options: [
                  { id: "1", label: "Cold Compress", value: "Cold Compress" },
                  { id: "2", label: "Medication", value: "Medication" },
                  { id: "3", label: "Rest", value: "Rest" },
                  { id: "4", label: "Massage", value: "Massage" },
                  { id: "5", label: "Other", value: "Other" },
                ],
                otherOptions: "Specify Relief Method",
                tooltip: "",
              },
              bn: {
                question: "উপশমের পদ্ধতি উল্লেখ করুন",
                options: [
                  { id: "1", label: "ঠাণ্ডা প্রেস", value: "Cold Compress" },
                  { id: "2", label: "ওষুধ", value: "Medication" },
                  { id: "3", label: "বিশ্রাম", value: "Rest" },
                  { id: "4", label: "মালিশ", value: "Massage" },
                  { id: "5", label: "অন্যান্য", value: "Other" },
                ],
                otherOptions: "উপশমের পদ্ধতি উল্লেখ করুন",
                tooltip: "",
              },
              as: {
                question: "উপশমৰ পদ্ধতি উল্লেখ কৰক",
                options: [
                  { id: "1", label: "ঠাণ্ডা প্ৰেছ", value: "Cold Compress" },
                  { id: "2", label: "ঔষধ", value: "Medication" },
                  { id: "3", label: "বিশ্ৰাম", value: "Rest" },
                  { id: "4", label: "মালিছ", value: "Massage" },
                  { id: "5", label: "অন্য", value: "Other" },
                ],
                otherOptions: "উপশমৰ পদ্ধতি উল্লেখ কৰক",
                tooltip: "",
              },
              hi: {
                question: "राहत की विधि निर्दिष्ट करें",
                options: [
                  { id: "1", label: "ठंडा प्रेस", value: "Cold Compress" },
                  { id: "2", label: "दवा", value: "Medication" },
                  { id: "3", label: "आराम", value: "Rest" },
                  { id: "4", label: "मालिश", value: "Massage" },
                  { id: "5", label: "अन्य", value: "Other" },
                ],
                otherOptions: "राहत की विधि निर्दिष्ट करें",
                tooltip: "",
              },
            },
          },
        ],
      },
    ],
  },
  {
    id: 3,
    questionNumber: {
      en: "3",
      bn: "৩",
      as: "৩",
      hi: "३",
    },
    optionType: "radio",
    translations: {
      en: {
        question: "Anything more you want to record?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip: "Record 30 seconds of audio",
      },
      bn: {
        question: "আরও কিছু নথিভুক্ত করতে চান?",
        options: [
          { id: "1", label: "হ্যা", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip: "৩০ সেকেন্ডের অডিও রেকর্ড করুন",
      },
      as: {
        question: "আপুনি আৰু কিবা নথিভুক্ত কৰিব বিচাৰে নেকি?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip: "৩০ ছেকেণ্ডৰ অডিঅ' ৰেকৰ্ড কৰক।",
      },
      hi: {
        question: "और कुछ दर्ज करना चाहते हैं?",
        options: [
          { id: "1", label: "हां", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip: "30 सेकंड का ऑडियो रिकॉर्ड करें",
      },
    },
  },
];

export const languages = {
  en: "English",
  bn: "বাংলা",
  as: "অসমীয়া",
  hi: "हिन्दी",
};
