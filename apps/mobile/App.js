import React, { useMemo, useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { getAllConsoles } from '../../shared/data/catalogData'
import { getConsoleById } from '../../shared/domain/catalog'
import { CatalogScreen } from './src/screens/CatalogScreen'
import { ConsoleDetailScreen } from './src/screens/ConsoleDetailScreen'

const consolesData = getAllConsoles()

export default function App() {
  const [selectedConsoleId, setSelectedConsoleId] = useState(null)

  const selectedConsole = useMemo(() => {
    if (!selectedConsoleId) {
      return null
    }

    return getConsoleById(consolesData, selectedConsoleId) ?? null
  }, [selectedConsoleId])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {selectedConsole ? (
        <ConsoleDetailScreen
          consoleItem={selectedConsole}
          onBack={() => setSelectedConsoleId(null)}
        />
      ) : (
        <CatalogScreen
          consoles={consolesData}
          onSelectConsole={(consoleId) => setSelectedConsoleId(consoleId)}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
})
