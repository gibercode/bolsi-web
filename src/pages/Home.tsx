import styles from './Home.module.css'

const features = [
  {
    icon: '💱',
    title: 'Tasas en tiempo real',
    description: 'Consulta el dólar paralelo, USDT y más tasas de cambio actualizadas al momento.',
  },
  {
    icon: '🛒',
    title: 'Listas de compras inteligentes',
    description: 'Crea listas con precios en múltiples monedas y calcula el total automáticamente.',
  },
  {
    icon: '🔄',
    title: 'Conversión instantánea',
    description: 'Convierte entre USD, EUR, USDT y bolívares con un solo toque.',
  },
  {
    icon: '📊',
    title: 'Historial de tasas',
    description: 'Revisa la evolución del tipo de cambio y toma mejores decisiones financieras.',
  },
  {
    icon: '📵',
    title: 'Funciona sin internet',
    description: 'Accede a las últimas tasas guardadas incluso cuando no tienes conexión.',
  },
  {
    icon: '📤',
    title: 'Comparte la tasa del día',
    description: 'Envía las tasas de referencia a tus contactos con un solo clic.',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Disponible para iOS y Android</div>
          <h1 className={styles.heroTitle}>
            Tu billetera inteligente para el{' '}
            <span className={styles.highlight}>control de cambio</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Bolsi te ayuda a manejar tus compras, convertir divisas y seguir el
            tipo de cambio en Venezuela — todo en una sola app, sin complicaciones.
          </p>
          <div className={styles.heroActions} id="download">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className={styles.storeBtn}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className={styles.storeBtn}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2L14.64 12 3.18.04C2.83 0 2.49.07 2.19.24 1.6.56 1.2 1.2 1.2 2v20c0 .8.4 1.44.99 1.76zm9.06-11.06L4.2 4.66l11.06 6.38-3.02 1.66zm0 1.6l3.02 1.66-11.06 6.38 8.04-8.04zM17.96 7.1l-2.84-1.64L12.3 7.1l2.82 1.62 2.84-1.62zm0 9.8l-2.84-1.62-2.82 1.62 2.84 1.64 2.82-1.64zm1.04-9.18c.56.32.9.92.9 1.58v5.4c0 .66-.34 1.26-.9 1.58l-1.44.83-3.02-1.74v-6.74l3.02-1.74 1.44.83z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneScreen}>
              <div className={styles.mockRate}>
                <span className={styles.mockRateLabel}>Dólar paralelo</span>
                <span className={styles.mockRateValue}>Bs. 48.50</span>
                <span className={styles.mockRateDelta}>+0.3% hoy</span>
              </div>
              <div className={styles.mockCurrencies}>
                {[
                  { flag: '🇺🇸', code: 'USD', rate: '1.00' },
                  { flag: '🇪🇺', code: 'EUR', rate: '1.09' },
                  { flag: '₿', code: 'USDT', rate: '1.01' },
                  { flag: '🇻🇪', code: 'VEF', rate: '0.020' },
                ].map(c => (
                  <div key={c.code} className={styles.mockCurrencyRow}>
                    <span>{c.flag} {c.code}</span>
                    <span className={styles.mockCurrencyRate}>{c.rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.phoneShadow} />
        </div>
      </section>

      {/* Features */}
      <section className={styles.features} id="features">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Funcionalidades</span>
            <h2 className={styles.sectionTitle}>Todo lo que necesitas en una sola app</h2>
            <p className={styles.sectionSubtitle}>
              Diseñada para los venezolanos que manejan múltiples monedas en su día a día.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Descarga Bolsi hoy, es gratis</h2>
          <p className={styles.ctaSubtitle}>
            Únete a miles de usuarios que ya controlan su economía con Bolsi.
          </p>
          <div className={styles.heroActions}>
            <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className={styles.storeBtnLight}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a href="https://play.google.com" target="_blank" rel="noreferrer" className={styles.storeBtnLight}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2L14.64 12 3.18.04C2.83 0 2.49.07 2.19.24 1.6.56 1.2 1.2 1.2 2v20c0 .8.4 1.44.99 1.76zm9.06-11.06L4.2 4.66l11.06 6.38-3.02 1.66zm0 1.6l3.02 1.66-11.06 6.38 8.04-8.04zM17.96 7.1l-2.84-1.64L12.3 7.1l2.82 1.62 2.84-1.62zm0 9.8l-2.84-1.62-2.82 1.62 2.84 1.64 2.82-1.64zm1.04-9.18c.56.32.9.92.9 1.58v5.4c0 .66-.34 1.26-.9 1.58l-1.44.83-3.02-1.74v-6.74l3.02-1.74 1.44.83z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
