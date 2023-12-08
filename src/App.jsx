import styled from "styled-components";
import Pricing from "./components/Pricing";

function App() {
  return (
    <MainContainer>
      <div className="pricing-component">
        <Pricing
          data={[
            { text: "2 yıl boyunca sistem desteği", value: true },
            { text: "7/24 destek hattı", value: false },
            { text: "Uzak sunucu desteği", value: false },
          ]}
          price={2500}
          duration="y"
          currency="₺"
          buttonContent="Üyeliği Başlat"
          subTitle="Bronz Paket"
          priceText="Muhasebe işlemlerinizi Elektra Bilişim ile yapın."
          headerText="Yıllık Paket"
        />
      </div>
      <div className="pricing-component">
        <Pricing
          data={[
            { text: "2 yıl boyunca sistem desteği", value: true },
            { text: "7/24 destek hattı", value: true },
            { text: "Uzak sunucu desteği", value: false },
          ]}
          price={5000}
          duration="y"
          background="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
          shadow="#96e6a1"
          currency="₺"
          buttonContent="Üyeliği Başlat"
          subTitle="Gümüş Paket"
          priceText="Muhasebe işlemlerinizi Elektra Bilişim ile yapın."
          headerText="Yıllık Paket"
        />
      </div>
      <div className="pricing-component">
        <Pricing
          data={[
            { text: "2 yıl boyunca sistem desteği", value: true },
            { text: "7/24 destek hattı", value: true },
            { text: "Uzak sunucu desteği", value: true },
          ]}
          price={10000}
          duration="y"
          background="linear-gradient(to left, #ff0844 0%, #ffb199 100%);"
          shadow="#ffb199"
          currency="₺"
          buttonContent="Üyeliği Başlat"
          subTitle="platinum"
          priceText="Muhasebe işlemlerinizi Elektra Bilişim ile yapın."
          headerText="Yıllık Paket"
        />
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f1ff;

  @media screen and (max-width: 970px) {
    height: 100%;
    flex-direction: column;
    .pricing-component {
      margin: 2rem 0;
    }
  }
`;

export default App;