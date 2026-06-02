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
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.85, delay, ease: heroEase },
  }
}

function GooglePlayIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
    </svg>
  )
}

function PlayStoreMini({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.playStoreMini}>
      <div className={styles.psIconWrap}>
        <GooglePlayIcon size={15} />
      </div>
      <div className={styles.psInfo}>
        <span className={styles.psName}>Bolsi · Google Play</span>
        <span className={styles.psMeta}>
          <span className={styles.psStars}>★★★★★</span>
          <span className={styles.psFree}>Gratis</span>
        </span>
      </div>
      <svg className={styles.psArrow} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  )
}

type FeatureSize = 'normal' | 'wide' | 'full'

const features: {
  Icon: React.ElementType
  color: string
  bg: string
  title: string
  description: string
  size: FeatureSize
}[] = [
  {
    Icon: TrendingUp,
    color: '#0062FF',
    bg: '#EEF4FF',
    title: 'Tasas en tiempo real',
    description: 'Consulta el dólar paralelo, USDT y más divisas actualizadas al momento, sin demoras.',
    size: 'wide',
  },
  {
    Icon: ArrowLeftRight,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    title: 'Conversión instantánea',
    description: 'Convierte entre USD, EUR, USDT y bolívares con un solo toque.',
    size: 'normal',
  },
  {
    Icon: ShoppingCart,
    color: '#10B981',
    bg: '#F0FDF4',
    title: 'Listas de compras',
    description: 'Crea listas con precios en múltiples monedas y calcula el total automáticamente.',
    size: 'normal',
  },
  {
    Icon: WifiOff,
    color: '#EF4444',
    bg: '#FEF2F2',
    title: 'Funciona sin internet',
    description: 'Accede a las últimas tasas guardadas incluso cuando no tienes conexión.',
    size: 'normal',
  },
  {
    Icon: ClipboardList,
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Tu historial de compras',
    description: 'Revisa todas las listas y operaciones que has guardado, cuando quieras.',
    size: 'normal',
  },
  {
    Icon: Share2,
    color: '#06B6D4',
    bg: '#ECFEFF',
    title: 'Comparte la tasa del día',
    description: 'Envía las tasas de referencia a tus contactos con un solo toque. Ideal para grupos de WhatsApp.',
    size: 'full',
  },
]

function cardClassName(size: FeatureSize) {
  if (size === 'wide') return `${styles.featureCard} ${styles.featureCardWide}`
  if (size === 'full') return `${styles.featureCard} ${styles.featureCardFull}`
  return styles.featureCard
}

function wrapClassName(size: FeatureSize) {
  if (size === 'wide') return styles.featureWrapWide
  if (size === 'full') return styles.featureWrapFull
  return undefined
}

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.gibercode.bolsi'

export default function Home() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>

          <div className={styles.heroContent}>
            <motion.h1 className={styles.heroTitle} {...heroVariant(0)}>
              Tu calculadora para el{' '}
              <span className={styles.highlight}>dólar de hoy</span>
            </motion.h1>

            <motion.p className={styles.heroSubtitle} {...heroVariant(0.1)}>
              Bolsi te ayuda a manejar tus compras, convertir divisas y seguir
              el tipo de cambio en Venezuela — todo en una sola app.
            </motion.p>

            <motion.div className={styles.rateTeaser} {...heroVariant(0.18)}>
              <div className={styles.rateDot} />
              <span className={styles.rateTeaserText}>Tasas actualizadas en tiempo real</span>
            </motion.div>

            <motion.div className={styles.heroActions} id="download" {...heroVariant(0.25)}>
              <a href={PLAY_URL} target="_blank" rel="noreferrer" className={styles.storeBtn}>
                <GooglePlayIcon size={20} />
                Descargar en Google Play
              </a>
            </motion.div>
          </div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, x: 64, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.16, ease: heroEase }}
          >
            <div className={styles.phoneWrap}>
              <div className={`${styles.floatChip} ${styles.floatChipA}`}>
                <div className={styles.chipLabel}>Paralelo hoy</div>
                <div className={styles.chipValue}>Bs 36.50</div>
                <div className={styles.chipChange}>↑ +0.3%</div>
              </div>

              <div className={styles.phoneFrame}>
                <img
                  src="/app-screenshot.png"
                  alt="Bolsi app — pantalla principal"
                  className={styles.appScreenshot}
                />
              </div>

              <div className={`${styles.floatChip} ${styles.floatChipB}`}>
                <div className={styles.chipLabel}>USDT</div>
                <div className={styles.chipValue}>$1.001</div>
                <div className={styles.chipChange}>↑ Estable</div>
              </div>

              <div className={styles.phoneGlow} />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.features} id="features">
        <div className={styles.sectionContainer}>
          <Reveal className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>
              <span className={styles.eyebrowLine} />
              <span>Funciones</span>
            </div>
            <h2 className={styles.sectionTitle}>Todo lo que necesitas en una sola app</h2>
            <p className={styles.sectionSubtitle}>
              Diseñada para los venezolanos que manejan múltiples monedas en su día a día.
            </p>
          </Reveal>

          <div className={styles.featuresGrid}>
            {features.map(({ Icon, color, bg, title, description, size }, i) => (
              <div key={title} className={wrapClassName(size)}>
              <Reveal delay={i * 0.07} style={{ height: '100%' }}>
                <div className={cardClassName(size)}>
                  <div className={styles.featureIconWrap} style={{ background: bg }}>
                    <Icon size={22} color={color} strokeWidth={2} />
                  </div>
                  <div className={styles.featureBody}>
                    <h3 className={styles.featureTitle}>{title}</h3>
                    <p className={styles.featureDesc}>{description}</p>
                  </div>

                </div>
              </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className={styles.ctaWrap}>
        <section className={styles.cta}>
          <Reveal className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Descarga Bolsi hoy,<br />es completamente gratis
            </h2>
            <p className={styles.ctaSubtitle}>
              Únete a miles de usuarios que ya controlan su economía con Bolsi.
            </p>
            <a href={PLAY_URL} target="_blank" rel="noreferrer" className={styles.storeBtnCta}>
              <GooglePlayIcon size={18} />
              Descargar en Google Play
            </a>
          </Reveal>
        </section>
      </div>

    </div>
  )
}
