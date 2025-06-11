export const MenstrualHistoryQuestions = [
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
        question: "Have you started menstruating?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip: "Indicate if menstruation has started",
      },
      bn: {
        question: "আপনি কি মাসিক শুরু করেছেন?",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip: "মাসিক শুরু হয়েছে কিনা তা নির্দেশ করুন",
      },
      as: {
        question: "আপুনি ঋতুস্ৰাৱ আৰম্ভ কৰিছে নে নাই?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip: "ঋতুস্ৰাৱ আৰম্ভ হৈছে নে নাই নিৰ্ধাৰণ কৰক",
      },
      hi: {
        question: "क्या आपने मासिक धर्म शुरू किया है?",
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip: "मासिक धर्म शुरू हुआ है या नहीं यह दर्शाएं",
      },
    },
    children: [
      // Age of menstruation
      {
        id: 1.1,
        questionNumber: {
          en: "1.1",
          bn: "১.১",
          as: "১.১",
          hi: "१.१",
        },
        optionType: "input",
        translations: {
          en: {
            question:
              "What was your age (in years) when you started menstruating?",
            textInput: "Enter your age",
            tooltip: "Age when menstruation started",
          },
          bn: {
            question: "আপনি কখন ঋতুস্রাব শুরু করেছিলেন?",
            textInput: "আপনার বয়স লিখুন",
            tooltip: "ঋতুস্রাব শুরু হওয়ার বয়স",
          },
          as: {
            question: "আপুনি কেতিয়া ঋতুস্ৰাৱ আৰম্ভ কৰিছিল?",
            textInput: "আপোনাৰ বয়স লিখক",
            tooltip: "ঋতুস্ৰাৱ আৰম্ভ কৰাৰ বয়স",
          },
          hi: {
            question: "आपने कब मासिक धर्म शुरू किया था?",
            textInput: "अपनी उम्र दर्ज करें",
            tooltip: "मासिक धर्म शुरू होने की उम्र",
          },
        },
      },
      // Menstrual cycle
      {
        id: 1.2,
        questionNumber: {
          en: "1.2",
          bn: "১.২",
          as: "১.২",
          hi: "१.२",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Is your menstrual cycle normal?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "Menstrual cycle status",
          },
          bn: {
            question: "আপনার ঋতুস্রাব স্বাভাবিক কি?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "ঋতুস্রাবের অবস্থা",
          },
          as: {
            question: "আপোনাৰ ঋতুস্ৰাৱ স্বাভাৱিক নে?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
            ],
            tooltip: "ঋতুস্ৰাৱৰ অৱস্থা",
          },
          hi: {
            question: "क्या आपका मासिक धर्म सामान्य है?",
            options: [
              { id: "1", label: "हाँ", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "मासिक धर्म की स्थिति",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: {
              en: "1.2.1",
              bn: "১.২.১",
              as: "১.২.১",
              hi: "१.२.१",
            },
            optionType: "input",
            translations: {
              en: {
                question: "Average duration of menstrual cycle (in days)",
                textInput: "Enter duration",
                tooltip: "Duration of menstrual cycle",
              },
              bn: {
                question: "মাসিকের গড় সময়কাল (দিনে)",
                textInput: "সময়কাল লিখুন",
                tooltip: "মাসিকের সময়কাল",
              },
              as: {
                question: "ঋতুস্রাৱৰ গড় সময়কাল (দিনত)",
                textInput: "সময়কাল লিখক",
                tooltip: "ঋতুস্রাৱৰ সময়কাল",
              },
              hi: {
                question: "मासिक धर्म का औसत समय (दिनों में)",
                textInput: "अवधि दर्ज करें",
                tooltip: "मासिक धर्म की अवधि",
              },
            },
          },
        ],
      },
      // Menopause
      {
        id: 1.3,
        questionNumber: {
          en: "1.3",
          bn: "১.৩",
          as: "১.৩",
          hi: "१.३",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Have your reached menopause yet?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "Menopause status",
          },
          bn: {
            question: "আপনি কি বর্তমানে মেনোপজে আছেন?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "মেনোপজের অবস্থা",
          },
          as: {
            question: "আপুনি কি বৰ্তমান মেনোপজত আছে?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
              ,
            ],
            tooltip: "মেনোপজৰ অৱস্থা",
          },
          hi: {
            question: "क्या आप वर्तमान में रजोनिवृत्ति में हैं?",
            options: [
              { id: "1", label: "हाँ", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "रजोनिवृत्ति की स्थिति",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: {
              en: "1.3.1",
              bn: "১.৩.১",
              as: "১.৩.১",
              hi: "१.३.१",
            },
            optionType: "input",
            translations: {
              en: {
                question: "Last age of menstruation",
                textInput: "Enter age",
                tooltip: "Last menstruation age",
              },
              bn: {
                question: "মাসিকের শেষ বয়স",
                textInput: "বয়স লিখুন",
                tooltip: "শেষ মাসিকের বয়স",
              },
              as: {
                question: "ঋতুস্রাৱৰ শেষ বয়স",
                textInput: "বয়স লিখক",
                tooltip: "শেষ ঋতুস্রাৱৰ বয়স",
              },
              hi: {
                question: "मासिक धर्म की अंतिम आयु",
                textInput: "आयु दर्ज करें",
                tooltip: "अंतिम मासिक धर्म की आयु",
              },
            },
          },
          {
            id: 2,
            questionNumber: {
              en: "1.3.2",
              bn: "১.৩.২",
              as: "১.৩.২",
              hi: "१.৩.२",
            },
            optionType: "radio",
            translations: {
              en: {
                question: "Bleeding after menopause?",
                options: [
                  { id: "1", label: "Yes", value: "Yes" },
                  { id: "2", label: "No", value: "No" },
                ],
                tooltip: "Bleeding after menopause",
              },
              bn: {
                question: "মেনোপজের পরে কি রক্তপাত হয়?",
                options: [
                  { id: "1", label: "হ্যাঁ", value: "Yes" },
                  { id: "2", label: "না", value: "No" },
                ],
                tooltip: "মেনোপজের পরে রক্তপাত হয় কিনা",
              },
              as: {
                question: "মেনোপজৰ পিছত কি ৰক্তপাত হয়?",
                options: [
                  { id: "1", label: "হয়", value: "Yes" },
                  { id: "2", label: "নহয়", value: "No" },
                ],
                tooltip: "মেনোপজৰ পিছত ৰক্তপাত হয় নে নাই",
              },
              hi: {
                question: "क्या रजोनिवृत्ति के बाद रक्तस्राव होता है?",
                options: [
                  { id: "1", label: "हाँ", value: "Yes" },
                  { id: "2", label: "नहीं", value: "No" },
                ],
                tooltip: "रजोनिवृत्ति के बाद रक्तस्राव",
              },
            },
          },
          {
            id: 3,
            questionNumber: {
              en: "1.3.1",
              bn: "১.৩.১",
              as: "১.৩.১",
              hi: "१.३.১",
            },
            optionType: "checkbox",
            translations: {
              en: {
                question: "Do you have any menopause symptoms?",
                options: [
                  { id: "1", label: "Hot flashes", value: "Hot flashes" },
                  { id: "2", label: "Mood swings", value: "Mood swings" },
                  { id: "3", label: "Sleep disturbances", value: "Sleep disturbances" },
                  { id: "4", label: "Vaginal dryness", value: "Vaginal dryness" },
                  { id: "5", label: "None", value: "None" },
                ],
                tooltip: "Menopause symptoms",
              },
              bn: {
                question: "আপনার কি মেনোপজের উপসর্গ আছে?",
                options: [
                  { id: "1", label: "গরম অনুভূতি", value: "Hot flashes" },
                  { id: "2", label: "মেজাজ পরিবর্তন", value: "Mood swings" },
                  { id: "3", label: "ঘুমের সমস্যা", value: "Sleep disturbances" },
                  { id: "4", label: "যোনির শুষ্কতা", value: "Vaginal dryness" },
                  { id: "5", label: "কোনোটা নাই", value: "None" },
                ],
                tooltip: "মেনোপজের উপসর্গ",
              },
              as: {
                question: "আপোনাৰ কি মেনোপজৰ উপসৰ্গ আছে নে?",
                options: [
                  { id: "1", label: "গৰম অনুভৱ", value: "Hot flashes" },
                  { id: "2", label: "মেজাজৰ পৰিৱৰ্তন", value: "Mood swings" },
                  { id: "3", label: "ঘুমৰ সমস্যা", value: "Sleep disturbances" },
                  { id: "4", label: "যোনিৰ শূণ্যতা", value: "Vaginal dryness" },
                  { id: "5", label: "কোনো নাই", value: "None" },
                ],
                tooltip: "মেনোপজৰ উপসৰ্গ",
              },
              hi: {
                question: "क्या आपको रजोनिवृत्ति के लक्षण हैं?",
                options: [
                  { id: "1", label: "गर्मी की लहरें", value: "Hot flashes" },
                  { id: "2", label: "मूड स्विंग्स", value: "Mood swings" },
                  { id: "3", label: "नींद में परेशानी", value: "Sleep disturbances" },
                  { id: "4", label: "योनि सूखापन", value: "Vaginal dryness" },
                  { id: "5", label: "कोई नहीं", value: "None" },
                ],
                tooltip: "रजोनिवृत्ति के लक्षण",
              },
            },
          }
        ],
      },
      // Flow
      {
        id: 1.4,
        questionNumber: {
          en: "1.4",
          bn: "১.৪",
          as: "১.৪",
          hi: "१.४",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Flow of menstruation is?",
            options: [
              { id: "1", label: "Normal", value: "Normal" },
              { id: "2", label: "Heavy", value: "Heavy" },
              { id: "3", label: "Light", value: "Light" },
            ],
            tooltip: "Menstruation flow status",
          },
          bn: {
            question: "মাসিকের প্রবাহ কি?",
            options: [
              { id: "1", label: "স্বাভাবিক", value: "Normal" },
              { id: "2", label: "ভারী", value: "Heavy" },
              { id: "3", label: "হালকা", value: "Light" },
            ],
            tooltip: "মাসিকের প্রবাহের অবস্থা",
          },
          as: {
            question: "ঋতুস্রাৱৰ প্ৰবাহ কি?",
            options: [
              { id: "1", label: "স্বাভাৱিক", value: "Normal" },
              { id: "2", label: "ভাৰী", value: "Heavy" },
              { id: "3", label: "হালকা", value: "Light" },
            ],
            tooltip: "ঋতুস্রাৱৰ প্ৰবাহৰ অৱস্থা",
          },
          hi: {
            question: "मासिक धर्म का प्रवाह क्या है?",
            options: [
              { id: "1", label: "सामान्य", value: "Normal" },
              { id: "2", label: "भारी", value: "Heavy" },
              { id: "3", label: "हल्का", value: "Light" },
            ],
            tooltip: "मासिक धर्म के प्रवाह की स्थिति",
          },
        },

      },
      // Clots
      {
        id: 1.5,
        questionNumber: {
          en: "1.5",
          bn: "১.৫",
          as: "১.৫",
          hi: "१.৫",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Any Clots during menstruation?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "Clots during menstruation",
          },
          bn: {
            question: "মাসিকের সময় কি রক্ত জমাট বাঁধে?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "মাসিকের সময় রক্ত জমাট বাঁধে কিনা",
          },
          as: {
            question: "ঋতুস্রাৱৰ সময়ত কি ৰক্ত জমাট বাঁধে?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
            ],
            tooltip: "ঋতুস্রাৱৰ সময়ত ৰক্ত জমাট বাঁধে নে নাই",
          },
          hi: {
            question: "क्या मासिक धर्म के दौरान रक्त का थक्का बनता है?",
            options: [
              { id: "1", label: "हाँ", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "मासिक धर्म के दौरान रक्त का थक्का बनता है या नहीं",
          },
        },
      },
      // Spotting
      {
        id: 1.6,
        questionNumber: {
          en: "1.6",
          bn: "১.৬",
          as: "১.৬",
          hi: "१.৬",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Spotting between periods?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "Spotting between periods",
          },
          bn: {
            question: "মাসিকের মধ্যে কি রক্তপাত হয়?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "মাসিকের মধ্যে রক্তপাত হয় কিনা",
          },
          as: {
            question: "ঋতুস্রাৱৰ মাজত কি ৰক্তপাত হয়?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
            ],
            tooltip: "ঋতুস্রাৱৰ মাজত ৰক্তপাত হয় নে নাই",
          },
          hi: {
            question: "क्या मासिक धर्म के बीच में रक्तस्राव होता है?",
            options: [
              { id: "1", label: "हाँ", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "मासिक धर्म के बीच में रक्तस्राव होता है या नहीं",
          },
        },
      },
      // Hormone therapy
      {
        id: 1.7,
        questionNumber: {
          en: "2",
          bn: "২",
          as: "২",
          hi: "२",
        },
        optionType: "radio",
        translations: {
          en: {
            // Hormone therapy
            question: "Have you ever taken hormone therapy?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "Hormone therapy status",
          },
          bn: {
            question: "আপনি কি কখনও হরমোন থেরাপি নিয়েছেন?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "হরমোন থেরাপির অবস্থা",
          },
          as: {
            question: "আপুনি কি কেতিয়াবা হৰম'ন থেৰাপী লৈছে নে?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
            ],
            tooltip: "হৰম'ন থেৰাপীৰ অৱস্থা",
          },
          hi: {
            question: "क्या आपने कभी हार्मोन थेरेपी ली है?",
            options: [
              { id: "1", label: "हाँ", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "हार्मोन थेरेपी की स्थिति",
          },
        },
      },
    ],
  },
];

