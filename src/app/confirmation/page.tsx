'use client';
import React from 'react';
import space from '../../../public/space.png'
import lucky from '../../../public/lucky.jpeg'
import Image from 'next/image';
import Link from 'next/link';

export default function ConfirmationPage({ location, startDate, services }) {
  // Mock data - replace this with actual data or API fetch
  const mockListings = [
    {
      id: 1,
      imageUrl: space,
      name: 'John Doe',
      rating: '5',
      price: '50',
      services: ['Bartender'],
    },
    {
      id: 2,
      imageUrl: lucky,
      name: 'John Jones',
      rating: '4',
      price: '20',
      services: ['DJ'],
    },
    {
      id: 3,
      imageUrl: space,
      name: 'John Jane',
      rating: '3',
      price: '10',
      services: ['Catering'],
    },
    {
      id: 4,
      imageUrl: space,
      name: 'Rob Doe',
      rating: '5',
      price: '500',
      services: ['Event Planner'],
    },
    {
      id: 5,
      imageUrl: space,
      name: 'Rob Jones',
      rating: '4.8',
      price: '100',
      services: ['DJ'],
    },
    {
      id: 6,
      imageUrl: space,
      name: 'Ray Doe',
      rating: '5',
      price: '30',
      services: ['DJ'],
    },
    {
      id: 7,
      imageUrl: space,
      name: 'Ray Joe',
      rating: '1',
      price: '90',
      services: ['Event Planner'],
    },
    // More mock listings...
  ];

  const filteredListings = mockListings.filter(listing => {
    const isLocationMatch = !location || listing.name.toLowerCase() === location.toLowerCase();
    const isDateMatch = !startDate || listing.date === startDate.toISOString().split('T')[0];
    const areServicesMatch = !services || services.every((service: string) => listing.services.includes(service));
    return isLocationMatch && isDateMatch && areServicesMatch;
  });

  return (
    <div className="search-list px-12 py-6">
      <div style={{ display: 'flex', gap: '50%' }}>
        <h2 className="text-xl font-semibold mb-4">Complete Booking</h2>
        
      </div>
      <div style={{ display: 'flex', gap: '50%', background:'#fff', padding:'20px', borderRadius:'20px', }}>
        <div>
        <h2 className="text-lg font-semibold pt-12 mb-4">Your Booking Details</h2>
        <p>Dates:</p>
        <p>Attendees:</p>
        <p>Services Booked:</p>
        </div>
      
      <div>
      <h2 className="text-lg font-semibold pt-12 mb-4">Your Pricing Details</h2>
        <p>$250.22 x 5hrs:</p>
        <p>Cleaning Fee:</p>
        <p>Locus Service Fee:</p>
        <p>Professional Service Fee:</p>
        <p>Taxes:</p>
        <p>Total (USD):</p>
        <button className="text-lg font-semibold mb-4">Confirm & Pay</button>
        
      </div>
      </div>
    </div>
  );
};
