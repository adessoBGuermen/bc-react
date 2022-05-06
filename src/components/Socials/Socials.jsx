import styles from './Socials.module.css';

export default function Socials() {

    return (
        <section className="container mt-5 mb-5">
            <div className={`row justify-content-center ${styles.socials}`}>
                <a href="https://www.linkedin.com/in/bircan-guermen/"
                   target="_blank" className="w-auto p-0">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                         alt="LinkedIn Logo"/>
                </a>
            </div>
        </section>
    )
}