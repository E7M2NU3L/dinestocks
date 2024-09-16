import { Tabs, Tab } from '@nextui-org/react';
import GettingStarted from './getting-started';
import VendorGuide from './vendor-guide';
import RestaurantGuide from './restaurant-guide';

export default function DocsTabs({ searchTerm }) {
  return (
    <Tabs defaultValue="all">
      <Tab value="all" title="All">
          <GettingStarted />
          <VendorGuide />
          <RestaurantGuide />
      </Tab>
      <Tab value="vendor" title="Vendor">
        <VendorGuide />
      </Tab>
      <Tab value="restaurant" title="Restaurant">
        <RestaurantGuide />
      </Tab>
    </Tabs>
  );
}
