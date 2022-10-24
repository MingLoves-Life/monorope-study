async function ask(question) {
    const tone = new RegExp("[!?!?]");
    return question.replace(tone, "a").replace("吗", "");
}

export { ask };
