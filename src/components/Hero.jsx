import { ArrowRight, Mail, Sparkles } from 'lucide-react';

export default function Hero({ t }) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-8 animate-bounce">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              UI/UX Designer
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-800 dark:text-white">{t.hero.greeting}</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Leshly Ontiveros
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
            {t.hero.role}
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              {t.hero.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-4 rounded-full font-medium border-2 border-gray-300 dark:border-gray-600 hover:border-purple-600 dark:hover:border-purple-400 hover:shadow-lg hover:scale-105 transition-all"
            >
              <Mail className="w-5 h-5" />
              {t.hero.contact}
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="mt-20 flex justify-center gap-8 opacity-50">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 blur-xl animate-pulse"></div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 blur-xl animate-pulse delay-100"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 blur-xl animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
