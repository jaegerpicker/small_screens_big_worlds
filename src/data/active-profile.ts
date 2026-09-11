import type { ProfileId } from '../lib/site-profile.ts';

/**
 * The profile the live site is built with.
 *
 * Change this value and merge to main to switch the public presentation.
 * Preview the other profile locally without editing this file:
 *
 *   SITE_PROFILE=mobile-games npm run dev
 */
export const DEFAULT_PROFILE: ProfileId = 'security';
