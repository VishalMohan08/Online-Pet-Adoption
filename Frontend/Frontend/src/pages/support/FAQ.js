import React from 'react';
import {
  QuestionMarkCircleIcon,
  HeartIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

const faqData = [
  {
    question: 'How can I adopt a pet?',
    answer:
      'To adopt a pet, simply browse our available pets, choose the one that steals your heart, and click on the "Adopt Now" button. Fill out the adoption application form, and our team will get in touch with you for the next steps.',
    icon: HeartIcon,
  },
  {
    question: 'What is the adoption process?',
    answer:
      `Our adoption process is straightforward. Once you apply to adopt a pet, our team will review your application. If approved, we'll arrange a meet-and-greet with the pet. After a successful meeting, you can finalize the adoption and bring your new furry friend home!`,
    icon: HeartIcon,
  },
  {
    question: 'Where are you located?',
    answer:
      'We are located at Coimbatore. You can visit our adoption center during our business hours to meet our pets in person and learn more about our adoption process.',
    icon: LocationMarkerIcon,
  },
  {
    question: 'Do you offer any support after adoption?',
    answer:
      'Yes, we provide post-adoption support to ensure a smooth transition for you and your new pet. Our team is available to answer any questions or concerns you may have after adoption.',
    icon: QuestionMarkCircleIcon,
  },
];

export default function FAQ() {
  return (
    <>
        <NavBar />
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Get Informed</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are some common questions and answers to help you navigate the pet adoption process.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {faqData.map((faq, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <faq.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
