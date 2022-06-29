
import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc, HomeSpan , HomeBtn} from './style.js'

function Home() {
    return (
      <HomeSection>
          <div className="container">
              <HomeInformation>
                  <HomeTitle>Islam Elareef</HomeTitle>
                  <HomeInfo>Creative Director</HomeInfo>
                  <HomeDesc>
                      Iam a professional <HomeSpan>UX Designer</HomeSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                  </HomeDesc>
                  <HomeBtn>Let's Begin</HomeBtn>
              </HomeInformation>
          </div>
      </HomeSection>
    );
  }
  
  export default Home;