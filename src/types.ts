export type AccordionItemType = {
    id: number;
    title: string;
    content: string;
};

export type AccordionItemsType = AccordionItemType[];

export type FlipCardType = {
    id: number;
    title: string;
    content: string;
    img: string;
};

export type FlipCardsType = FlipCardType[];

export type MenuLinkType = {
    id: number;
    text: string;
    ancorScreen?: string;
};

export type MenuLinksType = MenuLinkType[];

export type TabType = {
    id: number;
    idContent: number;
    title: string;
    img: string;
};

export type TabsType = TabType[];

export type TabContentType = {
    id: number;
    cardsId: number[];
};

export type TabsContentType = TabContentType[];

export type ContentType = {
    id: number;
    title: string;
    text: string;
};

export type ContentsType = ContentType[];

export type SectionsContentType = Record<Section, SectionContentType>;

export type SectionContentType = {
    title: string;
    text: string[] | [];
    img?: string;
}

export enum Section {
    mainScreen = "mainScreen",
    imageScreen = "imageScreen",
    tabsScreen = "tabsScreen",
    flipCards = "flipCards",
    accordionScreen = "accordionScreen",
};