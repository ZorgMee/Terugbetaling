export const quizData = [
    {
        id: 'start',
        question: `Bij welke mutualiteit ben je lid?`,
        options: [
            {answer: 'Christelijke Multualiteit', nextQuestionId: 'cm', goToEnd: false},
            {answer: 'Liberale Mutualiteit', nextQuestionId: 'lm', goToEnd: false},
            {answer: 'Neutraal Ziekenfonds', nextQuestionId: 'neut', goToEnd: false},
            {answer: 'Helan', nextQuestionId: 'helan', goToEnd: false},
            {answer: 'Railcare', nextQuestionId: 'rail', goToEnd: false},
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
            {answer: 'Cursus Mindfulness', nextQuestionId: 'lm-adult-mindful', goToEnd: true}
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
];

export const endData = [
    {
        id: "cm-kid-high",
        header: 'Einde van de quiz',
        paragraph: `Je hebt recht op een terugbetaling van 75% van prijs van jouw sessie, met een maxiumum van €45. Deze terugbetaling kan je aanvragen voor in het totaal tot 24 sessies`
    },
    {
        id: "cm-kid-normal",
        header: 'Einde van de quiz',
        paragraph: 'Je hebt recht op een terugbetaling van 50% van prijs van jouw sessie, met een maxiumum van €30. Deze terugbetaling kan je aanvragen voor in het totaal tot 24 sessies'
    },
    {
        id: "cm-adult-high",
        header: 'Einde van de quiz',
        paragraph: 'Je hebt recht op een terugbetaling tot €15 per sessie, met een maxiumum van 75% van de prijs van een sessie. Deze terugbetaling kan je aanvragen voor in het totaal tot 24 sessies'
    },
    {
        id: "cm-adult-normal",
        header: 'Einde van de quiz',
        paragraph: 'Je hebt recht op een terugbetaling tot €10 per sessie, met een maxiumum van 50% van de prijs van een sessie. Deze terugbetaling kan je aanvragen voor in het totaal tot 24 sessies'
    },
    {
        id: "lm-kid-therapy",
        header: 'Einde van de quiz',
        paragraph: 'Je hebt recht op een terugbetaling van €20 per sessie, met een maximum van €120 euro per kalenderjaar (tesamen met tussenkomsten cursus mindfullness)'
    },
    {
        id: "lm-kid-mindful",
        header: 'Einde van de quiz',
        paragraph: 'Je hebt recht op een terugbetaling van 60% van de prijs van de cursus, met een maximum van €120 euro per kalenderjaar (tesamen met tussenkomsten individuele therapie)'
    },
    {
        id: "lm-adult-therapy",
        header: 'Einde van de quiz',
        paragraph: 'Je hebt recht op een terugbetaling van €10 per sessie, met een maximum van €60 euro per kalenderjaar (tesamen met tussenkomsten cursus mindfullness)'
    },
    {
        id: "lm-adult-mindful",
        header: 'Einde van de quiz',
        paragraph: 'Je hebt recht op een terugbetaling van 60% van de prijs van de cursus, met een maximum van €60 euro per kalenderjaar (tesamen met tussenkomsten individuele therapie)'
    },
    {
        id: "neut-diverse",
        header: 'Einde van de quiz',
        paragraph: 'Je hebt recht op een terugbetaling van €10 per sessie, met een maximum van €100 euro (of 10 sessies) per kalenderjaar'
    },
    {
        id: "mutualia",
        header: 'Einde van de quiz',
        paragraph: 'Je hebt recht op een terugbetaling van €20 per sessie, met een maximum van €120 euro (of 6 sessies) per kalenderjaar. Daarbovenop heb je 1x per jaar recht op €20 terugbetaling wanneer je hulpverlener voor jou een bilan opmaakt'
    },
];