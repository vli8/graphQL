import React, { useCallback } from "react";
import { gql } from "@apollo/client";
import client from "../graphQL/apolloClient";

//This component uses client.query for basic understanding
//Component HomepageV2 will use useQuery which is recommended
const Homepage = () => {
  const getStudents = useCallback(async () => {
    const result = await client.query({
      query: gql`
        query {
          getStudents {
            firstName
          }
        }
      `
    });
    console.log(result);
    //mutation example:
    // mutation{
    //     addStudents(firstName:"Victor", lastName:"Li", email:"ejkef@gmail.com"){
    //       firstName
    //     }
    //   }
  });
  getStudents();
  return <div>hello world!</div>;
};

export default Homepage;
