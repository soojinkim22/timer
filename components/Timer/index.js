import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as tomatoActions } from '../../reducer';
import Timer from './presenter';
// state에서 데이터를 가져오는 것을 관리
// 현재 state을 불러옴
function mapStateToProps(state) {
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying, elapsedTime, timerDuration
    }
}

// action을 리듀서로 보내는 function
function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer : bindActionCreators(tomatoActions.restartTimer, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer);