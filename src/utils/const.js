
export const MODEL_ARRAY = [
    {
        id: 0,
        img: 'https://cdn.kodixauto.ru/media/image/604f6bc3d86bfd0001c198a3',
        name: 'QASHQAI',

    },
    {
        id: 1,
        img: 'https://cdn.kodixauto.ru/media/image/604f6c18d86bfd0001c198a4',
        name: 'X-TRAIL',

    },
    {
        id: 2,
        img: 'https://cdn.kodixauto.ru/media/image/5f65008753168c00016d3e87',
        name: 'MURANO',

    },
    {
        id: 3,
        img: 'https://cdn.kodixauto.ru/media/image/5f64a5a90b952a0001e1d845',
        name: 'TERRANO',

    },


]
export const AUTO_CENTER_ARRAY = [
    {
        id: '0',
        img: 'https://mogilev.nissan-global.by/images/news/news_block/bb2b1114d7e66795f0997128141256c6.jpg',
        name: 'г.Могилёв ул. Симонова, 55Г.',
        map: '#',
        phone: '+375293899090'
    },
    {
        id: '1',
        img: 'https://brest.nissan-global.by/images/news/news_block/594eefdc5067e96f5ba2af9a9fa925b7.jpg',
        name: 'г.Брест пр-т Партизанский, 34',
        map: '#',
        phone: '+375293899090'
    },
    {
        id: '2',
        img: 'https://mogilev.nissan-global.by/images/news/news_block/bb2b1114d7e66795f0997128141256c6.jpg',
        name: 'г.Полоцк ул.Петруся Бровки, 61',
        map: '#',
        phone: '+375293899090'
    },
    {
        id: '3',
        img: 'https://brest.nissan-global.by/images/news/news_block/594eefdc5067e96f5ba2af9a9fa925b7.jpg',
        name: 'г.Пинск ул.Новосёлов, 64',
        map: '#',
        phone: '+375293899090'
    },
    {
        id: '4',
        img: 'https://mogilev.nissan-global.by/images/news/news_block/bb2b1114d7e66795f0997128141256c6.jpg',
        name: 'г.Солигорск ул.Кольцевая, 6.',
        map: '#',
        phone: '+375293899090'
    },
    {
        id: '5',
        img: 'https://brest.nissan-global.by/images/news/news_block/594eefdc5067e96f5ba2af9a9fa925b7.jpg',
        name: 'г.Витебск ул.Гагарина, 169',
        map: '#',
        phone: '+375293899090'
    },
    {
        id: '6',
        img: 'https://brest.nissan-global.by/images/news/news_block/594eefdc5067e96f5ba2af9a9fa925b7.jpg',
        name: 'г.Гродно Белуша, 61',
        map: '#',
        phone: '+375293899090'
    },
]

export const MOD_ARRAY = [
    {
        id: '0',
        img: 'https://cdn.kodixauto.ru/media//media/resized_image/61640ecf20c4dccb5bf984bf/764/0',
        name: 'Mid',
        features: {
            engine: '3,5л.c Бензин (249 л.с.)',
            transmission: 'Вариатор',
            drive: 'Передний привод'
        }
    },
    {
        id: '1',
        img: 'https://cdn.kodixauto.ru/media//media/resized_image/6160472320c4dccb5bf92611/764/0',
        name: 'LE',
        features: {
            engine: '2,0л.c Бензин (144 л.с.)',
            transmission: 'Вариатор',
            drive: 'Передний привод'
        }
    },
    {
        id: '2',
        img: 'https://cdn.kodixauto.ru/media//media/resized_image/61640f7acd5c20b577788b18/764/0',
        name: 'SE Top N-Design',
        features: {
            engine: '2,0л.c Бензин (144 л.с.)',
            transmission: 'Вариатор',
            drive: 'Передний привод'
        }
    },
    {
        id: '3',
        img: 'https://cdn.kodixauto.ru/media//media/resized_image/61603c5d20c4dccb5bf91b2e/764/0',
        name: 'LE Top Coffee',
        features: {
            engine: '2,5л.c Бензин (171 л.с.)',
            transmission: 'Вариатор',
            drive: 'Передний привод'
        }
    },
    {
        id: '4',
        img: 'https://cdn.kodixauto.ru/media//media/resized_image/6164346820c4dccb5bf9a551/764/0',
        name: 'XE',
        features: {
            engine: '2,0л.c Бензин (144 л.с.)',
            transmission: 'МКПП',
            drive: 'Передний привод'
        }
    },
]

export const SWIPER_BREAK_POINT_MODELS = {
    480: {slidesPerView: 2}, 850: {slidesPerView: 3}, 1024: {slidesPerView: 4},
}

export const SWIPER_BREAK_POINT_AUTO_CENTER = {
    480: {slidesPerView: 2}, 850: {slidesPerView: 3}, 1024: {slidesPerView: 4},
}
export const SWIPER_BREAK_POINT_MODIFICATION = {
    480: {slidesPerView: 2}, 850: {slidesPerView: 3}, 1024: {slidesPerView: 4},
}

export const STEPS_ARRAY = [
    {
        id:1,
        title: 'Шаг 1',
        content: 'Выбирите модель',
        components: ''

    },
    {
         id:2,
        title: 'Шаг 2',
        content: 'Выберите автоцентр',
        components: ''

    },
    {
         id:3,
        title: 'Шаг 3',
        content: 'Выберите модификацию',
        components: ''

    },
    {
         id:4,
        title: 'Шаг 4',
        content: 'Выберите планируемую дату и время тест-драйва',
        components: ''
    },
    {
         id:5,
        title: 'Шаг 5',
        content: 'Заполните ваши контактные данные',
        components: ''
    },
];

let arr = []

for (let i = 0; i <= 75; i++) {
    let x = {id: i, name: `11:${i < 10 ? '0' + i : i}`}
    arr.push(x)
}
export const TIME_ARRAY = arr

