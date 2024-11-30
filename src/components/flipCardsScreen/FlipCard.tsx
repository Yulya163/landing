import { FlipCardType } from '../../types';
import { useState } from 'react';

type FlipCardProps = {
    flipCard: FlipCardType;
};

export default function FlipCard({flipCard}: FlipCardProps): JSX.Element {
    const [isRotate, setIsRotate] = useState(false);
    const [isShowBackground, setIsShowBackground] = useState(false);

    const onClickHandle = (img: string) => {
        setIsRotate(isRotate ? false : true);
    }

    const onMouseEnterHandle = () => {
        setIsShowBackground(true);
    }

    const onMouseLeaveHandle = () => {
        setIsShowBackground(false);
    }

    return (
        <div
            className={isRotate ? 'flip-card rotate' : 'flip-card'}
            onClick={() => onClickHandle(flipCard.img)}
            onMouseEnter={onMouseEnterHandle}
            onMouseLeave={onMouseLeaveHandle}
        >
            <div className="flip-card__wrap">
                <div className={isShowBackground ? `flip-card__front flip-card__front_bg-${flipCard.id}` : "flip-card__front"}>
                    <div className="flip-card__title">{flipCard.title}</div>
                </div>
                <div className="flip-card__back">
                    <div className="flip-card__content">{flipCard.content}</div>
                </div>
            </div>
        </div>
    );
}
