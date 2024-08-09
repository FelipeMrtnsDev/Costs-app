import Container from '../layout/Container'
import styles from './Contact.module.css'

function Contact() {
    return (
        <Container>
            <h1>Contato</h1>
            <p className={styles.contact_p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi incidunt laboriosam, expedita corporis totam officia in maxime tenetur fugit architecto labore soluta odit perferendis necessitatibus eum officiis voluptate quasi facilis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aliquam nihil reiciendis eaque nemo quia fugiat cupiditate! Molestiae ex nulla ipsam numquam, illo eveniet obcaecati aspernatur eius labore dolore? Impedit.</p>
        </Container>
    )
}

export default Contact;