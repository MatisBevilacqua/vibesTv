import { Image } from 'expo-image';
import LogoApp from '../../assets/img/logo.png';

export default function Logo(){
    return(
        <Image
        style={{ width: 95, height: 50}}
        source={LogoApp}
      />
    );
}