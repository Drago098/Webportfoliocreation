import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';

interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  year: number;
  current?: boolean;
  responsibilities: string[];
  metrics?: string[];
}

export function WorkExperience() {
  const experiences: Experience[] = [
    {
      company: "Scanvue AI",
      position: "Lead AI Scientist",
      location: "Remote",
      startDate: "May 2025",
      endDate: "Present",
      year: 2025,
      current: true,
      responsibilities: [
        "Building end-to-end computer vision systems for clinical TB screening and livestock biometric identification — shipped first production release (ScanView v3.0.4) with DICOM support and auto-generated clinical PDF reports.",
        "Designing a non-invasive bovine identification system using muzzle-pattern recognition, eliminating the need for physical ear tags in livestock tracking.",
        "Owns full ML lifecycle: data strategy, annotation, model training, evaluation, and deployment-ready inference API.",
        "Driving applied research across medical imaging and animal biometrics, translating novel CV architectures into production-grade systems.",
      ],
      metrics: [],
    },
    {
      company: "TATA Consultancy Services",
      position: "Data Analyst",
      location: "New Delhi, India",
      startDate: "Dec 2021",
      endDate: "May 2025",
      year: 2021,
      responsibilities: [
        "Coordinated in designing queries for extraction of data as required by Clients using Oracle SQL, HiveQL and ImpalaQL.",
        "Collaborated with other team members to design classification models using ensemble and boosting methods to classify customers as delinquent/non-delinquent which increased the test accuracy to 90%.",
        "Helped the client to achieve an increase in customers by 20% by analyzing the best customer based offers in various quarters and collaborating in solving issues by crafting visualization dashboards using Power BI.",
        "Designed a database system to detect, analyse and store the number of failed transactions to detect fraudulent attempts in hive tables by collecting data from various business sources.",
        "Collaborated in designing python scripts for ETL jobs to efficiently collect data from various API's and filter them according to business needs. The ETL design reduced the error in data by 15%.",
      ],
      metrics: ["90% classification accuracy", "20% customer growth", "15% error reduction in ETL"],
    },
    {
      company: "Healthcare Technology Innovation Center",
      position: "Algorithm Developer & Data Science Intern",
      location: "IIT Madras, India",
      startDate: "July 2021",
      endDate: "October 2021",
      year: 2021,
      responsibilities: [
        "Crafted advanced mathematical models identifying key biometrics influenced by exercising; findings provided essential data leading to a redesign of core application features based on user feedback trends reported monthly.",
        "Coordinated with the team in developing and designing other features for the repose app which helped to raise the revenue generation by 10% through the app purchases.",
        "Engineered an ECG based classification model for sleep stage analysis having testing accuracy of 87%.",
      ],
      metrics: ["87% ECG sleep classification accuracy", "10% revenue growth"],
    },
  ];

  const allYears = Array.from(
    new Set(
      experiences.flatMap((exp) => {
        const start = parseInt(exp.startDate.split(' ')[1]);
        const end =
          exp.endDate.toLowerCase() === 'present'
            ? new Date().getFullYear()
            : parseInt(exp.endDate.split(' ')[1]);
        const yearRange = [];
        for (let y = start; y <= end; y++) {
          yearRange.push(y);
        }
        return yearRange;
      })
    )
  ).sort((a, b) => b - a);

  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const filteredExperiences =
    selectedYear === 'all'
      ? experiences
      : experiences.filter((exp) => {
          const start = parseInt(exp.startDate.split(' ')[1]);
          const end =
            exp.endDate.toLowerCase() === 'present'
              ? new Date().getFullYear()
              : parseInt(exp.endDate.split(' ')[1]);
          return selectedYear >= start && selectedYear <= end;
        });

  return (
    <section id="experience" className="min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Work <span className="text-orange-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            My professional journey in AI, data science and analytics
          </p>

          {/* Year Filter */}
          <div className="relative flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <motion.button
              onClick={() => setSelectedYear('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 backdrop-blur-md border ${
                selectedYear === 'all'
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20 border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }}
            >
              All Years
            </motion.button>

            {allYears.map((year) => (
              <motion.button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 backdrop-blur-md border ${
                  selectedYear === year
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20 border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: allYears.indexOf(year) * 0.1 }}
              >
                {year}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-transparent"></div>

          {filteredExperiences.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 py-12"
            >
              No experience found for {selectedYear}
            </motion.div>
          ) : (
            filteredExperiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 md:pl-20 pb-16 last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                {/* Year Badge */}
                <motion.div
                  className="absolute left-[-20px] md:left-[-50px] top-0 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {exp.startDate.split(' ')[1]}
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-[26px] top-2 w-4 h-4 bg-orange-500 rounded-full border-4 border-black z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-orange-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="backdrop-blur-lg bg-white/5 rounded-lg p-6 border border-white/10 hover:border-orange-500 transition-all duration-300 shadow-xl"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 10px 30px -10px rgba(251, 146, 60, 0.3)",
                  }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-2xl text-white font-medium">
                            {exp.position}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-orange-500/20 text-orange-400 border border-orange-500/40 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-orange-400 text-lg font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {exp.startDate} – {exp.endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Metrics */}
                    {exp.metrics && exp.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.metrics.map((m, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-orange-500/10 text-orange-300 rounded border border-orange-500/20"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        className="flex gap-3 text-gray-300 leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + idx * 0.1 + 0.3,
                        }}
                      >
                        <span className="text-orange-400 mt-1 flex-shrink-0">▹</span>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
