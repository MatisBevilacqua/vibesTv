import {Text} from 'react-native';

export default function Title(props){
    return (
        <>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{props.title}</Text>
        </>
    );
}