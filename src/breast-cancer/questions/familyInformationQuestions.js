export const familyInformationQuestions = [
  {
    // Parents
    id: 1,
    questionNumber: "1",
    translations: {
      en: {
        question: "About your parents",
        label: [
          "Late",
          "Mr",
          "Mrs",
          "Age",
          "Age of death",
          "years",
          "Reason of death",
        ],
        options: ["Add father details", "Add mother details"],
        tooltip: "",
      },
      bn: {
        question: "আপনার বাবা-মায়ের সম্পর্কে",
        label: [
          "প্রয়াত",
          "শ্রী",
          "শ্রীমতি",
          "বয়স",
          "মৃত্যুর বয়স",
          "বছর",
          "মৃত্যুর কারণ",
        ],
        options: ["বাবার বিবরণ যোগ করুন", "মায়ের বিবরণ যোগ করুন"],
        tooltip: "",
      },
      as: {
        question: "আপোনাৰ মাতৃ-পিতৃ সম্পৰ্কে",
        label: [
          "প্ৰয়াত",
          "শ্ৰী",
          "শ্ৰীমতী",
          "বয়স",
          "মৃত্যুৰ বয়স",
          "বছৰ",
          "মৃত্যুৰ কাৰণ",
        ],
        options: ["দেউতাৰ তথ্য যোগ কৰক", "মাকৰ তথ্য যোগ কৰক"],
        tooltip: "",
      },
      hi: {
        question: "आपके माता-पिता के बारे में",
        label: [
          "स्वर्गीय",
          "श्री",
          "श्रीमती",
          "आयु",
          "मृत्यु की आयु",
          "साल",
          "मृत्यु का कारण",
        ],
        options: ["पिता का विवरण जोड़ें", "माता का विवरण जोड़ें"],
        tooltip: "",
      },
    },
    children: [
      {
        id: 1,
        questionNumber: "1.1",
        translations: {
          en: {
            question: "Father's name",
            textInput: "Enter father's name",
            tooltip: "",
          },
          bn: {
            question: "বাবার নাম",
            textInput: "বাবার নাম লিখুন",
            tooltip: "",
          },
          as: {
            question: "দেউতাৰ নাম",
            textInput: "দেউতাৰ নাম লিখক",
            tooltip: "",
          },
          hi: {
            question: "पिता का नाम",
            textInput: "पिता का नाम दर्ज करें",
            tooltip: "",
          },
        },
      },
      {
        id: 2,
        questionNumber: "1.2",
        translations: {
          en: {
            question: "Is your father alive or dead?",
            options: [
              { id: 1, label: "Alive", value: "Alive" },
              { id: 2, label: "Dead", value: "Dead" },
            ],
            tooltip: "",
          },
          bn: {
            question: "আপনার বাবা জীবিত না মৃত?",
            options: [
              { id: 1, label: "জীবিত", value: "Alive" },
              { id: 2, label: "মৃত", value: "Dead" },
            ],
            tooltip: "",
          },
          as: {
            question: "আপোনাৰ দেউতা জীয়াই আছে নে মৃত্যু হৈছে?",
            options: [
              { id: 1, label: "জীয়াই আছে", value: "Alive" },
              { id: 2, label: "মৃত", value: "Dead" },
            ],
            tooltip: "",
          },
          hi: {
            question: "क्या आपके पिता जीवित हैं या नहीं?",
            options: [
              { id: 1, label: "जीवित", value: "Alive" },
              { id: 2, label: "मृत", value: "Dead" },
            ],
            tooltip: "",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: "1.2.1",
            translations: {
              en: {
                question: "Age of your father (approximate)",
                textInput: "Enter the age (in years)",
                tooltip: "",
              },
              bn: {
                question: "আপনার বাবার বয়স (আনুমানিক)",
                textInput: "বয়স লিখুন (বছরে)",
                tooltip: "",
              },
              as: {
                question: "আপোনাৰ দেউতাৰ বয়স (আনুমানিক)",
                textInput: "বয়স লিখক (বছৰত)",
                tooltip: "",
              },
              hi: {
                question: "आपके पिता की उम्र (अनुमानित)",
                textInput: "उम्र दर्ज करें (वर्षों में)",
                tooltip: "",
              },
            },
          },
          {
            id: 2,
            questionNumber: "1.2.1",
            translations: {
              en: {
                question: "Age of death (approximate)",
                textInput: "Enter the age (in years)",
                tooltip: "",
              },
              bn: {
                question: "আপনার বাবার মৃত্যুর সময়ের বয়স (আনুমানিক)",
                textInput: "বয়স লিখুন (বছরে)",
                tooltip: "",
              },
              as: {
                question: "আপোনাৰ দেউতাৰ মৃত্যুৰ সময়ৰ বয়স (আনুমানিক)",
                textInput: "বয়স লিখক (বছৰত)",
                tooltip: "",
              },
              hi: {
                question: "आपके पिता की मृत्यु के समय उम्र (अनुमानित)",
                textInput: "उम्र दर्ज करें (वर्षों में)",
                tooltip: "",
              },
            },
          },
          {
            id: 6,
            questionNumber: "1.2.2",
            translations: {
              en: {
                question: "Cause of death of your father",
                options: [
                  { id: 1, label: "Cancer", value: "Cancer" },
                  { id: 2, label: "Other", value: "Other" },
                ],
                tooltip: "",
              },
              bn: {
                question: "আপনার বাবার মৃত্যুর কারণ",
                options: [
                  { id: 1, label: "ক্যান্সার", value: "Cancer" },
                  { id: 2, label: "অন্যান্য", value: "Other" },
                ],
                tooltip: "",
              },
              as: {
                question: "আপোনাৰ দেউতাৰ মৃত্যুৰ কাৰণ",
                options: [
                  { id: 1, label: "কেন্সাৰ", value: "Cancer" },
                  { id: 2, label: "অন্যান্য", value: "Other" },
                ],
                tooltip: "",
              },
              hi: {
                question: "आपके पिता की मृत्यु का कारण",
                options: [
                  { id: 1, label: "कैंसर", value: "Cancer" },
                  { id: 2, label: "अन्य", value: "Other" },
                ],
                tooltip: "",
              },
            },
            children: [
              {
                id: 1,
                questionNumber: "1.2.2.1",
                translations: {
                  en: {
                    question: "Other cause of death of your father",
                    textInput: "Enter the cause of your father's death",
                    tooltip: "",
                  },
                  bn: {
                    question: "আপনার বাবার অন্যান্য মৃত্যুর কারণ",
                    textInput: "আপনার বাবার অন্যান্য মৃত্যুর কারণ লিখুন",
                    tooltip: "",
                  },
                  as: {
                    question: "আপোনাৰ দেউতাৰ অন্য মৃত্যুৰ কাৰণ",
                    textInput: "আপোনাৰ দেউতাৰ অন্য মৃত্যুৰ কাৰণ লিখক",
                    tooltip: "",
                  },
                  hi: {
                    question: "आपके पिता की अन्य मृत्यु का कारण",
                    textInput: "अपने पिता की अन्य मृत्यु का कारण दर्ज करें",
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
        questionNumber: "1.1",
        translations: {
          en: {
            question: "Mother's name",
            textInput: "Enter mother's name",
            tooltip: "",
          },
          bn: {
            question: "মায়ের নাম",
            textInput: "মায়ের নাম লিখুন",
            tooltip: "",
          },
          as: {
            question: "মায়েৰ নাম",
            textInput: "মায়েৰ নাম লিখক",
            tooltip: "",
          },
          hi: {
            question: "माँ का नाम",
            textInput: "माँ का नाम दर्ज करें",
            tooltip: "",
          },
        },
      },
      {
        id: 2,
        questionNumber: "1.2",
        translations: {
          en: {
            question: "Is your mother alive or dead?",
            options: [
              { id: 1, label: "Alive", value: "Alive" },
              { id: 2, label: "Dead", value: "Dead" },
            ],
            tooltip: "",
          },
          bn: {
            question: "আপনার মা জীবিত না মৃত?",
            options: [
              { id: 1, label: "জীবিত", value: "Alive" },
              { id: 2, label: "মৃত", value: "Dead" },
            ],
            tooltip: "",
          },
          as: {
            question: "আপোনাৰ মায় জীয়াই আছে নে মৃত্যু হৈছে?",
            options: [
              { id: 1, label: "জীয়াই আছে", value: "Alive" },
              { id: 2, label: "মৃত", value: "Dead" },
            ],
            tooltip: "",
          },
          hi: {
            question: "क्या आपकी माँ जीवित हैं या नहीं?",
            options: [
              { id: 1, label: "जीवित", value: "Alive" },
              { id: 2, label: "मृत", value: "Dead" },
            ],
            tooltip: "",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: "1.2.1",
            translations: {
              en: {
                question: "Age of your mother (approximate)",
                textInput: "Enter the age (in years)",
                tooltip: "",
              },
              bn: {
                question: "আপনার মায়ের বয়স (আনুমানিক)",
                textInput: "বয়স লিখুন (বছরে)",
                tooltip: "",
              },
              as: {
                question: "আপোনাৰ মায়েৰ বয়স (আনুমানিক)",
                textInput: "বয়স লিখক (বছৰত)",
                tooltip: "",
              },
              hi: {
                question: "आपकी माँ की उम्र (अनुमानित)",
                textInput: "उम्र दर्ज करें (वर्षों में)",
                tooltip: "",
              },
            },
          },
          {
            id: 2,
            questionNumber: "1.2.1",
            translations: {
              en: {
                question: "Age of death of mother (approximate)",
                textInput: "Enter the age (in years)",
                tooltip: "",
              },
              bn: {
                question: "আপনার মায়ের মৃত্যুর সময়ের বয়স (আনুমানিক)",
                textInput: "বয়স লিখুন (বছরে)",
                tooltip: "",
              },
              as: {
                question: "আপোনাৰ মায়েৰ মৃত্যুৰ সময়ৰ বয়স (আনুমানিক)",
                textInput: "বয়স লিখক (বছৰত)",
                tooltip: "",
              },
              hi: {
                question: "आपकी माँ की मृत्यु के समय उम्र (अनुमानित)",
                textInput: "उम्र दर्ज करें (वर्षों में)",
                tooltip: "",
              },
            },
          },
          {
            id: 6,
            questionNumber: "1.2.2",
            translations: {
              en: {
                question: "Cause of death of your mother",
                options: [
                  { id: 1, label: "Cancer", value: "Cancer" },
                  { id: 2, label: "Other", value: "Other" },
                ],
                tooltip: "",
              },
              bn: {
                question: "আপনার মায়ের মৃত্যুর কারণ",
                options: [
                  { id: 1, label: "ক্যান্সার", value: "Cancer" },
                  { id: 2, label: "অন্যান্য", value: "Other" },
                ],
                tooltip: "",
              },
              as: {
                question: "আপোনাৰ মায়েৰ মৃত্যুৰ কাৰণ",
                options: [
                  { id: 1, label: "কেন্সাৰ", value: "Cancer" },
                  { id: 2, label: "অন্যান্য", value: "Other" },
                ],
                tooltip: "",
              },
              hi: {
                question: "आपकी माँ की मृत्यु का कारण",
                options: [
                  { id: 1, label: "कैंसर", value: "Cancer" },
                  { id: 2, label: "अन्य", value: "Other" },
                ],
                tooltip: "",
              },
            },
            children: [
              {
                id: 1,
                questionNumber: "1.2.2.1",
                translations: {
                  en: {
                    question: "Other cause of death of your mother",
                    textInput: "Enter the cause of death of your mother",
                    tooltip: "",
                  },
                  bn: {
                    question: "আপনার মায়ের অন্যান্য মৃত্যুর কারণ",
                    textInput: "আপনার মায়ের অন্যান্য মৃত্যুর কারণ লিখুন",
                    tooltip: "",
                  },
                  as: {
                    question: "আপোনাৰ মায়েৰ অন্য মৃত্যুৰ কাৰণ",
                    textInput: "আপোনাৰ মায়েৰ অন্য মৃত্যুৰ কাৰণ লিখক",
                    tooltip: "",
                  },
                  hi: {
                    question: "आपकी माँ की अन्य मृत्यु का कारण",
                    textInput: "अपनी माँ की अन्य मृत्यु का कारण दर्ज करें",
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
    // Siblings
    id: 2,
    questionNumber: "2",
    translations: {
      en: {
        question: "Do you have siblings?",
        label: [
          "Brothers",
          "No of brothers",
          "No of dead brothers",
          "Sisters",
          "No of sisters",
          "No of dead sisters",
          "Had anybody passed away?",
          "Dead Brother",
          "Dead Sister",
          "Add Details",
          "Update Details",
          "Age of death",
          "years",
          "Alive",
        ],
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনার কি ভাই-বোন আছে?",
        label: [
          "ভাই",
          "ভাইয়ের সংখ্যা",
          "মারা যাওয়া ভাইয়ের সংখ্যা",
          "বোন",
          "বোনের সংখ্যা",
          "মারা যাওয়া বোনের সংখ্যা",
          "কেউ মারা গেছেন কি?",
          "মারা যাওয়া ভাই",
          "মারা যাওয়া বোন",
          "বিস্তারিত যোগ করুন",
          "বিস্তারিত আপডেট করুন",
          "মৃত্যুর বয়স",
          "বছর",
          "জীবিত",
        ],
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপোনাৰ ভাতৃ বা ভগ্নী আছে নেকি?",
        label: [
          "ভাতৃ",
          "ভাতৃৰ সংখ্যা",
          "মৃত ভাতৃৰ সংখ্যা",
          "ভগ্নী",
          "ভগ্নীৰ সংখ্যা",
          "মৃত ভগ্নীৰ সংখ্যা",
          "কোনোৱে মৃত্যু হৈছে নেকি?",
          "মৃত ভাতৃ",
          "মৃত ভগ্নী",
          "বিবৰণ যোগ কৰক",
          "বিবৰণ আপডেট কৰক",
          "মৃত্যুৰ বয়স",
          "বছৰ",
          "জীৱিত",
        ],
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपके भाई-बहन हैं?",
        label: [
          "भाई",
          "भाइयों की संख्या",
          "मृत भाइयों की संख्या",
          "बहन",
          "बहनों की संख्या",
          "मृत बहनों की संख्या",
          "क्या किसी की मृत्यु हुई है?",
          "मृत भाई",
          "मृत बहन",
          "विवरण जोड़ें",
          "विवरण अपडेट करें",
          "मृत्यु की आयु",
          "वर्ष",
          "जीवित",
        ],
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
        ],
        tooltip: "",
      },
    },
    children: [
      {
        id: 1,
        questionNumber: "2.1",
        translations: {
          en: {
            question: "How many brothers do you have?",
            textInput: "Enter the number of brothers you have",
            tooltip: "",
          },
          bn: {
            question: "আপনার কতজন ভাই আছে?",
            textInput: "আপনার কতজন ভাই আছে লিখুন",
            tooltip: "",
          },
          as: {
            question: "আপোনাৰ কতজন ভাতৃ আছে?",
            textInput: "আপোনাৰ কতজন ভাতৃ আছে লিখক",
            tooltip: "",
          },
          hi: {
            question: "कितने भाई हैं?",
            textInput: "कितने भाई हैं दर्ज करें",
            tooltip: "",
          },
        },
      },
      {
        id: 2,
        questionNumber: "2.2",
        translations: {
          en: {
            question: "How many brothers passed away?",
            textInput: "Number of brothers who passed away",
            tooltip: "",
            alert:
              "The number of deceased brothers cannot exceed the total number of brothers.",
          },
          bn: {
            question: "আপনার কতজন ভাই মারা গেছেন?",
            textInput: "মারা যাওয়া ভাইয়ের সংখ্যা লিখুন",
            tooltip: "",
            alert:
              "মৃত ভাইয়ের সংখ্যা মোট ভাইয়ের সংখ্যার চেয়ে বেশি হতে পারে না।",
          },
          as: {
            question: "আপোনাৰ কতজন ভাই মৃত্যু হৈছে?",
            textInput: "মৃত ভাইৰ সংখ্যা লিখক",
            tooltip: "",
            alert: "মৃত ভাইৰ সংখ্যা মুঠ ভাইৰ সংখ্যাতকৈ অধিক হব নোৱাৰে।",
          },
          hi: {
            question: "आपके कितने भाई गुजर गए?",
            textInput: "गुजर चुके भाइयों की संख्या दर्ज करें",
            tooltip: "",
            alert:
              "मृत भाइयों की संख्या कुल भाइयों की संख्या से अधिक नहीं हो सकती।",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: "2.2.1",
            translations: {
              en: {
                question: "Cause of death of the deceased brother",
                textInput: "Enter the cause",
                tooltip: "",
              },
              bn: {
                question: "মারা যাওয়া ভাইয়ের মৃত্যুর কারণ",
                textInput: "কারণ লিখুন",
                tooltip: "",
              },
              as: {
                question: "মৃত ভাইৰ মৃত্যুৰ কাৰণ",
                textInput: "কাৰণ লিখক",
                tooltip: "",
              },
              hi: {
                question: "गुजर चुके भाई की मृत्यु का कारण",
                textInput: "कारण दर्ज करें",
                tooltip: "",
              },
            },
          },
          {
            id: 2,
            questionNumber: "2.2.1",
            translations: {
              en: {
                question: "Age of death",
                textInput: "Enter the age of death",
                tooltip: "",
              },
              bn: {
                question: "মৃত্যুর সময় বয়স",
                textInput: "মৃত্যুর সময় বয়স লিখুন",
                tooltip: "",
              },
              as: {
                question: "মৃত্যুৰ সময় বয়স",
                textInput: "মৃত্যুৰ সময় বয়স লিখক",
                tooltip: "",
              },
              hi: {
                question: "मृत्यु के समय उम्र",
                textInput: "मृत्यु के समय उम्र दर्ज करें",
                tooltip: "",
              },
            },
          },
        ],
      },
      {
        id: 3,
        questionNumber: "2.3",
        translations: {
          en: {
            question: "How many sisters do you have?",
            textInput: "Enter the number of sisters you have",
            tooltip: "",
          },
          bn: {
            question: "আপনার কতজন বোন আছে?",
            textInput: "আপনার কতজন বোন আছে লিখুন",
            tooltip: "",
          },
          as: {
            question: "আপোনাৰ কতজন ভগ্নী আছে?",
            textInput: "আপোনাৰ কতজন ভগ্নী আছে লিখক",
            tooltip: "",
          },
          hi: {
            question: "कितने बहन हैं?",
            textInput: "कितने बहन हैं दर्ज करें",
            tooltip: "",
          },
        },
      },
      {
        id: 4,
        questionNumber: "2.4",
        translations: {
          en: {
            question: "How many sisters passed away?",
            textInput: "Number of sisters who passed away",
            tooltip: "",
            alert:
              "The number of deceased sisters cannot exceed the total number of sisters.",
          },
          bn: {
            question: "আপনার কতজন বোন মারা গেছেন?",
            textInput: "মারা যাওয়া বোনয়ের সংখ্যা লিখুন",
            tooltip: "",
            alert: "মৃত বোনের সংখ্যা মোট বোনের সংখ্যার চেয়ে বেশি হতে পারে না।",
          },
          as: {
            question: "আপোনাৰ কতজন ভগ্নী মৃত্যু হৈছে?",
            textInput: "মৃত ভগ্নীৰ সংখ্যা লিখক",
            tooltip: "",
            alert: "মৃত বোনৰ সংখ্যা মুঠ বোনৰ সংখ্যাতকৈ অধিক হব নোৱাৰে।",
          },
          hi: {
            question: "आपके कितने बहन गुजर गए?",
            textInput: "गुजर चुके बहनयों की संख्या दर्ज करें",
            tooltip: "",
            alert:
              "मृत बहनों की संख्या कुल बहनों की संख्या से अधिक नहीं हो सकती।",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: "2.4.1",
            translations: {
              en: {
                question: "Age of death of the deceased sister",
                textInput: "Enter the age of death",
                tooltip: "",
              },
              bn: {
                question: "মারা যাওয়া বোনের মৃত্যুর বয়স",
                textInput: "মৃত্যুর বয়স লিখুন",
                tooltip: "",
              },
              as: {
                question: "মৃত ভগ্নীৰ মৃত্যুৰ বয়স",
                textInput: "মৃত্যুৰ বয়স লিখক",
                tooltip: "",
              },
              hi: {
                question: "गुजर चुकी बहन की मृत्यु की आयु",
                textInput: "मृत्यु की आयु दर्ज करें",
                tooltip: "",
              },
            },
          },
          {
            id: 2,
            questionNumber: "2.4.2",
            translations: {
              en: {
                question: "Cause of death of the deceased sister",
                textInput: "Enter the cause of death",
                tooltip: "",
              },
              bn: {
                question: "মারা যাওয়া বোনের মৃত্যুর কারণ",
                textInput: "মৃত্যুর কারণ লিখুন",
                tooltip: "",
              },
              as: {
                question: "মৃত ভগ্নীৰ মৃত্যুৰ কাৰণ",
                textInput: "মৃত্যুৰ কাৰণ লিখক",
                tooltip: "",
              },
              hi: {
                question: "गुजर चुकी बहन की मृत्यु का कारण",
                textInput: "मृत्यु का कारण दर्ज करें",
                tooltip: "",
              },
            },
          },
        ],
      },
    ],
  },
  {
    // Children
    id: 2,
    questionNumber: "2",
    translations: {
      en: {
        question: "Do you have children?",
        label: [
          "Sons",
          "No of sons",
          "No of dead sons",
          "Daughters",
          "No of daughters",
          "No of dead daughters",
          "Had anybody passed away?",
          "Dead Son",
          "Dead Daughter",
          "Add Details",
          "Update Details",
          "Age of death",
          "years",
          "Alive",
        ],
        options: [
          { id: 1, label: "Yes", value: "Yes" },
          { id: 2, label: "No", value: "No" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনার কি সন্তান আছে?",
        label: [
          "ছেলে",
          "ছেলের সংখ্যা",
          "মারা যাওয়া ছেলের সংখ্যা",
          "মেয়ে",
          "মেয়ের সংখ্যা",
          "মারা যাওয়া মেয়ের সংখ্যা",
          "কেউ মারা গেছেন কি?",
          "মারা যাওয়া ছেলে",
          "মারা যাওয়া মেয়ে",
          "বিস্তারিত যোগ করুন",
          "বিস্তারিত আপডেট করুন",
          "মারা যাওয়ার বয়স",
          "বছর",
          "জীবিত",
        ],
        options: [
          { id: 1, label: "হয়", value: "Yes" },
          { id: 2, label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপোনাৰ সন্তান আছে নেকি?",
        label: [
          "পুত্ৰ",
          "পুত্ৰৰ সংখ্যা",
          "মৃত পুত্ৰৰ সংখ্যা",
          "কন্যা",
          "কন্যাৰ সংখ্যা",
          "মৃত কন্যাৰ সংখ্যা",
          "কোনোৱে মৃত্যু হৈছে নেকি?",
          "মৃত পুত্ৰ",
          "মৃত কন্যা",
          "বিবৰণ যোগ কৰক",
          "বিবৰণ আপডেট কৰক",
          "মৃত্যুৰ বয়স",
          "বছর",
          "জীবিত",
        ],
        options: [
          { id: 1, label: "হয়", value: "Yes" },
          { id: 2, label: "নহয়", value: "No" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपके बच्चे हैं?",
        label: [
          "बेटे",
          "बेटों की संख्या",
          "मृत बेटों की संख्या",
          "बेटियाँ",
          "बेटियों की संख्या",
          "मृत बेटियों की संख्या",
          "क्या किसी की मृत्यु हुई है?",
          "मृत बेटा",
          "मृत बेटी",
          "विवरण जोड़ें",
          "विवरण अपडेट करें",
          "मृत्यु की वय",
          "वर्ष",
          "जीवित",
        ],
        options: [
          { id: 1, label: "हाँ", value: "Yes" },
          { id: 2, label: "नहीं", value: "No" },
        ],
        tooltip: "",
      },
    },
    children: [
      {
        id: 1,
        questionNumber: "2.1",
        translations: {
          en: {
            question: "How many sons do you have?",
            textInput: "Enter the number of sons you have",
            tooltip: "",
          },
          bn: {
            question: "আপনার কতজন ছেলে আছে?",
            textInput: "আপনার কতজন ছেলে আছে লিখুন",
            tooltip: "",
          },
          as: {
            question: "আপোনাৰ কতজন পুত্র আছে?",
            textInput: "আপোনাৰ কতজন পুত্র আছে লিখক",
            tooltip: "",
          },
          hi: {
            question: "कितने बेटे हैं?",
            textInput: "कितने बेटे हैं दर्ज करें",
            tooltip: "",
          },
        },
      },
      {
        id: 2,
        questionNumber: "2.2",
        translations: {
          en: {
            question: "How many sons passed away?",
            textInput: "Number of sons who passed away",
            tooltip: "",
            alert:
              "Number of deceased sons cannot exceed total number of sons.",
          },
          bn: {
            question: "আপনার কতজন ছেলে মারা গেছেন?",
            textInput: "মারা যাওয়া ছেলের সংখ্যা লিখুন",
            tooltip: "",
            alert: "মৃত ছেলের সংখ্যা মোট ছেলের সংখ্যার চেয়ে বেশি হতে পারে না।",
          },
          as: {
            question: "আপোনাৰ কতজন পুত্র মৃত্যু হৈছে?",
            textInput: "মৃত পুত্ৰৰ সংখ্যা লিখক",
            tooltip: "",
            alert: "মৃত পুত্ৰৰ সংখ্যা মোট পুত্ৰৰ সংখ্যাতকৈ অধিক নহব পাৰে।",
          },
          hi: {
            question: "आपके कितने बेटे गुजर गए?",
            textInput: "गुजर चुके बेटों की संख्या दर्ज करें",
            tooltip: "",
            alert:
              "मृत बेटों की संख्या कुल बेटों की संख्या से अधिक नहीं हो सकती।",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: "2.1",
            translations: {
              en: {
                question: "Age of death of the deceased son?",
                textInput: "Enter the age",
                tooltip: "",
              },
              bn: {
                question: "মারা যাওয়া ছেলের মৃত্যুর বয়স?",
                textInput: "মৃত্যুর বয়স লিখুন",
                tooltip: "",
              },
              as: {
                question: "মৃত পুত্ৰৰ মৃত্যুৰ বয়স?",
                textInput: "মৃত্যুৰ বয়স লিখক",
                tooltip: "",
              },
              hi: {
                question: "गुजर चुके बेटे की मृत्यु की आयु?",
                textInput: "मृत्यु की आयु दर्ज करें",
                tooltip: "",
              },
            },
          },
          {
            id: 2,
            questionNumber: "2.2",
            translations: {
              en: {
                question: "Cause of death of the deceased son?",
                textInput: "Enter the cause",
                tooltip: "",
              },
              bn: {
                question: "মারা যাওয়া ছেলের মৃত্যুর কারণ?",
                textInput: "মৃত্যুর কারণ লিখুন",
                tooltip: "",
              },
              as: {
                question: "মৃত পুত্ৰৰ মৃত্যুৰ কাৰণ?",
                textInput: "মৃত্যুৰ কাৰণ লিখক",
                tooltip: "",
              },
              hi: {
                question: "गुजर चुके बेटे की मृत्यु का कारण?",
                textInput: "मृत्यु का कारण दर्ज करें",
                tooltip: "",
              },
            },
          },
        ],
      },
      {
        id: 3,
        questionNumber: "2.3",
        translations: {
          en: {
            question: "How many daughters do you have?",
            textInput: "Enter the number of daughters you have",
            tooltip: "",
          },
          bn: {
            question: "আপনার কতজন মেয়ে আছে?",
            textInput: "আপনার কতজন মেয়ে আছে লিখুন",
            tooltip: "",
          },
          as: {
            question: "আপোনাৰ কতজন কন্যা আছে?",
            textInput: "আপোনাৰ কতজন কন্যা আছে লিখক",
            tooltip: "",
          },
          hi: {
            question: "कितनी बेटियाँ हैं?",
            textInput: "कितनी बेटियाँ हैं दर्ज करें",
            tooltip: "",
          },
        },
      },
      {
        id: 4,
        questionNumber: "2.4",
        translations: {
          en: {
            question: "How many daughters passed away?",
            textInput: "Number of daughters who passed away",
            tooltip: "",
            alert:
              "Number of deceased daughters cannot exceed total number of daughters.",
          },
          bn: {
            question: "আপনার কতজন মেয়ে মারা গেছেন?",
            textInput: "মারা যাওয়া মেয়ের সংখ্যা লিখুন",
            tooltip: "",
            alert:
              "মৃত মেয়ের সংখ্যা মোট মেয়ের সংখ্যার চেয়ে বেশি হতে পারে না।",
          },
          as: {
            question: "আপোনাৰ কতজন কন্যা মৃত্যু হৈছে?",
            textInput: "মৃত কন্যাৰ সংখ্যা লিখক",
            tooltip: "",
            alert: "মৃত কন্যাৰ সংখ্যা কুল কন্যাৰ সংখ্যাতকৈ অধিক নহব পাৰে।",
          },
          hi: {
            question: "आपकी कितनी बेटियाँ गुजर गईं?",
            textInput: "गुजर चुकी बेटियों की संख्या दर्ज करें",
            tooltip: "",
            alert:
              "मृत बेटियों की संख्या कुल बेटियों की संख्या से अधिक नहीं हो सकती।",
          },
        },
        children: [
          {
            id: 3,
            questionNumber: "3.1",
            translations: {
              en: {
                question: "Age of death of the deceased daughter?",
                textInput: "Enter the age",
                tooltip: "",
              },
              bn: {
                question: "মারা যাওয়া মেয়ের মৃত্যুর বয়স?",
                textInput: "মৃত্যুর বয়স লিখুন",
                tooltip: "",
              },
              as: {
                question: "মৃত কন্যাৰ মৃত্যুৰ বয়স?",
                textInput: "মৃত্যুৰ বয়স লিখক",
                tooltip: "",
              },
              hi: {
                question: "गुजर चुकी बेटी की मृत्यु की आयु?",
                textInput: "मृत्यु की आयु दर्ज करें",
                tooltip: "",
              },
            },
          },
          {
            id: 4,
            questionNumber: "3.2",
            translations: {
              en: {
                question: "Cause of death of the deceased daughter?",
                textInput: "Enter the cause",
                tooltip: "",
              },
              bn: {
                question: "মারা যাওয়া মেয়ের মৃত্যুর কারণ?",
                textInput: "মৃত্যুর কারণ লিখুন",
                tooltip: "",
              },
              as: {
                question: "মৃত কন্যাৰ মৃত্যুৰ কাৰণ?",
                textInput: "মৃত্যুৰ কাৰণ লিখক",
                tooltip: "",
              },
              hi: {
                question: "गुजर चुकी बेटी की मृत्यु का कारण?",
                textInput: "मृत्यु का कारण दर्ज करें",
                tooltip: "",
              },
            },
          },
        ],
      },
    ],
  },
];

export const alerts = [

  // Father 0 to 5
  {
    translations: {
      en: {
        alert: "Enter parent details",
      },
      bn: {
        alert: "অভিভাবকের বিবরণ লিখুন",
      },
      as: {
        alert: "পিতামাতাৰ বিবৰণ দিয়ক",
      },
      hi: {
        alert: "माता-पिता का विवरण दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter father name",
      },
      bn: {
        alert: "পিতার নাম লিখুন",
      },
      as: {
        alert: "পিতাৰ নাম লিখক",
      },
      hi: {
        alert: "पिता का नाम दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Choose whether Father is Alive or Dead",
      },
      bn: {
        alert: "পিতার অবস্থা নির্বাচন করুন (জীবিত বা মৃত)",
      },
      as: {
        alert: "পিতাৰ অৱস্থা নিৰ্বাচন কৰক (জীয়াই আছে বা নথয়)",
      },
      hi: {
        alert: "पिता की स्थिति चुनें (जिंदा या मृत)",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter Father Age",
      },
      bn: {
        alert: "পিতার বয়স লিখুন",
      },
      as: {
        alert: "পিতাৰ বয়স লিখক",
      },
      hi: {
        alert: "पिता की उम्र दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter Father's Age of Death",
      },
      bn: {
        alert: "পিতার মৃত্যুর বয়স লিখুন",
      },
      as: {
        alert: "পিতাৰ মৃত্যুৰ বয়স লিখক",
      },
      hi: {
        alert: "पिता की मृत्यु की उम्र दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter cause of Father's Death",
      },
      bn: {
        alert: "পিতার মৃত্যুর কারণ লিখুন",
      },
      as: {
        alert: "পিতাৰ মৃত্যুৰ কাৰণ লিখক",
      },
      hi: {
        alert: "पिता की मृत्यु का कारण दर्ज करें",
      },
    },
  },

// Mother 6 to 10
  {
    translations: {
      en: {
        alert: "Enter Mother Name",
      },
      bn: {
        alert: "মায়ের নাম লিখুন",
      },
      as: {
        alert: "মাতৃৰ নাম লিখক",
      },
      hi: {
        alert: "माता का नाम दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Choose whether Mother is Alive or Dead",
      },
      bn: {
        alert: "মায়ের অবস্থা নির্বাচন করুন (জীবিত বা মৃত)",
      },
      as: {
        alert: "মাতৃৰ অৱস্থা নিৰ্বাচন কৰক (জীয়াই আছে বা নথয়)",
      },
      hi: {
        alert: "माता की स्थिति चुनें (जिंदा या मृत)",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter Mother Age",
      },
      bn: {
        alert: "মায়ের বয়স লিখুন",
      },
      as: {
        alert: "মাতৃৰ বয়স লিখক",
      },
      hi: {
        alert: "माता की उम्र दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter Mother's Age of Death",
      },
      bn: {
        alert: "মায়ের মৃত্যুর বয়স লিখুন",
      },
      as: {
        alert: "মাতৃৰ মৃত্যুৰ বয়স লিখক",
      },
      hi: {
        alert: "माता की मृत्यु की उम्र दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter cause of Mother's Death",
      },
      bn: {
        alert: "মায়ের মৃত্যুর কারণ লিখুন",
      },
      as: {
        alert: "মাতৃৰ মৃত্যুৰ কাৰণ লিখক",
      },
      hi: {
        alert: "माता की मृत्यु का कारण दर्ज करें",
      },
    },
  },


  {
    translations: {
      en: {
        alert: "Enter Siblings Yes/No",
      },
      bn: {
        alert: "ভাইবোন আছে কিনা লিখুন (হ্যাঁ/না)",
      },
      as: {
        alert: "ভাতৃ-ভগ্নী আছে নে নাই লিখক (হয়/নহয়)",
      },
      hi: {
        alert: "भाई-बहन हैं या नहीं दर्ज करें (हाँ/नहीं)",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter Number of Brothers",
      },
      bn: {
        alert: "ভাইয়ের সংখ্যা লিখুন",
      },
      as: {
        alert: "ভাইৰ সংখ্যা লিখক",
      },
      hi: {
        alert: "भाइयों की संख्या दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter Number of Dead Brothers",
      },
      bn: {
        alert: "মৃত ভাইয়ের সংখ্যা লিখুন",
      },
      as: {
        alert: "মৃত ভাইৰ সংখ্যা লিখক",
      },
      hi: {
        alert: "मृत भाइयों की संख्या दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter Number of Sisters",
      },
      bn: {
        alert: "বোনের সংখ্যা লিখুন",
      },
      as: {
        alert: "ভগ্নীৰ সংখ্যা লিখক",
      },
      hi: {
        alert: "बहनों की संख्या दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter Number of Dead Sisters",
      },
      bn: {
        alert: "মৃত বোনের সংখ্যা লিখুন",
      },
      as: {
        alert: "মৃত ভগ্নীৰ সংখ্যা লিখক",
      },
      hi: {
        alert: "मृत बहनों की संख्या दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Missing data for Brother",
      },
      bn: {
        alert: "ভাইয়ের তথ্য অনুপস্থিত",
      },
      as: {
        alert: "ভাইৰ তথ্য অনুপস্থিত",
      },
      hi: {
        alert: "भाई का डेटा गुम है",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Missing data for Sister",
      },
      bn: {
        alert: "বোনের তথ্য অনুপস্থিত",
      },
      as: {
        alert: "ভগ্নীৰ তথ্য অনুপস্থিত",
      },
      hi: {
        alert: "बहन का डेटा गुम है",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter Children Yes/No",
      },
      bn: {
        alert: "সন্তান আছে কিনা লিখুন (হ্যাঁ/না)",
      },
      as: {
        alert: "সন্তান আছে নে নাই লিখক (হয়/নহয়)",
      },
      hi: {
        alert: "बच्चे हैं या नहीं दर्ज करें (हाँ/नहीं)",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter Number of Sons",
      },
      bn: {
        alert: "পুত্রের সংখ্যা লিখুন",
      },
      as: {
        alert: "পুত্ৰৰ সংখ্যা লিখক",
      },
      hi: {
        alert: "पुत्रों की संख्या दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter Number of Daughters",
      },
      bn: {
        alert: "কন্যার সংখ্যা লিখুন",
      },
      as: {
        alert: "কন্যাৰ সংখ্যা লিখক",
      },
      hi: {
        alert: "पुत्रियों की संख्या दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Missing data for Son",
      },
      bn: {
        alert: "পুত্রের তথ্য অনুপস্থিত",
      },
      as: {
        alert: "পুত্ৰৰ তথ্য অনুপস্থিত",
      },
      hi: {
        alert: "पुत्र का डेटा गुम है",
      },
    },
  },
  {
    // 22
    translations: {
      en: {
        alert: "Missing data for Daughter",
      },
      bn: {
        alert: "কন্যার তথ্য অনুপস্থিত",
      },
      as: {
        alert: "কন্যাৰ তথ্য অনুপস্থিত",
      },
      hi: {
        alert: "पुत्री का डेटा गुम है",
      },
    },
  },

  {
    translations: {
      en: {
        alert: "Father's age cannot be so less",
      },
      bn: {
        alert: "পিতার বয়স এত কম হতে পারে না",
      },
      as: {
        alert: "পিতাৰ বয়স এত কম নহব পাৰে",
      },
      hi: {
        alert: "पिता की उम्र इतनी कम नहीं हो सकती",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Father's age cannot be so high",
      },
      bn: {
        alert: "পিতার বয়স এত বেশি হতে পারে না",
      },
      as: {
        alert: "পিতাৰ বয়স এত বেছি নহব পাৰে",
      },
      hi: {
        alert: "पिता की उम्र इतनी अधिक नहीं हो सकती",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Father's age cannot be zero",
      },
      bn: {
        alert: "পিতার বয়স শূন্য হতে পারে না",
      },
      as: {
        alert: "পিতাৰ বয়স শূন্য নহব পাৰে",
      },
      hi: {
        alert: "पिता की उम्र शून्य नहीं हो सकती",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Father's death age cannot be so less",
      },
      bn: {
        alert: "পিতার মৃত্যুর বয়স এত কম হতে পারে না",
      },
      as: {
        alert: "পিতাৰ মৃত্যুৰ বয়স এত কম নহব পাৰে",
      },
      hi: {
        alert: "पिता की मृत्यु की उम्र इतनी कम नहीं हो सकती",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Father's death age cannot be so high",
      },
      bn: {
        alert: "পিতার মৃত্যুর বয়স এত বেশি হতে পারে না",
      },
      as: {
        alert: "পিতাৰ মৃত্যুৰ বয়স এত বেছি নহব পাৰে",
      },
      hi: {
        alert: "पिता की मृत्यु की उम्र इतनी अधिक नहीं हो सकती",
      },
    },
  },
  {
    // 28
    translations: {
      en: {
        alert: "Father's death age cannot be zero",
      },
      bn: {
        alert: "পিতার মৃত্যুর বয়স শূন্য হতে পারে না",
      },
      as: {
        alert: "পিতাৰ মৃত্যুৰ বয়স শূন্য নহব পাৰে",
      },
      hi: {
        alert: "पिता की मृत्यु की उम्र शून्य नहीं हो सकती",
      },
    },
  },

  {
    translations: {
      en: {
        alert:
          "Number of Brothers and Sisters can't be empty when there are siblings",
      },
      bn: {
        alert: "ভাইবোন থাকলে ভাই ও বোনের সংখ্যা খালি থাকতে পারবে না",
      },
      as: {
        alert: "ভাইবোন থাকিলে ভাই আৰু ভগ্নীৰ সংখ্যা খালী হ’ব নোৱাৰে",
      },
      hi: {
        alert: "यदि भाई-बहन हैं तो उनकी संख्या खाली नहीं हो सकती",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter the number of dead brothers",
      },
      bn: {
        alert: "মৃত ভাইয়ের সংখ্যা লিখুন",
      },
      as: {
        alert: "মৃত ভাইৰ সংখ্যা দিয়ক",
      },
      hi: {
        alert: "मृत भाइयों की संख्या दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter the number of dead sisters",
      },
      bn: {
        alert: "মৃত বোনের সংখ্যা লিখুন",
      },
      as: {
        alert: "মৃত ভগ্নীৰ সংখ্যা দিয়ক",
      },
      hi: {
        alert: "मृत बहनों की संख्या दर्ज करें",
      },
    },
  },

  {
    translations: {
      en: {
        alert:
          "Number of Sons and Daughters can't be empty when there are children",
      },
      bn: {
        alert: "সন্তান থাকলে ছেলে ও মেয়ের সংখ্যা খালি থাকতে পারবে না",
      },
      as: {
        alert: "সন্তান থাকিলে পুত্ৰ আৰু কন্যাৰ সংখ্যা খালী হ’ব নোৱাৰে",
      },
      hi: {
        alert: "यदि संतान हैं तो उनकी संख्या खाली नहीं हो सकती",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter the number of dead sons",
      },
      bn: {
        alert: "মৃত ছেলের সংখ্যা লিখুন",
      },
      as: {
        alert: "মৃত পুত্ৰৰ সংখ্যা দিয়ক",
      },
      hi: {
        alert: "मृत पुत्रों की संख्या दर्ज करें",
      },
    },
  },
  {
    translations: {
      en: {
        alert: "Enter the number of dead daughters",
      },
      bn: {
        alert: "মৃত মেয়ের সংখ্যা লিখুন",
      },
      as: {
        alert: "মৃত কন্যাৰ সংখ্যা দিয়ক",
      },
      hi: {
        alert: "मृत पुत्रियों की संख्या दर्ज करें",
      },
    },
  },
];
