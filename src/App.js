import "./App.css";
// import { Typography } from '@material-ui/core';
import { icons } from "@material-ui/icons";
import Header from "./header/header";
import Card from "./Middel card/Middel card";
import Card2 from "./Middle card2/Middle card2";
import Lowercard from "./lower card/lower card";
import Fristcard from "./frist card/frist card";
import Footer from "./footer/footer";

function App() {
  return (
    <div className="App">
      {/* <h1>Hi Aya in your project </h1> */}
      {/* <Typography variant="h1">
        h1. Heading
</Typography> */}
      <Header />
      <Fristcard />
      <div className="mid-card-cont">
        <Card title="Card Title" imageUrl=" " />
        <Card2 />
        <Card2 />
        <Card title="Card Title" imageUrl=" " />
        <Card2 />
        <Card2 />
        <Card title="Card Title" imageUrl=" " />
        <Card2 />
        <Card2 />
      </div>

      <div className="text-ads">
        Create Your Bazar now for <span>Free</span>
      </div>
      <h1>They Loved it! </h1>

      <div className="lower-card-cont">
        <div class="circle-icon-contianer">
          <p>
            <i class="fas fa-chevron-left"></i>
          </p>
        </div>
        <Lowercard
          Name="Ahmed Ahmed"
          imageUrl="https://csis-website-prod.s3.amazonaws.com/s3fs-public/styles/csis_portrait/public/contributor/5Man_0.jpg?itok=jymq2AU7"
        />
        <Lowercard
          Name="Mohammed Mohammed"
          imageUrl="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859"
        />
        <Lowercard
          Name="Nour Nour"
          imageUrl="https://www.s-models.com/wp-content/uploads/2020/01/web_alena-kar_smodels_fotobyklaudiatot-5-250x250.jpg"
        />
        <Lowercard
          Name="Aya Aya"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfiE2dIRY98rHw8M3IyG9iAiTEx8S3vQ8ErQ&usqp=CAU"
        />
        <div class="circle-icon-contianer">
          <p>
            <i class="fas fa-chevron-right"></i>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
