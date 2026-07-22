import {
  extractLink,
  normalizeCollection,
  t,
} from '../../utils/helpers.js';
import { localizedString, type LocaleValue } from '../../utils/localizedString.js';
import type { QuizOption, QuizQuestion, QuizResult } from './types.js';

function splitLines(raw: LocaleValue): string[] {
  const text = localizedString(raw, '');
  if (!text) return [];
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function parseOptions(raw: unknown): QuizOption[] {
  if (Array.isArray(raw)) {
    return normalizeCollection(raw)
      .map((row) => ({
        label: localizedString(row.option_label as LocaleValue) || localizedString(row.label as LocaleValue),
        resultId: String(row.result_id ?? row.resultId ?? '').trim(),
      }))
      .filter((opt) => opt.label && opt.resultId);
  }

  const lines = splitLines(raw as LocaleValue);
  return lines
    .map((line) => {
      const [label, resultId] = line.split('|').map((part) => part.trim());
      if (!label || !resultId) return null;
      return { label, resultId };
    })
    .filter((opt): opt is QuizOption => !!opt);
}

export function parseQuestions(raw: unknown): QuizQuestion[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const text = localizedString(row.text as LocaleValue) || localizedString(row.question as LocaleValue);
      const options = parseOptions(row.options);
      return {
        id: String(row.id ?? '').trim() || `q-${i + 1}`,
        text,
        options,
      } satisfies QuizQuestion;
    })
    .filter((q) => q.text && q.options.length);

  return parsed.length ? parsed : defaultQuestions();
}

export function parseResults(raw: unknown): QuizResult[] {
  const parsed = normalizeCollection(raw)
    .map((row, i) => {
      const title = localizedString(row.title as LocaleValue);
      return {
        id: String(row.code ?? row.id ?? '').trim() || `result-${i + 1}`,
        title,
        desc: localizedString(row.desc as LocaleValue) || localizedString(row.description as LocaleValue),
        link: extractLink(row.link),
        ctaLabel: localizedString(row.cta_label as LocaleValue),
        icon: String(row.icon ?? '').trim(),
      } satisfies QuizResult;
    })
    .filter((r) => r.title);

  return parsed.length ? parsed : defaultResults();
}

function defaultQuestions(): QuizQuestion[] {
  return [
    {
      id: 'vehicle-type',
      text: t('ما نوع سيارتك؟', 'What type of vehicle do you drive?'),
      options: [
        { label: t('سيدان', 'Sedan'), resultId: 'general' },
        { label: t('SUV', 'SUV'), resultId: 'general' },
        { label: t('بيك أب', 'Pickup'), resultId: 'general' },
        { label: t('شاحنة', 'Truck'), resultId: 'general' },
      ],
    },
    {
      id: 'issue',
      text: t('ما المشكلة الرئيسية؟', 'What is the main issue?'),
      options: [
        { label: t('فرامل', 'Brakes'), resultId: 'brakes' },
        { label: t('بطارية', 'Battery'), resultId: 'battery' },
        { label: t('إطارات', 'Tires'), resultId: 'tires' },
        { label: t('محرك', 'Engine'), resultId: 'engine' },
        { label: t('تكييف', 'AC'), resultId: 'ac' },
      ],
    },
    {
      id: 'when',
      text: t('متى تظهر المشكلة؟', 'When does the issue appear?'),
      options: [
        { label: t('دائمًا', 'Always'), resultId: 'urgent' },
        { label: t('عند التشغيل', 'On startup'), resultId: 'battery' },
        { label: t('أثناء القيادة', 'While driving'), resultId: 'engine' },
        { label: t('عند الفرملة', 'When braking'), resultId: 'brakes' },
      ],
    },
    {
      id: 'warning',
      text: t('هل توجد لمبة تحذير؟', 'Is a warning light on?'),
      options: [
        { label: t('نعم', 'Yes'), resultId: 'urgent' },
        { label: t('لا', 'No'), resultId: 'general' },
      ],
    },
    {
      id: 'mileage',
      text: t('كم عدد الكيلومترات؟', 'What is your mileage?'),
      options: [
        { label: t('أقل من 40 ألف', 'Under 40k'), resultId: 'general' },
        { label: t('40–80 ألف', '40–80k'), resultId: 'maintenance' },
        { label: t('أكثر من 80 ألف', 'Over 80k'), resultId: 'maintenance' },
      ],
    },
  ];
}

