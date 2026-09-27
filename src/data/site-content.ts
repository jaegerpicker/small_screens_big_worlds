/*
 * Positioning copy for the site.
 *
 * Facts that do not change with positioning, such as experience history,
 * earlier work, writing, and links, stay in their pages.
 */

export const meta = {
  description:
    'Application security, AI security research, secure mobile systems, and product engineering by Shawn Campbell.',
  rssDescription:
    'AI security, application security, secure product engineering, and field notes.',
};

export const home = {
  title: 'Security for Small Screens / Big Worlds — Shawn Campbell',
  description:
    'Application security, AI security research, secure mobile systems, and product engineering by Shawn Campbell.',
  kickerOps: 'Security status / active and operational',
  kickerDirect: 'Application Security and Product Engineering',
  headlinePrefix: 'Security for',
  missionCopy:
    "I build and break software systems with a security engineer's bias for evidence. The current focus is AI security, application security, and secure product work across mobile, frontend, and connected systems.",
  primaryActionOps: 'Open the security board',
  primaryActionDirect: 'View security work',
  secondaryActionOps: 'Read field notes',
  secondaryActionDirect: 'Read security writing',
  workHeadingOps: 'Systems worth testing under pressure',
  workHeadingDirect: 'Security research and secure product work',
  workIntro:
    'Practical work across AI security, application security, mobile systems, and product engineering.',
  courseId: 'security-lab',
  courseHeading: 'Making AI security executable',
  courseBody:
    'I am building vulnerable-agent labs, attack harnesses, and practical writeups around the OWASP LLM Top 10. The goal is to turn vague AI risk into runnable examples, observable failures, and defensible mitigations.',
  rigorKickerDirect: 'Security Discipline',
  rigorHeading: 'Security is the product quality baseline.',
  rigorBody:
    'Threat modeling, permissions, storage, trust boundaries, and failure modes are treated as normal engineering constraints, not after-the-fact review rituals.',
  latestHeading: 'Security notes from the field',
};

export const systems = [
  {
    id: 'mobile',
    opsLabel: 'Secure Mobile',
    directLabel: 'Mobile Application Security',
    detail: 'Swift, Kotlin, connected devices, storage, permissions, and field trust boundaries.',
    status: 'Flight proven',
    href: '#selected-work',
  },
  {
    id: 'product',
    opsLabel: 'Product Attack Surface',
    directLabel: 'Product and Frontend Security',
    detail: 'React, React Native, GraphQL, APIs, auth flows, and reviewable delivery systems.',
    status: 'Flight proven',
    href: '#selected-work',
  },
  {
    id: 'lab',
    opsLabel: 'AI Security Lab',
    directLabel: 'AI Security Research',
    detail: 'Executable OWASP LLM labs, prompt injection, agent tooling, and defense experiments.',
    status: 'Active focus',
    href: '#security-lab',
  },
  {
    id: 'rigor',
    opsLabel: 'Systems Rigor',
    directLabel: 'Security and Architecture',
    detail: 'Threat-aware engineering, distributed systems, and technical leadership.',
    status: 'Embedded discipline',
    href: '#systems-rigor',
  },
];

export const missions = [
  {
    label: '01 / AI Security',
    directLabel: 'AI Security Research',
    title: 'Executable security research for agentic systems',
    summary:
      'OWASP LLM Top 10 labs, vulnerable agents, attack harnesses, and writeups that make AI risks observable instead of abstract.',
    status: 'Active focus',
    href: '/blog',
    tone: 'cyan',
  },
  {
    label: '02 / AppSec',
    directLabel: 'Application Security',
    title: 'Security reviews that stay close to delivery',
    summary:
      'Threat modeling, secure code review, trust boundaries, CI/CD hardening, and practical fixes across product teams.',
    status: 'Flight proven',
    href: '/resume',
    tone: 'amber',
  },
  {
    label: '03 / Secure Product',
    directLabel: 'Secure Product Engineering',
    title: 'Mobile and product systems with security built in',
    summary:
      'Native mobile, React, React Native, GraphQL, and connected-device work grounded in permissions, data flow, and failure modes.',
    status: 'Flight proven',
    href: '/projects',
    tone: 'green',
  },
];

