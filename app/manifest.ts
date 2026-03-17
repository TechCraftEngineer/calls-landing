import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'QBS Звонки — AI-анализ звонков',
    short_name: 'QBS Звонки',
    description: 'Автоматическая расшифровка звонков, оценка качества работы менеджеров и AI-рекомендации',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
