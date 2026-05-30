import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { items as initialItems } from '../data/items';

const HomeScreen = ({ navigation, route }) => {
  const [items, setItems] = useState(initialItems);

  // Update status item jika ada perubahan dari DetailScreen
  React.useEffect(() => {
    if (route.params?.updatedItem) {
      const updatedItems = items.map(item =>
        item.id === route.params.updatedItem.id
          ? { ...item, status: route.params.updatedItem.status }
          : item
      );
      setItems(updatedItems);
      navigation.setParams({ updatedItem: null });
    }
  }, [route.params?.updatedItem]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detail', { itemData: item })}
    >
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemStandard} numberOfLines={1}>
        Standar: {item.standard.substring(0, 50)}...
      </Text>
      <Text style={[
        styles.itemStatus,
        item.status === 'Gagal' && styles.statusGagal,
        item.status === 'Lolos' && styles.statusLolos
      ]}>
        Status: {item.status}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inspeksi QC - Gudang</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' },
  item: { backgroundColor: 'white', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
  itemName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  itemStandard: { fontSize: 12, color: '#666', marginTop: 5 },
  itemStatus: { fontSize: 14, fontWeight: '600', marginTop: 8 },
  statusLolos: { color: 'green' },
  statusGagal: { color: 'red', fontWeight: 'bold' },
});

export default HomeScreen;