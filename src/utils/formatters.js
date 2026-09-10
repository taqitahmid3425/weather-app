export function formatDate(isoString) {
    const formatted = isoString.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    });
    return formatted;
}

export function formatTime(isoString) {
    const formatted = isoString.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });
    return formatted;
}

export function formatDay(isoString) {
    return new Date(isoString).toLocaleDateString('en-US', {
        weekday: 'short',
        timeZone: 'UTC',
    });
}
