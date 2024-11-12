import { createConfig } from "@gluestack-ui/themed";
import { config as DefaultConfig } from "@gluestack-ui/config";
export const config = createConfig(
    {
        ...DefaultConfig,
        tokens: {
            ...DefaultConfig.tokens,
            colors: {
                ...DefaultConfig.tokens.colors,
                forninhoBackground: '#131729',
                ledVermelhoAtivado: '#FF0000',
                ledAmareloAtivado: '#E8B038',
                ledVerdeAtivado: '#009A00',
                ledVermelhoDesativado: '#3E0000',
                ledAmareloDesativado: '#473203',
                ledVerdeDesativado: '#002100'
            }
            
        }
    }
);