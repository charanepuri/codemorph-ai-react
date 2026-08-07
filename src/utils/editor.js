export function countLines(text = "") {
  if (!text) return 0;

  return text.split("\n").length;
}

export function isEditorEmpty(text = "") {
  return text.trim().length === 0;
}