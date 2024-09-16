import { useState } from 'react';
import { Input, Tab, Tabs } from '@nextui-org/react';
import DocsHeader from '../../components/docs/docs-header';
import GettingStarted from '../../components/docs/getting-started';
import VendorGuide from '../../components/docs/vendor-guide';
import RestaurantGuide from '../../components/docs/restaurant-guide';

export default function Docs() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto p-4 min-h-[90vh]">
      <DocsHeader />
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search documentation..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>
      <DocsTabs searchTerm={searchTerm} />
    </div>
  );
}

function DocsTabs({ searchTerm }) {
  return (
    <Tabs defaultValue="all">
      <Tab value="all" title="All">
        <div className="h-[600px] overflow-y-scroll scroll-smooth">
          <GettingStarted />
          <VendorGuide />
          <RestaurantGuide />
        </div>
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