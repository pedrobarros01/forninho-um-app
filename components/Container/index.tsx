
import { Box } from "@gluestack-ui/themed";
import { ReactNode } from "react";
import { ScrollView } from "react-native";
interface ContainerProps {
    children: ReactNode
}
export default function Container({children}: ContainerProps){
    return(
        <Box flex={1} backgroundColor="$forninhoBackground" >
            <ScrollView
                style={{
                height: '100%',
                }}
                contentContainerStyle={{
                flexGrow: 1,
                }}
            >
                {children}
            </ScrollView>
        </Box>
    );
}