import axios from "axios";
import React from "react";
import serverURL from "../URL/serverURL";

var monthList = [
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

function getDate(dbsDate) {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  let todayDate = date <= 9 ? "0" + date : date;
  let currMonth = month <= 9 ? "0" + month + 1 : month;
  let currYear = new Date().getFullYear();

  let today = `${currYear}-${currMonth}-${todayDate}`; //Today Date

  // Work with dbsDate
  const onlyDate = dbsDate.split("T");
  let [yearNum, monthNum, dateNum] = onlyDate[0].split("-");

  console.log(onlyDate[0]);
  console.log(today);
  const day =
    today === onlyDate[0] ? "Today" : `${dateNum} ${monthList[monthNum - 1]}`;
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

export default function Programs({ allData, scrollToContact }) {
  const [programData, setProgramData] = React.useState([]);

  async function fetchProgramData() {
    try {
      const res = await axios.get(serverURL + "api/schedule");
      setProgramData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchProgramData();
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

          <button className="btn_outline" onClick={scrollToContact}>
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
