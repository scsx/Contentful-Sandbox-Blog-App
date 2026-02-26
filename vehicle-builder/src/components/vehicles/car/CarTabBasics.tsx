import { Heading, FormControl, Select, Checkbox } from '@contentful/f36-components'
import { CAR_BASICS } from '../../../utils/constants'

type CarTabBasicsProps = {
  selectedBasics?: { deposit?: boolean; carAndBusTolls?: boolean; carTier?: string }
  onBasicsChange: (basics: any) => void
}

const CarTabBasics = ({ selectedBasics = {}, onBasicsChange }: CarTabBasicsProps) => {
  return (
    <>
      <Heading fontSize='fontSizeL' marginBottom='spacingM'>
        Car Basics
      </Heading>

      {/* Deposit */}
      <FormControl style={{ marginBottom: '16px' }}>
        <Checkbox
          id='deposit'
          name='deposit'
          isChecked={selectedBasics.deposit || false}
          onChange={() => onBasicsChange({ ...selectedBasics, deposit: !selectedBasics.deposit })}>
          {CAR_BASICS.deposit.name} - €{CAR_BASICS.deposit.price}
        </Checkbox>
      </FormControl>

      {/* Tolls */}
      <FormControl style={{ marginBottom: '16px' }}>
        <Checkbox
          id='tolls'
          name='tolls'
          isChecked={selectedBasics.carAndBusTolls || false}
          onChange={() =>
            onBasicsChange({ ...selectedBasics, carAndBusTolls: !selectedBasics.carAndBusTolls })
          }>
          {CAR_BASICS.tolls.name} - €{CAR_BASICS.tolls.price}
        </Checkbox>
      </FormControl>

      {/* Tier - Select */}
      <FormControl>
        <FormControl.Label>
          <Heading fontSize='fontSizeL' marginBottom='none'>
            {CAR_BASICS.tier.name}
          </Heading>
        </FormControl.Label>

        <Select
          value={selectedBasics.carTier || 'standard'}
          onChange={(e) => onBasicsChange({ ...selectedBasics, carTier: e.target.value })}>
          {Object.entries(CAR_BASICS.tier.tiers).map(([key, tier]) => (
            <Select.Option key={key} value={key}>
              {tier.name} - €{tier.price}/day
            </Select.Option>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default CarTabBasics
