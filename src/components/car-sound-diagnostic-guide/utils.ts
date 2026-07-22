import {
  extractLink,
  getRadioValue,
  normalizeCollection,
  t,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { SeverityLevel, SoundCase } from './types.js';

const SEVERITIES: SeverityLevel[] = ['low', 'medium', 'high', 'critical'];

export function normalizeSeverity(value: unknown): SeverityLevel {
  const raw = getRadioValue(value, 'medium').toLowerCase();
  return (SEVERITIES as string[]).includes(raw) ? (raw as SeverityLevel) : 'medium';
}

export function parseCauses(raw: unknown): string[] {
  if (Array.isArray(raw)) {
    return raw
      .map((line) => localizedString(line as LocaleValue) || String(line ?? '').trim())
      .filter(Boolean);
  }
  const text = localizedString(raw as LocaleValue) || String(raw ?? '');
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function parseCases(raw: unknown): SoundCase[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const name = localizedString(row.name as LocaleValue);
      return {
        id: String(row.id ?? '').trim() || `case-${i + 1}`,
        name,
        icon: String(row.icon ?? '').trim(),
        description: localizedString(row.description as LocaleValue),
        causes: parseCauses(row.causes),
        severity: normalizeSeverity(row.severity),
        advice: localizedString(row.advice as LocaleValue),
        audioUrl: extractLink(row.audio_url) || extractLink(row.audio),
        videoUrl: extractLink(row.video_url) || extractLink(row.video),
        link: extractLink(row.link),
      } satisfies SoundCase;
    })
    .filter((item) => item.name);

  return parsed.length ? parsed : defaultCases();
}

function defaultCases(): SoundCase[] {
  return [
    {
      id: 'rattle',
      name: t('طقطقة / رنين', 'Rattling'),
      icon: '🔊',
      description: t('أصوات طقطقة من المحرك أو تحت السيارة أثناء القيادة.', 'Knocking or rattling from engine or undercarriage while driving.'),
      causes: [
        t('مسامير أو clips مفكوكة', 'Loose bolts or clips'),
        t('تآكل في العادم أو الحماية السفلية', 'Exhaust or heat shield wear'),
        t('احتمال تلف في المحرك', 'Possible internal engine wear'),
      ],
      severity: 'medium',
      advice: t('افحص السيارة في ورشة موثوقة قبل استمرار القيادة لمسافات طويلة.', 'Have a trusted workshop inspect before long drives.'),
      audioUrl: '',
      videoUrl: '',
      link: '',
    },
    {
      id: 'brake-squeal',
      name: t('صرير الفرامل', 'Brake squeal'),
      icon: '🛑',
      description: t('صوت صرير عند الضغط على الفرامل.', 'Squealing when pressing the brake pedal.'),
      causes: [
        t('تآكل تيل الفرامل', 'Worn brake pads'),
        t('غبار أو زيت على الأقراص', 'Dust or oil on rotors'),
        t('تيل فرامل منخفض الجودة', 'Low-quality brake pads'),
      ],
      severity: 'high',
      advice: t('لا تؤجل فحص الفرامل — السلامة أولًا.', 'Do not delay brake inspection — safety first.'),
      audioUrl: '',
      videoUrl: '',
      link: '',
    },
    {
      id: 'vibration',
      name: t('اهتزاز أثناء القيادة', 'Vibration while driving'),
      icon: '📳',
      description: t('اهتزاز في المقود أو جسم السيارة بسرعات معينة.', 'Steering wheel or body vibration at certain speeds.'),
      causes: [
        t('توازن الإطارات', 'Tire balance'),
        t('تآكل في الأذرع أو الكفرات', 'Worn suspension or bushings'),
        t('أقراص فرامل مشوهة', 'Warped brake rotors'),
      ],
      severity: 'medium',
      advice: t('ابدأ بفحص ضغط الإطارات والتوازن.', 'Start with tire pressure and balance check.'),
      audioUrl: '',
      videoUrl: '',
      link: '',
    },
    {
      id: 'startup',
      name: t('صوت عند التشغيل', 'Startup noise'),
      icon: '🔑',
      description: t('صوت غير طبيعي عند تشغيل المحرك.', 'Unusual noise when starting the engine.'),
      causes: [
        t('بطارية ضعيفة', 'Weak battery'),
        t('سير المحرك أو البكرة', 'Serpentine belt or pulley'),
        t('زيت منخفض أو كثافة غير مناسبة', 'Low or wrong oil viscosity'),
      ],
      severity: 'medium',
      advice: t('سجّل الصوت وشاركه مع الفني لتشخيص أسرع.', 'Record the sound and share with your mechanic.'),
      audioUrl: '',
      videoUrl: '',
      link: '',
    },
    {
      id: 'tire',
      name: t('ضجيج الإطارات', 'Tire noise'),
      icon: '🛞',
      description: t('همهمة أو صوت طنين مستمر من الإطارات.', 'Humming or droning from tires.'),
      causes: [
        t('تآكل غير متساوٍ', 'Uneven tread wear'),
        t('تآكل رولمان البلي', 'Wheel bearing wear'),
        t('إطارات شتوية على أسفلت جاف', 'Winter tires on dry pavement'),
      ],
      severity: 'low',
      advice: t('دوّر الإطارات وافحص المحاذاة دوريًا.', 'Rotate tires and check alignment regularly.'),
      audioUrl: '',
      videoUrl: '',
      link: '',
    },
  ];
}

export function severityLabel(level: SeverityLevel): string {
  const map: Record<SeverityLevel, { ar: string; en: string }> = {
    low: { ar: 'منخفض', en: 'Low' },
    medium: { ar: 'متوسط', en: 'Medium' },
    high: { ar: 'مرتفع', en: 'High' },
    critical: { ar: 'حرج', en: 'Critical' },
  };
  return t(map[level].ar, map[level].en);
}

export function isYoutubeUrl(url: string): boolean {
  return /youtube\.com|youtu\.be/i.test(url);
}

export function youtubeEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url, window.location.origin);
    if (parsed.hostname.includes('youtu.be')) {
      const id = parsed.pathname.replace('/', '');
      return id ? `https://www.youtube.com/embed/${id}` : '';
    }
    const id = parsed.searchParams.get('v');
    return id ? `https://www.youtube.com/embed/${id}` : '';
  } catch {
    return '';
  }
}

export function isAudioUrl(url: string): boolean {
  return /\.(mp3|wav|ogg|m4a)(\?|$)/i.test(url);
}
