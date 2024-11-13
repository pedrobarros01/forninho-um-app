import { Image, Pressable, Text } from "@gluestack-ui/themed";
import Ligar from '../../imgs/ligar.png';
import Ligado from '../../imgs/ledLigado.png';
import Desligado from '../../imgs/ledDesligado.png';
import { useState } from "react";
export interface ButtonLedProps {
    id: number;
    ledLigado: boolean
}

export default function ButtonLed({id, ledLigado}: ButtonLedProps){
    const [ligado, setLigado] = useState<boolean>(false);
    function changeTurn(){
        setLigado(prevState => !prevState)
    }
    return(
        <Pressable
        flexDirection="row"
        justifyContent="space-around"
        w={170}
        h={90}
        bgColor={(id === 3 || id === 4 || id === 0) ? `$ledVermelho${ledLigado ? 'Ativado' : 'Desativado'}` : (id === 1 || id === 6 || id === 7) ? `$ledAmarelo${ledLigado ? 'Ativado' : 'Desativado'}` : `$ledVerde${ledLigado ? 'Ativado' : 'Desativado'}`}
        alignItems="center"
        rounded='$3xl'
        marginBottom='$8'
        onPress={changeTurn}
        >
            <Image source={Ligar} h={30} w={30} size='sm' alt='Aoba'/>
            <Text color="$white">LED {id}</Text>
            {ligado ? <Image source={Ligado}  h={45} w={30}  size='sm' alt='Aoba' /> : <Image source={Desligado}  h={45} w={30}  size='sm' alt='Aoba' />}
            
        </Pressable>
    );
}