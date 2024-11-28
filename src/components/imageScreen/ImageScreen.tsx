import './ImageScreen.scss';
import img from './photo.jpg';


export default function ImageScreen(): JSX.Element {
    return (
        <section className="image-screen" id="image-screen">
            <div className="container image-screen__wrap">
                <h2 className="image-screen__title subtitle">Что ждёт за платинкой</h2>
                <img src={img} alt="photo" className="image-screen__img" />
                <p>Межгалактические порты и бесконечные просторы вселенной</p>
            </div>
        </section>
    );
}
