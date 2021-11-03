import react, {useState} from "react";
import styles from './ticTac.module.scss';



class TicTac extends react.Component {
        constructor(props) {
            super(props)
            this.state = {
                pressed: props.pressed
            };
        }

        componentDidMount() {
            if (this.pressed === 1) {

            } else {

            }
        }

        render() {
            return (
                <div className={styles["check_box"]} onClick={(() => this.handleOnClick())}>
                    <div className={styles["cross"]}>
                        
                    </div>
                </div>
            )
        }
} 

export default TicTac;