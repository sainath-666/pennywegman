import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      name: 'Web Development',
      description:
        'Custom web applications built with modern technologies and best practices.',
      price: 2999,
      icon: '🌐',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Security Implementation',
        '24/7 Support',
      ],
    },
    {
      id: 2,
      name: 'Mobile Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android.',
      price: 3999,
      icon: '📱',
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Analytics Integration',
      ],
    },
    {
      id: 3,
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      price: 1999,
      icon: '☁️',
      features: [
        'AWS/Azure/GCP Setup',
        'Database Migration',
        'Auto-scaling Configuration',
        'Backup & Recovery',
        'Cost Optimization',
      ],
    },
    {
      id: 4,
      name: 'Data Analytics',
      description:
        'Turn your data into actionable insights with advanced analytics.',
      price: 2499,
      icon: '📊',
      features: [
        'Data Visualization',
        'Predictive Analytics',
        'Real-time Dashboards',
        'Custom Reports',
        'Machine Learning Integration',
      ],
    },
    {
      id: 5,
      name: 'Consulting',
      description:
        'Strategic technology consulting to transform your business.',
      price: 4999,
      icon: '💼',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'Process Optimization',
        'Team Training',
        'Ongoing Support',
      ],
    },
    {
      id: 6,
      name: 'Maintenance & Support',
      description:
        'Ongoing maintenance and technical support for your applications.',
      price: 999,
      icon: '🔧',
      features: [
        '24/7 Monitoring',
        'Bug Fixes & Updates',
        'Performance Tuning',
        'Security Patches',
        'Emergency Support',
      ],
    },
  ];
}
