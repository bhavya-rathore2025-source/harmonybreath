export interface ExerciseStats {
  totalSessions: number;
  totalRounds: number;
  bestHoldSec: number;
}

export type ExerciseId = string;

const STORAGE_KEY = 'hb_stats';

function getEmptyStats(): ExerciseStats {
  return { totalSessions: 0, totalRounds: 0, bestHoldSec: 0 };
}

export function getAllStats(): Record<ExerciseId, ExerciseStats> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getExerciseStats(exerciseId: ExerciseId): ExerciseStats {
  const all = getAllStats();
  return all[exerciseId] ?? getEmptyStats();
}

export function saveExerciseStats(
  exerciseId: ExerciseId,
  data: { totalRounds: number; bestHoldSec?: number }
): void {
  try {
    const all = getAllStats();
    const current = all[exerciseId] ?? getEmptyStats();
    current.totalSessions += 1;
    current.totalRounds += data.totalRounds;
    if (data.bestHoldSec !== undefined) {
      current.bestHoldSec = Math.max(current.bestHoldSec, data.bestHoldSec);
    }
    all[exerciseId] = current;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    window.dispatchEvent(new Event('hb_stats_updated'));
  } catch {
    // Ignore localStorage errors
  }
}