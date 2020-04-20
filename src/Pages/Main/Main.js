import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Main.scss';

class Main extends Component {
    render() {
        return(
            <div className='Main'>
                <div className='navi'>
                    this is navi
                </div>
                <div className='topPic'>
                    <div className='topPicWrapper'>
                        <div className='topPicTitle'>
                            반려동물 외출 도우미 - 비마이펫 플레이스
                        </div>
                        <div className='topPicDes'>
                            비마이펫 플레이스를 통하여 반려동물 동반 장소들을 찾아보세요
                        </div>
                        <div className='topPicInputs'>
                            <input />
                            <select/>
                            <button/>
                        </div>
                    </div>
                </div>
                <div className='whereTo'>
                    here is where to
                </div>
                <div className='newPlace'>
                    here is new place
                </div>
                <div className= 'registerPlace'>
                    here is register place
                </div>




                <div className='footer'>
                    this is Footer
                </div>
            </div>
        )
    }
}

export default withRouter(Main);