import { Component } from '@angular/core';
import { FaqQuestion } from '../model/faq-question';

@Component({
  selector: 'btb-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  questions = [
    { question: "How many flowers do I need?", answer: "There's something called the 'three rose rule'. The petal volume of three standard roses is what is needed to create one bracelet, or 12 beads. If you plan on using flowers that don't have a high petal volume per bloom, then you will need to bring a lot more of said flowers compared to other flowers that have a high petal-to-bloom ratio. There is no such thing as too many flowers - the more you bring, the more I have to work with!" } as FaqQuestion,
    { question: "What kind of flowers can I bring you?", answer: "If you're interested in a shadowbox, any flower will do! Otherwise, any flower with petals will suffice. In both cases fresh flowers yield the best results, so getting them to me as soon as you can is essential." } as FaqQuestion,
    { question: "What about old flowers?", answer: "This is where it gets tricky. Old and wilted flowers don't produce very colorful beads - they will turn out muted and brownish. I HIGHLY suggest you get the flowers to me as soon as you can, within 48 hours being ideal. Anything quicker than that is a bonus! The fresher the flower, the more vibrant the bead." } as FaqQuestion,
    { question: "What if I can't get them to you within 48 hours?", answer: "Then you need to take steps to preserve them. Cut the stems 1 inch from the bottom, place the stems in water and them stick them all in the fridge. Cutting the stems and keeping them cold slows the wilting process and helps keep the flowers fresh." } as FaqQuestion,
    { question: "What if I'm long distance?", answer: "You can overnight them. As stated previously, if you can't ship the flowers the day of, then do what you can to preserve them by cutting the stems and stickin them in the fridge with some water. Before you mail them, prepare the blooms by wrapping the stems in a damp paper towell and placing the stems in a baggie to keep the moisture in. When you send them please let me know so I can be on the lookout for them and get started on them as soon as they arrive." } as FaqQuestion,
    { question: "How long does it take to recieve my order?", answer: "It typically takes me about 3 to 5 weeks to complete an order, but it also depends on how many orders I have. Wedding season is busy for me, so expect it to take a bit longer during that time. I do my absolute best to be efficient, and if you are having to wait a little longer than you expected please be patient -- I'm a one woman show!" } as FaqQuestion,
    { question: "What happens if something breaks?", answer: "Bring me the broken item and I will fix it free of charge." } as FaqQuestion,
    { question: "What type of occasion would I want to use your serrvices for?", answer: "Any one that you see fit. Weddings, birthdays, funerals, birth of a child, proms, homecomings, anniversaries, graduations. I've done them all." } as FaqQuestion,
    { question: "Is there a limit on the number of bead colors I can have?", answer: "Of course not. You're welcome to bring as many different colored flowers as you'd like. More colors means more combinations for your items and more outfits you can wear your jewelry with." } as FaqQuestion,
    { question: "What if I want something made that isn't on the website?", answer: "I'm more than happy to try and create your vision! We can talk about all the details and I will see if it can be done." } as FaqQuestion,
  ];
}
