// app/my-page/page.tsx

import { GetServerSideProps } from 'next';

interface Data {
  title: string;
  description: string;
}

interface Props {
  data: Data;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch('https://api.example.com/data'); // Replace with your actual data source
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const MyPage: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* Render additional content based on the fetched data */}
    </div>
  );
};

export default MyPage;
