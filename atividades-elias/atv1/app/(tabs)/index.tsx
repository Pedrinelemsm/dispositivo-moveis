import { Image, StyleSheet, View, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
  headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
  headerImage={
    <Image
      source={{
        uri: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m22i3nyc6c4k89'
      }}
      style={styles.imagemLogo}
      resizeMode="cover" 
    />
  }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem Vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Objeto</ThemedText>
        <ThemedView style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/fusca1.jpg')} 
            style={styles.reactLogo}
            resizeMode="contain" 
          />
          <Text style={styles.textInfo}>
            VW - Fusca{"\n"}
            Ano: 1978{"\n"}
            Cor: Preto
          </Text>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <Image
            source={{
              uri: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m22i3nyc6c4k89'
            }} 
            style={styles.reactLogo}
            resizeMode="contain" 
          />
          <Text style={styles.textInfo}>
          Gol - VW{"\n"}
          Ano: 2024{"\n"}
          Cor: Cinza
          </Text>      
          </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuUSKNCyAmsWMTKQrTpt0f1q_KvcRAKpWoBRWdSfbIrlyMAbGWJuy_YwP3_CjG0jMnog&usqp=CAU'
            }} 
            style={styles.reactLogo}
            resizeMode="contain" 
          />
          <Text style={styles.textInfo}>
          Mobi - fiat{"\n"}
          Ano: 2024{"\n"}
          Cor: Preto
          </Text>            
          </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300, 
    width: '100%', 
    marginBottom: 10, 
  },
  imagemLogo: {
    height: 250,
    width: '100%', 
    position: 'relative', 
  },
  imageContainer: {
    marginBottom: 15,
  },
  textInfo: {
    marginTop: 10,
    fontSize: 18,
    color: 'gray', 
  }
});
