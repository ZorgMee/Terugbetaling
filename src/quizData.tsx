export const quizData = [
    {
        id: 'start',
        question: `Bij welke mutualiteit ben je aangesloten?`,
        options: [
            {answer: 'Christelijke Multualiteit', nextQuestionId: 'cm', goToEnd: false},
            {answer: 'Liberale Mutualiteit', nextQuestionId: 'lm', goToEnd: false},
            {answer: 'Neutraal Ziekenfonds', nextQuestionId: 'neut', goToEnd: false},
            {answer: 'Socialistische Mutualiteiten', nextQuestionId: 'soc', goToEnd: false},
            {answer: 'Helan', nextQuestionId: 'helan', goToEnd: true},
            {answer: 'Railcare', nextQuestionId: 'railcare', goToEnd: false},
        ],
    },
    {
        id: 'cm',
        question: `Ben je kind of jongere met recht op kinderbijslag?`,
        options: [
            {answer: 'Ja', nextQuestionId: 'cm-kid', goToEnd: false},
            {answer: 'Nee', nextQuestionId: 'cm-adult', goToEnd: false}
        ],
    },
    {
        id: 'cm-kid',
        question: `Heb je recht op verhoogde tegemoetkoming?`,
        options: [
            {answer: 'Ja', nextQuestionId: 'cm-kid-high', goToEnd: true},
            {answer: 'Nee', nextQuestionId: 'cm-kid-normal', goToEnd: true}
        ],
    },
    {
        id: 'cm-adult',
        question: `Heb je recht op verhoogde tegemoetkoming?`,
        options: [
            {answer: 'Ja', nextQuestionId: 'cm-adult-high', goToEnd: true},
            {answer: 'Nee', nextQuestionId: 'cm-adult-normal', goToEnd: true}
        ],
    },
    {
        id: 'lm',
        question: `Ben je kind of jongere met recht op kinderbijslag?`,
        options: [
            {answer: 'Ja', nextQuestionId: 'lm-kid', goToEnd: false},
            {answer: 'Nee', nextQuestionId: 'lm-adult', goToEnd: false}
        ],
    },
    {
        id: 'lm-kid',
        question: `Welk soort begeleiding wens je te volgen?`,
        options: [
            {answer: 'Psychologische begeleiding', nextQuestionId: 'lm-kid-therapy', goToEnd: true},
            {answer: 'Cursus Mindfulness', nextQuestionId: 'lm-kid-mindful', goToEnd: true}
        ],
    },
    {
        id: 'lm-adult',
        question: `Welk soort begeleiding wens je te volgen?`,
        options: [
            {answer: 'Psychologische begeleiding', nextQuestionId: 'lm-adult-therapy', goToEnd: true},
            {answer: 'Cursus Mindfulness', nextQuestionId: 'lm-adult-mindful', goToEnd: true},
            {answer: 'Consultatie bij klinisch seksuoloog', nextQuestionId: 'lm-sex-therapy', goToEnd: true}
        ],
    },
    {
        id: 'neut',
        question: `Bij welke afdeling ben je lid?`,
        options: [
            {answer: 'Vlaams & Neutraal Ziekenfonds', nextQuestionId: 'neut-diverse', goToEnd: true},
            {answer: 'Neutraal Ziekenfonds Vlaanderen', nextQuestionId: 'neut-diverse', goToEnd: true},
            {answer: 'Mutualia', nextQuestionId: 'mutualia', goToEnd: true},
        ],
    },
    {
        id: 'railcare',
        question: `Wat is je leeftijd?`,
        options: [
            {answer: 'Jonger dan 18, of in dit kalenderjaar 18 geworden', nextQuestionId: 'railcare-kid', goToEnd: true},
            {answer: 'Ouder dan 18 jaar', nextQuestionId: 'railcare-adult', goToEnd: true},
        ],
    },
    {
        id: 'soc',
        question: `Bij welke provinciale afdeling ben je aangesloten?`,
        options: [
            {answer: 'De Voorzorg Antwerpen', nextQuestionId: 'soc-ant', goToEnd: false},
            {answer: 'De Voorzorg Limburg', nextQuestionId: 'soc-other', goToEnd: false},
            {answer: 'Bond Moyson Oost-Vlaanderen', nextQuestionId: 'soc-other', goToEnd: false},
            {answer: 'Bond Moyson West-Vlaanderen', nextQuestionId: 'soc-other', goToEnd: false},
            {answer: 'Federatie van Socialistische Mutualiteiten van Brabant ', nextQuestionId: 'soc-brab', goToEnd: true},
        ],
    },
    {
        id: 'soc-other',
        question: `Ben je een kind of jongere met recht op kinderbijslag?`,
        options: [
            {answer: 'Ja', nextQuestionId: 'soc-other-kid', goToEnd: false},
            {answer: 'Nee', nextQuestionId: 'soc-other-adult', goToEnd: false}
        ],
    },
    {
        id: 'soc-other-kid',
        question: `Heb je recht op verhoogde tegemoetkoming?`,
        options: [
            {answer: 'Ja', nextQuestionId: 'soc-other-kid-high', goToEnd: true},
            {answer: 'Nee', nextQuestionId: 'soc-other-kid-normal', goToEnd: true}
        ],
    },
    {
        id: 'soc-other-adult',
        question: `Heb je recht op verhoogde tegemoetkoming?`,
        options: [
            {answer: 'Ja', nextQuestionId: 'soc-other-adult-high', goToEnd: true},
            {answer: 'Nee', nextQuestionId: 'soc-other-adult-normal', goToEnd: true}
        ],
    },
    {
        id: 'soc-ant',
        question: `Ben je een kind of jongere met recht op kinderbijslag?`,
        options: [
            {answer: 'Ja', nextQuestionId: 'soc-ant-kid', goToEnd: false},
            {answer: 'Nee', nextQuestionId: 'soc-other-adult', goToEnd: false}
        ],
    },
    {
        id: 'soc-ant-kid',
        question: `Heb je recht op verhoogde tegemoetkoming?`,
        options: [
            {answer: 'Ja', nextQuestionId: 'soc-ant-kid-high', goToEnd: true},
            {answer: 'Nee', nextQuestionId: 'soc-ant-kid-normal', goToEnd: true}
        ],
    },
];

