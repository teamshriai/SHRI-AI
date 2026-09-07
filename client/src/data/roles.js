/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Open roles + full job descriptions.
 * ─────────────────────────────────────────────────────────────────────────────
 * Data lives here rather than inside Careers.jsx because two views read it: the
 * card grid in Careers.jsx and the standalone job page in JobDetail.jsx.
 *
 * Every role uses the SAME section schema, and the descriptions are written to
 * a comparable length (see the word counts in the repo notes), so no listing
 * reads as thinner than another:
 *
 *   position           → the facts block at the top of the page
 *   intro[]            → "The Role", 3 paragraphs
 *   pipeline           → the one-line flow of the job
 *   responsibilities[] → "Key Responsibilities", numbered groups of bullets
 *   education[]        │
 *   requiredSkills[]   ├→ "Ideal Candidate"
 *   preferredExp[]     │
 *   lookingFor[]       → "What We Are Looking For", 3 blocks
 *   success[]          → "Success in This Role"
 *   opportunity[]      → closing paragraphs
 *
 * `location`, `market`, `employment` and `compensation` are the only invented
 * fields in here; they follow the one role SHRI-AI has actually specified (the
 * MBA listing) and are collected in `position` on each role so they can be
 * corrected in one place per role.
 */

/** Shared preamble — identical on every listing, so the framing never drifts. */
export const ABOUT_SHRI_AI = [
  'SHRI-AI is developing an AI-powered healthcare platform designed to support stroke-care workflows through medical imaging analysis, clinical decision support, and rapid identification and prioritisation of potentially critical cases.',
  'SHRI-AI is a California-based 501(c)(3) nonprofit. Alongside the stroke platform, we build and fund open-source work in precision oncology — genomics, liquid biopsy and ctDNA — so that earlier detection and precision care reach hospitals, laboratories and communities everywhere, not only the largest medical centres.',
];

