import axios from "axios";
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
    // MAXIMUM 70 CHARACTER FOR PROGRAM TITLE
    programTitle:
      "Meeting with Ministry of Environment for socializing lll ssfs sdfjkkl efsdfo fsdfsdffs ffsdsd ",
    date: `Yesterday`,
    time: `09 : 10 AM`,
  },
  {
    programTitle: "Opening Ceremony of Mohammadpur high school",
    date: `Today`,
    time: `09 : 10 AM`,
  },
  {
    programTitle: "Opening Ceremony of Mohammadpur high school",
    date: `Tommorow`,
    time: `09 : 10 AM`,
  },
  {
    programTitle: "Opening Ceremony of Mohammadpur high school",
    date: `${new Date().getDate() + 2} ${monthName[new Date().getMonth()]}`,
    time: `09 : 10 AM`,
  },
];

const pr = [
  {
    id: 3,
    date: "2022-11-06T17:26",
    description: "Today Meeting",
    created_at: "2022-11-06T05:27:12.000000Z",
    updated_at: "2022-11-06T05:27:12.000000Z",
  },
];

function getDate(dbsDate) {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  let todayDate = date < 9 ? "0" + date : date;
  let currMonth = month < 9 ? "0" + month + 1 : month;
  let currYear = new Date().getFullYear();

  let today = `${currYear}-${currMonth}-${todayDate}`; //Today Date

  // Work with dbsDate
  const onlyDate = dbsDate.split("T");
  let day = "";
  day = today === onlyDate[0] ? "Today" : onlyDate[0];
  return day;
}

function getTime(dbsDate) {
  const showDate = dbsDate.split("T");
  const [hr, min] = showDate[1].split(":");

  const hour = hr < 12 ? hr : hr - 12;
  const amPM = hr < 12 ? "AM" : "PM";

  return `${hour} : ${min}  ${amPM}`;
}

// console.log(getDate());

export default function Programs({ allData }) {
  const [programData, setProgramData] = React.useState([]);

  async function fetchProgramData() {
    try {
      const res = await axios.get(
        "http://koheli.sscquizcontest.com/api/schedule"
      );
      setProgramData(res.data.data);
      // console.log(res.data.data);
      // console.log(programData);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchProgramData();

    // programData.forEach((program) => {
    //   const programObj = {
    //     programTitle: program.description,
    //     date: program.date,
    //     time: program.date,
    //   };

    //   programInfoList.push(programObj);
    // });
    // console.log(programInfoList);
  }, [programData]);

  return (
    <section id="programs">
      <div className="container">
        <div className="section_text">
          <h2>
            {allData?.program_title
              ? allData.program_title
              : "আমার আসন্ন প্রোগ্রামসমুহ"}
          </h2>
          <p>{allData?.program_description}</p>

          <button className="btn_outline">
            {allData?.program_btn_text
              ? allData.program_btn_text
              : "সাক্ষাৎ এর জন্য সময় বুক করুন"}
          </button>
        </div>

        <div className="program_list_container">
          {programData?.map((program, index) => (
            <div
              className={`programInfo ${getDate(program?.date)}`}
              key={index}
            >
              <div className="date_area">
                <p>{getDate(program?.date)}</p>
                <b>{getTime(program?.date)}</b>
              </div>
              <p className="program_title">{program?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
