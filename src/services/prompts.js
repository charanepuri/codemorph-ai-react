/**
 * ==========================================================
 * CodeMorph AI - Prompt Service
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

Convert the following ${sourceLanguage} code into ${targetLanguage}.

Requirements:

1. Preserve the original functionality.
2. Use modern ${targetLanguage} best practices.
3. Produce clean, readable, production-ready code.
4. Do not change the intended behavior.
5. Do not explain the code.
6. Do not include markdown.
7. Do not wrap the response in triple backticks.
8. Return ONLY the converted source code.

Source Language:
${sourceLanguage}

Target Language:
${targetLanguage}

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
You are an expert software engineer and programming instructor.

Analyze the following ${language} code and create a complete,
accurate explanation for a developer.

Your response MUST contain exactly these five sections:

# Overall Summary

Explain what the complete program does and its main purpose.
Keep this section concise but informative.

# Line-by-Line Explanation

Explain the important lines of code in execution order.

Use this format:

### Line 1
Explain what the line does.

### Line 2
Explain what the line does.

Continue for all meaningful lines.

If multiple lines work together, explain them together while
clearly identifying the relevant line numbers.

# Program Flow

Explain how the program executes from beginning to end.

Use a clear step-by-step flow such as:

1. Input
2. Processing
3. Function execution
4. Output

Explain dependencies between the major parts of the program.

# Beginner Explanation

Explain the program as if the reader is learning programming
for the first time.

Use simple language.

Explain unfamiliar programming concepts.

Use small examples or analogies when helpful.

Avoid unnecessary technical terminology.

# Advanced Explanation

Provide a deeper technical analysis for an experienced developer.

Discuss:

- Important implementation details
- Data flow
- Control flow
- Functions and dependencies
- Performance considerations
- Time complexity when applicable
- Space complexity when applicable
- Potential edge cases
- Best practices
- Possible improvements

IMPORTANT RULES:

1. Do not invent behavior that does not exist in the code.
2. Base every explanation strictly on the provided code.
3. Do not modify the code.
4. Do not provide unrelated information.
5. Use Markdown headings exactly as requested.
6. Keep code references inside inline code formatting.
7. If something cannot be determined from the code, explicitly say so.
8. Return only the explanation.

Programming Language:
${language}

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

1. Preserve the original functionality.
2. Improve readability.
3. Improve performance where appropriate.
4. Apply modern ${language} best practices.
5. Avoid unnecessary complexity.
6. Return ONLY the optimized source code.
7. Do not include markdown.
8. Do not wrap the response in triple backticks.

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
You are an experienced software debugger.

Analyze the following ${language} code.

Identify:

1. Syntax errors
2. Logic errors
3. Runtime issues
4. Potential edge cases
5. Security concerns when applicable

For every issue provide:

- Problem
- Location
- Explanation
- Suggested Fix

Then provide corrected code.

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
You are an expert technical writer and software engineer.

Generate professional documentation for the following ${language}
code.

Include:

# Overview

# Functions

# Parameters

# Return Values

# Usage

# Examples

# Notes

Base the documentation strictly on the provided code.

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
You are an expert algorithms engineer.

Analyze the following ${language} code.

Provide:

# Time Complexity

Explain the Big-O time complexity.

# Space Complexity

Explain the Big-O space complexity.

# Performance Analysis

Explain the major performance characteristics.

# Optimization Suggestions

Suggest practical improvements when appropriate.

Do not invent behavior that is not present in the code.

Code:

${code}
`.trim();



/**
 * ==========================================================
 * Code Optimization Prompt
 * ==========================================================
 */

export const buildCodeOptimizationPrompt = ({
  language,
  code,
}) => `
You are a senior software engineer specializing in
performance optimization, clean code, and ${language} best
practices.

Analyze and optimize the following ${language} code.

Your primary objective is to improve the code while preserving
its original functionality and expected behavior.

Optimization areas:

1. Performance
   - Reduce unnecessary operations.
   - Avoid redundant calculations.
   - Improve inefficient algorithms when possible.
   - Identify potential performance bottlenecks.

2. Readability
   - Improve variable and function naming.
   - Simplify unnecessarily complicated logic.
   - Improve code organization.
   - Remove unnecessary complexity.

3. Maintainability
   - Apply clean-code principles.
   - Reduce duplication.
   - Improve structure where appropriate.
   - Make the code easier to modify and understand.

4. Language Best Practices
   - Follow modern ${language} conventions.
   - Use appropriate language features.
   - Avoid deprecated or unnecessarily complex approaches.

5. Safety
   - Do not introduce security vulnerabilities.
   - Do not remove necessary validation.
   - Preserve important error handling.

6. Functionality
   - Preserve the original behavior.
   - Do not remove required functionality.
   - Do not change expected inputs or outputs unless
     absolutely necessary for the optimization.

Return your response using EXACTLY the following structure:

# Optimized Code

Return ONLY the complete optimized ${language} source code
inside this section.

Do not use triple backticks inside this section.

# Performance Improvements

Explain the specific performance improvements made.

# Readability Improvements

Explain how the code became easier to understand.

# Maintainability Improvements

Explain structural and maintainability improvements.

# Best Practices

List the ${language} best practices applied.

# Potential Issues

Mention any remaining limitations, trade-offs, or areas that
could not be safely optimized.

IMPORTANT:

- Do not invent functionality.
- Do not change the intended behavior.
- Do not omit important parts of the original code.
- Base the analysis strictly on the provided code.
- If the code is already well optimized, say so instead of
  making unnecessary changes.
- If no meaningful optimization is possible, return the
  original code and explain why.
- Keep explanations specific to the provided code.
- Do not include unrelated information.

Programming Language:
${language}

Original Code:

${code}
`.trim();