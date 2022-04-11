import AudioPlayer from '../audio-player/audio-player.component';

import './answer-block.styles.scss';

const AnswerBlock = () => {
    return (
        <div className='answer-block-container'>
            <div className='information-bird'>
                <div className='image-bird'>
                    <img src='https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg'/>
                </div>
                <div className='description-bird'>
                    <div className='name-bird'>
                        Ястреб
                    </div>
                    <hr/>
                    <div className='kind-bird'>
                        Accipiter gentilis
                    </div>
                    <hr/>
                    <div className='song-bird'>
                        <AudioPlayer />
                    </div>
                </div>
            </div>
            <div className='text-description-bird'>
            Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.
            </div>
        </div>
    )
};

export default AnswerBlock;