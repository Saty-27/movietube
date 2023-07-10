import React,{useState} from 'react'
import Carousel from '../../../component/carousel/Carousel';
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../component/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
      setEndpoint(tab === "Movie" ? "movie" : "tv");
  };

  return (
      <div className="carouselSection">
          <ContentWrapper>
              <span className="carouselTitle">Popular's Here</span>
              <SwitchTabs data={["Movies", "TV'Shows"]} onTabChange={onTabChange} />
          </ContentWrapper>
          <Carousel data={data?.results} loading={loading} 
          endpoint={endpoint}
          />
      </div>
  );
};

export default Popular;