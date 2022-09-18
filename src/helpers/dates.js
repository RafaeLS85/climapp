export function getDayName(dateString){   
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(dateString);
    
    return `${days[d.getDay()]} ${d.getDate()} `;       
}

