import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  BarChart2,
  Utensils,
  Dumbbell,
  Activity,
  Clock,
  CheckCircle2,
} from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  features = [
    {
      icon: BarChart2,
      title: 'Progress Tracking',
      description:
        'Monitor your fitness journey with detailed analytics and visual progress tracking.',
    },
    {
      icon: Utensils,
      title: 'Meal Planning',
      description:
        'Plan and track your meals with our comprehensive nutrition database and meal logger.',
    },
    {
      icon: Dumbbell,
      title: 'Workout Library',
      description:
        'Access a vast library of exercises and workout routines tailored to your goals.',
    },
    {
      icon: Activity,
      title: 'Health Metrics',
      description:
        'Track vital health metrics and receive personalized insights for improvement.',
    },
    {
      icon: Clock,
      title: 'Goal Setting',
      description:
        'Set and track personalized fitness goals with smart progress monitoring.',
    },
    {
      icon: CheckCircle2,
      title: 'Achievement System',
      description:
        'Stay motivated with our achievement system and milestone tracking.',
    },
  ];
  testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fitness Coach',
      image: 'saraha.jpeg',
      quote:
        "Project Holism has revolutionized how I track my clients' progress. The comprehensive features and intuitive interface make it a joy to use.",
    },
    {
      name: 'Michael Chen',
      role: 'Amateur Athlete',
      image: 'michael.jpg',
      quote:
        "The meal planning and tracking features have helped me stay consistent with my nutrition goals. I've seen remarkable improvements in my performance.",
    },
    {
      name: 'Emma Williams',
      role: 'Yoga Instructor',
      image: 'emma.jpg',
      quote:
        'As someone who focuses on holistic wellness, I love how this platform integrates all aspects of health tracking in one place.',
    },
  ];

  pricingDetails = {
    title: 'Premium Plan',
    price: '9.99',
    period: '/month',
    description: 'Everything you need for your fitness journey',
    features: [
      'Comprehensive meal tracking',
      'Advanced analytics and insights',
      'Custom meal and workout plans',
      'Progress tracking and reports',
      'Priority customer support',
    ],
    buttonText: 'Get Started Now',
    buttonLink: '/auth',
    disclaimer: 'No credit card required • 14-day free trial',
  };

  currentYear: number = new Date().getFullYear();

  productLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Support', href: '#' },
  ];

  companyLinks = [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
  ];

  legalLinks = [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];
}
