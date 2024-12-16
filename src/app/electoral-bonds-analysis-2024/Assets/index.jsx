import { Tag } from "antd";

const color = {
    CONTRACT: "blue",
    DONATION: "orange",
    RAID: "green",
    AWARD: "red",
    ELECTION: "purple",
};

function domain_from_url(url) {
    var result;
    var match;
    if (
        (match = url.match(
            /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
        ))
    ) {
        result = match[1];
        if ((match = result.match(/^[^\.]+\.(.+\..+)$/))) {
            result = match[1];
        }
    }
    return result;
}

export const ElectoralDataColumn = [
    {
        title: "Event Type",
        dataIndex: "event_type",
        width: 130,
        render: (record) => (
            <>
                <Tag key={record} color={color[record]}>
                    {record}
                </Tag>
            </>
        ),
    },
    {
        title: "Date",
        dataIndex: "date",
        width: 150,
        render: (record) => (
            <>
                {new Date(record).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
            </>
        ),
    },
    {
        title: "Description",
        dataIndex: "description",
        width: 150,
        render: (record, text) => (
            <>
                {record}
                {text?.donation_amount && (
                    <span className="md:text-xl px-2">
                        ₹ {text?.donation_amount / 10000000} Crore
                    </span>
                )}
                {text?.link && (
                    <div>
                        <a href={text?.link} target="blank" className="text-blue-400">
                            {text?.link.replace(/.+\/\/|www.|\..+/g, "")}
                        </a>
                    </div>
                )}
            </>
        ),
    },
];
