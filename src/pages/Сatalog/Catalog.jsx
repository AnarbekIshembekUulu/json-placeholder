import { CardImages } from "../../components/CardImages/CardImages";
import "./catalog.scss";

const Catalog = () => {
    return (
        <section className="card__img">
            <div className="container grid grid__col-4">
                <CardImages />
                <CardImages />
                <CardImages />
            </div>
        </section>
    );
};

export default Catalog;
