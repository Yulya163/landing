import './ImageScreen.scss';
import img from './photo.jpg';


export default function ImageScreen(): JSX.Element {
    return (
        <section className="image-screen" id="image-screen">
            <div className="container image-screen__wrap">
                <h2 className="image-screen__title subtitle">Что ждёт за платинкой</h2>
                <div className="image-screen__img">
                    <img src={img} alt="photo" />
                </div>
                <p>Межгалактические порты и бесконечные просторы вселенной</p>
            </div>
        </section>
    );
}
