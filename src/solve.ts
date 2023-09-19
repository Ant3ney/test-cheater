import OpenAI from "openai";

const openai: any = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

export default async function solve(laTeX: string): Promise<string | null> {
  let completion;
  const stringifiedPrompt = `Below is a laTeX expression. Please evaluate the expression and only return the result.\n${laTeX}`;
  console.log("evaluating:", stringifiedPrompt);
  try {
    completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: stringifiedPrompt }],
    });
  } catch (err) {
    console.log(err);
    console.log("Failed to evaluate expression.");
    return null;
  }

  console.log("completion.choices:", completion.choices[0].message.content);

  return completion.choices[0].message.content;
}
