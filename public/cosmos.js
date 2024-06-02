

let tour = new Shepherd.Tour({
defaultStepOptions: {
      cancelIcon: {
          enabled: true
      },
      classes: 'shepherd-theme-arrows'
    }
});
tour.addStep({
id: 'example-step',
text: 'The concept of a 13-month calendar, such as the International Fixed Calendar, presents an intriguing alternative to the traditional Gregorian calendar. This calendar reform proposal aims to simplify date tracking by standardizing the length of months. Each of the 13 months in this system has exactly 28 days, creating a consistent four-week structure for every month. This uniformity could potentially make planning and scheduling more straightforward, as each month would start on the same day of the week. The additional month, often referred to as "Sol," fits seamlessly into this structure, ensuring the calendar year totals 364 days.However, the transition to a 13-month calendar would involve significant changes and challenges. Cultural and religious traditions deeply rooted in the 12-month Gregorian calendar would need to adapt, potentially causing confusion and resistance. Additionally, practical adjustments in software, business operations, and international coordination would be necessary to accommodate the new system. Despite these hurdles, proponents argue that the benefits of a more logical and consistent calendar structure could outweigh the complexities of implementation, offering a streamlined approach to timekeeping that could simplify many aspects of daily life.',
attachTo: {
element: '#jan',
on: 'right'
},

buttons: [
{
  text: 'Next',
  action: tour.next
}
]
});
tour.start();