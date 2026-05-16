import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Bagian Header */}
      <View style={styles.header}>
        
        {/* LATIHAN 1: GAMBAR/IKON - PAKAI URL (PASTI MUNCUL) */}
        <Image 
           source={require('./assets/logo.png')} 
          style={styles.logo}
        />
        
        <Text style={styles.headerTitle}>PT. Manufaktur Maju</Text>
        <Text style={styles.headerSubtitle}>Aplikasi Monitoring Gudang</Text>
      </View>
    <ScrollView>
{/* Bagian Konten Utama */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Selamat Datang, Operator!</Text>

        {/* Kartu Gudang A */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => Alert.alert("Info", "Membuka Detail Stok Gudang A...")}
        >
          <Text style={styles.cardTitle}>Status Gudang A</Text>
          <Text style={styles.cardValue}>Kapasitas: 85%</Text>
          <Text style={styles.cardStatus}>TEKAN UNTUK DETAIL</Text>
        </TouchableOpacity>

        {/* Kartu Gudang B */}
        <View style={[styles.card, styles.cardWarning]}>
          <Text style={styles.cardTitle}>Status Gudang B</Text>
          <Text style={styles.cardValue}>Kapasitas: 45%</Text>
          <Text style={styles.cardStatus}>HATI-HATI</Text>
        </View>

        {/* Kartu Gudang C */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang C</Text>
          <Text style={styles.cardValue}>Kapasitas: 92%</Text>
          <Text style={styles.cardStatusPenuh}>PENUH</Text>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1e3a8a',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#d1d5db',
    fontSize: 14,
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardWarning: {
    backgroundColor: '#fff3e0',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 14,
    marginTop: 5,
  },
  cardStatus: {
    marginTop: 5,
    color: '#2563eb',
    fontWeight: 'bold',
  },
  cardStatusPenuh: {
    marginTop: 5,
    color: '#dc2626',
    fontWeight: 'bold',
  },
});