import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil Mesin</Text>
        <Text style={styles.headerSubtitle}>PT. Manufaktur Maju</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        
        {/* MESIN 1 */}
        <View style={styles.card}>
          <View style={styles.machineRow}>
            <Image 
              source={require('./assets/Mesin_CNC.jpg')} 
              style={styles.machineImage}
            />
            <View style={styles.machineInfo}>
              <Text style={styles.machineName}>Mesin CNC 5000</Text>
              <Text style={styles.machineYear}>Tahun Pembuatan: 2022</Text>
              <View style={styles.statusActive}>
                <Text style={styles.statusText}>● AKTIF</Text>
              </View>
            </View>
          </View>
        </View>

        {/* MESIN 2 */}
        <View style={styles.card}>
          <View style={styles.machineRow}>
            <Image 
              source={require('./assets/Mesin_Injection.jpg')} 
              style={styles.machineImage}
            />
            <View style={styles.machineInfo}>
              <Text style={styles.machineName}>Mesin Injection Molding</Text>
              <Text style={styles.machineYear}>Tahun Pembuatan: 2020</Text>
              <View style={styles.statusWarning}>
                <Text style={styles.statusText}>● PERAWATAN</Text>
              </View>
            </View>
          </View>
        </View>

        {/* MESIN 3 */}
        <View style={styles.card}>
          <View style={styles.machineRow}>
            <Image 
              source={require('./assets/Mesin_Press.png')} 
              style={styles.machineImage}
            />
            <View style={styles.machineInfo}>
              <Text style={styles.machineName}>Mesin Press Hidrolik</Text>
              <Text style={styles.machineYear}>Tahun Pembuatan: 2023</Text>
              <View style={styles.statusActive}>
                <Text style={styles.statusText}>● AKTIF</Text>
              </View>
            </View>
          </View>
        </View>

        {/* MESIN 4 */}
        <View style={styles.card}>
          <View style={styles.machineRow}>
            <Image 
              source={require('./assets/Mesin_Bor.jpg')} 
              style={styles.machineImage}
            />
            <View style={styles.machineInfo}>
              <Text style={styles.machineName}>Mesin Bor Otomatis</Text>
              <Text style={styles.machineYear}>Tahun Pembuatan: 2021</Text>
              <View style={styles.statusIdle}>
                <Text style={styles.statusText}>● IDLE</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  scrollView: {
    flex: 1,
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  machineRow: {
    flexDirection: 'row',  // Membuat gambar di kiri, teks di kanan
    alignItems: 'center',
  },
  machineImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  machineInfo: {
    flex: 1,
  },
  machineName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  machineYear: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  statusActive: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  statusWarning: {
    backgroundColor: '#fed7aa',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  statusIdle: {
    backgroundColor: '#e2e3e5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});