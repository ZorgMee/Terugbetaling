export const quizData = [
    {
        id: 0,
        question: `Ben je ouder dan 18 jaar?`,
        options: [
            {answer: 'Ja', nextQuestionId: 1, goToEnd: false},
            {answer: 'Nee', nextQuestionId: 0, goToEnd: false}
        ],
    },
    {
        id: 1,
        question: `Bij welke mutualiteit ben je lid?`,
        options: [
            {answer: 'CM', nextQuestionId: 2, goToEnd: false},
            {answer: 'Bond Moyson', nextQuestionId: 3, goToEnd: false}
        ],
    },
    {
        id: 2,
        question: `Is de CM nice?`,
        options: [
            {answer: 'Ja', nextQuestionId: 5, goToEnd: false},
            {answer: 'Nee', nextQuestionId: 4, goToEnd: false}
        ],
    },
    {
        id: 3,
        question: `Is de Bond Moyson Nice?`,
        options: [
            {answer: 'Ja', nextQuestionId: 5, goToEnd: false},
            {answer: 'Nee', nextQuestionId: 4, goToEnd: false}
        ],
    },
    {
        id: 4,
        question: `Kies dan maar een andere mutualiteit`,
        options: [
            {answer: 'Ok', nextQuestionId: 1, goToEnd: false},
        ],
    },
    {
        id: 5,
        question: `Vet`,
        options: [
            {answer: 'Begin opnieuw', nextQuestionId: 0, goToEnd: true},
        ],
    }
];

export const endData = [
    {
        id: 0,
        header: `Einde`,
        paragraph: 'dit is het einde van de quiz'
    },
];