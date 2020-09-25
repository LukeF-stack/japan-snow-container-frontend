import React, { useState, useEffect } from "react";
import "../App.css";
import DestinationNavTabs from "../components/DestinationNavTab.jsx";
import { Switch, Route } from "react-router-dom";
import DestinationInfo from "../components/DestinationInfo";
import DestinationResorts from "../components/DestinationResorts";
import DestinationPhotos from "../components/DestinationPhotos";
import DestinationReviews from "../components/DestinationReviews";
import DestinationFlights from "../components/DestinationFlights";

function DestinationPage({ match }) {
  useEffect(() => {
    generatePageContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [destination, setDestination] = useState({});

  const generatePageContent = async () => {
    try {
      const response = await fetch(
        `https://dsbn3.sse.codesandbox.io/api/destinations/${match.params.id}`
      );
      const destination = await response.json();
      setDestination(destination);
      //console.log(destination);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1 className="page-title">{destination.title}</h1>
      <DestinationNavTabs match={match} />
      <Switch>
        <Route path="/destinations/:id/info">
          <DestinationInfo
            description={destination.description}
            island={destination.island}
          />
        </Route>
        <Route exact path="/destinations/:id/resorts">
          <DestinationResorts match={match} />
        </Route>
        <Route exact path="/destinations/:id/photos">
          <DestinationPhotos />
        </Route>
        <Route exact path="/destinations/:id/reviews">
          <DestinationReviews />
        </Route>
        <Route exact path="/destinations/:id/flights">
          <DestinationFlights />
        </Route>
      </Switch>
    </div>
  );
}

export default DestinationPage;
