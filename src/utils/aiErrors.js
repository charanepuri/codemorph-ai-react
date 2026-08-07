/**
 * ==========================================================
 * CodeMorph AI
 * AI Error Utilities
 * ==========================================================
 */

/**
 * Convert AI SDK errors into user-friendly messages.
 */
export function getAIErrorMessage(error) {
  if (!error) {
    return "An unexpected error occurred.";
  }

  const message = error.message?.toLowerCase() || "";

  // Missing API Key
  if (
    message.includes("api key") ||
    message.includes("api_key") ||
    message.includes("authentication")
  ) {
    return "Gemini API key is missing or invalid.";
  }

  // Network
  if (
    message.includes("network") ||
    message.includes("fetch") ||
    message.includes("failed to fetch")
  ) {
    return "Network error. Please check your internet connection.";
  }

  // Timeout
  if (message.includes("timeout")) {
    return "The request timed out. Please try again.";
  }

  // Rate Limit
  if (
    message.includes("429") ||
    message.includes("resource exhausted") ||
    message.includes("quota")
  ) {
    return "Rate limit exceeded. Please try again in a few moments.";
  }

  // Service Unavailable
  if (
    message.includes("503") ||
    message.includes("502") ||
    message.includes("500")
  ) {
    return "AI service is temporarily unavailable.";
  }

  // Empty Response
  if (message.includes("empty response")) {
    return "The AI returned an empty response.";
  }

  return "Something went wrong while communicating with Gemini AI.";
}

/**
 * Determine whether an error should be shown as a toast.
 */
export function shouldShowToast(error) {
  if (!error) return false;

  return true;
}

/**
 * Log detailed errors in development only.
 */
export function logAIError(error) {
  if (import.meta.env.DEV) {
    console.error("Gemini Error:", error);
  }
}