import plus from '../assets/images/icon_plus.svg'
import minus from '../assets/images/icon_minus.svg'
import { useState } from 'react'
import React from 'react'



const faqs = [
    {
        question: 'How do I book a service on the app?',
        answer: `To book a service, simply browse the available service categories, select your desired service, choose a date and time that works for you, and confirm your booking. It's that easy!`,
        open: false
    },
    {
        question: 'Are the service providers on the app vetted and trustworthy?',
        answer: `Yes, we carefully vet and verify all service providers to ensure they meet our quality and reliability standards. You can book with confidence knowing that you'll receive excellent service.`,
        open: false
    },
    {
        question: 'Can I cancel or reschedule a booking?',
        answer: 'Yes, you can cancel or reschedule your booking through the app. Please check the specific cancellation and rescheduling policies for each service provider, as they may vary.',
        open: false
    },
    {
        question: 'Is my payment information secure on the app?',
        answer: 'Absolutely. We prioritize the security of your payment information. Our app employs industry-standard security measures to safeguard your data and ensure a safe and secure payment process.',
        open: false
    },
    {
        question: `What if I'm not satisfied with the service I received?`,
        answer: `What if I'm not satisfied with the service I received?`,
        open: false
    },
    {
        question: 'How can I become a service provider on the app?',
        answer: `If you're interested in becoming a service provider, you can apply through the app or our website. We welcome reliable and skilled professionals to join our network of service providers.`,
        open: false
    },
    {
        question: 'What regions or areas does the app serve?',
        answer: 'Our app currently serves Delhi, Banglore, Noida, Hydrabad. We are continuously expanding our services to reach more locations and provide convenience to a wider audience.',
        open: false
    },
    {
        question: 'How can I contact customer support if I have further questions?',
        answer: `You can reach our dedicated customer support team via email at support@serveU.com or by calling our support hotline at 989993454. We're here to assist you with any questions or concerns you may have.`,
        open: false
    }
]


const FAQ = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(faq.open || false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='FAQ-card'>
            <dt aria-expanded={!isOpen ? 'true' : 'false'} onClick={toggle}>
                {faq.question}
                {
                    isOpen
                        ? <img
                            src={minus}
                            alt='Collapse'
                            width="20"
                            height="20"
                        />
                        : <img
                            src={plus}
                            alt='Expand'
                            width="20"
                            height="20"
                        />
                }

            </dt>
            <dd className={!isOpen ? 'faq-hidden' : undefined}>{faq.answer}</dd>
        </div>
    )
}


const FAQs = () => {
    return (
        <dl>
            {faqs.map((faq, index) => (
                <FAQ faq={faq} key={index} />
            ))}
        </dl>
    )
}

export default FAQs

