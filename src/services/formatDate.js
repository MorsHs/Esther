// format-date.js
export const FormatDate = {
    normalizeForApi(date) {
        if (!date) return "";

        // Already Date object
        if (date instanceof Date) {
            if (isNaN(date.getTime())) return "";
            return FormatDate.toYMD(date);
        }

        const str = String(date).trim();

        // UI format: DD/MM/YYYY
        if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(str)) {
            const [d, m, y] = str.split("/");
            return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
        }

        // Already YYYY-MM-DD
        if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(str)) {
            const [y, m, d] = str.split("-");
            return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
        }

        // Last resort: try parsing
        const parsed = new Date(str);
        if (!isNaN(parsed.getTime())) {
            return FormatDate.toYMD(parsed);
        }

        return "";
    },

    toYMD(date) {
        if (!date) return null;
        const [year, month, day] = date.split("/");
        const dateObj = new Date(year, month - 1, day);
        // Use local date methods to avoid timezone conversion issues
        const localYear = dateObj.getFullYear();
        const localMonth = dateObj.getMonth() + 1; // getMonth() is 0-based
        const localDay = dateObj.getDate();
        return `${localYear}-${String(localMonth).padStart(2, '0')}-${String(localDay).padStart(2, '0')}`;
    },

    toLongFormat(date) {
        if (!date || isNaN(new Date(date).getTime())) return "";
        const d = new Date(date);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return d.toLocaleDateString("en-US", options);
    },

    /** ✦ Returns "Month DD, YYYY: hh:mm:ss AM/PM" format like "July 5, 2025: 6:25:32 PM" */
    toLongFormatWithTime(date) {
        if (!date || isNaN(new Date(date).getTime())) return "";
        const d = new Date(date);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        };
        return d.toLocaleString("en-US", options);
    },

    toAMPM(time) {
        if (!time) return '';
        const parts = time.split(':');
        let hours = parseInt(parts[0], 10);
        let minutes = parseInt(parts[1] || '0', 10);
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
    },

    toHIS() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}:${seconds} `;
    },

    /**
     * Formats an array of dates as a range (start - end) regardless of consecutiveness
     * @param {Array} schedules - Array of schedule objects with 'date' property
     * @returns {string} Formatted date range
     */
    formatDateRange(schedules) {
        if (!schedules || !Array.isArray(schedules) || schedules.length === 0) return '';

        // Extract and sort dates
        const dates = schedules
            .map(schedule => schedule.date)
            .filter(date => date)
            .map(date => new Date(date))
            .filter(date => !isNaN(date.getTime()))
            .sort((a, b) => a - b);

        if (dates.length === 0) return '';
        if (dates.length === 1) return this.toLongFormat(dates[0]);

        // Always show as range: first date - last date
        const startDate = dates[0];
        const endDate = dates[dates.length - 1];

        // If same month and year
        if (startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()) {
            return `${startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${endDate.getDate()}, ${endDate.getFullYear()}`;
        }
        // If same year but different months
        else if (startDate.getFullYear() === endDate.getFullYear()) {
            const startFormat = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            const endFormat = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            return `${startFormat} - ${endFormat}`;
        }
        // Different years
        else {
            const startFormat = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            const endFormat = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            return `${startFormat} - ${endFormat}`;
        }
    },
};