export const familyCancerHistoryQuestions = [
  // Breast Cancer
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
        question: "Do you have any family history of Breast Cancer?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
          { id: "3", label: "No idea", value: "No idea" },
        ],
        addMemberLabel: "Add Member",
        tooltip: "",
      },
      bn: {
        question: "আপনার পরিবারে কি স্তন ক্যান্সারের কোনো ইতিহাস আছে?",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
          { id: "3", label: "ধারণা নেই", value: "No idea" },
        ],
        addMemberLabel: "সদস্য যোগ করুন",
        tooltip: "",
      },
      as: {
        question: "আপোনাৰ পৰিয়ালত স্তন কেঞ্চাৰৰ কোনো ইতিহাস আছে নেকি?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
          { id: "3", label: "ধাৰণা নাই", value: "No idea" },
        ],
        addMemberLabel: "সদস্য যোগ কৰক",
        tooltip: "",
      },
      hi: {
        question: "क्या आपके परिवार में स्तन कैंसर का कोई इतिहास है?",
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
          { id: "3", label: "कोई विचार नहीं", value: "No idea" },
        ],
        addMemberLabel: "सदस्य जोड़ें",
        tooltip: "",
      },
    },
    children: [
      // Family Side
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
            question: "Please select Family Side.",
            options: [
              { id: "1", label: "Immediate", value: "Immediate" },
              { id: "2", label: "Extended", value: "Extended" },
            ],
            tooltip: "",
          },
          bn: {
            question: "পরিবারের পাশ নির্বাচন করুন।",
            options: [
              { id: "1", label: "নিকট", value: "Immediate" },
              { id: "2", label: "দূরবর্তী", value: "Extended" },
            ],
            tooltip: "",
          },
          as: {
            question: "অনুগ্ৰহ কৰি পৰিয়ালৰ ফাল বাছনি কৰক।",
            options: [
              { id: "1", label: "নিকট", value: "Immediate" },
              { id: "2", label: "দূৰবর্তী", value: "Extended" },
            ],
            tooltip: "",
          },
          hi: {
            question: "कृपया परिवार पक्ष चुनें।",
            options: [
              { id: "1", label: "तत्काल", value: "Immediate" },
              { id: "2", label: "विस्तारित", value: "Extended" },
            ],
            tooltip: "",
          },
        },
        children: [
          //Immediate Relation
          {
            id: 3,
            optionType: "custom",
            questionNumber: {
              en: "1.1.3",
              bn: "১.১.৩",
              as: "১.১.৩",
              hi: "१.१.३",
            },
            translations: {
              en: {
                question: "Please choose Relation.",
                options: [
                  { id: "1", label: "Mother", value: "Mother" },
                  { id: "2", label: "Sister", value: "Sister" },
                  { id: "3", label: "Daughter", value: "Daughter" },
                ],
                tooltip: "",
              },
              bn: {
                question: "অনুগ্রহ করে সম্পর্ক নির্বাচন করুন।",
                options: [
                  { id: "1", label: "মা", value: "Mother" },
                  { id: "2", label: "বোন", value: "Sister" },
                  { id: "3", label: "মেয়ে", value: "Daughter" },
                ],
                tooltip: "",
              },
              as: {
                question: "অনুগ্ৰহ কৰি সম্পৰ্ক বাছনি কৰক।",
                options: [
                  { id: "1", label: "মা", value: "Mother" },
                  { id: "2", label: "ভনী", value: "Sister" },
                  { id: "3", label: "জীয়াৰী", value: "Daughter" },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया संबंध चुनें।",
                options: [
                  { id: "1", label: "माँ", value: "Mother" },
                  { id: "2", label: "बहन", value: "Sister" },
                  { id: "3", label: "बेटी", value: "Daughter" },
                ],
                tooltip: "",
              },
            },
          },
          // age of diagnosis
          {
            id: 2,
            optionType: "custom",
            questionNumber: {
              en: "1.1.2",
              bn: "১.১.২",
              as: "১.১.২",
              hi: "१.१.২",
            },
            translations: {
              en: {
                question: "Please choose the age of diagnosis.",
                options: [
                  { id: "1", label: "Before 30", value: "Before 30" },
                  { id: "2", label: "30 to 60", value: "30 to 60" },
                  { id: "3", label: "After 60", value: "After 60" },
                ],
                tooltip: "",
              },
              bn: {
                question: "অনুগ্রহ করে নির্ণয়ের বয়স নির্বাচন করুন।",
                options: [
                  { id: "1", label: "৩০ এর আগে", value: "Before 30" },
                  { id: "2", label: "৩০ থেকে ৬০", value: "30 to 60" },
                  { id: "3", label: "৬০ এর পরে", value: "After 60" },
                ],
                tooltip: "",
              },
              as: {
                question: "অনুগ্ৰহ কৰি নিৰ্ণয়ৰ বয়স বাছনি কৰক।",
                options: [
                  { id: "1", label: "৩০ৰ আগতে", value: "Before 30" },
                  { id: "2", label: "৩০ৰ পৰা ৬০", value: "30 to 60" },
                  { id: "3", label: "৬০ৰ পাছত", value: "After 60" },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया निदान की आयु चुनें।",
                options: [
                  { id: "1", label: "30 से पहले", value: "Before 30" },
                  { id: "2", label: "30 से 60", value: "30 to 60" },
                  { id: "3", label: "60 के बाद", value: "After 60" },
                ],
                tooltip: "",
              },
            },
          },
          // Relation side (Extended)
          {
            id: 1,
            optionType: "custom",
            questionNumber: {
              en: "1.1.1",
              bn: "১.১.১",
              as: "১.১.১",
              hi: "१.१.१",
            },
            translations: {
              en: {
                question: "Please select Relation Side.",
                options: [
                  { id: "1", label: "Paternal", value: "Paternal" },
                  { id: "2", label: "Maternal", value: "Maternal" },
                ],
                tooltip: "",
              },
              bn: {
                question: "পরিবারের পাশ নির্বাচন করুন।",
                options: [
                  { id: "1", label: "পিতৃসূত্রে", value: "Paternal" },
                  { id: "2", label: "মাতৃসূত্রে", value: "Maternal" },
                ],
                tooltip: "",
              },
              as: {
                question: "অনুগ্ৰহ কৰি পৰিয়ালৰ ফাল বাছনি কৰক।",
                options: [
                  { id: "1", label: "পিতৃসূত্রে", value: "Paternal" },
                  { id: "2", label: "মাতৃসূত্রে", value: "Maternal" },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया परिवार पक्ष चुनें।",
                options: [
                  { id: "1", label: "पैतृक", value: "Paternal" },
                  { id: "2", label: "मातृ पक्ष", value: "Maternal" },
                ],
                tooltip: "",
              },
            },
          },
          // Extended Relation
          {
            id: 4,
            questionNumber: {
              en: "1.1.4",
              bn: "১.১.৪",
              as: "১.১.৪",
              hi: "१.१.৪",
            },
            optionType: "custom",
            translations: {
              en: {
                question: "Please choose Relation.",
                options: [
                  { id: "1", label: "Aunt", value: "Aunt" },
                  { id: "2", label: "Grandmother", value: "Grandmother" },
                  { id: "3", label: "Niece", value: "Niece" },
                ],
                tooltip: "",
              },
              bn: {
                question: "অনুগ্রহ করে সম্পর্ক নির্বাচন করুন।",
                options: [
                  { id: "1", label: "পিসি / মাসি", value: "Aunt" },
                  { id: "2", label: "দাদী / নানী", value: "Grandmother" },
                  { id: "3", label: "ভাতিজি / ভাইঝি", value: "Niece" },
                ],
                tooltip: "",
              },
              as: {
                question: "অনুগ্ৰহ কৰি সম্পৰ্ক বাছনি কৰক।",
                options: [
                  { id: "1", label: "পিশাই / মাইমাই", value: "Aunt" },
                  { id: "2", label: "দাদী / আইতা", value: "Grandmother" },
                  {
                    id: "3",
                    label: "ভাতিজী / ভাতৃষ্পুত্ৰী",
                    value: "Niece",
                  },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया संबंध चुनें।",
                options: [
                  {
                    id: "1",
                    label: "बुआ / मौसी",
                    value: "Aunt",
                  },
                  {
                    id: "2",
                    label: "दादी / नानी",
                    value: "Grandmother",
                  },
                  {
                    id: "3",
                    label: "भतीजी / भांजी",
                    value: "Niece",
                  },
                ],
                tooltip: "",
              },
            },
          },
        ],
      },
    ],
  },
  // Ovarian Cancer
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
        question: "Do you have any family history of Ovarian Cancer?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
          { id: "3", label: "No idea", value: "No idea" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনার পরিবারে কি ডিম্বাশয় ক্যান্সারের কোনো ইতিহাস আছে?",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
          { id: "3", label: "ধারণা নেই", value: "No idea" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপোনাৰ পৰিয়ালত ডিম্বাশয় কেঞ্চাৰৰ কোনো ইতিহাস আছে নেকি?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
          { id: "3", label: "ধাৰণা নাই", value: "No idea" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपके परिवार में डिम्बग्रंथि कैंसर का कोई इतिहास है?",
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
          { id: "3", label: "कोई विचार नहीं", value: "No idea" },
        ],
        tooltip: "",
      },
    },
    children: [
      // Family Side
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
            question: "Please select Family Side.",
            options: [
              { id: "1", label: "Immediate", value: "Immediate" },
              { id: "2", label: "Extended", value: "Extended" },
            ],
            tooltip: "",
          },
          bn: {
            question: "পরিবারের পাশ নির্বাচন করুন।",
            options: [
              { id: "1", label: "নিকট", value: "Immediate" },
              { id: "2", label: "দূরবর্তী", value: "Extended" },
            ],
            tooltip: "",
          },
          as: {
            question: "অনুগ্ৰহ কৰি পৰিয়ালৰ ফাল বাছনি কৰক।",
            options: [
              { id: "1", label: "নিকট", value: "Immediate" },
              { id: "2", label: "দূৰবর্তী", value: "Extended" },
            ],
            tooltip: "",
          },
          hi: {
            question: "कृपया परिवार पक्ष चुनें।",
            options: [
              { id: "1", label: "तत्काल", value: "Immediate" },
              { id: "2", label: "विस्तारित", value: "Extended" },
            ],
            tooltip: "",
          },
        },
        children: [
          //Immediate Relation
          {
            id: 3,
            optionType: "custom",
            questionNumber: {
              en: "1.1.3",
              bn: "১.১.৩",
              as: "১.১.৩",
              hi: "१.१.३",
            },
            translations: {
              en: {
                question: "Please choose Relation.",
                options: [
                  { id: "1", label: "Mother", value: "Mother" },
                  { id: "2", label: "Sister", value: "Sister" },
                  { id: "3", label: "Daughter", value: "Daughter" },
                ],
                tooltip: "",
              },
              bn: {
                question: "অনুগ্রহ করে সম্পর্ক নির্বাচন করুন।",
                options: [
                  { id: "1", label: "মা", value: "Mother" },
                  { id: "2", label: "বোন", value: "Sister" },
                  { id: "3", label: "মেয়ে", value: "Daughter" },
                ],
                tooltip: "",
              },
              as: {
                question: "অনুগ্ৰহ কৰি সম্পৰ্ক বাছনি কৰক।",
                options: [
                  { id: "1", label: "মা", value: "Mother" },
                  { id: "2", label: "ভনী", value: "Sister" },
                  { id: "3", label: "জীয়াৰী", value: "Daughter" },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया संबंध चुनें।",
                options: [
                  { id: "1", label: "माँ", value: "Mother" },
                  { id: "2", label: "बहन", value: "Sister" },
                  { id: "3", label: "बेटी", value: "Daughter" },
                ],
                tooltip: "",
              },
            },
          },
          // Relation side
          {
            id: 1,
            questionNumber: {
              en: "1.1.1",
              bn: "১.১.১",
              as: "১.১.১",
              hi: "१.१.१",
            },
            optionType: "custom",
            translations: {
              en: {
                question: "Please select Relation Side.",
                options: [
                  { id: "1", label: "Paternal", value: "Paternal" },
                  { id: "2", label: "Maternal", value: "Maternal" },
                ],
                tooltip: "",
              },
              bn: {
                question: "পরিবারের পাশ নির্বাচন করুন।",
                options: [
                  { id: "1", label: "পিতৃসূত্রে", value: "Paternal" },
                  { id: "2", label: "মাতৃসূত্রে", value: "Maternal" },
                ],
                tooltip: "",
              },
              as: {
                question: "অনুগ্ৰহ কৰি পৰিয়ালৰ ফাল বাছনি কৰক।",
                options: [
                  { id: "1", label: "পিতৃসূত্রে", value: "Paternal" },
                  { id: "2", label: "মাতৃসূত্রে", value: "Maternal" },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया परिवार पक्ष चुनें।",
                options: [
                  { id: "1", label: "पैतृक", value: "Paternal" },
                  { id: "2", label: "मातृ पक्ष", value: "Maternal" },
                ],
                tooltip: "",
              },
            },
          },
          // Extended Relation
          {
            id: 4,
            optionType: "custom",
            questionNumber: {
              en: "1.1.4",
              bn: "১.১.৪",
              as: "১.১.৪",
              hi: "१.१.৪",
            },
            translations: {
              en: {
                question: "Please choose Relation.",
                options: [
                  { id: "1", label: "Aunt", value: "Aunt" },
                  { id: "2", label: "Grandmother", value: "Grandmother" },
                  { id: "3", label: "Niece", value: "Niece" },
                ],
                tooltip: "",
              },
              bn: {
                question: "অনুগ্রহ করে সম্পর্ক নির্বাচন করুন।",
                options: [
                  { id: "1", label: "পিসি / মাসি", value: "Aunt" },
                  { id: "2", label: "দাদী / নানী", value: "Grandmother" },
                  { id: "3", label: "ভাতিজি / ভাইঝি", value: "Niece" },
                ],
                tooltip: "",
              },
              as: {
                question: "অনুগ্ৰহ কৰি সম্পৰ্ক বাছনি কৰক।",
                options: [
                  { id: "1", label: "পিশাই / মাইমাই", value: "Aunt" },
                  { id: "2", label: "দাদী / আইতা", value: "Grandmother" },
                  {
                    id: "3",
                    label: "ভাতিজী / ভাতৃষ্পুত্ৰী",
                    value: "Niece",
                  },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया संबंध चुनें।",
                options: [
                  {
                    id: "1",
                    label: "बुआ / मौसी",
                    value: "Aunt",
                  },
                  {
                    id: "2",
                    label: "दादी / नानी",
                    value: "Grandmother",
                  },
                  {
                    id: "3",
                    label: "भतीजी / भांजी",
                    value: "Niece",
                  },
                ],
                tooltip: "",
              },
            },
          },
        ],
      },
    ],
  },
  // Cervical Cancer
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
        question: "Do you have any family history of Cervical Cancer?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
          { id: "3", label: "No idea", value: "No idea" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনার পরিবারে কি সার্ভিক্যাল ক্যান্সারের কোনো ইতিহাস আছে?",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
          { id: "3", label: "ধারণা নেই", value: "No idea" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপোনাৰ পৰিয়ালত চাৰ্ভিকেল কেঞ্চাৰৰ কোনো ইতিহাস আছে নেকি?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
          { id: "3", label: "ধাৰণা নাই", value: "No idea" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपके परिवार में गर्भाशय ग्रीवा कैंसर का कोई इतिहास है?",
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
          { id: "3", label: "कोई विचार नहीं", value: "No idea" },
        ],
        tooltip: "",
      },
    },
    children: [
      // Family Side
      {
        id: 1,
        questionNumber: {
          en: "3.1",
          bn: "৩.১",
          as: "৩.১",
          hi: "३.१",
        },
        optionType: "custom",
        translations: {
          en: {
            question: "Please select Family Side.",
            options: [
              { id: "1", label: "Immediate", value: "Immediate" },
              { id: "2", label: "Extended", value: "Extended" },
            ],
            tooltip: "",
          },
          bn: {
            question: "পরিবারের পাশ নির্বাচন করুন।",
            options: [
              { id: "1", label: "নিকট", value: "Immediate" },
              { id: "2", label: "দূরবর্তী", value: "Extended" },
            ],
            tooltip: "",
          },
          as: {
            question: "অনুগ্ৰহ কৰি পৰিয়ালৰ ফাল বাছনি কৰক।",
            options: [
              { id: "1", label: "নিকট", value: "Immediate" },
              { id: "2", label: "দূৰবর্তী", value: "Extended" },
            ],
            tooltip: "",
          },
          hi: {
            question: "कृपया परिवार पक्ष चुनें।",
            options: [
              { id: "1", label: "तत्काल", value: "Immediate" },
              { id: "2", label: "विस्तारित", value: "Extended" },
            ],
            tooltip: "",
          },
        },
        children: [
          //Immediate Relation
          {
            id: 2,
            questionNumber: {
              en: "3.1.2",
              bn: "৩.১.২",
              as: "৩.১.২",
              hi: "३.१.२",
            },
            optionType: "custom",
            translations: {
              en: {
                question: "Please choose Relation.",
                options: [
                  { id: "1", label: "Mother", value: "Mother" },
                  { id: "2", label: "Sister", value: "Sister" },
                  { id: "3", label: "Daughter", value: "Daughter" },
                ],
                tooltip: "",
              },
              bn: {
                question: "অনুগ্রহ করে সম্পর্ক নির্বাচন করুন।",
                options: [
                  { id: "1", label: "মা", value: "Mother" },
                  { id: "2", label: "বোন", value: "Sister" },
                  { id: "3", label: "মেয়ে", value: "Daughter" },
                ],
                tooltip: "",
              },
              as: {
                question: "অনুগ্ৰহ কৰি সম্পৰ্ক বাছনি কৰক।",
                options: [
                  { id: "1", label: "মা", value: "Mother" },
                  { id: "2", label: "ভনী", value: "Sister" },
                  { id: "3", label: "জীয়াৰী", value: "Daughter" },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया संबंध चुनें।",
                options: [
                  { id: "1", label: "माँ", value: "Mother" },
                  { id: "2", label: "बहन", value: "Sister" },
                  { id: "3", label: "बेटी", value: "Daughter" },
                ],
                tooltip: "",
              },
            },
          },
          // Relation side
          {
            id: 1,
            questionNumber: {
              en: "3.1.1",
              bn: "৩.১.১",
              as: "৩.১.১",
              hi: "३.१.१",
            },
            optionType: "custom",
            translations: {
              en: {
                question: "Please select Relation Side.",
                options: [
                  { id: "1", label: "Paternal", value: "Paternal" },
                  { id: "2", label: "Maternal", value: "Maternal" },
                ],
                tooltip: "",
              },
              bn: {
                question: "পরিবারের পাশ নির্বাচন করুন।",
                options: [
                  { id: "1", label: "পিতৃসূত্রে", value: "Paternal" },
                  { id: "2", label: "মাতৃসূত্রে", value: "Maternal" },
                ],
                tooltip: "",
              },
              as: {
                question: "অনুগ্ৰহ কৰি পৰিয়ালৰ ফাল বাছনি কৰক।",
                options: [
                  { id: "1", label: "পিতৃসূত্রে", value: "Paternal" },
                  { id: "2", label: "মাতৃসূত্রে", value: "Maternal" },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया परिवार पक्ष चुनें।",
                options: [
                  { id: "1", label: "पैतृक", value: "Paternal" },
                  { id: "2", label: "मातृ पक्ष", value: "Maternal" },
                ],
                tooltip: "",
              },
            },
          },
          // Extended Relation
          {
            id: 3,
            optionType: "custom",
            questionNumber: {
              en: "3.1.3",
              bn: "৩.১.৩",
              as: "৩.১.৩",
              hi: "३.१.३",
            },
            translations: {
              en: {
                question: "Please choose Relation.",
                options: [
                  { id: "1", label: "Aunt", value: "Aunt" },
                  { id: "2", label: "Grandmother", value: "Grandmother" },
                  { id: "3", label: "Niece", value: "Niece" },
                ],
                tooltip: "",
              },
              bn: {
                question: "অনুগ্রহ করে সম্পর্ক নির্বাচন করুন।",
                options: [
                  { id: "1", label: "পিসি / মাসি", value: "Aunt" },
                  { id: "2", label: "দাদী / নানী", value: "Grandmother" },
                  { id: "3", label: "ভাতিজি / ভাইঝি", value: "Niece" },
                ],
                tooltip: "",
              },
              as: {
                question: "অনুগ্ৰহ কৰি সম্পৰ্ক বাছনি কৰক।",
                options: [
                  { id: "1", label: "পিশাই / মাইমাই", value: "Aunt" },
                  { id: "2", label: "দাদী / আইতা", value: "Grandmother" },
                  {
                    id: "3",
                    label: "ভাতিজী / ভাতৃষ্পুত্ৰী",
                    value: "Niece",
                  },
                ],
                tooltip: "",
              },
              hi: {
                question: "कृपया संबंध चुनें।",
                options: [
                  {
                    id: "1",
                    label: "बुआ / मौसी",
                    value: "Aunt",
                  },
                  {
                    id: "2",
                    label: "दादी / नानी",
                    value: "Grandmother",
                  },
                  {
                    id: "3",
                    label: "भतीजी / भांजी",
                    value: "Niece",
                  },
                ],
                tooltip: "",
              },
            },
          },
        ],
      },
    ],
  },
  // Other Cancers
  {
    id: 4,
    questionNumber: {
      en: "4",
      bn: "৪",
      as: "৪",
      hi: "४",
    },
    optionType: "radio",
    translations: {
      en: {
        question: "Do you have any family history of Other Cancers?",
        options: [
          { id: "1", label: "Yes", value: "Yes" },
          { id: "2", label: "No", value: "No" },
          { id: "3", label: "No idea", value: "No idea" },
        ],
        tooltip: "",
      },
      bn: {
        question: "আপনার পরিবারে কি অন্যান্য ক্যান্সারের কোনো ইতিহাস আছে?",
        options: [
          { id: "1", label: "হ্যাঁ", value: "Yes" },
          { id: "2", label: "না", value: "No" },
          { id: "3", label: "ধারণা নেই", value: "No idea" },
        ],
        tooltip: "",
      },
      as: {
        question: "আপোনাৰ পৰিয়ালত অন্যান্য কেঞ্চাৰৰ কোনো ইতিহাস আছে নেকি?",
        options: [
          { id: "1", label: "হয়", value: "Yes" },
          { id: "2", label: "নহয়", value: "No" },
          { id: "3", label: "ধাৰণা নাই", value: "No idea" },
        ],
        tooltip: "",
      },
      hi: {
        question: "क्या आपके परिवार में अन्य कैंसर का कोई इतिहास है?",
        options: [
          { id: "1", label: "हाँ", value: "Yes" },
          { id: "2", label: "नहीं", value: "No" },
          { id: "3", label: "कोई विचार नहीं", value: "No idea" },
        ],
        tooltip: "",
      },
    },
    children: [
      // Cancer type
      {
        id: 1,
        questionNumber: {
          en: "4.1",
          bn: "৪.১",
          as: "৪.১",
          hi: "४.१",
        },
        optionType: "custom",
        translations: {
          en: {
            question: "Please select cancer type.",
            options: [
              { id: "1", label: "Liver", value: "Liver" },
              { id: "2", label: "Lung", value: "Lung" },
              { id: "3", label: "Colon", value: "Colon" },
              { id: "4", label: "Oral", value: "Oral" },
              { id: "5", label: "Pancreatic", value: "Pancreatic" },
              { id: "6", label: "Bone", value: "Bone" },
              { id: "7", label: "Muscle", value: "Muscle" },
              { id: "8", label: "Tissue", value: "Tissue" },
              { id: "9", label: "Pleural", value: "Pleural" },
              { id: "10", label: "Peritoneal", value: "Peritoneal" },
              { id: "11", label: "Blood", value: "Blood" },
              { id: "12", label: "Others", value: "Others" },
            ],
            tooltip: "",
          },
          bn: {
            question: "অনুগ্রহ করে ক্যান্সারের ধরন নির্বাচন করুন।",
            options: [
              { id: "1", label: "যকৃত", value: "Liver" },
              { id: "2", label: "ফুসফুস", value: "Lung" },
              { id: "3", label: "কোলন", value: "Colon" },
              { id: "4", label: "মুখ", value: "Oral" },
              { id: "5", label: "অগ্ন্যাশয়", value: "Pancreatic" },
              { id: "6", label: "হাড়", value: "Bone" },
              { id: "7", label: "পেশী", value: "Muscle" },
              { id: "8", label: "টিস্যু", value: "Tissue" },
              { id: "9", label: "প্লিউরাল", value: "Pleural" },
              { id: "10", label: "পেরিটোনিয়াল", value: "Peritoneal" },
              { id: "11", label: "রক্ত", value: "Blood" },
              { id: "12", label: "অন্য", value: "Others" },
            ],
            tooltip: "",
          },
          as: {
            question: "অনুগ্ৰহ কৰি কেঞ্চাৰৰ প্ৰকাৰ বাছনি কৰক।",
            options: [
              { id: "1", label: "যকৃত", value: "Liver" },
              { id: "2", label: "ফুসফুস", value: "Lung" },
              { id: "3", label: "কোলন", value: "Colon" },
              { id: "4", label: "মুখ", value: "Oral" },
              { id: "5", label: "অগ্ন্যাশয়", value: "Pancreatic" },
              { id: "6", label: "হাড়", value: "Bone" },
              { id: "7", label: "পেশী", value: "Muscle" },
              { id: "8", label: "টিস্যু", value: "Tissue" },
              { id: "9", label: "প্লিউৰাল", value: "Pleural" },
              {
                id: "10",
                label: "পেৰিটোনিয়েল",
                value: "Peritoneal",
              },
              { id: "11", label: "ৰক্ত", value: "Blood" },
              { id: "12", label: "অন্য", value: "Others" },
            ],
            tooltip: "",
          },
          hi: {
            question: "कृपया कैंसर का प्रकार चुनें।",
            options: [
              { id: "1", label: "यकृत", value: "Liver" },
              { id: "2", label: "फेफड़े", value: "Lung" },
              { id: "3", label: "कोलन", value: "Colon" },
              { id: "4", label: "मुख", value: "Oral" },
              { id: "5", label: "अग्न्याशय", value: "Pancreatic" },
              { id: "6", label: "हड्डी", value: "Bone" },
              { id: "7", label: "मांसपेशी", value: "Muscle" },
              { id: "8", label: "ऊतक", value: "Tissue" },
              { id: "9", label: "प्लूरल", value: "Pleural" },
              { id: "10", label: "पेरिटोनियल", value: "Peritoneal" },
              { id: "11", label: "रक्त", value: "Blood" },
              { id: "12", label: "अन्य", value: "Others" },
            ],
            tooltip: "",
          },
        },
        children: [
          {
            id: 1,
            questionNumber: {
              en: "4.1.1",
              bn: "৪.১.১",
              as: "৪.১.১",
              hi: "४.१.१",
            },
            optionType: "input",
            translations: {
              en: {
                question: "Specify other cancer",
                textInput: "Enter the type of cancer",
                tooltip: "",
              },
              bn: {
                question: "অন্যান্য ক্যান্সার নির্দিষ্ট করুন",
                textInput: "ক্যান্সারের ধরণ লিখুন",
                tooltip: "",
              },
              as: {
                question: "অন্যান্য কেঞ্চাৰ উল্লেখ কৰক",
                textInput: "কেঞ্চাৰৰ প্ৰকাৰ লিখক",
                tooltip: "",
              },
              hi: {
                question: "अन्य कैंसर निर्दिष्ट करें",
                textInput: "कैंसर का प्रकार दर्ज करें",
                tooltip: "",
              },
            },
          },
        ],
      },
      // Relation side
      {
        id: 2,
        questionNumber: {
          en: "4.1.2",
          bn: "৪.১.২",
          as: "৪.১.২",
          hi: "४.१.२",
        },
        optionType: "custom",
        translations: {
          en: {
            question: "Please select Relation Side.",
            options: [
              { id: "1", label: "Paternal", value: "Paternal" },
              { id: "2", label: "Maternal", value: "Maternal" },
            ],
            tooltip: "",
          },
          bn: {
            question: "পরিবারের পাশ নির্বাচন করুন।",
            options: [
              { id: "1", label: "পিতৃসূত্রে", value: "Paternal" },
              { id: "2", label: "মাতৃসূত্রে", value: "Maternal" },
            ],
            tooltip: "",
          },
          as: {
            question: "অনুগ্ৰহ কৰি পৰিয়ালৰ ফাল বাছনি কৰক।",
            options: [
              { id: "1", label: "পিতৃসূত্রে", value: "Paternal" },
              { id: "2", label: "মাতৃসূত্রে", value: "Maternal" },
            ],
            tooltip: "",
          },
          hi: {
            question: "कृपया परिवार पक्ष चुनें।",
            options: [
              { id: "1", label: "पैतृक", value: "Paternal" },
              { id: "2", label: "मातृ पक्ष", value: "Maternal" },
            ],
            tooltip: "",
          },
        },
      },
      // Paternal Relation
      {
        id: 3,
        questionNumber: {
          en: "4.1.3",
          bn: "৪.১.৩",
          as: "৪.১.৩",
          hi: "४.१.३",
        },
        optionType: "custom",
        translations: {
          en: {
            question: "Please choose Relation.",
            options: [
              { id: "1", label: "Brother", value: "Brother" },
              { id: "2", label: "Sister", value: "Sister" },
              { id: "3", label: "Uncle", value: "Uncle" },
              { id: "4", label: "Aunt", value: "Aunt" },
              { id: "5", label: "Grandfather", value: "Grandfather" },
              { id: "6", label: "Grandmother", value: "Grandmother" },
            ],
            tooltip: "",
          },
          bn: {
            question: "অনুগ্রহ করে সম্পর্ক নির্বাচন করুন।",
            options: [
              { id: "1", label: "ভাই", value: "Brother" },
              { id: "2", label: "বোন", value: "Sister" },
              { id: "3", label: "চাচা/মামা", value: "Uncle" },
              { id: "4", label: "আন্টি", value: "Aunt" },
              { id: "5", label: "দাদু", value: "Grandfather" },
              { id: "6", label: "দিদিমা", value: "Grandmother" },
            ],
            tooltip: "",
          },
          as: {
            question: "অনুগ্ৰহ কৰি সম্পৰ্ক বাছনি কৰক।",
            options: [
              { id: "1", label: "ভাই", value: "Brother" },
              { id: "2", label: "বোন", value: "Sister" },
              { id: "3", label: "কাকা/মামা/পিসা", value: "Uncle" },
              { id: "4", label: "কাকী/মামী/পিসী", value: "Aunt" },
              { id: "5", label: "দাদু", value: "Grandfather" },
              { id: "6", label: "দিদা", value: "Grandmother" },
            ],
            tooltip: "",
          },
          hi: {
            question: "कृपया संबंध चुनें।",
            options: [
              { id: "1", label: "भाई", value: "Brother" },
              { id: "2", label: "बहन", value: "Sister" },
              { id: "3", label: "चाचा/मामा", value: "Uncle" },
              { id: "4", label: "आंटी", value: "Aunt" },
              { id: "5", label: "दादा", value: "Grandfather" },
              { id: "6", label: "दादी", value: "Grandmother" },
            ],
            tooltip: "",
          },
        },
      },
      // Maternal Relation
      {
        id: 4,
        questionNumber: {
          en: "4.1.4",
          bn: "৪.১.৪",
          as: "৪.১.৪",
          hi: "४.१.४",
        },
        optionType: "custom",
        translations: {
          en: {
            question: "Please choose Relation.",
            options: [
              { id: "1", label: "Uncle", value: "Uncle" },
              { id: "2", label: "Aunt", value: "Aunt" },
              { id: "3", label: "Grandfather", value: "Grandfather" },
              { id: "4", label: "Grandmother", value: "Grandmother" },
            ],
            tooltip: "",
          },
          bn: {
            question: "অনুগ্রহ করে সম্পর্ক নির্বাচন করুন।",
            options: [
              { id: "1", label: "চাচা/মামা", value: "Uncle" },
              { id: "2", label: "আন্টি", value: "Aunt" },
              { id: "3", label: "দাদু", value: "Grandfather" },
              { id: "4", label: "দিদিমা", value: "Grandmother" },
            ],
            tooltip: "",
          },
          as: {
            question: "অনুগ্ৰহ কৰি সম্পৰ্ক বাছনি কৰক।",
            options: [
              { id: "1", label: "কাকা/মামা/পিসা", value: "Uncle" },
              { id: "2", label: "কাকী/মামী/পিসী", value: "Aunt" },
              { id: "3", label: "দাদু", value: "Grandfather" },
              { id: "4", label: "দিদা", value: "Grandmother" },
            ],
            tooltip: "",
          },
          hi: {
            question: "कृपया संबंध चुनें।",
            options: [
              { id: "1", label: "चाचा/मामा", value: "Uncle" },
              { id: "2", label: "आंटी", value: "Aunt" },
              { id: "3", label: "दादा", value: "Grandfather" },
              { id: "4", label: "दादी", value: "Grandmother" },
            ],
            tooltip: "",
          },
        },
      },
    ],
  },
];
