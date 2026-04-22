import React from 'react'
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native'

export function GenerationChips({ options, value, onChange }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {options.map((option) => {
        const isActive = option.value === value

        return (
          <Pressable
            key={option.value}
            onPress={() => onChange(option.value)}
            style={[styles.chip, isActive ? styles.chipActive : styles.chipInactive]}
          >
            <Text
              style={[
                styles.chipText,
                isActive ? styles.chipTextActive : styles.chipTextInactive,
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingRight: 20,
  },
  chip: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
  },
  chipActive: {
    backgroundColor: '#0f172a',
    borderColor: '#0f172a',
  },
  chipInactive: {
    backgroundColor: '#ffffff',
    borderColor: '#e2e8f0',
  },
  chipText: {
    fontSize: 12,
    fontWeight: '800',
  },
  chipTextActive: {
    color: '#ffffff',
  },
  chipTextInactive: {
    color: '#475569',
  },
})
