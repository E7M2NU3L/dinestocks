import { Accordion, AccordionItem, Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import {FaCheck} from 'react-icons/fa';
import Cta from "../../components/home/cta"

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for small restaurants just getting started",
      features: [
        "Basic inventory management",
        "Simple invoice generation",
        "Up to 5 vendor connections",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "$299",
      description: "Ideal for growing restaurants with multiple vendors",
      features: [
        "Advanced inventory management",
        "Automated invoicing",
        "Unlimited vendor connections",
        "Priority email and chat support",
        "Delivery tracking",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large restaurant chains and franchises",
      features: [
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "On-site training",
        "Advanced analytics and reporting",
      ],
    },
  ]

  const faqItems = [
    {
      question: "What is Dinestocks?",
      answer: "Dinestocks is a comprehensive B2B application designed for restaurants to streamline communication, track deliveries, automate invoicing, manage inventory, and handle various restaurant and vendor-side management procedures.",
    },
    {
      question: "How does the pricing work?",
      answer: "We offer three main tiers: Starter, Pro, and Enterprise. Pricing is based on the features and level of support included. The Starter and Pro plans have fixed monthly prices, while the Enterprise plan is customized to your specific needs.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll have immediate access to the new features. When downgrading, the change will take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for our Starter and Pro plans. This allows you to explore the features and determine which plan best suits your needs before committing.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "Our support varies by plan. The Starter plan includes email support, the Pro plan adds priority email and chat support, and the Enterprise plan includes 24/7 phone support and a dedicated account manager.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-8 w-full max-w-md mx-auto">
      <h1 className="text-4xl font-bold">Pricing Plans</h1>
      <p className="text-lg font-normal tracking-tighter">Choose the best pricing plan for your business</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {pricingTiers.map((tier, index) => (
          <Card key={index} className={index === 1 ? "border-primary shadow-lg" : ""}>
            <CardHeader className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{tier.name}</h1>
              <p className="text-sm md:text-xl font-light tracking-tighter">{tier.description}</p>
            </CardHeader>
            <CardBody>
              <p className="text-3xl font-bold mb-4">{tier.price}<span className="text-sm font-normal">/month</span></p>
              <ul className="space-y-2">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <FaCheck className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white hover:text-slate-100">{index === 2 ? "Contact Sales" : "Get Started"}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto mb-16">
        {faqItems.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index} aria-label={item.question} title={item.question}>
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>

      <Cta />
    </div>
  )
}