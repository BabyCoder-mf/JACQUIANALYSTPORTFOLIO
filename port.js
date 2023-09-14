
        // Get the element with the class "date"
        var dateElement = document.querySelector('.date');

        // Create a new Date object for the current date
        var currentDate = new Date();

        // Format the current date as a string in the desired format
        var formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Update the content of the element with the current date
        dateElement.textContent = formattedDate;
