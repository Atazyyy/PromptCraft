import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Save, Trash2, BookOpen, Briefcase, Palette, Sparkles, Check, Code, Globe } from 'lucide-react';
import { Container, Section } from '../components/layout';
import { Card, Button, Input } from '../components/ui';
import { useProgress } from '../context/ProgressContext';
import { promptTemplates } from '../data/templates';
import { SavedPrompt } from '../types';

const categoryIcons = {
  'starter': Sparkles,
  'social-media': BookOpen,
  'business': Briefcase,
  'creative': Palette,
  'website': Globe,
};

const categoryLabels = {
  'starter': 'Starter',
  'social-media': 'Social Media',
  'business': 'Business',
  'creative': 'Creative',
  'website': 'Website',
};

export function PlaygroundPage() {
  const { progress, savePrompt, deletePrompt } = useProgress();
  const [activeTab, setActiveTab] = useState<'templates' | 'saved'>('templates');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [promptTitle, setPromptTitle] = useState('');
  const [copied, setCopied] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);

  const categories = ['all', 'starter', 'social-media', 'business', 'creative', 'website'];

  const filteredTemplates = selectedCategory === 'all'
    ? promptTemplates
    : promptTemplates.filter(t => t.category === selectedCategory);

  const handleUseTemplate = (template: typeof promptTemplates[0]) => {
    setCurrentPrompt(template.template);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    if (!promptTitle.trim() || !currentPrompt.trim()) return;

    const newPrompt: SavedPrompt = {
      id: `prompt-${Date.now()}`,
      title: promptTitle,
      content: currentPrompt,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    savePrompt(newPrompt);
    setPromptTitle('');
    setShowSaveModal(false);
  };

  const handleLoadPrompt = (prompt: SavedPrompt) => {
    setCurrentPrompt(prompt.content);
  };

  return (
    <div className="min-h-screen">
      <Section className="pb-8">
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-heading font-bold mb-4">
              Prompt <span className="gradient-text">Playground</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Gunakan template atau buat promptmu sendiri. Save dan load prompt kapan saja!
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setActiveTab('templates')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                    activeTab === 'templates'
                      ? 'bg-accent-primary text-white'
                      : 'bg-bg-secondary text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Templates
                </button>
                <button
                  onClick={() => setActiveTab('saved')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-all relative ${
                    activeTab === 'saved'
                      ? 'bg-accent-primary text-white'
                      : 'bg-bg-secondary text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Saved
                  {progress.savedPrompts.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent-secondary text-white text-xs flex items-center justify-center">
                      {progress.savedPrompts.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Category Filter */}
              {activeTab === 'templates' && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedCategory === cat
                          ? 'bg-accent-primary text-white'
                          : 'bg-bg-secondary text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {cat === 'all' ? 'Semua' : categoryLabels[cat as keyof typeof categoryLabels]}
                    </button>
                  ))}
                </div>
              )}

              {/* Template/Saved List */}
              <div className="space-y-3">
                {activeTab === 'templates' ? (
                  filteredTemplates.map((template) => {
                    const Icon = categoryIcons[template.category];
                    return (
                      <Card
                        key={template.id}
                        hoverable
                        padding="sm"
                        className="cursor-pointer"
                        onClick={() => handleUseTemplate(template)}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            template.category === 'starter' ? 'bg-accent-primary/20' :
                            template.category === 'social-media' ? 'bg-accent-success/20' :
                            template.category === 'business' ? 'bg-accent-warning/20' :
                            template.category === 'website' ? 'bg-accent-secondary/20' :
                            'bg-accent-secondary/20'
                          }`}>
                            <Icon className={`w-5 h-5 ${
                              template.category === 'starter' ? 'text-accent-primary' :
                              template.category === 'social-media' ? 'text-accent-success' :
                              template.category === 'business' ? 'text-accent-warning' :
                              template.category === 'website' ? 'text-accent-secondary' :
                              'text-accent-secondary'
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm mb-1">{template.title}</h4>
                            <p className="text-text-secondary text-xs line-clamp-2">
                              {template.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })
                ) : (
                  progress.savedPrompts.length === 0 ? (
                    <Card className="text-center py-8">
                      <Save className="w-10 h-10 text-text-secondary mx-auto mb-3" />
                      <p className="text-text-secondary text-sm">
                        Belum ada prompt tersimpan.
                        <br />
                        Buat dan simpan prompt pertamamu!
                      </p>
                    </Card>
                  ) : (
                    progress.savedPrompts.map((prompt) => (
                      <Card
                        key={prompt.id}
                        hoverable
                        padding="sm"
                        className="group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div
                            className="flex-1 min-w-0 cursor-pointer"
                            onClick={() => handleLoadPrompt(prompt)}
                          >
                            <h4 className="font-medium text-sm mb-1">{prompt.title}</h4>
                            <p className="text-text-secondary text-xs">
                              {new Date(prompt.updatedAt).toLocaleDateString('id-ID')}
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deletePrompt(prompt.id);
                            }}
                            className="p-1.5 rounded-lg text-text-secondary hover:text-accent-error hover:bg-accent-error/10 transition-all opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </Card>
                    ))
                  )
                )}
              </div>
            </motion.div>

            {/* Editor */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card padding="none" className="h-full flex flex-col">
                {/* Editor Header */}
                <div className="flex items-center justify-between p-4 border-b border-bg-tertiary">
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-accent-primary" />
                    <h3 className="font-medium">Prompt Editor</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopy}
                      leftIcon={copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setShowSaveModal(true)}
                      leftIcon={<Save className="w-4 h-4" />}
                      disabled={!currentPrompt.trim()}
                    >
                      Save
                    </Button>
                  </div>
                </div>

                {/* Text Area */}
                <div className="flex-1 p-4">
                  <textarea
                    value={currentPrompt}
                    onChange={(e) => setCurrentPrompt(e.target.value)}
                    placeholder="Tulis promptmu di sini, atau pilih template dari sidebar...

Tips:
- Gunakan {{variable}} untuk placeholder
- Specify role, task, context, format, constraints
- Semakin spesifik, semakin baik hasilnya"
                    className="w-full h-[400px] lg:h-full bg-bg-primary border border-bg-tertiary rounded-xl p-4 text-text-primary font-mono text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary resize-none"
                  />
                </div>

                {/* Tips */}
                <div className="p-4 border-t border-bg-tertiary">
                  <p className="text-xs text-text-secondary">
                    💡 Tips: Gunakan placeholder <code className="bg-bg-tertiary px-1.5 py-0.5 rounded text-accent-primary">{'{{variable}}'}</code> untuk menandai bagian yang perlu di-customize.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Save Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-bg-secondary rounded-2xl border border-bg-tertiary w-full max-w-md p-6"
          >
            <h3 className="text-xl font-heading font-semibold mb-4">Save Prompt</h3>
            <Input
              label="Nama Prompt"
              value={promptTitle}
              onChange={(e) => setPromptTitle(e.target.value)}
              placeholder="Contoh: Instagram Caption Generator"
              className="mb-4"
            />
            <div className="flex gap-3">
              <Button
                variant="ghost"
                onClick={() => setShowSaveModal(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                disabled={!promptTitle.trim()}
                className="flex-1"
              >
                Save
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
