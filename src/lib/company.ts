/**
 * Global Oakins Studio Configuration
 * Re-exports from siteConfig.ts for backwards compatibility.
 */
import { SITE_CONFIG } from './siteConfig';

export const COMPANY = {
  name: SITE_CONFIG.name,
  shortName: SITE_CONFIG.name,
  tagline: SITE_CONFIG.tagline,
  subTagline: SITE_CONFIG.shortDescription,
  statusText: SITE_CONFIG.capacityStatement,
  heroHeadline: ["Your", "business,", "organised", "and", "running", "smoothly."],
  services: SITE_CONFIG.services,
  process: SITE_CONFIG.process.steps,
};

export const COMPANY_NAME = COMPANY.name;
