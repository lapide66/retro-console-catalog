import React, { useMemo } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import {
  groupConsolesByGeneration,
  sortConsolesByYearAndName,
} from '../../../../shared/domain/catalog'
import {
  getGenerationLabel,
  toConsoleViewModel,
} from '../../../../shared/domain/consoleModel'
import { ConsoleListItem } from '../components/ConsoleListItem'

function buildSections(consoles) {
  const groupedConsoles = groupConsolesByGeneration(consoles)

  return Object.entries(groupedConsoles)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([generation, generationConsoles]) => ({
      title: getGenerationLabel(Number(generation)),
      data: sortConsolesByYearAndName(generationConsoles).map((consoleItem) =>
        toConsoleViewModel(consoleItem)
      ),
    }))
}

export function CatalogScreen({ consoles, onSelectConsole }) {
  const sections = useMemo(() => buildSections(consoles), [consoles])

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Camada Mobile</Text>
        <Text style={styles.title}>Retro Console Catalog</Text>
        <Text style={styles.subtitle}>
          Catalogo inicial consumindo a camada compartilhada.
        </Text>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <ConsoleListItem
            item={item}
            onPress={() => onSelectConsole(item.id)}
          />
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: '#64748b',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: '#475569',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0f172a',
    marginTop: 20,
    marginBottom: 12,
  },
})
