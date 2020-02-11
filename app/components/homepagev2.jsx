import React, { useEffect, useCallback } from "react";
import { gql, useQuery } from "@apollo/client";

const HomepageV2 = () => {
  const GET_CAMPUSES = gql`
    query {
      getCampuses {
        name
        description
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_CAMPUSES);
  if (loading) {
    return <div> HomepageV2 </div>;
  }
  if (error) {
    return <div>Error in HomepageV2</div>;
  }
  console.log(data);
  return (
    <div>
      <h1> Success in HomepageV2</h1>
      {data.getCampuses.map(campus => (
        <h2 key={campus.name}>campus: {campus.name}</h2>
      ))}
    </div>
  );
};

export default HomepageV2;
