/* eslint-disable react/prop-types */
import styles from './style.module.css'

export default function Card (props) {
    return (

        <div className="cardDiv">
        <h1>{props.title}</h1>
        <div className="btn">
        <a className={styles.btnA}>{props.gerar}</a>
        <a className={styles.btnB}>{props.copiar}</a>
        </div>
        </div>
 
    )
}