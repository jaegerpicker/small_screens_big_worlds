/*
 * Positioning copy for the site.
 *
 * Facts that do not change with positioning, such as experience history,
 * earlier work, writing, and links, stay in their pages.
 */

export const meta = {
  description:
    'AI security research, red teaming, security event response, and engineering leadership by Shawn Campbell.',
  rssDescription:
    'AI security research, red teaming, agentic development, and security field notes.',
};

export const home = {
  title: 'Security for Small Screens / Big Worlds — Shawn Campbell',
  description:
    'AI security research, red teaming, security event response, and engineering leadership by Shawn Campbell.',
  kickerOps: 'Security status / active and operational',
  kickerDirect: 'AI Security and Engineering Leadership',
  headlinePrefix: 'Security for',
  missionCopy:
    "I build and break software systems with a security engineer's bias for evidence. The current focus is AI security research, red teaming, and response when systems fail, with the engineering leadership to turn findings into practice.",
  primaryActionOps: 'Open the security board',
  primaryActionDirect: 'View security work',
  secondaryActionOps: 'Read field notes',
  secondaryActionDirect: 'Read security writing',
  workHeadingOps: 'Systems worth testing under pressure',
  workHeadingDirect: 'AI security research and red-team work',
  workIntro:
    'Runnable AI security research, red-team practice, security event response, and the engineering leadership that turns findings into shipped controls.',
  courseId: 'security-lab',
  courseHeading: 'Making AI security executable',
  courseBody:
    'I am building vulnerable-agent labs, attack harnesses, and practical writeups around the OWASP LLM Top 10. The goal is to turn vague AI risk into runnable examples, observable failures, and defensible mitigations.',
  rigorKickerDirect: 'Security Discipline',
  rigorHeading: 'Security is the engineering baseline.',
  rigorBody:
    'Threat modeling, permissions, storage, trust boundaries, and failure modes are treated as normal engineering constraints, not after-the-fact review rituals.',
  latestHeading: 'Security notes from the field',
};

export const systems = [
  {
    id: 'lab',
    opsLabel: 'AI Security Lab',
    directLabel: 'AI Security Research',
    detail: 'Runnable OWASP LLM Top 10 labs, vulnerable agents, prompt injection, and defense experiments.',
    status: 'Active focus',
    href: '#security-lab',
  },
  {
    id: 'redteam',
    opsLabel: 'Red Team',
    directLabel: 'Offensive Security',
    detail: 'Application-layer penetration testing, vulnerability research, and proof-of-concept exploits.',
    status: 'Flight proven',
    href: '#selected-work',
  },
  {
    id: 'response',
    opsLabel: 'Event Response',
    directLabel: 'Security Event Response',
    detail: 'Triage, containment, and postmortems that turn incidents into durable engineering controls.',
    status: 'Operational',
    href: '#selected-work',
  },
  {
    id: 'rigor',
    opsLabel: 'Systems Rigor',
    directLabel: 'Engineering Leadership',
    detail: 'Technical direction, team formation, security standards, and delivery discipline.',
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
    label: '02 / Red Team',
    directLabel: 'Red Team and Response',
    title: 'Attacker-informed testing that changes engineering priorities',
    summary:
      'Application-layer penetration testing, vulnerability research, proof-of-concept exploits, and the response and postmortem work that follows a real event.',
    status: 'Flight proven',
    href: '/resume',
    tone: 'amber',
  },
  {
    label: '03 / Leadership',
    directLabel: 'Engineering Leadership',
    title: 'Security practice that survives contact with delivery',
    summary:
      'Threat modeling, secure development lifecycle, standards, and team formation that keep security inside normal engineering work instead of beside it.',
    status: 'Embedded discipline',
    href: '/projects',
    tone: 'green',
  },
];

export const projects = {
  title: 'Security Projects — Small Screens / Big Worlds',
  description:
    'AI security research, red teaming, security event response, and engineering leadership by Shawn Campbell.',
  kickerOps: 'Shipyard / Security Manifest',
  kickerDirect: 'Security Projects and Capabilities',
  headingOps: 'Security work in progress',
  headingDirect: 'AI security and red-team work',
  intro:
    'Runnable AI security research, red-team practice, and the application security and response work that surrounds them. Platform and product engineering is the depth underneath, not the headline.',
  areas: [
    {
      code: '01',
      opsLabel: 'AI Security Lab',
      directLabel: 'AI Security Research',
      status: 'Active focus',
      summary:
        'Ten runnable vulnerable agents, one per OWASP LLM Top 10 category, with an attacker payload library, an evaluation harness, a spotlighting defense toggle, and a writeup for each.',
      evidence: ['OWASP LLM Top 10', 'Prompt injection', 'Agent tooling', 'Security writeups'],
    },
    {
      code: '02',
      opsLabel: 'Red Team',
      directLabel: 'Red Team and Offensive Security',
      status: 'Flight proven',
      summary:
        'Internal red-team operations, application-layer penetration testing, vulnerability research, and proof-of-concept exploit development that turns findings into engineering priorities.',
      evidence: ['Penetration testing', 'Vulnerability research', 'Exploit PoCs', 'Secure code review'],
    },
    {
      code: '03',
      opsLabel: 'AppSec and Response',
      directLabel: 'Application Security and Event Response',
      status: 'Flight proven',
      summary:
        'Threat modeling, trust-boundary analysis, CI/CD hardening, and the triage, containment, and postmortem work that follows a security event.',
      evidence: ['Threat modeling', 'Trust boundaries', 'Incident triage', 'Postmortems'],
    },
    {
      code: '04',
      opsLabel: 'Platform Depth',
      directLabel: 'Platform and Product Depth',
      status: 'Supporting evidence',
      summary:
        'Two decades of distributed IoT, smart-access, cloud, mobile, and API systems in Swift, Kotlin, C++, TypeScript, Go, Python, and GraphQL. This is the working knowledge behind the security work, not a separate practice.',
      evidence: ['Distributed systems', 'IoT and cloud', 'Native mobile', 'GraphQL and APIs'],
    },
  ],
  caseStudyNote:
    'Future entries will include role, constraints, decisions, implementation, security assumptions, outcome, screenshots or runnable evidence, and lessons learned. No invented metrics and no inflated claims.',
};

export const about = {
  lead:
    "I'm Shawn Campbell, an AI security researcher, red-team practitioner, and engineering leader with 26 years building software and the teams that ship it, five of them in penetration testing and red-team practice.",
  paragraphs: [
    'AI security is the current center of gravity: runnable OWASP LLM Top 10 labs, vulnerable agents, prompt-injection research, and defense experiments, alongside the application security, red-team practice, and event response that surround them.',
    'Agentic and AI-assisted development is part of the method rather than a separate topic. I build with coding agents and generative tooling and study how they fail: tool-use boundaries, provenance, supply-chain exposure, and the review practice that keeps engineering judgment human. Two decades of product and platform engineering sit underneath all of it as working knowledge, not as the headline.',
  ],
  direction:
    'Build runnable AI security labs, publish practical field notes, respond well when systems fail, and keep engineering leadership close enough to make the recommendations usable.',
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
  description: 'AI security research, red teaming, agentic development, and security field notes.',
  intro:
    'AI security research and red-team practice lead the archive, with security event response, agentic development methodology, and engineering-leadership notes alongside.',
};
