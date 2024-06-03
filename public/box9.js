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
          id: 'september',
          text: 'September: The solar system forms from a collapsing cloud of gas and dust, with the Sun at its center. Earth forms on September 14, and the earliest forms of life appear on September 25.',
          attachTo: {
            element: '.calendar-box:nth-child(9)',
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
          id: 'october',
          text: 'October: Simple, single-celled organisms dominate the planet. Photosynthesis begins, producing oxygen and changing Earth’s atmosphere.',
          attachTo: {
            element: '.calendar-box:nth-child(10)',
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
          id: 'november',
          text: 'November: More complex cells with a nucleus appear. Multicellular organisms begin to form.',
          attachTo: {
            element: '.calendar-box:nth-child(11)',
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
          id: 'december',
          text: 'December: Click here to learn more about the recent history of the cosmos.',
          attachTo: {
            element: '.calendar-box:nth-child(12)',
            on: 'bottom'
          },
          buttons: [
            {
              text: 'Move to Next Page',
              action: () => window.location.href = '/december'
            }
          ]
        });
        
        // Start the tour
        
    
    
    
    
    
    
    document.getElementById('box9').addEventListener('click', function() {
        tour.start();
      });
    });