import { motion } from 'framer-motion'

const items = [
  {
    city: 'Istanbul',
    country: 'Turkiya',
    img: 'https://bunny-wp-pullzone-nfqzsydbnl.b-cdn.net/wp-content/uploads/2024/07/istanbul-gezilecek-yerler.jpg',
  },
  {
    city: 'Dubay',
    country: 'BAA',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2080&auto=format&fit=crop',
  },
  {
    city: 'Sharm El-Sheyx',
    country: 'Misr',
    img: 'https://image-tc.galaxy.tf/wijpeg-21ucxmgxnm4stluvbuv06o45u/sharm-mosque_standard.jpg?crop=107%2C0%2C1707%2C1280',
  },
  {
    city: 'Bangkok',
    country: 'Tailand',
    img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/98/66/66.jpg',
  },
]

export function Destinations() {
  return (
    <section id="dest" className="relative py-24">
      <div className="container">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Mashhur yo‘nalishlar</h2>
            <p className="text-white/70 mt-2">Siz uchun eng qiziqarli manzillarni tanladik</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((d, idx) => (
            <motion.a
              key={d.city}
              href="#cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img src={d.img} alt={`${d.city}, ${d.country}`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 from-black/0 to-black/60 bg-gradient-to-t" />
              <div className="absolute bottom-0 p-4">
                <div className="text-xl font-semibold">{d.city}</div>
                <div className="text-white/70 text-sm">{d.country}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}


