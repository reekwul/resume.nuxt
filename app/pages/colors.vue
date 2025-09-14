<script lang="ts" setup>
</script>

<template>
<div class="wrapper">
    <h1 class="title">Цветовая палитра используемая для проекта</h1>
    <div class="color">
        <h2>1. Primary (Основной)</h2>
        <span>
            Используется для главных действий и акцентов.
        </span>
        <div>
            <div>
                Оттенок	Hex	Пример	Назначение
            </div>
            <div>200	#E0EAFF	<div style="padding: 10px; background-color: #E0EAFF"></div>	Светлый фон, subtle hover</div>
            <div>175	#A9C5FF	<div style="padding: 10px; background-color: #A9C5FF"></div>	</div>
            <div>150	#72A0FF	<div style="padding: 10px; background-color: #72A0FF"></div>	</div>
            <div>100	#3E7BFF	<div style="padding: 10px; background-color: #3E7BFF"></div>	Основная кнопка, главный акцент</div>
            <div>75	#2D5CB8	<div style="padding: 10px; background-color: #2D5CB8"></div>	Hover / Active состояния</div>
            <div>50	#1F4180	<div style="padding: 10px; background-color: #1F4180"></div>	</div>
            <div>25	#142A58	<div style="padding: 10px; background-color: #142A58"></div>	Текст на светлом фоне</div>
            <div>0	#0D1C39	<div style="padding: 10px; background-color: #0D1C39"></div>	</div>
        </div>
    </div>

    <div class="color">
        <h2>
            2. Secondary (Второстепенный)
        </h2>
        <span>
            Используется для второстепенных действий и нейтральных элементов.
        </span>
        <div>Оттенок	Hex	Пример	Настроение</div>
        <div>200	#F5F5F4	<div style="padding: 10px; background-color: #F5F5F4"></div>	Уютный фон</div>
        <div>175	#E7E5E4	<div style="padding: 10px; background-color: #E7E5E4"></div>	</div>
        <div>150	#D6D3D1	<div style="padding: 10px; background-color: #D6D3D1"></div>	Обводка</div>
        <div>100	#A8A29E	<div style="padding: 10px; background-color: #A8A29E"></div>	Основной</div>
        <div>75	#78716C	<div style="padding: 10px; background-color: #78716C"></div>	Hover</div>
        <div>50	#57534E	<div style="padding: 10px; background-color: #57534E"></div>	</div>
        <div>25	#44403C	<div style="padding: 10px; background-color: #44403C"></div>	</div>
        <div>0	#292524	<div style="padding: 10px; background-color: #292524"></div>	</div>
    </div>

    <div class="color">
        <h2>3. Success (Успех)</h2>
        <span>
            Используется для позитивных действий, подтверждений, успешных статусов.
        </span>
        <div>Оттенок	Hex	Пример</div>
        <div>200	#6EE7B7	<div style="padding: 10px; background-color: #6EE7B7"></div></div>
        <div>100	#34D399	<div style="padding: 10px; background-color: #34D399"></div></div>
        <div>75	#10B981	<div style="padding: 10px; background-color: #10B981"></div></div>
        <div>50	#059669	<div style="padding: 10px; background-color: #059669"></div></div>
        <div>25	#047857	<div style="padding: 10px; background-color: #047857"></div></div>
        <div>0	#065F46	<div style="padding: 10px; background-color: #065F46"></div></div>
    </div>

     <div class="color">
        <h2>4. Warn (Предупреждение)</h2>
<span>Используется для предупреждающих сообщений и действий, требующих внимания.</span>

<div>Оттенок	Hex	Пример</div>
<div>200	#FCD34D	<div style="padding: 10px; background-color: #FCD34D"></div></div>
<div>100	#FBBF24	<div style="padding: 10px; background-color: #FBBF24"></div></div>
<div>75	#F59E0B	<div style="padding: 10px; background-color: #F59E0B"></div></div>
<div>50	#D97706	<div style="padding: 10px; background-color: #D97706"></div></div>
<div>25	#B45309	<div style="padding: 10px; background-color: #B45309"></div></div>
<div>0	#92400E	<div style="padding: 10px; background-color: #92400E"></div></div>

    </div>

    <div class="color">
        <h2>5. Error (Ошибка)</h2>
<span>Используется для ошибок, негативных действий и критических статусов.</span>

<div>Оттенок	Hex	Пример</div>
<div>200	#FCA5A5	<div style="padding: 10px; background-color: #FCA5A5"></div></div>
<div>100	#F87171	<div style="padding: 10px; background-color: #F87171"></div></div>
<div>75	#EF4444	<div style="padding: 10px; background-color: #EF4444"></div></div>
<div>50	#DC2626	<div style="padding: 10px; background-color: #DC2626"></div></div>
<div>25	#B91C1C	<div style="padding: 10px; background-color: #B91C1C"></div></div>
<div>0	#991B1B	<div style="padding: 10px; background-color: #991B1B"></div></div>

    </div>

      <div class="color">
       <h2>6. Disable (Неактивное)</h2>
       <span>Используется для неактивных кнопок, полей и элементов.
Для disable обычно не нужна градиентность, но я добавлю несколько оттенков для контекста (текст, фон, обводка).
</span>

<div>Назначение	Hex	Пример	Описание</div>
<div>Основной (Element)	#C5C6CC	<div style="padding: 10px; background-color: #C5C6CC"></div>	Цвет неактивной кнопки, поля</div>
<div>Текст	#8C8D92	<div style="padding: 10px; background-color: #8C8D92"></div>	Текст на неактивном элементе</div>
<div>Фон	#F5F5F6	<div style="padding: 10px; background-color: #F5F5F6"></div>	Фон неактивного поля</div>
<div>Обводка	#E8E8E9	<div style="padding: 10px; background-color: #E8E8E9"></div>	Обводка неактивного элемента</div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    flex-wrap: wrap;
    gap:1.5%;

    background-color: #FAFAFF;
    
    .title{
        flex:1 1 100%;
    }

    .color{
        flex: 1 1 47.5%;
        padding-bottom: 1.5%;
    }
}
</style>