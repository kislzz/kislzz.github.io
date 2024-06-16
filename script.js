const words = [
    "Voyager sans amour, est-ce la vie ou la folie ?", 
    "La seule vérité c'est celle que l'on cherche.", 
    "L'avenir de la vie c'est la mort.", 
    "En vous donnant la vie, on vous offre la mort.",
    "Quand le soleil se lève, les étoiles s'éteignent.",
    "Le désir est la gourmandise des sens.",
    "L'amour donne des ailes, mais pas de parachute",
    "L'homme est la victime consentante du progrès.",
    "L'école un établissement pour anéantir l'esprit.",
    "La liberté ne se demande pas, elle se prend !",
    "L'artiste immature imite. l'Artiste mûr vole.",
    "La paix l'intervalle entre deux guerres !",
    "Agissez de sorte qu'on sourie en pensant à vous.",
    "A quoi sert de parler lorsqu'on a si peu à vivre ?",
    "Le sérieux naît d'une surestimation du temps.",
    "L'amour sait mieux offrir, l'amitié mieux donner.",
];

document.getElementById('generateButton').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    document.getElementById('wordDisplay').innerText = randomWord;
});