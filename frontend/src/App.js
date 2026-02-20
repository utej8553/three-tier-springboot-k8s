import { useState } from 'react'
const API_URL = 'http://backend:8080/api/demo'
function App() {
  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState([])
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    setSuccessMessage('')
    setErrorMessage('')

    if (!inputValue.trim()) {
      setErrorMessage('Please enter a value before saving.')
      return
    }

    setIsSaving(true)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ demo: inputValue.trim() }),
      })

      if (!response.ok) {
        throw new Error(`Save failed with status ${response.status}`)
      }

      setSuccessMessage('Saved successfully!')
      setInputValue('')
    } catch (error) {
      setErrorMessage(error.message || 'Something went wrong while saving.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleLoadData = async () => {
    setSuccessMessage('')
    setErrorMessage('')
    setIsLoading(true)

    try {
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error(`Load failed with status ${response.status}`)
      }

      const data = await response.json()
      setItems(Array.isArray(data) ? data : [])
      setSuccessMessage('Data loaded successfully!')
    } catch (error) {
      setErrorMessage(error.message || 'Something went wrong while loading data.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f7fa',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          backgroundColor: '#ffffff',
          padding: '24px',
          borderRadius: '10px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <h2 style={{ margin: 0, textAlign: 'center' }}>Demo Frontend</h2>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text"
          style={{
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #d0d7de',
            fontSize: '14px',
          }}
        />

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handleSave}
            disabled={isSaving}
            style={{
              flex: 1,
              padding: '10px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: '#2563eb',
              color: '#ffffff',
            }}
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>

          <button
            onClick={handleLoadData}
            disabled={isLoading}
            style={{
              flex: 1,
              padding: '10px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: '#0f766e',
              color: '#ffffff',
            }}
          >
            {isLoading ? 'Loading...' : 'Load Data'}
          </button>
        </div>

        {successMessage && (
          <p style={{ margin: 0, color: '#166534', fontSize: '14px' }}>{successMessage}</p>
        )}

        {errorMessage && (
          <p style={{ margin: 0, color: '#b91c1c', fontSize: '14px' }}>{errorMessage}</p>
        )}

        <ul style={{ margin: '8px 0 0', paddingLeft: '20px' }}>
          {items.map((item) => (
            <li key={item.id} style={{ marginBottom: '6px' }}>
              {item.id}: {item.demo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
