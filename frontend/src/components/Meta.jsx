import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'UrbanMart | Premium Home & Lifestyle',
  description: 'Discover a curated collection of premium home and lifestyle essentials.',
  keywords: 'home decor, lifestyle, accessories, premium goods',
};

export default Meta;
