import type { ReactNode } from 'react';

/**
 * Корневой <html lang> задаётся в app/layout.tsx и не может зависеть от маршрута без
 * перевода всех страниц в динамический рендер. Для русского раздела переключаем атрибут
 * инлайн-скриптом до отрисовки контента: скринридеры и браузерный перевод видят lang="ru".
 */
export default function RuLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='ru'" }}
      />
      {children}
    </>
  );
}
