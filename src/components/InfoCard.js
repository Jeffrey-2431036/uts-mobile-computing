import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const selesai = status.toLowerCase() === 'selesai';
  const statusLabel = selesai ? 'Selesai' : 'Dalam Proses';

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.badge, selesai ? styles.badgeDone : styles.badgeProgress]}>
          <Text style={[styles.badgeText, selesai ? styles.textDone : styles.textProgress]}>
            {statusLabel}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`Lihat detail ${title}`}
      >
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5EAF2',
    padding: 16,
    marginBottom: 12,
  },
  topRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 },
  title: { flex: 1, color: '#17243A', fontSize: 15, fontWeight: '700', lineHeight: 21 },
  badge: { borderRadius: 20, paddingHorizontal: 10, paddingVertical: 6 },
  badgeDone: { backgroundColor: '#DDF7E8' },
  badgeProgress: { backgroundColor: '#FFF0D9' },
  badgeText: { fontSize: 11, fontWeight: '800' },
  textDone: { color: '#187443' },
  textProgress: { color: '#B76508' },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#315BC7',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: 14,
  },
  buttonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 13 },
});
