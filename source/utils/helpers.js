import moment from 'moment';

export const getDuration = pastDate => {
  // Get the current year
  const currentYear = moment().year();

  // Get the year of the past date
  const pastYear = moment(pastDate).year();

  // Get the duration in minutes, hours, and days based on elapsed time
  const duration = moment.duration(moment().diff(moment(pastDate)));

  if (duration.asMinutes() < 1) {
    // Display in seconds if less than 1 minute ago
    return Math.floor(duration.asSeconds()) + ' seconds ago';
  } else if (duration.asHours() < 1) {
    // Display in minutes if less than 1 hour ago
    return Math.floor(duration.asMinutes()) + ' minutes ago';
  } else if (duration.asDays() < 1) {
    // Display in hours if less than 1 day ago
    return Math.floor(duration.asHours()) + ' hours ago';
  } else if (duration.asDays() < 7) {
    // Display in days if less than 7 days ago
    return Math.floor(duration.asDays()) + ' days ago';
  } else {
    // Check if the year of past date is the current year
    if (pastYear === currentYear) {
      // Display the date in "DD MMM" format if it's the current year
      var formattedDate = moment(pastDate).format('DD MMM');
      return formattedDate;
    } else {
      // Display the full date in "DD MMM YY" format if it's not the current year
      var formattedDate = moment(pastDate).format('DD MMM YY');
      return formattedDate;
    }
  }
};
