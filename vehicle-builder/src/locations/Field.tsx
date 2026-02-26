import { Paragraph } from '@contentful/f36-components';
import { FieldAppSDK } from '@contentful/app-sdk';
import { useSDK } from '@contentful/react-apps-toolkit';
import { Tabs } from '@contentful/f36-components';
import { Select, FormControl } from '@contentful/f36-components';
import { useState, useEffect } from 'react';

const Field = () => {
  const sdk = useSDK<FieldAppSDK>();
  const [vehicleType, setVehicleType] = useState('car');
  const [fuelType, setFuelType] = useState('petrol');

  useEffect(() => {
  sdk.window.startAutoResizer();
}, [sdk.window]);

  /*
     To use the cma, access it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = sdk.cma;
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  return (
    <>
    <Paragraph>Hello Entry Field Component (from field) (AppId: {sdk.ids.app})</Paragraph>

    <FormControl>
        <FormControl.Label>Vehicle Type</FormControl.Label>

        <Select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <Select.Option value="car">Car</Select.Option>
          <Select.Option value="boat">Boat</Select.Option>
          <Select.Option value="bus">Bus</Select.Option>
        </Select>
      </FormControl>

      {vehicleType === 'car' && (
        <FormControl style={{ marginTop: '16px' }}>
          <FormControl.Label>Fuel Type</FormControl.Label>

          <Select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
          >
            <Select.Option value="petrol">Petrol</Select.Option>
            <Select.Option value="diesel">Diesel</Select.Option>
            <Select.Option value="electric">Electric</Select.Option>
          </Select>
        </FormControl>
      )}

     <Tabs>
        <Tabs.List>
          <Tabs.Tab panelId="basic" >Basic</Tabs.Tab>
          <Tabs.Tab panelId="engine">Engine</Tabs.Tab>
          <Tabs.Tab panelId="legal">Legal</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel id="basic">
          Basic info content
        </Tabs.Panel>

        <Tabs.Panel id="engine">
          Engine content
        </Tabs.Panel>

        <Tabs.Panel id="legal">
          Legal content
        </Tabs.Panel>
      </Tabs>
    </>
  )
};

export default Field;
