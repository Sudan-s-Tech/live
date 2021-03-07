import Axios from "axios";
import { useState, useEffect } from "react";

const AIRTABLE_URI = `https://api.airtable.com/v0/${process.env.REACT_APP_APPROVED_BASE}/approved?maxRecords=300&view=Grid%20view`;

const useTracks = () => {
  const [repos, setRepos] = useState([]);
  const token = process.env.REACT_APP_AIRTABLE_API_KEY;

  const getTracks = async () => {
    let res = await Axios({
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      url: AIRTABLE_URI
    });

    let { data } = res;
    let P = Promise.all(
      data.records.map(async (el) => {
        let d = {
          title: el.fields.title,
          image: el.fields.youtube_poster[0].url,
          name: el.fields.speaker,
          designation: el.fields.designation,
          date: el.fields.date,
          time: el.fields.time_ist,
          youtube: el.fields.youtube_link
        };
        return d;
      })
    );

    let temp_repo = await P;

    setRepos(temp_repo);
  };

  useEffect(() => {
    getTracks();
  }, []);

  return repos;
};

export { useTracks };
