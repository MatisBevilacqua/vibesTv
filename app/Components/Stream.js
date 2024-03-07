import { WebView } from 'react-native-webview';

export default function Stream(){
    return(
        <WebView source={{ uri: 'https://player.infomaniak.com?channel=72318&player=11865' }} style={{ height: 90}} />
    );
}
