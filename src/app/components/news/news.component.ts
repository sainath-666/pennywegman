import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerFadeIn, cardHover } from '../../shared/animations';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl?: string;
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
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './news.component.html',
  animations: [fadeInUp, staggerFadeIn, cardHover],
})
export class NewsComponent {
  featuredNews: NewsArticle[] = [
    {
      id: 1,
      title: 'Daily Herald endorses Penny Wegman',
      excerpt:
        "In the race for Kane County Treasurer, Republican challenger Gretchen Butler is highlighting her 25 years of business experience with a promise to cut costs, while Democrat Penny Wegman, the current county auditor, is running on her record of increasing financial transparency and earning awards for her office's innovations.",
      category: 'Community',
      date: 'October 15, 2024',
      imageUrl: '/assets/news1.png',
    },
    {
      id: 2,
      title:
        'Candidate for Kane County Treasurer Penny Wegman receives international award',
      excerpt:
        "Kane County Auditor Penny Wegman won an international award for overhauling the county's credit card (p-card) system. Her reforms secured better financial rebates and improved efficiency by implementing new software and switching vendors for the first time since 2007.",
      category: 'Volunteer',
      date: 'October 12, 2024',
      imageUrl: '/assets/news2.png',

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
  ];
}