export const projects = {
  title: 'Security Projects — Small Screens / Big Worlds',
  description:
    'AI security research, application security, secure product systems, and mobile security work by Shawn Campbell.',
  kickerOps: 'Shipyard / Security Manifest',
  kickerDirect: 'Security Projects and Capabilities',
  headingOps: 'Security work in progress',
  headingDirect: 'AI security and AppSec work',
  intro:
    'Security sits at the center of this index: runnable AI security research, application security practice, and product engineering with threat models attached.',
  areas: [
    {
      code: '01',
      opsLabel: 'AI Security Lab',
      directLabel: 'AI Security Research',
      status: 'Active focus',
      summary:
        'Executable OWASP LLM Top 10 labs, vulnerable agents, prompt-injection cases, attacker harnesses, and defense experiments for agentic systems.',
      evidence: ['OWASP LLM Top 10', 'Prompt injection', 'Agent tooling', 'Security writeups'],
    },
    {
      code: '02',
      opsLabel: 'Application Security',
      directLabel: 'Application Security',
      status: 'Flight proven',
      summary:
        'Threat modeling, secure code review, trust-boundary analysis, and remediation planning across mobile, frontend, backend, and cloud-connected products.',
      evidence: ['Threat modeling', 'Secure code review', 'Trust boundaries', 'Remediation'],
    },
    {
      code: '03',
      opsLabel: 'Secure Product Systems',
      directLabel: 'Frontend and Product Systems',
      status: 'Flight proven',
      summary:
        'React, React Native, TypeScript, GraphQL, APIs, and delivery systems designed with auth flows, data exposure, resilience, and maintainability in view.',
      evidence: ['React and React Native', 'GraphQL', 'Auth flows', 'Distributed systems'],
    },
    {
      code: '04',
      opsLabel: 'Secure Mobile',
      directLabel: 'Native Mobile',
      status: 'Flight proven',
      summary:
        'iOS and Android systems built with Swift, Kotlin, Objective-C, Java, and C++, with attention to storage, permissions, offline workflows, sensors, and connected-device trust boundaries.',
      evidence: ['Native Mobile', 'Permissions', 'Offline behavior', 'Connected products'],
    },
  ],
  caseStudyNote:
    'Future entries will include role, constraints, decisions, implementation, security assumptions, outcome, screenshots or runnable evidence, and lessons learned. No invented metrics and no inflated claims. Game Lab work stays available as a secondary learning thread.',
};

export const about = {
  lead:
    "I'm Shawn Campbell, an application security engineer, mobile and product engineer, frontend architect, and technical leader with 26 years of experience building software and engineering teams.",
  paragraphs: [
    'Security is the current center of gravity: AI security research, OWASP LLM Top 10 labs, application security reviews, threat modeling, and secure product engineering across native mobile, React and React Native, connected products, and frontend systems.',
    'AI-assisted development is part of that process. I use coding agents and generative tools to accelerate research, prototypes, testing, and lab construction, while keeping engineering judgment human. Game development in Godot and Unreal remains a public learning thread, but the main line is security: permissions, storage, trust boundaries, threat modeling, and resilient architecture.',
  ],
  direction:
    'Build runnable AI security labs, publish practical security field notes, and keep product engineering experience close enough to make the recommendations usable.',
};

export const resume = {
  description:
    'Mission dossier for Shawn Campbell: AI security research, red-team practice, security event response, and engineering leadership.',
  roleLine:
    'AI security researcher, red-team practitioner, and hands-on engineering leader.',
  summary:
    'Twenty-six years building software and engineering teams, five of them in penetration testing and red-team practice. Shawn Campbell works where agents, applications, devices, and the teams shipping them meet: AI threat research, application security, red-team operations, and response when something goes wrong. Two decades of product and platform engineering sit underneath that as working knowledge rather than the headline.',
  badges: ['AI Security', 'Red Team', 'Security Event Response', 'Engineering Leadership', 'Applied AI Research'],
  telemetry: [
    { term: 'Operating Mode', value: 'Principal IC / technical lead / security partner' },
    { term: 'Primary Focus', value: 'AI security research, red teaming, security event response, engineering leadership' },
    { term: 'Signal', value: '26 years building systems and teams, 5 years red teaming' },
  ],
  capabilitiesHeading: 'Security-First Engineering Surface',
  capabilities: [
    {
      label: 'AI Security Research',
      details:
        'A runnable OWASP LLM Top 10 lab: ten vulnerable agents, one per category, with an attacker payload library, an evaluation harness, a spotlighting defense toggle, and a writeup for each. Indirect prompt injection through RAG is carried furthest, from attack path to measured defense.',
    },
    {
      label: 'Red-Team Methodology',
      details:
        'Internal red-team operations, application-layer penetration testing, vulnerability research, proof-of-concept exploit development, and secure code review that turns findings into engineering priorities.',
    },
    {
      label: 'Security Architecture',
      details:
        'Threat modeling, application security assessments, secure API and GraphQL design, trust-boundary analysis, and cloud-native guardrails.',
    },
    {
      label: 'Security Event Response',
      details:
        'Triage and response for security events, including supply-chain compromise in AI developer tooling, with postmortems turned into durable engineering controls.',
    },
    {
      label: 'Agentic and AI-Assisted Development',
      details:
        'Building with coding agents and generative tooling, and the review practice that keeps engineering judgment human: tool-use boundaries, provenance, and failure modes treated as design inputs.',
    },
    {
      label: 'Engineering Leadership',
      details:
        'Principal-level technical direction, team formation, security standards, mentoring, and cross-functional execution across security, product, and platform teams.',
    },
    {
      label: 'Platform and Systems Depth',
      details:
        'Distributed IoT, smart-access, cloud, and data-pipeline systems across AWS and GCP, built in Swift, Kotlin, C++, TypeScript, Go, Python, Java, and GraphQL.',
    },
  ],
};

export const blog = {
  description: 'AI security, application security, secure mobile, and AI-assisted development field notes.',
  intro:
    'AI security and application security lead the archive. Secure mobile and product engineering, AI-assisted development, and game-development field logs round it out.',
};
