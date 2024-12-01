import './AccordionScreen.scss';
import AccordionItem from './AccordionItem';
import { accordionItems, sectionsContent } from '../../data'
import { AccordionItemType, Section } from '../../types';

export default function AccordionScreen(): JSX.Element {

    const getTitle = (section: Section) => {
        return sectionsContent[section].title || '';
    }

    const title: string = getTitle(Section.accordionScreen);

    return (
        <section className="accordion-screen" id="accordion-screen">
            <div className="container accordion-screen__wrap">
                <h2 className="accordion-screen__title subtitle">
                    {title}
                </h2>
                <div className="accordion-screen__accordion accordion">
                    {
                        accordionItems.length !== 0 ?
                        accordionItems.map((accordionItem: AccordionItemType) => (
                            <AccordionItem
                                key={accordionItem.id}
                                accordionItem={accordionItem}
                            />
                            )
                        ) :
                        <div className='error-text'>
                            No accordion items
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}
