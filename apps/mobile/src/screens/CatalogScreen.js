import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCatalog } from '../hooks/useCatalog'
import { ConsoleListItem } from '../components/ConsoleListItem'
import { GenerationChips } from '../components/GenerationChips'
import { SearchInput } from '../components/SearchInput'

export function CatalogScreen({ onSelectConsole }) {
  const {
    generation,
    generationOptions,
    search,
    sections,
    setGeneration,
    setSearch,
    totalResults,
  } = useCatalog()

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Camada Mobile</Text>
        <Text style={styles.title}>Retro Console Catalog</Text>
        <Text style={styles.subtitle}>
          Busca e filtro usando a mesma regra de negocio da web.
        </Text>
      </View>

      <View style={styles.controls}>
        <SearchInput value={search} onChange={setSearch} />
        <GenerationChips
          options={generationOptions}
          value={generation}
          onChange={setGeneration}
        />
        <Text style={styles.resultCount}>
          {totalResults} resultado{totalResults !== 1 ? 's' : ''}
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
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>Nenhum console encontrado</Text>
          </View>
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
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
  controls: {
    gap: 12,
    paddingHorizontal: 20,
    paddingBottom: 8,
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
  resultCount: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#64748b',
    textTransform: 'uppercase',
  },
  emptyState: {
    paddingVertical: 32,
  },
  emptyStateText: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
  },
})
