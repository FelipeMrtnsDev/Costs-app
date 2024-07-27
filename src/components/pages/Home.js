import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem vindo ao <span>Costs</span>
            </h1>
            <p>comece a gerencias os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projetos"/>
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home;