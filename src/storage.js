export function parseProgressPayload(raw) {
  if (!raw) return {};

  const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
  const progress = parsed?.progress && typeof parsed.progress === "object" ? parsed.progress : parsed;

  return progress && typeof progress === "object" && !Array.isArray(progress) ? progress : {};
}

export function createProgressBackup(progress, savedAt = Date.now()) {
  return {
    version: 1,
    savedAt,
    progress,
  };
}

export function loadStoredProgress(storage, primaryKey, backupKey) {
  try {
    return parseProgressPayload(storage.getItem(primaryKey));
  } catch {
    try {
      return parseProgressPayload(storage.getItem(backupKey));
    } catch {
      return {};
    }
  }
}

export function saveStoredProgress(storage, primaryKey, backupKey, progress, savedAt = Date.now()) {
  storage.setItem(primaryKey, JSON.stringify(progress));
  storage.setItem(backupKey, JSON.stringify(createProgressBackup(progress, savedAt)));
  return savedAt;
}
