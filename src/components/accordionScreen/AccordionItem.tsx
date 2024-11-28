import { useState } from "react";
import { AccordionItemType } from "../../types";
import icon from "./check.svg";

type AccordionItem = {
    accordionItem: AccordionItemType;
};

export default function AccordionItem({accordionItem}: AccordionItem): JSX.Element {
    const [isShowContent, setIsShowContent] = useState(false);

    const onClickHandle = () => {
        setIsShowContent(isShowContent ? false : true);
    }

    return (
        <div className="accordion__item" onClick={onClickHandle}>
            <div className="accordion__title">
                <div>{accordionItem.title}</div>
                <img src={icon} alt="check" className={isShowContent ? "rotate" : ""} />
            </div>
            <div className={isShowContent ? "accordion__content show" : "accordion__content"}>
                <div className="content">
                    {accordionItem.content}
                </div>
            </div>
        </div>
    );
}
