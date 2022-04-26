import { useSelector } from "react-redux";

import '../../components/end-game/end-game.styles.scss';

const EndGame = () => {
    const score = useSelector(state => state.counter.resultScore);
    
    return (
        <div className="end-game-container">
            <div className="title">Поздравляем!</div>
            <div className="subtitle">Вы прошли викторину и набрали <b>{score}</b> из <b>30</b> возможных баллов</div>
        </div>
    )
}

export default EndGame;