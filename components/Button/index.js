import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Button({iconName, onPress}) {
    return (
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={80} color='white' />
        </TouchableOpacity>
    )
}

Button.protoTypes = {
    iconName : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired
}
export default Button;


// redux : react를 위한 state management tool
// redux가 필요한 이유는, 컴포넌트는 local state를 갖고 있고, 앱은 global state를 가지고 있기 때문
// global state(로그인 했는가..)는 모든 컴포넌트에 영향을 줌
// state는 공유 되어야함






// reducer는 데이터를 변경. action을 reducer에 보냄. 직접 reducer을 변경할 수 없음
/*{
    // app의 state을 추적
    // 카운팅을 하는지, 얼마나 오래 카운팅하는지, 얼마나 오래 카운팅하고 있었는지
    // 얘들을 redux store에 올려야함
    isCounting: true | false,
    countingDuration: 1500,
    elapsedTime: 0
}*/

