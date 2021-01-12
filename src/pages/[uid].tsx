import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

import { Client } from "@utils/prismic";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "sm-resolver";

const Page: NextPage = (props) => <SliceZone {...props} resolver={resolver} />;

// Fetch content from prismic
export const getStaticProps: GetStaticProps = useGetStaticProps({
  client: Client(),
  uid: ({ params }) => params.uid,
});

export const getStaticPaths: GetStaticPaths = useGetStaticPaths({
  client: Client(),
  type: "page",
  fallback: true, // process.env.NODE_ENV === 'development',
  formatPath: ({ uid }) => ({ params: { uid } }),
});

export default Page;
