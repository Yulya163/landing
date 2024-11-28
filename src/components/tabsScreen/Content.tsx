import { FlipCardType, ContentType } from '../../types';
import { useState } from 'react';

type ContentProps = {
    contentCard: ContentType;
};

export default function Content({contentCard}: ContentProps): JSX.Element {

    return (
        <div className="content__card">
            <div className="content-title">{contentCard.title}</div>
            <div className="content-text">{contentCard.text}</div>
        </div>
    );
}