const COMMON = {
  project: 'SHRI-AI',
  location: 'Coimbatore, Tamil Nadu, India',
  market: 'India & USA',
  compensation: 'As per industry standard',
};

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
    position: {
      ...COMMON,
      title: 'MBA — Healthcare Partnerships & AI Business Development (Intern)',
      employment: 'Full-time / Internship-to-full-time',
    },
    pipeline:
      'Build healthcare partnerships → Identify AI opportunities → Coordinate technical solutions → Deploy pilots → Develop long-term business',
    intro: [
      'We are looking for an MBA candidate with strong AI and technology knowledge and excellent business-development skills, to help build partnerships with hospitals, diagnostic laboratories, healthcare organisations and technology partners in India and the United States.',
      'This person will serve as a bridge between healthcare professionals, business partners and our AI and technical team. The position combines healthcare business development, AI product development, partnership management and project coordination.',
      'This is not a traditional sales position. We are looking for someone who understands both AI and the healthcare business, and who can communicate effectively with doctors, hospital administrators, laboratory professionals, customers and AI engineers.',
    ],
    responsibilities: [
      {
        title: 'Hospital & laboratory partnerships — India',
        items: [
          'Identify and develop relationships with hospitals, diagnostic laboratories, imaging centres, neurologists, radiologists and healthcare organisations.',
          'Present the SHRI-AI platform to potential partners.',
          'Identify hospitals suitable for pilot deployments.',
          'Understand existing stroke-care and radiology workflows.',
          'Coordinate hospital onboarding and pilot implementation.',
          'Gather feedback from clinicians and hospital administrators.',
          'Help establish partnerships for appropriate clinical and imaging data for research and AI development.',
          'Develop long-term relationships with healthcare institutions.',
        ],
      },
      {
        title: 'U.S. healthcare & AI partnerships',
        items: [
          'Identify potential hospitals, imaging centres, radiology groups, healthcare organisations, laboratories and technology companies in the United States.',
          'Identify organisations interested in healthcare AI and AI-as-a-service.',
          'Understand their business, clinical and technology requirements.',
          'Identify opportunities where SHRI-AI or our AI capabilities can provide value.',
          'Coordinate discussions between U.S. partners and our technical team.',
          'Assist in developing proposals, pilot programmes, pricing models and partnership structures.',
          'Develop a pipeline of potential U.S. customers and strategic partners.',
        ],
      },
      {
        title: 'AI services & business development',
        lead: 'You will help identify opportunities for providing AI services to healthcare organisations, including:',
        items: [
          'Medical imaging AI.',
          'AI model development and AI model validation.',
          'Healthcare data analysis.',
          'AI workflow automation.',
          'Custom healthcare AI solutions.',
          'AI integration with existing healthcare systems.',
          'Research and development projects.',
        ],
        note: 'You will work closely with the technical team to determine what can be built, how it can be deployed, and what business value it can deliver.',
      },
      {
        title: 'AI & technology knowledge',
        lead: 'Strong working knowledge of AI is an important requirement for this position. You should understand, at a practical level:',
        items: [
          'Artificial intelligence and machine-learning fundamentals.',
          'Deep learning and neural networks.',
          'Computer vision and medical imaging AI.',
          'Generative AI and large language models.',
          'AI model training and validation.',
          'Accuracy, sensitivity, specificity, precision, recall and ROC/AUC.',
          'AI datasets and data quality.',
          'Model performance and clinical validation.',
          'AI deployment and monitoring.',
          'APIs and healthcare software integration.',
          'Basic concepts of CT, MRI, DICOM and medical imaging workflows.',
        ],
        note: 'You do not need to be an AI programmer or data scientist. You should be able to follow technical discussions, ask intelligent questions, communicate requirements to engineers, and explain AI capabilities to healthcare and business stakeholders.',
      },
      {
        title: 'Bridge between clinical & technical teams',
        items: [
          'Understand requirements from doctors, hospitals, laboratories and customers.',
          'Convert clinical and business requirements into clear product requirements.',
          'Work closely with AI engineers, software developers and data scientists.',
          'Coordinate product demonstrations and technical discussions.',
          'Communicate technical limitations and capabilities to business partners.',
          'Collect structured feedback from users and translate it into actionable requirements.',
          'Help prioritise product improvements based on clinical and commercial needs.',
        ],
      },
      {
        title: 'AI product & market development',
        items: [
          'Research the global healthcare-AI market.',
          'Study competing stroke-AI and medical-imaging AI products.',
          'Identify emerging AI technologies and potential applications.',
          'Identify new healthcare-AI opportunities.',
          'Evaluate potential partnerships and commercial opportunities.',
          'Assist in developing pricing and AI-as-a-service models.',
          'Help develop business cases and ROI presentations for hospitals and healthcare organisations.',
        ],
      },
      {
        title: 'Pilot programme & project management',
        items: [
          'Coordinate SHRI-AI pilot projects.',
          'Manage communication between hospitals and the technical team.',
          'Track requirements, milestones, deliverables and partner feedback.',
          'Coordinate demonstrations and testing.',
          'Help identify implementation problems and coordinate solutions.',
          'Prepare pilot reports and presentations.',
          'Help develop a repeatable deployment model for additional hospitals and healthcare organisations.',
        ],
      },
      {
        title: 'Business development & relationship management',
        items: [
          'Build and maintain a pipeline of potential partners and customers.',
          'Conduct business-development meetings.',
          'Prepare presentations, proposals and partnership documents.',
          'Assist with MoUs, pilot agreements and commercial proposals.',
          'Represent SHRI-AI at healthcare, AI and technology conferences.',
          'Develop relationships with healthcare executives, clinicians, technology companies and potential strategic partners.',
        ],
      },
    ],
    education: [
      'MBA in healthcare management, hospital administration, business development, marketing, technology management or a related field.',
      'MBA candidates with a strong technology or AI background are encouraged to apply.',
    ],
    requiredSkills: [
      'Strong understanding of AI/ML and emerging AI technologies.',
      'Excellent communication and presentation skills.',
      'Strong business-development and relationship-building skills.',
      'Ability to communicate with doctors and hospital executives.',
      'Ability to communicate effectively with AI engineers and technical teams.',
      'Strong analytical and problem-solving abilities.',
      'Understanding of healthcare technology and digital health.',
      'Ability to learn complex technical concepts quickly.',
      'Entrepreneurial and self-driven mindset.',
      'Excellent presentation, spreadsheet and documentation skills.',
    ],
    preferredExp: [
      'Healthcare AI.',
      'Medical imaging.',
      'Healthcare IT.',
      'Hospital business development.',
      'Diagnostic laboratories.',
      'Medical devices.',
      'AI or technology startups.',
      'Healthcare consulting.',
      'Clinical research.',
      'The U.S. healthcare market, or international business development.',
    ],
    lookingFor: [
      {
        title: 'Healthcare',
        text: 'Understand doctors, hospitals, laboratories, clinical workflows and healthcare needs.',
      },
      {
        title: 'AI & technology',
        text: 'Understand AI/ML, medical imaging, data, model validation and technology deployment.',
      },
      {
        title: 'Business',
        text: 'Identify opportunities, develop partnerships, create business models, and convert pilots into sustainable relationships.',
      },
    ],
    lookingForNote:
      'The ideal candidate should be able to sit in a meeting with a neurologist in the morning, an AI engineer in the afternoon and a U.S. healthcare executive in the evening — and communicate effectively with all three.',
    success: [
      'Establish strong hospital and laboratory partnerships in India.',
      'Identify and develop healthcare-AI opportunities in the USA.',
      'Bring qualified AI-service opportunities to the technical team.',
      'Help convert hospital pilots into long-term partnerships.',
      'Build a strong business-development pipeline.',
      'Help translate real-world healthcare needs into AI products.',
      'Contribute to the expansion of SHRI-AI into an international healthcare-AI platform.',
    ],
    opportunity: [
      'This is an opportunity for an MBA candidate who wants to build a career at the intersection of healthcare, artificial intelligence, business development and international technology.',
      'You will work directly with clinicians, hospitals, laboratories, AI engineers, data scientists, healthcare organisations and technology partners, while helping build SHRI-AI from its pilot stage towards an international platform.',
    ],
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
    position: {
      ...COMMON,
      title: 'Stroke Neurologist — Clinical Lead, Stroke AI',
      employment: 'Full-time / consulting',
    },
    pipeline:
      'Define clinical need → Specify the decision → Validate the model → Fit the hospital workflow → Monitor real-world performance',
    intro: [
      'We are looking for a stroke neurologist to own the clinical direction of the SHRI-AI stroke platform: what the system should detect, how confident it must be before it says anything, and where in the stroke pathway its output belongs.',
      'You will work alongside AI engineers, neuroradiologists and data scientists, translating acute stroke care into requirements an engineering team can build against — and then holding the result to a clinical standard rather than a benchmark score.',
      'This is a clinical leadership position rather than a purely advisory one. We are looking for someone who wants to shape how AI enters the stroke pathway, and who is comfortable saying that a model is not yet good enough to be in front of a clinician.',
    ],
    responsibilities: [
      {
        title: 'Clinical direction & use-case definition',
        items: [
          'Define the clinical problems the platform should address across the acute stroke pathway.',
          'Specify what the system must detect, prioritise or flag, and what it must deliberately not claim.',
          'Set the clinical acceptance criteria a model must meet before it reaches a clinician.',
          'Define how uncertain or low-confidence outputs should be presented.',
          'Prioritise the clinical roadmap alongside the technical and product teams.',
          'Review each release for clinical safety before deployment.',
        ],
      },
      {
        title: 'Imaging & triage requirements',
        items: [
          'Specify the imaging inputs the platform should support across CT, CT angiography, CT perfusion and MRI.',
          'Define triage and prioritisation logic in terms clinicians recognise.',
          'Advise on ASPECTS, core and penumbra assessment, and large-vessel-occlusion identification.',
          'Define how findings should be summarised for a treating team under time pressure.',
          'Advise on the handling of artefact, poor-quality studies and incidental findings.',
        ],
      },
      {
        title: 'Model validation & clinical evidence',
        items: [
          'Design the clinical validation strategy: reference standard, cohort definition and endpoints.',
          'Adjudicate ground truth and resolve disagreements between readers.',
          'Interpret sensitivity, specificity, predictive values and ROC/AUC in clinical rather than statistical terms.',
          'Identify failure modes and the patient groups in which the model underperforms.',
          'Contribute to publications, abstracts and conference presentations.',
          'Help prepare the clinical evidence needed for regulatory and institutional review.',
        ],
      },
      {
        title: 'Hospital workflow integration',
        items: [
          'Map existing stroke-care and radiology workflows at partner hospitals.',
          'Define where platform output belongs in the pathway, and who acts on it.',
          'Advise on alerting and escalation so the system helps rather than adds noise.',
          'Support clinical onboarding and training at pilot sites.',
          'Collect and structure clinician feedback after deployment.',
        ],
      },
      {
        title: 'Clinical & scientific knowledge',
        lead: 'You will bring practical command of:',
        items: [
          'Acute ischaemic and haemorrhagic stroke management.',
          'Thrombolysis and mechanical thrombectomy selection criteria.',
          'Neuroimaging interpretation across CT, CTA, CT perfusion and MRI.',
          'NIHSS, mRS and the outcome measures used in stroke research.',
          'Stroke pathway design, door-to-needle and door-to-groin metrics.',
          'Clinical research methodology and evidence appraisal.',
          'A working understanding of how imaging AI models are trained and validated.',
        ],
        note: 'You do not need to write code. You do need to be able to challenge a model result, ask what the training population was, and explain to an engineer why a metric that looks good is clinically unsafe.',
      },
      {
        title: 'Bridge between clinical & technical teams',
        items: [
          'Convert clinical requirements into clear, testable product requirements.',
          'Review annotation protocols and adjudicate difficult cases.',
          'Explain clinical constraints and limitations to engineers and data scientists.',
          'Explain model behaviour and its limits to clinicians and hospital leadership.',
          'Help prioritise improvements based on clinical impact rather than metric gain.',
        ],
      },
      {
        title: 'Partnerships & representation',
        items: [
          'Support conversations with neurologists, radiologists and hospital leadership at prospective sites.',
          'Represent SHRI-AI in clinical and academic settings.',
          'Contribute to research collaborations with hospitals and academic centres.',
          'Advise on ethics-committee and institutional-review submissions.',
        ],
      },
    ],
    education: [
      'MD or DM/DNB in neurology, with training or substantial clinical experience in stroke medicine.',
      'Fellowship in vascular neurology, stroke or neurocritical care is an advantage.',
      'Current or recent clinical practice in an acute stroke service.',
    ],
    requiredSkills: [
      'Deep expertise in acute stroke diagnosis and management.',
      'Confident interpretation of stroke neuroimaging.',
      'Ability to define clinical requirements precisely and in writing.',
      'Strong grasp of diagnostic-accuracy concepts and study design.',
      'Ability to communicate effectively with AI engineers and data scientists.',
      'Sound judgement about clinical safety and appropriate use of automated output.',
      'Excellent written and verbal communication.',
      'Collaborative approach in a small, fast-moving team.',
      'Willingness to learn how the models are built and evaluated.',
    ],
    preferredExp: [
      'Stroke AI or medical imaging AI.',
      'Clinical validation of diagnostic software.',
      'Imaging-based clinical research.',
      'Stroke registries or quality-improvement programmes.',
      'Clinical trials in acute stroke.',
      'Teaching or training clinical teams.',
      'Regulatory or ethics-committee submissions.',
      'Working with hospital IT, PACS or radiology informatics.',
      'Publication record in stroke or neuroimaging.',
    ],
    lookingFor: [
      {
        title: 'Clinical',
        text: 'Real command of the acute stroke pathway, and of what a treating team actually needs at the moment of decision.',
      },
      {
        title: 'Scientific',
        text: 'Rigour about evidence: reference standards, cohorts, endpoints, and the difference between a good metric and a safe system.',
      },
      {
        title: 'Collaborative',
        text: 'Comfort working with engineers, translating clinical reality into requirements, and explaining model limits to clinicians.',
      },
    ],
    lookingForNote:
      'The ideal candidate can review a difficult CT with a radiologist in the morning, redefine an acceptance threshold with an engineer in the afternoon, and explain the platform to a hospital director in the evening.',
    success: [
      'Clinical acceptance criteria are defined, documented and applied to every release.',
      'The validation strategy produces evidence clinicians and reviewers accept.',
      'Platform output fits the stroke pathway at pilot sites without adding noise.',
      'Failure modes are identified and understood rather than discovered in production.',
      'Clinicians at partner hospitals trust the system enough to use it, and know when not to.',
      'SHRI-AI has a defensible clinical evidence base for its stroke work.',
    ],
    opportunity: [
      'This is an opportunity to define how AI enters stroke care rather than to inherit someone else’s definition — at the stage where the clinical questions are still open.',
      'You will work directly with AI engineers, neuroradiologists, data scientists and partner hospitals across India and the United States, and your clinical judgement will set the standard the platform is held to.',
    ],
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
    position: {
      ...COMMON,
      title: 'Neuroradiologist — Stroke & Neurovascular Imaging',
      employment: 'Full-time / consulting',
    },
    pipeline:
      'Define the read → Establish ground truth → Measure reader agreement → Validate the model → Report the finding usefully',
    intro: [
      'We are looking for a neuroradiologist to establish and defend the imaging reference standard behind the SHRI-AI stroke platform. Every claim the platform makes rests on how carefully its ground truth was read.',
      'You will define reading protocols across CT, CT angiography, CT perfusion and MRI, adjudicate difficult studies, quantify reader agreement, and assess model output against expert interpretation rather than against a benchmark.',
      'This is a position for a radiologist who is interested in how imaging AI is evaluated, and who wants the evaluation done properly — including being the person who says a dataset is not clean enough to train on.',
    ],
    responsibilities: [
      {
        title: 'Reading protocols & reference standard',
        items: [
          'Define the reading protocol for each imaging task the platform supports.',
          'Specify the reference standard, including which modality and timepoint settles a case.',
          'Adjudicate disagreements between readers and document the reasoning.',
          'Define inclusion and exclusion criteria for training and validation cohorts.',
          'Set explicit rules for artefact, motion and technically inadequate studies.',
          'Review annotation guidelines before any large labelling effort begins.',
        ],
      },
      {
        title: 'Expert reading & adjudication',
        items: [
          'Read stroke and neurovascular studies to reference-standard quality.',
          'Provide structured labels, segmentations or scores as each task requires.',
          'Assess ASPECTS, infarct core, penumbra and vessel occlusion consistently.',
          'Identify incidental and confounding findings that affect interpretation.',
          'Maintain reading consistency over time and across readers.',
        ],
      },
      {
        title: 'Model validation & reader studies',
        items: [
          'Design and run reader studies comparing model output with expert interpretation.',
          'Quantify inter-reader and intra-reader agreement, and report it honestly.',
          'Review false positives and false negatives case by case.',
          'Characterise performance across scanners, protocols, sites and patient groups.',
          'Identify systematic bias introduced by acquisition or reconstruction.',
          'Contribute imaging methodology to publications and regulatory documentation.',
        ],
      },
      {
        title: 'Imaging data quality & curation',
        items: [
          'Review incoming imaging data for completeness, quality and protocol consistency.',
          'Advise on DICOM handling, series selection and de-identification requirements.',
          'Flag data that should not be used, and explain why.',
          'Define the metadata that must accompany every study.',
          'Work with the data team on curation, versioning and traceability of cohorts.',
        ],
      },
      {
        title: 'Imaging & technical knowledge',
        lead: 'You will bring practical command of:',
        items: [
          'Non-contrast CT, CT angiography and CT perfusion in acute stroke.',
          'MRI including DWI, ADC, FLAIR, SWI and MR angiography.',
          'ASPECTS, core/penumbra quantification and collateral assessment.',
          'Haemorrhage classification and stroke mimics.',
          'DICOM, PACS and radiology reporting workflows.',
          'Diagnostic-accuracy statistics and agreement measures such as kappa and Dice.',
          'A working understanding of how segmentation and classification models are trained.',
        ],
        note: 'You do not need to write code. You do need to be able to look at a model output and say precisely why it is wrong, in terms an engineer can act on.',
      },
      {
        title: 'Bridge between clinical & technical teams',
        items: [
          'Translate imaging requirements into specifications the engineering team can build to.',
          'Review model output routinely and give structured, reproducible feedback.',
          'Explain imaging constraints, variability and limits to engineers.',
          'Explain model behaviour to radiologists and referring clinicians.',
          'Advise on how findings should be displayed alongside the images.',
        ],
      },
      {
        title: 'Collaboration & representation',
        items: [
          'Support imaging-data partnerships with hospitals and imaging centres.',
          'Represent SHRI-AI in radiology and imaging-AI settings.',
          'Contribute to research collaborations and multi-centre studies.',
          'Help train partner-site readers on the agreed protocols.',
        ],
      },
    ],
    education: [
      'MD/DNB in radiology, with fellowship training or substantial subspecialty experience in neuroradiology.',
      'Experience reading acute stroke imaging in a working service.',
      'Interest or prior involvement in imaging research is an advantage.',
    ],
    requiredSkills: [
      'Expert interpretation of stroke and neurovascular imaging.',
      'Rigour and consistency in structured reading and annotation.',
      'Strong grasp of diagnostic-accuracy and agreement statistics.',
      'Ability to specify reading protocols clearly in writing.',
      'Ability to work closely with engineers and data scientists.',
      'Sound judgement on imaging data quality and its limits.',
      'Attention to detail sustained across large case volumes.',
      'Clear written and verbal communication.',
      'Willingness to learn how imaging models are built and evaluated.',
    ],
    preferredExp: [
      'Imaging AI development or validation.',
      'Reader studies or multi-centre imaging trials.',
      'Image annotation or segmentation at scale.',
      'Stroke imaging research.',
      'PACS, DICOM or radiology informatics.',
      'Quantitative imaging and perfusion post-processing.',
      'Regulatory submissions for imaging software.',
      'Teaching radiology trainees.',
      'Publication record in neuroradiology or imaging AI.',
    ],
    lookingFor: [
      {
        title: 'Imaging',
        text: 'Expert, consistent reading of acute stroke studies across CT and MRI, including the difficult and the technically imperfect.',
      },
      {
        title: 'Methodological',
        text: 'Care about reference standards, agreement and bias — the parts of imaging AI that decide whether a result means anything.',
      },
      {
        title: 'Collaborative',
        text: 'Willingness to sit with engineers over failure cases and turn radiological judgement into specifications.',
      },
    ],
    lookingForNote:
      'The ideal candidate can adjudicate a contested study in the morning, quantify reader agreement in the afternoon, and explain to an engineer in the evening why the model is right for the wrong reason.',
    success: [
      'Reading protocols and the reference standard are documented and followed.',
      'Reader agreement is measured, reported and defensible.',
      'Model performance is characterised across scanners, sites and patient groups.',
      'Poor-quality data is caught before it reaches training rather than after.',
      'Findings are displayed in a form radiologists find usable.',
      'The imaging evidence behind the platform withstands external review.',
    ],
    opportunity: [
      'This is an opportunity to build the imaging evidence base for a stroke platform from the beginning, and to set the standard by which its claims are judged.',
      'You will work directly with stroke neurologists, AI engineers and data scientists, and with imaging partners across India and the United States, on work that is published and externally reviewed rather than kept internal.',
    ],
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
    position: {
      ...COMMON,
      title: 'Clinical Imaging Data Specialist — Stroke Annotation & Curation',
      employment: 'Full-time',
    },
    pipeline:
      'Ingest studies → De-identify → Curate and annotate → Adjudicate and QC → Release a versioned, traceable dataset',
    intro: [
      'We are looking for a clinical imaging data specialist to own the datasets behind the SHRI-AI stroke platform: how studies arrive, how they are de-identified, how they are annotated, and how a released cohort can be traced back to the cases it came from.',
      'You will run annotation projects with clinical readers, keep quality measurable, and make sure every dataset used for training or validation is reproducible months later.',
      'This is the least visible and most load-bearing role on the platform. If the datasets are wrong, everything built on them is wrong — and no amount of modelling recovers it.',
    ],
    responsibilities: [
      {
        title: 'Imaging data ingestion & de-identification',
        items: [
          'Coordinate the transfer of imaging studies from partner hospitals and imaging centres.',
          'Verify DICOM completeness, series composition and protocol consistency on arrival.',
          'Run and verify de-identification, including burned-in text and private tags.',
          'Maintain the linkage between de-identified studies and their source records under agreed governance.',
          'Track provenance, consent basis and permitted use for every dataset.',
          'Escalate anything that does not meet the agreed data-sharing terms.',
        ],
      },
      {
        title: 'Annotation projects & protocols',
        items: [
          'Write annotation guidelines with the clinical leads, including worked examples and edge cases.',
          'Configure annotation tasks, tooling and label schemas.',
          'Recruit, onboard and train clinical readers on each protocol.',
          'Run calibration rounds before production annotation begins.',
          'Track throughput, backlog and reader workload.',
          'Manage adjudication of disagreements and record the resolution.',
        ],
      },
      {
        title: 'Quality control & agreement',
        items: [
          'Define and monitor quality metrics for every annotation task.',
          'Measure inter-reader and intra-reader agreement continuously, not just at the start.',
          'Audit samples of completed work against the protocol.',
          'Detect and correct label drift as projects run.',
          'Report quality honestly to the clinical and technical leads.',
        ],
      },
      {
        title: 'Dataset curation & versioning',
        items: [
          'Define training, validation and test splits, and keep them separated.',
          'Version every released dataset and record exactly what changed.',
          'Document cohort composition: sites, scanners, protocols and patient characteristics.',
          'Prevent leakage between splits at the patient rather than the study level.',
          'Maintain the metadata the technical team needs to slice performance by subgroup.',
          'Keep every released cohort reproducible from its source records.',
        ],
      },
      {
        title: 'Technical knowledge',
        lead: 'You will bring practical command of:',
        items: [
          'DICOM structure, tags, series organisation and de-identification.',
          'PACS and clinical imaging workflows.',
          'CT and MRI acquisition basics, and how protocol differences show up in data.',
          'Annotation tooling for classification, segmentation and measurement.',
          'Agreement and overlap metrics such as kappa and Dice.',
          'Scripting, ideally Python, for validation and reporting.',
          'Data governance, de-identification standards and audit requirements.',
        ],
        note: 'You do not need to train models. You do need to understand what a model will do with a badly built dataset, and to refuse to release one.',
      },
      {
        title: 'Bridge between clinical & technical teams',
        items: [
          'Turn clinical reading protocols into workable annotation tasks.',
          'Give the technical team clear documentation of every dataset they use.',
          'Raise data problems that explain model behaviour rather than letting them be debugged blindly.',
          'Support clinical readers so annotation fits around clinical work.',
          'Keep the clinical leads informed on quality and progress.',
        ],
      },
      {
        title: 'Partner sites & compliance',
        items: [
          'Support onboarding of new data-contributing sites.',
          'Maintain records required for ethics-committee and institutional review.',
          'Help prepare data-sharing documentation with partner institutions.',
          'Keep the audit trail complete for regulatory and research review.',
        ],
      },
    ],
    education: [
      'Degree in radiography, medical imaging technology, biomedical engineering, health informatics, life sciences or a related field.',
      'Clinical imaging experience, or demonstrable experience running imaging data projects.',
      'Additional training in health informatics or data management is an advantage.',
    ],
    requiredSkills: [
      'Working knowledge of DICOM and clinical imaging data.',
      'Exceptional attention to detail and documentation discipline.',
      'Ability to write clear protocols and follow them exactly.',
      'Comfort with agreement metrics and simple statistics.',
      'Basic scripting ability for validation and reporting.',
      'Strong organisation and project coordination across multiple readers.',
      'Sound judgement about data governance and privacy.',
      'Ability to work with both clinicians and engineers.',
      'Willingness to be the person who blocks a release.',
    ],
    preferredExp: [
      'Medical image annotation or segmentation projects.',
      'Radiography or imaging-department work.',
      'Clinical research data management.',
      'PACS administration or radiology informatics.',
      'De-identification of clinical data at scale.',
      'Working with AI or research teams.',
      'Multi-centre imaging studies.',
      'Python for data validation.',
      'Regulatory or audit documentation.',
    ],
    lookingFor: [
      {
        title: 'Clinical data',
        text: 'Real familiarity with how imaging studies are produced, stored and moved, and with what goes wrong in practice.',
      },
      {
        title: 'Methodological',
        text: 'Discipline about protocols, agreement, versioning and provenance — the things that make a result reproducible.',
      },
      {
        title: 'Operational',
        text: 'Ability to run annotation projects with clinical readers to a schedule, and keep quality measurable while doing it.',
      },
    ],
    lookingForNote:
      'The ideal candidate can debug a DICOM header in the morning, run a reader calibration session in the afternoon, and explain in the evening exactly which cases went into version three of the dataset.',
    success: [
      'Every released dataset is versioned, documented and reproducible.',
      'Annotation quality is measured continuously and stays within agreed bounds.',
      'No patient-level leakage exists between training, validation and test splits.',
      'De-identification and governance records survive external audit.',
      'The technical team can slice performance by site, scanner and subgroup.',
      'Data problems are found before training rather than blamed on the model.',
    ],
    opportunity: [
      'This is an opportunity to build the data foundation of a clinical AI platform properly from the start, instead of repairing it later.',
      'You will work directly with stroke neurologists, neuroradiologists, AI engineers and partner hospitals, and own the datasets that everything the platform claims will ultimately rest on.',
    ],
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
    position: {
      ...COMMON,
      title: 'Molecular Biologist — Genomics & Liquid Biopsy',
      employment: 'Full-time',
    },
    pipeline:
      'Design the assay → Optimise the wet lab → Validate analytically → Confirm clinically → Transfer to routine use',
    intro: [
      'We are looking for a molecular biologist to develop and validate the liquid-biopsy and genomics assays behind our precision-oncology work: circulating tumour DNA, cell-free DNA and exosome-based approaches to earlier detection.',
      'You will own the wet-lab side end to end — extraction, library preparation, sequencing and quality control — and work with the bioinformatics team so that what comes off the sequencer is analysable and what comes out of the pipeline is trustworthy.',
      'This is a development position rather than a routine testing one. We are looking for someone who wants to build assays that hold up under validation, and who is rigorous about the difference between a promising result and a reproducible one.',
    ],
    responsibilities: [
      {
        title: 'Assay development',
        items: [
          'Design and optimise cell-free DNA and circulating tumour DNA workflows.',
          'Develop extraction protocols for plasma, tissue and exosome fractions.',
          'Optimise NGS library preparation, including low-input and UMI-based approaches.',
          'Select and evaluate panel content with the clinical and computational teams.',
          'Troubleshoot yield, contamination, duplication and coverage problems.',
          'Document every protocol to a standard another laboratory can follow.',
        ],
      },
      {
        title: 'Sequencing & laboratory operations',
        items: [
          'Run and maintain sequencing workflows and the associated instrumentation.',
          'Define and monitor quality-control metrics at each step of the process.',
          'Manage reagents, consumables, vendors and inventory.',
          'Maintain equipment calibration, servicing and records.',
          'Keep the laboratory compliant with safety and biosafety requirements.',
        ],
      },
      {
        title: 'Analytical & clinical validation',
        items: [
          'Design validation studies covering sensitivity, specificity, precision and reproducibility.',
          'Establish limits of detection and quantitation with appropriate reference materials.',
          'Assess pre-analytical variables, including tube type, transport and storage.',
          'Run repeatability and inter-operator studies.',
          'Confirm assay performance against clinical samples with known status.',
          'Prepare validation reports for internal, regulatory and publication use.',
        ],
      },
      {
        title: 'Biomarker & translational work',
        items: [
          'Evaluate candidate biomarkers for earlier detection and monitoring.',
          'Support studies correlating molecular findings with clinical outcome.',
          'Work with partner hospitals and laboratories on sample collection protocols.',
          'Contribute to study design alongside the clinical research team.',
          'Contribute to publications, abstracts and conference presentations.',
        ],
      },
      {
        title: 'Technical knowledge',
        lead: 'You will bring practical command of:',
        items: [
          'Nucleic acid extraction and quantification, including low-input material.',
          'NGS library preparation, target enrichment and amplicon approaches.',
          'Illumina or comparable sequencing chemistry and instrument operation.',
          'ctDNA and cell-free DNA biology, fragmentation and background noise.',
          'ddPCR or qPCR for orthogonal confirmation.',
          'Variant classes in solid tumours: SNVs, indels, CNVs and fusions.',
          'Analytical validation frameworks and laboratory quality systems.',
        ],
        note: 'You do not need to build pipelines. You do need to understand what the pipeline can and cannot recover from a library, and to design the wet lab accordingly.',
      },
      {
        title: 'Bridge between laboratory & computational teams',
        items: [
          'Define the data and metadata the bioinformatics team needs from every run.',
          'Investigate whether an anomalous result is wet-lab or analytical in origin.',
          'Feed sequencing quality metrics back into assay design.',
          'Translate computational constraints into laboratory requirements.',
          'Review pipeline output against expected assay behaviour.',
        ],
      },
      {
        title: 'Open science & collaboration',
        items: [
          'Publish protocols and validation data so other laboratories can reproduce them.',
          'Support open-source and open-protocol work alongside the wider team.',
          'Train and mentor junior laboratory staff and students.',
          'Represent the laboratory in scientific collaborations and at conferences.',
        ],
      },
    ],
    education: [
      'MSc or PhD in molecular biology, biotechnology, genetics, biochemistry or a related field.',
      'Hands-on laboratory experience with NGS workflows.',
      'Experience with liquid biopsy or low-input samples is a strong advantage.',
    ],
    requiredSkills: [
      'Strong practical NGS library preparation skills.',
      'Experience with nucleic acid extraction and quality assessment.',
      'Rigorous experimental design and record keeping.',
      'Ability to troubleshoot assays systematically rather than by trial and error.',
      'Understanding of analytical validation requirements.',
      'Basic data handling and statistics.',
      'Clear scientific writing.',
      'Ability to work closely with clinicians and computational scientists.',
      'Careful, methodical approach to contamination control.',
    ],
    preferredExp: [
      'ctDNA or cell-free DNA assay development.',
      'Exosome or extracellular vesicle work.',
      'Target enrichment panel design.',
      'ddPCR or digital PCR.',
      'Single-cell or spatial methods.',
      'Accredited or regulated laboratory environments.',
      'Method transfer between laboratories.',
      'Biobanking and sample-handling protocols.',
      'Publication record in molecular oncology.',
    ],
    lookingFor: [
      {
        title: 'Laboratory',
        text: 'Genuine hands-on command of NGS and low-input workflows, including what fails and why.',
      },
      {
        title: 'Scientific',
        text: 'Rigour about validation: limits of detection, reproducibility, and pre-analytical variables that quietly ruin results.',
      },
      {
        title: 'Collaborative',
        text: 'Ability to work with computational and clinical colleagues, and to publish protocols others can reproduce.',
      },
    ],
    lookingForNote:
      'The ideal candidate can optimise a library preparation in the morning, design a limit-of-detection study in the afternoon, and work out with a bioinformatician in the evening whether a variant is real.',
    success: [
      'Assays are validated to a documented, defensible standard.',
      'Limits of detection are established and hold up on clinical samples.',
      'Run-to-run quality is stable and monitored.',
      'Wet-lab and analytical causes of anomalies can be told apart quickly.',
      'Protocols are published clearly enough for others to reproduce.',
      'The laboratory can support both research studies and partner collaborations.',
    ],
    opportunity: [
      'This is an opportunity to build a liquid-biopsy capability from assay design through validation, in an organisation whose output is intended to be open rather than proprietary.',
      'You will work directly with oncopathologists, bioinformaticians, clinical researchers and partner laboratories, on work aimed at making earlier detection affordable well beyond large medical centres.',
    ],
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
    position: {
      ...COMMON,
      title: 'Oncopathologist — Molecular Pathology',
      employment: 'Full-time / consulting',
    },
    pipeline:
      'Define the diagnosis → Establish ground truth → Correlate molecular findings → Validate the model → Report interpretably',
    intro: [
      'We are looking for an oncopathologist to provide the diagnostic reference standard behind our precision-oncology work, and to correlate histopathological findings with the molecular results coming out of the laboratory.',
      'You will define what counts as ground truth for each diagnostic task, review cases where model output and pathology disagree, and make sure molecular findings are interpreted in the context of the tissue they came from.',
      'This is a position for a pathologist who wants a hand in how diagnostic AI is validated, and who is prepared to be the reason a claim gets withdrawn as well as the reason it gets made.',
    ],
    responsibilities: [
      {
        title: 'Diagnostic reference standard',
        items: [
          'Define the diagnostic reference standard for each task the models address.',
          'Specify case selection, inclusion criteria and exclusions for study cohorts.',
          'Review and sign out cases used as ground truth.',
          'Adjudicate discordant cases and document the reasoning.',
          'Set rules for handling limited, degraded or ambiguous material.',
          'Review labelling protocols before any large annotation effort begins.',
        ],
      },
      {
        title: 'Histopathology & molecular correlation',
        items: [
          'Correlate histological findings with sequencing and liquid-biopsy results.',
          'Interpret immunohistochemistry alongside molecular data.',
          'Assess tumour content, heterogeneity and sampling adequacy for molecular testing.',
          'Advise on which tissue and which block should go for which assay.',
          'Investigate discordance between tissue and plasma findings.',
        ],
      },
      {
        title: 'Model validation & interpretation',
        items: [
          'Define clinical acceptance criteria for diagnostic model output.',
          'Review false positives and false negatives case by case.',
          'Assess whether model behaviour is clinically plausible, not merely accurate.',
          'Characterise performance across tumour types, grades and preparation quality.',
          'Advise on how model output should be reported so it is interpretable.',
          'Contribute pathology methodology to publications and regulatory documentation.',
        ],
      },
      {
        title: 'Reporting & clinical integration',
        items: [
          'Advise on integrated reporting of morphological and molecular findings.',
          'Define how uncertainty and limitations must appear in any report.',
          'Support molecular tumour board discussions with partner institutions.',
          'Advise on variant interpretation and clinical actionability alongside the computational team.',
          'Help align reporting with the practice of partner laboratories.',
        ],
      },
      {
        title: 'Clinical & scientific knowledge',
        lead: 'You will bring practical command of:',
        items: [
          'Surgical pathology and cytopathology of solid tumours.',
          'Immunohistochemistry panels and their diagnostic limits.',
          'Molecular pathology: SNVs, indels, copy number, fusions and methylation.',
          'Tumour staging, grading and classification systems.',
          'Variant classification and clinical actionability frameworks.',
          'Pre-analytical effects of fixation, storage and tumour content.',
          'Diagnostic-accuracy statistics and reader agreement measures.',
        ],
        note: 'You do not need to write code. You do need to be able to say why a model result is diagnostically implausible, and what would have to be true for it to be believed.',
      },
      {
        title: 'Bridge between clinical & technical teams',
        items: [
          'Translate diagnostic requirements into specifications the technical team can build to.',
          'Review model output routinely and give structured feedback.',
          'Explain pathological variability and its limits to engineers.',
          'Explain model behaviour to pathologists and treating clinicians.',
          'Help prioritise development by diagnostic impact.',
        ],
      },
      {
        title: 'Collaboration & representation',
        items: [
          'Support pathology and data partnerships with hospitals and laboratories.',
          'Represent SHRI-AI in pathology and molecular oncology settings.',
          'Contribute to research collaborations and multi-centre studies.',
          'Train and mentor trainees and junior staff involved in case review.',
        ],
      },
    ],
    education: [
      'MD/DNB in pathology, with subspecialty training or substantial experience in oncopathology.',
      'Training or demonstrable experience in molecular pathology.',
      'Current or recent diagnostic practice is an advantage.',
    ],
    requiredSkills: [
      'Expert diagnostic pathology in solid tumours.',
      'Working command of molecular pathology and variant interpretation.',
      'Consistency and rigour in structured case review.',
      'Ability to specify diagnostic criteria clearly in writing.',
      'Understanding of diagnostic-accuracy concepts and study design.',
      'Ability to work closely with laboratory and computational teams.',
      'Sound judgement on the limits of automated diagnostic output.',
      'Clear written and verbal communication.',
      'Willingness to learn how diagnostic models are built and evaluated.',
    ],
    preferredExp: [
      'Digital pathology or whole-slide imaging.',
      'Diagnostic AI validation.',
      'Molecular tumour boards.',
      'NGS-based diagnostic reporting.',
      'Biobanking and research case selection.',
      'Multi-centre pathology studies.',
      'Accredited laboratory quality systems.',
      'Teaching pathology trainees.',
      'Publication record in oncopathology or molecular pathology.',
    ],
    lookingFor: [
      {
        title: 'Diagnostic',
        text: 'Expert, consistent pathology across solid tumours, including limited and imperfect material.',
      },
      {
        title: 'Molecular',
        text: 'Real fluency in correlating tissue findings with sequencing and liquid-biopsy results.',
      },
      {
        title: 'Collaborative',
        text: 'Willingness to work through failure cases with engineers and turn diagnostic judgement into specifications.',
      },
    ],
    lookingForNote:
      'The ideal candidate can sign out a difficult case in the morning, reconcile it with a plasma result in the afternoon, and explain to an engineer in the evening why the model is confidently wrong.',
    success: [
      'Diagnostic reference standards are documented and applied consistently.',
      'Tissue and molecular findings are correlated rather than reported in parallel.',
      'Model performance is characterised across tumour types and preparation quality.',
      'Reporting conveys uncertainty and limitation honestly.',
      'Pathologists at partner institutions find the output interpretable.',
      'The diagnostic evidence behind the work withstands external review.',
    ],
    opportunity: [
      'This is an opportunity to shape how diagnostic AI is validated in oncology, at the stage where the diagnostic questions are still being defined.',
      'You will work directly with molecular biologists, bioinformaticians, clinical researchers and partner laboratories, on open work intended to make precision diagnosis reachable well beyond major centres.',
    ],
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
    position: {
      ...COMMON,
      title: 'Bioinformatics Scientist',
      employment: 'Full-time',
    },
    pipeline:
      'Design the pipeline → Benchmark against truth sets → Tune for low-frequency signal → Validate → Release reproducibly',
    intro: [
      'We are looking for a bioinformatics scientist to build and validate the analysis pipelines behind our precision-oncology work: variant calling from tissue and plasma, ctDNA detection at low allele fraction, and interpretation across multiple data types.',
      'You will work between the laboratory and the clinical teams, turning sequencing output into results that can be defended — with benchmarks, error models and versioning rather than a single set of parameters that happened to work.',
      'This is a development and validation position. We are looking for someone who treats a pipeline as a scientific instrument that has to be characterised, not as a script that produces a file.',
    ],
    responsibilities: [
      {
        title: 'Pipeline development',
        items: [
          'Build and maintain pipelines for alignment, variant calling and quality control.',
          'Develop ctDNA analysis workflows capable of detecting low-frequency variants.',
          'Implement UMI-aware deduplication and error suppression.',
          'Call and interpret copy-number changes, structural variants and fusions.',
          'Containerise and version every workflow so results are reproducible.',
          'Automate quality-control reporting for each sequencing run.',
        ],
      },
      {
        title: 'Benchmarking & error modelling',
        items: [
          'Benchmark pipelines against reference materials and established truth sets.',
          'Characterise sensitivity and specificity as a function of allele fraction and depth.',
          'Build background error models for the panels and assays in use.',
          'Quantify the effect of input amount, coverage and library complexity.',
          'Compare tools honestly and document why each choice was made.',
          'Re-benchmark whenever the assay or reference data changes.',
        ],
      },
      {
        title: 'Interpretation & multi-omics',
        items: [
          'Annotate variants against population, clinical and cancer databases.',
          'Support variant classification and actionability assessment with the clinical team.',
          'Integrate genomic data with expression, methylation or imaging-derived features where studies require it.',
          'Build analyses for biomarker discovery and monitoring over time.',
          'Produce interpretable outputs for pathologists and clinicians rather than raw tables.',
        ],
      },
      {
        title: 'Data engineering & infrastructure',
        items: [
          'Manage sequencing data storage, organisation and lifecycle.',
          'Run workloads efficiently on local or cloud compute.',
          'Maintain sample and run metadata so any result can be traced to its inputs.',
          'Keep dependencies, references and annotation sources pinned and documented.',
          'Monitor cost, runtime and failure rates.',
        ],
      },
      {
        title: 'Technical knowledge',
        lead: 'You will bring practical command of:',
        items: [
          'Python and R, and comfort on the command line.',
          'A workflow manager such as Nextflow or Snakemake.',
          'Alignment and variant-calling tooling, and their failure modes.',
          'ctDNA and cell-free DNA analysis at low allele fraction.',
          'Statistical concepts underlying detection limits and multiple testing.',
          'Containers, version control and reproducible environments.',
          'Variant annotation resources and clinical interpretation frameworks.',
        ],
        note: 'You do not need to run the wet lab. You do need to understand how library preparation shapes the data, and to say when an assay change invalidates a benchmark.',
      },
      {
        title: 'Bridge between laboratory & clinical teams',
        items: [
          'Define the metadata and quality metrics the pipeline requires from every run.',
          'Work out whether an anomaly is wet-lab or analytical in origin.',
          'Explain analytical limits clearly to laboratory and clinical colleagues.',
          'Translate clinical interpretation needs into pipeline output.',
          'Support validation studies with the analyses they need.',
        ],
      },
      {
        title: 'Open science & collaboration',
        items: [
          'Release pipelines and analysis code as open source with usable documentation.',
          'Contribute to publications, preprints and methods papers.',
          'Support external groups reproducing our analyses.',
          'Mentor students and junior computational staff.',
        ],
      },
    ],
    education: [
      'MSc or PhD in bioinformatics, computational biology, genomics, computer science or a related field.',
      'Demonstrable experience analysing NGS data end to end.',
      'Experience with low-frequency variant detection is a strong advantage.',
    ],
    requiredSkills: [
      'Strong Python and solid R.',
      'Practical experience with alignment and variant-calling workflows.',
      'Workflow management and containerisation.',
      'Sound statistics, particularly around detection limits.',
      'Rigorous benchmarking and documentation habits.',
      'Version control and reproducible analysis practice.',
      'Ability to explain analytical limits to non-computational colleagues.',
      'Clear scientific writing.',
      'Careful, sceptical approach to surprising results.',
    ],
    preferredExp: [
      'ctDNA or liquid-biopsy analysis.',
      'UMI-based error suppression.',
      'Panel design and evaluation.',
      'Copy-number or structural-variant calling.',
      'Multi-omics integration.',
      'Cloud compute for genomics.',
      'Clinical reporting pipelines.',
      'Open-source project maintenance.',
      'Publication record in computational genomics.',
    ],
    lookingFor: [
      {
        title: 'Computational',
        text: 'Real engineering ability: pipelines that are reproducible, versioned and understood rather than merely working.',
      },
      {
        title: 'Scientific',
        text: 'Rigour about benchmarks, error models and detection limits, especially at low allele fraction.',
      },
      {
        title: 'Collaborative',
        text: 'Ability to work with wet-lab and clinical colleagues, and to publish code others can actually run.',
      },
    ],
    lookingForNote:
      'The ideal candidate can debug an alignment problem in the morning, characterise a detection limit in the afternoon, and explain to a pathologist in the evening how confident the call really is.',
    success: [
      'Pipelines are versioned, containerised and reproducible from raw data.',
      'Sensitivity and specificity are characterised across allele fraction and depth.',
      'Analytical and wet-lab causes of anomalies can be separated quickly.',
      'Output is interpretable to clinical colleagues without translation.',
      'Released code can be run by external groups.',
      'Benchmarks are maintained as assays and references evolve.',
    ],
    opportunity: [
      'This is an opportunity to build clinical-grade genomics analysis in the open, where the pipelines and benchmarks are published rather than kept behind a product.',
      'You will work directly with molecular biologists, oncopathologists, clinical researchers and the AI team, on analysis intended to make precision oncology affordable in far more places than it currently reaches.',
    ],
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
    position: {
      ...COMMON,
      title: 'Clinical Research Associate',
      employment: 'Full-time',
    },
    pipeline:
      'Write the protocol → Obtain approvals → Open the sites → Collect clean data → Report the result honestly',
    intro: [
      'We are looking for a clinical research associate to run the validation studies behind both SHRI-AI platforms: the stroke imaging work and the precision-oncology work, across partner hospitals and laboratories in India and the United States.',
      'You will take studies from protocol and ethics submission through site activation, data collection, monitoring and reporting — and keep the documentation in a state that survives audit rather than being reconstructed afterwards.',
      'This is a hands-on coordination position with real scientific responsibility. The credibility of everything the organisation claims rests on how these studies are run.',
    ],
    responsibilities: [
      {
        title: 'Protocol & study design',
        items: [
          'Draft protocols, case report forms and informed consent documents with the clinical leads.',
          'Define endpoints, cohort criteria and sample-size expectations with the statistical team.',
          'Define the data to be collected, and collect nothing that is not needed.',
          'Write standard operating procedures for each study activity.',
          'Maintain protocol version control and manage amendments.',
        ],
      },
      {
        title: 'Regulatory & ethics submissions',
        items: [
          'Prepare and submit ethics-committee and institutional-review applications.',
          'Maintain approvals, renewals and amendment records across all sites.',
          'Keep trial-master-file documentation complete and current.',
          'Track and report adverse events and deviations as required.',
          'Ensure studies comply with applicable regulations and data-protection requirements.',
        ],
      },
      {
        title: 'Site activation & management',
        items: [
          'Assess and qualify prospective partner sites.',
          'Coordinate site initiation, training and activation.',
          'Act as day-to-day contact for investigators and site coordinators.',
          'Coordinate sample and imaging transfer with the laboratory and data teams.',
          'Track recruitment, and address the reasons a site is behind.',
          'Run monitoring visits and follow up on findings.',
        ],
      },
      {
        title: 'Data quality & monitoring',
        items: [
          'Perform source-data verification against the agreed plan.',
          'Raise, track and resolve data queries.',
          'Monitor protocol compliance and document deviations.',
          'Reconcile clinical data with laboratory and imaging records.',
          'Prepare datasets for analysis and lock them appropriately.',
        ],
      },
      {
        title: 'Technical knowledge',
        lead: 'You will bring practical command of:',
        items: [
          'Good Clinical Practice and the applicable regulatory framework.',
          'Protocol and case-report-form design.',
          'Ethics-committee and institutional-review processes.',
          'Electronic data capture systems.',
          'Informed consent requirements and documentation.',
          'Basic biostatistics: endpoints, sample size and diagnostic-accuracy measures.',
          'A working understanding of imaging and molecular study workflows.',
        ],
        note: 'You do not need to build models or run assays. You do need to understand what each study is testing well enough to notice when the data being collected will not answer it.',
      },
      {
        title: 'Bridge between sites & internal teams',
        items: [
          'Translate protocol requirements into practical site procedures.',
          'Keep clinical, laboratory and technical teams aligned on study status.',
          'Escalate operational problems early rather than at the analysis stage.',
          'Collect structured investigator feedback on feasibility.',
          'Support the clinical leads in interpreting and reporting findings.',
        ],
      },
      {
        title: 'Reporting & collaboration',
        items: [
          'Prepare study reports, progress updates and partner-facing summaries.',
          'Contribute to publications, abstracts and conference submissions.',
          'Maintain records supporting regulatory and external review.',
          'Help build repeatable study procedures for additional sites.',
        ],
      },
    ],
    education: [
      'Degree in life sciences, nursing, pharmacy, medicine or a related field.',
      'Formal training or certification in clinical research is an advantage.',
      'Prior experience coordinating clinical studies.',
    ],
    requiredSkills: [
      'Working knowledge of Good Clinical Practice and regulatory requirements.',
      'Meticulous documentation and record keeping.',
      'Strong coordination across multiple sites and stakeholders.',
      'Clear written and verbal communication with clinical staff.',
      'Comfort with electronic data capture and study databases.',
      'Basic statistical literacy.',
      'Ability to work independently and travel to sites as required.',
      'Sound judgement about consent, privacy and data protection.',
      'Willingness to escalate problems rather than absorb them.',
    ],
    preferredExp: [
      'Diagnostic or device studies.',
      'Imaging-based clinical research.',
      'Oncology or neurology studies.',
      'Multi-centre study coordination.',
      'Ethics-committee submissions in India.',
      'Studies involving U.S. sites or sponsors.',
      'Biobanking and sample logistics.',
      'Monitoring or auditing experience.',
      'Registry or quality-improvement programmes.',
    ],
    lookingFor: [
      {
        title: 'Operational',
        text: 'Ability to open sites, keep them recruiting, and hold documentation to a standard that survives audit.',
      },
      {
        title: 'Scientific',
        text: 'Enough understanding of what each study tests to notice when the data will not answer the question.',
      },
      {
        title: 'Collaborative',
        text: 'Credibility with investigators and site staff, and clear communication back to internal teams.',
      },
    ],
    lookingForNote:
      'The ideal candidate can run a monitoring visit in the morning, resolve an ethics-committee query in the afternoon, and tell the clinical lead in the evening that recruitment at one site is not going to work.',
    success: [
      'Studies open on schedule with approvals and documentation in place.',
      'Recruitment is tracked, and shortfalls are surfaced early.',
      'Data is clean, queried and reconciled before analysis.',
      'Deviations and adverse events are documented and reported correctly.',
      'Study records withstand audit without reconstruction.',
      'Findings are reported honestly, including the negative ones.',
    ],
    opportunity: [
      'This is an opportunity to run the validation work behind two clinical AI platforms, at the point where the evidence base is being built rather than defended.',
      'You will work directly with stroke neurologists, neuroradiologists, oncopathologists, laboratory and computational teams, and with partner hospitals across India and the United States.',
    ],
  },
];

/** Look up one role by its URL slug. Returns undefined for an unknown slug. */
export function getRoleBySlug(slug) {
  if (!slug) return undefined;
  return ROLES.find((role) => role.slug === slug);
}
