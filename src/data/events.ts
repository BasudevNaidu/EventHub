import { images } from '../assets/images';

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  attendees: number;
  category: string;
  location: string;
  price: number;
  image: string;
  description: string;
  speakers: {
    name: string;
    role: string;
    company: string;
    image: string;
  }[];
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Tech Innovation Summit 2024',
    date: '2024-04-15',
    time: '10:00 AM EST',
    attendees: 500,
    category: 'Technology',
    location: 'London, UK',
    price: 299,
    image: images.events.techinnovation,
    description: 'Join us for an immersive virtual experience exploring the latest technological innovations and AI trends.',
    speakers: [
      {
        name: 'Sarah Johnson',
        role: 'CTO',
        company: 'TechCorp',
        image: images.speakers.woman1
      }
    ]
  },
  {
    id: 2,
    title: 'Digital Marketing Masterclass',
    date: '2024-04-20',
    time: '2:00 PM EST',
    attendees: 300,
    category: 'Marketing',
    location: 'New York, USA',
    price: 199,
    image: images.events.digitalmarketing,
    description: 'Master the latest digital marketing strategies and trends.',
    speakers: [
      {
        name: 'Michael Chen',
        role: 'Marketing Director',
        company: 'Growth Co',
        image: images.speakers.man1
      }
    ]
  },
  {
    id: 3,
    title: 'Global Leadership Forum',
    date: '2024-04-25',
    time: '9:00 AM GMT',
    attendees: 400,
    category: 'Leadership',
    location: 'Singapore',
    price: 399,
    image: images.events.gl,
    description: 'Develop essential leadership skills for the modern business landscape.',
    speakers: [
      {
        name: 'Emma Thompson',
        role: 'CEO',
        company: 'Leadership International',
        image: images.speakers.woman2
      }
    ]
  },
  {
    id: 4,
    title: 'UX Design Workshop',
    date: '2024-05-01',
    time: '11:00 AM PST',
    attendees: 200,
    category: 'Design',
    location: 'San Francisco, USA',
    price: 149,
    image: images.events.ux,
    description: 'Learn practical UX design techniques from industry experts.',
    speakers: [
      {
        name: 'David Kim',
        role: 'Design Lead',
        company: 'Creative Labs',
        image: images.speakers.man2
      }
    ]
  },
  {
    id: 5,
    title: 'Startup Success Summit',
    date: '2024-05-05',
    time: '10:00 AM IST',
    attendees: 350,
    category: 'Business',
    location: 'Mumbai, India',
    price: 179,
    image: images.events.bs,
    description: 'Essential strategies for startup growth and success.',
    speakers: [
      {
        name: 'Priya Patel',
        role: 'Founder',
        company: 'StartupBoost',
        image: images.speakers.woman3
      }
    ]
  },
  {
    id: 6,
    title: 'FinTech Revolution Conference',
    date: '2024-05-10',
    time: '9:00 AM GMT',
    attendees: 450,
    category: 'Finance',
    location: 'Frankfurt, Germany',
    price: 299,
    image: images.events.fc,
    description: 'Explore the future of financial technology and digital banking.',
    speakers: [
      {
        name: 'Hans Mueller',
        role: 'FinTech Director',
        company: 'Digital Banking Plus',
        image: images.speakers.man3
      }
    ]
  },
  {
    id: 7,
    title: 'Healthcare Innovation Summit',
    date: '2024-05-15',
    time: '10:00 AM EST',
    attendees: 300,
    category: 'Healthcare',
    location: 'Boston, USA',
    price: 249,
    image: images.events.ai,
    description: 'Discover breakthrough technologies in healthcare and medical research.',
    speakers: [
      {
        name: 'Dr. Lisa Chen',
        role: 'Medical Director',
        company: 'HealthTech Solutions',
        image: images.speakers.woman1
      }
    ]
  },
  {
    id: 8,
    title: 'EdTech Forum 2024',
    date: '2024-05-20',
    time: '1:00 PM GMT',
    attendees: 250,
    category: 'Education',
    location: 'Toronto, Canada',
    price: 149,
    image: images.events.es,
    description: 'The future of education technology and digital learning.',
    speakers: [
      {
        name: 'James Wilson',
        role: 'Education Innovation Lead',
        company: 'EduTech Global',
        image: images.speakers.man1
      }
    ]
  },
  {
    id: 9,
    title: 'AI & Machine Learning Conference',
    date: '2024-05-25',
    time: '10:00 AM CET',
    attendees: 600,
    category: 'Technology',
    location: 'Paris, France',
    price: 399,
    image: images.events.aiml,
    description: 'Deep dive into artificial intelligence and machine learning applications.',
    speakers: [
      {
        name: 'Sophie Martin',
        role: 'AI Research Director',
        company: 'Tech Innovations',
        image: images.speakers.woman2
      }
    ]
  },
  {
    id: 10,
    title: 'Content Marketing Summit',
    date: '2024-06-01',
    time: '11:00 AM BST',
    attendees: 350,
    category: 'Marketing',
    location: 'Manchester, UK',
    price: 179,
    image: images.events.market,
    description: 'Master content creation and distribution strategies.',
    speakers: [
      {
        name: 'Oliver Brown',
        role: 'Content Strategy Director',
        company: 'Content Kings',
        image: images.speakers.man2
      }
    ]
  },
  {
    id: 11,
    title: 'Women in Leadership Forum',
    date: '2024-06-05',
    time: '9:00 AM EST',
    attendees: 400,
    category: 'Leadership',
    location: 'Chicago, USA',
    price: 299,
    image: images.events.le,
    description: 'Empowering women leaders in the modern business world.',
    speakers: [
      {
        name: 'Maria Rodriguez',
        role: 'Executive Director',
        company: 'Women Leaders Network',
        image: images.speakers.woman3
      }
    ]
  },
  {
    id: 12,
    title: 'Product Design Innovation',
    date: '2024-06-10',
    time: '10:00 AM PST',
    attendees: 250,
    category: 'Design',
    location: 'Seattle, USA',
    price: 199,
    image: images.events.web,
    description: 'Latest trends and techniques in product design.',
    speakers: [
      {
        name: 'Alex Turner',
        role: 'Product Design Lead',
        company: 'Design Forward',
        image: images.speakers.man3
      }
    ]
  },
  {
    id: 13,
    title: 'Small Business Growth Summit',
    date: '2024-06-15',
    time: '9:00 AM AEST',
    attendees: 300,
    category: 'Business',
    location: 'Sydney, Australia',
    price: 149,
    image: images.events.web1,
    description: 'Strategies for small business success and growth.',
    speakers: [
      {
        name: 'Sarah Mitchell',
        role: 'Business Growth Expert',
        company: 'Growth Accelerator',
        image: images.speakers.woman1
      }
    ]
  },
  {
    id: 14,
    title: 'Blockchain & Crypto Conference',
    date: '2024-06-20',
    time: '10:00 AM SGT',
    attendees: 450,
    category: 'Finance',
    location: 'Hong Kong',
    price: 349,
    image: images.events.web2,
    description: 'Understanding blockchain technology and cryptocurrency markets.',
    speakers: [
      {
        name: 'William Chang',
        role: 'Blockchain Expert',
        company: 'Crypto Innovations',
        image: images.speakers.man1
      }
    ]
  },
  {
    id: 15,
    title: 'Digital Health Summit',
    date: '2024-06-25',
    time: '9:00 AM CET',
    attendees: 350,
    category: 'Healthcare',
    location: 'Berlin, Germany',
    price: 279,
    image: images.events.web3,
    description: 'Digital transformation in healthcare delivery.',
    speakers: [
      {
        name: 'Dr. Anna Schmidt',
        role: 'Digital Health Director',
        company: 'Health Digital',
        image: images.speakers.woman2
      }
    ]
  },
  {
    id: 16,
    title: 'Future of Learning Conference',
    date: '2024-07-01',
    time: '10:00 AM BST',
    attendees: 300,
    category: 'Education',
    location: 'Edinburgh, UK',
    price: 169,
    image: images.events.web4,
    description: 'Innovative approaches to learning and education.',
    speakers: [
      {
        name: 'Robert Campbell',
        role: 'Education Technology Director',
        company: 'Learning Future',
        image: images.speakers.man2
      }
    ]
  },
  {
    id: 17,
    title: 'Cybersecurity Summit',
    date: '2024-07-05',
    time: '11:00 AM EST',
    attendees: 500,
    category: 'Technology',
    location: 'Washington DC, USA',
    price: 399,
    image: images.events.web5,
    description: 'Latest trends in cybersecurity and threat prevention.',
    speakers: [
      {
        name: 'Jennifer Lee',
        role: 'Security Expert',
        company: 'CyberShield',
        image: images.speakers.woman3
      }
    ]
  },
  {
    id: 18,
    title: 'Social Media Marketing Forum',
    date: '2024-07-10',
    time: '10:00 AM PDT',
    attendees: 400,
    category: 'Marketing',
    location: 'Los Angeles, USA',
    price: 199,
    image: images.events.web6,
    description: 'Mastering social media marketing strategies.',
    speakers: [
      {
        name: 'Carlos Rivera',
        role: 'Social Media Director',
        company: 'Social Success',
        image: images.speakers.man3
      }
    ]
  },
  {
    id: 19,
    title: 'Executive Leadership Summit',
    date: '2024-07-15',
    time: '9:00 AM JST',
    attendees: 300,
    category: 'Leadership',
    location: 'Tokyo, Japan',
    price: 499,
    image: images.events.web7,
    description: 'Strategic leadership skills for executives.',
    speakers: [
      {
        name: 'Takashi Yamamoto',
        role: 'CEO',
        company: 'Global Leaders',
        image: images.speakers.man1
      }
    ]
  },
  {
    id: 20,
    title: 'Web Design Trends 2024',
    date: '2024-07-20',
    time: '10:00 AM CEST',
    attendees: 250,
    category: 'Design',
    location: 'Amsterdam, Netherlands',
    price: 179,
    image: images.events.web8,
    description: 'Latest trends and innovations in web design.',
    speakers: [
      {
        name: 'Lisa van der Berg',
        role: 'Creative Director',
        company: 'Design Dutch',
        image: images.speakers.woman1
      }
    ]
  },
  {
    id: 21,
    title: 'Digital Transformation Forum',
    date: '2024-07-25',
    time: '9:00 AM GMT+1',
    attendees: 400,
    category: 'Business',
    location: 'Stockholm, Sweden',
    price: 299,
    image: images.events.web9,
    description: 'Strategies for successful digital transformation.',
    speakers: [
      {
        name: 'Erik Andersson',
        role: 'Digital Strategy Director',
        company: 'Digital Nordic',
        image: images.speakers.man2
      }
    ]
  },
  {
    id: 22,
    title: 'Investment Strategies Summit',
    date: '2024-08-01',
    time: '10:00 AM EST',
    attendees: 350,
    category: 'Finance',
    location: 'Miami, USA',
    price: 399,
    image: images.events.web10,
    description: 'Modern investment strategies and market analysis.',
    speakers: [
      {
        name: 'Rachel Goldman',
        role: 'Investment Director',
        company: 'Invest Smart',
        image: images.speakers.woman2
      }
    ]
  },
  {
    id: 23,
    title: 'Mental Health in Tech',
    date: '2024-08-05',
    time: '11:00 AM BST',
    attendees: 300,
    category: 'Healthcare',
    location: 'Dublin, Ireland',
    price: 199,
    image: images.events.web11,
    description: 'Supporting mental health in the tech industry.',
    speakers: [
      {
        name: 'Dr. Patrick O\'Brien',
        role: 'Mental Health Expert',
        company: 'Mind Tech',
        image: images.speakers.man3
      }
    ]
  },
  {
    id: 24,
    title: 'Online Learning Innovation',
    date: '2024-08-10',
    time: '9:00 AM AEST',
    attendees: 250,
    category: 'Education',
    location: 'Melbourne, Australia',
    price: 149,
    image: images.events.web12,
    description: 'Innovations in online learning and education.',
    speakers: [
      {
        name: 'Emma Watson',
        role: 'E-Learning Director',
        company: 'EduOnline',
        image: images.speakers.woman3
      }
    ]
  },
  {
    id: 25,
    title: 'Cloud Computing Summit',
    date: '2024-08-15',
    time: '10:00 AM GMT+8',
    attendees: 450,
    category: 'Technology',
    location: 'Seoul, South Korea',
    price: 349,
    image: images.events.web13,
    description: 'Latest trends in cloud computing and infrastructure.',
    speakers: [
      {
        name: 'Min-ho Kim',
        role: 'Cloud Architecture Lead',
        company: 'Cloud Tech Asia',
        image: images.speakers.man1
      }
    ]
  }
];

export const categories = [
  'All Events',
  'Technology',
  'Marketing',
  'Leadership',
  'Design',
  'Business',
  'Finance',
  'Healthcare',
  'Education'
];