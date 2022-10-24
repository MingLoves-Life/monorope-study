'use strict';

async function ask(question) {
    const tone = new RegExp("[!?!?]");
    return question.replace(tone, "zxc").replace("吗", "");
}

exports.ask = ask;
