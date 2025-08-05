import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

interface PressRelease {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
})
export class NewsComponent {
  featuredNews: NewsArticle[] = [
    {
      id: 1,
      title: 'PennyWegman Announces New Community Initiative',
      excerpt:
        'We are excited to launch our new community outreach program aimed at supporting local families and businesses.',
      category: 'Community',
      date: 'October 15, 2024',
    },
    {
      id: 2,
      title: 'Election Day Volunteers Needed',
      excerpt:
        'Join our team of dedicated volunteers to help ensure a smooth and accessible voting experience for all citizens.',
      category: 'Volunteer',
      date: 'October 12, 2024',
    },
  ];

  latestNews: NewsArticle[] = [
    {
      id: 3,
      title: 'Voter Registration Drive Success',
      excerpt:
        'Our recent voter registration drive helped over 500 new voters get registered for the upcoming election.',
      category: 'Voting',
      date: 'October 10, 2024',
    },
    {
      id: 4,
      title: 'Community Fundraiser Results',
      excerpt:
        'Thanks to your generous donations, we raised $25,000 for local food banks and shelters.',
      category: 'Fundraising',
      date: 'October 8, 2024',
    },
    {
      id: 5,
      title: 'New Partnership with Local Schools',
      excerpt:
        "We're partnering with local schools to provide educational resources and civic engagement programs.",
      category: 'Education',
      date: 'October 5, 2024',
    },
    {
      id: 6,
      title: 'Volunteer Recognition Event',
      excerpt:
        'Join us in celebrating our amazing volunteers who make our community programs possible.',
      category: 'Events',
      date: 'October 3, 2024',
    },
    {
      id: 7,
      title: 'Upcoming Town Hall Meeting',
      excerpt:
        'Mark your calendar for our monthly town hall meeting to discuss community issues and solutions.',
      category: 'Events',
      date: 'October 1, 2024',
    },
    {
      id: 8,
      title: 'Holiday Food Drive Launch',
      excerpt:
        'Our annual holiday food drive begins next week. Help us collect food for families in need.',
      category: 'Community',
      date: 'September 28, 2024',
    },
  ];

  pressReleases: PressRelease[] = [
    {
      id: 1,
      title: 'PennyWegman Endorses Local Candidate for City Council',
      excerpt:
        'After careful consideration of all candidates and their platforms, PennyWegman is proud to endorse Sarah Johnson for City Council District 3.',
      date: 'October 14, 2024',
    },
    {
      id: 2,
      title: 'Statement on Recent Voting Rights Legislation',
      excerpt:
        'PennyWegman applauds the recent passage of voting rights legislation that expands access to the ballot box for all eligible voters.',
      date: 'October 11, 2024',
    },
    {
      id: 3,
      title: 'New Executive Director Announced',
      excerpt:
        'We are pleased to announce the appointment of Michael Chen as our new Executive Director, effective November 1, 2024.',
      date: 'October 7, 2024',
    },
  ];
}
