/**
 * Configuration publicitaire Revive Adserver pour le domaine ambiance-decoration.com
 * Source : Inventaire ads.les4h.fr (Affiliate ID 99)
 */

export interface AdZoneConfig {
  zoneId: number;
  format: 'leaderboard' | 'mediumRectangle' | 'mobileBanner' | 'largeRectangle' | 'halfPage' | 'skyscraper';
  width: number;
  height: number;
  name: string;
}

export type AdSlotKey =
  | 'header'
  | 'inContent'
  | 'mobileSticky'
  | 'largeRectangle'
  | 'halfPage'
  | 'skyscraper';

export interface DomainAdsConfig {
  domain: string;
  affiliateId: number;
  reviveId: string;
  scriptUrl: string;
  zones: Record<AdSlotKey, AdZoneConfig>;
}

export const adsConfig: DomainAdsConfig = {
  domain: 'ambiance-decoration.com',
  affiliateId: 99,
  reviveId: 'ac119b122a644588953c74c4c1daee06',
  scriptUrl: '//ads.les4h.fr/www/delivery/asyncjs.php',
  zones: {
    header: {
      zoneId: 608,
      format: 'leaderboard',
      width: 728,
      height: 90,
      name: 'Leaderboard 608',
    },
    inContent: {
      zoneId: 607,
      format: 'mediumRectangle',
      width: 300,
      height: 250,
      name: 'Medium Rectangle 607',
    },
    mobileSticky: {
      zoneId: 605,
      format: 'mobileBanner',
      width: 320,
      height: 100,
      name: 'Mobile Banner 605',
    },
    largeRectangle: {
      zoneId: 606,
      format: 'largeRectangle',
      width: 336,
      height: 280,
      name: 'Large Rectangle 606',
    },
    halfPage: {
      zoneId: 609,
      format: 'halfPage',
      width: 300,
      height: 600,
      name: 'Half Page 609',
    },
    skyscraper: {
      zoneId: 604,
      format: 'skyscraper',
      width: 160,
      height: 600,
      name: 'Skyscraper 604',
    },
  },
};

export default adsConfig;
