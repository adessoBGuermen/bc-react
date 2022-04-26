import styles from './Header.module.css';

export default function Header() {

    return (
        <section className="container bg-dark p-3 hero">
            <div className="row">
                <div className="col-md-2 col-4">
                    <img className="w-100 rounded-circle border border-3 border-success"
                         src="https://media-exp1.licdn.com/dms/image/C4D03AQGuiPSX7p0LKg/profile-displayphoto-shrink_800_800/0/1599774901546?e=2147483647&v=beta&t=KWkhRmbCWY6fccoFsJD4g7pfAJu7PRH48IHkdPvBx30"
                         alt="profilbild"/>
                </div>
                <div className="col-md-10 col-6 d-flex align-items-center">
                    <div className="wrapper text-white">
                        <p className="mb-1 fw-bold">Bircan</p>
                        <p className="mb-1">Web Developer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}