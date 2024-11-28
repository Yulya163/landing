import './TabsScreen.scss';
import Tab from './Tab';
import Content from './Content';
import { useState } from 'react';
import { tabs, content, tabsContent } from '../../data';
import { TabType, ContentType, ContentsType } from '../../types';

const DEFAULT_TAB = 1;

export default function TabsScreen(): JSX.Element {
    const [activeId, setIsActiveId] = useState(DEFAULT_TAB);
    const onTabClickHandle = (tabId: number) => {
        setIsActiveId(tabId);
    }
    const getContentItems = (id: number) => {
        const cardsId: number[] = tabsContent.find(tabContent => tabContent.id === id)?.cardsId || [];
        const contentItems: ContentsType = content.filter(contentItem => cardsId.includes(contentItem.id)) || [];
        return contentItems;
    }

    const contentItems = getContentItems(activeId)

    return (
        <section className="tabs-screen" id="tabs-screen">
            <div className="container tabs-screen__wrap">
                <h2 className="tabs-screen__title subtitle">
                    В первый день вас ждет интересный маршрут
                </h2>
                <h3>Международный аэропорт Екатеринбурга обслуживает как сам Екатеринбург, так прилежащие к нему районы Свердловской области.</h3>
                <div className="tabs-screen__tabs tabs">
                    {
                        tabs.length !== 0 ?
                        tabs.map((tab: TabType) => (
                            <Tab
                                key={tab.id}
                                tab={tab}
                                onTabClickHandle={onTabClickHandle}
                                activeId={activeId}
                            />
                        )) :
                        <div className='error-text'>
                            No tabs
                        </div>
                    }
                </div>
                <div className="tabs-screen__content content">
                    {
                        contentItems.length !== 0 ?
                        contentItems.map((contentCard: ContentType) => (
                            <Content
                                key={contentCard.id}
                                contentCard={contentCard}
                            />
                        )) :
                        <div className='error-text'>
                            No content
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}
