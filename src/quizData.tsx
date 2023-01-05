export const quizData = [
    {
        id: 0,
        question: `Ben je ouder dan 18 jaar?`,
        options: [
            {answer: 'Ja', nextQuestionId: 1},
            {answer: 'Nee', nextQuestionId: 0}
        ],
    },
    {
        id: 1,
        question: `Bij welke mutualiteit ben je lid?`,
        options: [
            {answer: 'CM', nextQuestionId: 2},
            {answer: 'Bond Moyson', nextQuestionId: 3}
        ],
    },
    {
        id: 2,
        question: `Is de CM nice?`,
        options: [
            {answer: 'Ja', nextQuestionId: 5},
            {answer: 'Nee', nextQuestionId: 4}
        ],
    },
    {
        id: 3,
        question: `Is de Bond Moyson Nice?`,
        options: [
            {answer: 'Ja', nextQuestionId: 5},
            {answer: 'Nee', nextQuestionId: 4}
        ],
    },
    {
        id: 4,
        question: `Kies dan maar een andere mutualiteit`,
        options: [
            {answer: 'Ok', nextQuestionId: 1},
        ],
    },
    {
        id: 5,
        question: `Vet`,
        options: [
            {answer: 'Begin opnieuw', nextQuestionId: 0},
        ],
    }
];