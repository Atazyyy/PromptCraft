import { Quiz } from '../types';

export const quizzes: Quiz[] = [
  {
    id: 'quiz-1',
    lessonId: 'lesson-1',
    questions: [
      {
        id: 'q1-1',
        question: 'Apa definisi singkat dari Prompt Engineering?',
        options: [
          'Proses menulis kode program untuk AI',
          'Seni menyusun instruksi yang efektif untuk AI',
          'Membuat aplikasi berbasis AI',
          'Training model AI dari nol'
        ],
        correctIndex: 1,
        explanation: 'Prompt engineering adalah seni dan ilmu dalam menyusun instruksi yang efektif untuk AI agar menghasilkan output yang diinginkan.'
      },
      {
        id: 'q1-2',
        question: 'Mana contoh prompt yang paling efektif?',
        options: [
          '"Bantu aku"',
          '"Buatkan email"',
          '"Buatkan email pengenalan untuk melamar posisi Marketing Manager di perusahaan tech startup. Tone profesional, max 150 kata."',
          '"Tolong buatkan sesuatu yang bagus tentang pekerjaan"'
        ],
        correctIndex: 2,
        explanation: 'Prompt yang efektif memiliki konteks spesifik: tujuan (melamar posisi), konteks (startup tech), tone (profesional), dan batasan (150 kata).'
      },
      {
        id: 'q1-3',
        question: 'Mengapa prompt engineering penting?',
        options: [
          'Hanya penting untuk programmer',
          'Tidak terlalu penting karena AI sudah pintar',
          'Membantu mendapatkan output yang lebih akurat dan relevan',
          'Hanya tren sesaat'
        ],
        correctIndex: 2,
        explanation: 'Prompt engineering yang baik membantu AI memahami konteks dan menghasilkan output yang lebih akurat, relevan, dan berguna.'
      },
      {
        id: 'q1-4',
        question: 'Apa yang terjadi jika prompt terlalu umum?',
        options: [
          'AI akan bertanya balik untuk clarification',
          'Output akan selalu sempurna',
          'AI akan menebak-nebak dan hasilnya tidak menentu',
          'Tidak ada masalah'
        ],
        correctIndex: 2,
        explanation: 'Tanpa konteks spesifik, AI bekerja dengan asumsi default dan akan menebak-nebak, menghasilkan output yang bisa di luar ekspektasi.'
      },
      {
        id: 'q1-5',
        question: 'Apakah perlu keahlian coding untuk prompt engineering?',
        options: [
          'Ya, harus bisa programming',
          'Ya, minimal harus tahu Python',
          'Tidak, yang penting tahu cara berkomunikasi dengan jelas',
          'Hanya untuk advanced prompts'
        ],
        correctIndex: 2,
        explanation: 'Prompt engineering tidak memerlukan coding. Yang paling penting adalah kemampuan berkomunikasi dengan jelas dan spesifik.'
      }
    ]
  },
  {
    id: 'quiz-2',
    lessonId: 'lesson-2',
    questions: [
      {
        id: 'q2-1',
        question: 'Apa saja 5 komponen utama prompt yang efektif?',
        options: [
          'Input, Process, Output, Error, Success',
          'Role, Task, Context, Format, Constraints',
          'Title, Body, Footer, Signature, Date',
          'Begin, Middle, End, Review, Final'
        ],
        correctIndex: 1,
        explanation: '5 komponen utama adalah Role (peran), Task (tugas), Context (konteks), Format (format output), dan Constraints (batasan).'
      },
      {
        id: 'q2-2',
        question: 'Komponen "Role" dalam prompt berfungsi untuk?',
        options: [
          'Memberikan batasan budget',
          'Menentukan siapa yang membaca output',
          'Memberitahu AI peran apa yang harus diasumsikan',
          'Menentukan bahasa pemrograman'
        ],
        correctIndex: 2,
        explanation: 'Role memberitahu AI peran atau persona apa yang harus diasumsikan (misalnya: social media strategist, copywriter, dll).'
      },
      {
        id: 'q2-3',
        question: 'Kapan kita harus menggunakan semua 5 komponen?',
        options: [
          'Selalu, untuk setiap prompt',
          'Hanya untuk prompt bisnis',
          'Untuk tugas kompleks yang butuh presisi tinggi',
          'Tidak pernah, 2-3 komponen sudah cukup'
        ],
        correctIndex: 2,
        explanation: 'Untuk tugas simpel, 2-3 komponen sudah cukup. Semua 5 komponen lebih dibutuhkan untuk tugas kompleks.'
      },
      {
        id: 'q2-4',
        question: 'Mana yang termasuk kesalahan umum dalam prompt?',
        options: [
          'Terlalu spesifik',
          'Menambahkan terlalu banyak constraints',
          'Terlalu umum tanpa konteks dan tidak specify format output',
          'Menggunakan bahasa formal'
        ],
        correctIndex: 2,
        explanation: 'Kesalahan umum termasuk: terlalu umum tanpa konteks, nggak specify format output, terlalu banyak instruksi sekaligus, dan menggunakan ambiguous language.'
      },
      {
        id: 'q2-5',
        question: 'Komponen "Format" dalam prompt berfungsi untuk?',
        options: [
          'Menentukan warna teks output',
          'Menentukan bagaimana output harus disajikan',
          'Menentukan ukuran font',
          'Menentukan jumlah kata'
        ],
        correctIndex: 1,
        explanation: 'Format menentukan bagaimana output harus seringkali presented: JSON, list, paragraph, table, email format, dll.'
      }
    ]
  },
  {
    id: 'quiz-3',
    lessonId: 'lesson-3',
    questions: [
      {
        id: 'q3-1',
        question: '"Buatkan dokumen yang bagus" termasuk contoh prompt yang...?',
        options: [
          'Sangat efektif',
          'Ambigu/tidak spesifik',
          'Terlalu panjang',
          'Profesional'
        ],
        correctIndex: 1,
        explanation: '"Dokumen yang bagus" sangat ambigu karena "bagus" bisa ditafsirkan banyak cara. Seharusnya specify apa yang dimaksud "bagus".'
      },
      {
        id: 'q3-2',
        question: 'Apa teknik untuk membuat prompt lebih spesifik?',
        options: [
          'Gunakan kata-kata sederhana',
          'Ganti kata ambigu dengan kata konkrit dan angka',
          'Tambahkan banyak emoji',
          'Gunakan bahasa Inggris saja'
        ],
        correctIndex: 1,
        explanation: 'Teknik specificty: ganti kata ambigu dengan konkrit, gunakan angka untuk quantity, specify timeframe, dan gunakan role yang spesifik.'
      },
      {
        id: 'q3-3',
        question: '"100-150 kata" adalah contoh dari...?',
        options: [
          'Kata ambigu',
          'Kata konkrit dengan angka spesifik',
          'Bahasa Inggris teknis',
          'Format yang salah'
        ],
        correctIndex: 1,
        explanation: 'Menggunakan angka spesifik (seperti "100-150 kata") lebih baik daripada kata ambigu seperti "tidak terlalu panjang".'
      },
      {
        id: 'q3-4',
        question: 'Jika kata-kata bisa ditafsirkan lebih dari satu cara, apa yang harus dilakukan?',
        options: [
          'Biarkan saja karena AI akan mengerti',
          'Tambahkan lebih banyak emoji',
          'Perjelas dengan definisi atau konteks tambahan',
          'Gunakan kata yang lebih sulit'
        ],
        correctIndex: 2,
        explanation: 'Jika ada ambiguitas, harus diperjelas dengan memberikan definisi atau konteks tambahan untuk memastikan AI memahami maksud.'
      },
      {
        id: 'q3-5',
        question: '"3 bulan terakhir" vs "baru-baru ini" - mana yang lebih baik?',
        options: [
          '"Baru-baruan ini" karena lebih natural',
          '"3 bulan terakhir" karena lebih spesifik',
          'Keduanya sama saja',
          '"Baru-baruan ini" karena lebih pendek'
        ],
        correctIndex: 1,
        explanation: '"3 bulan terakhir" lebih baik karena menggunakan timeframe spesifik, tidak seperti "baru-baruan ini" yang ambigu.'
      }
    ]
  },
  {
    id: 'quiz-4',
    lessonId: 'lesson-4',
    questions: [
      {
        id: 'q4-1',
        question: 'Mengapa konteks penting dalam prompt?',
        options: [
          'Tidak penting sama sekali',
          'Membantu AI memahami situasi spesifik agar output lebih relevan',
          'Hanya untuk tampilan profesional',
          'Membuat prompt lebih panjang'
        ],
        correctIndex: 1,
        explanation: 'Tanpa konteks, AI bekerja dengan asumsi default. Dengan konteks yang tepat, AI bisa menyesuaikan respons sesuai kebutuhan spesifik.'
      },
      {
        id: 'q4-2',
        question: 'Apa itu Few-Shot Prompting?',
        options: [
          'Teknik memberikan 100+ contoh',
          'Teknik memberikan beberapa contoh dalam prompt untuk menunjukkan pola',
          'Teknik prompt untuk object detection',
          'Teknik menulis prompt dalam 5 shot'
        ],
        correctIndex: 1,
        explanation: 'Few-shot prompting adalah teknik memberikan beberapa contoh (biasanya 2-3) dalam prompt untuk menunjukkan pola yang diinginkan.'
      },
      {
        id: 'q4-3',
        question: 'Berapa banyak contoh yang biasanya cukup untuk Few-Shot?',
        options: [
          '1 contoh',
          '10-20 contoh',
          '2-3 contoh berkualitas tinggi',
          '100+ contoh'
        ],
        correctIndex: 2,
        explanation: '2-3 contoh berkualitas tinggi biasanya sudah cukup untuk menangkap pola. Lebih baik sedikit contoh berkualitas tinggi daripada banyak contoh medioker.'
      },
      {
        id: 'q4-4',
        question: 'Mana yang merupakan konteks yang baik?',
        options: [
          '"Jelaskan tentang marketing"',
          '"Jelaskan content marketing untuk brand fashion sustainable di Indonesia. Audience: millenial urban. Budget: Rp 5jt/bulan."',
          '"Marketing itu penting"',
          '"Buatkan materi marketing"'
        ],
        correctIndex: 1,
        explanation: 'Konteks yang baik include: industri, target audience, budget, dan goal. Ini membantu AI memberikan respons yang lebih relevan.'
      },
      {
        id: 'q4-5',
        question: 'Template konteks biasanya meliputi informasi apa saja?',
        options: [
          'Hanya nama produk',
          'Background, Audience, Goals, dan Constraints',
          'Hanya budget',
          'Hanya nama brand'
        ],
        correctIndex: 1,
        explanation: 'Template konteks lengkap biasanya meliputi: Background (brand/product), Audience (demografi & psychographics), Goals (tujuan), dan Constraints (budget, timeline, brand guidelines).'
      }
    ]
  },
  {
    id: 'quiz-5',
    lessonId: 'lesson-5',
    questions: [
      {
        id: 'q5-1',
        question: 'Apa keuntungan utama dari specifying format output?',
        options: [
          'Membuat prompt lebih panjang',
          'Output langsung bisa dipakai tanpa rework manual',
          'Menambah biaya API',
          'Tidak ada keuntungan'
        ],
        correctIndex: 1,
        explanation: 'Format yang tepat membuat hasil langsung actionable. Tanpa format specification, kamu mungkin perlu rework manual.'
      },
      {
        id: 'q5-2',
        question: 'Format output yang umum digunakan termasuk...?',
        options: [
          'Hanya JSON',
          'JSON, list, table, paragraph, email format',
          'Hanya bullet points',
          'Hanya PDF'
        ],
        correctIndex: 1,
        explanation: 'Format umum meliputi: JSON, bullet list, table, paragraph, email format, dan lainnya sesuai kebutuhan.'
      },
      {
        id: 'q5-3',
        question: 'Kapan sebaiknya specify format di prompt?',
        options: [
          'Di akhir prompt',
          'Tidak perlu specify',
          'Di awal prompt, sebagai prioritas',
          'Hanya untuk advanced users'
        ],
        correctIndex: 2,
        explanation: 'Format sebaiknya specify di awal prompt karena ini prioritas tinggi yang mempengaruhi seluruh struktur output.'
      },
      {
        id: 'q5-4',
        question: 'Bisa nggak kombinasi beberapa format dalam satu prompt?',
        options: [
          'Tidak, harus satu format saja',
          'Ya, bisa kombinasi sesuai kebutuhan',
          'Hanya 2 format',
          'Hanya untuk premium users'
        ],
        correctIndex: 1,
        explanation: 'Bisa kombinasi format dalam satu prompt. Misalnya: "Generate 5 ide dalam format list, kemudian expand ide #1 dalam paragraph 100 kata."'
      },
      {
        id: 'q5-5',
        question: 'Format "table" paling cocok untuk?',
        options: [
          'Menulis cerita',
          'Perbandingan data atau informasi terstruktur',
          'Email formal',
          'Caption social media'
        ],
        correctIndex: 1,
        explanation: 'Format table paling cocok untuk data yang perlu dibandingkan atau informasi yang terstruktur dengan jelas (misalnya: perbandingan kompetitor, timeline project).'
      }
    ]
  },
  {
    id: 'quiz-6',
    lessonId: 'lesson-6',
    questions: [
      {
        id: 'q6-1',
        question: 'Apa itu Chain of Thought (CoT) Prompting?',
        options: [
          'Teknik meminta AI untuk berpikir langkah demi langkah sebelum memberikan jawaban',
          'Teknik untuk membuat AI lebih cepat',
          'Teknik untuk menghemat token',
          'Teknik untuk membuat AI lebih kreatifs'
        ],
        correctIndex: 0,
        explanation: 'CoT adalah teknik meminta AI menjelaskan proses berpikirnya langkah demi langkah sebelum memberikan jawaban akhir.'
      },
      {
        id: 'q6-2',
        question: 'Kapan Chain of Thought paling efektif?',
        options: [
          'Untuk tugas sederhana',
          'Untuk masalah yang butuh reasoning berjenjang atau keputusan kompleks',
          'Hanya untuk matematika',
          'Untuk semua jenis prompt'
        ],
        correctIndex: 1,
        explanation: 'CoT paling efektif untuk: masalah yang butuh reasoning berjenjang, keputusan dengan banyak faktor, dan analisis yang butuh transparansi proses.'
      },
      {
        id: 'q6-3',
        question: 'Apa keuntungan CoT dibanding jawaban langsung?',
        options: [
          'Lebih cepat',
          'Lebih murah',
          'Output lebih terverifikasi dan transparan',
          'Tidak ada keuntungan'
        ],
        correctIndex: 2,
        explanation: 'CoT membuat output lebih terverifikasi dan transparan karena reasoningnya bisa di-check, tidak hanya jawaban finalnya.'
      },
      {
        id: 'q6-4',
        question: '"Kenapa" sama pentingnya dengan "apa" dalam konteks CoT adalah karena?',
        options: [
          'Karena "kenapa" lebih panjang',
          'Karena transparansi proses sama pentingnya dengan hasil',
          'Karena "kenapa" lebih sulit',
          'Tidak ada alasan khusus'
        ],
        correctIndex: 1,
        explanation: 'Dalam CoT, "bagaimana AI sampai ke jawaban" sama pentingnya dengan "jawaban apa" karena prosesnya bisa diverifikasi.'
      },
      {
        id: 'q6-5',
        question: 'Struktur CoT basic meliputi?',
        options: [
          'Hanya jawaban final',
          'Langkah-langkah reasoning + kesimpulan',
          'Hanya pertanyaan',
          'Hanya thanks dan goodbye'
        ],
        correctIndex: 1,
        explanation: 'Struktur CoT basic meliputi: pertanyaan/soal, langkah-langkah reasoning, dan kesimpulan/jawaban final.'
      }
    ]
  },
  {
    id: 'quiz-7',
    lessonId: 'lesson-7',
    questions: [
      {
        id: 'q7-1',
        question: 'Few-Shot Prompting adalah teknik...?',
        options: [
          'Memberikan satu contoh panjang',
          'Memberikan beberapa contoh dalam prompt untuk menunjukkan pola',
          'Mengurangi jumlah kata dalam prompt',
          'Membagi prompt jadi beberapa bagian'
        ],
        correctIndex: 1,
        explanation: 'Few-shot prompting adalah teknik memberikan beberapa contoh (biasanya 2-3) untuk menunjukkan pola yang diinginkan.'
      },
      {
        id: 'q7-2',
        question: 'Berapa contoh yang disarankan untuk Few-Shot?',
        options: [
          '10+ contoh',
          '100+ contoh',
          '2-3 contoh berkualitas tinggi',
          'Tidak perlu contoh'
        ],
        correctIndex: 2,
        explanation: '2-3 contoh berkualitas tinggi sudah cukup. Sedikit contoh berkualitas lebih baik dari banyak contoh medioker.'
      },
      {
        id: 'q7-3',
        question: 'Apa efek dari memberikan contoh berkualitas tinggi?',
        options: [
          'AI akan copy-paste contoh',
          'AI menangkap pola tone, struktur, gaya dan mengaplikasikannya',
          'Tidak ada efek',
          'AI menjadi lebih lambat'
        ],
        correctIndex: 1,
        explanation: 'Dengan contoh berkualitas, AI menangkap pola termasuk tone, struktur, emoji usage, hashtag style, dan mengaplikasikannya ke request baru.'
      },
      {
        id: 'q7-4',
        question: 'Apa tips utama untuk Few-Shot yang efektif?',
        options: [
          'Contoh harus random',
          'Contoh harus representatif dan berkualitas tinggi',
          'Contoh harus panjang',
          'Tidak perlu tips khusus'
        ],
        correctIndex: 1,
        explanation: 'Tips Few-Shot: contoh harus representatif, berkualitas tinggi, dan semakin mirip contoh dengan desired output, semakin akurat.'
      },
      {
        id: 'q7-5',
        question: 'Few-shot sangat efektif untuk?',
        options: [
          'Semua jenis prompt',
          'Konsistensi gaya, tone, dan format',
          'Hanya untuk coding',
          'Mengurangi biaya'
        ],
        correctIndex: 1,
        explanation: 'Few-shot sangat efektif untuk konsistensi — terutama dalam menjaga gaya penulisan, tone, dan format output.'
      }
    ]
  },
  {
    id: 'quiz-8',
    lessonId: 'lesson-8',
    questions: [
      {
        id: 'q8-1',
        question: 'Apa perbedaan utama System Message dan User Message?',
        options: [
          'Keduanya sama saja',
          'System = instruksi global/persistent, User = request spesifik',
          'System untuk mobile, User untuk desktop',
          'Tidak ada System Message'
        ],
        correctIndex: 1,
        explanation: 'System Message untuk instruksi global yang persist, sedangkan User Message untuk request spesifik yang berubah-ubah.'
      },
      {
        id: 'q8-2',
        question: 'System Message sebaiknya berisi?',
        options: [
          'Request spesifik hari ini',
          'Aturan global, constrain, dan role definition',
          'Pertanyaan user',
          'Feedback hasil'
        ],
        correctIndex: 1,
        explanation: 'System Message sebaiknya berisi: aturan global, constrain, role definition, dan instruksi yang berlaku untuk semua percakapan.'
      },
      {
        id: 'q8-3',
        question: 'Jika platform tidak support System Message, apa yang dilakukan?',
        options: [
          'Tidak bisa pakai constraint',
          'Masukkan di awal User Message dengan [SYSTEM] prefix',
          'Gunakan cara lain',
          'Tidak ada solusi'
        ],
        correctIndex: 1,
        explanation: 'Jika platform tidak support system message, masukkan instruksi global di awal user message dengan [SYSTEM] atau similar prefix.'
      },
      {
        id: 'q8-4',
        question: 'User Message sebaiknya berisi?',
        options: [
          'Aturan brand global',
          'Request spesifik per percakapan yang berubah-ubah',
          'Konfigurasi sistem',
          'Kode program'
        ],
        correctIndex: 1,
        explanation: 'User Message sebaiknya berisi request spesifik yang unik untuk percakapan tersebut dan berubah-ubah setiap request.'
      },
      {
        id: 'q8-5',
        question: 'System Message untuk brand voice bisa include?',
        options: [
          'Hanya nama brand',
          'Brand voice guidelines, tone, format preferences, constraints',
          'Hanya budget',
          'Hanya target audience'
        ],
        correctIndex: 1,
        explanation: 'System Message untuk brand voice bisa include: brand voice description, tone preferences, format requirements, dan constraints.'
      }
    ]
  },
  {
    id: 'quiz-9',
    lessonId: 'lesson-9',
    questions: [
      {
        id: 'q9-1',
        question: 'Apa itu Hallucination dalam konteks AI?',
        options: [
          'AI yang bisa melihat gambar',
          'AI menghasilkan informasi yang terdengar meyakinkan tapi sebenarnya salah atau fiktif',
          'AI yang bisa bermimpi',
          'Fitur premium AI'
        ],
        correctIndex: 1,
        explanation: 'Hallucination adalah saat AI menghasilkan informasi yang terdengar meyakinkan tapi sebenarnya salah atau fiktif — seperti kutipan palsu atau data yang diacak.'
      },
      {
        id: 'q9-2',
        question: 'Apa teknik pencegahan hallucination?',
        options: [
          'Tambah lebih banyak teks',
          'Gunakan emoji',
          'Tambahkan explicit validation request dan minta citation',
          'Gunakan bahasa Inggris'
        ],
        correctIndex: 2,
        explanation: 'Teknik pencegahan: explicit validation request ("bilang jika tidak yakin"), minta source citation, dan confidence indicator.'
      },
      {
        id: 'q9-3',
        question: 'Kapan "never ship raw AI output" sangat penting?',
        options: [
          'Untuk caption social media',
          'Untuk cerita kreatifs',
          'Untuk informasi kritikal: data, legal, financial, health',
          'Untuk semua hal'
        ],
        correctIndex: 2,
        explanation: 'Never ship raw AI output sangat penting untuk informasi kritikal: data dan statistik, legal/financial advice, health information, dan kutipan.'
      },
      {
        id: 'q9-4',
        question: 'Confidence indicator dalam prompt berarti?',
        options: [
          'AI harus percaya diri',
          'AI menandai confidence level untuk setiap klaim',
          'User harus percaya output AI',
          'Tidak ada confidence indicator'
        ],
        correctIndex: 1,
        explanation: 'Confidence indicator meminta AI untuk menandai setiap klaim dengan level keyakinan: High (fakta verified), Medium (general knowledge), Low (spekulasi).'
      },
      {
        id: 'q9-5',
        question: 'Contoh hallucination yang umum?',
        options: [
          '"Menurut weather forecast..."',
          '"According to a 2023 study by McKinsey..." yang sebenarnya tidak ada',
          '"Hari ini Senin..."',
          '"Harga beras naik..."'
        ],
        correctIndex: 1,
        explanation: 'Hallucination umum: AI membuat kutipan atau statistik yang terdengar valid tapi sebenarnya fiktif atau diacak-acak.'
      }
    ]
  },
  {
    id: 'quiz-10',
    lessonId: 'lesson-10',
    questions: [
      {
        id: 'q10-1',
        question: 'Apa itu Iterative Refinement?',
        options: [
          'Menulis prompt sekali jadi',
          'Proses memperbaiki prompt secara bertahap sampai puas',
          'Menghapus prompt lama',
          'Menyalin prompt orang lain'
        ],
        correctIndex: 1,
        explanation: 'Iterative refinement adalah proses memperbaiki prompt secara bertahap — test, evaluate, adjust, repeat — sampai mendapat hasil yang diinginkan.'
      },
      {
        id: 'q10-2',
        question: 'Apa langkah pertama dalam iteration framework?',
        options: [
          'Evaluate',
          'Adjust',
          'Start dengan buat prompt v1',
          'Repeat'
        ],
        correctIndex: 2,
        explanation: 'Iteration framework dimulai dengan: 1) START - Buat prompt v1, 2) TEST - Run dan observe, 3) EVALUATE - Identifikasi issue, 4) ADJUST - Modifikasi, 5) REPEAT.'
      },
      {
        id: 'q10-3',
        question: 'Mengapa dokumentasi iterasi penting?',
        options: [
          'Tidak penting',
          'Membuat prompt library yang berharga untuk masa depan',
          'Hanya untuk portfolio',
          'Untuk di-share ke social media'
        ],
        correctIndex: 1,
        explanation: 'Dokumentasi iterasi penting karena jadi prompt library yang berharga — bisa reuse di masa depan dan belajar dari proses.'
      },
      {
        id: 'q10-4',
        question: 'Prompt journal berguna untuk?',
        options: [
          'Menulis diary',
          'Reusable asset yang bisa improve seiring waktu',
          'Menyimpan password',
          'Tidak berguna'
        ],
        correctIndex: 1,
        explanation: 'Prompt journal/reusable asset yang bisa terus improve seiring pengalaman dan insight baru.'
      },
      {
        id: 'q10-5',
        question: 'Seberapa sering first prompt langsung sempurna?',
        options: [
          'Sering',
          'Selalu',
          'Rarely/sangat jarang',
          'Tidak tahu'
        ],
        correctIndex: 2,
        explanation: 'Rarely your first prompt will be perfect. Iterasi itu normal dan bagian dari proses untuk mendapat hasil terbaik.'
      }
    ]
  },
  {
    id: 'quiz-11',
    lessonId: 'lesson-11',
    questions: [
      {
        id: 'q11-1',
        question: 'Apa itu Prompt Patterns?',
        options: [
          'Bug dalam AI',
          'Template atau struktur yang sudah terbukti efektif untuk use case tertentu',
          'Pola keyboard untuk typing',
          'Urutan kata yang salah'
        ],
        correctIndex: 1,
        explanation: 'Prompt patterns adalah template atau struktur yang sudah terbukti efektif untuk jenis tugas tertentu — reusable solution.'
      },
      {
        id: 'q11-2',
        question: 'RPG Pattern dalam prompt berarti?',
        options: [
          'Random Password Generator',
          'Role-Play-Give Examples',
          'Rapid Professional Growth',
          'Request-Process-Generate'
        ],
        correctIndex: 1,
        explanation: 'RPG = Role-Play-Give Examples. Pattern: assign role, play as that role, give examples of ideal response.'
      },
      {
        id: 'q11-3',
        question: 'Questionnaire Pattern cocok untuk?',
        options: [
          'Menulis cerita',
          'Extract information secara sistematis sebelum generate output',
          'Coding',
          'Gaming'
        ],
        correctIndex: 1,
        explanation: 'Questionnaire pattern digunakan untuk collect information secara sistematis dari user sebelum generate desired output.'
      },
      {
        id: 'q11-4',
        question: 'Prompt patterns bisa dikombinasikan?',
        options: [
          'Tidak pernah',
          'Ya, bisa dikombinasikan untuk solusi kreatif',
          'Hanya 2 pattern',
          'Hanya untuk expert'
        ],
        correctIndex: 1,
        explanation: 'Patterns bisa dikombinasikan. Contoh: RPG + Questionnaire = AI yang role-play sambil collect information.'
      },
      {
        id: 'q11-5',
        question: 'Berapa banyak patterns utama yang disarankan untuk dikuasai?',
        options: [
          '1 pattern',
          '50+ patterns',
          '3-5 patterns utama',
          'Tidak perlu pattern'
        ],
        correctIndex: 2,
        explanation: 'Disarankan untuk menguasai 3-5 patterns utama dulu, lalu bisa kombinasi atau eksplorasi patterns lanjutan.'
      }
    ]
  },
  {
    id: 'quiz-12',
    lessonId: 'lesson-12',
    questions: [
      {
        id: 'q12-1',
        question: 'Apa itu Prompt Library?',
        options: [
          'Aplikasi untuk menyimpan prompt',
          'Koleksi prompt yang sudah teruji dan terdokumentasi',
          'Website untuk download prompt',
          'Software untuk generate prompt'
        ],
        correctIndex: 1,
        explanation: 'Prompt library adalah koleksi prompt yang sudah teruji dan terdokumentasi dengan baik untuk reuse dan improvement.'
      },
      {
        id: 'q12-2',
        question: 'Apa keuntungan memiliki prompt library yang baik?',
        options: [
          'Hanya untuk keren',
          'Consistent output quality, faster workflow, easy to share, continuous improvement',
          'Menambah biaya',
          'Tidak ada keuntungan'
        ],
        correctIndex: 1,
        explanation: 'Prompt library yang baik memberikan: consistent quality, faster workflow, easy team sharing, dan continuous improvement.'
      },
      {
        id: 'q12-3',
        question: 'Dokumentasi prompt yang baik sebaiknya include?',
        options: [
          'Hanya prompt text',
          'Title, use case, prompt, variables, example output, version history',
          'Hanya nama prompt',
          'Hanya screenshot'
        ],
        correctIndex: 1,
        explanation: 'Dokumentasi lengkap meliputi: Title & Category, Use Case Description, The Prompt, Variables to Customize, Example Output, Version History, Notes.'
      },
      {
        id: 'q12-4',
        question: 'Prompt library sebaiknya diperlakukan sebagai?',
        options: [
          'Final document yang fixed',
          'Living document yang terus diupdate',
          'Rahasia perusahaan',
          'Tidak perlu di-maintain'
        ],
        correctIndex: 1,
        explanation: 'Prompt library adalah living document. Setiap insight baru, update prompt yang sesuai. Batch review setiap bulan.'
      },
      {
        id: 'q12-5',
        question: 'Apa langkah selanjutnya setelah menyelesaikan kursus ini?',
        options: [
          'Lupa semua materi',
          'Terus praktik dan eksplorasi',
          'Hapus semua catatan',
          'Tidak perlu apply skill'
        ],
        correctIndex: 1,
        explanation: 'Setelah kursus: terus praktik, eksplorasi, dan apply skill. Prompt engineering adalah skill yang terus berkembang.'
      }
    ]
  }
];
