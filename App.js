import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import InfoCard from './src/components/InfoCard';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
  { id: '6', nama: 'Farhan Akbar', prodi: 'Teknologi Informasi' },
  { id: '7', nama: 'Gita Maharani', prodi: 'Teknik Informatika' },
];

export default function App() {
  const [keyword, setKeyword] = useState('');

  const mahasiswaFiltered = DAFTAR_MAHASISWA.filter((mahasiswa) =>
    mahasiswa.nama.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  const renderMahasiswa = ({ item }) => (
    <View style={styles.studentCard}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.nama.charAt(0).toUpperCase()}</Text>
      </View>
      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{item.nama}</Text>
        <Text style={styles.studentProdi}>{item.prodi}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7FB" />
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.content}
        data={mahasiswaFiltered}
        keyExtractor={(item) => item.id}
        renderItem={renderMahasiswa}
        ListHeaderComponent={
          <View>
            <Text style={styles.eyebrow}>MOBILE COMPUTING • UTS</Text>
            <Text style={styles.heading}>Student Directory</Text>
            <Text style={styles.subtitle}>Cari mahasiswa berdasarkan nama secara langsung.</Text>

            <View style={styles.searchBox}>
              <Text style={styles.searchIcon}>⌕</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Cari nama mahasiswa..."
                placeholderTextColor="#8A94A6"
                value={keyword}
                onChangeText={setKeyword}
                autoCapitalize="none"
                clearButtonMode="while-editing"
                accessibilityLabel="Cari nama mahasiswa"
              />
            </View>

            <Text style={styles.sectionTitle}>Komponen InfoCard</Text>
            <InfoCard
              title="Menyelesaikan tugas UTS"
              status="selesai"
              onPress={() => alert('Detail: Tugas UTS telah selesai.')}
            />
            <InfoCard
              title="Mengembangkan aplikasi mobile"
              status="proses"
              onPress={() => alert('Detail: Pengembangan aplikasi masih berlangsung.')}
            />

            <View style={styles.directoryHeader}>
              <Text style={styles.sectionTitle}>Daftar Mahasiswa</Text>
              <Text style={styles.count}>{mahasiswaFiltered.length} data</Text>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyTitle}>Data tidak ditemukan!</Text>
            <Text style={styles.emptySubtitle}>Coba gunakan kata kunci nama yang lain.</Text>
          </View>
        }
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F4F7FB' },
  list: { flex: 1 },
  content: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 32 },
  eyebrow: { color: '#5D6B82', fontSize: 11, fontWeight: '800', letterSpacing: 1.4 },
  heading: { marginTop: 8, fontSize: 30, fontWeight: '800', color: '#17243A' },
  subtitle: { marginTop: 7, marginBottom: 20, color: '#68758A', fontSize: 14, lineHeight: 20 },
  searchBox: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF',
    borderWidth: 1, borderColor: '#E1E7F0', borderRadius: 14,
    paddingHorizontal: 14, marginBottom: 22, minHeight: 52,
  },
  searchIcon: { color: '#65748B', fontSize: 25, marginRight: 10 },
  searchInput: { flex: 1, color: '#17243A', fontSize: 15, paddingVertical: 12 },
  sectionTitle: { color: '#17243A', fontSize: 17, fontWeight: '800', marginBottom: 12 },
  directoryHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 },
  count: { color: '#65748B', fontSize: 12, fontWeight: '700', marginBottom: 12 },
  studentCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF',
    borderRadius: 14, borderWidth: 1, borderColor: '#E5EAF2', padding: 14,
  },
  avatar: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: '#E6EEFF',
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  avatarText: { color: '#315BC7', fontSize: 17, fontWeight: '800' },
  studentInfo: { flex: 1 },
  studentName: { color: '#17243A', fontSize: 15, fontWeight: '700' },
  studentProdi: { color: '#68758A', fontSize: 13, marginTop: 4 },
  emptyBox: { alignItems: 'center', backgroundColor: '#FFFFFF', padding: 24, borderRadius: 14, marginTop: 4 },
  emptyTitle: { color: '#17243A', fontWeight: '800', fontSize: 15 },
  emptySubtitle: { color: '#68758A', marginTop: 6, textAlign: 'center', fontSize: 13 },
});
