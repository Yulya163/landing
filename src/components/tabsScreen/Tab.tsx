import { TabType } from '../../types';

type TabProps = {
    tab: TabType;
    onTabClickHandle: (tabId: number) => void;
    activeId: number;
};

export default function Tab({tab, activeId, onTabClickHandle}: TabProps): JSX.Element {
    const getImg = (img: string) => {
        return require(`./img/${img}.png`);
    }
    return (
        <div className={activeId === tab.id ? "tabs__tab active" : "tabs__tab"} onClick={() => onTabClickHandle(tab.id)}>
            <img src={getImg(tab.img)} alt={tab.title} className="tab-img" />
            <div className="tab-text">{tab.title}</div>
        </div>
    );
}
