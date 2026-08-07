/**
 * ==========================================================
 * CodeMorph AI
 * Retry Service
 * ==========================================================
 */

import aiConfig from "../config/aiConfig";

/**
 * Delay helper
 */
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Determine whether the error should be retried.
 */
function shouldRetry(error) {
  if (!error) {
    return false;
  }

  const message = error.message?.toLowerCase() || "";

  return (
    message.includes("network") ||
    message.includes("timeout") ||
    message.includes("fetch") ||
    message.includes("503") ||
    message.includes("502") ||
    message.includes("500") ||
    message.includes("429")
  );
}

/**
 * Retry wrapper with exponential backoff.
 */
export async function retry(fn) {
  let lastError;

  for (let attempt = 1; attempt <= aiConfig.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (!shouldRetry(error)) {
        throw error;
      }

      if (attempt === aiConfig.maxRetries) {
        break;
      }

      const delay =
        aiConfig.retryDelay * Math.pow(2, attempt - 1);

      await sleep(delay);
    }
  }

  throw lastError;
}