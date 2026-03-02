import { Heading, List, Spinner, Caption, Box } from '@contentful/f36-components'
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
      <Heading fontSize='fontSizeL' marginBottom='none'>
        Allowed Countries to sail to
      </Heading>
      <Box marginBottom='spacingXl'>
        <Caption>This list comes from Contentful, it's of type Countries</Caption>
      </Box>
      {countries.length === 0 ? (
        <Caption>No countries available</Caption>
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
