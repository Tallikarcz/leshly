import { Heart, Users, Palette, Lightbulb, Target, Zap } from 'lucide-react';

export default function About({ t }) {
  const focusIcons = [Users, Palette, Lightbulb, Target, Zap, Heart];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t.about.description}
            </p>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-2xl border-l-4 border-purple-600">
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                {t.about.highlight}
              </p>
            </div>
          </div>

          {/* Right Side - Focus Areas */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              {t.about.focus}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {t.about.focusItems.map((item, index) => {
                const Icon = focusIcons[index];
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-200 dark:border-gray-700"
                  >
                    <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
