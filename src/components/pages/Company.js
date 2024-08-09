import Container from '../layout/Container'
import styles from './Company.module.css'

function Company() {
    return (
        <Container>
            <h1>Sobre a Empresa</h1>
            <p className={styles.company_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt at odit quidem, iure soluta adipisci vel dignissimos sint consequuntur expedita molestiae temporibus ex nesciunt natus pariatur qui ea cupiditate! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quo eum exercitationem sequi iste at animi tempora inventore porro? Nulla esse repudiandae nostrum, molestias est praesentium sint maiores quibusdam voluptas.</p>
        </Container>
    )
}

export default Company;