import './ImageScreen.scss';
import img from './photo.jpg';
import { sectionsContent } from '../../data';
import { Section } from '../../types';

export default function ImageScreen(): JSX.Element {
    const getTitle = (section: Section) => {
        return sectionsContent[section].title || '';
    }

    const title: string = getTitle(Section.imageScreen);

    const getText = (section: Section) => {
        return sectionsContent[section].text;
    }

    const textArr: string[] = getText(Section.imageScreen);

    return (
        <section className="image-screen" id="image-screen">
            <div className="container image-screen__wrap">
                <h2 className="image-screen__title subtitle">{title}</h2>
                <div className="image-screen__img">
                    <img src={img} alt="photo" />
                </div>
                <p>{textArr[0]}</p>
            </div>
        </section>
    );
}
