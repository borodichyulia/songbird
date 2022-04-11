import AudioPlayer from '../audio-player/audio-player.component';

import './question-block.styles.scss';

const QuestionBlock = () => {
    return (
        <div className='question-block-container'>
            <div className='image-bird'>
                <img src='https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg'/>
            </div>
            <div className='description-question'>
                <div className='name-bird'>
                    Ястреб
                </div>
                <hr/>
                <div className='song-bird'>
                    <AudioPlayer />
                </div>
            </div>
        </div>
    )
};

export default QuestionBlock;