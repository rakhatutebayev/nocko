# Инструкция: Создание компонентов для сервисов в Strapi

## Шаг 1: Создание компонентов через Content-Type Builder

### 1.1. Откройте Strapi админку
```
http://localhost:1337/admin
```

### 1.2. Перейдите в Content-Type Builder
1. Нажмите на иконку **Settings** (шестеренка) в левом меню
2. Выберите **Content-Type Builder**
3. В верхнем меню выберите **Components**

---

## Шаг 2: Создание компонента "Service Hero Section"

1. Нажмите кнопку **"Create new component"**
2. Заполните:
   - **Category**: `service` (или создайте новую категорию)
   - **Display name**: `Service Hero Section`
   - **Description**: `Hero section with title and subtitle for service pages`
3. Нажмите **"Continue"**

4. Добавьте поля:
   - **Field name**: `heroTitle`
     - Type: **Text**
     - Required: ✅ Да
   - **Field name**: `heroSubtitle`
     - Type: **Long text**
     - Required: ❌ Нет

5. Нажмите **"Finish"** и **"Save"**

---

## Шаг 3: Создание компонента "Service Article Block (6 blocks section)"

1. Нажмите кнопку **"Create new component"**
2. Заполните:
   - **Category**: `service`
   - **Display name**: `Service Article Block (6 blocks section)`
   - **Description**: `Article block for 6 blocks section`
3. Нажмите **"Continue"**

4. Добавьте поля:
   - **Field name**: `blockTitle`
     - Type: **Text**
     - Required: ✅ Да
   - **Field name**: `blockExcerpt`
     - Type: **Long text**
     - Required: ✅ Да
   - **Field name**: `blockUrl`
     - Type: **Text**
     - Required: ✅ Да
   - **Field name**: `blockBorderColor`
     - Type: **Enumeration**
     - Required: ✅ Да
     - **Enumeration values** (по одному на строку):
       ```
       #3474ff
       #00aeff
       #583bec
       #11c979
       #ffcc2a
       #ec5050
       ```
     - Default value: `#3474ff`

5. Нажмите **"Finish"** и **"Save"**

---

## Шаг 4: Создание компонента "Service Article Card (3 cards section)"

1. Нажмите кнопку **"Create new component"**
2. Заполните:
   - **Category**: `service`
   - **Display name**: `Service Article Card (3 cards section)`
   - **Description**: `Article card for 3 cards section`
3. Нажмите **"Continue"**

4. Добавьте поля:
   - **Field name**: `cardArticle`
     - Type: **Relation**
     - Relation type: **One-to-one**
     - Target: **Article**
   - **Field name**: `cardColor`
     - Type: **Enumeration**
     - Required: ✅ Да
     - **Enumeration values**:
       ```
       #3474ff
       #00aeff
       #583bec
       #11c979
       #ffcc2a
       #ec5050
       ```
     - Default value: `#3474ff`
   - **Field name**: `cardIcon`
     - Type: **Media**
     - Multiple: ❌ Нет
     - Allowed types: **Images, Files** (для SVG)

5. Нажмите **"Finish"** и **"Save"**

---

## Шаг 5: Добавление компонентов в Service Content Type

1. В **Content-Type Builder** перейдите в **Collection Types**
2. Найдите и откройте **Service**
3. Нажмите **"Add another field"**

4. Добавьте поле **Hero**:
   - Type: **Component**
   - Select component: **Service Hero Section**
   - Repeatable: ❌ Нет
   - Нажмите **"Finish"**

5. Добавьте поле **Article Blocks**:
   - Type: **Component**
   - Select component: **Service Article Block (6 blocks section)**
   - Repeatable: ✅ Да
   - Maximum: **6**
   - Нажмите **"Finish"**

6. Добавьте поле **Article Cards**:
   - Type: **Component**
   - Select component: **Service Article Card (3 cards section)**
   - Repeatable: ✅ Да
   - Maximum: **3**
   - Нажмите **"Finish"**

7. Нажмите **"Save"** в правом верхнем углу

8. Перезапустите Strapi:
   ```bash
   docker-compose restart cms
   ```

---

## Шаг 6: Как найти и использовать на странице создания сервиса

### 6.1. Откройте страницу создания сервиса:
```
http://localhost:1337/admin/content-manager/collection-types/api::service.service/create
```

### 6.2. На странице вы увидите:

**Основные поля:**
- Title *
- Slug (автоматически)
- Description
- Icon

**Hero Section** (компонент):
- Hero Title *
- Hero Subtitle

**Article Blocks** (повторяемый компонент, до 6):
- Кнопка **"Add an entry"** для добавления блока
- В каждом блоке:
  - Block Title *
  - Block Excerpt *
  - Block URL *
  - Block Border Color * (выпадающий список с 6 цветами)

**Article Cards** (повторяемый компонент, до 3):
- Кнопка **"Add an entry"** для добавления карточки
- В каждой карточке:
  - Card Article (выбор статьи из списка)
  - Card Color * (выпадающий список с 6 цветами)
  - Card Icon (загрузка SVG файла)

### 6.3. После заполнения:
1. Нажмите **"Save"** для сохранения черновика
2. Нажмите **"Publish"** для публикации сервиса

### 6.4. Сервис будет доступен по адресу:
```
http://localhost:3000/services/[slug]
```

---

## Доступные цвета для выбора:

- `#3474ff` - Синий
- `#00aeff` - Голубой
- `#583bec` - Фиолетовый
- `#11c979` - Зеленый
- `#ffcc2a` - Желтый
- `#ec5050` - Красный

---

## Примечания:

- Компоненты должны быть созданы **до** добавления их в Service schema
- После создания компонентов и добавления их в Service, необходимо **перезапустить Strapi**
- Максимальное количество Article Blocks: **6**
- Максимальное количество Article Cards: **3**




