import * as React from 'react';
import { Video, ResizeMode } from 'expo-av';
import Mp4 from '../../assets/mp4/jungle.mp4';

export default function Movie(){

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
  
    return(
        <Video
            style={{ width: '90%', borderRadius: 10 , height: '35%', marginTop: 30}}
            ref={video}
            source={Mp4}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            shouldPlay
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    );
}
