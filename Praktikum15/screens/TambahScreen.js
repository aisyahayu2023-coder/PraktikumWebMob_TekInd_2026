import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

const TambahScreen = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');

  const handleSimpan = () => {
    if (!nama || !harga || !stok) {
      Alert.alert('Error', 'Semua field harus diisi!');
      return;
    }

    // Kirim data kembali ke HomeScreen
    navigation.navigate('Home', {
      barangBaru: {
        id: Date.now().toString(),
        name: nama,
        price: `Rp ${harga}`,
        stock: parseInt(stok),
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Barang Baru</Text>

      <Text style={styles.label}>Nama Barang</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: Scanner"
        value={nama}
        onChangeText={setNama}
      />

      <Text style={styles.label}>Harga (Rp)</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 500000"
        keyboardType="numeric"
        value={harga}
        onChangeText={setHarga}
      />

      <Text style={styles.label}>Stok</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 10"
        keyboardType="numeric"
        value={stok}
        onChangeText={setStok}
      />

      <View style={styles.buttonContainer}>
        <Button title="Simpan Barang" onPress={handleSimpan} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 15, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginTop: 5, fontSize: 16 },
  buttonContainer: { marginTop: 30 },
});

export default TambahScreen;