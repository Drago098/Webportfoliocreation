import { motion } from 'motion/react';
import { useState } from 'react';
import { Code2, Database, Server, Layout, Brain, Eye, Sparkles, Network, HardDrive, Package, GitBranch, Activity } from 'lucide-react';

interface TechStack {
  id: number;
  category: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const techStacks: TechStack[] = [
  {
    id: 1,
    category: "Programming & Data",
    skills: ["Python", "SQL"],
    icon: <Code2 className="w-8 h-8" />,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    category: "Data Engineering & Pipelines",
    skills: ["ETL", "Airflow", "dbt"],
    icon: <Database className="w-8 h-8" />,
    color: "purple",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    category: "Backend & APIs",
    skills: ["FastAPI"],
    icon: <Server className="w-8 h-8" />,
    color: "green",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    category: "Apps & Prototyping (UI)",
    skills: ["Streamlit", "Gradio"],
    icon: <Layout className="w-8 h-8" />,
    color: "orange",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    category: "Machine Learning & Statistical Modeling",
    skills: ["Statistical Modelling", "TensorFlow", "PyTorch"],
    icon: <Brain className="w-8 h-8" />,
    color: "indigo",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    category: "Computer Vision",
    skills: ["YOLO", "Vision Transformers", "DEiT", "Attention Models", "CNNs"],
    icon: <Eye className="w-8 h-8" />,
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    id: 7,
    category: "LLM Engineering / GenAI",
    skills: ["RAG", "Ollama"],
    icon: <Sparkles className="w-8 h-8" />,
    color: "pink",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 8,
    category: "LLM Frameworks & Orchestration",
    skills: ["LangChain", "LangGraph", "LlamaIndex"],
    icon: <Network className="w-8 h-8" />,
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 9,
    category: "Vector Databases & Retrieval",
    skills: ["Chroma DB", "Pinecone"],
    icon: <HardDrive className="w-8 h-8" />,
    color: "teal",
    gradient: "from-teal-500 to-green-500"
  },
  {
    id: 10,
    category: "DevOps / CI/CD & Containerization",
    skills: ["Docker", "CI/CD", "Jenkins"],
    icon: <Package className="w-8 h-8" />,
    color: "blue",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: 11,
    category: "Version Control & Collaboration",
    skills: ["Git"],
    icon: <GitBranch className="w-8 h-8" />,
    color: "orange",
    gradient: "from-orange-600 to-amber-600"
  },
  {
    id: 12,
    category: "Experiment Tracking & ML Lifecycle",
    skills: ["MLflow"],
    icon: <Activity className="w-8 h-8" />,
    color: "green",
    gradient: "from-green-600 to-teal-600"
  }
];

export function TechStackViz() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-20 px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        className="text-center mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-5xl md:text-6xl text-white mb-4">
          Tech Stack{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Arsenal
          </span>
        </h2>
        <p className="text-gray-400 text-lg">Hover over each card to explore my technical expertise</p>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              onHoverStart={() => setHoveredId(stack.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setSelectedId(selectedId === stack.id ? null : stack.id)}
            >
              <motion.div
                className="relative backdrop-blur-xl bg-white/5 border rounded-2xl p-6 h-full overflow-hidden"
                animate={{
                  scale: hoveredId === stack.id ? 1.03 : 1,
                  borderColor: hoveredId === stack.id ? '#ffffff4d' : '#ffffff1a',
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ willChange: 'transform' }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stack.gradient} pointer-events-none`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === stack.id ? 0.1 : 0 }}
                  transition={{ duration: 0.2 }}
                />

                {hoveredId === stack.id && (
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${stack.gradient} rounded-2xl blur-xl pointer-events-none`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ zIndex: -1 }}
                  />
                )}

                <motion.div
                  className={`text-${stack.color}-400 mb-4 flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stack.gradient} bg-opacity-20`}
                  animate={{ scale: hoveredId === stack.id ? 1.1 : 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ willChange: 'transform' }}
                >
                  {stack.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {stack.category}
                </h3>

                <motion.div
                  className="space-y-2"
                  animate={{ opacity: selectedId === stack.id || hoveredId === stack.id ? 1 : 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {stack.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`px-4 py-2 rounded-lg bg-gradient-to-r ${stack.gradient} bg-opacity-10 backdrop-blur-sm border border-white/10 text-white text-sm transition-transform hover:scale-105 duration-200`}
                    >
                      {skill}
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-sm font-bold"
                  animate={{ scale: hoveredId === stack.id ? 1.15 : 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ willChange: 'transform' }}
                >
                  {stack.id}
                </motion.div>

                {hoveredId === stack.id && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${stack.gradient} rounded-full pointer-events-none`}
                        style={{
                          top: `${20 + i * 30}%`,
                          left: `${10 + i * 40}%`,
                        }}
                        animate={{
                          y: [0, -30],
                          opacity: [0.8, 0],
                          scale: [0.5, 1.2],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-16 flex flex-wrap justify-center gap-8 z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {[
          { label: "Tech Categories", value: "12" },
          { label: "Technologies", value: "30+" },
          { label: "Years Experience", value: "5" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center backdrop-blur-xl bg-white/5 border rounded-xl px-8 py-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05, borderColor: '#ffffff4d' }}
          >
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
