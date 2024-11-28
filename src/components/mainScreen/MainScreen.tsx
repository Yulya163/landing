import './MainScreen.scss';
import img from './illustration.svg';


export default function MainScreen(): JSX.Element {
    return (
        <section className="main-screen">
            <div className="container main-screen__wrap">
                <div className="main-screen__content">
                    <h1 className="main-screen__title title">
                        Плотинка лесная отборная со вкусом подземного ручейка
                    </h1>
                    <div className="main-screen__descr">
                        <p>Заводская плотина в Екатеринбурге была построена в 1723 году из уральской лиственницы, которая не гниет в воде, а со временем лишь каменеет и становится крепче. В создании плотинки принял деятельное участие российский военный инженер В. И. де Геннин.</p>
                        <p>С этого места началось всё строительство города. Одновременно стали возводить крепость, защищающую будущий завод от набегов башкир, на чьих землях он и строился.</p>
                    </div>
                </div>
                <div className="main-screen__img-wrap">
                    <img src={img} alt="illustration" className="main-screen__img" />
                </div>
            </div>
        </section>
    );
}
