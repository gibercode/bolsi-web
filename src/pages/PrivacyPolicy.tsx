import styles from './PrivacyPolicy.module.css'

const sections = [
  {
    title: '1. Información que recopilamos',
    content: `Bolsi recopila únicamente la información necesaria para brindarte el mejor servicio posible.

Datos que recopilamos automáticamente:
• Tipo de dispositivo y sistema operativo
• Versión de la aplicación
• Datos de uso anónimos (pantallas visitadas, funciones usadas)
• Información de fallos y errores (crash reports)

Datos que tú proporcionas:
• Listas de compras que creas dentro de la app (almacenadas localmente en tu dispositivo)
• Tasas de cambio personalizadas que configures

No recopilamos: nombre, correo electrónico, número de teléfono, datos bancarios, ni ningún tipo de información de identificación personal a menos que tú nos la proporciones voluntariamente para soporte.`,
  },
  {
    title: '2. Cómo usamos tu información',
    content: `La información recopilada se utiliza exclusivamente para:

• Mejorar la estabilidad y el rendimiento de la aplicación
• Analizar patrones de uso para desarrollar nuevas funciones
• Solucionar errores y problemas técnicos
• Actualizar las tasas de cambio mostradas en la app

Nunca utilizamos tu información para publicidad dirigida de terceros ni la vendemos a terceros bajo ninguna circunstancia.`,
  },
  {
    title: '3. Almacenamiento de datos',
    content: `La mayoría de los datos de Bolsi se almacenan localmente en tu dispositivo:

• Tus listas de compras se guardan en el almacenamiento local de tu teléfono
• Las tasas de cambio se cachean localmente para uso sin conexión
• Las tasas personalizadas que configures se guardan solo en tu dispositivo

Los datos de analíticas anónimas se transmiten de forma segura a nuestros servidores utilizando encriptación SSL/TLS. Estos datos se conservan por un máximo de 12 meses.`,
  },
  {
    title: '4. Compartir información con terceros',
    content: `Bolsi no vende, arrienda ni comercializa tu información personal.

Podemos compartir datos anónimos y agregados con:
• Servicios de análisis (Firebase Analytics / Google Analytics) para entender el uso de la app
• Servicios de reporte de errores (Crashlytics) para mejorar la estabilidad

Estos proveedores están contractualmente obligados a proteger tu información y no pueden usarla para sus propios fines.

En caso de fusión, adquisición o venta de activos, te notificaremos antes de que tu información sea transferida.`,
  },
  {
    title: '5. Tasas de cambio',
    content: `Las tasas de cambio que muestra Bolsi son referenciales y se obtienen de fuentes públicas disponibles. Bolsi no garantiza la exactitud, completitud o vigencia de estas tasas.

No debes utilizar las tasas mostradas en Bolsi para transacciones financieras oficiales. Consulta siempre fuentes oficiales o entidades financieras autorizadas.`,
  },
  {
    title: '6. Privacidad de menores',
    content: `Bolsi no está diseñada para niños menores de 13 años y no recopila conscientemente información personal de menores.

Si eres padre o tutor y crees que tu hijo ha proporcionado información personal, contáctanos y tomaremos medidas para eliminarla de inmediato.`,
  },
  {
    title: '7. Tus derechos',
    content: `Tienes derecho a:

• Acceder a los datos que tenemos sobre ti
• Solicitar la corrección de datos incorrectos
• Solicitar la eliminación de tus datos personales
• Oponerte al procesamiento de tus datos
• Portabilidad de datos

Para ejercer cualquiera de estos derechos, contáctanos a través de la app. Responderemos a tu solicitud en un plazo máximo de 30 días.`,
  },
  {
    title: '8. Cambios a esta política',
    content: `Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos de cualquier cambio significativo mediante:

• Una notificación dentro de la aplicación
• Una actualización de la fecha "Última actualización" al pie de esta página

Te recomendamos revisar esta política periódicamente. El uso continuo de Bolsi después de los cambios constituye tu aceptación de la política actualizada.`,
  },
  {
    title: '9. Contacto',
    content: `Si tienes preguntas, comentarios o inquietudes sobre esta Política de Privacidad o el manejo de tus datos, puedes contactarnos a través de la aplicación.

Nos comprometemos a responder todas tus consultas y a trabajar contigo para resolver cualquier preocupación sobre tu privacidad.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>Legal</span>
          </div>
          <h1 className={styles.title}>Política de Privacidad</h1>
          <p className={styles.subtitle}>
            En Bolsi tomamos tu privacidad muy en serio. Esta política explica qué
            información recopilamos, cómo la usamos y cómo la protegemos.
          </p>
          <p className={styles.date}>Última actualización: 30 de abril de 2026</p>
        </header>

        <div className={styles.content}>
          {sections.map(s => (
            <section key={s.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{s.title}</h2>
              <div className={styles.sectionContent}>
                {s.content.split('\n').map((line, i) =>
                  line.trim() === '' ? (
                    <br key={i} />
                  ) : (
                    <p key={i} className={line.startsWith('•') ? styles.bullet : ''}>
                      {line}
                    </p>
                  )
                )}
              </div>
            </section>
          ))}
        </div>

        <footer className={styles.footer}>
          <p>¿Tienes preguntas? Contáctanos a través de la aplicación.</p>
        </footer>
      </div>
    </div>
  )
}
