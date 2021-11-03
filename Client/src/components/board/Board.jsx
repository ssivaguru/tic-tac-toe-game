
import styles from './board.module.scss';
import TicTac from '../tic_tac/ticTac';

function getBox() {
    const row = []

    for (var i = 0; i < 9; i++) {
        row.push(<TicTac pressed={1}/>)
    }

    return row;
}

const Board = (props) => {
    return (
        <div className={styles["tic-tac-board"]}>
            {getBox()}
        </div>
    )
}


export default Board;