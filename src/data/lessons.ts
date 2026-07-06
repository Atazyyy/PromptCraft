import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Apa itu Prompt Engineering?',
    description: 'Pelajari dasar-dasar prompt engineering dan kenapa ini penting di era AI.',
    difficulty: 'beginner',
    duration: '8 min',
    order: 1,
    content: [
      {
        type: 'text',
        title: 'Selamat Datang!',
        content: `Prompt engineering adalah **seni dan ilmu** dalam menyusun instruksi yang efektif untuk AI. Bayangkan kamu sedang memberi tahu asisten yang sangat pintar tapi belum tahu konteksnya — semakin jelas instruksimu, semakin baik hasilnya.`,
      },
      {
        type: 'tip',
        title: 'Kenapa Ini Penting?',
        content: `Dengan prompt engineering yang baik, kamu bisa mendapatkan output yang lebih akurat, relevan, dan berguna — tanpa perlu keahlian coding sama sekali!`,
      },
      {
        type: 'example',
        title: 'Contoh Nggak Efektif vs Efektif',
        content: `❌ Nggak Efektif:
"Bantu aku"

✅ Efektif:
"Bantu aku menulis email pengenalan diri untuk melamar posisi Marketing di perusahaan startup fintech. Tone profesional tapi friendly, sekitar 150 kata."`,
      },
      {
        type: 'text',
        title: 'Apa yang Akan Kamu Pelajari?',
        content: `Dalam kursus ini, kamu akan mempelajari:
• Struktur prompt yang efektif
• Cara memberikan konteks yang tepat
• Teknikteknik lanjutan seperti Chain of Thought
• Cara menghindari kesalahan umum
• Membangun prompt library untuk workflow kamu`,
      },
      {
        type: 'interactive',
        title: 'Coba Sendiri!',
        content: `Pikirkan satu tugas yang pernah kamu coba lakukan dengan AI. Apakah hasilnya sesuai harapan? Kalau nggak, coba identifikasi bagian mana yang kurang jelas.`,
      },
    ],
    keyTakeaways: [
      'Prompt engineering = menyusun instruksi yang efektif untuk AI',
      'Semakin jelas dan spesifik, semakin baik hasilnya',
      'Tidak perlu coding — yang penting tahu cara berkomunikasi',
    ],
  },
  {
    id: 'lesson-2',
    title: 'Komponen Prompt yang Baik',
    description: 'Pahami 5 komponen utama dalam membuat prompt yang efektif.',
    difficulty: 'beginner',
    duration: '10 min',
    order: 2,
    content: [
      {
        type: 'text',
        title: '5 Komponen Kunci',
        content: `Sebuah prompt yang efektif biasanya terdiri dari **5 komponen utama**. Semakin kamu menguasai komponen-komponen ini, semakin presisi output yang kamu dapatkan.`,
      },
      {
        type: 'code',
        title: 'Struktur Prompt Ideal',
        language: 'markdown',
        content: `📌 [ROLE] - Peran apa yang harus diasumsikan AI?
📌 [TASK] - Tugas spesifik apa yang harus dilakukan?
📌 [CONTEXT] - Informasi latar belakang apa yang perlu diketahui?
📌 [FORMAT] - Bagaimana output harus disajikan?
📌 [CONSTRAINTS] - Batasan atau aturan apa yang harus dipatuhi?`,
      },
      {
        type: 'example',
        title: 'Contoh Lengkap',
        content: `📌 ROLE: "Kamu adalah seorang social media strategist berpengalaman"
📌 TASK: "Buat 5 ide konten Instagram untuk brand skincare"
📌 CONTEXT: "Target audience: perempuan 20-30 tahun, brand lokal Indonesia, budget terbatas"
📌 FORMAT: "List bernomor dengan brief singkat tiap ide"
📌 CONSTRAINTS: "Tidak boleh pakai influencer, fokus ke konten organik"`,
      },
      {
        type: 'tip',
        title: 'Pro Tips',
        content: `Kamu nggak harus selalu pakai semua 5 komponen. Untuk tugas simpel, 2-3 komponen sudah cukup. Tapi untuk tugas kompleks, semua komponen akan sangat membantu.`,
      },
      {
        type: 'warning',
        title: 'Kesalahan Umum',
        content: `• Terlalu umum tanpa konteks
• Nggak specify format output
• Terlalu banyak instruksi sekaligus
• Ambiguous language (kata-kata yang bisa punya banyak arti)`,
      },
    ],
    keyTakeaways: [
      '5 komponen: Role, Task, Context, Format, Constraints',
      'Tidak harus selalu pakai semua komponen — sesuai kebutuhan',
      'Kecermatan dalam merumuskan = kualitas output',
    ],
  },
  {
    id: 'lesson-3',
    title: 'Be Specific & Clear',
    description: 'Pelajari cara menghindari ambiguitas dan memberikan instruksi yang jelas.',
    difficulty: 'beginner',
    duration: '10 min',
    order: 3,
    content: [
      {
        type: 'text',
        title: 'Kekuatan Kejelasan',
        content: `AI itu **jarum.info** — ia mencari pola dalam teks yang kamu berikan. Kalau instruksimu ambigu, AI akan menebak-nebak dan hasilnya bisa di luar ekspektasi.`,
      },
      {
        type: 'example',
        title: 'Sebelum vs Sesudah',
        content: `❌ KABUR:
"Tolong buatkan saya proposal"

✅ JELAS:
"Tolong buatkan proposal bisnis untuk pembukaan kedai kopi di Bandung. Include: executive summary, market analysis, financial projections (5 tahun), dan organizational structure. Format: PDF, 10-15 halaman."`,
      },
      {
        type: 'code',
        title: 'Teknik Spesificity',
        language: 'markdown',
        content: `# Gunakan kata yang konkrit:
❌ "dokumen yang bagus"
✅ "dokumen dengan minimal 3 studi kasus"

# Gunakan angka:
❌ "tidak terlalu panjang"
✅ "100-150 kata"

# Gunakan timeframe:
❌ "baru-baru ini"
✅ "3 bulan terakhir"

# Gunakan role spesifik:
❌ "tolong bantu"
✅ "sebagai marketing manager, bantu saya..."`,
      },
      {
        type: 'interactive',
        title: 'Latihan: Perbaiki Prompt Ini',
        content: `Prompt: "Buatkan saya caption Instagram"

Coba pikirkan: Apa yang kurang? Berapa banyak? Untuk produk apa? Tone seperti apa?`,
      },
    ],
    keyTakeaways: [
      'Ganti kata ambigu dengan kata konkrit dan angka',
      'Selalu specify quantity, tone, dan format',
      'Jika bisa ditafsirkan lebih dari satu cara, maka perlu diperjelas',
    ],
  },
  {
    id: 'lesson-4',
    title: 'Using Context & Examples',
    description: 'Pelajari cara memberikan konteks dan contoh untuk hasil yang lebih akurat.',
    difficulty: 'beginner',
    duration: '12 min',
    order: 4,
    content: [
      {
        type: 'text',
        title: 'Mengapa Konteks Penting?',
        content: `Tanpa konteks, AI bekerja dengan **asumsi default**. Dengan konteks yang tepat, AI bisa menyesuaikan respons sesuai kebutuhan spesifik kamu.`,
      },
      {
        type: 'example',
        title: 'Contoh dengan Konteks',
        content: `❌ TANPA KONTEKS:
"Jelaskan tentang marketing"

✅ DENGAN KONTEKS:
"Jelaskan tentang content marketing untuk brand fashion sustainable di Indonesia. Audience: millenial urban. Budget: Rp 5jt/bulan. Goal: increase brand awareness."`,
      },
      {
        type: 'code',
        title: 'Template Konteks',
        language: 'markdown',
        content: `# Template Konteks Lengkap:
[BACKGROUND]
Brand/product yang sedang dikerjakan:
- Nama brand: [isi]
- Industri: [isi]
- Produk utama: [isi]

[AUDIENCE]
Target audience:
- Demografi: [isi]
- Psychographics: [isi]
- Pain points: [isi]

[GOALS]
Tujuan yang ingin dicapai:
- Primary goal: [isi]
- Secondary goal: [isi]

[CONSTRAINTS]
Kendala yang ada:
- Budget: [isi]
- Timeline: [isi]
- Brand guidelines: [isi]`,
      },
      {
        type: 'tip',
        title: 'Contoh adalah Superpower',
        content: `Memberikan contoh (few-shot) bisa sangat powerful. Jika kamu punya output yang kamu sukai, tunjukkan ke AI dan minta "buat yang类似"`,
      },
    ],
    keyTakeaways: [
      'Konteks membantu AI memahami situasi spesifik kamu',
      'Semakin detail konteks, semakin relevan output',
      'Contoh (few-shot) sangat efektif untuk konsistensi gaya',
    ],
  },
  {
    id: 'lesson-5',
    title: 'Controlling Output Format',
    description: 'Kuasai cara specifying format output yang kamu butuhkan.',
    difficulty: 'intermediate',
    duration: '10 min',
    order: 5,
    content: [
      {
        type: 'text',
        title: 'Format = Actionability',
        content: `Format output yang tepat membuat hasil **langsung bisa dipakai**. Tanpa format specification, kamu mungkin perlu rework manual.`,
      },
      {
        type: 'example',
        title: 'Berbagai Format Output',
        content: `📋 JSON:
{ "caption": "...", "hashtags": [...] }

📝 BULLET LIST:
- Poin pertama
- Poin kedua

📊 TABLE:
| Header 1 | Header 2 |
|----------|----------|
| Data     | Data     |

📧 EMAIL FORMAT:
Subject: ...
To: ...
Body: ...`,
      },
      {
        type: 'code',
        title: 'Prompt dengan Format Spec',
        language: 'markdown',
        content: `Task: Analisis kompetitor

Format output (WAJIB ikuti struktur ini):
## 1. Overview
[2-3 paragraph]

## 2. Strengths
- [Bullet point]
- [Bullet point]

## 3. Weaknesses
- [Bullet point]

## 4. Recommendations
| Strategi | Timeline | Budget |
|----------|----------|--------|
| ... | ... | ... |`,
      },
      {
        type: 'tip',
        title: 'Kombinasi Format',
        content: `Kamu bisa kombinasi format dalam satu prompt. Misalnya: "Generate 5 ide dalam format list, kemudian expand ide #1 dalam paragraph 100 kata."`,
      },
    ],
    keyTakeaways: [
      'Selalu specify format yang kamu mau di awal',
      'Format umum: JSON, list, table, paragraph, email format',
      'Struktur yang jelas = hasil yang langsung actionable',
    ],
  },
  {
    id: 'lesson-6',
    title: 'Chain of Thought Prompting',
    description: 'Teknik advanced: minta AI berpikir langkah demi langkah.',
    difficulty: 'intermediate',
    duration: '12 min',
    order: 6,
    content: [
      {
        type: 'text',
        title: 'Apa itu Chain of Thought?',
        content: `Chain of Thought (CoT) adalah teknik meminta AI untuk **menjelaskan proses berpikirnya** sebelum memberikan jawaban akhir. Ini membuat output lebih terstruktur dan reasoningnya bisa di-verifikasi.`,
      },
      {
        type: 'code',
        title: 'CoT Prompt Pattern',
        language: 'markdown',
        content: `# Basic CoT
Prompt: [Soal/pertanyaan]
Sebelum menjawab, pikirkan langkah demi langkah:
1. [Langkah 1]
2. [Langkah 2]
3. [Langkah 3]
Kesimpulan: [Jawaban final]`,
      },
      {
        type: 'example',
        title: 'Contoh CoT',
        content: `Prompt: "Apakah saya harus investasi saham atau reksa dana untuk dana darurat?"

Harus pikirkan langkah demi langkah:
1. Definisi dana darurat: 3-6 bulan pengeluaran
2. Kebutuhan likuiditas: Dana darurat harus bisa cair cepat
3. Karakteristik saham: Volatile, butuh waktu cair 2-3 hari
4. Karakteristik reksa dana pasar uang: Lebih stabil, relatif cair
5. Rekomendasi: ...

Kesimpulan: [Final recommendation berdasarkan reasoning di atas]`,
      },
      {
        type: 'tip',
        title: 'Kapan Pakai CoT?',
        content: `CoT paling efektif untuk:
• Masalah yang butuh reasoning berjenjang
• Keputusan dengan banyak faktor
• Analisis yang butuh transparansi proses
• Situasi di mana "bagaimana" sama pentingnya dengan "apa"`,
      },
    ],
    keyTakeaways: [
      'CoT = minta AI jelaskan proses berpikir',
      'Buat output lebih terverifikasi dan transparan',
      'Sangat berguna untuk keputusan kompleks',
    ],
  },
  {
    id: 'lesson-7',
    title: 'Few-Shot Prompting',
    description: 'Teknik memberikan contoh untuk konsistensi output.',
    difficulty: 'intermediate',
    duration: '10 min',
    order: 7,
    content: [
      {
        type: 'text',
        title: 'Belajar dari Contoh',
        content: `Few-shot prompting adalah teknik memberikan **beberapa contoh** dalam prompt untuk "men-show" pola yang kamu mau. AI akan mengikuti pola dari contoh-contoh tersebut.`,
      },
      {
        type: 'code',
        title: 'Few-Shot Template',
        language: 'markdown',
        content: `# Zero-shot (tanpa contoh):
Prompt: "Buatkan caption Instagram untuk skincare product"

# Few-shot (dengan contoh):
Prompt: "Buatkan caption Instagram untuk skincare product.
Ikuti pola ini:

Contoh 1:
Produk: Serum vitamin C
Caption: "Kenyanılıkılmayanın, radiant skin dimulai dari sini! ✨ Vit C 20% bekerja keras bikin kulit glowing tanpa iritasi. [Product link] #SkincareRoutine #GlowingSkin"

Contoh 2:
Produk: Moisturizer
Caption: [Buatkan mengikuti pola yang sama]

Sekarang buatkan untuk:
Produk: [Nama produk]
Caption:`,
      },
      {
        type: 'example',
        title: 'Efek Few-Shot',
        content: `Tanpa contoh: Caption random dengan gaya nggak konsisten

Dengan 2-3 contoh: AI menangkap pola tone, struktur, emoji usage, hashtag style, dan mengaplikasikannya ke request baru`,
      },
      {
        type: 'tip',
        title: 'Tips Few-Shot',
        content: `• 2-3 contoh sudah cukup untuk большинство kasus
• Contoh harus representatif dan berkualitas tinggi
• Semakin mirip contoh dengan desired output, semakin akurat`,
      },
    ],
    keyTakeaways: [
      'Few-shot = kasih contoh untuk tunjukin pola',
      '2-3 contoh berkualitas lebih baik dari 10 contoh medioker',
      'Sangat efektif untuk konsistensi gaya/tone/format',
    ],
  },
  {
    id: 'lesson-8',
    title: 'System vs User Messages',
    description: 'Pahami perbedaan dan kapan pakai masing-masing.',
    difficulty: 'intermediate',
    duration: '8 min',
    order: 8,
    content: [
      {
        type: 'text',
        title: 'Arsitektur Pesan AI',
        content: `Dalam interaksi dengan AI, ada dua jenis pesan utama: **System Message** (instruksi global) dan **User Message** (request spesifik). Memahami perbedaannya membuat prompt lebih terorganisir.`,
      },
      {
        type: 'code',
        title: 'System vs User Message',
        language: 'markdown',
        content: `# SYSTEM MESSAGE (Global, Persistent)
"Bahasa: Bahasa Indonesia formal
Tone: Profesional tapi friendly
Format: Selalu gunakan header Markdown
Constraints: Tidak boleh suggest layanan kompetitor"

# USER MESSAGE (Spesifik, Request-based)
"Buatkan email follow-up untuk klien yang belum respond sejak 1 minggu lalu"`,
      },
      {
        type: 'example',
        title: 'System Message untuk Brand Voice',
        content: `System: "Kamu adalah social media manager untuk brand @naturelskincare_id. Brand voice: warm, educational, empower women. Always include:
- 1-2 relevant hashtags
- Call-to-action
- Emojis sparingly (2-3 max)"

User: "Buat caption untuk produk facial wash baru"`,
      },
      {
        type: 'tip',
        title: 'Best Practice',
        content: `• System = aturan global, constrain, role
• User = request spesifik yang berubah-ubah
• Kalau pakai platform yang tidak support system message, masukkan di awal user message dengan [SYSTEM] prefix`,
      },
    ],
    keyTakeaways: [
      'System = instruksi global yang persist',
      'User = request spesifik per percakapan',
      'Pemisahan ini bikin prompt lebih terorganisir',
    ],
  },
  {
    id: 'lesson-9',
    title: 'Avoiding Hallucinations',
    description: 'Teknik mengurangi dan mendeteksi hallucination AI.',
    difficulty: 'intermediate',
    duration: '12 min',
    order: 9,
    content: [
      {
        type: 'text',
        title: 'Apa itu Hallucination?',
        content: `Hallucination adalah saat AI **menghasilkan informasi yang terdengar meyakinkan tapi sebenarnya salah atau fiktif**. Ini bisa berupa data palsu, kutipan tidak ada, atau fakta yang di-invent.`,
      },
      {
        type: 'warning',
        title: 'Contoh Hallucination',
        content: `AI: "According to a 2023 study by McKinsey..."

Realita: Tidak ada study tersebut, atau detailnya diacak-acak. AI menghasilkan dengan自信 karena pola bahasanya meyakinkan.`,
      },
      {
        type: 'code',
        title: 'Teknik Pencegahan',
        language: 'markdown',
        content: `# 1. Explicit Validation Request
"Jika kamu tidak punya data yang pasti, bilang 'Saya tidak yakin'. Lebih baik akui ketidakpastian daripada asumai."

# 2. Source Citation
"Untuk setiap klaim, cantumkan sumber. Jika tidak punya sumber valid, tandai dengan [sumber tidak tersedia]."

# 3. Confidence Indicator
"Setelah jawaban, tambahkan confidence level:
- High confidence: untuk fakta umum yang verified
- Medium confidence: untuk general knowledge
- Low confidence: untuk spekulasi

# 4. Constraint-based
"Khusus untuk topik [X], jangan memberikan angka spesifik. Berikan range atau general guidance saja."`,
      },
      {
        type: 'tip',
        title: 'Always Verify',
        content: `Aturan utama: **Never ship raw AI output**. Selalu verify informasi kritikal, terutama untuk:
• Data dan statistik
• Legal/financial advice
• Health information
• Kutipan dan atribusi`,
      },
    ],
    keyTakeaways: [
      'Hallucination = AI ngibulin dengan info palsu yang meyakinkan',
      'Selalu add validation constraints',
      'Never ship raw AI output untuk informasi kritikal',
    ],
  },
  {
    id: 'lesson-10',
    title: 'Iterative Refinement',
    description: 'Kembangkan prompt melalui proses iterasi.',
    difficulty: 'intermediate',
    duration: '10 min',
    order: 10,
    content: [
      {
        type: 'text',
        title: 'Prompt yang Baik itu Diuji',
        content: `Rarely your first prompt will be perfect. **Iterative refinement** adalah proses memperbaiki prompt secara bertahap sampai mendapat hasil yang diinginkan.`,
      },
      {
        type: 'code',
        title: 'Iterative Loop',
        language: 'markdown',
        content: `# Iteration Framework:
1. START: Buat prompt v1
2. TEST: Run dan observe output
3. EVALUATE: Apa yang kurang/meleset?
4. ADJUST: Modifikasi prompt
5. REPEAT: Test lagi sampai satisfied

# Dokumentasi Iterasi:
Prompt v1: [isi]
Issue: [apa yang nggak sesuai]
Adjustment: [perubahan yang dibuat]
Result: [hasil setelah adjustment]`,
      },
      {
        type: 'example',
        title: 'Contoh Iterasi',
        content: `v1: "Buatkan caption Instagram untuk skincare"

Issue: Terlalu generik, nggak sesuai brand voice
Adjustment: "Tambahkan context brand dan contoh output"

v2: "Buatkan caption untuk brand skincare lokal Indonesia..."

Issue: Masih kurang engaging
Adjustment: "Tambahkan instruction untuk tone yang lebih playful"

v3: [Final prompt yang sudah optimal]`,
      },
      {
        type: 'tip',
        title: 'Build a Prompt Journal',
        content: `Catat setiap iterasi yang kamu buat. Dokumentasi ini jadi **prompt library** yang berharga untuk workflow kamu di masa depan.`,
      },
    ],
    keyTakeaways: [
      'First prompt rarely perfect — iterasi itu normal',
      'Document setiap iteration untuk learning',
      'Build prompt journal sebagai reusable asset',
    ],
  },
  {
    id: 'lesson-11',
    title: 'Prompt Patterns',
    description: 'Pelajari reusable prompt structure untuk berbagai use case.',
    difficulty: 'advanced',
    duration: '15 min',
    order: 11,
    content: [
      {
        type: 'text',
        title: 'Patterns yang Bisa Dipakai Ulang',
        content: `Prompt patterns adalah **template atau struktur** yang sudah terbukti efektif untuk jenis tugas tertentu. Dengan menguasai patterns ini, kamu bisa faster dalam membuat prompt berkualitas.`,
      },
      {
        type: 'code',
        title: '1. RPG Pattern',
        language: 'markdown',
        content: `# Role-Play-Give Examples (RPG)
Pattern:
[ROLE] Kamu adalah [role yang spesifik]
[PLAY] Aktif sebagai role tersebut dalam conversation
[GIVE] Berikan contoh respons yang ideal

Contoh:
Kamu adalah customer service AI untuk brand fashion. response dalam Bahasa Indonesia. Contoh respons ideal:
User: "Barang saya belum sampai"
Response: "Mohon maaf atas ketidaknyamanannya. Bisa bantu kirimkan nomor order agar saya tracking?"`,
      },
      {
        type: 'code',
        title: '2. Questionnaire Pattern',
        language: 'markdown',
        content: `# Questionnaire Pattern
Gunakan untuk extract information secara systematic.

Pattern:
"Saya akan kasih kamu informasi tentang [topic].
Tanya saya pertanyaan satu per satu untuk [goal].
Setelah dapat enough info, generate [desired output]."

Contoh:
"Saya akan kasih kamu context tentang project baru kami.
Tanya saya pertanyaan satu per satu untuk menentukan strategi marketing.
Setelah dapat enough info, generate 90-day marketing plan."`,
      },
      {
        type: 'code',
        title: '3. Template Generator Pattern',
        language: 'markdown',
        content: `# Template Generator
Pattern:
"Bikin template untuk [use case]. Template harus include:
- Placeholder untuk variabel [...]
- Instruksi kapan harus isi bagian mana
- Contoh mengisi template

Setelah jadi, test template dengan sample data [X]."

Contoh use case: Email sequences, SOP documents, meeting agenda, content calendar`,
      },
      {
        type: 'tip',
        title: 'Mix and Match',
        content: `Patterns bisa dikombinasikan. Contoh: RPG + Questionnaire = AI yang role-play sambil collect information, baru generate output.`,
      },
    ],
    keyTakeaways: [
      'Prompt patterns = reusable templates untuk use case spesifik',
      'Kuasai 3-5 patterns utama',
      'Kombinasikan patterns untuk solusi kreatif',
    ],
  },
  {
    id: 'lesson-12',
    title: 'Building a Prompt Library',
    description: 'Final lesson: bagaimana mengorganisir dan mendokumentasikan prompt.',
    difficulty: 'advanced',
    duration: '12 min',
    order: 12,
    content: [
      {
        type: 'text',
        title: 'Investasi untuk Masa Depan',
        content: `Prompt library adalah **koleksi prompt yang sudah teruji** dan terdokumentasi. Dengan library yang baik, kamu bisa:
• Consistent output quality
• Faster workflow
• Easy to share dengan tim
• Continuous improvement`,
      },
      {
        type: 'code',
        title: 'Library Structure',
        language: 'markdown',
        content: `# Prompt Library Structure
📁 social-media/
  📄 caption-generator.md
  📄 hashtag-researcher.md
  📄 content-calendar.md

📁 business/
  📄 email-templates.md
  📄 proposal-outline.md
  📄 competitor-analysis.md

📁 creative/
  📄 blog-outline.md
  📄 story-prompt.md
  📄 script-generator.md

# Setiap Prompt Document:
1. Title & Category
2. Use Case Description
3. The Prompt Itself
4. Variables to Customize
5. Example Output
6. Version History
7. Success Rate / Notes`,
      },
      {
        type: 'example',
        title: 'Dokumentasi Prompt',
        content: `---
Title: Instagram Caption Generator
Category: Social Media
Version: 2.1
Last Updated: 2024-01-15
Success Rate: 90%

## Use Case
Generate engaging Instagram captions yang sesuai brand voice.

## Variables
- {brand_name}
- {product/service}
- {tone} (casual/formal/playful)
- {cta}

## The Prompt
[Prompt text here]

## Example Output
[Sample output]

## Notes
• Best untuk fashion/lifestyle brand
• Kurang cocok untuk B2B
## Changelog
v2.1: Add tone variable
v2.0: Rewrite from scratch for better output`,
      },
      {
        type: 'tip',
        title: 'Continuous Improvement',
        content: `Treat prompt library sebagai living document. Setiap kali dapat insight baru, update prompt yang sesuai. Batch review setiap bulan untuk quality check.`,
      },
      {
        type: 'text',
        title: 'Selamat! 🎉',
        content: `Kamu sudah menyelesaikan seluruh kursus PromptCraft! Sekarang kamu punya foundational knowledge untuk:
• Craft effective prompts
• Apply advanced techniques
• Build reusable prompt library
• Continuously improve

Terus praktik dan eksplorasi! Prompt engineering adalah skill yang terus berkembang seiring perkembangan AI.`,
      },
    ],
    keyTakeaways: [
      'Prompt library = investasi untuk workflow yang efisien',
      'Struktur yang baik = easy to find, easy to use',
      'Dokumentasi yang lengkap = reusable dan continuous improvement',
    ],
  },
];
