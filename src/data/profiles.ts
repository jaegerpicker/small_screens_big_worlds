import { resolveProfileId, type ProfileId } from '../lib/site-profile.ts';
import { DEFAULT_PROFILE } from './active-profile.ts';

/*
 * Positioning copy for each professional profile.
 *
 * Facts that do not change between profiles, such as experience history,
 * earlier work, writing, and links, stay in their pages. Every profile must
 * define the same fields; scripts/test-site-profile.mjs enforces that.
 */

const security = {
  id: 'security',
  label: 'Security',
  meta: {
    description:
      'Application security, AI security research, secure mobile systems, and product engineering by Shawn Campbell.',
    rssDescription:
      'AI security, application security, secure product engineering, and field notes.',
  },
  home: {
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
  },
  systems: [
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
  ],
  missions: [
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
  ],
  projects: {
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
  },
  about: {
    lead:
      "I'm Shawn Campbell, an application security engineer, mobile and product engineer, frontend architect, and technical leader with 25 years of experience building software and engineering teams.",
    paragraphs: [
      'Security is the current center of gravity: AI security research, OWASP LLM Top 10 labs, application security reviews, threat modeling, and secure product engineering across native mobile, React and React Native, connected products, and frontend systems.',
      'AI-assisted development is part of that process. I use coding agents and generative tools to accelerate research, prototypes, testing, and lab construction, while keeping engineering judgment human. Game development in Godot and Unreal remains a public learning thread, but the main line is security: permissions, storage, trust boundaries, threat modeling, and resilient architecture.',
    ],
    direction:
      'Build runnable AI security labs, publish practical security field notes, and keep product engineering experience close enough to make the recommendations usable.',
  },
  resume: {
    description:
      'Mission dossier for Shawn Campbell: AI security, secure systems architecture, red-team methodology, and engineering leadership.',
    roleLine:
      'AI security researcher, secure systems architect, red-team practitioner, and hands-on engineering leader.',
    summary:
      'Shawn Campbell builds and reviews systems where software, agents, devices, data, and teams intersect. His work centers on secure foundations: AI threat research, application security, distributed platforms, mobile and IoT depth, and leadership that turns risk into clear engineering practice.',
    badges: ['AI Security', 'Red Team', 'Secure Systems', 'Engineering Leadership', 'Distributed Platforms'],
    telemetry: [
      { term: 'Operating Mode', value: 'Principal IC / technical lead / security partner' },
      { term: 'Primary Focus', value: 'Agentic AI security, appsec, mobile, IoT, cloud platforms' },
      { term: 'Signal', value: '25 years building systems, teams, and security practices' },
    ],
    capabilitiesHeading: 'Security-First Engineering Surface',
    capabilities: [
      {
        label: 'AI Threat Research',
        details:
          'Agentic attack surface mapping, prompt-injection labs, tool-use risk analysis, and secure AI workflow review.',
      },
      {
        label: 'Security Architecture',
        details:
          'Application security assessments, secure API design, threat modeling, GraphQL review, and cloud-native guardrails.',
      },
      {
        label: 'Red-Team Methodology',
        details:
          'Internal red-team exercises, proof-of-concept exploit development, secure code review, and attacker-informed remediation.',
      },
      {
        label: 'Distributed Platforms',
        details:
          'IoT, smart-access, mobile, data pipeline, serverless, and event-driven systems across AWS and GCP environments.',
      },
      {
        label: 'Systems Engineering',
        details:
          'Swift, Kotlin, C++, TypeScript, Go, Python, C#, Java, GraphQL, React, and mobile-to-cloud integration.',
      },
      {
        label: 'Engineering Leadership',
        details:
          'Principal-level technical direction, team formation, standards, mentoring, cross-functional execution, and delivery discipline.',
      },
    ],
  },
  blog: {
    description: 'AI security, application security, secure mobile, and AI-assisted development field notes.',
    intro:
      'AI security and application security lead the archive. Secure mobile and product engineering, AI-assisted development, and game-development field logs round it out.',
  },
};

