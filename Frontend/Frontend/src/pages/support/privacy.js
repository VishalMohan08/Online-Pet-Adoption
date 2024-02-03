import { Divider, Typography } from "antd";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

const { Title, Paragraph, Text } = Typography;

const paragraphStyle = {
  fontSize: "17px",
};

const PrivacyPolicy = () => (
  <>
    <NavBar />
    <div className="m-10 p-8 shadow bg-gray-100">
      <Typography>
        <Title>Privacy Policy</Title>
        <Title style={paragraphStyle}>Last updated: 23/09/2023</Title>
        <Title level={3}>Introduction</Title>
        <Paragraph style={paragraphStyle}>
          We are committed to protecting the privacy of our users. This Privacy
          Policy outlines how we collect, use, disclose, and protect your
          personal information when you use our website or services. By
          accessing or using this website, you consent to the practices
          described in this Privacy Policy.
        </Paragraph>
        <Title level={3}>Information We Collect</Title>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            1. Personal Information :{" "}
          </Text>
          We may collect personal information when you create an account, submit
          adoption applications, or contact us. This may include your name,
          email address, phone number, and postal address.
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            2. User-Generated Content :{" "}
          </Text>
          Any information, photos, or content you voluntarily submit to the
          website, such as pet adoption listings, comments, or reviews, may be
          collected and displayed publicly.
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            3. Automated Information :{" "}
          </Text>
          We may collect non-personal information automatically, including your
          IP address, browser type, operating system, and usage data. We use
          cookies and similar technologies to collect this data.
        </Paragraph>
        <Title level={3}>How We Use Your Information</Title>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            1. Pet Adoption Services :{" "}
          </Text>
          To facilitate the adoption process, contact you regarding adoption
          inquiries, and manage your account.
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            2. Communication :{" "}
          </Text>
          To send you updates, newsletters, and important information related to
          pet adoption or our services.
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            3. Improvement :{" "}
          </Text>
          To analyze user behavior and preferences, improve our website, and
          enhance the user experience.
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            4. Legal Compliance :{" "}
          </Text>
          To comply with legal obligations and protect our rights and interests.
        </Paragraph>
        <Title level={3}>Disclosure of Your Information</Title>
        <Paragraph style={paragraphStyle}>
          We may share your personal information with:
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            1. Pet Shelters and Rescues :{" "}
          </Text>
          To facilitate the adoption process, we may share your information with
          the organizations offering pets for adoption.
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            2. Service Providers :{" "}
          </Text>
          We may use third-party service providers to assist in website
          operations, such as hosting, data analysis, and customer support.
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            3. Legal Compliance :{" "}
          </Text>
          We may disclose information if required by law, regulation, or legal
          process.
        </Paragraph>
        <Title level={3}>Your Choices</Title>
        <Paragraph style={paragraphStyle}>
          You have the following rights regarding your personal information:
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            1. Access :{" "}
          </Text>
          You can access and update your personal information through your
          account settings.
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            2. Opt-Out :{" "}
          </Text>
          You can opt-out of promotional communications by following the
          unsubscribe instructions in our emails.
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          <Text strong style={paragraphStyle}>
            3. Deletion :{" "}
          </Text>
          You can request the deletion of your account and personal information
          by contacting us.
        </Paragraph>
        <Title level={3}>Security</Title>
        <Paragraph style={paragraphStyle}>
          We implement reasonable security measures to protect your personal
          information, but no online method is entirely secure. We cannot
          guarantee the security of your data.
        </Paragraph>
        <Title level={3}>Children's Privacy</Title>
        <Paragraph style={paragraphStyle}>
          Our website is not directed toward children under the age of 13. We do
          not knowingly collect personal information from children. If you
          believe a child has provided us with their information, please
          contact us.
        </Paragraph>
        <Title level={3}>Changes to this Privacy Policy</Title>
        <Paragraph style={paragraphStyle}>
          We may update this Privacy Policy from time to time. The "Last
          updated" date at the beginning of the policy will indicate when
          changes were made. Your continued use of the website after such
          changes constitutes your acceptance of the updated Privacy Policy.
        </Paragraph>
        <Divider />
      </Typography>

    </div>
    <Footer />
  </>
);

export default PrivacyPolicy;
