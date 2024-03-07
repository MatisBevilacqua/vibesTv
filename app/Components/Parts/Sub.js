import {Text} from 'react-native';

export default function Sub(props){
    return (
        <>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#FFF' }}>{props.sub}</Text>
        </>
    );
}