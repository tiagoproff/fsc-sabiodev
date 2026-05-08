const MOCK_RESPONSE = `
Olá viajante.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.


- Aprenda React
- Evite rerender

\`\`\`ts
const wisdom = true;
\`\`\`
`;

export async function askAssistant(question: string) {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  console.log(question);

  return MOCK_RESPONSE;
}
