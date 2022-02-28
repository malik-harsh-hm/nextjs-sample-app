
const posts = [
    {
        locale: "en-US",
        id: 1,
        title: "She didn't like the food",
        body: "She didn't like the food. She never did. She made the usual complaints and started the tantrum he knew was coming. But this time was different. Instead of trying to placate her and her unreasonable demands, he just stared at her and watched her meltdown without saying a word."
    },
    {
        locale: "en-US",
        id: 2,
        title: "There was no ring on his finger",
        body: "There was no ring on his finger. That was a good sign although far from proof that he was available. Still, it was much better than if he had been wearing a wedding ring on his hand. She glanced at his hand a bit more intently to see if there were any tan lines where a ring may have been, and he's simply taken it off."
    },
    {
        locale: "en-US",
        id: 3,
        title: "Welcome to my world",
        body: "Welcome to my world. You will be greeted by the unexpected here and your mind will be challenged and expanded in ways that you never thought possible. That is if you are able to survive."
    },
    {
        locale: "en-US",
        id: 4,
        title: "The rain was coming",
        body: "The rain was coming. Everyone thought this would be a good thing. It hadn't rained in months and the earth was dry as a bone. It wasn't a surprise that everyone thought a good rain was what was needed, but they never expected how much rain would actually arrive."
    },
    {
        locale: "en-US",
        id: 5,
        title: "Finding the red rose",
        body: "Finding the red rose in the mailbox was a pleasant surprise for Sarah. She didn't have a boyfriend or know of anyone who was interested in her as anything more than a friend. There wasn't even a note attached to it. Although it was a complete mystery, it still made her heart jump and race a little more than usual."
    },

    {
        locale: "de-DE",
        id: 6,
        title: "Sie mochte das Essen nicht",
        body: "Sie mochte das Essen nicht. Das hat sie nie getan. Sie beschwerte sich wie üblich und begann den Wutanfall, von dem er wusste, dass er kommen würde. Aber diesmal war es anders. Anstatt zu versuchen, sie und ihre unvernünftigen Forderungen zu besänftigen, starrte er sie einfach an und sah zu, wie sie zusammenbrach, ohne ein Wort zu sagen."
    },
    {
        locale: "de-DE",
        id: 7,
        title: "An seinem Finger war kein Ring.",
        body: "An seinem Finger war kein Ring. Das war ein gutes Zeichen, obwohl es noch lange kein Beweis dafür war, dass er verfügbar war. Trotzdem war es viel besser, als wenn er einen Ehering an der Hand getragen hätte. Sie warf einen etwas intensiveren Blick auf seine Hand, um zu sehen, ob dort, wo ein Ring gewesen sein könnte, braune Linien zu sehen waren, und er hat ihn einfach abgenommen"
    },
    {
        locale: "de-DE",
        id: 8,
        title: "Willkommen in meiner Welt",
        body: "Willkommen in meiner Welt. Sie werden hier vom Unerwarteten begrüßt und Ihr Geist wird auf eine Weise herausgefordert und erweitert, die Sie nie für möglich gehalten hätten. Das heißt, wenn Sie überleben können"
    },
    {
        locale: "de-DE",
        id: 9,
        title: "Der Regen kam",
        body: "Der Regen kam. Alle dachten, das wäre eine gute Sache. Es hatte seit Monaten nicht geregnet und die Erde war staubtrocken. Es war keine Überraschung, dass alle dachten, dass ein guter Regen nötig sei, aber sie erwarteten nie, wie viel Regen tatsächlich kommen würde"
    },
    {
        locale: "de-DE",
        id: 10,
        title: "Die rote Rose im Briefkasten zu finden",
        body: "Die rote Rose im Briefkasten zu finden, war für Sarah eine angenehme Überraschung. Sie hatte keinen Freund oder kannte jemanden, der an ihr mehr als nur als Freund interessiert war. Es war nicht einmal ein Zettel dabei. Obwohl es ein komplettes Mysterium war, ließ es ihr Herz noch mehr als sonst hüpfen und rasen"
    },
];

function getPostsFromCMS(locale) {
    const promise =  new Promise(resolve => {
        setTimeout(() => {
            resolve(posts.filter(function (post) {
                return post.locale === locale;
            }));
        }, 5000)
    });
    return promise;
}

const postsService = {
    getPostsFromCMS: getPostsFromCMS
}

export default postsService ;