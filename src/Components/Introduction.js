import axios from "axios";
import React from "react";
import Introduction_Image from "../Assets/images/Introduction_Image.jpg";

export default function Introduction() {
  const [aboutData, setAboutData] = React.useState(null);

  async function fetchAboutData() {
    try {
      const response = await axios.get(
        "http://koheli.sscquizcontest.com/api/home/page-data"
      );
      setAboutData(response.data.data);
    } catch (error) {
      //
    }
  }

  React.useEffect(() => {
    fetchAboutData();
  }, [aboutData]);

  return (
    <section id="introduction">
      <img src={Introduction_Image} alt="Introduction_Image" />
      <img
        src={`http://koheli.sscquizcontest.com/api/home/page-data/${aboutData?.about_img}`}
        alt="Introduction_Image"
      />

      <div className="introduction_text">
        <h2>আমার পরিচিতি</h2>
        <p>
          স্বাধীনতার আগ থেকে বঙ্গবন্ধুর নির্দেশে উত্তরবঙ্গ জুরে ছাত্র রাজনীতির
          নেতৃত্বদানকারী বীর মুক্তিযোদ্ধা আলহাজ্ব অধ্যাপক আব্দুল কুদ্দুস ছিলেন
          তৎকালীন বৃহত্তর রাজশাহী অঞ্চলের ছাত্র সংগ্রাম পরিষদের সভাপতি। নৌকা
          প্রতীকে ৬ বারের বিজয়ী সংসদ সদস্য। বর্তমানে নাটোর জেলা আ.লীগের সভাপতি
          রাজনীতিতে বাবার বিচক্ষনতা তাঁকে অনুপ্রাণীত করতো। মূলত বাবার মাধ্যমেই
          তাঁর রাজনীতির হাতেখড়ি। খুব ছোট থেকেই বাবাকে অনুসরন করে রাজনীতিতে
          প্রবেশ করেন। <br /> মাধ্যমিক, উচ্চ মাধ্যমিক ও বিশ্ববিদ্যালয় সবখানেই
          রাজনৈতিক গুরুত্বপূর্ণ পদে অধিষ্ঠিত ছিলেন এই মুক্তি। শিক্ষা জীবনে তিনি
          রাজশাহী কলেজ থেকে উচ্চ মাধ্যমিক ও রাজশাহী বিশ্ববিদ্যালয় থেকে সমাজ কর্ম
          বিষয়ে অনার্সসহ এমএসএস ডিগ্রী লাভ করেন। পরবর্তীতে ঢাকা প্রাইম
          বিশ্ববিদ্যালয় থেকে এলএলবি ও এলএলএম ডিগ্রী লাভ করেন। রাজনীতির পাশাপাশি
          বর্তমানে তিনি ঢাকা জজকোর্টে ওকালতি পেশার সাথে জরিত রয়েছেন। নারী
          নেতৃত্বে মুক্তি: বাংলাদেশ যুব মহিলা লীগের কেন্দ্রীয় কমিটির যুগ্ম
          সাধারণ সম্পাদক পরবর্তীতে সহসভাপতি নির্বাচিত হওয়ার পর যুব মহিলা
          লীগের...
        </p>
        <b>কোহেলী কুদ্দুস মুক্তি</b>
        <span>অ্যাডভোকেট</span>
      </div>
    </section>
  );
}
