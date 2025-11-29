import { Location, PillarType, Program, Testimonial } from './types';
import { Activity, Apple, Palette, Heart, MapPin, Calendar, Users, Trophy, Phone, BookOpen, Headphones, Shield, Home } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Programs', path: '/programs' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Locations', path: '/locations' },
  { name: 'Resources', path: '/resources' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const PILLARS: (Program & { type: PillarType, lucideIcon: any })[] = [
  {
    id: 'p1',
    type: PillarType.FITNESS,
    title: 'Fitness',
    description: 'Physical activity as a path to healing. Classes open to all levels, designed to be safe yet effective.',
    icon: 'activity',
    lucideIcon: Activity,
    color: 'bg-brand-red',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p2',
    type: PillarType.NUTRITION,
    title: 'Nutrition',
    description: 'Stabilize blood sugar, reduce cravings, and build community through shared meals and education.',
    icon: 'apple',
    lucideIcon: Apple,
    color: 'bg-brand-green',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p3',
    type: PillarType.CREATIVE_ARTS,
    title: 'Creative Arts',
    description: 'Process over product. Music, writing, and visual arts to express what words cannot.',
    icon: 'palette',
    lucideIcon: Palette,
    color: 'bg-brand-gold',
    image: 'https://images.unsplash.com/photo-1460661619275-dcfcd0f305a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p4',
    type: PillarType.COMMUNITY_SERVICE,
    title: 'Community Service',
    description: 'Shifting perspective from self-focus to contribution. Healing through helping others.',
    icon: 'heart',
    lucideIcon: Heart,
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const LOCATIONS: Location[] = [
  { id: 'slc-main', name: 'SLC Main Gym', address: '1331 S Major St, Salt Lake City, UT', phone: '(801) 410-8988', coordinates: { x: 45, y: 30 }, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'slc-annex', name: 'SLC Creative Annex', address: '1335 S Major St, Salt Lake City, UT', phone: '(801) 410-8988', coordinates: { x: 47, y: 32 }, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'provo', name: 'Provo Location', address: '555 W Center St, Provo, UT', phone: '(801) 875-0603', coordinates: { x: 46, y: 55 }, image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'park-city', name: 'Park City', address: '1776 Park Ave, Park City, UT', phone: '(801) 555-0123', coordinates: { x: 60, y: 28 }, image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 'heber', name: 'Heber City', address: '55 E Center St, Heber City, UT', phone: '(801) 555-0124', coordinates: { x: 62, y: 35 }, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah J.',
    role: 'Member since 2018',
    quote: "Fit2Recover gave me a place to belong when I felt I had nowhere else to go. The fitness classes gave me strength, but the community gave me life.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'Michael R.',
    role: 'Volunteer',
    quote: "Serving here changed my perspective on recovery. It's not just about staying sober; it's about building a life you don't want to escape from.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    name: 'Elena D.',
    role: 'Program Participant',
    quote: "The nutrition classes helped me understand my body in a way I never had before. It's amazing how connected food and mood really are.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

export const IMPACT_STATS = [
  { label: 'Weekly Participants', value: 700, suffix: '+', icon: Users },
  { label: 'Years Serving Utah', value: 10, suffix: '+', icon: Calendar },
  { label: 'Wellness Pillars', value: 4, suffix: '', icon: Activity },
  { label: 'Awards Won', value: 12, suffix: '', icon: Trophy },
];

export const SCHEDULE_DATA = [
  { id: 1, day: 'Monday', time: '06:00 AM', class: 'CrossFit', pillar: 'Fitness', location: 'SLC Main', instructor: 'Coach Mike' },
  { id: 2, day: 'Monday', time: '12:00 PM', class: 'Community Lunch', pillar: 'Nutrition', location: 'SLC Annex', instructor: 'Chef Anna' },
  { id: 3, day: 'Monday', time: '05:30 PM', class: 'Yoga Flow', pillar: 'Fitness', location: 'Provo', instructor: 'Sarah J.' },
  { id: 4, day: 'Monday', time: '07:00 PM', class: 'Music Group', pillar: 'Creative Arts', location: 'SLC Annex', instructor: 'Dave' },
  { id: 5, day: 'Tuesday', time: '07:00 AM', class: 'Bootcamp', pillar: 'Fitness', location: 'Park City', instructor: 'Jen' },
  { id: 6, day: 'Tuesday', time: '06:00 PM', class: 'Meal Prep 101', pillar: 'Nutrition', location: 'SLC Main', instructor: 'Chef Anna' },
  { id: 7, day: 'Wednesday', time: '09:00 AM', class: 'Art Therapy', pillar: 'Creative Arts', location: 'Heber', instructor: 'Lisa' },
  { id: 8, day: 'Wednesday', time: '05:00 PM', class: 'Service Project', pillar: 'Community Service', location: 'SLC Main', instructor: 'Ian' },
  { id: 9, day: 'Thursday', time: '06:00 PM', class: 'Writing Circle', pillar: 'Creative Arts', location: 'Provo', instructor: 'Mark' },
  { id: 10, day: 'Friday', time: '07:00 PM', class: 'Sober Social', pillar: 'Community Service', location: 'SLC Main', instructor: 'Team' },
  { id: 11, day: 'Saturday', time: '09:00 AM', class: 'Community WOD', pillar: 'Fitness', location: 'SLC Main', instructor: 'All Coaches' },
  { id: 12, day: 'Saturday', time: '11:00 AM', class: 'Hiking Group', pillar: 'Fitness', location: 'Park City', instructor: 'Trail Team' },
];

export const RESOURCES = [
  { 
    id: 1, 
    category: 'Crisis', 
    title: '988 Suicide & Crisis Lifeline', 
    description: 'Free, confidential support for people in distress, 24/7.', 
    link: 'tel:988', 
    icon: Phone 
  },
  { 
    id: 2, 
    category: 'Reading', 
    title: 'The Big Book Online', 
    description: 'Read Alcoholics Anonymous literature online for free.', 
    link: '#', 
    icon: BookOpen 
  },
  { 
    id: 3, 
    category: 'Podcast', 
    title: 'Recovery Elevator', 
    description: 'A podcast about life after quitting alcohol.', 
    link: '#', 
    icon: Headphones 
  },
  { 
    id: 4, 
    category: 'Local', 
    title: 'Utah Support Advocates', 
    description: 'Local peer support specialists available to talk.', 
    link: '#', 
    icon: Home 
  },
  { 
    id: 5, 
    category: 'Tool', 
    title: 'Smart Recovery Toolbox', 
    description: 'Worksheets and exercises for self-empowered addiction recovery.', 
    link: '#', 
    icon: Shield 
  },
];

export const TEAM_MEMBERS = [
  { name: 'Ian Acker', role: 'Founder & Executive Director', bio: 'Founded FTR in 2015 to create the community he needed.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Sarah Smith', role: 'Program Director', bio: 'Coordinates all four pillars across our locations.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'David Chen', role: 'Head Coach', bio: 'NSCA Certified trainer specializing in trauma-informed fitness.', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];