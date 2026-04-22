import React from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export function SearchInput({ value, onChange }) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Buscar console..."
        placeholderTextColor="#94a3b8"
        style={styles.input}
      />
      {value ? (
        <Pressable onPress={() => onChange('')} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Limpar</Text>
        </Pressable>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingRight: 72,
    fontSize: 15,
    color: '#0f172a',
  },
  clearButton: {
    position: 'absolute',
    right: 12,
    top: 10,
    bottom: 10,
    justifyContent: 'center',
  },
  clearButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
  },
})
