async function ask(question) {
    const tone = new RegExp("[!?!?]");
    return question.replace(tone, "2").replace("吗", "");
}

export { ask };
