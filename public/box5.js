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
          id: 'may',
          text: 'Galaxies begin to cluster together to form galaxy clusters and superclusters .',
          attachTo: {
            element: '.calendar-box:nth-child(5)',
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
          id: 'june',
          text: 'The Milky Way develops its spiral arms and structure, continuing to evolve.',
          attachTo: {
            element: '.calendar-box:nth-child(6)',
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
          id: 'july',
          text: 'The first stars within our galaxy begin to form.',
          attachTo: {
            element: '.calendar-box:nth-child(7)',
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
          id: 'august',
          text: 'The region of space where our solar system will form becomes a protoplanetary disk.',
          attachTo: {
            element: '.calendar-box:nth-child(8)',
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
          id: 'september',
          text: 'The solar system forms from a collapsing cloud of gas and dust, with the Sun at its center. Earth forms on September 14, and the earliest forms of life appear on September 25.',
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
        
    
    
    
    
    
    
    document.getElementById('box5').addEventListener('click', function() {
        tour.start();
      });
    });