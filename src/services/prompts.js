/**
 * ==========================================================
 * CodeMorph AI - Prompt Service
 * ----------------------------------------------------------
 * Centralized prompt builders for all AI-powered features.
 * ==========================================================
 */

/**
 * Code Converter Prompt
 */
export const buildCodeConversionPrompt = ({
  sourceLanguage,
  targetLanguage,
  code,
}) => `
You are an expert software engineer.

Your task is to convert the following ${sourceLanguage} code into ${targetLanguage}.

Requirements:

1. Preserve the original functionality.
2. Use modern ${targetLanguage} best practices.
3. Produce clean, readable, production-ready code.
4. Do NOT explain anything.
5. Do NOT include markdown.
6. Do NOT wrap the response inside triple backticks.
7. Return ONLY the converted source code.

Source Code:

${code}
`.trim();

/**
 * Code Explanation Prompt
 */
export const buildCodeExplanationPrompt = ({
  language,
  code,
}) => `
You are an expert programming instructor.

Explain the following ${language} code.

Requirements:

- Explain step by step.
- Explain every important function.
- Explain variables.
- Explain logic.
- Explain time complexity when applicable.
- Keep explanations beginner friendly.

Code:

${code}
`.trim();

/**
 * Code Optimization Prompt
 */
export const buildOptimizationPrompt = ({
  language,
  code,
}) => `
You are a senior software engineer.

Optimize the following ${language} code.

Requirements:

- Improve readability.
- Improve performance.
- Apply best practices.
- Keep the same functionality.
- Return ONLY the optimized source code.
- Do NOT add markdown.

Code:

${code}
`.trim();

/**
 * Bug Detection Prompt
 */
export const buildBugDetectionPrompt = ({
  language,
  code,
}) => `
You are an experienced debugger.

Analyze this ${language} code.

Return:

1. List of bugs.
2. Explanation.
3. Suggested fixes.
4. Corrected code.

Code:

${code}
`.trim();

/**
 * Documentation Prompt
 */
export const buildDocumentationPrompt = ({
  language,
  code,
}) => `
Generate professional documentation for this ${language} code.

Include:

- Overview
- Functions
- Parameters
- Return Values
- Usage Example

Code:

${code}
`.trim();

/**
 * Complexity Analysis Prompt
 */
export const buildComplexityPrompt = ({
  language,
  code,
}) => `
Analyze this ${language} code.

Provide:

- Time Complexity
- Space Complexity
- Performance Analysis
- Optimization Suggestions

Code:

${code}
`.trim();