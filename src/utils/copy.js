export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);

    return {
      success: true,
      message: "Copied successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to copy.",
      error,
    };
  }
}