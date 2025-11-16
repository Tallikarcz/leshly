import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience({ t }) {
  return (
    <section id="experience" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.experience.title}
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {t.experience.positions.map((position, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 mt-2 ring-4 ring-white dark:ring-gray-900"></div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-3 mb-4">
                      <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                          {position.role}
                        </h3>
                        <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                          {position.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>{position.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {position.description}
                    </p>

                    <div className="space-y-2">
                      {position.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
