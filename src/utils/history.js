const STORAGE_KEY = "codemorph-history";

export function getHistory() {
  try {
    const history = localStorage.getItem(STORAGE_KEY);

    return history ? JSON.parse(history) : [];
  } catch {
    return [];
  }
}

export function saveHistory(history) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(history)
  );
}

export function addHistory(record) {
  const history = getHistory();

  history.unshift(record);

  // Keep only latest 20 conversions
  const updatedHistory = history.slice(0, 20);

  saveHistory(updatedHistory);

  return updatedHistory;
}

export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
}