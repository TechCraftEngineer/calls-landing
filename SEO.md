# SEO Оптимизация QBS Звонки

## Что было сделано

### 1. Метаданные и Open Graph
- ✅ Расширенные метаданные в `app/layout.tsx`
- ✅ Open Graph теги для социальных сетей
- ✅ Twitter Card метаданные
- ✅ Метаданные для страниц Privacy и Terms
- ✅ Canonical URLs

### 2. Структурированные данные (JSON-LD)
- ✅ Schema.org разметка для SoftwareApplication
- ✅ Schema.org разметка для Organization
- ✅ Компонент `StructuredData.tsx` добавлен на главную страницу

### 3. Файлы для поисковых систем
- ✅ `robots.ts` - правила для поисковых роботов
- ✅ `sitemap.ts` - карта сайта (автоматически генерируется)
- ✅ `manifest.ts` - манифест веб-приложения

### 4. Аналитика (опционально)
- ✅ Компонент `Analytics.tsx` для Google Analytics и Яндекс.Метрики
- ✅ Поддержка переменных окружения для ID счетчиков

### 5. Оптимизация Next.js
- ✅ Сжатие контента (compress)
- ✅ Оптимизация изображений (AVIF, WebP)
- ✅ Заголовки безопасности
- ✅ Отключен заголовок X-Powered-By

## Настройка

### 1. Переменные окружения

Создайте файл `.env.local` на основе `.env.example`:

```bash
# Обязательно
NEXT_PUBLIC_SITE_URL=https://zvonki.qbsoft.ru

# Опционально - коды верификации
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
NEXT_PUBLIC_YANDEX_VERIFICATION=your-yandex-verification-code

# Опционально - аналитика
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YM_ID=XXXXXXXX
```

### 2. Верификация в поисковых системах

#### Google Search Console
1. Перейдите на https://search.google.com/search-console
2. Добавьте свой сайт
3. Получите код верификации
4. Добавьте в `app/layout.tsx` в секцию `verification.google`

#### Яндекс.Вебмастер
1. Перейдите на https://webmaster.yandex.ru
2. Добавьте свой сайт
3. Получите код верификации
4. Добавьте в `app/layout.tsx` в секцию `verification.yandex`

### 3. Настройка аналитики

#### Google Analytics
1. Создайте аккаунт на https://analytics.google.com
2. Получите ID счетчика (формат: G-XXXXXXXXXX)
3. Добавьте в `.env.local` как `NEXT_PUBLIC_GA_ID`

#### Яндекс.Метрика
1. Создайте счетчик на https://metrika.yandex.ru
2. Получите ID счетчика (числовой)
3. Добавьте в `.env.local` как `NEXT_PUBLIC_YM_ID`

## Проверка SEO

### Автоматические проверки
```bash
# Проверка robots.txt
curl https://zvonki.qbsoft.ru/robots.txt

# Проверка sitemap.xml
curl https://zvonki.qbsoft.ru/sitemap.xml

# Проверка manifest
curl https://zvonki.qbsoft.ru/manifest.json
```

### Инструменты для проверки
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Яндекс.Вебмастер](https://webmaster.yandex.ru/)
- [Schema.org Validator](https://validator.schema.org/)

## Рекомендации

### 1. Изображения
- Добавьте `logo.png` в папку `public/` (рекомендуемый размер: 512x512px)
- Добавьте `apple-touch-icon.png` (180x180px)
- Убедитесь, что `dashboard.png` имеет размер 1200x630px для Open Graph

### 2. Контент
- Регулярно обновляйте контент на сайте
- Добавьте блог для публикации статей
- Используйте ключевые слова естественно в тексте

### 3. Производительность
- Оптимизируйте изображения (используйте WebP/AVIF)
- Минимизируйте JavaScript
- Используйте CDN для статических файлов

### 4. Мобильная версия
- Проверьте адаптивность на разных устройствах
- Убедитесь, что сайт быстро загружается на мобильных

### 5. Ссылки
- Получайте обратные ссылки с авторитетных сайтов
- Регистрируйтесь в каталогах и справочниках
- Публикуйте гостевые посты

## Мониторинг

Регулярно проверяйте:
- Позиции в поисковой выдаче
- Органический трафик (Google Analytics / Яндекс.Метрика)
- Ошибки индексации (Search Console / Вебмастер)
- Скорость загрузки страниц
- Core Web Vitals

## Дополнительные улучшения

### Будущие задачи
- [ ] Добавить блог с SEO-оптимизированными статьями
- [ ] Настроить AMP версии страниц
- [ ] Добавить FAQ с разметкой Schema.org
- [ ] Настроить hreflang для мультиязычности
- [ ] Добавить breadcrumbs с разметкой
- [ ] Настроить RSS ленту
