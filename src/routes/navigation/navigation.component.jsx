import { Fragment } from "react";
import { useSelector } from "react-redux";

import CounterScore from "../../components/counter-score/counter-score.component";

import '../../routes/navigation/navigation.styles.scss';

const Navigation = () => {
    const level = useSelector(state => state.bird.level);

    const selectNav = (id) => {
        if (level === id) return 'select';
        else return ' ';
    }


    return (
        <>
            <div className={'navigation-container'}>
                <div className={'main-navigation-container'}>
                    <div className={'logo-container'}>
                        Song<span>bird</span>
                    </div>
                    <div className={'score'}>
                        <CounterScore />
                    </div>
                </div>
                <div className={'secondary-navigation-container'}>
                    <div className={`${selectNav(0)} nav-link`}>Разминка</div>
                    <div className={`${selectNav(1)} nav-link`}>Воробьиные</div>
                    <div className={`${selectNav(2)} nav-link`}>Лесные птицы</div>
                    <div className={`${selectNav(3)} nav-link`}>Певчие птицы</div>
                    <div className={`${selectNav(4)} nav-link`}>Хищные птицы</div>
                    <div className={`${selectNav(5)} nav-link`}>Морские птицы</div>
                </div>
            </div>
        </>
    )
};

export default Navigation;