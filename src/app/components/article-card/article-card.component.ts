import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {
  articles = [
    { author: 'By Claire Robinson', imageUrl: '../../../assets/images/image-currency.jpg', title: 'Receive money in any currency with no fees', description: 'The world is getting smaller and  we’re becoming more mobile. So why should you be forced to only receive money in a single...'},
    { author: 'By Claire Robinson', imageUrl: '../../../assets/images/image-restaurant.jpg', title: 'Treat yourself without worrying about money', description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...'},
    { author: 'By Claire Robinson', imageUrl: '../../../assets/images/image-plane.jpg', title: 'Take your digital card wherever you go', description: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you...'},
    { author: 'By Claire Robinson', imageUrl: '../../../assets/images/image-confetti.jpg', title: 'Our invite-only Beta accounts are now live', description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...'},
  ];

}