export const pregnancyQuestions = [
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
        question: "Have you had any pregnancies?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip: "Pregnancy history",
      },
      bn: {
        question: "আপনার কি কোনো গর্ভাবস্থা হয়েছে?",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip: "গর্ভাবস্থার ইতিহাস",
      },
      as: {
        question: "আপোনাৰ কি কোনো গৰ্ভাৱস্থা হৈছে নে?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
          ,
        ],
        tooltip: "গৰ্ভাৱস্থাৰ ইতিহাস",
      },
      hi: {
        question: "क्या आपने गर्भधारण किया है?",
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip: "गर्भावस्था का इतिहास",
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
        optionType: "input",
        translations: {
          en: {
            question: "How many pregnancies have you had?",
            textInput: "Enter number of pregnancies",
            tooltip: "Number of pregnancies",
          },
          bn: {
            question: "আপনার কতটি গর্ভাবস্থা হয়েছে?",
            textInput: "গর্ভাবস্থার সংখ্যা লিখুন",
            tooltip: "গর্ভাবস্থার সংখ্যা",
          },
          as: {
            question: "আপোনাৰ কিমান গৰ্ভাৱস্থা হৈছে?",
            textInput: "গৰ্ভাৱস্থাৰ সংখ্যা লিখক",
            tooltip: "গৰ্ভাৱস্থাৰ সংখ্যা",
          },
          hi: {
            question: "आपकी कितनी गर्भधारणाएँ हुई हैं?",
            textInput: "गर्भधारणाओं की संख्या दर्ज करें",
            tooltip: "गर्भधारणाओं की संख्या",
          },
        },
      },
      {
        id: 2,
        questionNumber: {
          en: "1.2",
          bn: "১.২",
          as: "১.২",
          hi: "१.२",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "First Pregnancy before 30 years of age?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "First pregnancy age",
          },
          bn: {
            question: "আপনার প্রথম গর্ভাবস্থা কি ৩০ বছরের আগে?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "প্রথম গর্ভাবস্থার বয়স",
          },
          as: {
            question: "আপোনাৰ প্ৰথম গৰ্ভাৱস্থা কি ৩০ বছৰৰ আগতে?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
              ,
            ],
            tooltip: "প্ৰথম গৰ্ভাৱস্থাৰ বয়স",
          },
          hi: {
            question: "क्या आपकी पहली गर्भावस्था 30 वर्ष से पहले थी?",
            options: [
              { id: "1", label: "हाँ", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "पहली गर्भावस्था की आयु",
          },
        },
      },

      {
        id: 3,
        questionNumber: {
          en: "1.1",
          bn: "১.১",
          as: "১.১",
          hi: "१.१",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Are you a mother?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "If you are a mother select yes",
          },
          bn: {
            question: "আপনি কি মা?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "আপনি কি মা তা চিহ্নিত করুন",
          },
          as: {
            question: "আপুনি কি মাক?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
              ,
            ],
            tooltip: "আপুনি কি মাক সেয়া চিহ্নিত কৰক",
          },
          hi: {
            question: "क्या आप माँ हैं?",
            options: [
              { id: "1", label: "हाँ", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "क्या आप माँ हैं यह दर्शाएं",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: {
              en: "1.3.1",
              bn: "১.৩.১",
              as: "১.৩.১",
              hi: "१.३.१",
            },
            optionType: "input",
            translations: {
              en: {
                question: "Age of motherhood",
                textInput: "Enter age",
                tooltip: "Motherhood age",
              },
              bn: {
                question: "মাতৃত্বের বয়স",
                textInput: "বয়স লিখুন",
                tooltip: "মাতৃত্বের বয়স",
              },
              as: {
                question: "মাতৃত্বৰ বয়স",
                textInput: "বয়স লিখক",
                tooltip: "মাতৃত্বৰ বয়স",
              },
              hi: {
                question: "मातृत्व की आयु",
                textInput: "आयु दर्ज करें",
                tooltip: "मातृत्व की आयु",
              },
            },
          },
          {
            id: 2,
            questionNumber: {
              en: "1.3.2",
              bn: "১.৩.২",
              as: "১.৩.২",
              hi: "१.३.२",
            },
            optionType: "input",
            translations: {
              en: {
                question: "Number of kids",
                textInput: "Enter number of kids",
                tooltip: "Number of kids",
              },
              bn: {
                question: "সন্তানের সংখ্যা",
                textInput: "সন্তানৰ সংখ্যা লিখুন",
                tooltip: "সন্তানের সংখ্যা",
              },
              as: {
                question: "সন্তানৰ সংখ্যা",
                textInput: "সন্তানৰ সংখ্যা লিখক",
                tooltip: "সন্তানৰ সংখ্যা",
              },
              hi: {
                question: "बच्चों की संख्या",
                textInput: "बच्चों की संख्या दर्ज करें",
                tooltip: "बच्चों की संख्या",
              },
            },
          },
        ],
      },
      {
        id: 4,
        questionNumber: {
          en: "1.1.1",
          bn: "১.১.১",
          as: "১.১.১",
          hi: "१.१.१",
        },
        optionType: "custom",
        translations: {
          en: {
            question: "Your first child is?",
            options: [
              { id: "1", label: "Son", value: "Son" },
              { id: "2", label: "Daughter", value: "Daughter" },
            ],
            tooltip: "Your first child is?",
          },
          bn: {
            question: "আপনার প্রথম সন্তান কি?",
            options: [
              { id: "1", label: "পুত্ৰ", value: "Son" },
              { id: "2", label: "কন্যা", value: "Daughter" },
            ],
            tooltip: "আপনার প্রথম সন্তান কি?",
          },
          as: {
            question: "আপোনাৰ প্ৰথম সন্তান কি?",
            options: [
              { id: "1", label: "পুত্ৰ", value: "Son" },
              { id: "2", label: "কন্যা", value: "Daughter" },
            ],
            tooltip: "আপোনাৰ প্ৰথম সন্তান কি?",
          },
          hi: {
            question: "आपका पहला बच्चा क्या है?",
            options: [
              { id: "1", label: "बेटा", value: "Son" },
              { id: "2", label: "बेटी", value: "Daughter" },
            ],
            tooltip: "आपका पहला बच्चा क्या है?",
          },
        },
      },
      {
        id: 5,
        questionNumber: {
          en: "1.1.2",
          bn: "১.১.২",
          as: "১.১.২",
          hi: "१.१.२",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Have you breastfed your child?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "Breastfeeding history",
          },
          bn: {
            question: "আপনি কি আপনার সন্তানকে বুকের দুধ খাওয়ান?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "বুকের দুধ খাওয়ানোর ইতিহাস",
          },
          as: {
            question: "আপুনি কি আপোনাৰ সন্তানক বুকৰ দুধ খুৱাইছে নে?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
              ,
            ],
            tooltip: "বুকৰ দুধ খুৱোৱাৰ ইতিহাস",
          },
          hi: {
            question: "क्या आपने अपने बच्चे को स्तनपान कराया है?",
            options: [
              { id: "1", label: "हाँ", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "स्तनपान का इतिहास",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: {
              en: "1.5.1",
              bn: "১.৫.১",
              as: "১.৫.১",
              hi: "१.५.१",
            },
            optionType: "custom",
            translations: {
              en: {
                question: "Total duration your breastfeeding?",
                options: [
                  {
                    id: "1",
                    label: "Less than 6 months",
                    value: "Less than 6 months",
                  },
                  {
                    id: "2",
                    label: "6 months to 1 year",
                    value: "6 months to 1 year",
                  },
                  {
                    id: "3",
                    label: "More than 1 year",
                    value: "More than 1 year",
                  },
                ],
                tooltip: "Breastfeeding duration",
              },
              bn: {
                question: "বুকের দুধ খাওয়ানোর সময়কাল",
                options: [
                  { id: "1", label: "৬ মাসের কম", value: "Less than 6 months" },
                  {
                    id: "2",
                    label: "৬ মাস থেকে ১ বছরে",
                    value: "6 months to 1 year",
                  },
                  { id: "3", label: "১ বছরের অধিক", value: "More than 1 year" },
                ],
                tooltip: "বুকের দুধ খাওয়ানোর সময়কাল",
              },
              as: {
                question: "বুকৰ দুধ খুৱোৱাৰ সময়কাল",
                options: [
                  { id: "1", label: "৬ মাহৰ কম", value: "Less than 6 months" },
                  {
                    id: "2",
                    label: "৬ মাহৰ পৰা ১ বছৰত",
                    value: "6 months to 1 year",
                  },
                  { id: "3", label: "১ বছৰৰ অধিক", value: "More than 1 year" },
                ],
                tooltip: "বুকৰ দুধ খুৱোৱাৰ সময়কাল",
              },
              hi: {
                question: "स्तनपान की अवधि",
                options: [
                  {
                    id: "1",
                    label: "6 महीने से कम",
                    value: "Less than 6 months",
                  },
                  {
                    id: "2",
                    label: "6 महीने से 1 वर्ष",
                    value: "6 months to 1 year",
                  },
                  {
                    id: "3",
                    label: "1 वर्ष से अधिक",
                    value: "More than 1 year",
                  },
                ],
                tooltip: "स्तनपान की अवधि",
              },
            },
          },
          {
            id: 2,
            questionNumber: {
              en: "1.5.2",
              bn: "১.৫.২",
              as: "১.৫.২",
              hi: "१.५.२",
            },
            optionType: "input",
            translations: {
              en: {
                question: "Age of last breastfeeding",
                textInput: "Enter age",
                tooltip: "Last breastfeeding age",
              },
              bn: {
                question: "শেষ স্তন্যপানৰ বয়স",
                textInput: "বয়স লিখুন",
                tooltip: "শেষ স্তন্যপানৰ বয়স",
              },
              as: {
                question: "শেষ স্তন্যপানৰ বয়স",
                textInput: "বয়স লিখক",
                tooltip: "শেষ স্তন্যপানৰ বয়স",
              },
              hi: {
                question: "अंतिम स्तनपान की आयु",
                textInput: "आयु दर्ज करें",
                tooltip: "अंतिम स्तनपान की आयु",
              },
            },
          },
        ],
      },
      {
        id: 6,
        questionNumber: {
          en: "1.3",
          bn: "১.৩",
          as: "১.৩",
          hi: "१.३",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Have you ever had any miscarriages?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "Miscarriage history",
          },
          bn: {
            question: "আপনি কি কখনও গর্ভপাত করেছেন?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "গর্ভপাতৰ ইতিহাস",
          },
          as: {
            question: "আপুনি কি কেতিয়াবা গৰ্ভপাত কৰিছে নে?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
              ,
            ],
            tooltip: "গৰ্ভপাতৰ ইতিহাস",
          },
          hi: {
            question: "क्या आपने कभी गर्भपात किया है?",
            options: [
              { id: "1", label: "हाँ", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "गर्भपात का इतिहास",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: {
              en: "1.6.1",
              bn: "১.৬.১",
              as: "১.৬.১",
              hi: "१.६.१",
            },
            optionType: "input",
            translations: {
              en: {
                question: "How many miscarriages have you had?",
                textInput: "Enter number of miscarriages",
                tooltip: "Number of miscarriages",
              },
              bn: {
                question: "আপনার কতটি গর্ভপাত হয়েছে?",
                textInput: "গর্ভপাতৰ সংখ্যা লিখুন",
                tooltip: "গর্ভপাতৰ সংখ্যা",
              },
              as: {
                question: "আপোনাৰ কিমান গৰ্ভপাত হৈছে?",
                textInput: "গৰ্ভপাতৰ সংখ্যা লিখক",
                tooltip: "গৰ্ভপাতৰ সংখ্যা",
              },
              hi: {
                question: "आपका कितने गर्भपात हुए हैं?",
                textInput: "गर्भपातों की संख्या दर्ज करें",
                tooltip: "गर्भपातों की संख्या",
              },
            },
          },
        ],
      },
      {
        id: 7,
        questionNumber: {
          en: "1.4",
          bn: "১.৪",
          as: "১.৪",
          hi: "१.४",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Have you ever had any abortions?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "Abortion history",
          },
          bn: {
            question: "আপনি কি কখনও গর্ভপাত করেছেন?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "গর্ভপাতৰ ইতিহাস",
          },
          as: {
            question: "আপুনি কি কেতিয়াবা গৰ্ভপাত কৰিছে নে?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
              ,
            ],
            tooltip: "গৰ্ভপাতৰ ইতিহাস",
          },
          hi: {
            question: "क्या आपने कभी गर्भपात किया है?",
            options: [
              { id: "1", label: "हाँ", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "गर्भपात का इतिहास",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: {
              en: "1.7.1",
              bn: "১.৭.১",
              as: "১.৭.১",
              hi: "१.७.१",
            },
            optionType: "input",
            translations: {
              en: {
                question: "How many abortions have you had?",
                textInput: "Enter number of abortions",
                tooltip: "Number of abortions",
              },
              bn: {
                question: "আপনার কতটি গর্ভপাত হয়েছে?",
                textInput: "গর্ভপাতৰ সংখ্যা লিখুন",
                tooltip: "গর্ভপাতৰ সংখ্যা",
              },
              as: {
                question: "আপোনাৰ কিমান গৰ্ভপাত হৈছে?",
                textInput: "গৰ্ভপাতৰ সংখ্যা লিখক",
                tooltip: "গৰ্ভপাতৰ সংখ্যা",
              },
              hi: {
                question: "आपका कितने गर्भपात हुए हैं?",
                textInput: "गर्भपातों की संख्या दर्ज करें",
                tooltip: "गर्भपातों की संख्या",
              },
            },
          },
        ],
      },
    ],
  },
];


