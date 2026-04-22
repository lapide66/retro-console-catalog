import React from 'react'
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { toConsoleViewModel } from '../../../../shared/domain/consoleModel'

function DetailRow({ label, value }) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  )
}

export function ConsoleDetailScreen({ consoleItem, onBack }) {
  const consoleViewModel = toConsoleViewModel(consoleItem)

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>Voltar ao catalogo</Text>
      </Pressable>

      <View style={styles.hero}>
        <Text style={styles.generationLabel}>
          {consoleViewModel.generationLabelUppercase}
        </Text>
        <Text
          style={[
            styles.consoleName,
            { color: consoleViewModel.consoleNameColor },
          ]}
        >
          {consoleViewModel.nome}
        </Text>
        <Text style={styles.consoleMeta}>
          {consoleViewModel.fabricante} / {consoleViewModel.ano}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumo</Text>
        <Text style={styles.sectionText}>{consoleViewModel.resumo}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Especificacoes</Text>
        <DetailRow label="CPU" value={consoleViewModel.cpu} />
        <DetailRow label="GPU" value={consoleViewModel.gpu} />
        <DetailRow label="RAM" value={consoleViewModel.ram} />
        <DetailRow label="Midia" value={consoleViewModel.midia} />
        <DetailRow label="Resolucao" value={consoleViewModel.resolucao} />
        <DetailRow label="Peso" value={consoleViewModel.peso} />
        <DetailRow label="Dimensoes" value={consoleViewModel.dimensoes} />
        <DetailRow
          label="Retrocompatibilidade"
          value={consoleViewModel.retrocompatibilidade}
        />
        <DetailRow
          label="Conectividade"
          value={consoleViewModel.conectividade}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mercado</Text>
        <DetailRow
          label="Preco de lancamento"
          value={consoleViewModel.preco_lancamento}
        />
        <DetailRow
          label="Vendas totais"
          value={consoleViewModel.vendas_totais}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Curiosidade no Brasil</Text>
        <Text style={styles.sectionText}>
          {consoleViewModel.curiosidade_no_brasil}
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 32,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#e2e8f0',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0f172a',
  },
  hero: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },
  generationLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748b',
    marginBottom: 8,
  },
  consoleName: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 8,
  },
  consoleMeta: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
  section: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#475569',
  },
  detailRow: {
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748b',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 15,
    lineHeight: 22,
    color: '#334155',
  },
})
