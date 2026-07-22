import {
  extractImageUrl,
  itemIdFromLabel,
  normalizeCollection,
  t,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { VehicleBrand, VehicleRow } from './types.js';

/**
 * Parse merchant vehicle table.
 * One row = company (brand) + logo.
 */
export function parseVehicleRows(raw: unknown): VehicleRow[] {
  const rows: VehicleRow[] = [];

  normalizeCollection(raw).forEach((row, i) => {
    const brandName =
      localizedString(row.brand as LocaleValue) ||
      localizedString(row.brand_name as LocaleValue) ||
      localizedString(row.company as LocaleValue) ||
      localizedString(row.name as LocaleValue) ||
      localizedString(row.title as LocaleValue);

    if (!brandName) return;

    const brandId = itemIdFromLabel(brandName, '') || `brand-${i + 1}`;

    rows.push({
      brandId,
      brandName,
      brandImage: extractImageUrl(row.brand_image ?? row.image ?? row.logo),
    });
  });

  return rows;
}

export function resolveVehicleRows(config: Record<string, unknown>): VehicleRow[] {
  return parseVehicleRows(config.svf_vehicles ?? config.svf_custom_vehicles);
}

export function brandsFromRows(rows: VehicleRow[]): VehicleBrand[] {
  const map = new Map<string, VehicleBrand>();
  for (const row of rows) {
    const existing = map.get(row.brandId);
    if (!existing) {
      map.set(row.brandId, {
        id: row.brandId,
        name: row.brandName,
        image: row.brandImage,
      });
    } else if (!existing.image && row.brandImage) {
      existing.image = row.brandImage;
    }
  }
  return [...map.values()];
}

export function label(config: Record<string, unknown>, key: string, ar: string, en: string): string {
  return localizedString(config[key] as LocaleValue) || t(ar, en);
}
