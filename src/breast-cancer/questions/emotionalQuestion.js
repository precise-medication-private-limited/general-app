export const emotionalQuestions = [
    // Question 1
    // Psychiatric History
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
                question: "Have Any Psychiatric History?",
                options: [
                    { id: "1", label: "Yes", value: "Yes" },
                    { id: "2", label: "No", value: "No" },
                ],
                tooltip:
                    "",
            },
            bn: {
                question: "কোন মানসিক রোগের ইতিহাস আছে?",
                options: [
                    { id: "1", label: "হ্যা", value: "Yes" },
                    { id: "2", label: "না", value: "No" },
                ],
                tooltip:
                    "",
            },
            as: {
                question: "কোনো ধৰণৰ মানসিক ইতিহাস থাকিব লাগে?",
                options: [
                    { id: "1", label: "হয়", value: "Yes" },
                    { id: "2", label: "নহয়", value: "No" },
                ],
                tooltip:
                    "",
            },
            hi: {
                question: "क्या आपका कोई मनोरोग इतिहास है?",
                options: [
                    { id: "1", label: "हां", value: "Yes" },
                    { id: "2", label: "नहीं", value: "No" },
                ],
                tooltip:
                    "",
            },
        },
        children: [
            {
                id: 1,
                questionNumber: {
                    "en": "1.1",
                    "bn": "১.১",
                    "as": "১.১",
                    "hi": "१.१"
                },
                translations: {
                    en: {
                        question: "Psychiatric Health Condition",
                        options: [
                             { id: 1,label: "Anxiety", value: "Anxiety" },
                             { id: 2,label: "Depression", value: "Depression" },
                             { id: 3,label: "Bipolar Disorder", value: "Bipolar Disorder" },
                             { id: 4, label: "Other", value: "Other" },],
                        tooltip:
                            "",
                    },
                    bn: {
                        question: "মানসিক স্বাস্থ্যৰ অৱস্থা",
                        options: [
                            { id: 1, label: "উদ্বেগ", value: "Anxiety" },
                            { id: 2, label: "মানসিক অবসাদ", value: "Depression" },
                            { id: 3, label: "বৈচিত্রী অবসাদ", value: "Bipolar Disorder" },
                            { id: 4, label: "অন্যান্য", value: "Other" },
                        ],
                        tooltip:
                            "",
                    },
                    as: {
                        question: "মানসিক স্বাস্থ্যৰ অৱস্থা",
                        options: [
                            { id: 1, label: "উদ্বেগ", value: "Anxiety" },
                            { id: 2, label: "মানসিক অবসাদ", value: "Depression" },
                            { id: 3, label: "বৈচিত্রী অবসাদ", value: "Bipolar Disorder" },
                            { id: 4, label: "অন্যান্য", value: "Other" },
                        ],
                        tooltip:
                            "",
                    },
                    hi: {
                        question: "मानसिक स्वास्थ्य स्थिति",
                        options: [
                            { id: 1, label: "आन्य", value: "Anxiety" },
                            { id: 2, label: "देप्रेशन", value: "Depression" },
                            { id: 3, label: "बिपोलर डिसोर्डर", value: "Bipolar Disorder" },
                            { id: 4, label: "अन्य", value: "Other" },
                        ],
                        tooltip:
                            "",
                    },
                },
            },
            {
                id: 2,
                questionNumber: {
                    "en": "1.2",
                    "bn": "১.২",
                    "as": "১.২",
                    "hi": "१.२"
                },
                translations: {
                    en: {
                        question: "Mention Psychiatric Health Condition",
                        textinput: "Type here...",
                        tooltip:
                            "",
                    },
                    bn: {
                        question: "মানসিক স্বাস্থ্যের অবস্থা উল্লেখ করুন",
                        textinput: "এখানে টাইপ করুন...",
                        tooltip:
                            "",
                    },
                    as: {
                        question: "মানসিক স্বাস্থ্যৰ অৱস্থা উল্লেখ কৰক",
                        textinput: "ইয়াত টাইপ কৰক...",
                        tooltip:
                            "",
                    },
                    hi: {
                        question: "मानसिक स्वास्थ्य स्थिति का उल्लेख करें",
                        textinput: "यहाँ टाइप करें ...",
                        tooltip:
                            "",
                    },
                },
            },
            {
                id: 3,
                questionNumber: {
                    "en": "1.3",
                    "bn": "১.৩",
                    "as": "১.৩",
                    "hi": "१.३"
                },
                translations: {
                    en: {
                        question: "Have Any Psychiatric Admissions?",
                        options: [
                            { id: "1", label: "Yes", value: "Yes" },
                            { id: "2", label: "No", value: "No" },
                        ],
                        tooltip:
                            "",
                    },
                    bn: {
                        question: "যেকোনো মনোরোগ বিশেষজ্ঞের ভর্তির সুযোগ আছে?",
                        options: [
                            { id: "1", label: "হ্যাঁ", value: "Yes" },
                            { id: "2", label: "না", value: "No" },
                        ],
                        tooltip:
                            "",
                    },
                    as: {
                        question: "কোনো ধৰণৰ মানসিক ভৰ্তি হওকা আছে?",
                        options: [
                            { id: "1", label: "হয়", value: "Yes" },
                            { id: "2", label: "নহয়", value: "No" },],
                        tooltip:
                            "",
                    },
                    hi: {
                        question: "कोई मानसिक विशेषज्ञ के भर्ती है?",
                        options: [
                            { id: "1", label: "हाँ", value: "Yes" },
                            { id: "2", label: "नहीं", value: "No" },],
                        tooltip:
                            "",
                    },
                },
            },
            {
                // Enter duration of Psychiatric Admissions
                id: 4,
                questionNumber: {
                    en: "1.4",
                    bn: "১.৪",
                    as: "১.৪",
                    hi: "१.४",
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
    // Question 2
    // Mental Health Related Issues
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
                question: "Have Any Mental Health Related Issues in Near Family?",
                options: [
                    { id: "1", label: "Yes", value: "Yes" },
                    { id: "2", label: "No", value: "No" },
                ],
                tooltip:
                    "",
            },
            bn: {
                question: "নিকটবর্তী পরিবারে কি মানসিক স্বাস্থ্য সম্পর্কিত কোনও সমস্যা আছে?",
                options: [
                    { id: "1", label: "হ্যা", value: "Yes" },
                    { id: "2", label: "না", value: "No" },
                ],
                tooltip:
                    "",
            },
            as: {
                question: "ওচৰৰ পৰিয়ালত মানসিক স্বাস্থ্য সম্পৰ্কীয় কোনো সমস্যা আছেনে?",
                options: [
                    { id: "1", label: "হয়", value: "Yes" },
                    { id: "2", label: "নহয়", value: "No" },
                ],
                tooltip:
                    "",
            },
            hi: {
                question: "क्या आपके निकट परिवार में कोई मानसिक स्वास्थ्य संबंधी समस्या है?",
                options: [
                    { id: "1", label: "हां", value: "Yes" },
                    { id: "2", label: "नहीं", value: "No" },
                ],
                tooltip:
                    "",
            },
        },
        children: [
            {
                id: 1,
                questionNumber: {
                    "en": "2.1",
                    "bn": "২.১",
                    "as": "২.১",
                    "hi": "२.१",
                },
                translations: {
                    en: {
                        question: "Choose Relation",
                        options: [
                            { id: "1", label: "Spouse", value: "Spouse" },
                            { id: "2", label: "Son/Daughter", value: "Son/Daughter" },
                            { id: "3", label: "Brother/Sister", value: "Brother/Sister" },
                            { id: "4", label: "Father", value: "Father" },
                            { id: "5", label: "Mother", value: "Mother" },
                        ],
                        tooltip:
                            "",
                    },
                    bn: {
                        question: "সম্পর্ক নির্বাচন করুন",
                        options: [
                            { id: "1", label: "স্পাউস", value: "Spouse" },
                            { id: "2", label: "সন্তান/মাতা", value: "Son/Daughter" },
                            { id: "3", label: "ভাই/বোন", value: "Brother/Sister" },
                            { id: "4", label: "বাবা", value: "Father" },
                            { id: "5", label: "মা", value: "Mother" },
                        ],
                        tooltip:
                            "",
                    },
                    as: {
                        question: "সম্পর্ক নির্বাচন কৰক",
                        options: [
                            { id: "1", label: "স্পাউস", value: "Spouse" },
                            { id: "2", label: "সন্তান/মাতা", value: "Son/Daughter" },
                            { id: "3", label: "ভাই/বোন", value: "Brother/Sister" },
                            { id: "4", label: "বাবা", value: "Father" },
                            { id: "5", label: "মা", value: "Mother" },
                        ],
                        tooltip:
                            "",
                    },
                    hi: {
                        question: "सम्पर्क चुनें",
                        options: [
                            { id: "1", label: "स्पाउस", value: "Spouse" },
                            { id: "2", label: "सन्तान/माता", value: "Son/Daughter" },
                            { id: "3", label: "भाइ/बोन", value: "Brother/Sister" },
                            { id: "4", label: "बाबा", value: "Father" },
                            { id: "5", label: "माता", value: "Mother" },
                        ],
                        tooltip:
                            "",
                    },
                },
                children: [
                    {
                        id: 1,
                        translations: {
                            en: {
                                question: "Add Spouse Mental Health Issue",
                            },
                            bn: {
                                question: "স্পাউসের মানসিক স্বাস্থ্য সমস্যা যোগ করুন",
                            },
                            as: {
                                question: "স্পাউসের মানসিক স্বাস্থ্য সমস্যা যোগ কৰক",
                            },
                            hi: {
                                question: "पति/पत्नी की मानसिक स्वास्थ्य समस्या जोड़ें",
                            },
                        },
                    },
                    {
                        id: 2,
                        translations: {
                            en: {
                                question: "Add Son/Daughter Mental Health Issue",
                            },
                            bn: {
                                question: "সন্তান/মাতার মানসিক স্বাস্থ্য সমস্যা যোগ করুন",
                            },
                            as: {
                                question: "সন্তান/মাতাৰ মানসিক স্বাস্থ্য সমস্যা যোগ কৰক",
                            },
                            hi: {
                                question: "बेटा/बेटी की मानसिक स्वास्थ्य समस्या जोड़ें",
                            },
                        },
                    },
                    {
                        id: 3,
                        translations: {
                            en: {
                                question: "Add Brother/Sister Mental Health Issue",
                            },
                            bn: {
                                question: "ভাই/বোনের মানসিক স্বাস্থ্য সমস্যা যোগ করুন",
                            },
                            as: {
                                question: "ভাই/বোনের মানসিক স্বাস্থ্য সমস্যা যোগ কৰক",
                            },
                            hi: {
                                question: "भाई/बहन की मानसिक स्वास्थ्य समस्या जोड़ें",
                            },
                        },
                    },
                    {
                        id: 4,
                        translations: {
                            en: {
                                question: "Add Father Mental Health Issue",
                            },
                            bn: {
                                question: "বাবার মানসিক স্বাস্থ্য সমস্যা যোগ করুন",
                            },
                            as: {
                                question: "বাবাৰ মানসিক স্বাস্থ্য সমস্যা যোগ কৰক",
                            },
                            hi: {
                                question: "बाबा की मानसिक स्वास्थ्य समस्या जोड़ें",
                            },
                        },
                    },
                    {
                        id: 5,
                        translations: {
                            en: {
                                question: "Add Mother Mental Health Issue",
                            },
                            bn: {
                                question: "মাতার মানসিক স্বাস্থ্য সমস্যা যোগ করুন",
                            },
                            as: {
                                question: "মাতাৰ মানসিক স্বাস্থ্য সমস্যা যোগ কৰক",
                            },
                            hi: {
                                question: "माँ की मानसिक स्वास्थ्य समस्या जोड़ें",
                            },
                        },
                            }
                ],
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
                        question: "Mental Health Issues",
                        options: [
                            { id: "1", label: "Depression", value: "Depression" },
                            { id: "2", label: "Schizophrenia", value: "Schizophrenia" },
                            { id: "3", label: "Bipolar Disorder", value: "Bipolar Disorder" },
                            { id: "4", label: "Substance Abuse", value: "Substance Abuse" },
                            { id: "5", label: "Other", value: "Other" },
                        ],
                        tooltip:
                            "",
                    },
                    bn: {
                        question: "মানসিক স্বাস্থ্য সমস্যা",
                        options: [
                            { id: "1", label: "বিষণ্ণতা", value: "Depression" },
                            { id: "2", label: "স্কিজোফ্রেনিয়া", value: "Schizophrenia" },
                            { id: "3", label: "বাইপোলার ডিসঅর্ডার", value: "Bipolar Disorder" },
                            { id: "4", label: "মাদকাসক্তি", value: "Substance Abuse" },
                            { id: "5", label: "অন্যান্য", value: "Other" },
                        ],
                        tooltip:
                            "",
                    },
                    as: {
                        question: "মানসিক স্বাস্থ্য সমস্যা",
                        options: [
                            { id: "1", label: "ডিপ্ৰেশ্বন", value: "Depression" },
                            { id: "2", label: "স্কিজ'ফ্ৰেনিয়া", value: "Schizophrenia" },
                            { id: "3", label: "বাইপ'লাৰ ডিসঅ'ৰ্ডাৰ", value: "Bipolar Disorder" },
                            { id: "4", label: "নেশা গ্ৰহণৰ অপব্যৱহাৰ", value: "Substance Abuse" },
                            { id: "5", label: "অন্যান্য", value: "Other" },
                        ],
                        tooltip:
                            "",
                    },
                    hi: {
                        question: "मनोरोग समस्या",
                        options: [
                            { id: "1", label: "अवसाद", value: "Depression" },
                            { id: "2", label: "स्किज़ोफ्रेनिया", value: "Schizophrenia" },
                            { id: "3", label: "द्विध्रुवी विकार", value: "Bipolar Disorder" },
                            {
                                id: "4",
                                label: "नशीली दवाओं का दुरुपयोग",
                                value: "Substance Abuse",
                            },
                            { id: "5", label: "अन्य", value: "Other" },
                        ],
                        tooltip:
                            "",
                    },
                },
            },
            {
                id: 3,
                questionNumber: {
                    "en": "2.3",
                    "bn": "২.৩",
                    "as": "২.৩",
                    "hi": "२.३",
                },
                translations: {
                    en: {
                        question: "Mention Mental Health Condition",
                        textinput: "Type here...",
                        tooltip:
                            "",
                    },
                    bn: {
                        question: "মানসিক স্বাস্থ্যের অবস্থা উল্লেখ করুন",
                        textinput: "এখানে টাইপ করুন...",
                        tooltip:
                            "",
                    },
                    as: {
                        question: "মানসিক স্বাস্থ্যৰ অৱস্থা উল্লেখ কৰক",
                        textinput: "ইয়াত টাইপ কৰক...",
                        tooltip:
                            "",
                    },
                    hi: {
                        question: "मानसिक स्वास्थ्य स्थिति का उल्लेख करें",
                        textinput: "यहाँ टाइप करें ...",
                        tooltip:
                            "",
                    },
                },
            },

        ],
    },
    // Question 3
    //   Social Engage ment
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
                question: "Mention Your Social Engagement",
                options: [
                    { id: "1", label: "Socially Active", value: "Socially Active" },
                    { id: "2", label: "Isolation", value: "Isolation" },
                ],
                tooltip:
                    "",
            },
            bn: {
                question: "আপনার সামাজিক সম্পৃক্ততা উল্লেখ করুন",
                options: [
                    { id: "1", label: "সামাজিকভাবে সক্রিয়", value: "Socially Active" },
                    { id: "2", label: "একাকীত্ব", value: "Isolation" },
                ],
                tooltip:
                    "",
            },
            as: {
                question: "আপোনাৰ সামাজিক সংযোগৰ কথা উল্লেখ কৰক",
                options: [
                    { id: "1", label: "সামাজিকভাবে সক্রিয়", value: "Socially Active" },
                    { id: "2", label: "একাকীত্ব", value: "Isolation" },
                ],
                tooltip:
                    "",
            },
            hi: {
                question: "अपनी सामाजिक सहभागिता का उल्लेख करें",
                options: [
                    { id: "1", label: "सामाजिक रूप से सक्रिय", value: "Socially Active" },
                    { id: "2", label: "अलगाव", value: "Isolation" },
                ],
                tooltip:
                    "",
            },
        },
    },
    // Question 4
    //    Trauma
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
                question: "Do you have any Trauma?",
                options: [
                    { id: "1", label: "Yes", value: "Yes" },
                    { id: "2", label: "No", value: "No" },
                ],
                tooltip:
                    "",
            },
            bn: {
                question: "আপনার কি কোনো ট্রমা আছে",
                options: [
                    { id: "1", label: "হ্যাঁ", value: "Yes" },
                    { id: "2", label: "না", value: "No" },
                ],
                tooltip:
                    "",
            },
            as: {
                question: "আপোনাৰ কোনো ট্রমা হৈছে নেকি",
                options: [
                    { id: "1", label: "হয়", value: "Yes" },
                    { id: "2", label: "নহয়", value: "No" },
                ],
                tooltip:
                    "",
            },
            hi: {
                question: "क्या आपको कोई आघात है?",
                options: [
                    { id: "1", label: "हाँ", value: "Yes" },
                    { id: "2", label: "नहीं", value: "No" },
                ],
                tooltip:
                    "",
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
                        question: "Have Any Childhood Trauma?",
                        options: [
                            { id: "1", label: "Yes", value: "Yes" },
                            { id: "2", label: "No", value: "No" },
                        ],
                        tooltip:
                            "",
                    },
                    bn: {
                        question: "শৈশবের কোন ট্রমা আছে?",
                        options: [
                            { id: "1", label: "হ্যা", value: "Yes" },
                            { id: "2", label: "না", value: "No" },
                        ],
                        tooltip:
                            "",
                    },
                    as: {
                        question: "শৈশৱৰ কোনো আঘাত আছেনে?",
                        options: [
                            { id: "1", label: "হ্যা", value: "Yes" },
                            { id: "2", label: "না", value: "No" },
                        ],
                        tooltip:
                            "",
                    },
                    hi: {
                        question: "क्या आपको बचपन में कोई आघात हुआ है?",
                        options: [
                            { id: "1", label: "हाँ", value: "Yes" },
                            { id: "2", label: "नहीं", value: "No" },
                        ],
                        tooltip:
                            "",
                    },
                },
                children: [
                    {
                        // What was the surgery?
                        id: 1,
                        questionNumber: {
                            en: "4.1.1",
                            bn: "৪.১.১",
                            as: "৪.১.১",
                            hi: "४.१.१",
                        },
                        translations: {
                            en: {
                                question: "Mention Childhood Trauma",
                                textInput: "Type here...",
                                tooltip: "",
                            },
                            bn: {
                                question: "শৈশবের ট্রমা উল্লেখ করুন",
                                textInput: "এখানে টাইপ করুন...",
                                tooltip: "",
                            },
                            as: {
                                question: "শৈশৱৰ আঘাতৰ কথা উল্লেখ কৰক",
                                textInput: "ইয়াত টাইপ কৰক...",
                                tooltip: "",
                            },
                            hi: {
                                question: "बचपन के आघात का उल्लेख करें",
                                textInput: "इयात टाइप करें...",
                                tooltip: "",
                            },
                        },
                    },
                ],
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
                        question: "Have Any Recent Trauma?",
                        options: [
                            { id: "1", label: "Yes", value: "Yes" },
                            { id: "2", label: "No", value: "No" },
                        ],
                        tooltip:
                            "",
                    },
                    bn: {
                        question: "সম্প্রতি কোন ট্রমা হয়েছে?",
                        options: [
                            { id: "1", label: "হ্যা", value: "Yes" },
                            { id: "2", label: "না", value: "No" },
                        ],
                        tooltip:
                            "",
                    },
                    as: {
                        question: "শেহতীয়াকৈ কোনো আঘাত পাইছেনে?",
                        options: [
                            { id: "1", label: "হ্যা", value: "Yes" },
                            { id: "2", label: "না", value: "No" },
                        ],
                        tooltip:
                            "",
                    },
                    hi: {
                        question: "क्या आपको हाल ही में कोई आघात हुआ है?",
                        options: [
                            { id: "1", label: "हाँ", value: "Yes" },
                            { id: "2", label: "नहीं", value: "No" },
                        ],
                        tooltip:
                            "",
                    },
                },
                children: [
                    {
                        // What was the surgery?
                        id: 1,
                        questionNumber: {
                            en: "4.2.1",
                            bn: "৪.২.১",
                            as: "৪.২.১",
                            hi: "४.२.१",
                        },
                        translations: {
                            en: {
                                question: "Recent Trauma",
                                options: [
                                    {
                                        id: "1",
                                        label: "Loss of a loved one",
                                        value: "Loss of a loved one",
                                    },
                                    { id: "2", label: "Accidents", value: "Accidents" },
                                    { id: "3", label: "Violence", value: "Violence" },
                                    { id: "4", label: "Others", value: "Others" },
                                ],
                                tooltip:
                                    "",
                            },
                            bn: {
                                question: "সম্প্রতি ট্রমা",
                                options: [
                                    { id: "1", label: "প্রিয়জন হারানো", value: "Loss of a loved one" },
                                    { id: "2", label: "দুর্ঘটনা", value: "Accidents" },
                                    { id: "3", label: "হিংসা", value: "Violence" },
                                    { id: "4", label: "অন্যান্য", value: "Others" },
                                ],
                                tooltip:
                                    "",
                            },
                            as: {
                                question: "শেহতীয়াকৈ আঘাত",
                                options: [
                                    { id: "1", label: "প্ৰিয়জন হেৰুৱা", value: "Loss of a loved one" },
                                    { id: "2", label: "দুৰ্ঘটনা", value: "Accidents" },
                                    { id: "3", label: "হিংসা", value: "Violence" },
                                    { id: "4", label: "অন্যান্য", value: "Others" },
                                ],
                                tooltip:
                                    "",
                            },
                            hi: {
                                question: "हाल ही में हुई दुर्घटना",
                                options: [{ id: "1", label: "प्रियजन की हानि", value: "Loss of a loved one" },
                                { id: "2", label: "दुर्घटनाएं", value: "Accidents" },
                                { id: "3", label: "हिंसा", value: "Violence" },
                                { id: "4", label: "अन्य", value: "Others" },
                                ],
                                tooltip:
                                    "",
                            },
                        },
                    },
                    {
                        id: 2,
                        questionNumber: {
                            en: "4.2.2",
                            bn: "৪.২.২",
                            as: "৪.২.২",
                            hi: "४.२.२",
                        },
                        translations: {
                            en: {
                                question: "Mention Recent Trauma (Optional)",
                                textinput: "Type here...",
                                tooltip:
                                    "",
                            },
                            bn: {
                                question: "সম্প্রতি আঘাত উল্লেখ করুন (ঐচ্ছিক)",
                                textinput: "এখানে টাইপ করুন...",
                                tooltip:
                                    "",
                            },
                            as: {
                                question: "শেহতীয়াকৈ আঘাত উল্লেখ কৰক (ঐচ্ছিক)",
                                textinput: "ইয়াত টাইপ কৰক...",
                                tooltip:
                                    "",
                            },
                            hi: {
                                question: "हाल ही में हुई दुर्घटना उल्लेख करें (वैकल्पिक)",
                                textinput: "यहाँ टाइप करें ...",
                                tooltip:
                                    "",
                            },
                        },
                    },
                ],
            },

        ],
    },
    // Question 5
    // Anger
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
                question: "Can You Manage Anger/Sadness Easily?",
                options: [
                    { id: "1", label: "Yes", value: "Yes" },
                    { id: "2", label: "No", value: "No" },
                ],
                tooltip:
                    "",
            },
            bn: {
                question: "রাগ/দুঃখ কি সহজে সামলাতে পারো?",
                options: [
                    { id: "1", label: "হ্যা", value: "Yes" },
                    { id: "2", label: "না", value: "No" },
                ],
                tooltip:
                    "",
            },
            as: {
                question: "খং/দুখ সহজে পৰিচালনা কৰিব পাৰিবনে?",
                options: [
                    { id: "1", label: "হয়", value: "Yes" },
                    { id: "2", label: "নহয়", value: "No" },
                ],
                tooltip:
                    "",
            },
            hi: {
                question: "क्या आप क्रोध/दुःख को आसानी से प्रबंधित कर सकते हैं?",
                options: [
                    { id: "1", label: "हां", value: "Yes" },
                    { id: "2", label: "नहीं", value: "No" },
                ],
                tooltip:
                    "",
            },
        },
    },
    // Question 6
    // Neurologiacl
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
                question: "Do You Have Any Neurological Issues?",
                options: [
                    { id: "1", label: "Yes", value: "Yes" },
                    { id: "2", label: "No", value: "No" },
                ],
                tooltip:
                    "",
            },
            bn: {
                question: "আপনার কি কোন স্নায়বিক সমস্যা আছে?",
                options: [
                    { id: "1", label: "হ্যা", value: "Yes" },
                    { id: "2", label: "না", value: "No" },
                ],
                tooltip:
                    "",
            },
            as: {
                question: "আপোনাৰ কোনো স্নায়ুজনিত সমস্যা আছেনে?",
                options: [
                    { id: "1", label: "হয়", value: "Yes" },
                    { id: "2", label: "নহয়", value: "No" },
                ],
                tooltip:
                    "",
            },
            hi: {
                question: "क्या आपको कोई न्यूरोलॉजिकल समस्या है?",
                options: [
                    { id: "1", label: "हां", value: "Yes" },
                    { id: "2", label: "नहीं", value: "No" },
                ],
                tooltip:
                    "",
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
                        question: "Neurological Condition",
                        options: [
                            { id: "1", label: "Stroke", value: "Stroke" },
                            { id: "2", label: "Epilepsy", value: "Epilepsy" },
                            { id: "3", label: "Brain Injuries", value: "Brain Injuries" },
                            { id: "4", label: "Other", value: "Other" },
                        ],
                        tooltip:
                            "",
                    },
                    bn: {
                        question: "স্নায়ুজনিত সমস্যা",
                        options: [
                            { id: "1", label: "স্ট্রোক", value: "Stroke" },
                            { id: "2", label: "এপিলেপসি", value: "Epilepsy" },
                            { id: "3", label: "মস্তিষ্কের আঘাত", value: "Brain Injuries" },
                            { id: "4", label: "অন্যান্য", value: "Other" },
                        ],
                        tooltip:
                            "",
                    },
                    as: {
                        question: "স্নায়ুজনিত সমস্যা",
                        options: [
                            { id: "1", label: "ষ্ট্ৰ'ক", value: "Stroke" },
                            { id: "2", label: "এপিলেপচি", value: "Epilepsy" },
                            { id: "3", label: "মগজৰ আঘাত", value: "Brain Injuries" },
                            { id: "4", label: "অন্যান্য", value: "Other" },
                        ],
                        tooltip:
                            "",
                    },
                    hi: {
                        question: "न्यूरोलॉजिकल समस्या",
                        options: [
                            { id: "1", label: "स्ट्रोक", value: "Stroke" },
                            { id: "2", label: "मिर्गी", value: "Epilepsy" },
                            { id: "3", label: "मस्तिष्क की चोटें", value: "Brain Injuries" },
                            { id: "4", label: "अन्य", value: "Other" },
                        ],
                        tooltip:
                            "",
                    },
                },
            },
            {
                id: 2,
                questionNumber: {
                    "en": "6.2",
                    "bn": "৬.২",
                    "as": "৬.২",
                    "hi": "६.२"
                },
                translations: {
                    en: {
                        question: "Mention Neurological Condition",
                        textinput: "Type here...",
                        tooltip:
                            "",
                    },
                    bn: {
                        question: "স্নায়ুজনিত সমস্যা উল্লেখ করুন",
                        textinput: "এখানে টাইপ করুন...",
                        tooltip:
                            "",
                    },
                    as: {
                        question: "স্নায়ুজনিত সমস্যা উল্লেখ কৰক",
                        textinput: "ইয়াত টাইপ কৰক...",
                        tooltip:
                            "",
                    },
                    hi: {
                        question: "न्यूरोलॉजिकल समस्या का उल्लेख करें",
                        textinput: "यहाँ टाइप करें ...",
                        tooltip:
                            "",
                    },
                },
            },
        ],
    },
]


export const languages = {
    en: "English",
    bn: "বাংলা",
    as: "অসমীয়া",
    hi: "हिन्दी",
};