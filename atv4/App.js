import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  Button,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const players = [
  {
    id: '1',
    name: 'Lucas Perri',
    position: 'Goleiro',
    bio: 'Segurança no gol, com grandes defesas e excelente posicionamento.',
    experience: '3 anos no Botafogo',
    nationality: 'Brasil',
    image: 'https://conteudo.imguol.com.br/c/esporte/55/2023/05/01/lucas-perri-ex-sao-paulo-e-goleiro-do-botafogo-1682994526883_v2_450x600.jpg',
    achievements: ['Melhor goleiro do Carioca 2024', 'Defesas decisivas em clássicos'],
  },
  {
    id: '2',
    name: 'Damián Suárez',
    position: 'Lateral Direito',
    bio: 'Experiência e raça na defesa, com grande presença ofensiva.',
    experience: '1 ano no Botafogo',
    nationality: 'Uruguai',
    image: 'https://s2-oglobo.glbimg.com/DpkZqFaJ6qxAsG7Poh20iUw979Y=/0x0:3543x2362/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/I/H/u7naLUTIy29vscaYcKMQ/53879469536-94f20bf86d-o.jpg',
    achievements: ['Liderança na defesa', 'Experiência internacional'],
  },
  {
    id: '3',
    name: 'Adryelson',
    position: 'Zagueiro',
    bio: 'Firmeza na defesa, com ótimo tempo de bola e posicionamento.',
    experience: '2 anos no Botafogo',
    nationality: 'Brasil',
    image: 'https://conteudo.imguol.com.br/c/esporte/00/2023/07/23/adryelson-comemora-apos-marcar-o-gol-do-empate-do-botafogo-contra-o-santos-pelo-brasileirao-1690147533020_v2_450x600.jpg',
    achievements: ['Melhor zagueiro da temporada', 'Convocado para seleção'],
  },
  {
    id: '4',
    name: 'Igor Jesus',
    position: 'Atacante',
    bio: 'Atacante moderno com bom passe e leitura de jogo.',
    experience: '1 ano no Botafogo',
    nationality: 'Brasil',
    image: 'https://a.espncdn.com/photo/2024/0902/r1381070_1296x518_5-2.jpg',
    achievements: ['Contratação destaque de 2025'],
  },
  {
    id: '5',
    name: 'Marçal',
    position: 'Lateral Esquerdo',
    bio: 'Experiência internacional e excelente apoio ao ataque.',
    experience: '3 anos no Botafogo',
    nationality: 'Brasil',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ2Dmo_aJj9eAMGK46zSZzgJ-ypep36Wi-w&s',
    achievements: ['Assistências importantes', 'Liderança em campo'],
  },
  {
    id: '6',
    name: 'Danilo Barbosa',
    position: 'Volante',
    bio: 'Volante técnico, com boa marcação e chegada ao ataque.',
    experience: '2 anos no Botafogo',
    nationality: 'Brasil',
    image: 'https://lncimg.lance.com.br/uploads/2024/12/danilobarbosa_botafogo-scaled-aspect-ratio-512-320.jpg',
    achievements: ['Destaque defensivo de 2024'],
  },
  {
    id: '7',
    name: 'Tchê Tchê',
    position: 'Volante',
    bio: 'Polivalente e dinâmico, atua em várias posições do meio-campo.',
    experience: '2 anos no Botafogo',
    nationality: 'Brasil',
    image: 'https://s2-ge.glbimg.com/vNiDjofEywRhTx5VKHASzhSUjQY=/0x0:1600x1066/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/n/u/W9dAQVR6SSv6hpuUZ6yA/tche.jpg',
    achievements: ['Regularidade e intensidade em campo'],
  },
  {
    id: '8',
    name: 'Eduardo',
    position: 'Meia',
    bio: 'Cérebro do meio-campo, com ótima visão de jogo e passes precisos.',
    experience: '3 anos no Botafogo',
    nationality: 'Brasil',
    image: 'https://s2-ge.glbimg.com/ZEQfYSxZH__4eEpGm9hn1kqpBuY=/0x0:3543x2362/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/m/8/aZ0dzzQemPBtX924NPgQ/carlos.jpg',
    achievements: ['Maestro do time', 'Mais assistências em 2024'],
  },
  {
    id: '9',
    name: 'Luiz Henrique',
    position: 'Atacante',
    bio: 'Habilidoso e rápido, desequilibra pela ponta esquerda.',
    experience: 'Reforço para 2025',
    nationality: 'Brasil',
    image: 'https://s2-oglobo.glbimg.com/2NlxrAj62kvSiqMrsuDMY6o_rYc=/0x0:2048x1365/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/m/k/XcNU6gTHaR5oFB3sVyHQ/54089384141-9ad68985b5-k.jpg',
    achievements: ['Revelação no futebol europeu'],
  },
  {
     id: '10',
    name: 'Savarino',
    position: 'Atacante',
    bio: 'Venezuelano veloz e criativo, atua pelos lados do campo.',
    experience: '1 ano no Botafogo',
    nationality: 'Venezuela',
    image: 'https://s2-ge.glbimg.com/SRY77fpiTlygoemGH-OMU1PDN8E=/0x0:3360x2240/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/l/I/av5DNfStqY7FAbWW4q0Q/000-36em24h.jpg',
    achievements: ['Contratação importante para 2025'],
  },
  {
    id: '11',
    name: 'Tiquinho Soares',
    position: 'Atacante',
    bio: 'Artilheiro do time, conhecido pela presença de área e finalização precisa.',
    experience: '3 anos no Botafogo',
    nationality: 'Brasil',
    image: 'https://conteudo.imguol.com.br/c/esporte/16/2023/06/10/tiquinho-soares-do-botafogo-comemora-contra-o-fortaleza-pelo-brasileirao-1686448131563_v2_1920x1279.jpg',
    achievements: ['Artilheiro do Brasileirão 2023', 'Melhor jogador da temporada'],
  },
];

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [comments, setComments] = useState('');
  const [interestLevel, setInterestLevel] = useState('baixo');
  const [supportArea, setSupportArea] = useState('camisa');
  const [knowledge, setKnowledge] = useState(50);
  const [passion, setPassion] = useState(30);
  const [notifications, setNotifications] = useState(false);
  const [shareData, setShareData] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1k9o6746ybRQ3Z_oVXeAKhrADgrmBN6FqiA&s' }}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Elenco Botafogo 2025</Text>
      </View>

      {selectedPlayer ? (
        <ScrollView contentContainerStyle={styles.detailsContainer}>
          <Image source={{ uri: selectedPlayer.image }} style={styles.largeImage} />
          <Text style={styles.name}>{selectedPlayer.name}</Text>
          <Text style={styles.description}>{selectedPlayer.bio}</Text>
          <Text style={styles.detail}>Posição: {selectedPlayer.position}</Text>
          <Text style={styles.detail}>Experiência: {selectedPlayer.experience}</Text>
          <Text style={styles.detail}>Nacionalidade: {selectedPlayer.nationality}</Text>

          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Formulário do Torcedor</Text>

            <TextInput style={styles.input} placeholder="Seu nome" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Seu email" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Sua posição favorita" value={position} onChangeText={setPosition} />
            <TextInput style={styles.input} placeholder="Comentários sobre o jogador" value={comments} onChangeText={setComments} multiline />

            <View style={styles.pickerContainer}>
              <Text style={styles.label}>Nível de interesse:</Text>
              <Picker selectedValue={interestLevel} onValueChange={setInterestLevel}>
                <Picker.Item label="Baixo" value="baixo" />
                <Picker.Item label="Médio" value="medio" />
                <Picker.Item label="Alto" value="alto" />
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.label}>Área que você apoia:</Text>
              <Picker selectedValue={supportArea} onValueChange={setSupportArea}>
                <Picker.Item label="Compra de Camisas" value="camisa" />
                <Picker.Item label="Ingressos" value="ingresso" />
                <Picker.Item label="Sócio-torcedor" value="socio" />
              </Picker>
            </View>

            <View style={styles.sliderContainer}>
              <Text style={styles.label}>Conhecimento sobre o jogador: {knowledge}%</Text>
              <Slider value={knowledge} onValueChange={setKnowledge} minimumValue={0} maximumValue={100} step={5} />
            </View>

            <View style={styles.sliderContainer}>
              <Text style={styles.label}>Paixão pelo Fogão: {passion}%</Text>
              <Slider value={passion} onValueChange={setPassion} minimumValue={0} maximumValue={100} step={5} />
            </View>

            <View style={styles.switchContainer}>
              <Text style={styles.label}>Deseja receber novidades?</Text>
              <Switch value={notifications} onValueChange={setNotifications} />
            </View>

            <View style={styles.switchContainer}>
              <Text style={styles.label}>Compartilhar feedback com o clube?</Text>
              <Switch value={shareData} onValueChange={setShareData} />
            </View>

            <Button title="Enviar Formulário" onPress={handleSubmit} color="#28a745" />
            {submitted && <Text style={styles.successMessage}>Formulário enviado com sucesso!</Text>}
          </View>

          <TouchableOpacity onPress={() => setSelectedPlayer(null)} style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => setSelectedPlayer(item)}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.position}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#000' },
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#000', padding: 16 },
  logo: { width: 40, height: 40, marginRight: 10 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  container: { flex: 1, padding: 20, backgroundColor: '#f0f0f0' },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 10, flexDirection: 'row', alignItems: 'center', elevation: 3 },
  image: { width: 80, height: 80, borderRadius: 40, marginRight: 15 },
  largeImage: { width: '100%', height: 250, borderRadius: 10, marginBottom: 10 },
  textContainer: { flex: 1 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#111' },
  description: { fontSize: 14, color: '#555' },
  detail: { fontSize: 14, marginTop: 4, color: '#333' },
  detailsContainer: { flexGrow: 1, paddingBottom: 30, backgroundColor: '#fff', padding: 16 },
  formSection: { backgroundColor: '#f8f8f8', borderRadius: 10, padding: 15, marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10, backgroundColor: '#fff' },
  pickerContainer: { marginBottom: 15 },
  label: { fontWeight: '600', marginBottom: 5 },
  sliderContainer: { marginBottom: 15 },
  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  successMessage: { color: 'green', textAlign: 'center', marginTop: 10 },
  backButton: { marginTop: 20, alignItems: 'center' },
  backButtonText: { color: '#007bff', fontWeight: 'bold' },
});
