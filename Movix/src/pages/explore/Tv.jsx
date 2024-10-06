import ContentWrapper from "../../components/contentWrapper/contentWrapper"

const Tv = () => {
 
    // let location = useLocation();

  return (
    <ContentWrapper>
    <div style={{display:'flex', height:'100vh', alignItems:'center', justifyContent:'center'}}> TV
        <div className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto officiis harum cumque consequatur sed dolorem et atque. Voluptatibus expedita cupiditate minus eius necessitatibus id consequuntur similique quaerat corrupti sed consequatur soluta quam nihil ullam reprehenderit quo, ipsa non fugiat libero praesentium delectus mollitia. Eveniet!</div>
    </div>
    {location}
    </ContentWrapper>
  )
}

export default Tv