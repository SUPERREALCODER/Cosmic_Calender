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
          id: 'october',
          text: 'Simple, single-celled organisms dominate the planet. Photosynthesis begins, producing oxygen and changing Earth’s atmosphere.',
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
          text: 'More complex cells with a nucleus appear. Multicellular organisms begin to form.',
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
        
    
    
    
    
    
    
    document.getElementById('box10').addEventListener('click', function() {
        tour.start();
      });
    });