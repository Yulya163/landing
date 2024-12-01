import MainScreen from './components/mainScreen/MainScreen';
import {
    FlipCardsType,
    AccordionItemsType,
    MenuLinksType,
    TabsType,
    TabsContentType,
    ContentsType,
    SectionsContentType,
    Section,

} from './types';


export const menuLinks: MenuLinksType = [
    {
        id: 1,
        text: 'Что ждет',
        ancorScreen: 'image-screen',
    },
    {
        id: 2,
        text: 'Маршрут',
        ancorScreen: 'tabs-screen',
    },
    {
        id: 3,
        text: 'Бинго',
        ancorScreen: 'flip-cards',
    },
    {
        id: 4,
        text: 'FAQs',
        ancorScreen: 'accordion-screen',
    }
]

export const flipCards: FlipCardsType = [
    {
        id: 1,
        title: 'Физика',
        content: 'Фи́зика — область естествознания: наука о наиболее общих законах природы, о материи, её структуре, движении и правилах трансформации.',
        img: './img/back_illustr_1.jpg',
    },
    {
        id: 2,
        title: 'Литература',
        content: 'Литература — в широком смысле слова совокупность любых письменных текстов. Чаще всего под литературой понимают художественную литературу, то есть литературу как вид искусства',
        img: './img/back_illustr_2.jpg',
    },
    {
        id: 3,
        title: 'Искусство',
        content: 'Иску́сство — одна из наиболее общих категорий эстетики, искусствознания и художественной практики.',
        img: './img/back_illustr_3.jpg',
    },
    {
        id: 4,
        title: 'Математика',
        content: 'Матема́тика — точная формальная наука, первоначально исследовавшая количественные отношения и пространственные формы.',
        img: './img/back_illustr_4.jpg',
    },
    {
        id: 5,
        title: 'Химия',
        content: 'Хи́мия — одна из важнейших и обширных областей естествознания, наука, изучающая вещества, также их состав и строение, их свойства, зависящие от состава и строения, их превращения, ведущие к изменению состава — химические реакции, а также Хи́мия — одна из важнейших и обширных областей естествознания, наука, изучающая вещества, также их состав и строение, их свойства, зависящие от состава и строения, их превращения, ведущие к изменению состава — химические реакции, а также законы и закономерности, которым эти превращения подчиняются.',
        img: './img/back_illustr_5.jpg',
    },
    {
        id: 6,
        title: 'История',
        content: 'Исто́рия, историческая наука — наука, научная (академическая) дисциплина, предметом изучения которой является человеческое прошлое.',
        img: './img/back_illustr_6.jpg',
    },
]

export const accordionItems: AccordionItemsType = [
    {
        id: 1,
        title: 'Что такое современный поиск?',
        content: 'Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности',
    },
    {
        id: 2,
        title: 'Что такое современный поиск?',
        content: 'Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности',
    },
    {
        id: 3,
        title: 'Что такое современный поиск?',
        content: 'Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности',
    },
]

export const tabs: TabsType = [
    {
        id: 1,
        idContent: 1,
        title: 'Как получить заказ?',
        img: 'illustr_2'
    },
    {
        id: 2,
        idContent: 2,
        title: 'Как оплатить заказ?',
        img: 'illustr_3'
    },
    {
        id: 3,
        idContent: 2,
        title: 'Как обменять заказ?',
        img: 'illustr_4'
    },
]

export const tabsContent: TabsContentType = [
    {
        id: 1,
        cardsId: [1,2,3,4,5,6],
    },
    {
        id: 2,
        cardsId: [7,8,9,10,11,12],
    },
    {
        id: 3,
        cardsId: [13,14,15,16,17,18],
    },
]

export const content: ContentsType = [
    {
        id: 1,
        title: 'Физика',
        text: 'Шокирующая правда о преломлении света',
    },
    {
        id: 2,
        title: 'Литература',
        text: 'О чем молчат картины: великие художники',
    },
    {
        id: 3,
        title: 'Искусство',
        text: 'Пушкин наше всё!',
    },
    {
        id: 4,
        title: 'Математика',
        text: 'Шокирующая правда о преломлении света',
    },
    {
        id: 5,
        title: 'Химия',
        text: 'О чем молчат картины: великие художники',
    },
    {
        id: 6,
        title: 'История',
        text: 'Пушкин наше всё!',
    },
    {
        id: 7,
        title: 'Астрономия',
        text: 'О чем молчат картины: великие художники',
    },
    {
        id: 8,
        title: 'Логика',
        text: 'О чем молчат картины: великие художники',
    },
    {
        id: 9,
        title: 'Рисование',
        text: 'Шокирующая правда о преломлении света',
    },
    {
        id: 10,
        title: 'Музыка',
        text: 'О чем молчат картины: великие художники',
    },
    {
        id: 11,
        title: 'Физкультура',
        text: 'О чем молчат картины: великие художники',
    },
    {
        id: 12,
        title: 'Биология',
        text: 'Шокирующая правда о преломлении света',
    },
    {
        id: 13,
        title: 'География',
        text: 'Шокирующая правда о преломлении света',
    },
    {
        id: 14,
        title: 'Геология',
        text: 'О чем молчат картины: великие художники',
    },
    {
        id: 15,
        title: 'Живопись',
        text: 'О чем молчат картины: великие художники',
    },
    {
        id: 16,
        title: 'ОДНКР',
        text: 'Пушкин наше всё!',
    },
    {
        id: 17,
        title: 'Письмо',
        text: 'О чем молчат картины: великие художники',
    },
    {
        id: 18,
        title: 'Информатика',
        text: 'Пушкин наше всё!',
    }
]

export const sectionsContent: SectionsContentType = {
    [Section.mainScreen]: {
        title: 'Плотинка лесная отборная со вкусом подземного ручейка',
        text: ['Заводская плотина в Екатеринбурге была построена в 1723 году из уральской лиственницы, которая не гниет в воде, а со временем лишь каменеет и становится крепче. В создании плотинки принял деятельное участие российский военный инженер В. И. де Геннин.','С этого места началось всё строительство города. Одновременно стали возводить крепость, защищающую будущий завод от набегов башкир, на чьих землях он и строился.']
    },
    [Section.imageScreen]: {
        title: 'Что ждёт за платинкой',
        text: ['Межгалактические порты и бесконечные просторы вселенной'],
    },
    [Section.tabsScreen]: {
        title: 'В первый день вас ждет интересный маршрут',
        text: ['Международный аэропорт Екатеринбурга обслуживает как сам Екатеринбург, так прилежащие к нему районы Свердловской области.'],
    },
    [Section.flipCards]: {
        title: 'Открой все карточки и собери свое бинго',
        text: [],
    },
    [Section.accordionScreen]: {
        title: 'Еще вопросы?',
        text: [],
    }
}
