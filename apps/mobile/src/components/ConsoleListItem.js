import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export function ConsoleListItem({ item, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.cardHeader}>
        <Text style={[styles.consoleName, { color: item.consoleNameColor }]}>
          {item.nome}
        </Text>
        <Text style={styles.consoleYear}>{item.ano}</Text>
      </View>
      <Text style={styles.consoleManufacturer}>{item.fabricante}</Text>
      <Text style={styles.consoleHint}>Toque para ver detalhes</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 6,
  },
  consoleName: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
  },
  consoleYear: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748b',
  },
  consoleManufacturer: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 10,
  },
  consoleHint: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0f172a',
  },
})
