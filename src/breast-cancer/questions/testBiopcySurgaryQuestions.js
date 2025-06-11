export const BreastRelatedTestsQuestions = [
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
        question: "Any breast related tests done?",
        addLable: "Add test",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip: "Breast related tests",
      },
      bn: {
        question: "কোনো স্তন সম্পর্কিত পরীক্ষা করা হয়েছে?",
        addLable: "পরীক্ষা যোগ করুন",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip: "স্তন সম্পর্কিত পরীক্ষা",
      },
      as: {
        question: "কোনো স্তন সম্পর্কিত পৰীক্ষা কৰা হৈছে?",
        addLable: "পৰীক্ষা যোগ কৰক",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip: "স্তন সম্পর্কিত পৰীক্ষা",
      },
      hi: {
        question: "क्या कोई स्तन संबंधी परीक्षण किया गया है?",
        addLable: "परीक्षा जोड़ें",
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip: "स्तन संबंधी परीक्षण",
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
        optionType: "custom",
        translations: {
          en: {
            question: "Select test type",
            options: [
              { id: "1", label: "Mammogram", value: "Mammogram" },
              { id: "2", label: "Ultrasound", value: "Ultrasound" },
              { id: "3", label: "MRI", value: "MRI" },
              { id: "4", label: "CT Scan", value: "CT Scan" },
              { id: "5", label: "PET Scan", value: "PET Scan" },
              { id: "7", label: "Others", value: "Others" },
            ],
            tooltip: "Select test type",
          },
          bn: {
            question: "পরীক্ষার ধরন নির্বাচন করুন",

            options: [
              { id: "1", label: "ম্যামোগ্রাম", value: "Mammogram" },
              { id: "2", label: "আল্ট্রাসাউন্ড", value: "Ultrasound" },
              { id: "3", label: "এমআরআই", value: "MRI" },
              { id: "4", label: "সিটি স্ক্যান", value: "CT Scan" },
              { id: "5", label: "পিইটি স্ক্যান", value: "PET Scan" },
              { id: "7", label: "অন্যান্য ", value: "Others" },
            ],
            tooltip: "পরীক্ষার ধরন নির্বাচন করুন",
          },
          as: {
            question: "পৰীক্ষাৰ প্ৰকাৰ বাচি লওক",
            addLable: "পৰীক্ষা যোগ কৰক",
            options: [
              { id: "1", label: "ম্যামোগ্ৰাম ", value: "Mammogram" },
              { id: "2", label: "আলট্ৰাছাউণ্ড ", value: "Ultrasound" },
              { id: "3", label: "এম আৰ আই ", value: "MRI" },
              { id: "4", label: "চি টি স্কেন ", value: "CT Scan" },
              { id: "5", label: "পিই টি স্কেন ", value: "PET Scan" },
              { id: "7", label: "অন্যান্য ", value: "Others" },
            ],
            tooltip: "পৰীক্ষাৰ প্ৰকাৰ বাচি লওক",
          },
          hi: {
            question: "परीक्षा का प्रकार चुनें",
            addLable: "परीक्षा जोड़ें",
            options: [
              { id: "1", label: "मैमोग्राम ", value: "Mammogram" },
              { id: "2", label: "अल्ट्रासाउंड ", value: "Ultrasound" },
              { id: "3", label: "एम आर आई ", value: "MRI" },
              { id: "4", label: "सी टी स्केन ", value: "CT Scan" },
              { id: "5", label: "पी ई टी स्केन ", value: "PET Scan" },
              { id: "7", label: "अन्य ", value: "Others" },
            ],
            tooltip: "परीक्षा का प्रकार चुनें",
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
            optionType: "input",
            translations: {
              en: {
                question: "Specify other test name",
                textInput: "Enter other test name",
                tooltip: "Specify other test name",
              },
              bn: {
                question: "অন্যান্য পরীক্ষার নাম উল্লেখ করুন",
                textInput: "অন্যান্য পরীক্ষার নাম লিখুন",
                tooltip: "অন্যান্য পরীক্ষার নাম উল্লেখ করুন",
              },
              as: {
                question: "অন্যান্য পৰীক্ষাৰ নাম উল্লেখ কৰক",
                textInput: "অন্যান্য পৰীক্ষাৰ নাম লিখক",
                tooltip: "অন্যান্য পৰীক্ষাৰ নাম উল্লেখ কৰক",
              },
              hi: {
                question: "अन्य परीक्षा का नाम बताएं",
                textInput: "अन्य परीक्षा का नाम बताएं",
                tooltip: "अन्य परीक्षा का नाम बताएं",
              },
            },
          },
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
        optionType: "date",
        translations: {
          en: {
            question: "Test date",
            textInput: "Enter test date",
            tooltip: "Test date",
          },
          bn: {
            question: "পরীক্ষার তারিখ",
            textInput: "পরীক্ষার তারিখ লিখুন",
            tooltip: "পরীক্ষার তারিখ",
          },
          as: {
            question: "পৰীক্ষাৰ তাৰিখ",
            textInput: "পৰীক্ষাৰ তাৰিখ লিখক",
            tooltip: "পৰীক্ষাৰ তাৰিখ",
          },
          hi: {
            question: "परीक्षा की तारीख",
            textInput: "परीक्षा की तारीख दर्ज करें",
            tooltip: "परीक्षा की तारीख",
          },
        },
      },
      {
        id: 3,
        questionNumber: {
          en: "1.3",
          bn: "১.৩",
          as: "১.৩",
          hi: "१.৩",
        },
        optionType: "input",
        translations: {
          en: {
            question: "Doctor name",
            textInput: "Enter doctor name",
            tooltip: "Doctor name",
          },
          bn: {
            question: "ডাক্তাৰৰ নাম",
            textInput: "ডাক্তাৰৰ নাম লিখক",
            tooltip: "ডাক্তাৰৰ নাম",
          },
          as: {
            question: "ডাক্তাৰৰ নাম",
            textInput: "ডাক্তাৰৰ নাম লিখক",
            tooltip: "ডাক্তাৰৰ নাম",
          },
          hi: {
            question: "डॉक्टर का नाम",
            textInput: "डॉक्टर का नाम दर्ज करें",
            tooltip: "डॉक्टर का नाम",
          },
        },
      },
      {
        id: 4,
        questionNumber: {
          en: "1.4",
          bn: "১.৪",
          as: "১.৪",
          hi: "१.৪",
        },
        optionType: "upload",
        translations: {
          en: {
            question: "Upload report",
            textInput: "Upload report",
            tooltip: "Upload report",
          },
          bn: {
            question: "প্রতিবেদন আপলোড করুন",
            textInput: "প্রতিবেদন আপলোড করুন",
            tooltip: "প্রতিবেদন আপলোড করুন",
          },
          as: {
            question: "প্ৰতিবেদন আপলোড কৰক",
            textInput: "প্ৰতিবেদন আপলোড কৰক",
            tooltip: "প্ৰতিবেদন আপলোড কৰক",
          },
          hi: {
            question: "रिपोर्ट अपलोड करें",
            textInput: "रिपोर्ट अपलोड करें",
            tooltip: "रिपोर्ट अपलोड करें",
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
    optionType: "radio",
    translations: {
      en: {
        question: "Any biopsy done?",
        addLable: "Add biopsy",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip: "Biopsy done",
      },

      bn: {
        question: "কোনো বায়োপসি করা হয়েছে?",
        addLable: "বায়োপসি যোগ করুন",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip: "বায়োপসি করা হয়েছে",
      },
      as: {
        question: "কোনো বায়োপসি কৰা হৈছে?",
        addLable: "বায়োপসি যোগ কৰক",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip: "বায়োপসি কৰা হৈছে",
      },
      hi: {
        question: "क्या कोई बायोप्सी की गई है?",
        addLable: "बायोप्सी जोड़ें",
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip: "बायोप्सी की गई है",
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
        optionType: "date",
        translations: {
          en: {
            question: "Biopsy date",
            textInput: "Enter biopsy date",
            tooltip: "Biopsy date",
          },
          bn: {
            question: "বায়োপসির তারিখ",
            textInput: "বায়োপসির তারিখ লিখুন",
            tooltip: "বায়োপসির তারিখ",
          },
          as: {
            question: "বায়োপসিৰ তাৰিখ",
            textInput: "বায়োপসিৰ তাৰিখ লিখক",
            tooltip: "বায়োপসিৰ তাৰিখ",
          },
          hi: {
            question: "बायोप्सी की तारीख",
            textInput: "बायोप्सी की तारीख दर्ज करें",
            tooltip: "बायोप्सी की तारीख",
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
        optionType: "upload",
        translations: {
          en: {
            question: "Upload report",
            textInput: "Upload report",
            tooltip: "Upload report",
          },
          bn: {
            question: "প্রতিবেদন আপলোড করুন",
            textInput: "প্রতিবেদন আপলোড করুন",
            tooltip: "প্রতিবেদন আপলোড করুন",
          },
          as: {
            question: "প্ৰতিবেদন আপলোড কৰক ",
            textInput: "প্ৰতিবেদন আপলোড কৰক ",
            tooltip: "প্ৰতিবেদন আপলোড কৰক ",
          },
          hi: {
            question: "रिपोर्ट अपलोड करें ",
            textInput: "रिपोर्ट अपलोड करें ",
            tooltip: "रिपोर्ट अपलोड करें ",
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
    optionType: "radio",
    translations: {
      en: {
        question: "Any breast related surgeries done?",
        addLable: "Add surgery",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip: "Surgeries done",
      },
      bn: {
        question: "কোনো স্তন সম্পর্কিত অস্ত্রোপচার করা হয়েছে?",
        addLable: "অস্ত্রোপচার যোগ করুন",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip: "অস্ত্রোপচার করা হয়েছে",
      },
      as: {
        question: "কোনো স্তন সম্পর্কিত অস্ত্ৰোপচাৰ কৰা হৈছে? ",
        addLable: "অস্ত্ৰোপচাৰ যোগ কৰক ",
        options: [
          { id: "1", label: "হয় ", value: "Yes" },
          { id: "2", label: "নহয় ", value: "No" },
        ],
        tooltip: "অস্ত্ৰোপচাৰ কৰা হৈছে ",
      },
      hi: {
        question: "क्या कोई स्तन संबंधी सर्जरी की गई है?",
        addLable: "सर्जरी जोड़ें ",
        options: [
          { id: "1", label: "हाँ ", value: "Yes" },
          { id: "2", label: "नहीं ", value: "No" },
        ],
        tooltip: "सर्जरी की गई है ",
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
        optionType: "date",
        translations: {
          en: {
            question: "Surgery date",
            textInput: "Enter surgery date",
            tooltip: "Surgery date",
          },
          bn: {
            question: "অস্ত্রোপচারের তারিখ",
            textInput: "অস্ত্রোপচারের তারিখ লিখুন",
            tooltip: "অস্ত্রোপচারের তারিখ",
          },
          as: {
            question: "অস্ত্ৰোপচাৰৰ তাৰ িখ",
            textInput: "অস্ত্ৰোপচাৰৰ তাৰিখ লিখক",
            tooltip: "অস্ত্ৰোপচাৰৰ তাৰিখ",
          },
          hi: {
            question: "सर्जरी की तारीख",
            textInput: "सर्जरी की तारीख दर्ज करें",
            tooltip: "सर्जरी की तारीख",
          },
        },
      },
      {
        id: 2,
        questionNumber: {
          en: "3.2",
          bn: "৩.২",
          as: "৩.২",
          hi: "३.२",
        },
        optionType: "custom",
        translations: {
          en: {
            question: "Select Reason for surgery",
            options: [
              { id: "1", label: "Cancer", value: "Cancer" },
              { id: "2", label: "Lump", value: "Lump" },
              { id: "3", label: "Reconstruction", value: "Reconstruction" },
              { id: "4", label: "Infection", value: "Infection" },
              { id: "5", label: "Sample", value: "Sample" },
              { id: "6", label: "Others", value: "Others" },
            ],
            tooltip: "Select Reason for surgery",
          },
          bn: {
            question: "অস্ত্রোপচারের কারণ নির্বাচন করুন",
            options: [
              { id: "1", label: "ক্যান্সার", value: "Cancer" },
              { id: "2", label: "গাঁট", value: "Lump" },
              { id: "3", label: "পুনর্গঠন", value: "Reconstruction" },
              { id: "4", label: "সংক্রমণ", value: "Infection" },
              { id: "5", label: "নমুনা", value: "Sample" },
              { id: "6", label: "অন্যান্য", value: "Others" },
            ],
            tooltip: "অস্ত্রোপচারের কারণ নির্বাচন করুন",
          },
          as: {
            question: "অস্ত্ৰোপচ াৰৰ কাৰণ বাচি লওক",
            options: [
              { id: "1", label: "কেঞ্চাৰ", value: "Cancer" },
              { id: "2", label: "গাঁট", value: "Lump" },
              { id: "3", label: "পুনৰ্নিমাণ", value: "Reconstruction" },
              { id: "4", label: "সংক্রমণ", value: "Infection" },
              { id: "5", label: "নমুনা", value: "Sample" },
              { id: "6", label: "অন্যান্য", value: "Others" },
            ],
            tooltip: "অস্ত্ৰোপচাৰৰ কাৰণ বাচি লওক",
          },
          hi: {
            question: "सर्जरी का कारण चुनें",
            options: [
              { id: "1", label: "कैंसर", value: "Cancer" },
              { id: "2", label: "गांठ", value: "Lump" },
              { id: "3", label: "पुनर्निर्माण", value: "Reconstruction" },
              { id: "4", label: "संक्रमण", value: "Infection" },
              { id: "5", label: "नमूना", value: "Sample" },
              { id: "6", label: "अन्य", value: "Others" },
            ],
            tooltip: "सर्जरी का कारण चुनें",
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
            optionType: "input",
            translations: {
              en: {
                question: "Specify other reason",
                textInput: "Enter other reason",
                tooltip: "Specify other reason",
              },
              bn: {
                question: "অন্যান্য কারণ উল্লেখ করুন",
                textInput: "অন্যান্য কারণ লিখুন",
                tooltip: "অন্যান্য কারণ উল্লেখ করুন",
              },
              as: {
                question: "অন্যান্য কাৰণ উল্লেখ কৰক ",
                textInput: "অন্যান্য কাৰণ লিখক ",
                tooltip: "অন্যান্য কাৰণ উল্লেখ কৰক ",
              },
              hi: {
                question: "अन्य कारण बताएं ",
                textInput: "अन्य कारण बताएं ",
                tooltip: "अन्य कारण बताएं ",
              },
            },
          },
        ],
      },
    ],
  },
];
