export const breastHealthQuestions = [
  {
    id: 1,
    questionNumber: {
      en: "1",
      bn: "১",
      as: "১",
      hi: "१",
    },
    translations: {
      en: {
        question: "Is there any lumps in breast?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip:
          "Identify if you feel any lumps in your breast. Select soft or hard lumps to help assess possible concerns.",
      },
      bn: {
        question: "আপনার স্তনে কোনো গিঁট আছে কি?",
        options: [
          { id: "1", label: "হ্যা", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip:
          "আপনার স্তনে কোনো গাঁঠ অনুভব হলে তা শনাক্ত করুন। সম্ভাব্য সমস্যাগুলি মূল্যায়ন করতে নরম বা শক্ত গাঁঠ নির্বাচন করুন।",
      },
      as: {
        question: "আপোনাৰ স্তনত কোনো গাঁঠি আছে নেকি?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip:
          "আপোনাৰ স্তনত কোনো গাঠি অনুভৱ কৰিলে চিনাক্ত কৰক। সম্ভাব্য সমস্যা মূল্যায়ন কৰিবলৈ নরম বা কঠিন গাঠি বাছনি কৰক।",
      },
      hi: {
        question: "क्क्या आपके स्तन में कोई गांठ है?",
        options: [
          { id: "1", label: "हां", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip:
          "यदि आपको अपने स्तन में कोई गांठ महसूस हो तो उसकी पहचान करें। संभावित चिंताओं का आकलन करने के लिए नरम या कठोर गांठ चुनें।",
      },
    },
    children: [
      {
        id: 1,
        questionNumber: {
          en: "1.1",
          bn: "১.১",
          as: "১.১",
          hi: "१.१",
        },
        translations: {
          en: {
            question: "Choose the Lump Side?",
            options: [
              { id: "1", label: "Left", value: "Left" },
              { id: "2", label: "Right", value: "Right" },
            ],
            tooltip: "",
          },
          bn: {
            question: "লাম্পৰ পাশ নির্বাচন কৰুন?",
            options: [
              { id: "1", label: "বাম", value: "Left" },
              { id: "2", label: "ডান", value: "Right" },
            ],
          },
          as: {
            question: "লাম্পৰ পাশ নির্বাচন কৰুন?",
            options: [
              { id: "1", label: "বাম", value: "Left" },
              { id: "2", label: "ডান", value: "Right" },
            ],
          },
          hi: {
            question: "लंप का पक्ष चुनें?",
            options: [
              { id: "1", label: "बाएं", value: "Left" },
              { id: "2", label: "दाएं", value: "Right" },
            ],
          },
        },
        children: [
          {
            id: 1,
            questionNumber: {
              en: "1.1.1",
              bn: "১.১.১",
              as: "১.১.১",
              hi: "१.१.१",
            },
            translations: {
              en: {
                question: "Left side Lump types?",
                options: [
                  { id: "1", label: "Hard", value: "Hard" },
                  { id: "2", label: "Soft", value: "Soft" },
                ],
                tooltip: "",
              },
              bn: {
                question: "বাম পাশের লাম্পৰ ধৰণ?",
                options: [
                  { id: "1", label: "শক্ত", value: "Hard" },
                  { id: "2", label: "নরম", value: "Soft" },
                ],
                tooltip: "",
              },
              as: {
                question: "বাম পাশের লাম্পৰ ধৰণ?",
                options: [
                  { id: "1", label: "কঠিন", value: "Hard" },
                  { id: "2", label: "নরম", value: "Soft" },
                ],
                tooltip: "",
              },
              hi: {
                question: "बायीं तरफ का लंप प्रकार?",
                options: [
                  { id: "1", label: "कठिन", value: "Hard" },
                  { id: "2", label: "नरम", value: "Soft" },
                ],
                tooltip: "",
              },
            },
          },
          {
            id: 2,
            questionNumber: {
              en: "1.1.2",
              bn: "১.১.২",
              as: "১.১.২",
              hi: "१.१.२",
            },
            translations: {
              en: {
                question: "Right side Lump types?",
                options: [
                  { id: "1", label: "Hard", value: "Hard" },
                  { id: "2", label: "Soft", value: "Soft" },
                ],
                tooltip: "",
              },
              bn: {
                question: "ডান পাশের লাম্পৰ ধৰণ?",
                options: [
                  { id: "1", label: "শক্ত", value: "Hard" },
                  { id: "2", label: "নরম", value: "Soft" },
                ],
                tooltip: "",
              },
              as: {
                question: "ডান পাশের লাম্পৰ ধৰণ?",
                options: [
                  { id: "1", label: "কঠিন", value: "Hard" },
                  { id: "2", label: "নরম", value: "Soft" },
                ],
                tooltip: "",
              },
              hi: {
                question: "दाएं तरफ का लंप प्रकार?",
                options: [
                  { id: "1", label: "कठिन", value: "Hard" },
                  { id: "2", label: "नरम", value: "Soft" },
                ],
                tooltip: "",
              },
            },
          },
          {
            id: 3,
            translations: {
              en: {
                question: "Upload Left Lumps Image"
              },
              bn: {
                question: "বাম লাম্পের ছবি আপলোড করুন"
              },
              as: {
                question: "বাওঁফালৰ লাম্পৰ ছবি আপলোড কৰক"
              },
              hi: {
                question: "बाएं लंप की छवि अपलोड करें"
              }
            }
          },
          {
            id: 4,
            translations: {
              en: {
                question: "Upload Right Lumps Image"
              },
              bn: {
                question: "ডান লাম্পের ছবি আপলোড করুন"
              },
              as: {
                question: "সোঁফালৰ লাম্পৰ ছবি আপলোড কৰক"
              },
              hi: {
                question: "दाएं लंप की छवि अपलोड करें"
              }
            }
          }
        ],
      },
      {
        id: 2,
        questionNumber: {
          en: "1.2",
          bn: "১.২",
          as: "১.২",
          hi: "१.२",
        },
        translations: {
          en: {
            question: "Lump images?",
            options: [],
            tooltip: "",
          },
          bn: {
            question: "গাঁঠের ছবি?",
            options: [],
            tooltip: "",
          },
          as: {
            question: "গাঠিৰ ছবি?",
            options: [],
            tooltip: "",
          },
          hi: {
            question: "गांठ की तस्वीरें?",
            options: [],
            tooltip: "",
          },
        },
      },
    ],
  },
  {
    id: 2,
    questionNumber: {
      en: "2",
      bn: "২",
      as: "২",
      hi: "२",
    },
    translations: {
      en: {
        question: "Feeling any pain?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip:
          "Indicate if you are experiencing any pain in your breast. This helps monitor discomfort levels and potential causes",
      },
      bn: {
        question: "আপনার স্তনে কোনো ব্যথা অনুভূত হচ্ছে কি?",
        options: [
          { id: "1", label: "হ্যা", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip:
          "আপনার স্তনে কোনো ব্যথা হচ্ছে কিনা তা নির্দেশ করুন। এটি অস্বস্তি এবং সম্ভাব্য কারণগুলি ট্র্যাক করতে সহায়ক।",
      },
      as: {
        question: "আপোনাৰ স্তনত কোনো বেদনা অনুভৱ হৈছে নেকি?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip:
          "আপোনাৰ স্তনত কোনো বেদনা অনুভৱ হৈছে নেকি জাননী দিয়ক। এইটো অস্বস্তি আৰু সম্ভাব্য কাৰণসমূহৰ মনিটৰিংত সহায় কৰে।",
      },
      hi: {
        question: "क्या आप अपने स्तन में कोई दर्द महसूस कर रहे हैं?",
        options: [
          { id: "1", label: "हां", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip:
          "क्या आप अपने स्तन में किसी प्रकार का दर्द महसूस कर रहे हैं? यह असुविधा और संभावित कारणों को ट्रैक करने में मदद करता है।",
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
      en: "3",
      bn: "৩",
      as: "৩",
      hi: "३",
    },
    translations: {
      en: {
        question: "Any visible changes in the nipple?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip:
          "Check for changes in nipple appearance, such as shape, texture, or sensitivity. Noting these changes can help with early detection",
      },
      bn: {
        question: "স্তনে কোনো দৃশ্যমান পরিবর্তন আছে?",
        options: [
          { id: "1", label: "হ্যা", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip:
          "স্তনবৃন্তের আকার, টেক্সচার বা সংবেদনশীলতায় পরিবর্তন হয়েছে কিনা পরীক্ষা করুন। এই পরিবর্তনগুলি নোট করা প্রাথমিক সনাক্তকরণে সহায়ক হতে পারে।",
      },
      as: {
        question: "স্তনত কোনো দৃশ্যমান পৰিৱৰ্তন আছে?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip:
          "স্তনবৃন্তৰ আকাৰ, টেক্সচাৰ বা সংবেদনশীলতাত হোৱা পৰিৱৰ্তনসমূহ পৰীক্ষা কৰক। এইবোৰ চিনাক্ত কৰাটো আগতীয়াকৈ ধৰা-পোৰাৰ বাবে সহায়ক।",
      },
      hi: {
        question: "क्या निप्पल में कोई दृश्य परिवर्तन है?",
        options: [
          { id: "1", label: "हां", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip:
          "निप्पल के आकार, बनावट या संवेदनशीलता में बदलाव की जांच करें। इन परिवर्तनों को नोट करना प्रारंभिक पहचान में मदद कर सकता है।",
      },
    },
    children: [
      {
        id: 1,
        questionNumber: {
          en: "3.1",
          bn: "৩.১",
          as: "৩.১",
          hi: "३.१",
        },
        translations: {
          en: {
            question: "Is there any inversion of nipple?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip:
              "Check if the nipple appears inverted or pulled inward. This could indicate a potential issue that needs attention.",
          },
          bn: {
            question: "স্তনে কি কোনো উল্টানো আছে?",
            options: [
              { id: "1", label: "হ্যা", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip:
              "স্তনবৃন্ত ভিতরে ঢুকে গেছে বা উল্টে গেছে কিনা তা পরীক্ষা করুন। এটি একটি সম্ভাব্য সমস্যার ইঙ্গিত হতে পারে।",
          },
          as: {
            question: "স্তনত কোনো উলটোৱা আছে নেকি?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
            ],
            tooltip:
              "স্তনবৃন্ত ওলোটা বা ভিতৰলৈ টানা বুলি পৰীক্ষা কৰক। এইটো সম্ভাব্য সমস্যাৰ সংকেত হ’ব পাৰে।",
          },
          hi: {
            question: "क्या निप्पल उलटा है?",
            options: [
              { id: "1", label: "हां", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip:
              "निप्पल के अंदर धंसे या उलटे होने की जांच करें। यह किसी संभावित समस्या का संकेत हो सकता है।",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: {
              en: "3.1.1",
              bn: "৩.১.১",
              as: "৩.১.১",
              hi: "३.१.१",
            },
            translations: {
              en: {
                question: "Choose the type of inversion?",
                options: ["Flat", "Inverted"],
                tooltip: "",
              },
              bn: {
                question: "উলটানোর ধরন নির্বাচন করুন?",
                options: ["সমতল", "উল্টানো "],
                tooltip: "",
              },
              as: {
                question: "উলটোৱাৰ প্ৰকাৰ বাছনি কৰক? ",
                options: ["সমতল", "উলটোৱা"],
                tooltip: "",
              },
              hi: {
                question: "उलटने के प्रकार का चयन करें? ",
                options: ["समतल", "उल्टा"],
                tooltip: "",
              },
            },
          },
        ],
      },
      {
        id: 2,
        questionNumber: {
          en: "3.2",
          bn: "৩.২",
          as: "৩.২",
          hi: "३.२",
        },
        translations: {
          en: {
            question: "Any Discharge from Nipple?",
            options: [
              {
                id: "1",
                label: "Usual",
                value: "Usual",
              },
              {
                id: "2",
                label: "Unusual",
                value: "Unusual",
              },
            ],
            tooltip:
              "Report if there is any unusual discharge from the nipple, such as blood, pus, or clear fluid. This is an important symptom to note.",
          },
          bn: {
            question: "স্তনবৃন্ত থেকে কোনো নিঃসরণ হচ্ছে কি?",
            options: [
              {
                id: "1",
                label: "স্বাভাবিক",
                value: "Usual",
              },
              {
                id: "2",
                label: "অস্বাভাবিক",
                value: "Unusual",
              },
            ],
            tooltip:
              "স্তনবৃন্ত থেকে অস্বাভাবিক নিঃসরণ (যেমন রক্ত, পুঁজ বা পরিষ্কার তরল) হলে রিপোর্ট করুন। এটি একটি গুরুত্বপূর্ণ উপসর্গ।",
          },
          as: {
            question: "স্তনবৃন্তৰ পৰা কোনো নিস্কাশন হৈছে নেকি?",
            options: [
              {
                id: "1",
                label: "স্বাভাবিক",
                value: "Usual",
              },
              {
                id: "2",
                label: "অস্বাভাবিক",
                value: "Unusual",
              },
            ],
            tooltip:
              "স্তনবৃন্তৰ পৰা কোনো অস্বাভাৱিক নিস্কাশন (যেনে: ৰক্ত, পেক বা স্পষ্ট পদাৰ্থ) আছে জাননী দিয়ক। এইটো গুৰুত্বপূর্ণ লক্ষণ।",
          },
          hi: {
            question: "क्या निप्पल से कोई स्राव हो रहा है?",
            options: [
              {
                id: "1",
                label: "सामान्य",
                value: "Usual",
              },
              {
                id: "2",
                label: "असामान्य",
                value: "Unusual",
              },
            ],
            tooltip:
              "निप्पल से असामान्य स्राव (जैसे रक्त, मवाद, या साफ तरल) होने पर रिपोर्ट करें। यह एक महत्वपूर्ण लक्षण है।",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: {
              en: "3.2.1",
              bn: "৩.২.১",
              as: "৩.২.১",
              hi: "३.२.१",
            },
            translations: {
              en: {
                question: "Nipple dicharge colour?",
                options: [
                  { id: 1, label: "Bloody", value: "Bloody" },
                  { id: 2, label: "Clear", value: "Clear" },
                  { id: 3, label: "Other", value: "Other" },
                ],
                tooltip: "",
              },
              bn: {
                question: "স্তনবৃন্তের স্রাবের রং?",
                options: [
                  { id: 1, label: "রক্তাক্ত", value: "Bloody" },
                  { id: 2, label: "স্বচ্ছ", value: "Clear" },
                  { id: 3, label: "অন্যান্য", value: "Other" },
                ],
                tooltip: "",
              },
              as: {
                question: "স্তনৰ টুপিৰ নিৰ্গমনৰ ৰং?",
                options: [
                  { id: 1, label: "ৰক্তাক্ত", value: "Bloody" },
                  { id: 2, label: "স্বচ্ছ", value: "Clear" },
                  { id: 3, label: "অন্যান্য", value: "Other" },
                ],
                tooltip: "",
              },
              hi: {
                question: "निप्पल स्राव का रंग?",
                options: [
                  { id: 1, label: "रक्तयुक्त", value: "Bloody" },
                  { id: 2, label: "स्वच्छ", value: "Clear" },
                  { id: 3, label: "अन्य", value: "Other" },
                ],
                tooltip: "",
              },
            },
          },
        ],
      },
    ],
  },
  {
    id: 4,
    questionNumber: {
      en: "4",
      bn: "৪",
      as: "৪",
      hi: "४",
    },
    translations: {
      en: {
        question: "Is there any Rashes in Breast?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip:
          "Check for any redness, rashes, or irritation on the breast. This can help identify skin-related issues or infections.",
      },
      bn: {
        question: "স্তনে কোনো ফুসকুড়ি বা লাল দাগ আছে কি?",
        options: [
          { id: "1", label: "হ্যা", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip:
          "স্তনে কোনো লালচে দাগ, ফুসকুড়ি বা জ্বালা আছে কিনা তা পরীক্ষা করুন। এটি ত্বকের সমস্যাগুলি বা সংক্রমণ চিহ্নিত করতে সাহায্য করতে পারে।",
      },
      as: {
        question: "স্তনত কোনো দানা বা ৰঙা দাগ আছে নেকি?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip:
          "স্তনত কোনো ৰঙা দাগ, দানা বা উত্তেজনা আছে জাননী দিয়ক। এইটো ছালৰ সমস্যাৰ সংকেত চিনাক্ত কৰাত সহায় কৰিব।",
      },
      hi: {
        question: "क्या स्तन में कोई दाने या लाल चकत्ते हैं?",
        options: [
          { id: "1", label: "हां", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip:
          "स्तन पर कोई लाली, दाने या जलन की जांच करें। यह त्वचा से संबंधित समस्याओं या संक्रमण का पता लगाने में मदद कर सकता है।",
      },
    },
    children: [
      {
        id: 1,
        questionNumber: {
          en: "4.1",
          bn: "৪.১",
          as: "৪.১",
          hi: "४.१",
        },
        translations: {
          en: {
            question: "Upload Rash Image",
            options: [],
            tooltip: "",
          },
          bn: {
            question: "চর্মরোগের ছবি আপলোড করুন",
            options: [],
            tooltip: "",
          },
          as: {
            question: "ছালৰোগৰ ছবি আপলোড কৰক",
            options: [],
            tooltip: "",
          },
          hi: {
            question: "चकत्ते की तस्वीर अपलोड करें",
            options: [],
            tooltip: "",
          },
        },
      },
    ],
  },
  {
    id: 5,
    questionNumber: {
      en: "5",
      bn: "৫",
      as: "৫",
      hi: "५",
    },
    translations: {
      en: {
        question: "Change in breast structure?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip: "",
      },
      bn: {
        question: "স্তনের সামঞ্জস্যে কোনো পরিবর্তন?",
        options: [
          { id: "1", label: "হ্যা", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip: "",
      },
      as: {
        question: "স্তনৰ সমমিতিত কোনো পৰিৱৰ্তন?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या स्तन की समरूपता में कोई बदलाव है?",
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
        questionNumber: {
          en: "5.1",
          bn: "৫.১",
          as: "৫.১",
          hi: "५.१",
        },
        translations: {
          en: {
            question: "Choose breast symmetry?",
            options: ["Symmetric", "Asymmetric"],
            tooltip: "",
          },
          bn: {
            question: "স্তনের সামঞ্জস্য নির্বাচন করুন।",
            options: ["সমমিতি", "অসমমিতি"],
            tooltip: "",
          },
          as: {
            question: "স্তনৰ সমমিতি বাছনি কৰক।",
            options: ["সমমিতি", "অসমমিতি"],
            tooltip: "",
          },
          hi: {
            question: "स्तन की समरूपता चुनें।",
            options: ["सममित", "असममित "],
            tooltip: "",
          },
        },
      },
    ],
  },
  {
    id: 6,
    questionNumber: {
      en: "6",
      bn: "৬",
      as: "৬",
      hi: "६",
    },
    translations: {
      en: {
        question: "Any visible change in Breast size?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip:
          "Monitor changes in breast size, such as swelling or shrinking. Sudden changes may indicate an underlying condition",
      },
      bn: {
        question: "স্তনের আকারে কোনো দৃশ্যমান পরিবর্তন আছে কি?",
        options: [
          { id: "1", label: "হ্যা", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip:
          "স্তনের আকারে পরিবর্তন, যেমন ফোলাভাব বা ছোট হওয়া, নজরে রাখুন। হঠাৎ পরিবর্তন একটি অন্তর্নিহিত সমস্যার ইঙ্গিত দিতে পারে।",
      },
      as: {
        question: "স্তনৰ আকাৰত কোনো দৃশ্যমান পৰিৱৰ্তন হৈছে নেকি?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip:
          "স্তনৰ আকাৰত হোৱা পৰিৱৰ্তন, যেনে: স্ফীত বা সৰু হোৱাৰ পৰীক্ষা কৰক। হঠাৎ হোৱা পৰিৱৰ্তন সম্ভাব্য সমস্যাৰ সংকেত দিব পাৰে।",
      },
      hi: {
        question: "क्या स्तन के आकार में कोई दिखाई देने वाला परिवर्तन है?",
        options: [
          { id: "1", label: "हां", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip:
          "स्तन के आकार में बदलाव की निगरानी करें, जैसे सूजन या सिकुड़न। अचानक बदलाव किसी समस्या का संकेत दे सकते हैं।",
      },
    },
    children: [
      {
        id: 1,
        questionNumber: {
          en: "6.1",
          bn: "৬.১",
          as: "৬.১",
          hi: "६.१",
        },
        translations: {
          en: {
            question: "Choose change in size?",
            options: ["Increased", "Decreased"],
            tooltip: "",
          },
          bn: {
            question: "আকারের পরিবর্তন নির্বাচন করুন।",
            options: ["বৃদ্ধি", "হ্ৰাস"],
            tooltip: "",
          },
          as: {
            question: "আকাৰৰ পৰিৱৰ্তন বাছনি কৰক।",
            options: ["বৃদ্ধি", "হ্ৰাস"],
            tooltip: "",
          },
          hi: {
            question: "आकार में बदलाव चुनें।",
            options: ["वृद्धि", "कमी"],
            tooltip: "",
          },
        },
      },
    ],
  },
  {
    id: 7,
    questionNumber: {
      en: "7",
      bn: "৭",
      as: "৭",
      hi: "७",
    },
    translations: {
      en: {
        question: "Is there any Swelling in Breast?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip:
          "Identify if there is any unusual swelling in or around the breast. Swelling may indicate inflammation or other concerns.",
      },
      bn: {
        question: "স্তনে কোনো ফোলাভাব আছে কি?",
        options: [
          { id: "1", label: "হ্যা", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip:
          "স্তনে বা তার চারপাশে কোনো অস্বাভাবিক ফোলাভাব চিহ্নিত করুন। ফোলাভাব প্রদাহ বা অন্যান্য সমস্যার ইঙ্গিত দিতে পারে।",
      },
      as: {
        question: "স্তনত কোনো স্ফীতি আছে নেকি?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip:
          "স্তনত বা চাৰিওফালে কোনো অস্বাভাৱিক স্ফীতি আছে জাননী দিয়ক। স্ফীতি প্ৰদাহ বা অন্য সমস্যাৰ সংকেত হ’ব পাৰে।",
      },
      hi: {
        question: "क्या स्तन में कोई सूजन है?",
        options: [
          { id: "1", label: "हां", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip:
          "स्तन में या उसके आसपास किसी असामान्य सूजन की पहचान करें। सूजन सूजन या अन्य समस्याओं का संकेत दे सकती है।",
      },
    },
    children: [
      {
        id: 1,
        questionNumber: {
          en: "7.1",
          bn: "৭.১",
          as: "৭.১",
          hi: "७.१",
        },
        translations: {
          en: {
            question: "Swelling in which breast(Left or Right)?",
            options: [
              { id: "1", label: "Left", value: "Left" },
              { id: "2", label: "Right", value: "Right" },
            ],
            tooltip: "",
          },
          bn: {
            question: "কোন স্তনে ফোলা আছে (বাম নাকি ডান)?",
            options: [
              { id: "1", label: "বাম", value: "Left" },
              { id: "2", label: "ডান", value: "Right" },
            ],
            tooltip: "",
          },
          as: {
            question: "কোন স্তনত ফুলি উঠিছে (বাওঁ নে সোঁ)?",
            options: [
              { id: "1", label: "বাওঁ", value: "Left" },
              { id: "2", label: "সোঁ", value: "Right" },
            ],
            tooltip: "",
          },
          hi: {
            question: "किस स्तन में सूजन है (बायां या दायां)?",
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
        questionNumber: {
          en: "7.2",
          bn: "৭.২",
          as: "৭.২",
          hi: "७.२",
        },
        translations: {
          en: {
            question: "Upload Left Swelling Image"
          },
          bn: {
            question: "বাম স্তনের ফোলার ছবি আপলোড করুন"
          },
          as: {
            question: "বাওঁফালৰ ফুলি উঠাৰ ছবি আপলোড কৰক"
          },
          hi: {
            question: "बाएं स्तन की सूजन की तस्वीर अपलोड करें"
          }
        },
      },
      {
        id: 3,
        questionNumber: {
          en: "7.3",
          bn: "৭.৩",
          as: "৭.৩",
          hi: "७.३",
        },
        translations: {
          en: {
            question: "Upload Right Swelling Image"
          },
          bn: {
            question: "ডান স্তনের ফোলার ছবি আপলোড করুন"
          },
          as: {
            question: "সোঁফালৰ ফুলি উঠাৰ ছবি আপলোড কৰক"
          },
          hi: {
            question: "दाएं स्तन की सूजन की तस्वीर अपलोड करें"
          }
        },
      },
    ],
  },
  {
    id: 8,
    questionNumber: {
      en: "8",
      bn: "৮",
      as: "৮",
      hi: "८",
    },
    translations: {
      en: {
        question: "Is there any itching in Breast?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip:
          "Check for persistent itching or irritation on the breast. This may indicate an allergic reaction or skin condition.",
      },
      bn: {
        question: "স্তনে কোনো চুলকানি আছে কি?",
        options: [
          { id: "1", label: "হ্যা", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip:
          "স্তনে স্থায়ী চুলকানি বা জ্বালাপোড়া হলে পরীক্ষা করুন। এটি একটি অ্যালার্জির প্রতিক্রিয়া বা ত্বকের সমস্যার ইঙ্গিত হতে পারে।",
      },
      as: {
        question: "স্তনত কোনো চুলকনি আছে নেকি?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip:
          "স্তনত স্থায়ী চুলকনি বা উত্তেজনা আছে জাননী দিয়ক। এইটো এলাৰ্জিক প্ৰতিক্ৰিয়া বা ছালৰ সমস্যাৰ সংকেত হ’ব পাৰে।",
      },
      hi: {
        question: "क्या स्तन में कोई खुजली है?",
        options: [
          { id: "1", label: "हां", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip:
          "स्तन पर लगातार खुजली या जलन की जांच करें। यह एलर्जी प्रतिक्रिया या त्वचा की समस्या का संकेत हो सकता है।",
      },
    },
    children: [
      {
        id: 1,
        questionNumber: {
          en: "8.1",
          bn: "৮.১",
          as: "৮.১",
          hi: "८.१",
        },
        translations: {
          en: {
            question: "Itching in which breast(Left or Right)?",
            options: [
              { id: "1", label: "Left", value: "Left" },
              { id: "2", label: "Right", value: "Right" },
            ],
            tooltip: "",
          },
          bn: {
            question: "কোন স্তনে চুলকানি আছে (বাম নাকি ডান)?",
            options: [
              { id: "1", label: "বাম", value: "Left" },
              { id: "2", label: "ডান", value: "Right" },
            ],
            tooltip: "",
          },
          as: {
            question: "কোন স্তনত চুলকনি আছে (বাওঁ নে সোঁ)?",
            options: [
              { id: "1", label: "বাওঁ", value: "Left" },
              { id: "2", label: "সোঁ", value: "Right" },
            ],
            tooltip: "",
          },
          hi: {
            question: "किस स्तन में खुजली है (बायां या दायां)?",
            options: [
              { id: "1", label: "बाएँ", value: "Left" },
              { id: "2", label: "दाएँ", value: "Right" },
            ],
            tooltip: "",
          },
        },
      },
    ],
  },
];

export const languages = {
  en: "English",
  bn: "বাংলা",
  as: "অসমীয়া",
  hi: "हिन्दी",
};