function defaultResults(): QuizResult[] {
  return [
    {
      id: 'brakes',
      title: t('فحص الفرامل مطلوب', 'Brake inspection needed'),
      desc: t('قد تحتاج لفحص فحمات وأسطوانات الفرامل واستبدال سائل الفرامل.', 'You may need pad/rotor inspection and brake fluid check.'),
      link: '',
      ctaLabel: t('تصفّح قطع الفرامل', 'Browse brake parts'),
      icon: '🛑',
    },
    {
      id: 'battery',
      title: t('فحص البطارية والشحن', 'Battery & charging check'),
      desc: t('البطارية أو الدينامو قد يحتاجان فحصًا — خصوصًا عند التشغيل البارد.', 'Battery or alternator may need testing, especially on cold starts.'),
      link: '',
      ctaLabel: t('تصفّح البطاريات', 'Browse batteries'),
      icon: '🔋',
    },
    {
      id: 'tires',
      title: t('صيانة الإطارات', 'Tire maintenance'),
      desc: t('افحص التآكل والضغط ودوران الإطارات.', 'Check wear, pressure, and rotation.'),
      link: '',
      ctaLabel: t('تصفّح الإطارات', 'Browse tires'),
      icon: '🛞',
    },
    {
      id: 'engine',
      title: t('فحص المحرك', 'Engine diagnosis'),
      desc: t('أصوات أو اهتزاز أثناء القيادة قد تتطلب فحصًا تشخيصيًا.', 'Noises or vibration while driving may need diagnostic inspection.'),
      link: '',
      ctaLabel: t('تصفّح قطع المحرك', 'Browse engine parts'),
      icon: '⚙',
    },
    {
      id: 'ac',
      title: t('صيانة التكييف', 'AC service'),
      desc: t('ضعف التبريد قد يعني فحص غاز التكييف أو الفلاتر.', 'Weak cooling may need refrigerant or filter service.'),
      link: '',
      ctaLabel: t('تصفّح قطع التكييف', 'Browse AC parts'),
      icon: '❄',
    },
    {
      id: 'maintenance',
      title: t('صيانة دورية', 'Routine maintenance'),
      desc: t('حان وقت زيت المحرك والفلاتر وفحص شامل حسب الكيلومترات.', 'Time for oil, filters, and a mileage-based inspection.'),
      link: '',
      ctaLabel: t('اطلب قطع الصيانة', 'Order maintenance parts'),
      icon: '🔧',
    },
    {
      id: 'urgent',
      title: t('فحص عاجل موصى به', 'Urgent inspection recommended'),
      desc: t('لمبة تحذير أو عطل مستمر — توقف عن القيادة إن لزم وافحص فورًا.', 'Warning light or persistent fault — stop driving if needed and inspect soon.'),
      link: '',
      ctaLabel: t('احجز فحصًا', 'Book inspection'),
      icon: '⚠',
    },
    {
      id: 'general',
      title: t('فحص عام', 'General check-up'),
      desc: t('لا توجد مؤشرات حرجة — جدولة فحص دوري للاطمئنان.', 'No critical signs — schedule a routine check for peace of mind.'),
      link: '',
      ctaLabel: t('تصفّح قطع الغيار', 'Browse parts'),
      icon: '✅',
    },
  ];
}

export function scoreResults(
  answers: Record<string, string>,
  questions: QuizQuestion[]
): Map<string, number> {
  const scores = new Map<string, number>();
  for (const question of questions) {
    const selectedLabel = answers[question.id];
    if (!selectedLabel) continue;
    const option = question.options.find((opt) => opt.label === selectedLabel);
    if (!option) continue;
    scores.set(option.resultId, (scores.get(option.resultId) ?? 0) + 1);
  }
  return scores;
}

export function topResult(
  scores: Map<string, number>,
  results: QuizResult[]
): QuizResult | null {
  if (!results.length) return null;
  if (!scores.size) return results[0] ?? null;

  const ranked = [...scores.entries()].sort((a, b) => b[1] - a[1]);
  for (const [id] of ranked) {
    const match = results.find((r) => r.id === id);
    if (match) return match;
  }
  return results[0] ?? null;
}

export function computeTopResult(
  answers: Record<string, string>,
  questions: QuizQuestion[],
  results: QuizResult[]
): QuizResult | null {
  return topResult(scoreResults(answers, questions), results);
}

export function progressPercent(stepIndex: number, total: number): number {
  if (total <= 0) return 0;
  if (total === 1) return 100;
  return Math.round((stepIndex / (total - 1)) * 100);
}
