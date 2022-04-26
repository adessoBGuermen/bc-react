import styles from './CardContainer.module.css';
import Card from '../Card/Card';

export default function CardContainer() {

    return (
        <section className="container pt-4 pb-5">
            <div className="row">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}