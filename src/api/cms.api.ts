import config from "@config/config"

export async function fetchContent(query: any) {

  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${config.SPACE_ID}/environments/${config.ENVIRONMENT_ID}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${config.CMS_ACCESS_TOKEN}`,
        },
        // throw our query (a string) into the body directly
        body: JSON.stringify({ query }),
      },
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(`There was a problem retrieving entries with the query ${query}`);
    console.error(error);
  }
}