export const formatRideDate = (dateString: string) => {
  const now = new Date();
  const today = now.toDateString();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000).toDateString();
  
  if (dateString.includes('Today')) {
    return { label: 'Today', time: dateString.split(', ')[1], isToday: true };
  }
  if (dateString.includes('Tomorrow')) {
    return { label: 'Tomorrow', time: dateString.split(', ')[1], isTomorrow: true };
  }
  
  // For other dates, just return as is
  const parts = dateString.split(', ');
  return { label: parts[0], time: parts[1] || '', isRegular: true };
};

export const getTimeUntilRide = (dateString: string) => {
  if (dateString.includes('Today')) {
    return "Starting Soon";
  }
  if (dateString.includes('Tomorrow')) {
    return "Tomorrow";
  }
  return "Upcoming";
};

export const getRideTypeEmoji = (type: string) => {
  const emojis = {
    "Breakfast": "🌅",
    "Adventure": "🏔️",
    "Scenic": "🌄",
    "Long Distance": "🛣️",
    "Night Ride": "🌙"
  };
  return emojis[type as keyof typeof emojis] || "🏍️";
};
