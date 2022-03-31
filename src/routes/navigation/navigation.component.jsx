import { Fragment } from "react";

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className={'navigation-container'}>
                <div className={'main-navigation-container'}>
                    <div className={'logo-container'}>
                        Song<span>bird</span>
                    </div>
                    <div className={'score'}>
                        Score: 0
                    </div>
                </div>
                <div className={'secondary-navigation-container'}>
                    <div className={'nav-link'}>Разминка</div>
                    <div className={'nav-link'}>Воробьиные</div>
                    <div className={'nav-link'}>Лесные птицы</div>
                    <div className={'nav-link'}>Певчие птицы</div>
                    <div className={'nav-link'}>Хищные птицы</div>
                    <div className={'nav-link'}>Моркие птицы</div>
                </div>
            </div>
        </Fragment>
    )
};

export default Navigation;