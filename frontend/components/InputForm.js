import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function InputForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [kualitas, setKualitas] = useState('');
  const [harga, setHarga] = useState('');
  const [kecepatan, setKecepatan] = useState('');
  const [ulasan, setUlasan] = useState('');

  const handleSubmit = () => {
    onSubmit({
      name,
      kualitas: parseFloat(kualitas),
      harga: parseFloat(harga),
      kecepatan_hari: parseFloat(kecepatan),
      ulasan: parseFloat(ulasan),
    });
    setName(''); setKualitas(''); setHarga(''); setKecepatan(''); setUlasan('');
  };

  return (
    <View style={styles.container}>
      <Text>Nama Alternatif:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text>Kualitas:</Text>
      <TextInput style={styles.input} value={kualitas} onChangeText={setKualitas} keyboardType="numeric" />
      <Text>Harga:</Text>
      <TextInput style={styles.input} value={harga} onChangeText={setHarga} keyboardType="numeric" />
      <Text>Kecepatan Hari:</Text>
      <TextInput style={styles.input} value={kecepatan} onChangeText={setKecepatan} keyboardType="numeric" />
      <Text>Ulasan:</Text>
      <TextInput style={styles.input} value={ulasan} onChangeText={setUlasan} keyboardType="numeric" />
      <Button title="Tambah Alternatif" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 5 },
});
