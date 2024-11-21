import { Center, Spinner } from "@gluestack-ui/themed";



export default function Loading(){
    return (
        <Center 
        flexDirection="row"
        justifyContent="space-around"
        w={170}
        h={90}
        alignItems="center"
        rounded='$3xl'
        marginBottom='$8'
        borderColor="$coolGray700"
        bg='$coolGray300'
        >

            <Spinner size="large" color="$coolGray700"  />
        </Center>
    );
}