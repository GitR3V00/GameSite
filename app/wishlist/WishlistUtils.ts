export const getStoredItem = <T,>(key: string): T[] => {
  const item = localStorage.getItem(key);
  if (!item) return [];
  try {
    return JSON.parse(item) as T[];
  } catch (e) {
    console.error(`Failed to parse localStorage item with key "${key}"`, e);
    return [];
  }
};


