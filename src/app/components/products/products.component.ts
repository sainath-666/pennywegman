import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Premium Software Suite',
      description:
        'Complete business management solution with advanced analytics and reporting features.',
      price: 299.99,
      image: 'software-suite',
      category: 'Software',
    },
    {
      id: 2,
      name: 'Cloud Storage Pro',
      description:
        'Secure cloud storage with unlimited space and enterprise-grade security.',
      price: 49.99,
      image: 'cloud-storage',
      category: 'Cloud',
    },
    {
      id: 3,
      name: 'Mobile App Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      price: 1999.99,
      image: 'mobile-app',
      category: 'Development',
    },
    {
      id: 4,
      name: 'Data Analytics Platform',
      description:
        'Advanced data analytics and visualization tools for business intelligence.',
      price: 599.99,
      image: 'analytics',
      category: 'Analytics',
    },
    {
      id: 5,
      name: 'Security Bundle',
      description:
        'Comprehensive cybersecurity solution with firewall and threat detection.',
      price: 149.99,
      image: 'security',
      category: 'Security',
    },
    {
      id: 6,
      name: 'Consulting Package',
      description:
        'Expert consulting services for digital transformation and strategy.',
      price: 2999.99,
      image: 'consulting',
      category: 'Services',
    },
  ];
}
