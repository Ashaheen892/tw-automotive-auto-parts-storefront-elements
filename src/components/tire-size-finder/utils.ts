import {
  getRadioValue,
  itemIdFromLabel,
  normalizeCollection,
  t,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { TireSizeRow, TireTypeOption } from './types.js';

const DEFAULT_TYPES_META = [
  {
    id: 'all-season',
    ar: 'طوال السنة',
    en: 'All-season',
    dar: 'استخدام يومي متوازن',
    den: 'Balanced daily use',
  },
  {
    id: 'summer',
    ar: 'صيفي',
    en: 'Summer',
    dar: 'ثبات أعلى في الحر',
    den: 'Better grip in heat',
  },
  {
    id: 'winter',
    ar: 'شتوي',
    en: 'Winter',
    dar: 'للأمطار والبرودة',
    den: 'For rain and cold',
  },
  {
    id: 'offroad',
    ar: 'طرق وعرة',
    en: 'Off-road',
    dar: 'للبر والطرق الوعرة',
    den: 'Desert & rough roads',
  },
] as const;

function defaultTireTypes(): TireTypeOption[] {
  return DEFAULT_TYPES_META.map((x) => ({
    id: x.id,
    name: t(x.ar, x.en),
    desc: t(x.dar, x.den),
  }));
}

const DEFAULT_WIDTHS = ['185', '195', '205', '215', '225', '235', '245', '255', '265'];
const DEFAULT_ASPECTS = ['35', '40', '45', '50', '55', '60', '65', '70'];
const DEFAULT_RIMS = ['15', '16', '17', '18', '19', '20', '21', '22'];

export function label(config: Record<string, unknown>, key: string, ar: string, en: string): string {
  return localizedString(config[key] as LocaleValue) || t(ar, en);
}

export function parseTireTypes(raw: unknown): TireTypeOption[] {
  const rows = normalizeCollection(raw)
    .map((row, i) => {
      const name =
        localizedString(row.name as LocaleValue) ||
        localizedString(row.title as LocaleValue);
      if (!name) return null;
      return {
        id: itemIdFromLabel(name, '') || `type-${i + 1}`,
        name,
        desc: localizedString(row.desc as LocaleValue) || localizedString(row.description as LocaleValue),
      } satisfies TireTypeOption;
    })
    .filter((x): x is NonNullable<typeof x> => !!x);
  return rows.length ? rows : defaultTireTypes();
}

export function parseSizeList(raw: unknown, fallback: string[]): string[] {
  const text = localizedString(raw as LocaleValue, '') || String(raw ?? '').trim();
  if (!text) return fallback;
  const parts = text
    .split(/[,،|\s]+/)
    .map((p) => p.trim())
    .filter(Boolean);
  return parts.length ? [...new Set(parts)] : fallback;
}

export function resolveWidths(config: Record<string, unknown>): string[] {
  return parseSizeList(config.tsf_widths, DEFAULT_WIDTHS);
}

export function resolveAspects(config: Record<string, unknown>): string[] {
  return parseSizeList(config.tsf_aspects, DEFAULT_ASPECTS);
}

export function resolveRims(config: Record<string, unknown>): string[] {
  return parseSizeList(config.tsf_rims, DEFAULT_RIMS);
}

export function parseTireSizes(raw: unknown): TireSizeRow[] {
  return normalizeCollection(raw)
    .map((row, i) => {
      const width = String(row.width ?? '').trim();
      const aspect = String(row.aspect ?? row.profile ?? '').trim();
      const rim = String(row.rim ?? row.diameter ?? '').trim();
      if (!width || !aspect || !rim) return null;
      const typeId =
        getRadioValue(row.type, '') ||
        itemIdFromLabel(localizedString(row.type_name as LocaleValue), '') ||
        '';
      const labelText = `${width}/${aspect} R${rim}`;
      return {
        id: itemIdFromLabel(labelText, '') || `size-${i + 1}`,
        width,
        aspect,
        rim,
        typeId,
        label: labelText,
      } satisfies TireSizeRow;
    })
    .filter((x): x is NonNullable<typeof x> => !!x);
}

export function formatTireCode(width: string, aspect: string, rim: string): string {
  if (!width || !aspect || !rim) return '';
  return `${width}/${aspect} R${rim}`;
}

export function findMatchingSize(
  rows: TireSizeRow[],
  width: string,
  aspect: string,
  rim: string,
  typeId: string
): TireSizeRow | null {
  return (
    rows.find(
      (r) =>
        r.width === width &&
        r.aspect === aspect &&
        r.rim === rim &&
        (!typeId || !r.typeId || r.typeId === typeId)
    ) || null
  );
}
