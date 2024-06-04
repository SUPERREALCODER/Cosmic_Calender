document.addEventListener("DOMContentLoaded", function() {

    let tour = new Shepherd.Tour({
        defaultStepOptions: {
              cancelIcon: {
                  enabled: true
              },
              classes: 'shepherd-theme-arrows'
            }
        });
        
       
        
        // Add steps for each month
     
       
        
       
        
       
      
        
       
       
        
        
        
       
        
       
        
        tour.addStep({
          id: 'dec25',
          text: 'First dinosaurs appeared .',
          attachTo: {
            element: '.day:nth-child(27)',
            on: 'bottom'
          },
          buttons: [
            {
              text: 'Next',
              action: tour.next
            }
          ]
        });
        
        tour.addStep({
          id: 'dec26',
          text: 'First mammals.',
          attachTo: {
            element: '.day:nth-child(28)',
            on: 'bottom'
          },
          buttons: [
            {
              text: 'Next',
              action: tour.next
            }
          ]
        });
        
    
        tour.addStep({
            id: 'dec27',
            text: 'Pangae splits .',
            attachTo: {
              element: '.day:nth-child(29)',
              on: 'bottom'
            },
            buttons: [
              {
                text: 'Next',
                action: tour.next
              }
            ]
          });
          
        tour.addStep({
          id: 'dec28',
          text: 'First birds appeared .',
          attachTo: {
            element: '.day:nth-child(30)',
            on: 'bottom'
          },
          buttons: [
            {
              text: 'Next',
              action: tour.next
            }
          ]
        });
    
        tour.addStep({
            id: 'dec29',
            text: 'Dinosaurs at top of food chain .',
            attachTo: {
              element: '.day:nth-child(31)',
              on: 'bottom'
            },
            buttons: [
              {
                text: 'Next',
                action: tour.next
              }
            ]
          });
    
          tour.addStep({
            id: 'dec30',
            text: 'Dinosaurs got extinct .',
            attachTo: {
              element: '.day:nth-child(32)',
              on: 'bottom'
            },
            buttons: [
              {
                text: 'Next',
                action: tour.next
              }
            ]
          });
         
          tour.addStep({
            id: 'dec31',
            text: '10.15 AM : Ape / gibbon divergence .',
            attachTo: {
              element: '.day:nth-child(33)',
              on: 'bottom'
            },
            buttons: [
              {
                text: 'Next',
                action: tour.next
              }
            ]
          });
          tour.addStep({
            id: 'dec31',
            text: '8.10 PM : Human / chimpanzee divergence .',
            attachTo: {
              element: '.day:nth-child(33)',
              on: 'bottom'
            },
            buttons: [
              {
                text: 'Next',
                action: tour.next
              }
            ]
          });
          tour.addStep({
            id: 'dec31',
            text: '10.48 PM : Homo erectus evolves ',
            attachTo: {
              element: '.day:nth-child(33)',
              on: 'bottom'
            },
            buttons: [
              {
                text: 'Move',
                action: tour.next
              }
            ]
          });
          tour.addStep({
            id: 'dec31',
            text: '11.54 PM: Anatomically modern human evolves .',
            attachTo: {
              element: '.day:nth-child(33)',
              on: 'bottom'
            },
            buttons: [
              {
                text: 'Next',
                action: tour.next
              }
            ]
          });
          tour.addStep({
            id: 'dec31',
            text: '11.58 PM : Modern humans migrate out of Africa . ',
            attachTo: {
              element: '.day:nth-child(33)',
              on: 'bottom'
            },
            buttons: [
              {
                text: 'Next',
                action: tour.next
              }
            ]
          });
          tour.addStep({
            id: 'dec31',
            text: '11.59 PM: Neanderthals die out ,megafauna stressed .',
            attachTo: {
              element: '.day:nth-child(33)',
              on: 'bottom'
            },
            buttons: [
              {
                text: 'Next',
                action: tour.next
              }
            ]
          });
          tour.addStep({
            id: 'dec31',
            text: 'Modern civilization makes up about the last 14 seconds of the year.',
            attachTo: {
              element: '.day:nth-child(33)',
              on: 'bottom'
            },
            buttons: [
              {
                text: 'Move',
                action: tour.next
              }
            ]
          });
          tour.addStep({
            id: 'dec31',
            text: 'Everyone you have heard of is in that 14 seconds .',
            attachTo: {
              element: '.day:nth-child(33)',
              on: 'bottom'
            },
            buttons: [
              {
                text: 'Next',
                action: tour.next
              }
            ]
          });
          tour.addStep({
            id: 'dec31',
            text: 'Only 14 seconds!That is our civilization .What is your time frame in this calender ?',
            
            buttons: [
              {
                text: 'Next',
                action: tour.next
              }
            ]
          });
          tour.addStep({
            id: 'dec31',
            text: 'Thankyou ! Have a great day ahead !',
           
            buttons: [
              {
                text: 'End',
                action: tour.next
              }
            ]
          });
        
      
        
        


    document.getElementById('dec25').addEventListener('click', function() {
        tour.start();
      });
    });