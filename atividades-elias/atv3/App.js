import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const botafogoSAF = {
  name: "Botafogo SAF",
  description:
    "A Botafogo SAF é a sociedade anônima de futebol do Botafogo de Futebol e Regatas. Desde sua criação, busca reestruturar o clube, tornando-o mais competitivo e sustentável financeiramente.",
  foundation: "2021",
  owner: "John Textor",
  stadium: "Estádio Nilton Santos",
  capacity: "46.931",
  image: "https://i0.wp.com/prdnetshoes.wpcomstaging.com/wp-content/uploads/2022/02/botafogo20220111.png?fit=1256%2C500&ssl=1",
  squad: [
    { 
      id: "1", 
      name: "Tiquinho Soares", 
      position: "Atacante", 
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRKOIGk0AuD73FaKIdMr1eJih9odSh-8y5xRJg_qRRLAI9cvCCiyf9C1w1-iFolN2mWZmpzRPfdoyw2-aw",
      bio: "Tiquinho Soares é um atacante brasileiro conhecido por sua presença de área e faro de gol.",
      nationality: "Brasil",
      age: "33 anos",
      height: "1,87m",
      titles: ["Campeonato Português (2018)", "Taça de Portugal (2020)"]
    },
    { 
      id: "2", 
      name: "Gatito Fernández", 
      position: "Goleiro", 
      image: "https://s2-ge.glbimg.com/DzvmpCDrdqUvwbH3Nsdx0ZuCeCU=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/N/p/D8nwxsSWu1UlTqXp6ikw/53471113184-ba863f7ea9-k.jpg",
      bio: "Gatito Fernández é um goleiro paraguaio reconhecido por suas defesas decisivas e segurança na meta.",
      nationality: "Paraguai",
      age: "36 anos",
      height: "1,92m",
      titles: ["Campeonato Carioca (2018)", "Copa América (2011)"]
    },
    { 
      id: "3", 
      name: "Marçal", 
      position: "Lateral Esquerdo", 
      image: "https://s2-ge.glbimg.com/5anpD-N-elRERS5GNFLxvQBitaQ=/0x0:1280x853/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/J/N/DuUnDUQo2dTFWdanyH9g/whatsapp-image-2022-06-16-at-10.11.17.jpeg",
      bio: "Marçal é um lateral experiente que jogou na Premier League antes de reforçar o Botafogo.",
      nationality: "Brasil",
      age: "34 anos",
      height: "1,79m",
      titles: ["Ligue 1 (2018)", "Campeonato Inglês - Vice (2020)"]
    }
  ],
};

const BotafogoScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: botafogoSAF.image }} style={styles.teamLogo} />

      <View style={styles.infoContainer}>
        <Text style={styles.teamName}>{botafogoSAF.name}</Text>
        <Text style={styles.description}>{botafogoSAF.description}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text>📅 Fundação: {botafogoSAF.foundation}</Text>
        <Text>🏠 Proprietário: {botafogoSAF.owner}</Text>
        <Text>🏟 Estádio: {botafogoSAF.stadium}</Text>
        <Text>👥 Capacidade: {botafogoSAF.capacity}</Text>
      </View>

      <Text style={styles.sectionTitle}>⚽ Elenco</Text>
      <FlatList
        data={botafogoSAF.squad}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.playerItem} 
            onPress={() => navigation.navigate("PlayerDetails", { player: item })}
          >
            <Image source={{ uri: item.image }} style={styles.playerImage} />
            <View>
              <Text style={styles.playerName}>{item.name}</Text>
              <Text style={styles.playerPosition}>{item.position}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const PlayerDetailsScreen = ({ route, navigation }) => {
  const { player } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: player.image }} style={styles.playerImageLarge} />
      <Text style={styles.playerName}>{player.name}</Text>
      <Text style={styles.playerBio}>{player.bio}</Text>

      <View style={styles.detailsContainer}>
        <Text>📌 <Text style={styles.detailLabel}>Posição:</Text> {player.position}</Text>
        <Text>🌍 <Text style={styles.detailLabel}>Nacionalidade:</Text> {player.nationality}</Text>
        <Text>🎂 <Text style={styles.detailLabel}>Idade:</Text> {player.age}</Text>
        <Text>📏 <Text style={styles.detailLabel}>Altura:</Text> {player.height}</Text>
      </View>

      <Text style={styles.sectionTitle}>🏆 Títulos</Text>
      <FlatList
        data={player.titles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.certItem}>
            <Ionicons name="trophy-outline" size={20} color="gold" />
            <Text style={styles.certText}>{item}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BotafogoSAF" component={BotafogoScreen} />
        <Stack.Screen name="PlayerDetails" component={PlayerDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  teamLogo: { width: "100%", height: 200, resizeMode: "contain" },
  playerImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  playerImageLarge: { width: "100%", height: 250, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginTop: 15, marginLeft: 15 },
  playerItem: { flexDirection: "row", alignItems: "center", padding: 10, borderRadius: 10, backgroundColor: "#fff", elevation: 2, margin: 5 },
  backButton: { flexDirection: "row", alignItems: "center", padding: 15, alignSelf: "center" },
  backText: { fontSize: 18, marginLeft: 5 },
});
