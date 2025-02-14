import styles from './Sentence.module.css'

function Sentence() {
    return (
        <div className={ styles.sentenceContainer }>
            <h4 className={ styles.sentenceContent }>This is a component with a sentence!</h4>
        </div>
    );
}

export default Sentence;
