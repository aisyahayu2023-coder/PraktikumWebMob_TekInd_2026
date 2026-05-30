import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DetailScreen = ({ navigation, route }) => {
  const { itemData } = route.params;
  const [status, setStatus] = useState(itemData.status || 'Belum Inspeksi');

  const handleSimpan = () => {
    Alert.alert(
      'Konfirmasi',
      `Item "${itemData.name}" dinyatakan: ${status}`,
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Simpan',
          onPress: () => {
            navigation.navigate('Home', {
              updatedItem: { id: itemData.id, status: status }
            });
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Foto Item */}
      <Image source={{ uri: itemData.image }} style={styles.image} />

      {/* Nama Item */}
      <Text style={styles.name}>{itemData.name}</Text>

      {/* Standar Kualitas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Standar Kualitas:</Text>
        <Text style={styles.standard}>{itemData.standard}</Text>
      </View>

      {/* Dropdown Status */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Status Inspeksi:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={status}
            onValueChange={(itemValue) => setStatus(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="🔘 Belum Inspeksi" value="Belum Inspeksi" />
            <Picker.Item label="✅ Lolos" value="Lolos" />
            <Picker.Item label="❌ Gagal" value="Gagal" />
          </Picker>
        </View>
      </View>

      {/* Tombol Simpan */}
      <TouchableOpacity style={styles.button} onPress={handleSimpan}>
        <Text style={styles.buttonText}>Simpan Hasil Inspeksi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20, backgroundColor: '#eee' },
  name: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#555', marginBottom: 8 },
  standard: { fontSize: 14, color: '#333', lineHeight: 20, backgroundColor: '#f9f9f9', padding: 12, borderRadius: 8 },
  pickerContainer: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, overflow: 'hidden' },
  picker: { height: 50, width: '100%' },
  button: { backgroundColor: '#2196F3', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default DetailScreen;