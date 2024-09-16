import { Button, Card, CardBody, CardHeader, Input, Textarea } from '@nextui-org/react'
import { useState } from 'react'
import { FaFacebook, FaLinkedin, FaMailBulk, FaMapPin, FaPhone, FaTwitter } from 'react-icons/fa'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card className='p-4 shadow-sm border border-slate-300'>
            <CardHeader className='flex flex-col justify-start'>
              <h1 className='text-3xl md:text-4xl font-normal text-slate-800 tracking-tight'>About Dinestocks</h1>
              <p className='text-sm md:text-lg font-normal tracking-tighter'>
                Dinestocks is your all-in-one B2B solution for restaurant management. We provide tools for communication, delivery tracking, automated invoicing, inventory management, and streamlined procedures for both restaurants and vendors.
              </p>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <FaMailBulk className="h-5 w-5 text-muted-foreground" />
                  <span>support@dinestocks.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhone className="h-5 w-5 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaMapPin className="h-5 w-5 text-muted-foreground" />
                  <span>123 Business Ave, Suite 100, San Francisco, CA 94107</span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <FaFacebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <FaTwitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
          
          <Card className="mt-8 shadow-sm border border-slate-300 p-4">
            <CardHeader className='flex flex-col'>
              <h1 className='text-3xl md:text-4xl font-normal text-slate-800 tracking-tight'>Our Location</h1>
            </CardHeader>
            <CardBody>
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977907442!2d-122.41941708439202!3d37.77492797975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1652384760121!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardBody>
          </Card>
        </div>
        
        <Card className='shadow-sm border border-slate-300 p-4'>
          <CardHeader className='flex flex-col'>
            <h1 className='text-3xl md:text-4xl font-normal text-slate-800 tracking-tight'>Get in Touch</h1>
            <p className='text-sm md:text-lg font-normal tracking-tighter'>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  rows={5}
                />
              </div>
              <Button variant='solid' color='success' type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}