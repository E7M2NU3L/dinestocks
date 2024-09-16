import { Card, CardHeader, CardBody, Image, Button, ButtonGroup } from "@nextui-org/react";
import { FaTruck, FaFileAlt, FaBoxOpen, FaHeadset, FaUserTie } from "react-icons/fa";
import Founder from '../../assets/emman.jpg';
import Cta from "../../components/home/cta";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      <main className="flex-1 py-12">
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold">About Dinestocks</h1>
          <p className="mt-4 max-w-2xl mx-auto">
            Revolutionizing restaurant-vendor relationships with seamless communication and management solutions.
          </p>
        </section>

        {/* Products Section */}
        <section className="container px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-0">
                <h3 className="text-xl font-bold">Communication Hub</h3>
              </CardHeader>
              <CardBody className="flex flex-col items-center">
                <FaHeadset className="h-12 w-12 text-green-500 mb-4" />
                <p>Streamline conversations between restaurants and vendors for efficient collaboration.</p>
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <h3 className="text-xl font-bold">Delivery Tracker</h3>
              </CardHeader>
              <CardBody className="flex flex-col items-center">
                <FaTruck className="h-12 w-12 text-green-500 mb-4" />
                <p>Real-time tracking of deliveries to ensure timely and accurate order fulfillment.</p>
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <h3 className="text-xl font-bold">Inventory Manager</h3>
              </CardHeader>
              <CardBody className="flex flex-col items-center">
                <FaBoxOpen className="h-12 w-12 text-green-500 mb-4" />
                <p>Comprehensive inventory management system for restaurants and vendors.</p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section className="container px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <FaFileAlt className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold">Automated Invoicing</h3>
              <p>Generate and manage invoices automatically, saving time and reducing errors.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUserTie className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold">Restaurant Management</h3>
              <p>Comprehensive tools for efficient restaurant operations and vendor relationships.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaTruck className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold">Vendor Management</h3>
              <p>Streamline vendor processes, from order placement to delivery confirmation.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHeadset className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold">24/7 Support</h3>
              <p>Round-the-clock assistance to ensure smooth operations for all users.</p>
            </div>
          </div>
        </section>

        <section className="text-center py-16  text-slate-800">
          <h2 className="text-3xl font-bold">Ready to revolutionize your restaurant operations?</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Join Dinestocks today and experience seamless communication and management.
          </p>
          <div className="mt-8 space-x-4">
            <ButtonGroup>
            <Button className="bg-slate-800 text-white hover:text-slate-100 hover:bg-slate-900 font-bold">Get Started</Button>
            <Button color="success" variant="solid">Contact Sales</Button>
            </ButtonGroup>
          </div>
        </section>

        {/* Team Section */}
        <section className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600">
            At Jehr Tech Solutions, we pride ourselves on delivering innovative and tailored solutions to our clients. Led by our dedicated founder, we are committed to excellence and client satisfaction in the SaaS industry. 
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: "Emmanuel A",
                role: "CEO & Founder",
                image: Founder,
                description: "As the CEO & Founder of Jehr Tech Solutions, Emmanuel A. brings a wealth of experience and passion for technology to the company. With a vision to revolutionize SaaS solutions, Emmanuel leads the team with dedication and expertise.",
              },
            ].map((member) => (
              <Card key={member.name} className="max-w-xs shadow-sm rounded-lg overflow-hidden border border-gray-200">
                <CardBody className="flex flex-col items-center p-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mb-4 border-4 border-gray-300"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-lg text-gray-500 mb-4">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Jehr Tech Solutions?</h3>
          <p className="text-lg text-gray-600">
            Our commitment to innovation, client-focused approach, and dedication to excellence set us apart. Whether you're looking for cutting-edge SaaS solutions or personalized tech support, we strive to exceed your expectations and deliver results that drive your success.
          </p>
        </div>
      </section>
      </main>
      {/* CTA Section */}
      <Cta />
    </div>
  );
}
