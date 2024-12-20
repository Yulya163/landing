import { FlipCardType } from '../../types';
import { useState } from 'react';

type FlipCardProps = {
    flipCard: FlipCardType;
};

export default function FlipCard({flipCard}: FlipCardProps): JSX.Element {
    const [isRotate, setIsRotate] = useState(false);
    const [isShowBackground, setIsShowBackground] = useState(false);

    const onClickHandle = () => {
        setIsRotate(isRotate ? false : true);
    }

    const onEnterHandle = () => {
        setIsShowBackground(true);
    }

    const onLeaveHandle = () => {
        setIsShowBackground(false);
    }

    return (
        <div
            className={isRotate ? 'flip-card__wrap rotate' : 'flip-card__wrap'}
            onClick={onClickHandle}
            onMouseEnter={onEnterHandle}
            onMouseLeave={onLeaveHandle}
            onTouchStart={onEnterHandle}
            onTouchEnd={onLeaveHandle}
        >
            <div
                className={isShowBackground ? `flip-card__front flip-card__front_bg-${flipCard.id}` : "flip-card__front"}
            >
                <div className="flip-card__title">{flipCard.title}</div>
            </div>
            <div className="flip-card__back">
                <div className="flip-card__content-wrap">
                    <div
                        className="flip-card__content"
                    >
                        {flipCard.content}
                    </div>
                </div>
            </div>
        </div>
    );
}
