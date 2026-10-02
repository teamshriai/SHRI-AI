/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Open roles — the card fields.
 * ─────────────────────────────────────────────────────────────────────────────
 * The Careers grid needs only these six short fields per role, and they ship
 * with the home page. Everything a job page adds (the facts block, The Role,
 * responsibilities, the ideal candidate and so on) lives in roleDetails.js,
 * keyed by the same slug, and loads only with the job page. Each field is
 * written in exactly one of the two files.
 */

export const ROLES = [
  /* ══════════════════════════════════════════════════════════════════════════
     1 · MBA — Healthcare Partnerships & AI Business Development
     Content supplied by SHRI-AI. Kept as written apart from canonical naming
     (SHRI-AI) and two paste artefacts in the original list.
     ══════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'mba-healthcare-partnerships-ai-business-development',
    discipline: 'Business & Strategy',
    title: 'MBA — Healthcare Partnerships & AI Business Development',
    focus: 'Intern to full-time · India & USA',
    accent: '#7B6FCD',
    summary:
      'Build hospital, laboratory and technology partnerships across India and the United States, and bridge clinical and AI teams.',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     2 · Stroke Neurologist — Clinical Lead, Stroke AI
     ══════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'stroke-neurologist-clinical-lead',
    discipline: 'Clinical · Stroke',
    title: 'Stroke Neurologist — Clinical Lead, Stroke AI',
    focus: 'Clinical direction for the stroke platform',
    accent: '#2a6db5',
    summary:
      'Set the clinical direction of the stroke platform, from triage definitions through validation with partner hospitals.',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     3 · Neuroradiologist — Stroke & Neurovascular Imaging
     ══════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'neuroradiologist-stroke-neurovascular-imaging',
    discipline: 'Clinical Imaging',
    title: 'Neuroradiologist — Stroke & Neurovascular Imaging',
    focus: 'Reference-standard reading and imaging validation',
    accent: '#3A82C4',
    summary:
      'Establish the imaging reference standard for stroke models, and validate what they see against expert reading.',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     4 · Clinical Imaging Data Specialist — Stroke Annotation & Curation
     ══════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'clinical-imaging-data-specialist-stroke',
    discipline: 'Clinical Data',
    title: 'Clinical Imaging Data Specialist — Stroke Annotation & Curation',
    focus: 'Datasets, annotation and traceability',
    accent: '#2aaa72',
    summary:
      'Build and maintain the annotated stroke imaging datasets every model is trained and validated on.',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     5 · Molecular Biologist — Genomics & Liquid Biopsy
     ══════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'molecular-biologist-genomics-liquid-biopsy',
    discipline: 'Laboratory Science',
    title: 'Molecular Biologist — Genomics & Liquid Biopsy',
    focus: 'NGS, ctDNA and assay development',
    accent: '#D4891E',
    summary:
      'Develop and validate the liquid-biopsy assays behind our precision-oncology work, from extraction to reportable result.',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     6 · Oncopathologist — Molecular Pathology
     ══════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'oncopathologist-molecular-pathology',
    discipline: 'Clinical · Oncology',
    title: 'Oncopathologist — Molecular Pathology',
    focus: 'Diagnostic ground truth and molecular correlation',
    accent: '#c0392b',
    summary:
      'Provide the diagnostic ground truth and molecular correlation that our oncology models are built and judged against.',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     7 · Bioinformatics Scientist
     ══════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'bioinformatics-scientist',
    discipline: 'Computational Biology',
    title: 'Bioinformatics Scientist',
    focus: 'Variant calling, ctDNA pipelines and multi-omics',
    accent: '#7B6FCD',
    summary:
      'Build the analysis pipelines that turn sequencing output into results clinicians and researchers can rely on.',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     8 · Clinical Research Associate
     ══════════════════════════════════════════════════════════════════════════ */
  {
    slug: 'clinical-research-associate',
    discipline: 'Clinical Research',
    title: 'Clinical Research Associate',
    focus: 'Validation studies across partner sites',
    accent: '#3A82C4',
    summary:
      'Run the validation studies that decide whether our stroke and oncology work holds up at partner sites.',
  },
];

/** Look up one role by its URL slug. Returns undefined for an unknown slug. */
export function getRoleBySlug(slug) {
  if (!slug) return undefined;
  return ROLES.find((role) => role.slug === slug);
}
