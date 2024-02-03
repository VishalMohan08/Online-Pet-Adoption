import { Divider, Typography } from "antd";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

const { Title, Paragraph } = Typography;

const paragraphStyle = {
  fontSize: "17px",
};

const TermsAndConditions = () => (
  <>
    <NavBar />
    <div className="m-10 p-8 shadow bg-gray-100">
    <Typography>
    <Title>Terms And Conditions</Title>
      <Title level={3}>Introduction</Title>
      <Paragraph style={paragraphStyle}>
        Welcome to PetAdopt, a platform for connecting pets with loving homes.
        By using this website, you agree to comply with and be bound by the
        following terms and conditions:
      </Paragraph>
      <Title level={3}> 1. Eligibility</Title>
      <Paragraph style={paragraphStyle}>
        - You must be at least 18 years old to use this website.
        <br />- You agree that all information you provide is accurate and
        truthful.
      </Paragraph>
      <Title level={3}> 2. Pet Listings </Title>
      <Paragraph style={paragraphStyle}>
        - Pet listings are provided by individuals and organizations. We do not
        guarantee the accuracy of the information.
        <br />- You are responsible for verifying the information provided by
        pet owners.
      </Paragraph>
      <Title level={3}> 4. Privacy </Title>
      <Paragraph style={paragraphStyle}>
        - Your privacy is important to us. Please review our Privacy Policy for
        details on how we handle your data. owners.
      </Paragraph>
      <Title level={3}>5. Code of Conduct</Title>
      <Paragraph style={paragraphStyle}>
        - You agree to use this website responsibly and treat others with
        respect. - Any abusive or inappropriate behavior will not be tolerated.
        owners.
      </Paragraph>
      <Title level={3}> 6. Disclaimer</Title>
      <Paragraph style={paragraphStyle}>
        - PetAdopt is not responsible for the actions of pet owners, adopters,
        or third parties. - We do not guarantee the health, behavior, or
        condition of any pet listed on the website.
      </Paragraph>
      <Title level={3}>7. Contact</Title>
      <Paragraph style={paragraphStyle}>
        - If you have any questions or concerns, please contact us at
        support@petadopt.com.
      </Paragraph>
      <Divider />
    </Typography>
    </div>
    <Footer />
  </>
);

export default TermsAndConditions;
