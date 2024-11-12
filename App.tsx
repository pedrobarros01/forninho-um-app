
import { Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import Container from './components/Container';
import { config } from './gluestack-ui.config';
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
      <Text color='$white'>Ola Mundo</Text>
    </Container>
  );
};


