import './FlipCardsScreen.scss';
import { FlipCardType } from '../../types';
import FlipCard from './FlipCard';
import { flipCards } from '../../data';
import { sectionsContent } from '../../data';
import { Section } from '../../types';

export default function FlipCardsScreen(): JSX.Element {
    const getTitle = (section: Section) => {
        return sectionsContent[section].title || '';
    }

    const title: string = getTitle(Section.flipCards);

    return (
        <section className="flip-cards" id="flip-cards">
            <div className="container flip-cards__wrap">
                <h2 className="flip-cards__title subtitle">
                   {title}
                </h2>
                <div className="flip-cards__cards">
                    {
                        flipCards.length !== 0 ?
                        flipCards.map((flipCard: FlipCardType) => (
                            <FlipCard
                                key={flipCard.id}
                                flipCard={flipCard}
                            />
                            )
                        ) :
                        <div className='error-text'>
                            No flip cards
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}
