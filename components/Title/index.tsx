import { Text } from "@gluestack-ui/themed";
import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode
}

export default function Title(props: TitleProps){
    return(
        <Text color="$white" fontSize='$3xl' textAlign="center" w="$full" padding="$12">{props.children}</Text>
    );
}