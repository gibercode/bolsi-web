import {
  TrendingUp,
  ShoppingCart,
  ArrowLeftRight,
  ClipboardList,
  WifiOff,
  Share2,
} from 'lucide-react'
import { motion } from 'motion/react'
import styles from './Home.module.css'
import { Reveal } from '../components/Reveal'

const heroEase = [0.16, 1, 0.3, 1] as const
function heroVariant(delay: number) {
  return {
    initial: { opacity: 0, y: 48 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.9, delay, ease: heroEase },
  }
}

function GooglePlayIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
    </svg>
  )
}

const features = [
  {
    Icon: TrendingUp,
    color: '#0062FF',
    bg: '#EEF4FF',
    title: 'Tasas en tiempo real',
    description: 'Consulta el dólar paralelo, USDT y más divisas actualizadas al momento.',
  },
  {
    Icon: ShoppingCart,
    color: '#10B981',
    bg: '#F0FDF4',
    title: 'Listas de compras',
    description: 'Crea listas con precios en múltiples monedas y calcula el total automáticamente.',
  },
  {
    Icon: ArrowLeftRight,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    title: 'Conversión instantánea',
    description: 'Convierte entre USD, EUR, USDT y bolívares con un solo toque.',
  },
  {
    Icon: ClipboardList,
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Tu historial de compras',
    description: 'Revisa todas las listas y operaciones que has guardado, cuando quieras.',
  },
  {
    Icon: WifiOff,
    color: '#EF4444',
    bg: '#FEF2F2',
    title: 'Funciona sin internet',
    description: 'Accede a las últimas tasas guardadas incluso cuando no tienes conexión.',
  },
  {
    Icon: Share2,
    color: '#06B6D4',
    bg: '#ECFEFF',
    title: 'Comparte la tasa del día',
    description: 'Envía las tasas de referencia a tus contactos con un solo toque.',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div {...heroVariant(0)}>
            <div className={styles.badge}>Disponible para Android</div>
          </motion.div>
          <motion.h1 className={styles.heroTitle} {...heroVariant(0.1)}>
            Tu calculadora inteligente para el{' '}
            <span className={styles.highlight}>control de cambio</span>
          </motion.h1>
          <motion.p className={styles.heroSubtitle} {...heroVariant(0.18)}>
            Bolsi te ayuda a manejar tus compras, convertir divisas y seguir el
            tipo de cambio en Venezuela — todo en una sola app, sin complicaciones.
          </motion.p>
          <motion.div className={styles.heroActions} id="download" {...heroVariant(0.26)}>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className={styles.storeBtn}
            >
              <GooglePlayIcon size={20} />
              Descargar en Google Play
            </a>
          </motion.div>
        </div>
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, x: 70, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.18, ease: heroEase }}
        >
          <div className={styles.phoneFrame}>
            <img
              src="/app-screenshot.png"
              alt="Bolsi app — pantalla principal"
              className={styles.appScreenshot}
            />
          </div>
          <div className={styles.phoneShadow} />
        </motion.div>
      </section>

      {/* Features */}
      <section className={styles.features} id="features">
        <div className={styles.sectionContainer}>
          <Reveal className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Funcionalidades</span>
            <h2 className={styles.sectionTitle}>Todo lo que necesitas en una sola app</h2>
            <p className={styles.sectionSubtitle}>
              Diseñada para los venezolanos que manejan múltiples monedas en su día a día.
            </p>
          </Reveal>
          <div className={styles.featuresGrid}>
            {features.map(({ Icon, color, bg, title, description }, i) => (
              <Reveal key={title} delay={i * 0.07} style={{ height: '100%' }}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIconWrap} style={{ background: bg }}>
                    <Icon size={22} color={color} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>{title}</h3>
                    <p className={styles.featureDesc}>{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <Reveal className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Descarga Bolsi hoy, es gratis</h2>
          <p className={styles.ctaSubtitle}>
            Únete a miles de usuarios que ya controlan su economía con Bolsi.
          </p>
          <a href="https://play.google.com" target="_blank" rel="noreferrer" className={styles.storeBtnLight}>
            <GooglePlayIcon size={18} />
            Descargar en Google Play
          </a>
        </Reveal>
      </section>
    </div>
  )
}
