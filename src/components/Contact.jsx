import { Mail, Linkedin, Dribbble, Palette } from 'lucide-react';

export default function Contact({ t }) {
  const socialLinks = [
    {
      icon: Mail,
      label: t.contact.email,
      href: 'mailto:leshly.ontiveros@example.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      href: 'https://linkedin.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      label: t.contact.behance,
      href: 'https://behance.net',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Dribbble,
      label: t.contact.dribbble,
      href: 'https://dribbble.com',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-4 bg-gradient-to-br ${link.color} rounded-xl group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {link.href.replace('mailto:', '').replace('https://', '')}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
