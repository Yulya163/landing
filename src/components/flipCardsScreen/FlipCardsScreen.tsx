import './FlipCardsScreen.scss';
import { FlipCardType } from '../../types';
import FlipCard from './FlipCard';
import { flipCards } from '../../data';

export default function FlipCardsScreen(): JSX.Element {
    return (
        <section className="flip-cards" id="flip-cards">
            <div className="container flip-cards__wrap">
                <h2 className="flip-cards__title subtitle">
                    Открой все карточки и собери свое бинго
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
