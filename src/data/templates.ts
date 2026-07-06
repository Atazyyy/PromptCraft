import { PromptTemplate } from '../types';

export const promptTemplates: PromptTemplate[] = [
  // Starter Templates
  {
    id: 'starter-basic',
    title: 'Basic Assistant',
    description: 'Template dasar untuk tugas umum',
    category: 'starter',
    template: `{{role}}
Kamu adalah {{role_description}}.

{{task}}
Tugas: {{task_description}}

{{context}}
Konteks tambahan:
- {{context_1}}
- {{context_2}}

{{format}}
Format output: {{output_format}}

{{constraints}}
Constraints:
- {{constraint_1}}
- {{constraint_2}}`,
    variables: ['role', 'role_description', 'task_description', 'context_1', 'context_2', 'output_format', 'constraint_1', 'constraint_2']
  },
  {
    id: 'starter-analyzer',
    title: 'Content Analyzer',
    description: 'Analisis konten dengan framework terstruktur',
    category: 'starter',
    template: `Analisis konten berikut menggunakan framework ini:

**Konten:**
{{content}}

**Framework Analisis:**

1. **Overview**
   - Jenis konten:
   - Platform:
   - Target audience:

2. **Strengths**
   - [Poin positif]

3. **Areas for Improvement**
   - [Yang bisa diimproved]

4. **Engagement Tactics**
   - [Taktik engagement yang digunakan]

5. **Recommendations**
   - [Rekomendasi untuk konten serupa]`,
    variables: ['content']
  },
  {
    id: 'starter-improver',
    title: 'Content Improver',
    description: 'Perbaiki dan optimalkan konten existing',
    category: 'starter',
    template: `Tugas: Improve konten berikut

**Original Content:**
{{original_content}}

**Goals:**
- Tujuan: {{goal}}
- Tone: {{tone}}
- Target audience: {{audience}}

**Instructions:**
1. Identifikasi weaknesses
2. Suggest improvements
3. Provide improved version
4. Explain rationale

**Format:**
## Weaknesses
[Lista]

## Improved Version
[Versi yang diimproved]

## Rationale
[Penjelasan]`,
    variables: ['original_content', 'goal', 'tone', 'audience']
  },

  // Social Media Templates
  {
    id: 'social-caption',
    title: 'Instagram Caption Generator',
    description: 'Generate caption Instagram yang engaging',
    category: 'social-media',
    template: `Generate {{number}} Instagram captions untuk:

**Brand:** {{brand_name}}
**Product/Service:** {{product}}
**Campaign:** {{campaign_theme}}

**Requirements:**
- Tone: {{tone}} (casual/formal/playful/professional)
- Length: {{length}} (short: 100-150 words, medium: 150-250 words, long: 250-400 words)
- Include: Opening hook, value proposition, call-to-action
- Hashtags: {{include_hashtags}} ({{hashtag_count}} hashtags)

**Brand Voice:**
{{brand_voice}}

**Format per caption:**
📝 Caption text
#️⃣ Hashtags (pisahkan dengan spasi)`,
    variables: ['number', 'brand_name', 'product', 'campaign_theme', 'tone', 'length', 'include_hashtags', 'hashtag_count', 'brand_voice']
  },
  {
    id: 'social-hashtag',
    title: 'Hashtag Research',
    description: 'Generate hashtag strategy berdasarkan konten',
    category: 'social-media',
    template: `Generate hashtag strategy untuk:

**Content Topic:** {{topic}}
**Industry:** {{industry}}
**Target Audience:** {{audience}}
**Platform:** {{platform}} (Instagram/TikTok/Twitter/X)

**Include:**

1. **Primary Hashtags** (5-10)
   - High engagement, langsung related ke topic
   - Contoh: #[topic]#[niche]

2. **Secondary Hashtags** (10-20)
   - Mid-size, kombinasi topic + niche
   - Campuran generic dan specific

3. **Trending Hashtags** (3-5)
   - Yang sedang relevant/trending
   - Related ke moment/event

4. **Branded Hashtag** (1)
   - Unique untuk brand

**Notes:**
- Kombinasi reach + relevance
- Mix ukuran (large, medium, niche)
- Include alasan pemilihan`,
    variables: ['topic', 'industry', 'audience', 'platform']
  },
  {
    id: 'social-content-calendar',
    title: 'Content Calendar Generator',
    description: 'Plan konten 30 hari dengan variety',
    category: 'social-media',
    template: `Generate 30-day content calendar untuk:

**Brand:** {{brand_name}}
**Industry:** {{industry}}
**Goals:** {{primary_goal}}
**Budget:** {{budget}}
**Resources:** {{available_resources}}

**Content Pillars:**
1. {{pillar_1}}
2. {{pillar_2}}
3. {{pillar_3}}

**Posting Frequency:** {{frequency}}x per week

**Format:**
| Date | Day | Content Type | Topic/Pillar | Caption Theme | CTA |
|------|-----|-------------|--------------|---------------|-----|
| 01 | Mon | [Type] | [Pillar] | [Theme] | [CTA] |

**Content Mix Suggestions:**
- Educational: X%
- Entertaining: X%
- Promotional: X%
- User-generated: X%`,
    variables: ['brand_name', 'industry', 'primary_goal', 'budget', 'available_resources', 'pillar_1', 'pillar_2', 'pillar_3', 'frequency']
  },
  {
    id: 'social-strategy',
    title: 'Social Media Strategy Brief',
    description: 'Buat strategy brief untuk campaign',
    category: 'social-media',
    template: `Buat Social Media Strategy Brief untuk:

**Client/Brand:** {{brand_name}}
**Campaign:** {{campaign_name}}
**Duration:** {{duration}}
**Budget:** {{budget}}

**Objectives:**
1. {{objective_1}}
2. {{objective_2}}

**Target Audience:**
- Demographics: {{demographics}}
- Psychographics: {{psychographics}}
- Pain points: {{pain_points}}

**Key Messages:**
- {{message_1}}
- {{message_2}}

**Platform Strategy:**

1. **Instagram**
   - Content types:
   - Posting schedule:
   - KPIs:

2. **TikTok** (optional)
   - Content types:
   - Posting schedule:
   - KPIs:

3. **Other:** {{other_platform}}

**Content Pillar:**
| Pillar | % | Types |
|--------|---|-------|

**Campaign Timeline:**
- Phase 1: [Dates] - [Goal]
- Phase 2: [Dates] - [Goal]
- Phase 3: [Dates] - [Goal]

**Budget Allocation:**
- Content production: X%
- Paid promotion: X%
- Influencer: X%

**Success Metrics:**
- Primary: {{primary_kpi}}
- Secondary: {{secondary_kpi}}`,
    variables: ['brand_name', 'campaign_name', 'duration', 'budget', 'objective_1', 'objective_2', 'demographics', 'psychographics', 'pain_points', 'message_1', 'message_2', 'other_platform', 'primary_kpi', 'secondary_kpi']
  },

  // Business Templates
  {
    id: 'business-email',
    title: 'Professional Email',
    description: 'Generate email profesional untuk berbagai tujuan',
    category: 'business',
    template: `Write a professional email:

**Purpose:** {{email_purpose}} (introduction/follow-up/inquiry/complaint/announcement)
**Tone:** {{tone}} (formal/friendly/conversational)
**Recipient:** {{recipient_role}} at {{company}}

**Context:**
- {{context_1}}
- {{context_2}}

**Key Points to Include:**
1. {{point_1}}
2. {{point_2}}
3. {{point_3}}

**Call to Action:** {{cta}}

**Length:** {{length}} (short/medium/long)

**Format:**
Subject: [Compelling subject line]

Dear [Name/Title],

[Opening - hook atau context]

[Body - key points dengan supporting details]

[Closing - CTA + next steps]

Best regards,
[Your name]`,
    variables: ['email_purpose', 'tone', 'recipient_role', 'company', 'context_1', 'context_2', 'point_1', 'point_2', 'point_3', 'cta', 'length']
  },
  {
    id: 'business-proposal',
    title: 'Business Proposal Outline',
    description: 'Generate outline untuk business proposal',
    category: 'business',
    template: `Generate proposal outline untuk:

**Proposal Type:** {{type}} (service/product/partnership/investment)
**Client:** {{client_name}}
**Industry:** {{industry}}

**Overview:**
{{proposal_overview}}

**Scope:**
{{scope_description}}

**Budget Range:** {{budget_range}}

**Format Outline:**

# [Proposal Title]

## Executive Summary
[2-3 paragraph overview]

## Problem Statement
[Problem yang di-solve]
- Pain point 1
- Pain point 2

## Proposed Solution
[Solution overview]
### Deliverables
1. [Deliverable 1]
2. [Deliverable 2]

### Approach/Methodology
[Bagaimana solution akan delivered]

## Timeline
| Phase | Duration | Deliverables |
|-------|----------|--------------|

## Investment
[Pricing structure]
- Package 1: [Price] - [Includes]
- Package 2: [Price] - [Includes]

## Why [Your Company]
[Unique value proposition]

## Case Studies/Portfolio
[Contoh work serupa]

## Terms & Conditions
[Payment terms, revision policy, etc.]

## Next Steps
[Call to action]
[Contact info]`,
    variables: ['type', 'client_name', 'industry', 'proposal_overview', 'scope_description', 'budget_range']
  },
  {
    id: 'business-report',
    title: 'Monthly Report Summary',
    description: 'Rangkum data performa jadi laporan',
    category: 'business',
    template: `Generate monthly performance report:

**Month/Period:** {{period}}
**Brand/Client:** {{brand_name}}
**Platforms:** {{platforms}}

**Data to Include:**
{{data_summary}}

**Format Report:**

# [Brand Name] Monthly Report - {{period}}

## Executive Summary
[2-3 paragraph high-level overview]
- Key wins:
- Challenges:
- Recommendations:

## Performance Overview
### KPIs vs Targets
| Metric | Actual | Target | vs Target |
|--------|--------|--------|-----------|
| [Metric] | [X] | [Y] | [+/-Z%] |

### Month-over-Month Comparison
| Metric | This Month | Last Month | Change |
|--------|------------|------------|--------|

## Platform Breakdown

### Instagram
- Followers: [X] (+/-Y)
- Engagement Rate: [X]%
- Top performing content:
- Insights:

### [Other Platform]
[Same structure]

## Content Performance
### Best Performing Posts
1. [Post description] - [Engagement]
2. [Post description] - [Engagement]

### Content Mix
- Educational: X%
- Promotional: X%
- [Other]: X%

## Audience Insights
- Demographics:
- Peak engagement times:
- Top hashtags used:

## Campaign Performance (if any)
[Campaign name]
- Objectives:
- Results:
- Learnings:

## Recommendations for Next Month
1. [Recommendation]
2. [Recommendation]

## Appendix
[Raw data, additional charts]`,
    variables: ['period', 'brand_name', 'platforms', 'data_summary']
  },

  // Creative Templates
  {
    id: 'creative-blog',
    title: 'Blog Post Outline',
    description: 'Generate outline untuk blog post',
    category: 'creative',
    template: `Generate blog post outline:

**Topic:** {{topic}}
**Target Audience:** {{audience}}
**Goal:** {{goal}} (educate/inspire/convert/entertain)
**Length:** {{length}} (short: 800-1000 words, medium: 1500-2000 words, long: 2500+ words)
**Tone:** {{tone}} (professional/conversational/casual/authoritative)

**SEO Keywords:**
- Primary: {{primary_keyword}}
- Secondary: {{secondary_keywords}}

**Outline Format:**

# [SEO-optimized Title with Primary Keyword]

## Introduction (150-200 words)
- Hook/Opening statistic or question
- Why this topic matters to reader
- What they'll learn (promise)
- Brief author credibility (optional)

## Main Body

### Heading 2: [First Major Point]
- Paragraph intro
- Supporting point 1
  - Example/Statistic
  - [Supporting detail]
- Supporting point 2
  - Example/Statistic
  - [Supporting detail]
- Transition to next section

### Heading 2: [Second Major Point]
[Same structure]

### Heading 2: [Third Major Point]
[Same structure]

[Add more H2s as needed]

## Conclusion
- Recap key points
- Final takeaway
- Call to action
- Related content suggestion

## Meta Description (150-160 chars)
[Compelling description with keyword]`,
    variables: ['topic', 'audience', 'goal', 'length', 'tone', 'primary_keyword', 'secondary_keywords']
  },
  {
    id: 'creative-story',
    title: 'Story/Script Generator',
    description: 'Generate outline cerita atau script video',
    category: 'creative',
    template: `Generate {{type}} outline:

**Format:** {{format}} (short story/novel chapter/video script/podcast script)
**Genre:** {{genre}}
**Length:** {{length}}
**Tone:** {{tone}}

**Core Elements:**
- Main character: {{protagonist}}
- Goal: {{main_goal}}
- Conflict: {{central_conflict}}
- Setting: {{setting}}

**Target Audience:** {{audience}}

**Format Output:**

# [Title]

## Genre: [Genre]
## Tone: [Tone]
## Target: [Audience]

---

## Hook/Opening
[Opening scene description]

---

## Act 1: Setup (X%)
- Inciting incident:
- Stakes introduced:
- Character introduction:

---

## Act 2: Confrontation (X%)
### Rising Action 1:
[Scene breakdown]

### Midpoint:
[Major turning point]

### Rising Action 2:
[Scene breakdown]

---

## Act 3: Resolution (X%)
### Climax:
[Highest tension point]

### Falling Action:
[Resolution of subplots]

### Denouement:
[Final scene/ending]

---

## Themes
- Primary: {{theme_1}}
- Secondary: {{theme_2}}

## Key Dialogue/Moments
1. "[Iconic line/moment]"
2. "[Iconic line/moment]"

---

## Technical Notes
- Estimated runtime: {{runtime}}
- Scenes: {{scene_count}}
- Characters: {{character_count}}`,
    variables: ['type', 'format', 'genre', 'length', 'tone', 'protagonist', 'main_goal', 'central_conflict', 'setting', 'audience', 'theme_1', 'theme_2', 'runtime', 'scene_count', 'character_count']
  }
];
