import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  colaburl?: string;
  demoUrl?: string;
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects: Project[] = [
    {
      title: "Physics-Only-Assistant",
      description: "physics-constrained conversational AI system built with ollama+streamlit",
      technologies: ["Python", "Ollama", "RAG", "Streamlit"],
      image: "https://images.unsplash.com/photo-1758685734312-5134968399a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNzJTIwZWR1Y2F0aW9uJTIwc2NpZW5jZXxlbnwxfHx8fDE3NzE3OTI3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Sentiment Analyser App",
      description: "Developed a real-time sentiment analysis system for social media data using NLP techniques. Processed over 1M tweets daily with 88% accuracy.",
      technologies: ["Python", "NLTK", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1605909247405-077c153bc75b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW50aW1lbnQlMjBhbmFseXNpcyUyMGVtb3Rpb25zJTIwZGF0YXxlbnwxfHx8fDE3NzE3OTgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Dog Muzzle Detection",
      description: "A system for identifying unique muzzle pattern on dog nose.",
      technologies: ["Python", "Pytorch", "YOLO", "Vission Transformer", "DEiT", "Attention Models"],
      image: "https://images.unsplash.com/photo-1698522372694-7bf8500a5b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBub3NlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzE3OTgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      //demoUrl: "https://your-dashboard.herokuapp.com"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="min-h-screen py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Featured <span className="text-orange-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A selection of my recent data science work
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative">
        <div className="flex gap-8 px-8 md:px-16 lg:px-24 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-8 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-8 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, scrollYProgress }: { project: Project; index: number; scrollYProgress: any }) {
  const cardRef = useRef(null);
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(cardProgress, [0, 0.5, 1], [100, 0, -100]);
  const opacity = useTransform(cardProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(cardProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const rotateY = useTransform(cardProgress, [0, 0.5, 1], [15, 0, -15]);

  return (
    <motion.div 
      ref={cardRef}
      className="group min-w-[350px] md:min-w-[450px] snap-center"
      style={{ 
        y, 
        opacity, 
        scale,
        perspective: "1000px"
      }}
    >
      <motion.div
        className="backdrop-blur-lg bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-orange-500 transition-all duration-500 h-full shadow-xl"
        style={{ rotateY }}
        whileHover={{ 
          y: -12,
          rotateY: 0,
          transition: { duration: 0.3 }
        }}
      >
        <div className="relative h-72 overflow-hidden bg-gray-800">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        </div>
        
        <div className="p-6">
          <motion.h3 
            className="text-2xl text-white mb-3 group-hover:text-orange-400 transition-colors font-medium"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-400 mb-4 leading-relaxed min-h-[60px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {project.description}
          </motion.p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <motion.span 
                key={techIndex}
                className="px-3 py-1 text-xs bg-gray-800 text-orange-400 rounded-full border border-gray-700 group-hover:border-orange-500 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + techIndex * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          <div className="flex gap-4 pt-4 border-t border-gray-800">
            {project.demoUrl && (
              <motion.a 
                href={project.demoUrl}
                className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors font-medium"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}