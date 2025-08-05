import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RegistrationStep {
  number: number;
  title: string;
  description: string;
}

interface VotingMethod {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

interface ImportantDate {
  date: string;
  title: string;
  description: string;
}

interface Resource {
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-to-vote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-to-vote.component.html',
})
export class HowToVoteComponent {
  registrationSteps: RegistrationStep[] = [
    {
      number: 1,
      title: 'Check Eligibility',
      description:
        'Verify you meet the age and residency requirements for your state.',
    },
    {
      number: 2,
      title: 'Gather Documents',
      description:
        "Have your driver's license, social security number, or other valid ID ready.",
    },
    {
      number: 3,
      title: 'Register Online',
      description:
        "Visit your state's official voter registration website or use our secure portal.",
    },
    {
      number: 4,
      title: 'Confirm Registration',
      description: 'Receive confirmation and check your polling location.',
    },
  ];

  eligibilityRequirements: string[] = [
    'Be a U.S. citizen',
    'Be at least 18 years old on Election Day',
    "Meet your state's residency requirements",
    'Not be currently serving a felony sentence',
  ];

  votingMethods: VotingMethod[] = [
    {
      title: 'In-Person Voting',
      description:
        'Cast your ballot at your designated polling place on Election Day.',
      icon: '🏛️',
      details: [
        'Find your polling location',
        'Bring valid photo ID',
        'Follow COVID-19 safety guidelines',
        'Polls open 7 AM - 8 PM',
      ],
    },
    {
      title: 'Early Voting',
      description:
        'Vote in person before Election Day at designated early voting locations.',
      icon: '📅',
      details: [
        'Available 2-4 weeks before Election Day',
        'Multiple locations available',
        'Same voting equipment as Election Day',
        'Shorter wait times',
      ],
    },
    {
      title: 'Mail-In Voting',
      description: 'Request and return your ballot by mail (where available).',
      icon: '📮',
      details: [
        'Request ballot 30 days in advance',
        'Return by Election Day',
        'Track your ballot online',
        'Postage provided in most states',
      ],
    },
  ];

  importantDates: ImportantDate[] = [
    {
      date: 'Oct 15',
      title: 'Voter Registration Deadline',
      description: 'Last day to register for November election',
    },
    {
      date: 'Oct 20',
      title: 'Early Voting Begins',
      description: 'In-person early voting starts',
    },
    {
      date: 'Nov 3',
      title: 'Election Day',
      description: 'Polls open 7 AM - 8 PM',
    },
    {
      date: 'Nov 10',
      title: 'Results Certification',
      description: 'Official results announced',
    },
  ];

  resources: Resource[] = [
    {
      title: 'Voter ID Requirements',
      description:
        'Learn what identification you need to bring to the polls in your state.',
    },
    {
      title: 'Polling Location Finder',
      description: 'Find your nearest polling place and get directions.',
    },
    {
      title: 'Sample Ballots',
      description: 'Preview your ballot and research candidates and issues.',
    },
    {
      title: 'Voter Rights Guide',
      description: 'Know your rights and what to do if you encounter problems.',
    },
  ];
}
