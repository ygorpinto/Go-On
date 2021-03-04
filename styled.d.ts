import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {

        title: string;
    
        color: {
            white: string;
            background: string;
            grayLine: string;
            text: string;
            title: string;
            textHighlight: string;
            red: string;
            green: string;
            blue: string;
            blueDark: string;
            blueTwitter: string;
        }
    }
}
