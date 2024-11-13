
import { Box, GluestackUIProvider, Image, Text } from '@gluestack-ui/themed';
import Container from './components/Container';
import { config } from './gluestack-ui.config';
import Title from './components/Title';
import Forno from './imgs/Forninho.png';
import ButtonLed, { ButtonLedProps } from './components/ButtonLed';
const botoes: Array<ButtonLedProps> = [
  { id: 0, ledLigado: true },
  { id: 1, ledLigado: false },
  { id: 2, ledLigado: true },
  { id: 3, ledLigado: false },
  { id: 4, ledLigado: true },
  { id: 5, ledLigado: false },
  { id: 6, ledLigado: true },
  { id: 7, ledLigado: false }
];

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}
const Home = () => {
  return (
    <Container>
      <Box w="$full" h='$2/6' justifyContent='center' alignItems='center' flexDirection='column' paddingTop='$24'>
        <Image source={Forno} h={150} size='xl' alt='Aoba'/>
        <Title>FORNINHO 1</Title>
      </Box>
      <Box  w="$full" h='$4/6' justifyContent='space-around' alignItems='center' flexDirection='row' flexWrap='wrap' >
        {botoes.map((value, index) => {
          return (<ButtonLed id={value.id} ledLigado={value.ledLigado} key={index} />);
        })}
      </Box>
    </Container>
  );
};


