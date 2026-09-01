// "2026-08-31T14:45"
export function formatDate(isoString) {
    const formatted = isoString.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });

    console.log(formatted);
    return formatted;
}

export function formatTime(isoString) {
    const formatted = isoString.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    console.log(formatted);
    return formatted;
}

export function formatTemp(celsius) {
    return `${celsius}° C`
}