import styles from './Card.module.css';

export default function Card() {

    return (
        <div className={`p-3 mb-3 bg-white border border-secondary rounded-3
            animate__animated animate__backInRight ${styles.tile}`}>
            <h2>Biografie</h2>
            <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, itaque officiis. Aliquid corporis
                dolorem, eius fugiat in magni optio soluta veritatis. Consequatur dolorem ea eius, nam necessitatibus
                nisi
                sapiente sint.
            </p>
        </div>
    )
}