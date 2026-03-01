import { useEffect, useState } from 'react'

export const useContentfulCountries = () => {
  const [countries, setCountries] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID
        const token = import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN

        if (!spaceId || !token) {
          setError('Variáveis de ambiente não configuradas')
          setLoading(false)
          return
        }

        const response = await fetch(
          `https://cdn.contentful.com/spaces/${spaceId}/entries?content_type=countries`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        )

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()
        const countryList = data.items[0]?.fields?.countryList?.items || []
        setCountries(countryList)
      } catch (err) {
        console.error('Erro ao buscar países:', err)
        setError(
          `Erro ao buscar países: ${err instanceof Error ? err.message : JSON.stringify(err)}`
        )
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])
  return { countries, loading, error }
}
