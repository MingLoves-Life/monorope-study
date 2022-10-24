export async function ask(question: string): Promise<string> {
  const tone = new RegExp("[!?!?]");
  return question.replace(tone, "2").replace("吗", "");
}
