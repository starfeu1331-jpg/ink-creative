"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  { name: 'Décor Discount', logo: '/logos/decor-discount.svg', url: 'https://www.decor-discount.com' },
  { name: 'Kerma Concept', logo: '/logos/kerma-concept.svg', url: 'https://www.kermaconcept.com' },
  { name: 'BedInShop', logo: '/logos/bedinshop.svg', url: 'https://www.bedinshop.fr' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

export default function TrustSection() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
            Ils nous font confiance
          </h2>
          <p className="text-white/60 text-lg">
            PME qui ont boosté leur visibilité grâce à l&apos;influence marketing
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              className="group relative"
            >
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-32 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={client.name === 'Kerma Concept' ? 120 : 200}
                      height={80}
                      className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-2">
              +150%
            </div>
            <p className="text-white/60">
              Visibilité moyenne en 3 mois
            </p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-2">
              +200K
            </div>
            <p className="text-white/60">
              Portée cumulée générée
            </p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent mb-2">
              3-6x
            </div>
            <p className="text-white/60">
              ROI moyen sur campagnes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
