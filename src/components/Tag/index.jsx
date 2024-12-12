const tagVariants = {
    green: {
        bgColor: "#C7FFC9",
        color: "#008605",
    },
    blue: {
        bgColor: "#BCE6FF",
        color: "#005E97",
    },
    purple: {
        bgColor: "#F3D9FF",
        color: "#712893",
    },
    orange: {
        bgColor: "#FFD8D8",
        color: "#932828",
    },
};

/**
 * Tag component
 * @param {Object} props
 * @param {'green' | "blue" | "purple" | "orange"} [props.variant] - color variants for tag
 * @param {string} text - text for tag
 * @returns {React.ReactNode}
 */
export function Tag({ variant, text }) {
    const { color, bgColor } = tagVariants[variant ?? "blue"];
    return (
        <div
            className=" font-medium rounded-full px-2 md:px-3 py-1 md:py-2 text-[8px] leading-4 md:text-xs "
            style={{ backgroundColor: bgColor, color }}
        >
            {text}
        </div>
    );
}
