import './MainScreen.scss';
import img from './illustration.svg';
import { sectionsContent } from '../../data';
import { Section } from '../../types';


export default function MainScreen(): JSX.Element {
    const getTitle = (section: Section) => {
        return sectionsContent[section].title || '';
    }

    const title: string = getTitle(Section.mainScreen);

    const getText = (section: Section) => {
        return sectionsContent[section].text;
    }

    const textArr: string[] = getText(Section.mainScreen);

    return (
        <section className="main-screen">
            <div className="container main-screen__wrap">
                <div className="main-screen__content">
                    <h1 className="main-screen__title title">
                        {title}
                    </h1>
                    <div className="main-screen__descr">
                        {
                            textArr.length !== 0 ?
                            textArr.map((text) => (
                                <p key={text}>{text}</p>
                            )) :
                            null
                        }
                    </div>
                </div>
                <div className="main-screen__img-wrap">
                    <img src={img} alt="illustration" className="main-screen__img" />
                </div>
            </div>
        </section>
    );
}
