export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'QBS Звонки',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'RUB',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
    description: 'Автоматическая расшифровка звонков, оценка качества работы менеджеров и AI-рекомендации. Дашборд для отдела продаж, банков и колл-центров.',
    featureList: [
      'Автоматическая транскрибация звонков',
      'AI-анализ качества разговоров',
      'Оценка работы менеджеров',
      'Интеграция с CRM',
      'Дашборд аналитики',
    ],
  }

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'QBS Звонки',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://zvonki.qbsoft.ru',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://zvonki.qbsoft.ru'}/logo.png`,
    description: 'Платформа для AI-анализа звонков и транскрибации для бизнеса',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Russian'],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  )
}
