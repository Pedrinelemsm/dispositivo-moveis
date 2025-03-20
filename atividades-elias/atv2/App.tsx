import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
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
    { id: "1", name: "Tiquinho Soares", position: "Atacante", image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRKOIGk0AuD73FaKIdMr1eJih9odSh-8y5xRJg_qRRLAI9cvCCiyf9C1w1-iFolN2mWZmpzRPfdoyw2-aw" },
    { id: "2", name: "Gatito Fernández", position: "Goleiro", image: "https://s2-ge.glbimg.com/DzvmpCDrdqUvwbH3Nsdx0ZuCeCU=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/N/p/D8nwxsSWu1UlTqXp6ikw/53471113184-ba863f7ea9-k.jpg" },
    { id: "3", name: "Marçal", position: "Lateral Esquerdo", image: "https://s2-ge.glbimg.com/5anpD-N-elRERS5GNFLxvQBitaQ=/0x0:1280x853/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/J/N/DuUnDUQo2dTFWdanyH9g/whatsapp-image-2022-06-16-at-10.11.17.jpeg" },
    { id: "4", name: "Savarino", position: "Meia", image: "https://tmssl.akamaized.net/images/foto/galerie/jefferson-savarino-botafogo-2024-1714916633-135761.jpg" },
    { id: "5", name: "Igor jesus", position: "Atacante", image: "https://tmssl.akamaized.net/images/foto/galerie/igor-jesus-botafogo-2024-1727385482-149514.jpg" },
  ],
};

const BotafogoScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: botafogoSAF.image }} style={styles.teamLogo} />

      <View style={styles.infoContainer}>
        <Text style={styles.teamName}>{botafogoSAF.name}</Text>
        <Text style={styles.description}>{botafogoSAF.description}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text>Fundação: {botafogoSAF.foundation}</Text>
        <Text>Proprietário: {botafogoSAF.owner}</Text>
        <Text>Estádio: {botafogoSAF.stadium}</Text>
        <Text>Capacidade: {botafogoSAF.capacity}</Text>
      </View>

      <Text style={styles.sectionTitle}>Elenco</Text>
      <FlatList
        data={botafogoSAF.squad}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.playerItem}>
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BotafogoSAF" component={BotafogoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  teamLogo: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  infoContainer: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  teamName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  detailsContainer: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  playerItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  playerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  playerPosition: {
    fontSize: 14,
    color: "gray",
  },
});