export const reproductiveQuestions = [
  // Section 1: Pregnancy History
  {
    id: 1,
    questionNumber: {
      en: "1",
      bn: "১",
      as: "১",
      hi: "१",
    },
    sectionTitle: {
      en: "Pregnancy History",
      bn: "গর্ভধারণের ইতিহাস",
      as: "গৰ্ভধাৰণৰ ইতিহাস",
      hi: "गर्भावस्था का इतिहास",
    },
    optionType: "radio",
    translations: {
      en: {
        question: "Have you ever been pregnant?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip: "Indicate if you have ever been pregnant",
      },
      bn: {
        question: "আপনি কি কখনো গর্ভবতী হয়েছিলেন?",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip: "নির্দেশ করুন আপনি কখনো গর্ভবতী হয়েছিলেন কিনা",
      },
      as: {
        question: "আপুনি কেতিয়াবা গৰ্ভৱতী হৈছিলনে?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip: "নিৰ্দেশ কৰক আপুনি কেতিয়াবা গৰ্ভৱতী হৈছিল নেনাই",
      },
      hi: {
        question: "क्या आप कभी गर्भवती हुई हैं?",
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip: "संकेत दें कि क्या आप कभी गर्भवती हुई हैं",
      },
    },
    children: [
      {
        id: 1.1,
        questionNumber: {
          en: "1.1",
          bn: "১.১",
          as: "১.১",
          hi: "१.१",
        },
        optionType: "input",
        translations: {
          en: {
            question: "Total number of pregnancies",
            textInput: "Enter number",
            tooltip: "Total number of pregnancies",
          },
          bn: {
            question: "গর্ভধারণের মোট সংখ্যা",
            textInput: "সংখ্যা লিখুন",
            tooltip: "গর্ভধারণের মোট সংখ্যা",
          },
          as: {
            question: "গৰ্ভধাৰণৰ মুঠ সংখ্যা",
            textInput: "সংখ্যা লিখক",
            tooltip: "গৰ্ভধাৰণৰ মুঠ সংখ্যা",
          },
          hi: {
            question: "गर्भधारण की कुल संख्या",
            textInput: "संख्या दर्ज करें",
            tooltip: "गर्भधारण की कुल संख्या",
          },
        },
      },
      {
        id: 1.2,
        questionNumber: {
          en: "1.2",
          bn: "১.২",
          as: "১.২",
          hi: "१.२",
        },
        optionType: "input",
        translations: {
          en: {
            question: "Number of live births",
            textInput: "Enter number",
            tooltip: "Number of live births",
          },
          bn: {
            question: "জীবিত জন্মের সংখ্যা",
            textInput: "সংখ্যা লিখুন",
            tooltip: "জীবিত জন্মের সংখ্যা",
          },
          as: {
            question: "জীৱিত জন্মৰ সংখ্যা",
            textInput: "সংখ্যা লিখক",
            tooltip: "জীৱিত জন্মৰ সংখ্যা",
          },
          hi: {
            question: "जीवित जन्म की संख्या",
            textInput: "संख्या दर्ज करें",
            tooltip: "जीवित जन्म की संख्या",
          },
        },
      },
      {
        id: 1.3,
        questionNumber: {
          en: "1.3",
          bn: "১.৩",
          as: "১.৩",
          hi: "१.३",
        },
        optionType: "input",
        translations: {
          en: {
            question: "Number of stillbirths",
            textInput: "Enter number",
            tooltip: "Number of stillbirths",
          },
          bn: {
            question: "মৃতজন্মের সংখ্যা",
            textInput: "সংখ্যা লিখুন",
            tooltip: "মৃতজন্মের সংখ্যা",
          },
          as: {
            question: "মৃতজন্মৰ সংখ্যা",
            textInput: "সংখ্যা লিখক",
            tooltip: "মৃতজন্মৰ সংখ্যা",
          },
          hi: {
            question: "मृत जन्म की संख्या",
            textInput: "संख्या दर्ज करें",
            tooltip: "मृत जन्म की संख्या",
          },
        },
      },
      {
        id: 1.4,
        questionNumber: {
          en: "1.4",
          bn: "১.৪",
          as: "১.৪",
          hi: "१.४",
        },
        optionType: "input",
        translations: {
          en: {
            question: "Miscarriages / Abortions",
            textInput: "Enter number",
            tooltip: "Number of miscarriages or abortions",
          },
          bn: {
            question: "গর্ভপাত / অ্যাবোর্শন",
            textInput: "সংখ্যা লিখুন",
            tooltip: "গর্ভপাত বা অ্যাবোর্শনের সংখ্যা",
          },
          as: {
            question: "গৰ্ভপাত / অ্যাবোৰ্শন",
            textInput: "সংখ্যা লিখক",
            tooltip: "গৰ্ভপাত বা অ্যাবোৰ্শনৰ সংখ্যা",
          },
          hi: {
            question: "गर्भपात / अबॉर्शन",
            textInput: "संख्या दर्ज करें",
            tooltip: "गर्भपात या अबॉर्शन की संख्या",
          },
        },
      },
      {
        id: 1.5,
        questionNumber: {
          en: "1.5",
          bn: "১.৫",
          as: "১.৫",
          hi: "१.५",
        },
        optionType: "input",
        translations: {
          en: {
            question: "Preterm births",
            textInput: "Enter number",
            tooltip: "Number of preterm births",
          },
          bn: {
            question: "অপরিণত জন্ম",
            textInput: "সংখ্যা লিখুন",
            tooltip: "অপরিণত জন্মৰ সংখ্যা",
          },
          as: {
            question: "অপৰিণত জন্ম",
            textInput: "সংখ্যা লিখক",
            tooltip: "অপৰিণত জন্মৰ সংখ্যা",
          },
          hi: {
            question: "अपरिपक्व जन्म",
            textInput: "संख्या दर्ज करें",
            tooltip: "अपरिपक्व जन्म की संख्या",
          },
        },
      },
      {
        id: 1.6,
        questionNumber: {
          en: "1.6",
          bn: "১.৬",
          as: "১.৬",
          hi: "१.६",
        },
        optionType: "input",
        translations: {
          en: {
            question: "Full-term births",
            textInput: "Enter number",
            tooltip: "Number of full-term births",
          },
          bn: {
            question: "পূর্ণকালীন জন্ম",
            textInput: "সংখ্যা লিখুন",
            tooltip: "পূর্ণকালীন জন্মের সংখ্যা",
          },
          as: {
            question: "পূৰ্ণকালীন জন্ম",
            textInput: "সংখ্যা লিখক",
            tooltip: "পূৰ্ণকালীন জন্মৰ সংখ্যা",
          },
          hi: {
            question: "पूर्णकालिक जन्म",
            textInput: "संख्या दर्ज करें",
            tooltip: "पूर्णकालिक जन्म की संख्या",
          },
        },
      },
      {
        id: 1.7,
        questionNumber: {
          en: "1.7",
          bn: "১.৭",
          as: "১.৭",
          hi: "१.७",
        },
        optionType: "textarea",
        translations: {
          en: {
            question: "Any pregnancy complications?",
            textInput: "Please describe (optional)",
            tooltip: "Describe any complications during pregnancy",
          },
          bn: {
            question: "গর্ভাবস্থায় কোনো জটিলতা?",
            textInput: "অনুগ্রহ করে বর্ণনা করুন (ঐচ্ছিক)",
            tooltip: "গর্ভাবস্থায় কোনো জটিলতা বর্ণনা করুন",
          },
          as: {
            question: "গৰ্ভাৱস্থাত কোনো জটিলতা?",
            textInput: "অনুগ্রহ কৰি বৰ্ণনা কৰক (ঐচ্ছিক)",
            tooltip: "গৰ্ভাৱস্থাত কোনো জটিলতা বৰ্ণনা কৰক",
          },
          hi: {
            question: "गर्भावस्था में कोई जटिलता?",
            textInput: "कृपया वर्णन करें (वैकल्पिक)",
            tooltip: "गर्भावस्था के दौरान किसी भी जटिलता का वर्णन करें",
          },
        },
      },

      {
        id: 1.8,
        questionNumber: {
          en: "1.8",
          bn: "১.৮",
          as: "১.৮",
          hi: "१.८",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Have you breastfed your children?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "Indicate if you have breastfed any of your children",
          },
          bn: {
            question: "আপনি কি আপনার সন্তানকে বুকের দুধ খাইয়েছেন?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "নির্দেশ করুন আপনি আপনার সন্তানকে বুকের দুধ খাইয়েছেন কিনা",
          },
          as: {
            question: "আপুনি আপোনাৰ সন্তানক বুকুৰ গাখীৰ খুৱাইছিলনে?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
            ],
            tooltip: "নিৰ্দেশ কৰক আপুনি আপোনাৰ সন্তানক বুকুৰ গাখীৰ খুৱাইছিল নেনাই",
          },
          hi: {
            question: "क्या आपने अपने बच्चों को स्तनपान कराया है?",
            options: [
              { id: "1", label: "हाँ", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "संकेत दें कि क्या आपने अपने बच्चों को स्तनपान कराया है",
          },
        },
        children: [
          {
            id: 1.81,
            questionNumber: {
              en: "1.8.1",
              bn: "১.৮.১",
              as: "১.৮.১",
              hi: "१.८.१",
            },
            optionType: "radio",
            translations: {
              en: {
                question: "Total duration of breastfeeding for all children combined?",
                options: [
                  { id: "1", label: "Less than 6 months", value: "Less than 6 months" },
                  { id: "2", label: "6 months to 1 year", value: "6 months to 1 year" },
                  { id: "3", label: "More than 1 years", value: "More than 1 years" },
                ],
                tooltip: "Indicate the total duration you have breastfed across all your children",
              },
              bn: {
                question: "সমস্ত সন্তানের জন্য বুকের দুধ খাওয়ানোর মোট সময়কাল?",
                options: [
                  { id: "1", label: "৬ মাসের কম", value: "Less than 6 months" },
                  { id: "2", label: "৬ মাস থেকে ১ বছর", value: "6 months to 1 year" },
                  { id: "3", label: "১ বছরের বেশি", value: "More than 1 years" },
                ],
                tooltip: "আপনার সমস্ত সন্তানদের জন্য বুকের দুধ খাওয়ানোর মোট সময়কাল নির্দেশ করুন",
              },
              as: {
                question: "সকলো সন্তানৰ বাবে বুকুৰ গাখীৰ খুৱোৱাৰ মুঠ সময়কাল?",
                options: [
                  { id: "1", label: "৬ মাহতকৈ কম", value: "Less than 6 months" },
                  { id: "2", label: "৬ মাহৰ পৰা ১ বছৰ", value: "6 months to 1 year" },
                  { id: "3", label: "১ বছৰতকৈ অধিক", value: "More than 1 years" },
                ],
                tooltip: "আপোনাৰ সকলো সন্তানৰ বাবে বুকুৰ গাখীৰ খুৱোৱাৰ মুঠ সময়কাল নিৰ্দেশ কৰক",
              },
              hi: {
                question: "सभी बच्चों के लिए स्तनपान की कुल अवधि?",
                options: [
                  { id: "1", label: "6 महीने से कम", value: "Less than 6 months" },
                  { id: "2", label: "6 महीने से 1 वर्ष", value: "6 months to 1 year" },
                  { id: "3", label: "1 वर्ष से अधिक", value: "More than 1 years" },
                ],
                tooltip: "आपके सभी बच्चों के लिए स्तनपान की कुल अवधि का संकेत दें",
              },
            },
          },
          {
            id: 2,
            questionNumber: {
              en: "1.8.2",
              bn: "১.৮.২",
              as: "১.৮.২",
              hi: "१.८.२",
            },
            optionType: "input",
            translations: {
              en: {
                question: "Age of last breastfeeding",
                textInput: "Enter age",
                tooltip: "Last breastfeeding age",
              },
              bn: {
                question: "শেষ স্তন্যপানৰ বয়স",
                textInput: "বয়স লিখুন",
                tooltip: "শেষ স্তন্যপানৰ বয়স",
              },
              as: {
                question: "শেষ স্তন্যপানৰ বয়স",
                textInput: "বয়স লিখক",
                tooltip: "শেষ স্তন্যপানৰ বয়স",
              },
              hi: {
                question: "अंतिम स्तनपान की आयु",
                textInput: "आयु दर्ज करें",
                tooltip: "अंतिम स्तनपान की आयु",
              },
            },
          },
        ],
      },
    ],
  },

  // Section 2: Fertility & Contraception
  {
    id: 2,
    questionNumber: {
      en: "2",
      bn: "২",
      as: "২",
      hi: "२",
    },
    sectionTitle: {
      en: "Fertility & Contraception",
      bn: "প্রজনন ক্ষমতা ও জন্মনিয়ন্ত্রণ",
      as: "প্ৰজনন ক্ষমতা আৰু জন্মনিয়ন্ত্ৰণ",
      hi: "प्रजनन क्षमता और गर्भनिरोध",
    },
    optionType: "radio",
    translations: {
      en: {
        question: "Are you currently trying to conceive?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip: "Indicate if you are currently trying to become pregnant",
      },
      bn: {
        question: "আপনি কি বর্তমানে গর্ভধারণের চেষ্টা করছেন?",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip: "নির্দেশ করুন আপনি বর্তমানে গর্ভবতী হওয়ার চেষ্টা করছেন কিনা",
      },
      as: {
        question: "আপুনি বৰ্তমানে গৰ্ভধাৰণ কৰিবলৈ চেষ্টা কৰি আছেনে?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip: "নিৰ্দেশ কৰক আপুনি বৰ্তমানে গৰ্ভৱতী হ'বলৈ চেষ্টা কৰি আছেনে নাই",
      },
      hi: {
        question: "क्या आप वर्तमान में गर्भधारण की कोशिश कर रही हैं?",
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip: "संकेत दें कि क्या आप वर्तमान में गर्भवती होने की कोशिश कर रही हैं",
      },
    },
    children: [
      {
        id: 2.1,
        questionNumber: {
          en: "2.1",
          bn: "২.১",
          as: "২.১",
          hi: "२.१",
        },
        optionType: "radio",
        translations: {
          en: {
            question: "Have you been trying for over a year without success?",
            options: [
              { id: "1", label: "Yes", value: "Yes" },
              { id: "2", label: "No", value: "No" },
            ],
            tooltip: "Indicate if you have been trying to conceive for over a year without success",
          },
          bn: {
            question: "আপনি কি এক বছরের বেশি সময় ধরে সফলতা ছাড়াই চেষ্টা করছেন?",
            options: [
              { id: "1", label: "হ্যাঁ", value: "Yes" },
              { id: "2", label: "না", value: "No" },
            ],
            tooltip: "নির্দেশ করুন আপনি এক বছরের বেশি সময় ধরে সফলতা ছাড়াই গর্ভধারণের চেষ্টা করছেন কিনা",
          },
          as: {
            question: "আপুনি এক বছৰতকৈ অধিক সময় ধৰি সফলতা নোপোৱাকৈ চেষ্টা কৰি আছেনে?",
            options: [
              { id: "1", label: "হয়", value: "Yes" },
              { id: "2", label: "নহয়", value: "No" },
            ],
            tooltip: "নিৰ্দেশ কৰক আপুনি এক বছৰতকৈ অধিক সময় ধৰি সফলতা নোপোৱাকৈ গৰ্ভধাৰণৰ চেষ্টা কৰি আছেনে নাই",
          },
          hi: {
            question: "क्या आप एक वर्ष से अधिक समय से बिना सफलता के प्रयास कर रही हैं?",
            options: [
              { id: "1", label: "हाँ", value: "Yes" },
              { id: "2", label: "नहीं", value: "No" },
            ],
            tooltip: "संकेत दें कि क्या आप एक वर्ष से अधिक समय से बिना सफलता के गर्भधारण का प्रयास कर रही हैं",
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
        question: "Are you using any form of contraception?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip: "Indicate if you are using any form of contraception",
      },
      bn: {
        question: "আপনি কি কোনো ধরনের জন্মনিয়ন্ত্রণ পদ্ধতি ব্যবহার করছেন?",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip: "নির্দেশ করুন আপনি কোনো জন্মনিয়ন্ত্রণ পদ্ধতি ব্যবহার করছেন কিনা",
      },
      as: {
        question: "আপুনি কি কোনো ধৰণৰ জন্মনিয়ন্ত্ৰণ পদ্ধতি ব্যৱহাৰ কৰি আছেনে?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip: "নিৰ্দেশ কৰক আপুনি কোনো জন্মনিয়ন্ত্ৰণ পদ্ধতি ব্যৱহাৰ কৰি আছেনে নাই",
      },
      hi: {
        question: "क्या आप किसी प्रकार के गर्भनिरोधक का उपयोग कर रही हैं?",
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip: "संकेत दें कि क्या आप किसी प्रकार के गर्भनिरोधक का उपयोग कर रही हैं",
      },
    },
    children: [
      {
        id: 3.1,
        questionNumber: {
          en: "3.1",
          bn: "৩.১",
          as: "৩.১",
          hi: "३.१",
        },
        optionType: "checkbox",
        translations: {
          en: {
            question: "Which contraception methods do you use?",
            options: [
              { id: "1", label: "Condoms", value: "Condoms" },
              { id: "2", label: "Oral contraceptive pills", value: "Oral contraceptive pills" },
              { id: "3", label: "IUD (Copper/Hormonal)", value: "IUD (Copper/Hormonal)" },
              { id: "4", label: "Implant", value: "Implant" },
              { id: "5", label: "Injection", value: "Injection" },
              { id: "6", label: "Sterilization (permanent)", value: "Sterilization (permanent)" },
              { id: "7", label: "Other", value: "Other" },
            ],
            tooltip: "Select all contraception methods that you use",
          },
          bn: {
            question: "আপনি কোন জন্মনিয়ন্ত্রণ পদ্ধতি ব্যবহার করেন?",
            options: [
              { id: "1", label: "কনডম", value: "Condoms" },
              { id: "2", label: "খাবার বড়ি", value: "Oral contraceptive pills" },
              { id: "3", label: "আইইউডি (কপার/হরমোনযুক্ত)", value: "IUD (Copper/Hormonal)" },
              { id: "4", label: "ইমপ্ল্যান্ট", value: "Implant" },
              { id: "5", label: "ইনজেকশন", value: "Injection" },
              { id: "6", label: "স্থায়ী বন্ধ্যাকরণ", value: "Sterilization (permanent)" },
              { id: "7", label: "অন্যান্য", value: "Other" },
            ],
            tooltip: "আপনি যে সমস্ত জন্মনিয়ন্ত্রণ পদ্ধতি ব্যবহার করেন তা নির্বাচন করুন",
          },
          as: {
            question: "আপুনি কি কি জন্মনিয়ন্ত্ৰণ পদ্ধতি ব্যৱহাৰ কৰে?",
            options: [
              { id: "1", label: "কণ্ডম", value: "Condoms" },
              { id: "2", label: "মুখ্য গৰ্ভনিৰোধক বটিকা", value: "Oral contraceptive pills" },
              { id: "3", label: "আইইউডি (কপাৰ/হৰমোনযুক্ত)", value: "IUD (Copper/Hormonal)" },
              { id: "4", label: "ইমপ্লাণ্ট", value: "Implant" },
              { id: "5", label: "ইনজেকশ্যন", value: "Injection" },
              { id: "6", label: "স্থায়ী বন্ধ্যাকৰণ", value: "Sterilization (permanent)" },
              { id: "7", label: "অন্যান্য", value: "Other" },
            ],
            tooltip: "আপুনি যি সকলো জন্মনিয়ন্ত্ৰণ পদ্ধতি ব্যৱহাৰ কৰে সেইবোৰ নিৰ্বাচন কৰক",
          },
          hi: {
            question: "आप कौन से गर्भनिरोधक विधियों का उपयोग करती हैं?",
            options: [
              { id: "1", label: "कंडोम", value: "Condoms" },
              { id: "2", label: "गर्भनिरोधक गोलियां", value: "Oral contraceptive pills" },
              { id: "3", label: "आईयूडी (कॉपर/हार्मोनल)", value: "IUD (Copper/Hormonal)" },
              { id: "4", label: "इम्प्लांट", value: "Implant" },
              { id: "5", label: "इंजेक्शन", value: "Injection" },
              { id: "6", label: "स्थायी बंध्याकरण", value: "Sterilization (permanent)" },
              { id: "7", label: "अन्य", value: "Other" },
            ],
            tooltip: "आप जो सभी गर्भनिरोधक विधियां उपयोग करती हैं उन्हें चुनें",
          },
        },
        children: [
          {
            id: 3.11,
            questionNumber: {
              en: "3.1.1",
              bn: "৩.১.১",
              as: "৩.১.১",
              hi: "३.१.१",
            },
            optionType: "input",
            showIf: { parentOption: "Other" },
            translations: {
              en: {
                question: "Please specify other contraception method (Optional)",
                textInput: "Enter method",
                tooltip: "Specify the other contraception method you use",
              },
              bn: {
                question: "অন্যান্য জন্মনিয়ন্ত্রণ পদ্ধতি উল্লেখ করুন (ঐচ্ছিক)",
                textInput: "পদ্ধতি লিখুন",
                tooltip: "আপনি ব্যবহার করেন এমন অন্যান্য জন্মনিয়ন্ত্রণ পদ্ধতি উল্লেখ করুন",
              },
              as: {
                question: "অন্যান্য জন্মনিয়ন্ত্ৰণ পদ্ধতি উল্লেখ কৰক (ঐচ্ছিক)",
                textInput: "পদ্ধতি লিখক",
                tooltip: "আপুনি ব্যৱহাৰ কৰা অন্যান্য জন্মনিয়ন্ত্ৰণ পদ্ধতি উল্লেখ কৰক",
              },
              hi: {
                question: "कृपया अन्य गर्भनिरोधक विधि निर्दिष्ट करें (वैकल्पिक)",
                textInput: "विधि दर्ज करें",
                tooltip: "आप जो अन्य गर्भनिरोधक विधि का उपयोग करती हैं उसे निर्दिष्ट करें",
              },
            },
          },
        ],
      },
    ],
  },

  // Section 3: Sexual Health
  {
    id: 4,
    questionNumber: {
      en: "4",
      bn: "৪",
      as: "৪",
      hi: "४",
    },
    sectionTitle: {
      en: "Sexual Health & Wellness",
      bn: "যৌন স্বাস্থ্য ও সুস্থতা",
      as: "যৌন স্বাস্থ্য আৰু সুস্থতা",
      hi: "यौन स्वास्थ्य और कल्याण",
    },
    optionType: "radio",
    translations: {
      en: {
        question: "Are you sexually active or in a relationship?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip: "Indicate if you are sexually active or in a relationship",
      },
      bn: {
        question: "আপনি কি যৌনভাবে সক্রিয় বা একটি সম্পর্কে আছেন?",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
        ],
        tooltip: "নির্দেশ করুন আপনি যৌনভাবে সক্রিয় বা একটি সম্পর্কে আছেন কিনা",
      },
      as: {
        question: "আপুনি কি যৌনভাৱে সক্ৰিয় বা এটা সম্পৰ্কত আছেনে?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip: "নিৰ্দেশ কৰক আপুনি যৌনভাৱে সক্ৰিয় বা এটা সম্পৰ্কত আছেনে নাই",
      },
      hi: {
        question: "क्या आप यौन रूप से सक्रिय हैं या किसी रिश्ते में हैं?",
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip: "संकेत दें कि क्या आप यौन रूप से सक्रिय हैं या किसी रिश्ते में हैं",
      },
    },
    children: [
      {
        id: 4.1,
        questionNumber: {
          en: "4.1",
          bn: "৪.১",
          as: "৪.১",
          hi: "४.१",
        },
        optionType: "input",
        translations: {
          en: {
            question: "Age at first sexual activity",
            textInput: "Enter age",
            tooltip: "Enter your age at first sexual activity",
          },
          bn: {
            question: "প্রথম যৌন কার্যকলাপের সময় বয়স",
            textInput: "বয়স লিখুন",
            tooltip: "প্রথম যৌন কার্যকলাপের সময় আপনার বয়স লিখুন",
          },
          as: {
            question: "প্ৰথম যৌন কাৰ্যকলাপৰ সময়ত বয়স",
            textInput: "বয়স লিখক",
            tooltip: "প্ৰথম যৌন কাৰ্যকলাপৰ সময়ত আপোনাৰ বয়স লিখক",
          },
          hi: {
            question: "पहली यौन गतिविधि की आयु",
            textInput: "आयु दर्ज करें",
            tooltip: "पहली यौन गतिविधि के समय अपनी आयु दर्ज करें",
          },
        },
      },
      {
        id: 4.2,
        questionNumber: {
          en: "4.2",
          bn: "৪.২",
          as: "৪.২",
          hi: "४.२",
        },
        optionType: "checkbox",
        translations: {
          en: {
            question: "Do you experience any of the following issues?",
            options: [
              { id: "1", label: "Pain during intercourse", value: "Pain during intercourse" },
              { id: "2", label: "Lack of sexual desire", value: "Lack of sexual desire" },
              { id: "3", label: "Difficulty with penetration", value: "Difficulty with penetration" },
              { id: "4", label: "None", value: "None" },
            ],
            tooltip: "Select any sexual health issues you experience",
          },
          bn: {
            question: "আপনি কি নিম্নলিখিত কোনো সমস্যার সম্মুখীন হন?",
            options: [
              { id: "1", label: "যৌন মিলনের সময় ব্যথা", value: "Pain during intercourse" },
              { id: "2", label: "যৌন ইচ্ছার অভাব", value: "Lack of sexual desire" },
              { id: "3", label: "প্রবেশে অসুবিধা", value: "Difficulty with penetration" },
              { id: "4", label: "কোনোটিই নয়", value: "None" },
            ],
            tooltip: "আপনি যে যৌন স্বাস্থ্য সমস্যার সম্মুখীন হন তা নির্বাচন করুন",
          },
          as: {
            question: "আপুনি তলৰ কোনো সমস্যা অনুভৱ কৰেনে?",
            options: [
              { id: "1", label: "যৌন মিলনৰ সময়ত বেদনা", value: "Pain during intercourse" },
              { id: "2", label: "যৌন ইচ্ছাৰ অভাৱ", value: "Lack of sexual desire" },
              { id: "3", label: "প্ৰৱেশত অসুবিধা", value: "Difficulty with penetration" },
              { id: "4", label: "একোনোটোৱেই নহয়", value: "None" },
            ],
            tooltip: "আপুনি অনুভৱ কৰা যিকোনো যৌন স্বাস্থ্য সমস্যা নিৰ্বাচন কৰক",
          },
          hi: {
            question: "क्या आप निम्न में से किसी समस्या का अनुभव करती हैं?",
            options: [
              { id: "1", label: "संभोग के दौरान दर्द", value: "Pain during intercourse" },
              { id: "2", label: "यौन इच्छा का अभाव", value: "Lack of sexual desire" },
              { id: "3", label: "प्रवेश में कठिनाई", value: "Difficulty with penetration" },
              { id: "4", label: "कोई नहीं", value: "None" },
            ],
            tooltip: "आप जिस यौन स्वास्थ्य समस्या का अनुभव करती हैं उसे चुनें",
          },
        },
      },
    ],
  },

  // Section 4: Diagnosed Conditions
  {
    id: 5,
    questionNumber: {
      en: "5",
      bn: "৫",
      as: "৫",
      hi: "५",
    },
    sectionTitle: {
      en: "Health Conditions",
      bn: "স্বাস্থ্য অবস্থা",
      as: "স্বাস্থ্য অৱস্থা",
      hi: "स्वास्थ्य स्थितियां",
    },
    optionType: "checkbox",
    translations: {
      en: {
        question: "Have you ever been diagnosed with any of the following?",
        options: [
          { id: "1", label: "PCOS (Polycystic Ovary Syndrome)", value: "PCOS" },
          { id: "2", label: "Endometriosis", value: "Endometriosis" },
          { id: "3", label: "Uterine fibroids", value: "Uterine fibroids" },
          { id: "4", label: "Ovarian cysts", value: "Ovarian cysts" },
          { id: "5", label: "Pelvic Inflammatory Disease", value: "Pelvic Inflammatory Disease" },
          { id: "6", label: "None", value: "None" },
        ],
        tooltip: "Select any conditions you have been diagnosed with",
      },
      bn: {
        question: "আপনার কি কখনও নিম্নলিখিত কোনো রোগ নির্ণয় করা হয়েছে?",
        options: [
          { id: "1", label: "পিসিওএস (পলিসিস্টিক ওভারি সিন্ড্রোম)", value: "PCOS" },
          { id: "2", label: "এন্ডোমেট্রিওসিস", value: "Endometriosis" },
          { id: "3", label: "জরায়ু ফাইব্রয়েড", value: "Uterine fibroids" },
          { id: "4", label: "ডিম্বাশয়ের সিস্ট", value: "Ovarian cysts" },
          { id: "5", label: "পেলভিক ইনফ্লামেটরি ডিজিজ", value: "Pelvic Inflammatory Disease" },
          { id: "6", label: "কোনোটিই নয়", value: "None" },
        ],
        tooltip: "আপনার নির্ণয় করা হয়েছে এমন কোনো অবস্থা নির্বাচন করুন",
      },
      as: {
        question: "আপোনাক কেতিয়াবা তলৰ কোনোটোৰ নিৰ্ণয় কৰা হৈছিলনে?",
        options: [
          { id: "1", label: "পিচিঅ'এচ (পলিচিষ্টিক অ'ভাৰী চিনড্ৰ'ম)", value: "PCOS" },
          { id: "2", label: "এনডোমেট্ৰিঅ'ছিছ", value: "Endometriosis" },
          { id: "3", label: "জৰায়ু ফাইব্ৰয়েড", value: "Uterine fibroids" },
          { id: "4", label: "অণ্ডাশয়ৰ ছিষ্ট", value: "Ovarian cysts" },
          { id: "5", label: "পেলভিক ইনফ্লেমেটৰী ডিজিজ", value: "Pelvic Inflammatory Disease" },
          { id: "6", label: "একোনোটোৱেই নহয়", value: "None" },
        ],
        tooltip: "আপোনাৰ নিৰ্ণয় কৰা হৈছে এনে কোনো অৱস্থা নিৰ্বাচন কৰক",
      },
      hi: {
        question: "क्या आपको कभी निम्न में से किसी का निदान हुआ है?",
        options: [
          { id: "1", label: "पीसीओएस (पॉलीसिस्टिक ओवरी सिंड्रोम)", value: "PCOS" },
          { id: "2", label: "एंडोमेट्रियोसिस", value: "Endometriosis" },
          { id: "3", label: "गर्भाशय फाइब्रॉयड", value: "Uterine fibroids" },
          { id: "4", label: "अंडाशय सिस्ट", value: "Ovarian cysts" },
          { id: "5", label: "पेल्विक इन्फ्लेमेटरी डिजीज", value: "Pelvic Inflammatory Disease" },
          { id: "6", label: "कोई नहीं", value: "None" },
        ],
        tooltip: "आपको जिन स्थितियों का निदान हुआ है उन्हें चुनें",
      },
    },
  },
]
export const languages = {
  en: "English",
  bn: "বাংলা",
  as: "অসমীয়া",
  hi: "हिन्दी",
};
