export const quizData = [
    {
        id: 'start',
        question: `Bij welke mutualiteit ben je lid?`,
        options: [
            {answer: 'Christelijke Multualiteit', nextQuestionId: 'cm', goToEnd: false},
            {answer: 'Liberale Mutualiteit', nextQuestionId: 'lm', goToEnd: false}
        ],
    },
    {
        id: 'cm',
        question: `Kinderbijslag?`,
        options: [
            {answer: 'vol', nextQuestionId: 'cm-adult', goToEnd: false},
            {answer: 'kind', nextQuestionId: 'cm-kid', goToEnd: false}
        ],
    },
    {
        id: 'lm',
        question: `Kinderbijslag?`,
        options: [
            {answer: 'Ja', nextQuestionId: 'lm-kid', goToEnd: false},
            {answer: 'Nee', nextQuestionId: 'lm-adult', goToEnd: false}
        ],
    }
];

export const endData = [
    {
        id: "cm-end",
        header: `Einde`,
        paragraph: 'dit is het einde van de quiz'
    },
];