export const endData = [
    {
        id: "cm-kid-high",
        header: '',
        paragraph: `Je hebt recht op een terugbetaling van 75% van prijs van jouw sessie, met een maxiumum van €45. Deze terugbetaling kan je aanvragen voor in het totaal tot 24 sessies`
    },
    {
        id: "cm-kid-normal",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van 50% van prijs van jouw sessie, met een maxiumum van €30. Deze terugbetaling kan je aanvragen voor in het totaal tot 24 sessies'
    },
    {
        id: "cm-adult-high",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling tot €15 per sessie, met een maxiumum van 75% van de prijs van een sessie. Deze terugbetaling kan je aanvragen voor in het totaal tot 24 sessies'
    },
    {
        id: "cm-adult-normal",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling tot €10 per sessie, met een maxiumum van 50% van de prijs van een sessie. Deze terugbetaling kan je aanvragen voor in het totaal tot 24 sessies'
    },
    {
        id: "lm-kid-therapy",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van €20 per sessie, met een maximum van €160 euro per kalenderjaar (tesamen met tussenkomsten cursus mindfullness)'
    },
    {
        id: "lm-kid-mindful",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van 60% van de prijs van de cursus, met een maximum van €160 euro per kalenderjaar (tesamen met tussenkomsten individuele therapie)'
    },
    {
        id: "lm-adult-therapy",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van €20 per sessie, met een maximum van €160 euro per kalenderjaar (tesamen met tussenkomsten cursus mindfullness)'
    },
    {
        id: "lm-adult-mindful",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van 60% van de prijs van de cursus, met een maximum van €160 euro per kalenderjaar (tesamen met tussenkomsten individuele therapie)'
    },
    {
        id: "lm-sex-therapy",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van €20 per sessie, met een maximum van €160 euro per kalenderjaar (bovenop tussenkomsten voor psychologische begeleiding)'
    },
    {
        id: "neut-diverse",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van €10 per sessie, met een maximum van €100 euro (of 10 sessies) per kalenderjaar'
    },
    {
        id: "mutualia",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van €20 per sessie, met een maximum van €120 euro (of 6 sessies) per kalenderjaar. Daarbovenop heb je 1x per jaar recht op €20 terugbetaling wanneer je hulpverlener voor jou een bilan opmaakt'
    },
    {
        id: "helan",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van €10 per sessie, met een maximum van 12 sessies per jaar.'
    },
    {
        id: "railcare-kid",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van €20 per sessie, met een maximum van 20 sessies per kalenderjaar.'
    },
    {
        id: "railcare-adult",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van €20 per sessie, met een maximum van 15 sessies per kalenderjaar.'
    },
    {
        id: "soc-other-kid-high",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling tot 50% van prijs van jouw sessie, met een maxiumum van €30. Deze terugbetaling kan je aanvragen voor 12 sessies per kalenderjaar.'
    },
    {
        id: "soc-other-kid-normal",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling tot 50% van prijs van jouw sessie, met een maxiumum van €20. Deze terugbetaling kan je aanvragen voor 12 sessies per kalenderjaar.'
    },
    {
        id: "soc-other-adult-high",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling tot 50% van prijs van jouw sessie, met een maxiumum van €15. Deze terugbetaling kan je aanvragen voor 12 sessies per kalenderjaar.'
    },
    {
        id: "soc-other-adult-normal",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling tot 50% van prijs van jouw sessie, met een maxiumum van €10. Deze terugbetaling kan je aanvragen voor 12 sessies per kalenderjaar.'
    },
    {
        id: "soc-brab",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van €20 per sessie. Deze terugbetaling kan je aanvragen voor 8 sessies per kalenderjaar.'
    },
    {
        id: "soc-ant-kid-high",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van €30 per sessie, met een maxiumum van €360 per kalenderjaar. Deze terugbetaling kan je aanvragen voor 8 sessies per jaar indien het om individuele therapie gaat, of 16 sessies per jaar voor groepstherapie.'
    },
    {
        id: "soc-ant-kid-normal",
        header: '',
        paragraph: 'Je hebt recht op een terugbetaling van €20 per sessie, met een maxiumum van €240 per kalenderjaar. Deze terugbetaling kan je aanvragen voor 8 sessies per jaar indien het om individuele therapie gaat, of 16 sessies per jaar voor groepstherapie.'
    },
];
