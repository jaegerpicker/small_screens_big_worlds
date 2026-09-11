export const PROFILE_IDS = ['security', 'mobile-games'] as const;

export type ProfileId = (typeof PROFILE_IDS)[number];

export function parseProfileId(value: unknown): ProfileId | null {
  return typeof value === 'string' && (PROFILE_IDS as readonly string[]).includes(value)
    ? (value as ProfileId)
    : null;
}

export function resolveProfileId(requested: unknown, fallback: ProfileId): ProfileId {
  return parseProfileId(requested) ?? fallback;
}
