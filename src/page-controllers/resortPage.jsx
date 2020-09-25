import React, { useEffect, useState } from "react";
import "../App.css";
import ResortNavTabs from "../components/ResortNavTab";
import { Switch, Route } from "react-router-dom";
import ResortInfo from "../components/ResortInfo.jsx";
import ResortPhotos from "../components/ResortPhotos.jsx";
import ResortReviews from "../components/ResortReviews.jsx";
import ResortBookings from "../components/ResortBookings.jsx";

function ResortPage({ match }) {
  useEffect(() => {
    generatePageContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [resort, setResort] = useState({});
  const generatePageContent = async () => {
    try {
      const response = await fetch(
        `https://dsbn3.sse.codesandbox.io/api/resorts/${match.params.id}`
      );
      const resort = await response.json();
      setResort(resort);
      //console.log(resort);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1 className="page-title">{resort.title}</h1>
      <ResortNavTabs match={match} />
      <Switch>
        <Route path="/resorts/:id/info">
          <ResortInfo description={resort.description} />
        </Route>
        <Route path="/resorts/:id/photos">
          <ResortPhotos />
        </Route>
        <Route path="/resorts/:id/reviews">
          <ResortReviews />
        </Route>
        <Route path="/resorts/:id/bookings">
          <ResortBookings />
        </Route>
      </Switch>
    </div>
  );
}

export default ResortPage;
