export const lifestyleQuestions = [
    // Wellness
    // Question 1 - Diet Type
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
                question: "Mention Your Diet Type",
                options: [
                    { id: "1", label: "Vegetarian", value: "Vegetarian" },
                    { id: "2", label: "Non-Vegetarian", value: "Non-Vegetarian" },
                    { id: "3", label: "Vegan", value: "Vegan" },
                ],
                tooltip: "Select your dietary preference.",
            },
            bn: {
                question: "আপনার খাদ্য ধরণ উল্লেখ করুন",
                options: [
                    { id: "1", label: "নিরামিষ", value: "Vegetarian" },
                    { id: "2", label: "মাংসাশী", value: "Non-Vegetarian" },
                    { id: "3", label: "ভিগান", value: "Vegan" },
                ],
                tooltip: "আপনার খাদ্য পছন্দ নির্বাচন করুন।",
            },
            as: {
                question: "আপোনাৰ আহাৰৰ পছন্দ নিৰ্বাচন কৰুন",
                options: [
                    { id: "1", label: "নিৰামিষ", value: "Vegetarian" },
                    { id: "2", label: "মাংসাহাৰী", value: "Non-Vegetarian" },
                    { id: "3", label: "ভিগান", value: "Vegan" },
                ],
                tooltip: "আপোনাৰ আহাৰৰ পছন্দ নিৰ্বাচন কৰক।",
            },
            hi: {
                question: "आपका आहार पसंद चुनें",
                options: [
                    { id: "1", label: "शाकाहारी", value: "Vegetarian" },
                    { id: "2", label: "मांसाहारी", value: "Non-Vegetarian" },
                    { id: "3", label: "वैगन", value: "Vegan" },
                ],
                tooltip: "अपनी आहार पसंद चुनें।",
            },
        },
    },
    // Question 2 - Stress
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
                question: "Do you feel regular stress?",
                options: [
                    { id: "1", label: "Yes", value: "Yes" },
                    { id: "2", label: "No", value: "No" },
                ],
                tooltip: "",
            },
            bn: {
                question: "আপনি কি সাধারণ স্ট্রেস পান করেন?",
                options: [
                    { id: "1", label: "হ্যাঁ", value: "Yes" },
                    { id: "2", label: "না", value: "No" },
                ],
                tooltip: "",
            },
            as: {
                question: "আপোনাৰ সাধারণ স্ট্রেস পান কৰেন নেকি?",
                options: [
                    { id: "1", label: "হ্যাঁ", value: "Yes" },
                    { id: "2", label: "না", value: "No" },
                ],
                tooltip: "",
            },
            hi: {
                question: "क्या आपको साधारण स्ट्रेस पान करते हैं?",
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
                questionNumber: {
                    en: "2.1",
                    bn: "২.১",
                    as: "২.১",
                    hi: "२.१",
                },
                translations: {
                    en: {
                        question: "Why do you feel stressed?",
                        options: [
                            { id: "1", label: "Work", value: "Work" },
                            { id: "2", label: "Family", value: "Family" },
                            { id: "3", label: "Financial", value: "Financial" },
                            { id: "4", label: "Other", value: "Other" },
                        ],
                        tooltip: "",
                    },
                    bn: {
                        question: "আপনি কেন স্ট্রেস পান করেন?",
                        options: [
                            { id: "1", label: "কাজ", value: "Work" },
                            { id: "2", label: "পরিবার", value: "Family" },
                            { id: "3", label: "বাণিজ্য", value: "Financial" },
                            { id: "4", label: "অন্যান্য", value: "Other" },
                        ],
                        tooltip: "",
                    },
                    as: {
                        question: "আপোনাৰ স্ট্রেস পান কৰেন কি?",
                        options: [
                            { id: "1", label: "কাজ", value: "Work" },
                            { id: "2", label: "পৰিবৰ", value: "Family" },
                            { id: "3", label: "বাণিজ্য", value: "Financial" },
                            { id: "4", label: "অন্যান্য", value: "Other" },
                        ],
                        tooltip: "",
                    },
                    hi: {
                        question: "क्या आपको स्ट्रेस पान करते हैं?",
                        options: [
                            { id: "1", label: "काम", value: "Work" },
                            { id: "2", label: "परिवार", value: "Family" },
                            { id: "3", label: "वित्तीय", value: "Financial" },
                            { id: "4", label: "अन्यान्य", value: "Other" },
                        ],
                        tooltip: "",
                    },
                },
            },
            {
                id: "2",
                questionNumber: {
                    en: "2.2",
                    bn: "২.২",
                    as: "২.২",
                    hi: "२.२",
                },
                translations: {
                    en: {
                        question: "Mention your cause of stress",
                        textInput: "Please enter your cause of stress",
                    },
                    bn: {
                        question: "আপনার স্ট্রেসের কারণ উল্লেখ করুন",
                        textInput: "আপনার স্ট্রেসের কারণ লিখুন",
                    },
                    as: {
                        question: "আপোনাৰ স্ট্রেসের কারণ উল্লেখ করুন",
                        textInput: "আপোনাৰ স্ট্রেসের কারণ লিখুন",
                    },
                    hi: {
                        question: "क्या आपको स्ट्रेस पान करते हैं",
                        textInput: "कृपया अपने स्ट्रेस का कारण लिखें",
                    },
                }
            }

        ],

    },
    // Question 3 - Sitting
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
                question: "What is your working type?",
                options: [
                    { id: "1", label: "Sitting", value: "Sitting" },
                    { id: "2", label: "Other", value: "Other" },
                ],
                tooltip: "",
            },
            bn: {
                question: "আপনার কাজের ধরণ কি?",
                options: [
                    { id: "1", label: "সাইটিং", value: "Sitting" },
                    { id: "2", label: "অন্যান্য", value: "Other" },
                ],
                tooltip: "",
            },
            as: {
                question: "আপোনাৰ কাজের ধৰণ কি?",
                options: [
                    { id: "1", label: "সাইটিং", value: "Sitting" },
                    { id: "2", label: "অন্যান্য", value: "Other" },
                ],
                tooltip: "",
            },
            hi: {
                question: "आपका काम कैसा है?",
                options: [
                    { id: "1", label: "बैठकर", value: "Sitting" },
                    { id: "2", label: "अन्य", value: "Other" },
                ],
                tooltip: "",
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
                        question: "Mention your working hours",
                        options: [
                            { id: "1", label: "Less than 6 hours", value: "Less than 6 hours" },
                            { id: "2", label: "6 to 8 hours", value: "6 to 8 hours" },
                            { id: "3", label: "More than 8 hours", value: "More than 8 hours" },
                        ],
                        tooltip: "",
                    },
                    bn: {
                        question: "আপনার কাজের ঘণ্টা উল্লেখ করুন",
                        options: [
                            { id: "1", label: "ছয় ঘন্টা কম", value: "Less than 6 hours" },
                            { id: "2", label: "ছয় থেকে আট ঘন্টা", value: "6 to 8 hours" },
                            { id: "3", label: "আট ঘন্টা বেশি", value: "More than 8 hours" },
                        ],
                        tooltip: "",
                    },
                    as: {
                        question: "আপোনাৰ কাজে ঘণ্টা উল্লেখ কৰুন",
                        options: [
                            { id: "1", label: "ছয় ঘন্টা কম", value: "Less than 6 hours" },
                            { id: "2", label: "ছয় থেকে আট ঘন্টা", value: "6 to 8 hours" },
                            { id: "3", label: "আট ঘন্টা বেশি", value: "More than 8 hours" },
                        ],
                        tooltip: "",
                    },
                    hi: {
                        question: "आपका काम कितने घंटे है?",
                        options: [
                            { id: "1", label: "छह घंटा से कम", value: "Less than 6 hours" },
                            { id: "2", label: "छह घंटे से ८ घंटे", value: "6 to 8 hours" },
                            { id: "3", label: "८ घंटे से अधिक", value: "More than 8 hours" },
                        ],
                        tooltip: "",
                    },
                },
            },
        ]
    },
    // Question 4 - Sleep
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
                question: "Mention your sleep cycle?",
                label: "Add Sleep Details",
            },
            bn: {
                question: "আপনার ঘুমের সাইকেল উল্লেখ করুন?",
                label: "ঘুমের বিস্তারিত যোগ করুন",
            },
            as: {
                question: "আপোনাৰ ঘুমে সাইকেল উল্লেখ কৰুন?",
                label: "ঘুমে বিস্তারিত যোগ কৰুন",
            },
            hi: {
                question: "आपका स्लीप साइकल उल्लेख करें?",
                label: "स्लीप विस्तारित जोड़ें",
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
                        question: "Any interruptions during sleeping?",
                        options: [
                            { id: "1", label: "Yes", value: "Yes" },
                            { id: "2", label: "No", value: "No" },
                        ],
                        tooltip: "",
                    },
                    bn: {
                        question: "ঘুমে কোন প্রতিবেদন হয়?",
                        options: [
                            { id: "1", label: "হ্যাঁ", value: "Yes" },
                            { id: "2", label: "না", value: "No" },
                        ],
                        tooltip: "",
                    },
                    as: {
                        question: "ঘুমে কোন প্রতিবেদন হয়?",
                        options: [
                            { id: "1", label: "হ্যাঁ", value: "Yes" },
                            { id: "2", label: "না", value: "No" },
                        ],
                        tooltip: "",
                    },
                    hi: {
                        question: "स्लीप में कोई प्रतिबेदन है?",
                        options: [
                            { id: "1", label: "हाँ", value: "Yes" },
                            { id: "2", label: "नहीं", value: "No" },
                        ],
                        tooltip: "",
                    },
                },
            },
            {
                id: 2,
                questionNumber: {
                    en: "4.2",
                    bn: "৪.২",
                    as: "৪.২",
                    hi: "४.२",
                },
                translations: {
                    en: {
                        question: "What is your sleeping duration?",
                        options: [
                            { id: "1", label: "Less than 6 hours", value: "Less than 6 hours" },
                            { id: "2", label: "6 to 8 hours", value: "6 to 8 hours" },
                            { id: "3", label: "More than 8 hours", value: "More than 8 hours" },
                        ],
                        tooltip: "",
                    },
                    bn: {
                        question: "আপনার ঘুমের সময় কত?",
                        options: [
                            { id: "1", label: "ছয় ঘন্টা কম", value: "Less than 6 hours" },
                            { id: "2", label: "ছয় থেকে আট ঘন্টা", value: "6 to 8 hours" },
                            { id: "3", label: "আট ঘন্টা বেশি", value: "More than 8 hours" },
                        ],
                        tooltip: "",
                    },
                    as: {
                        question: "আপুনির ঘুমের সময় কত?",
                        options: [
                            { id: "1", label: "ছয় ঘন্টা কম", value: "Less than 6 hours" },
                            { id: "2", label: "ছয় থেকে আট ঘন্টা", value: "6 to 8 hours" },
                            { id: "3", label: "আট ঘন্টা বেশি", value: "More than 8 hours" },
                        ],
                        tooltip: "",
                    },
                    hi: {
                        question: "आपकी नींद की अवधि क्या है?",
                        options: [
                            { id: "1", label: "6 घंटे से कम", value: "Less than 6 hours" },
                            { id: "2", label: "6 से 8 घंटे", value: "6 to 8 hours" },
                            { id: "3", label: "8 घंटे से अधिक", value: "More than 8 hours" },
                        ],
                        tooltip: "",
                    },
                },
            },


        ]
    },
    // Addiction

    {
        id: 5,
        questionNumber: {
            en: "1",
            bn: "১",
            as: "১",
            hi: "१",
        },
        translations: {
            en: {
                question: "Do you have any addiction?",
                options: [
                    { id: "1", label: "Yes", value: "Yes" },
                    { id: "2", label: "No", value: "No" },
                ],
                tooltip: "",
            },
            bn: {
                question: "আপনার কোন নেশা আছে?",
                options: [
                    { id: "1", label: "হ্যাঁ", value: "Yes" },
                    { id: "2", label: "না", value: "No" },
                ],
                tooltip: "",
            },
            as: {
                question: "আপোনার কোন নেশা আছে?",
                options: [
                    { id: "1", label: "হ্যাঁ", value: "Yes" },
                    { id: "2", label: "না", value: "No" },
                ],
                tooltip: "",
            },
            hi: {
                question: "क्या आपको कोई नशा है?",
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
                questionNumber: {
                    en: "1.1",
                    bn: "১.১",
                    as: "১.১",
                    hi: "१.१",
                },
                translations: {
                    en: {
                        question: "Substancial",
                        options: [
                            { id: "1", label: "Smoking", value: "Smoking" },
                            { id: "2", label: "Alcohol", value: "Alcohol" },
                            { id: "3", label: "Prescribed Drug", value: "Prescribed Drug" },
                            { id: "4", label: "Tea", value: "Tea" },
                            { id: "5", label: "Coffee", value: "Coffee" },
                            { id: "6", label: "Edible Tobacco", value: "Edible Tobacco" },
                        ],
                        tooltip: "",
                    },
                as: {
                    question: "সাবস্ট্যানসিয়াল",
                    options: [
                        { id: "1", label: "ধূমপান", value: "Smoking" },
                        { id: "2", label: "মদ্যপান", value: "Alcohol" },
                        { id: "3", label: "নির্দিষ্ট ওষুধ", value: "Prescribed Drug" },
                        { id: "4", label: "চা", value: "Tea" },
                        { id: "5", label: "কফি", value: "Coffee" },
                        { id: "6", label: "খাদ্য টব্যাকো", value: "Edible Tobacco" },
                    ],
                    tooltip: "",
                },
                hi: {
                    question: "सब्स्टेंशियल",
                    options: [
                        { id: "1", label: "धूम्रपान", value: "Smoking" },
                        { id: "2", label: "मादक पेय", value: "Alcohol" },
                        { id: "3", label: "निर्धारित दवा", value: "Prescribed Drug" },
                        { id: "4", label: "चाय", value: "Tea" },
                        { id: "5", label: "कॉफी", value: "Coffee" },
                        { id: "6", label: "खाद्य टोबैको", value: "Edible Tobacco" },
                    ],
                    tooltip: "",
                },
                bn: {
                    question: "সাবস্ট্যানসিয়াল",
                    options: [
                        { id: "1", label: "ধূমপান", value: "Smoking" },
                        { id: "2", label: "মদ্যপান", value: "Alcohol" },
                        { id: "3", label: "নির্দিষ্ট ওষুধ", value: "Prescribed Drug" },
                        { id: "4", label: "চা", value: "Tea" },
                        { id: "5", label: "কফি", value: "Coffee" },
                        { id: "6", label: "খাদ্য টব্যাকু", value: "Edible Tobacco" },
                    ],
                    tooltip: "",
                },
                },
            },
            {
                id: 2,
                questionNumber: {
                    en: "1.2",
                    hi: "१.२",
                    bn: "১.২",
                    as: "১.২",
                },
                translations: {
                    en: {
                        question: "Behavioral",
                        options: [
                            { id: "1", label: "Gambling", value: "Gambling" },
                            { id: "2", label: "Social Media", value: "Social Media" },
                            { id: "3", label: "Shopping", value: "Shopping" },
                            { id: "4", label: "Outside Food", value: "Outside Food" },
                        ],
                        tooltip: "",
                    },
                    bn: {
                        question: "আচরণগত",
                        options: [
                            { id: "1", label: "গেমব্লিং", value: "Gambling" },
                            { id: "2", label: "সামাজিক মিডিয়া", value: "Social Media" },
                            { id: "3", label: "শপিং", value: "Shopping" },
                            { id: "4", label: "বাইরের খাবার", value: "Outside Food" },
                        ],
                        tooltip: "",
                    },
                    as: {
                        question: "আচরণগত",
                        options: [
                            { id: "1", label: "গেমব্লিং", value: "Gambling" },
                            { id: "2", label: "সামাজিক মিডিয়া", value: "Social Media" },
                            { id: "3", label: "শপিং", value: "Shopping" },
                            { id: "4", label: "বাইরের খাবার", value: "Outside Food" },
                        ],
                        tooltip: "",
                    },
                    hi: {
                        question: "व्यवहारिक",
                        options: [
                            { id: "1", label: "गेमब्लिंग", value: "Gambling" },
                            { id: "2", label: "सोशल मीडिया", value: "Social Media" },
                            { id: "3", label: "शॉपिंग", value: "Shopping" },
                            { id: "4", label: "बाहरी खाद्य", value: "Outside Food" },
                        ],
                        tooltip: "",
                    },
                }
            }
        ]

    },
    // Question 1 - Smoking
    {
        id: 6,
        questionNumber: {
            en: "1",
            bn: "১",
            as: "১",
            hi: "१",
        },
        translations: {
            en: {
                question: "Mention Smoking Details",
                label: "Add Smoking Details",
                tooltip: "Do you smoke?",
            },
            bn: {
                question: "স্মকিং বিস্তারিত উল্লেখ করুন",
                label: "স্মকিং বিস্তারিত যোগ করুন",
                tooltip: "আপনি স্মকিং করবেন?",
            },
            as: {
                question: "স্মকিং বিস্তারিত উল্লেখ করুন",
                label: "স্মকিং বিস্তারিত যোগ করুন",
                tooltip: "আপুনি স্মকিং করবেন?",
            },
            hi: {
                question: "स्मोकिंग विवरण जोड़ें",
                label: "स्मोकिंग विवरण जोड़ें",
                tooltip: "क्या आप स्मोकिंग करते हैं?",
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
                        question: "Smoking Frequency",
                        options: [
                            { id: "1", label: "Occasional", value: "Occasional" },
                            { id: "2", label: "Regular", value: "Regular" },
                            { id: "3", label: "Chain Smoker", value: "Chain Smoker" },
                        ],
                        tooltip: "How often do you smoke?",
                    },
                    bn: {
                        question: "ধূমপানের ফ্রিকোয়েন্সি",
                        options: [
                            { id: "1", label: "মাঝেমধ্যে", value: "Occasional" },
                            { id: "2", label: "নিয়মিত", value: "Regular" },
                            { id: "3", label: "চেইন স্মোকার", value: "Chain Smoker" },
                        ],
                        tooltip: "আপনি কত ঘন ঘন ধূমপান করেন?",
                    },
                    as: {
                        question: "ধূমপানৰ প্ৰাৱল্য",
                        options: [
                            { id: "1", label: "মাজে মাজে", value: "Occasional" },
                            { id: "2", label: "নিয়মীয়া", value: "Regular" },
                            { id: "3", label: "চেইন স্মোকাৰ", value: "Chain Smoker" },
                        ],
                        tooltip: "আপুনি কিমান সঘনে ধূমপান কৰে?",
                    },
                    hi: {
                        question: "धूम्रपान की आवृत्ति",
                        options: [
                            { id: "1", label: "कभी-कभी", value: "Occasional" },
                            { id: "2", label: "नियमित", value: "Regular" },
                            { id: "3", label: "चेन स्मोकर", value: "Chain Smoker" },
                        ],
                        tooltip: "आप कितनी बार धूम्रपान करते हैं?",
                    },
                },
            },
        ],
    },
    // Question 3 - Alcohol
    {
        id: 7,
        questionNumber: {
            en: "2",
            bn: "২",
            as: "২",
            hi: "२",
        },
        translations: {
            en: {
                question: "Mention Alcohol Consumption",
                label: "Add Alcohol Consumption Details",
                tooltip: "Do you drink alcohol?",
            },
            bn: {
                question: "আলকোহল গ্রহণ",
                label: "আলকোহল গ্রহণের বিবরণ যোগ করুন",
                tooltip: "আপনি আলকোহল গ্রহণ করেন?",
            },
            as: {
                question: "আলকোহল গ্রহণ",
                label: "আলকোহল গ্রহণের বিবরণ যোগ করুন",
                tooltip: "আপুনি আলকোহল গ্রহণ কৰে?",
            },
            hi: {
                question: "मेंशन अल्कोहल का सेवन",
                label: "अल्कोहल का सेवन के बारे में विवरण जोड़ें",
                tooltip: "क्या आप अल्कोहल पीते हैं?",
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
                        question: "Mention Alcohol Consumption Frequency",
                        options: [
                            { id: "1", label: "Occasional", value: "Occasional" },
                            { id: "2", label: "Regular", value: "Regular" },
                            { id: "3", label: "Alcoholic", value: "Alcoholic" },
                        ],
                        tooltip: "How often do you drink alcohol?",
                    },
                    bn: {
                        question: "মদ্যপানের প্রয়োগ উল্লেখ করুন",
                        options: [
                            { id: "1", label: "মাঝেমধ্যে", value: "Occasional" },
                            { id: "2", label: "নিয়মীয়া", value: "Regular" },
                            { id: "3", label: "মদ্যপায়ী", value: "Alcoholic" },
                        ],
                        tooltip: "আপনি কত ঘন ঘন মদ্যপান করেন?",
                    },
                    as: {
                        question: "মদ্যপানৰ প্ৰযোগ উল্লেখ কৰক",
                        options: [
                            { id: "1", label: "মাজে মাজে", value: "Occasional" },
                            { id: "2", label: "নিয়মীয়া", value: "Regular" },
                            { id: "3", label: "মদ্যপায়ী", value: "Alcoholic" },
                        ],
                        tooltip: "আপুনি কিমান সঘনে মদ্যপান কৰে?",
                    },
                    hi: {
                        question: "अल्कोहल सेवन का उल्लेख करें",
                        options: [
                            { id: "1", label: "कभी-कभी", value: "Occasional" },
                            { id: "2", label: "नियमित", value: "Regular" },
                            { id: "3", label: "शराबी", value: "Alcoholic" },
                        ],
                        tooltip: "आप कितनी बार शराब पीते हैं?",
                    },
                },
            },
        ],
    },
    // Question 4 - Prescribed Drug
    {
        id: 8,
        questionNumber: {
            en: "3",
            bn: "৩",
            as: "৩",
            hi: "३",
        },
        translations: {
            en: {
                question: "Prescribed Drugs",
                label: "Add prescribed drug you use",
                tooltip: "Please specify which prescribed drugs you use.",
            },
            bn: {
                question: "নির্ধারিত ওষুধ",
                label: "নির্ধারিত ওষুধ যা আপনি ব্যবহার করেন",
                tooltip: "যে নির্ধারিত ওষুধগুলি আপনি ব্যবহার করেন তা নির্দিষ্ট করুন।",
            },
            as: {
                question: "নিৰ্ধাৰিত ওষুধ",
                label: "নিৰ্ধাৰিত ওষুধ যা আপুনি ব্যবহাৰ কৰেন",
                tooltip: "আপুনি কোন নিৰ্ধাৰিত ওষুধগুলি ব্যবহাৰ কৰেন তা নিৰ্দিষ্ট কৰুন",
            },
            hi: {
                question: "निर्धारित दवाएं",
                label: "निर्धारित दवाएं जो आप ब्यवहार करते हैं",
                tooltip: "कृपया निर्धारित दवाएं जो आप ब्यवहार करते हैं निर्दिष्ट करें।",
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
                        question: "Mention your prescribed drugs",
                        textinput: "Type here...",
                        tooltip: "Please specify which prescribed drugs you use.",
                    },
                    bn: {
                        question: "নির্ধারিত করুন আপনার নির্ধারিত ওষুধ",
                        textinput: "এখানে টাইপ করুন...",
                        tooltip: "অনুগ্রহ করে নির্দিষ্ট করুন কোন প্রেসক্রাইব করা ওষুধ আপনি ব্যবহার করেন।",
                    },
                    as: {
                        question: "আপোনাৰ নিৰ্ধাৰিত ঔষধ উল্লেখ কৰক",
                        textinput: "ইয়াত টাইপ কৰক...",
                        tooltip: "অনুগ্ৰহ কৰি নিৰ্দিষ্ট কৰক আপুনি কোন প্ৰেছক্রাইব কৰা ঔষধ ব্যৱহাৰ কৰে।",
                    },
                    hi: {
                        question: "अपनी निर्धारित दवाएं उल्लेख करें",
                        textinput: "यहाँ टाइप करें...",
                        tooltip: "कृपया निर्दिष्ट करें कि आप कौन सी निर्धारित दवाओं का उपयोग करते हैं।",
                    },
                },
            },
        ],
    },
    // Question 5 - Tea
    {
        id: 9,
        questionNumber: {
            en: "4",
            bn: "৪",
            as: "৪",
            hi: "४",
        },
        translations: {
            en: {
                question: "Mention your Tea Consumption",
                label: "Add Tea Consumption Details",
                tooltip: "Do you drink tea?",
            },
            bn: {
                question: "আপনার চা গ্রহণ উল্লেখ করুন",
                label: "চা গ্রহণের বিবরণ যোগ করুন",
                tooltip: "আপনি চা গ্রহণ করেন?",
            },
            as: {
                question: "আপনার চা গ্রহণ উল্লেখ কৰুন",
                label: "চা গ্রহণের বিবৰণ যোগ কৰুন",
                tooltip: "আপনি চা গ্রহণ কৰেন?",
            },
            hi: {
                question: "अपनी चाय का सेवन करें",
                label: "चाय का सेवन के बारे में विवरण जोड़ें",
                tooltip: "आप चाय का सेवन करते हैं?",
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
                        question: "Tea Frequency",
                        options: [
                            { id: "1", label: "Regular", value: "Regular" },
                            { id: "2", label: "Sometimes", value: "Sometimes" },
                        ],
                        tooltip: "How often do you drink tea?",
                    },
                    bn: {
                        question: "চা পান করার ফ্রিকোয়েন্সি",
                        options: [
                            { id: "1", label: "নিয়মিত", value: "Regular" },
                            { id: "2", label: "মাঝেমধ্যে", value: "Sometimes" },
                        ],
                        tooltip: "আপনি কত ঘন ঘন চা পান করেন?",
                    },
                    as: {
                        question: "চাহ খাবলৰ প্ৰাৱল্য",
                        options: [
                            { id: "1", label: "নিয়মীয়া", value: "Regular" },
                            { id: "2", label: "মাজে মাজে", value: "Sometimes" },
                        ],
                        tooltip: "আপুনি কিমান সঘনে চাহ খায়?",
                    },
                    hi: {
                        question: "चाय पीने की आवृत्ति",
                        options: [
                            { id: "1", label: "नियमित", value: "Regular" },
                            { id: "2", label: "कभी-कभी", value: "Sometimes" },
                        ],
                        tooltip: "आप कितनी बार चाय पीते हैं?",
                    },
                },
            },
        ],
    },
    // Question 9 - Coffee
    {
        id: 10,
        questionNumber: {
            en: "5",
            bn: "৫",
            as: "৫",
            hi: "५",
        },
        translations: {
            en: {
                question: "Mention your Coffee Consumption",
                label: "Add Coffee Consumption Details",
                tooltip: "Do you drink coffee?",
            },
            bn: {
                question: "কফি পান করার প্রয়োজন",
                label: "কফি পান করার বিবরণ যোগ করুন",
                tooltip: "আপনি কফি পান করেন?",
            },
            as: {
                question: "কফি পান করার প্রয়োজন",
                label: "কফি পান করার বিবৰণ যোগ কৰুন",
                tooltip: "আপুনি কফি পান কৰেন?",
            },
            hi: {
                question: "कॉफी पीने की आवश्यकता",
                label: "कॉफी पीने के बारे में विवरण जोड़ें",
                tooltip: "आप कितनी बार कॉफी पीते हैं?",
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
                        question: "Coffee Frequency",
                        options: [
                            { id: "1", label: "Regular", value: "Regular" },
                            { id: "2", label: "Sometimes", value: "Sometimes" },
                        ],
                        tooltip: "How often do you drink coffee?",
                    },
                    bn: {
                        question: "কফি পান করার ফ্রিকোয়েন্সি",
                        options: [
                            { id: "1", label: "নিয়মিত", value: "Regular" },
                            { id: "2", label: "মাঝেমধ্যে", value: "Sometimes" },
                        ],
                        tooltip: "আপনি কত ঘন ঘন কফি পান করেন?",
                    },
                    as: {
                        question: "কফি খোৱাৰ প্ৰাৱল্য",
                        options: [
                            { id: "1", label: "নিয়মীয়া", value: "Regular" },
                            { id: "2", label: "মাজে মাজে", value: "Sometimes" },
                        ],
                        tooltip: "আপুনি কিমান সঘনে কফি খায়?",
                    },
                    hi: {
                        question: "कॉफी पीने की आवृत्ति",
                        options: [
                            { id: "1", label: "नियमित", value: "Regular" },
                            { id: "2", label: "कभी-कभी", value: "Sometimes" },
                        ],
                        tooltip: "आप कितनी बार कॉफी पीते हैं?",
                    },
                },
            },
        ],
    },
    // Question 10 - Edible Tobacco
    {
        id: 11,
        questionNumber: {
            en: "6",
            bn: "৬",
            as: "৬",
            hi: "६",
        },
        translations: {
            en: {
                question: "Edible Tobacco",
                label: "Add Edible Tobacco Details",
                tooltip: "Do you use edible tobacco?",
            },
            bn: {
                question: "খাওয়া যায় টব্যাকো",
                label: "খাওয়া যায় টব্যাকোর বিবরণ যোগ করুন",
                tooltip: "আপনি খাওয়া যায় টব্যাকো ব্যবহার করেন?",
            },
            hi: {
                question: "खाद्य टंबाकू",
                label: "खाद्य टंबाकू के बारे में विवरण जोड़ें",
                tooltip: "क्या आप खाद्य टंबाकू का उपयोग करते हैं?",
            },
            as: {
                question: "খাওয়া যায় টব্যাকো",
                label: "খাওয়া যায় টব্যাকোর বিবরণ যোগ করুন",
                tooltip: "আপুনি খাওয় া যায় টব্যাকো ব্যবহার করেন?",
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
                        question: "Choose Edible Tobacco",
                        options: [
                            { id: 1, label: "Gutkha", value: "Gutkha" },
                            { id: 2, label: "Khaini", value: "Khaini" },
                            { id: 3, label: "Zarda", value: "Zarda" },
                            { id: 4, label: "Other", value: "Other" },
                        ],
                        tooltip: "What type of edible tobacco do you use?",
                    },
                    bn: {
                        question: "খাওয়া যায় টব্যাকো বেছে নিন",
                        options: [
                            { id: 1, label: "গুটকা", value: "Gutkha" },
                            { id: 2, label: "খাইনি", value: "Khaini" },
                            { id: 3, label: "জারদা", value: "Zarda" },
                            { id: 4, label: "অন্যান্য", value: "Other" },
                        ],
                        tooltip: "আপনি কোন ধরনের খাওয়া যায় টব্যাকো ব্যবহার করেন?",
                    },
                    hi: {
                        question: "खाद्य टंबाकू चुनें",
                        options: [
                            { id: 1, label: "गुटखा", value: "Gutkha" },
                            { id: 2, label: "खैनी", value: "Khaini" },
                            { id: 3, label: "जारदा", value: "Zarda" },
                            { id: 4, label: "अन्य", value: "Other" },
                        ],
                        tooltip: "आप किस प्रकार का खाद्य टंबाकू उपयोग करते हैं?",
                    },
                    as: {
                        question: "খাওয়া যায় টব্যাকো বেছে নিন",
                        options: [
                            { id: 1, label: "গুটকা", value: "Gutkha" },
                            { id: 2, label: "খাইনি", value: "Khaini" },
                            { id: 3, label: "জারদা", value: "Zarda" },
                            { id: 4, label: "অন্যান্য", value: "Other" },
                        ],
                        tooltip: "আপনি কোন ধরনের খাওয়া যায� টব্যাকো ব্যবহার কৰে?",
                    },
                },
            },
            {
                id: 2,
                questionNumber: {
                    en: "6.2",
                    bn: "৬.২",
                    hi: "६.२",
                    as: "৬.২",
                },
                translations: {
                    en: {
                        question: "Mention Consumption Frequency",
                        options: [
                            { id: 1, label: "Regular", value: "Regular" },
                            { id: 2, label: "Sometimes", value: "Sometimes" },
                        ],
                        tooltip: "How often do you consume edible tobacco?",
                    },
                    bn: {
                        question: "খাওয়া যায় ব্যবহারের প্রয়োজন",
                        options: [
                            { id: 1, label: "স্বাভাবিক", value: "Regular" },
                            { id: 2, label: "কখনো কখনো", value: "Sometimes" },
                        ],
                        tooltip: "আপনি কত বার খাওয়া যায় ব্যবহার করেন?",
                    },
                    hi: {
                        question: "खाद्य टंबाकू का उपयोग करने की आवश्यकता",
                        options: [
                            { id: 1, label: "नियमित", value: "Regular" },
                            { id: 2, label: "कभी-कभी", value: "Sometimes" },
                        ],
                        tooltip: "आप खाद्य टंबाकू का उपयोग कितनी बार करते हैं?",
                    },
                    as: {
                        question: "খাওয়া যায় ব্যবহারের প্রয়োজন",
                        options: [
                            { id: 1, label: "স্বাভাবিক", value: "Regular" },
                            { id: 2, label: "কখনো কখনো", value: "Sometimes" },
                        ],
                        tooltip: "আপুনি কত বাৰ খাওৱা যায় ব্যৱহাৰ কৰে?",
                    },
                },
            },
            {
                id: 3,
                questionNumber: {
                    en: "6.3",
                    bn: "৬.৩",
                    hi: "६.३",
                    as: "৬.৩",
                },
                translations: {
                    en: {
                        question: "Mention Tobacco Name",
                        textInput: "Type here...",
                        options: [],
                        tooltip: "Please specify the name of the tobacco.",
                    },
                    bn: {
                        question: "টব্যাকোর নাম উল্লেখ করুন",
                        textInput: "এখানে টাইপ করুন...", options: [],
                        tooltip: "অনুগ্রহ করে টব্যাকোর নাম উল্লেখ করুন।",
                    },
                    hi: {
                        question: "टंबाकू का नाम बताएं",
                        textInput: "यहाँ लिखें...",
                        options: [],
                        tooltip: "कृपया टंबाकू का नाम बताएं।",
                    },
                    as: {
                        question: "টব্যাকোর নাম উল্লেখ কৰক",
                        textInput: "এখানে টাইপ কৰক...",
                        options: [],
                        tooltip: "অনুগ্রহ করে টব্যাকোর নাম উল্লেখ করক",
                    },
                },
            }
        ],
    },
    // Question 11 - Social Media
    {
        id: 12,
        questionNumber: {
            en: "7",
            bn: "৭",
            hi: "७",
            as: "৭",
        },
        translations: {
            en: {
                question: "Mention Social Media Usage",
                label: "Add Social Media Usage Details",
                tooltip: "Do you use social media?",
            },
            bn: {
                question: "সামাজিক মিডিয়া ব্যবহার উল্লেখ করুন",
                label: "সামাজিক মিডিয়া ব্যবহারের বিবরণ যোগ করুন",
                tooltip: "আপনি সামাজিক মিডিয়া ব্যবহার করেন?",
            },
            hi: {
                question: "सोशल मीडिया का उपयोग करें",
                label: "सोशल मीडिया का उपयोग विवरण जोड़ें",
                tooltip: "क्या आप सोशल मीडिया का उपयोग करते हैं?",
            },
            as: {
                question: "সামাজিক মিডিয়া ব্যবহাৰ উল্লেখ কৰক",
                label: "সামাজিক মিডিয়া ব্যবহাৰৰ বিবৰণ যোগ কৰক",
                tooltip: "আপুনি সামাজিক মিডিয়া ব্যবহাৰ কৰেন?",
            },
        },
        children: [
            {
                id: 1,
                questionNumber: {
                    en: "7.1",
                    bn: "৭.১",
                    hi: "७.१",
                    as: "৭.১",

                },
                translations: {
                    en: {
                        question: "Choose Social Media Platform",
                        options: [
                            { id: 1, label: "Facebook", value: "Facebook" },
                            { id: 2, label: "Instagram", value: "Instagram" },
                            { id: 3, label: "Twitter", value: "Twitter" },
                            { id: 4, label: "LinkedIn", value: "LinkedIn" },
                            { id: 5, label: "Other", value: "Other" },
                        ],
                        tooltip: "Which social media platform do you use?",
                    },
                    bn: {
                        question: "সামাজিক মিডিয়া প্ল্যাটফর্ম বেছে নিন",
                        options: [
                            { id: 1, label: "ফেসবুক", value: "Facebook" },
                            { id: 2, label: "ইনস্টাগ্রাম", value: "Instagram" },
                            { id: 3, label: "টুইটাৰ", value: "Twitter" },
                            { id: 4, label: "লিংকডইন", value: "LinkedIn" },
                            { id: 5, label: "অন্যান্য", value: "Other" },
                        ],
                        tooltip: "আপনি কোন সামাজিক মিডিয়া প্ল্যাটফর্ম ব্যবহার করেন?",
                    },
                    hi: {
                        question: "सोशल मीडिया प्लेटफॉर्म चुनें",
                        options: [
                            { id: 1, label: "फेसबुक", value: "Facebook" },
                            { id: 2, label: "इंस्टाग्राम", value: "Instagram" },
                            { id: 3, label: "ट्विटर", value: "Twitter" },
                            { id: 4, label: "लिंक्डइन", value: "LinkedIn" },
                            { id: 5, label: "अन्य", value: "Other" },
                        ],
                        tooltip: "आप कौन सा सोशल मीडिया प्लेटफॉर्म उपयोग करते हैं?",
                    },
                    as: {
                        question: "সামাজিক মিডিয়া প্লেটফৰ্ম বেছে নিন",
                        options: [
                            { id: 1, label: "ফেছবুক", value: "Facebook" },
                            { id: 2, label: "ইনস্টাগ্রাম", value: "Instagram" },
                            { id: 3, label: "টুইটার", value: "Twitter" },
                            { id: 4, label: "লিঙ্কডিন", value: "LinkedIn" },
                            { id: 5, label: "অন্যান্য", value: "Other" },
                        ],
                        tooltip: "আপনি কোন সামা�জিক মিডিয়া প্লেটফৰ্ম ব্যবহাৰ কৰে?",
                    },
                },
            },
            {
                id: 2,
                questionNumber: {
                    en: "7.2",
                    bn: "৭.২",
                    hi: "७.२",
                    as: "৭.২",
                },
                translations: {
                    en: {
                        question: "How much time do you spend on social media everyday?",
                        options: [
                            { id: 1, label: "Less than 3 hours", value: "Less than 3 hours" },
                            { id: 2, label: "More than 3 hours", value: "More than 3 hours" },
                        ],
                        tooltip: "How much time do you spend on social media everyday?",
                    },
                    hi: {
                        question: "आप दिन में सोशल मीडिया पर कितना समय बिताते हैं?",
                        options: [
                            { id: 1, label: "कम से कम 3 घंटे", value: "Less than 3 hours" },
                            { id: 2, label: "3 घंटे से अधिक", value: "More than 3 hours" },
                        ],
                        tooltip: "आप दिन में सोशल मीडिया पर कितना समय बिताते हैं?",
                    },
                    as: {
                        question: "আপনি প্রতিদিন সামাজিক মিডিয়ায় কত সময় অতিথি কৰে?",
                        options: [
                            { id: 1, label: "৩ ঘণ্টাৰ কম", value: "Less than 3 hours" },
                            { id: 2, label: "৩ ঘণ্টাৰ অধিক", value: "More than 3 hours" },
                        ],
                        tooltip: "আপনি প্রতিদিন সামাজিক মিডিয়ায় কত সময় অতিথি কৰে?",
                    },
                    bn: {
                        question: "আপনি প্রতিদিন সামাজিক মিডিয়ায় কত সময় ব্যয় করেন?",
                        options: [
                            { id: 1, label: "তিন ঘণ্টার কম", value: "Less than 3 hours" },
                            { id: 2, label: "তিন ঘণ্টার বেশি", value: "More than 3 hours" },
                        ],
                        tooltip: "আপনি প্রতিদিন সামাজিক মিডিয়ায় কত সময় ব্যয় করেন?",
                    },
                },
            },
            {
                id: 3,
                questionNumber: {
                    en: "7.3",
                    bn: "৭.৩",
                    hi: "७.३",
                    as: "৭.৩",
                },
                translations: {
                    en: {
                        question: "Mention Platform Name",
                        textInput: "Type here...",
                        options: [],
                        tooltip: "Please specify the name of the platform.",
                    },
                    hi: {
                        question: "प्लेटफ़ॉर्म का नाम लिखें",
                        textInput: "यहाँ लिखें...",
                        options: [],
                        tooltip: "कृपया प्लेटफ़ॉर्म का नाम बताएं।",
                    },
                    as: {
                        question: "প্ল্যাটফর্মের নাম লিখুন",
                        textInput: "এখানে লিখুন...",
                        options: [],
                        tooltip: "কোন প্ল্যাটফর্মে আপনি সময কাটান পছন্দ করেন?",
                    },
                    bn: {
                        question: "প্ল্যাটফর্মের নাম লিখুন",
                        textInput: "এখানে লিখুন...",
                        options: [],
                        tooltip: "আপনি প্রতিদিন কত সময় সামাজিক মিডিয়া ব্যবহার করেন?",
                    },
                },
            },
        ],
    },
    // Question 12 - Shopping
    {
        id: 13,
        questionNumber: {
            en: "8",
            bn: "৮",
            hi: "८",
            as: "৮",
        },
        translations: {
            en: {
                question: "Mention Shopping Details",
                label: "Add Shopping Details",
                tooltip: "Do you shop online?",
            },
            hi: {
                question: "खरीदारी के बारे में बताएं",
                label: "खरीदारी के बारे में जानकारी जोड़ें",
                tooltip: "क्या आप ऑनलाइन खरीदारी करते हैं?",
            },
            as: {
                question: "কেনাকাটা বিবৰণ উল্লেখ কৰক",
                label: "কেনাকাটা বিবৰণ যোগ করুন",
                tooltip: "আপুনি কেনাকাটা কৰে নেকি?",
            },
            bn: {
                question: "কেনাকাটা বিবরণ উল্লেখ করুন",
                label: "কেনাকাটা বিবরণ যোগ করুন",
                tooltip: "আপনি কেনাকাটা করেন?",
            },
        },
        children: [
            {
                id: 1,
                questionNumber: {
                    en: "8.1",
                    bn: "৮.১",
                    hi: "८.१",
                    as: "৮.১",
                },
                translations: {
                    en: {
                        question: "Choose your Shopping mode",
                        options: [
                            { id: 1, label: "Online", value: "Online" },
                            { id: 2, label: "Offline", value: "Offline" },
                        ],
                    },
                    hi: {
                        question: "खरीदारी का तरीका चुनें",
                        options: [
                            { id: 1, label: "ऑनलाइन", value: "Online" },
                            { id: 2, label: "ऑफ़लाइन", value: "Offline" },
                        ],
                    },
                    as: {
                        question: "কেনাকাটা মোড বেছে নিন",
                        options: [
                            { id: 1, label: "অনলাইন", value: "Online" },
                            { id: 2, label: "অফলাইন", value: "Offline" },
                        ],
                    },
                    bn: {
                        question: "কেনাকাটা মোড বেছে নিন",
                        options: [
                            { id: 1, label: "অনলাইন", value: "Online" },
                            { id: 2, label: "অফলাইন", value: "Offline" },
                        ],
                    },
                },
            },
        ],
    },
    {
        id: 14,
        translations: {
            en: {
                question: "Gambling",
            },
            hi: {
                question: "जुआ",
                },
            as: {
                question: "জুৱা",
            },
            bn: {
                question: "জুৱা",
            },
        },
    },
    {
        id: 15,
        translations: {
            en: {
                question: "Outside Food",
            },
            hi: {
                question: "बाहरी खाना",
            },
            as: {
                question: "বাইরের খাবার",
            },
            bn: {
                question: "বাইরের খাবার",
            },      },
    }

];

export const languages = {
    en: "English",
    bn: "বাংলা",
    as: "অসমীয়া",
    hi: "हिन्दी",
};