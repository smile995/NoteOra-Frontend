import { NextPage } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: NextPage<PageProps> = ({ params }) => {
  return <div>{params.slug}</div>;
};

export default Page;
