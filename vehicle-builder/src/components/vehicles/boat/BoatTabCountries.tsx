import { Heading, List, Spinner } from '@contentful/f36-components'
import { useContentfulCountries } from '../../../hooks/useContentfulCountries'

const BoatTabCountries = () => {
  const { countries, loading, error } = useContentfulCountries()

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <Heading fontSize='fontSizeL' marginBottom='spacingM'>
        Allowed Countries to sail to
      </Heading>
      {countries.length === 0 ? (
        <div>No countries available</div>
      ) : (
        <List>
          {countries.map((country) => (
            <List.Item key={country.code}>{country.name}</List.Item>
          ))}
        </List>
      )}
    </>
  )
}

export default BoatTabCountries
