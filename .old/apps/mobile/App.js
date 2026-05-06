import React, { useEffect, useState } from 'react'
import { BackHandler } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { CatalogScreen } from './src/screens/CatalogScreen'
import { ConsoleDetailScreen } from './src/screens/ConsoleDetailScreen'

export default function App() {
  const [selectedConsoleId, setSelectedConsoleId] = useState(null)

  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (!selectedConsoleId) {
        return false
      }

      setSelectedConsoleId(null)
      return true
    })

    return () => subscription.remove()
  }, [selectedConsoleId])

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {selectedConsoleId ? (
        <ConsoleDetailScreen
          consoleId={selectedConsoleId}
          onBack={() => setSelectedConsoleId(null)}
        />
      ) : (
        <CatalogScreen onSelectConsole={(consoleId) => setSelectedConsoleId(consoleId)} />
      )}
    </SafeAreaProvider>
  )
}
