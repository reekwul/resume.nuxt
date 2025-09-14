<script lang="ts" setup>
</script>

<template>
    <div class="demo-container">
        <header>
            <h1>Типографическая система проекта</h1>
            <p class="text-secondary">На основе шрифтов Montserrat и Merriweather</p>
        </header>

        <!-- Заголовки -->
        <section class="section">
            <h2 class="section__title">Заголовки</h2>
            <h1>Заголовок H1 - Montserrat Bold 2.5rem</h1>
            <h2>Заголовок H2 - Montserrat SemiBold 2rem</h2>
            <h3>Заголовок H3 - Montserrat SemiBold 1.75rem</h3>
            <h4>Заголовок H4 - Montserrat Medium 1.5rem</h4>
            <h5>Заголовок H5 - Montserrat Medium 1.25rem</h5>
            <h6>Заголовок H6 - Montserrat Medium 1.125rem</h6>
        </section>

        <!-- Текст и ссылки -->
        <section class="section">
            <h2 class="section__title">Текст и ссылки</h2>
            <p>Это обычный абзац текста, набранный шрифтом Merriweather Regular 1rem. Он обеспечивает комфортное чтение длинных текстов благодаря оптимизированным засечкам и сбалансированному контрасту.</p>
            
            <p class="text-secondary">Вторичный текст - Merriweather Regular с цветом $color-text-secondary. Используется для менее важной информации.</p>
            
            <p>Ссылка: <a href="#">Пример ссылки на внешний ресурс</a> - подчеркивается при наведении и меняет цвет.</p>
        </section>

        <!-- Списки -->
        <section class="section">
            <h2 class="section__title">Списки</h2>
            
            <h4>Маркированный список:</h4>
            <ul>
                <li>Первый пункт списка</li>
                <li>Второй пункт с более длинным текстом, который может занимать несколько строк</li>
                <li>Третий пункт</li>
                <li>Четвертый пункт с <a href="#">ссылкой внутри</a></li>
            </ul>
            
            <h4>Нумерованный список:</h4>
            <ol>
                <li>Первый пронумерованный пункт</li>
                <li>Второй пункт с вложенным списком:
                    <ul>
                        <li>Вложенный маркированный пункт 1</li>
                        <li>Вложенный маркированный пункт 2</li>
                    </ul>
                </li>
                <li>Третий пункт</li>
            </ol>
        </section>

        <!-- Цитаты и код -->
        <section class="section">
            <h2 class="section__title">Цитаты и код</h2>
            
            <blockquote>
                "Это пример цитаты, набранной курсивом Merriweather Italic 1.25rem. Цитаты визуально выделяются с помощью левой границы и отступа."
            </blockquote>
            
            <h4>Inline код:</h4>
            <p>Для добавления класса в HTML используйте <code>&lt;div class="container"&gt;</code>.</p>
            
            <h4>Блок кода:</h4>
            <pre><code>function helloWorld() {
    console.log('Hello, World!');
    return true;
}</code></pre>
        </section>

        <!-- Кнопки и интерфейс -->
        <section class="section">
            <h2 class="section__title">Кнопки и элементы интерфейса</h2>
            
            <button class="button">Основная кнопка</button>

            <button class="button" disabled>Неактивная кнопка</button>
            
            <div style="margin-top: 1rem;">
                <a href="#" class="button">Ссылка в виде кнопки</a>
            </div>
        </section>

        <!-- Разделитель -->
        <hr>

        <!-- Утилиты -->
        <section class="section">
            <h2 class="section__title">Типографические утилиты</h2>
            
            <p class="text-sm">Мелкий текст (.text-sm)</p>
            <p class="text-lg">Крупный текст (.text-lg)</p>
            <p class="text-xl">Очень крупный текст (.text-xl)</p>
            
            <p class="text-light">Легкое начертание (.text-light)</p>
            <p class="text-regular">Обычное начертание (.text-regular)</p>
            <p class="text-medium">Среднее начертание (.text-medium)</p>
            <p class="text-bold">Жирное начертание (.text-bold)</p>
            
            <p class="text-primary">Основной цвет текста (.text-primary)</p>
            <p class="text-secondary">Вторичный цвет текста (.text-secondary)</p>
            <p class="text-accent">Акцентный цвет текста (.text-accent)</p>
        </section>
    </div>
</template>

<style lang="scss" scoped>

</style>
