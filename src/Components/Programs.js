import React from "react";

var monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const programList = [
    {
        programTitle: "Meeting with Ministry of Environment for socializing",
        date: `${new Date().getDate()} ${monthName[new Date().getMonth()]}`,
        time: `${
            new Date().getHours(15) < 12
                ? new Date().getHours(15)
                : new Date().getHours(15) - 12
        } : ${new Date().getMinutes()}`,
    },
    {
        programTitle: "Opening Ceremony of Mohammadpur high school",
        date: `${new Date().getDate()} ${monthName[new Date().getMonth()]}`,
        time: `${
            new Date().getHours(15) < 12
                ? new Date().getHours(15)
                : new Date().getHours(15) - 12
        } : ${new Date().getMinutes()}`,
    },
    {
        programTitle: "Opening Ceremony of Mohammadpur high school",
        date: `${new Date().getDate()} ${monthName[new Date().getMonth()]}`,
        time: `${new Date().getHours()} : ${new Date().getMinutes()}`,
    },
    {
        programTitle: "Opening Ceremony of Mohammadpur high school",
        date: `${new Date().getDate()} ${monthName[new Date().getMonth()]}`,
        time: `${new Date().getHours()} : ${new Date().getMinutes()}`,
    },
];

export default function Programs() {
    return (
        <section id="programs">
            <div className="container">
                <div className="section_text">
                    <h2>আমার আসন্ন প্রোগ্রামসমুহ</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                    </p>
                    <button className="btn_outline">
                        সাক্ষাৎ এর জন্য সময় বুক করুন
                    </button>
                </div>

                <div className="program_list_container">
                    {programList.map((program, index) => (
                        <div
                            className={`programInfo ${index === 1 && "latest"}`}
                            key={index}
                        >
                            <div className="date_area">
                                <p>{program.date}</p>
                                <b>{program.time}</b>
                            </div>
                            <p className="program_title">
                                {program.programTitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
