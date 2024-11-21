import { Image, Pressable, Text, Toast, useToast } from "@gluestack-ui/themed";
import Ligar from '../../imgs/ligar.png';
import Ligado from '../../imgs/ledLigado.png';
import Desligado from '../../imgs/ledDesligado.png';
import { useState } from "react";
import { ToastTitle } from "@gluestack-ui/themed";
import { ToastDescription } from "@gluestack-ui/themed";
import { AppError } from "../../utils/AppError";
import Loading from "../Loading";
export interface ButtonLedProps {
    id: number;
    ledLigado: boolean
}

export default function ButtonLed({id, ledLigado}: ButtonLedProps){
    const [ligado, setLigado] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const toast = useToast();
    async function changeTurn(){
        try {
            setLoading(true);
            console.log(ligado);
            if(!ligado){
                const url = `http://192.168.88.242:8000/led/on/${id}`;
                const response = await fetch(url);
        
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} - ${response.statusText}`);
                }
        
                const data = await response.json();
                console.log('LED controlado com sucesso:', data);
                
            }else{
                const url = `http://192.168.88.242:8000/led/off/${id}`;
                const response = await fetch(url);
        
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} - ${response.statusText}`);
                }
        
                const data = await response.json();
                console.log('LED controlado com sucesso:', data);
            }
            setLigado(prevState => !prevState);
            
        } catch (error) {
            console.error('Erro ao controlar o LED:', error);
    
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.mensagem : "Não foi possível ligar o LED";
    
            toast.show({
                placement: "bottom",
                render: ({ id }) => {
                    const toastId = "toast-" + id;
                    return (
                        <Toast nativeID={toastId} action="error" variant="accent">
                            <ToastTitle>{title}</ToastTitle>
                        </Toast>
                    );
                },
            });
        } finally {
            setLoading(false);
        }
    }
    if(loading){
        return <Loading />
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