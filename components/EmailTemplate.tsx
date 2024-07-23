import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface IEmailSender {
  name?: string;
  email?: string;
  description?: string;
  contact?: string;
}

const EmailTemplate: React.FC<IEmailSender> = ({
  name,
  email,
  description,
  contact,
}) => {
  const previewText = `Read ${name}'s review`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={{ paddingBottom: '20px' }}>
            <Row>
              <Text style={heading}>From: {name}</Text>
              <Text style={review}>{description}</Text>
              <Text style={paragraph}>
                <b>Sender Email address:</b> {email}
              </Text>
              <Text style={paragraph}>
                <b>How to get in touch:</b> {contact}
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
};

const review = {
  ...paragraph,
  padding: '24px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
};