const mobileGames: typeof security = {
  id: 'mobile-games',
  label: 'Mobile and Game Development',
  meta: {
    description:
      'Mobile engineering, product systems, AI-assisted development, and game-development field notes by Shawn Campbell.',
    rssDescription:
      'Mobile engineering, AI-assisted development, game-development, and systems field notes.',
  },
  home: {
    title: 'Small Screens / Big Worlds — Shawn Campbell',
    description:
      'Native mobile systems, React products, AI-assisted development, and a growing body of work in games.',
    kickerOps: 'Build status / curious and operational',
    kickerDirect: 'Mobile and Product Engineering',
    headlinePrefix: 'Software for',
    missionCopy:
      'I build native mobile systems, React products, and increasingly, games. AI is part of the toolkit: useful for accelerating experiments, never a substitute for engineering judgment.',
    primaryActionOps: 'Enter the shipyard',
    primaryActionDirect: 'View selected work',
    secondaryActionOps: 'Open the flight log',
    secondaryActionDirect: 'Read the blog',
    workHeadingOps: 'Systems worth opening up',
    workHeadingDirect: 'Mobile, product, and game-development work',
    workIntro: 'Real engineering decisions, constraints, implementation details, and lessons learned.',
    courseId: 'game-lab',
    courseHeading: 'Learning game development in public',
    courseBody:
      'I am bringing decades of mobile, frontend, architecture, and team leadership experience into Godot and Unreal. The goal is playable work, clear postmortems, and an honest record of what transfers and what does not.',
    rigorKickerDirect: 'Engineering Discipline',
    rigorHeading: 'Security remains part of product quality.',
    rigorBody:
      'Threat modeling, permissions, storage, trust boundaries, and failure modes stay inside the engineering story rather than becoming a separate identity.',
    latestHeading: 'Dispatches from the build',
  },
  systems: [
    {
      id: 'mobile',
      opsLabel: 'Native Mobile',
      directLabel: 'Mobile Engineering',
      detail: 'Swift, Kotlin, connected devices, and resilient field workflows.',
      status: 'Flight proven',
      href: '#selected-work',
    },
    {
      id: 'product',
      opsLabel: 'Product Systems',
      directLabel: 'React and React Native',
      detail: 'Cross-platform products, frontend architecture, and design systems.',
      status: 'Flight proven',
      href: '#selected-work',
    },
    {
      id: 'lab',
      opsLabel: 'Game Lab',
      directLabel: 'Game Development',
      detail: 'Godot and Unreal experiments, mechanics, tools, and postmortems.',
      status: 'Under construction',
      href: '#game-lab',
    },
    {
      id: 'rigor',
      opsLabel: 'Systems Rigor',
      directLabel: 'Security and Architecture',
      detail: 'Threat-aware engineering, distributed systems, and technical leadership.',
      status: 'Embedded discipline',
      href: '#systems-rigor',
    },
  ],
  missions: [
    {
      label: '01 / Mobile',
      directLabel: 'Mobile Engineering',
      title: 'Native systems for the real world',
      summary:
        'Long-running work across iOS, Android, connected devices, offline behavior, and operationally demanding products.',
      status: 'Flight proven',
      href: '/resume',
      tone: 'cyan',
    },
    {
      label: '02 / Product',
      directLabel: 'React and React Native',
      title: 'Cross-platform product systems',
      summary:
        'Frontend architecture, GraphQL, design systems, performance, and team-scale delivery without flattening platform strengths.',
      status: 'Flight proven',
      href: '/resume',
      tone: 'amber',
    },
    {
      label: '03 / Frontier',
      directLabel: 'Game Development',
      title: 'Playable experiments and honest field notes',
      summary:
        'A visible learning trajectory through Godot and Unreal, focused on mechanics, game state, tools, and AI-assisted iteration.',
      status: 'Under construction',
      href: '/blog',
      tone: 'green',
    },
  ],
  projects: {
    title: 'Projects — Small Screens / Big Worlds',
    description: 'Mobile, React, frontend, and game-development work by Shawn Campbell.',
    kickerOps: 'Shipyard / Systems Manifest',
    kickerDirect: 'Projects and Capabilities',
    headingOps: 'Systems under construction',
    headingDirect: 'Mobile, frontend, and game-development work',
    intro:
      'This index describes the work I can discuss accurately today. Detailed case studies and playable experiments will replace broad capability summaries as public artifacts are ready.',
    areas: [
      {
        code: '01',
        opsLabel: 'Native Mobile',
        directLabel: 'Native Mobile',
        status: 'Flight proven',
        summary:
          'iOS and Android systems built with Swift, Kotlin, Objective-C, Java, and C++, including offline workflows, sensors, connected devices, and mobile-to-cloud integration.',
        evidence: ['Native architecture', 'Connected products', 'Offline behavior', 'Team leadership'],
      },
      {
        code: '02',
        opsLabel: 'Product Systems',
        directLabel: 'React and React Native',
        status: 'Flight proven',
        summary:
          'Cross-platform product engineering across React Native, TypeScript, React, GraphQL, APIs, design systems, and frontend delivery at team scale.',
        evidence: ['React Native', 'TypeScript', 'GraphQL', 'Design systems'],
      },
      {
        code: '03',
        opsLabel: 'Interface Deck',
        directLabel: 'Frontend and Product Systems',
        status: 'Flight proven',
        summary:
          'Web interfaces and distributed product surfaces shaped by usability, performance, accessibility, operational constraints, and maintainable architecture.',
        evidence: ['Frontend architecture', 'Product delivery', 'Accessibility', 'Distributed systems'],
      },
      {
        code: '04',
        opsLabel: 'Game Lab',
        directLabel: 'Game Lab',
        status: 'Under construction',
        summary:
          'A serious learning program in Godot and Unreal focused on gameplay loops, input, state, tools, mobile deployment, and AI-assisted prototyping.',
        evidence: ['Godot', 'Unreal Engine', 'Gameplay systems', 'Learning in public'],
      },
    ],
    caseStudyNote:
      'Future entries will include role, constraints, decisions, implementation, outcome, screenshots or playable evidence, and lessons learned. No invented metrics and no inflated claims.',
  },
  about: {
    lead:
      "I'm Shawn Campbell, a mobile and product engineer, frontend architect, and technical leader with 25 years of experience building software and engineering teams.",
    paragraphs: [
      "Native mobile, React and React Native, connected products, and frontend systems are the foundation of my work. I'm now applying those habits to game development in Godot and Unreal: learning in public, shipping playable experiments, and documenting what transfers from product engineering and what does not.",
      'AI-assisted development is part of that process. I use coding agents and generative tools to accelerate research, prototypes, testing, and creative iteration, while keeping engineering judgment and art direction human. Security remains embedded in the work through permissions, storage, trust boundaries, threat modeling, and resilient architecture.',
    ],
    direction:
      'Build useful mobile and web products, develop real game-engine depth, and publish technical work that is honest about both expertise and learning.',
  },
  resume: {
    description:
      'Shawn Campbell: mobile and product engineer, frontend architect, React Native leader, and hands-on engineering leader.',
    roleLine: 'Mobile and Product Engineer, frontend architect, and hands-on engineering leader.',
    summary:
      'Shawn Campbell has spent 25 years building software, products, and engineering teams. His strongest depth is in native mobile, React and React Native, connected products, frontend systems, and technical leadership. Security remains part of the engineering discipline, while game development in Godot and Unreal is a current learning focus.',
    badges: ['Native Mobile', 'React Native', 'Frontend Systems', 'Engineering Leadership', 'Connected Products'],
    telemetry: [
      { term: 'Operating Mode', value: 'Principal IC / technical lead / engineering leader' },
      { term: 'Primary Focus', value: 'Native mobile, React Native, frontend, connected products' },
      { term: 'Current learning focus', value: 'Game Development with Godot and Unreal Engine' },
    ],
    capabilitiesHeading: 'Mobile, Product, and Engineering Leadership',
    capabilities: [
      {
        label: 'Native Mobile Engineering',
        details:
          'Swift, Kotlin, Objective-C, Java, C++, connected devices, offline workflows, and mobile-to-cloud architecture.',
      },
      {
        label: 'React and React Native',
        details:
          'Cross-platform products, TypeScript, React, GraphQL, design systems, performance, and frontend delivery at team scale.',
      },
      {
        label: 'Frontend and Product Systems',
        details:
          'Accessible product interfaces, API integration, distributed workflows, and architecture shaped by operational constraints.',
      },
      {
        label: 'Engineering Leadership',
        details:
          'Principal-level technical direction, team formation, hiring, standards, mentoring, and cross-functional execution.',
      },
      {
        label: 'Connected and Distributed Systems',
        details:
          'IoT, smart access, data pipelines, serverless platforms, event-driven systems, AWS, GCP, and backend services.',
      },
      {
        label: 'Security and Systems Rigor',
        details:
          'Threat modeling, application security, red-team methodology, secure code review, trust boundaries, and resilient delivery.',
      },
    ],
  },
  blog: {
    description: 'Mobile, AI-assisted development, game-development, and systems field notes.',
    intro:
      'Mobile and product engineering lead the archive. AI-assisted development, game-development study, and systems-under-stress research round it out.',
  },
};

export type SiteProfile = typeof security;

export const profiles: Record<ProfileId, SiteProfile> = {
  security,
  'mobile-games': mobileGames,
};

const requestedProfile = typeof process === 'undefined' ? undefined : process.env.SITE_PROFILE;
export const activeProfileId = resolveProfileId(requestedProfile, DEFAULT_PROFILE);

if (requestedProfile && requestedProfile !== activeProfileId) {
  console.warn(
    `[site-profile] Unknown SITE_PROFILE "${requestedProfile}". Using "${activeProfileId}".`,
  );
}

export const activeProfile = profiles[activeProfileId];
