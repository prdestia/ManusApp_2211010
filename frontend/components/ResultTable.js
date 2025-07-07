import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ResultTable({ results }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hasil Perhitungan</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.score.toFixed(4)}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.row}>
            <Text style={[styles.cell, styles.header]}>Alternatif</Text>
            <Text style={[styles.cell, styles.header]}>Skor</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, borderBottomWidth: 1, borderColor: '#ccc' },
  cell: { flex: 1, textAlign: 'center' },
  header: { fontWeight: 'bold' },
});
