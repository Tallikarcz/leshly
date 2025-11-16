import { Heart } from 'lucide-react';

export default function Footer({ t }) {
  return (
    <footer className="bg-white/50 dark:bg-gray-900/50 py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© 2024 Leshly Ontiveros.</span>
            <span>{t.footer.rights}</span>
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2 flex items-center justify-center gap-2">
            <span>{t.footer.designed}</span>
            <Heart className="w-4 h-4 text-pink-500 fill-current animate-pulse" />
            <span>{t.footer.by} Leshly</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
